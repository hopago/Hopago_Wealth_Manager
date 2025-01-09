import { useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { usePointer } from "../hooks/use-pointer";

export default function Bitcoin() {
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
    path: "/model/bitcoin.glb",
  });

  const Bitcoin = useMemo(() => {
    return (
      <group ref={ref} dispose={null} position={[14, 0, 42]} scale={0.5}>
        <primitive object={scene} />
      </group>
    );
  }, [scene]);

  return Bitcoin;
}
