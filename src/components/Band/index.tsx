"use client";
import * as THREE from "three";
import {
  Canvas,
  extend,
  ThreeElement,
  useFrame,
  useThree,
} from "@react-three/fiber";
import { Environment, Lightformer, useGLTF } from "@react-three/drei";
import { MeshLineGeometry, MeshLineMaterial, raycast } from "meshline";
import { useRef, useState } from "react";
import { GLTF } from "three-stdlib";
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RapierRigidBody,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
} from "@react-three/rapier";

// type for GLTF loader
type GLTFResult = GLTF & {
  nodes: {
    card: THREE.Mesh;
    clamp: THREE.Mesh;
    clip: THREE.Mesh;
  };
  materials: {
    texture: THREE.MeshStandardMaterial;
    metal: THREE.MeshStandardMaterial;
  };
};

// Type support for mesh line
declare module "@react-three/fiber" {
  interface ThreeElements {
    meshLineGeometry: ThreeElement<typeof MeshLineGeometry>;
    meshLineMaterial: ThreeElement<typeof MeshLineMaterial>;
  }
}
extend({ MeshLineGeometry, MeshLineMaterial });

// Main Component
function Band({ maxSpeed = 50, minSpeed = 10 }) {
  // 3d Model geometry and materials
  const { nodes, materials } = useGLTF(
    "/models/card.glb",
  ) as unknown as GLTFResult;

  const band =
    useRef<THREE.Mesh<THREE.BufferGeometry<THREE.NormalBufferAttributes>>>(
      null,
    );
  const fixed = useRef<RapierRigidBody>(null);
  const j1 = useRef<RapierRigidBody>(null);
  const j2 = useRef<RapierRigidBody>(null);
  const j3 = useRef<RapierRigidBody>(null);
  const card = useRef<RapierRigidBody>(null);

  // vectors
  const ang = new THREE.Vector3(),
    rot = new THREE.Vector3();

  // for resolution
  const { width, height } = useThree((state) => state.size);

  // rope joints
  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.4, 0],
  ]);

  // A Catmull-Rom curve
  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ]),
  );

  useFrame((state, delta) => {
    if (j3.current) curve.points[0].copy(j3.current.translation());
    if (j2.current) curve.points[1].copy(j2.current.translation());
    if (j1.current) curve.points[2].copy(j1.current.translation());
    if (fixed.current) curve.points[3].copy(fixed.current.translation());

    // @ts-expect-error geometry points
    if (band.current) band.current.geometry.setPoints(curve.getPoints(32));

    // lerp fix, when dragging
    if (
      j3.current &&
      j2.current &&
      j1.current &&
      band.current &&
      fixed.current
    ) {
      [j1, j2].forEach((ref) => {
        // @ts-expect-error lerping
        if (ref.current && !ref.current.lerped) {
          // @ts-expect-error lerping
          ref.current.lerped = new THREE.Vector3().copy(
            ref.current.translation(),
          );

          const clampedDistance = Math.max(
            0.1,
            Math.min(
              1,
              // @ts-expect-error lerping
              ref.current.lerped.distanceTo(ref.current.translation()),
            ),
          );
          // @ts-expect-error lerping
          ref.current.lerped.lerp(
            ref.current.translation(),
            delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)),
          );
        }
      });
    }

    // force card to always face front
    if (card.current) {
      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel(
        { x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z },
        true,
      );
    }
  });

  curve.curveType = "chordal";

  return (
    <>
      <group position={[3, 5.5, 0]}>
        <RigidBody
          type="fixed"
          colliders={false}
          canSleep={true}
          ref={fixed}
          angularDamping={2}
          linearDamping={2}
        >
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          type="dynamic"
          position={[0.5, 0, 0]}
          colliders={false}
          ref={j1}
          canSleep={true}
          angularDamping={2}
          linearDamping={2}
        >
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          type="dynamic"
          colliders={false}
          position={[1, 0.5, 0]}
          ref={j2}
          canSleep={true}
          angularDamping={2}
          linearDamping={2}
        >
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[1.5, 1, 1]}
          colliders={false}
          ref={j3}
          canSleep={true}
          type="dynamic"
          angularDamping={2}
          linearDamping={2}
        >
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[2, 2, 0]}
          ref={card}
          type="dynamic"
          colliders={false}
          canSleep={false}
          angularDamping={2}
          linearDamping={2}
        >
          <CuboidCollider position={[0, -1, 0]} args={[1.4, 1.95, 0.01]} />
          <group
            scale={2.75}
            position={[-0.01, -3, -0.05]}
            rotation={[0, -Math.PI / 2, 0]}
          >
            <mesh
              geometry={nodes.clip.geometry}
              material={materials.metal}
              material-roughness={0.3}
            />
            <mesh
              geometry={nodes.clamp.geometry}
              material={materials.metal}
              material-roughness={0.3}
            />
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial
                map={materials.texture.map}
                map-anisotropy={16}
                clearcoat={1}
                clearcoatRoughness={0.15}
                roughness={0.75}
                metalness={0.1}
              />
            </mesh>
          </group>
        </RigidBody>
      </group>
      <mesh raycast={raycast} ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          transparent
          opacity={0.2}
          color={"black"}
          depthTest={false}
          lineWidth={1.5}
          args={[{ resolution: new THREE.Vector2(width, height) }]}
        />
      </mesh>
    </>
  );
}

const BandCanvas = () => {
  return (
    <Canvas camera={{ fov: 25, position: [0, 0, 16] }}>
      <Physics
        colliders={false}
        interpolate
        gravity={[0, -40, 0]}
        timeStep={1 / 60}
      >
        <Band />
      </Physics>
      <Environment blur={0.75}>
        <Lightformer
          intensity={2}
          color="white"
          position={[0, -1, 5]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={3}
          color="white"
          position={[-1, -1, 1]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={3}
          color="white"
          position={[1, 1, 1]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={10}
          color="white"
          position={[-10, 0, 14]}
          rotation={[0, Math.PI / 2, Math.PI / 3]}
          scale={[100, 10, 1]}
        />
      </Environment>
    </Canvas>
  );
};

export default BandCanvas;
