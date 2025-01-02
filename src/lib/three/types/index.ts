import * as THREE from "three";
import { GLTF } from "three-stdlib";

export type GLTFResult = GLTF & {
  nodes: any;
  materials: any;
};

export type ModelProps = {
  isRotating: boolean;
  setIsRotating: React.Dispatch<React.SetStateAction<boolean>>;
  position: THREE.Vector3;
  scale: THREE.Vector3;
  rotation: THREE.Euler;
};

export type ModelName = "lamp" | "computer" | "bitcoin";
