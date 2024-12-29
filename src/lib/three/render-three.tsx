"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { Loader } from "@/components/loader";
import { Lamp } from "./models/lamp";

export const RenderThree = () => {
  return (
    <div>
      <Canvas
        camera={{ near: 0.1, far: 1000 }}
        className="w-full h-screen bg-transparent"
      >
        <Suspense
          fallback={
            <Html>
              <Loader />
            </Html>
          }
        >
          <directionalLight />
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />
          <Lamp />
        </Suspense>
      </Canvas>
    </div>
  );
};
