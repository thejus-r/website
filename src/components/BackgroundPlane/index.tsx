"use client";
import { Canvas, extend, ThreeElement, useFrame } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";

import vertexShader from "./vertexShader.glsl";
import fragmentShader from "./fragmentShader.glsl";
import { Color, Mesh, Vector2, Vector3 } from "three";
import { useRef } from "react";

const MeshGradientMaterial = shaderMaterial(
  {
    uColor1: new Color("white"),
    uColor2: new Color("black"),
    uColor3: new Color("blue"),
    uColor4: new Color("red"),
    uResolution: new Vector2(100, 100),
    uRadius: 0.1,
    uTime: {
      value: 0.0,
    },
  },
  vertexShader,
  fragmentShader,
);

declare module "@react-three/fiber" {
  interface ThreeElements {
    meshGradientMaterial: ThreeElement<typeof MeshGradientMaterial>;
  }
}

extend({ MeshGradientMaterial });

const GradientMesh = () => {
  const mesh = useRef<Mesh>(null);

  useFrame((state) => {
    const { clock } = state;
    if (mesh.current) {
      // @ts-expect-error untyped fields
      mesh.current.material.uniforms.uTime.value = clock.getElapsedTime();
    }
  });
  return (
    <mesh ref={mesh}>
      <planeGeometry args={[5, 3, 3, 3]} />
      <meshGradientMaterial
        uColor1={0xfff4e6}
        uColor2={0xfaffd0}
        uColor3={0xffffff}
        uColor4={0xffffff}
      />
    </mesh>
  );
};

const BackgroundPlane = () => {
  return (
    <Canvas camera={{ position: new Vector3(0, 0, 4), fov: 25 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} intensity={10} />
      <GradientMesh />
    </Canvas>
  );
};

export default BackgroundPlane;
