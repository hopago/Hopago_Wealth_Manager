import { useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { usePointer } from "../hooks/use-pointer";
import { ModelName } from "../types";

interface ModelProps {
  name: ModelName;
}

type ModelProperties = {
  [key in ModelName]?: {
    position?: [number, number, number];
    scale?: number;
  };
};

const Model = ({ name }: ModelProps) => {
  const path: { [key in ModelName]: string } = {
    lamp: "/model/lampe.glb",
    computer: "/model/computer.glb",
    bitcoin: "/model/bitcoin.glb",
  };

  const properties: ModelProperties = {
    computer: { position: [21, 7, 42], scale: 7 },
    bitcoin: { position: [14, 0, 42], scale: 0.5 },
  };

  const [isRotating, setIsRotating] = useState(false);
  const ref = useRef<THREE.Group>(null);
  const lastX = useRef(0);
  const rotationSpeed = useRef(0);

  const { scene } = usePointer({
    ref,
    lastX,
    rotationSpeed,
    isRotating,
    setIsRotating,
    path: path[name],
  });

  const model = useMemo(() => {
    return (
      <group ref={ref} dispose={null} {...properties[name]}>
        <primitive object={scene} />
      </group>
    );
  }, [ref, name, scene]);

  return model;
};

export default Model;
