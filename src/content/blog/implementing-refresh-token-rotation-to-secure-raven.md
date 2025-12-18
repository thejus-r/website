---
title: "Implementing Refresh Token Rotation to secure a web application."
description: "Building a robust authentication system for my web app with Refresh Tokens and Access Tokens"
date: "2025-12-18"
tags: ["react", "typescript", "raven", "react", "typescript", "raven"]
ogImage: "/images/refresh-token-rotation-og-image.png"
published: true
---

> This blog is part of my project called Raven, you can check out the whole project [here](https://github.com/thejus-r/raven)


Authentication is the backbone of secure web application. While JWTs (JSON Web Tokens) are standard, storing them securely is a challenge of its own. The “Access Token + Refresh Token” pattern is the industry standard, but it comes with a risk: what if the Refresh Token gets compromised?

That’s where Refresh Token Rotation comes in.

In this blog, I’ll take you through how I build a robust authentication system that rotates refresh tokens on every use, detects token reuse to prevent attacks, and secures tokens in the database using hashing.

Before diving into code, let's look at the flow.

## The Architecture: How it works

![Auth Flow 2](@assets/images/auth-flow-diagram.png)
* **Login**: User gets a short-lived Access Token (AT) (JSON response) and a long-lived Refresh Token (RT) (HttpOnly Cookie).
* **Access**: The client uses the AT to access protected resources.
* **Expiry**: When the AT expires, the API returns a 401.
* **Rotation**: The client sends the RT to a /refresh endpoint.
* **The Magic**: The server validates the RT, revokes it, issues a new AT and a new RT, and returns them.
* **Security**: If the old RT is used again (e.g., by a thief), the server detects "Token Reuse" and nukes all tokens for that user.

## Server Side Implementation

I have used [HonoJS](https://hono.dev) and [Drizzle ORM](https://orm.drizzle.team) for this example. but the logic applies to any backend.

### 1. Database Schema and Hashing
To increase the security, we store only the hashed refresh token. Thus even if the database is leaked, attackers can’t hijack sessions.

##### Drizzle Schema

```typescript
export const refreshTokens {
    id: text('id').primaryKey(),
    hashedToken: text("hashed_token"),
    isRevoked: boolean("is_revoked").default(false)
    userId: text("user_id"),
    organizationId : text("organization_id"),
    expiresAt: text("expired_at")
    // additional fields can be added for auditing and analytics uses
}
```
### 2. The Refresh Endpoint (Rotation Logic)

Here is the simplified logic for the `/refresh` route.

```typescript
// imports ...
app.get("/refresh", async (c) => {
    const incomingToken = getCookie(c, "refresh_token")

    if (!incomingToken) return res.sendStatus(401)

    // We hash the incoming token to match against the one in DB
    const incomingTokenHash = crypto.createHash('sha256').update(incomingToken).digest('hex')
    
    // Finding the hashed_token from DB
    const foundTokenRecord = await db.query.refreshTokens.findFirst({
        where: eq(refreshTokens.hashedToken, incomingTokenHash )
    })

    // We check for tokenRecord validity
    if (!foundTokenRecord || foundTokenRecord.isRevoked || Date.now() > foundTokenRecord.expiresAt) {
        return res.sendStatus(403)
    }

    // We generate new tokens
    const newAccessToken = generateAccessToken(foundTokenRecord.userId)
    const newRefreshToken = generateRefreshToken()
    const newRefreshTokenHash = crypto.createHash('sha256').update(incomingToken).digest('hex')

    // Save new token to the database
    await db.insert(refreshTokens).values({
        userId: foundToken.userId,
        tokenHash: newRefreshTokenHash,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days
    });

    // We revoke the incoming token
    await db.update(refreshToken)
        .set({ isRevoked: true })
        .where(eq(refreshToken.hashedToken, incomingToken))


    // We set the Cookie with a the new RefreshToken as a HTTP-Only cookie
    setCookie(c, COOKIE_KEY, newRefreshToken, {
        sameSite: "lax",
        httpOnly: true,
        secure: true,
        maxAge: COOKIE_EXPIRY,
    });

    return c.json({ accessToken: newAccessToken })

})

```
## Client Side Implementation
On the client side, you need an interceptor to check every response. We store the access token in React’s memory, to prevent XSS attacks.

### 1. Interceptors
With axios's interceptors we are able to intercept the request and response of every API call, we use this to our advantage by attaching access token to Authorization Header of the outgoing request.

If the request fails with a `401 Unauthorized` status, we try to get a new fresh access token from the `/refresh` end point.

```typescript

// We create an axios global instance, with the abilitiy to set cookies
export const api = axios.create({
    withCredentials: true
})

// Request Interceptor
api.interceptors.request.use((config) => {

    // 'token' is from React's useState
    config.headers.Authorization = 
        token && !config.retry? `Bearer ${token}` : config.headers.Authorization

    return config
})

// Response Interceptor
api.interceptors.response.use(
    (response => response),
    async (error) => {
        const originalRequest = error.config;
        if (error.status === 401 && !originalRequest._retry) {
            const response = await axios.get("/refresh");
            const newAccessToken = response.data.accessToken;

            // We update the accessToken
            setAccessToken(newAccessToken);

            // We retry the same request again with the new accessToken
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            originalRequest._retry = true;

            return api(originalRequest)
        }

        // Still the request fails, we throw an error
        return Promise.reject(error)
    }
)
```

### 2. React Preload Logic

We use the React's `useLayoutEffect` hook to attach the interceptors to the axios instance. This ensure that we intercept the API calls before the react render cycle.
```typescript
export const AuthWrapper = () => {
    const [accessToken, setAccessToken] = useState(undefined)

    useLayoutEffect(() => {
       const requestInterceptor = api.interceptors.request.use((config) => {
        // request interceptor logic ...
       }

       return () => {
        api.interceptors.request.eject(requestInterceptor)
       }

    }, [accessToken])


    useLayoutEffect(() => {
       const responseInterceptor = api.interceptors.response.use(() => {
        // response interceptor logic ...
       }

       return () => {
        api.interceptors.response.eject(responseInterceptor)
       }

    }, [])
}

```

## Token Reuse Detection 
This is the most “hacker proof” part of the implementation, yet the simplest logic, since we are already revoking the use refreshToken while provisioning a new one. We can detech a token reuse by if the incomingToken is already revoked.
```typescript
// ... before generating new token
if (foundTokenRecord.isRevoked) {
    console.warn(
        `SECURITY: Token reuse detected for user ${foundTokenRecord.userId}`,
    )

    // we revoke all the token of the user.
    await db.update(refreshToken)
                .set({ isRevoked: true })
                .where(eq(refreshTokens.userId, foundTokenRecord.userId))

    return c.json({ message: "token reuse detected", }, 401)
}

```


## Summary of Security Gains
By implementing this architecture, we achieved:
- **XSS Protection**: Access Tokens are in memory, not LocalStorage
- **CSRF Protection**: RefreshTokens are `HTTPOnly` and `SameSite` cookies, inaccessible to Javascript.
- **Database Security**: Even if the Auth Database gets dumped, attackers only gets the hashed tokens, not the usable ones.
- **Theft Detection**: The Rotation mechanism acts as a tripwire, catching stolen tokens the moment they are used.

## What's next?
- **Buffered Expiratation**: Currently we have have hard expiration time, we can added a buffer range of time, which we ignore the **Token Reuse**, this improved UX, as the user won't be logged out randomly because of network latency.
- **Token Family**: Grouping refresh tokens based on **IP Address or Device ID** can improve UX, when a token is compromised with revoke the tokens for that family of tokens only.
- **Cron Jobs**: Setting up cron jobs to periodic wiping of used refresh tokens can help to debloat the auth database.

#### Conlusion
Setting this up for [Raven](https://github.com/thejus-r/raven) improved my understanding of Authentication Systems and Securing web applications.

Thankyou!
