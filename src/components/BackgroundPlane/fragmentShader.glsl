#define S(a, b, t) smoothstep(a, b, t)

uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform vec3 uColor4;

uniform vec2 uResolution;
uniform float uRadius;
uniform float uTime;

varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;
varying float vZ;

vec3 colorA = vec3(0.912, 0.191, 0.652);
vec3 colorB = vec3(1.000, 0.777, 0.052);

mat2 Rot(float a)
{
    float s = sin(a);
    float c = cos(a);
    return mat2(c, -s, s, c);
}

vec2 hash(vec2 p) {
    p = vec2(dot(p, vec2(27.1, 3381.17)), dot(p, vec2(12.5, 1283.37)));
    return fract(sin(p) * 24758.5453);
}

float noise(in vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);

    vec2 u = f * f * (3.0 - 2.0 * f);

    float n = mix(mix(dot(-1.0 + 2.0 * hash(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
                dot(-1.0 + 2.0 * hash(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
            mix(dot(-1.0 + 2.0 * hash(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
                dot(-1.0 + 2.0 * hash(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x), u.y);
    return 0.5 + 0.5 * n;
}

void main() {
    vec2 uv = vUv;
    float ratio = uv.x / uv.y;

    vec2 tuv = uv;
    tuv += -.5;

    float degree = noise(vec2(uTime * 0.1, tuv.x * tuv.y));

    tuv.y *= 1.0 / ratio;
    tuv *= Rot(radians((degree - .5) * 720. + 180.));
    tuv.y *= ratio;

    // Wave warp with sin
    float frequency = 3.;
    float amplitude = 50.;
    float speed = uTime * .1;
    tuv.x += sin(tuv.y * frequency + speed) / amplitude;
    tuv.y += sin(tuv.x * frequency * 1.5 + speed) / (amplitude * .5);

    // draw the image
    vec3 layer1 = mix(uColor1, uColor2, S(-.3, .2, (tuv * Rot(radians(-5.))).x));

    vec3 layer2 = mix(uColor3, uColor4, S(-.3, .2, (tuv * Rot(radians(-5.))).x));

    vec3 finalComp = mix(layer1, layer2, S(.5, -.3, tuv.y));

    vec3 col = finalComp;

    gl_FragColor = vec4(col, 1.0);
}
