import { useRef, useState } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import bitcoinScene from "../assets/bitcoin.glb";
import { usePointer } from "../hooks/use-pointer";

export default function Bitcoin() {
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
    scene: bitcoinScene,
  });

  return (
    <group ref={ref} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002__0.geometry}
        material={materials["Scene_-_Root"]}
        position={[3.489, 22.23, -11.294]}
      />
    </group>
  );
}

useGLTF.preload(bitcoinScene);
