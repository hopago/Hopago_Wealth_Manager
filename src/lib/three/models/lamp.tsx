import { useRef, useState } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import lampeScene from "../assets/lampe.glb";
import { usePointer } from "../hooks/use-pointer";

export default function Lamp() {
  const [isRotating, setIsRotating] = useState(false);
  const ref = useRef<THREE.Group>(null);
  const lastX = useRef(0);
  const rotationSpeed = useRef(0);

  const { nodes, materials } = usePointer({
    ref,
    lastX,
    rotationSpeed,
    isRotating,
    setIsRotating,
    scene: lampeScene,
  });

  return (
    <group ref={ref}>
      <mesh geometry={nodes.Object_5.geometry} material={materials.Particles} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.Lampe} />
      <mesh geometry={nodes.Object_7.geometry} material={materials.Panneau} />
      <mesh geometry={nodes.Object_8.geometry} material={materials.Parquet} />
    </group>
  );
}

useGLTF.preload(lampeScene);
