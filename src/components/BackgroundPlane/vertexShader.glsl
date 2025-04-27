varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;

varying float vZ;

uniform float uTime;
void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    vZ = modelPosition.y;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    vPosition = position;
    vNormal = normal;
    vUv = uv;

    gl_Position = projectedPosition;
}
