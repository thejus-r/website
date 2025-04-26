"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Model } from "@/components/IDCard";

useGLTF.preload("/models/id-card.glb");

const TestPage = () => {
  return (
    <div className="w-screen h-screen bg-red-500">
      <Canvas>
        <ambientLight intensity={2} />
        <Model />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default TestPage;
