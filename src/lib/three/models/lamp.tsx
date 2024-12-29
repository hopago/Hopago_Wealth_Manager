import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { a } from "@react-spring/three";
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

export function Lamp(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(lampeScene) as GLTFResult;
  return (
    <a.group {...props} dispose={null}>
      <mesh geometry={nodes.Object_5.geometry} material={materials.Particles} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.Lampe} />
      <mesh geometry={nodes.Object_7.geometry} material={materials.Panneau} />
      <mesh geometry={nodes.Object_8.geometry} material={materials.Parquet} />
    </a.group>
  );
}

useGLTF.preload(lampeScene);
