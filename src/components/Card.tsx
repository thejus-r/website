"use client";

// @ts-nocheck
import * as THREE from "three";
import {
  Canvas,
  extend,
  ThreeEvent,
  useFrame,
  useThree,
  type ThreeElement,
} from "@react-three/fiber";
import {
  useRopeJoint,
  RigidBody,
  BallCollider,
  Physics,
  RapierRigidBody,
  useSphericalJoint,
  CuboidCollider,
} from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import { useEffect, useRef, useState } from "react";
import { Environment, Lightformer, useGLTF } from "@react-three/drei";

declare module "@react-three/fiber" {
  interface ThreeElements {
    meshLineGeometry: ThreeElement<typeof MeshLineGeometry>;
    meshLineMaterial: ThreeElement<typeof MeshLineMaterial>;
  }
}

extend({ MeshLineGeometry, MeshLineMaterial });

function Band({ maxSpeed = 50, minSpeed = 10 }) {
  // References for the band and the joints
  const band = useRef<THREE.Mesh>(null);
  const fixed = useRef<RapierRigidBody>(null);
  const j1 = useRef<RapierRigidBody>(null);
  const j2 = useRef<RapierRigidBody>(null);
  const j3 = useRef<RapierRigidBody>(null);
  const card = useRef<RapierRigidBody>(null);

  const { nodes, materials } = useGLTF("models/id-card.glb");

  const { width, height } = useThree((state) => state.size);

  const vec = new THREE.Vector3(), ang = new THREE.Vector3(), rot = new THREE.Vector3(), dir = new THREE.Vector3() // prettier-ignore

  const [dragged, drag] = useState<THREE.Vector3 | boolean>(false);
  const [hovered, hover] = useState<boolean>(false);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? "grabbing" : "grab";
      return () => void (document.body.style.cursor = "auto");
    }
  }, [hovered, dragged]);

  // rope joints
  // @ts-expect-error refobject
  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  // @ts-expect-error refobject
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  // @ts-expect-error refobject
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  // @ts-expect-error refobject
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.45, 0],
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
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      });
    }

    // calculate catmull curve
    if (
      j3.current &&
      j2.current &&
      j1.current &&
      band.current &&
      fixed.current
    ) {
      [j1, j2].forEach((ref) => {
        if (ref.current && !ref.current.lerped)
          ref.current.lerped = new THREE.Vector3().copy(
            ref.current.translation(),
          );
        const clampedDistance = Math.max(
          0.1,
          Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())),
        );
        ref.current.lerped.lerp(
          ref.current.translation(),
          delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)),
        );
      });

      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.translation());
      curve.points[2].copy(j1.current.translation());
      curve.points[3].copy(fixed.current.translation());
      // @ts-expect-error refobject
      band.current.geometry.setPoints(curve.getPoints(32));
    }
    if (card.current) {
      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel(
        { x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z },
        true,
      );
    }

    curve.curveType = "chordal";
  });

  function handleReleaseCard(e: ThreeEvent<PointerEvent>) {
    const target = e.target as HTMLElement;
    const newCardLoc = card.current
      ? card.current.translation()
      : new THREE.Vector3(0, 0, 0);
    return (
      target.setPointerCapture(e.pointerId),
      drag(new THREE.Vector3().copy(e.point).sub(vec.copy(newCardLoc)))
    );
  }

  return (
    <>
      <group>
        <RigidBody
          position={[3, 4.5, 0]}
          ref={fixed}
          type="fixed"
          angularDamping={2}
          linearDamping={2}
          canSleep={true}
        />
        <RigidBody position={[0.5, 0, 0]} ref={j1}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[1, 0, 0]}
          ref={j1}
          type="dynamic"
          angularDamping={2}
          linearDamping={2}
          canSleep={true}
          colliders={false}
        >
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[1.5, 0, 0]}
          ref={j2}
          type="dynamic"
          angularDamping={2}
          linearDamping={2}
          canSleep={true}
          colliders={false}
        >
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[2, 0, 0]}
          ref={j3}
          type="dynamic"
          angularDamping={2}
          linearDamping={2}
          canSleep={true}
          colliders={false}
        >
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[2, 0, 0]}
          ref={card}
          angularDamping={2}
          linearDamping={2}
          canSleep={true}
          colliders={false}
          type={dragged ? "kinematicPosition" : "dynamic"}
        >
          <CuboidCollider position={[0, -0.8, 0]} args={[1.1, 1.6, 0.01]} />
          <group
            scale={2.75}
            rotation={[0, -Math.PI / 2, 0]}
            position={[0, -2.4, 0]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e) => (
              e.target.releasePointerCapture(e.pointerId), drag(false)
            )}
            onPointerDown={(e) => handleReleaseCard(e)}
          >
            <mesh geometry={nodes.clip.geometry} material={materials.metal} />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
            <mesh
              geometry={nodes.card.geometry}
              material={materials["Material.001"]}
            />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          depthTest={false}
          lineWidth={1}
          color={"black"}
          resolution={new THREE.Vector2(1, 1)}
          args={[{ resolution: new THREE.Vector2(width, height) }]}
        />
      </mesh>
    </>
  );
}

const Card = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 15], fov: 25 }}>
        <Physics gravity={[0, -40, 0]} interpolate>
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
            intensity={4}
            color="white"
            position={[-10, 0, 14]}
            rotation={[0, Math.PI / 2, Math.PI / 3]}
            scale={[100, 10, 1]}
          />
        </Environment>
      </Canvas>
    </div>
  );
};

export default Card;
