"use client";

import { lazy, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, Preload } from "@react-three/drei";
import { Loader } from "@/components/loader";
import { adjustModelForScreenSize } from "./utils/adjust-model-for-screen";
import { ModelName } from "./types";

const Model = lazy(() => import("./components/model"));

export interface RenderThreeProps {
  name: ModelName;
}

const RenderThree = ({ name }: RenderThreeProps) => {
  const [scale, position, rotation] = adjustModelForScreenSize({
    screenPosition: [42, 21, 84],
    rotation: [0, Math.PI / 7.7, 0],
  });

  return (
    <Canvas
      camera={{ near: 0.3, far: 900, scale, position, rotation }}
      className="flex max-w-full bg-transparent h-full"
    >
      <Suspense
        fallback={
          <Html>
            <Loader />
          </Html>
        }
      >
        <directionalLight position={[5, 5, 5]} intensity={3} />
        <ambientLight intensity={0.7} />
        <hemisphereLight
          color="#F5F5F5"
          groundColor="#FFFFFF"
          intensity={0.5}
        />
        <Model name={name} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default RenderThree;
