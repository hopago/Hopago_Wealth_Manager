import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { GLTF } from "three-stdlib";
import lampeScene from "../assets/3d/lampe.glb";

type GLTFResult = GLTF & {
  nodes: {
    Object_5: THREE.Mesh;
    Object_6: THREE.Mesh;
    Object_7: THREE.Mesh;
    Object_8: THREE.Mesh;
  };
  materials: {
    Particles: THREE.MeshStandardMaterial;
    Lampe: THREE.MeshStandardMaterial;
    Panneau: THREE.MeshStandardMaterial;
    Parquet: THREE.MeshStandardMaterial;
  };
};

type LampProps = {
  isRotating: boolean;
  setIsRotating: React.Dispatch<React.SetStateAction<boolean>>;
  position: THREE.Vector3;
  scale: THREE.Vector3;
  rotation: THREE.Euler;
};

export default function Lamp({ isRotating, setIsRotating }: LampProps) {
  const dampingFactor = 0.95;
  const lampRef = useRef<THREE.Group>(null);
  const lastX = useRef(0);
  const rotationSpeed = useRef(0);

  const { nodes, materials } = useGLTF(lampeScene) as GLTFResult;

  const handlePointerDown = (event: PointerEvent) => {
    event.preventDefault();
    setIsRotating(true);
    lastX.current = event.clientX;
  };

  const handlePointerUp = () => {
    setIsRotating(false);
    rotationSpeed.current *= 1.1;
  };

  const handlePointerMove = (event: PointerEvent) => {
    if (!isRotating) return;
    const delta = (event.clientX - lastX.current) * 0.02;

    if (lampRef.current) {
      lampRef.current.rotation.y += delta;
    }
    lastX.current = event.clientX;
    rotationSpeed.current = delta;
  };

  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;
      if (lampRef.current) {
        lampRef.current.rotation.y += rotationSpeed.current;
      }
    }
  });

  useEffect(() => {
    const handlePointerDownWrapper = (event: PointerEvent) =>
      handlePointerDown(event);
    const handlePointerUpWrapper = () => handlePointerUp();
    const handlePointerMoveWrapper = (event: PointerEvent) =>
      handlePointerMove(event);

    window.addEventListener("pointerdown", handlePointerDownWrapper);
    window.addEventListener("pointerup", handlePointerUpWrapper);
    window.addEventListener("pointermove", handlePointerMoveWrapper);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDownWrapper);
      window.removeEventListener("pointerup", handlePointerUpWrapper);
      window.removeEventListener("pointermove", handlePointerMoveWrapper);
    };
  }, [isRotating]);

  return (
    <group ref={lampRef}>
      <mesh geometry={nodes.Object_5.geometry} material={materials.Particles} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.Lampe} />
      <mesh geometry={nodes.Object_7.geometry} material={materials.Panneau} />
      <mesh geometry={nodes.Object_8.geometry} material={materials.Parquet} />
    </group>
  );
}

useGLTF.preload(lampeScene);
