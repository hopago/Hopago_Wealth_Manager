"use client";

import { lazy, Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { Loader } from "@/components/loader";
import Background from "./models/bg";
import { adjustModelForScreenSize } from "./utils/adjust-model-for-screen";

const Lamp = lazy(() => import("./models/lamp"));

interface RenderThreeProps {
  name: string;
}

const RenderThree = ({ name }: RenderThreeProps) => {
  const [isRotating, setIsRotating] = useState(false);

  const [scale, position, rotation] = adjustModelForScreenSize({
    screenPosition: [0, -8, -50],
    rotation: [0.1, 4.7, 0],
  });

  let content: JSX.Element | undefined;

  if (name === "lamp") {
    content = (
      <Lamp
        position={position}
        scale={scale}
        rotation={rotation}
        isRotating={isRotating}
        setIsRotating={setIsRotating}
      />
    );
  }

  return (
    <Canvas
      camera={{ near: 0.1, far: 1000, position: [-40, 60, -60] }}
      className="flex w-full bg-transparent h-full"
    >
      <Suspense
        fallback={
          <Html>
            <Loader />
          </Html>
        }
      >
        <directionalLight position={[1, 1, 1]} intensity={2} />
        <ambientLight intensity={0.5} />
        <hemisphereLight color="#F5F5F5" groundColor="#FFFFFF" intensity={1} />
        {/* TODO: ADD BG */}
        <Background path="" />
        {content}
      </Suspense>
    </Canvas>
  );
};

export default RenderThree;
