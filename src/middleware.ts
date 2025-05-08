import type { NextRequest, MiddlewareConfig } from "next/server";

export function middleware(request: NextRequest) {
  console.log("Ran Middleware", request.url);
}

export const config: MiddlewareConfig = {
  matcher: ["/case-studies/:path"],
};
