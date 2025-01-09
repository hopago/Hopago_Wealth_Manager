import { useEffect } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { GLTFResult } from "../types";

type UsePointerProps = {
  path: string;
  lastX: React.MutableRefObject<number>;
  rotationSpeed: React.MutableRefObject<number>;
  ref: React.RefObject<THREE.Group>;
  isRotating: boolean;
  setIsRotating: React.Dispatch<React.SetStateAction<boolean>>;
};

export const usePointer = ({
  ref,
  lastX,
  rotationSpeed,
  path,
  isRotating,
  setIsRotating,
}: UsePointerProps) => {
  const { gl, viewport } = useThree();
  const { nodes, materials, scene } = useGLTF(path) as GLTFResult;

  const dampingFactor = 0.95;
  const autoRotationSpeed = 0.01;

  const handlePointerDown = (event: PointerEvent) => {
    event.preventDefault();
    setIsRotating(true);
    lastX.current = event.clientX;
  };

  const handlePointerMove = (event: PointerEvent) => {
    if (!isRotating || !ref.current) return;

    const delta = (event.clientX - lastX.current) / viewport.width;
    ref.current.rotation.y += delta * 0.05 * Math.PI;
    lastX.current = event.clientX;
    rotationSpeed.current = delta * 0.05 * Math.PI;
  };

  const handlePointerUp = () => {
    setIsRotating(false);
  };

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerup", handlePointerUp);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerup", handlePointerUp);
    };
  }, [gl, isRotating, handlePointerDown, handlePointerMove, handlePointerUp]);

  useFrame(() => {
    if (ref.current) {
      if (isRotating) {
        rotationSpeed.current *= dampingFactor;
        ref.current.rotation.y += rotationSpeed.current;
      } else {
        ref.current.rotation.y += autoRotationSpeed;
      }

      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }
    }
  });

  return {
    scene,
  };
};
