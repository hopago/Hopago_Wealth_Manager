import { useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { usePointer } from "../hooks/use-pointer";

export default function Lamp() {
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
    path: "/model/lampe.glb",
  });

  const Lamp = useMemo(() => {
    return (
      <group ref={ref} dispose={null}>
        <primitive object={scene} />
      </group>
    );
  }, [scene]);

  return Lamp;
}
