"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/framer-motion/utils";
import { Suspense } from "react";
import { BackgroundVideo } from "./background-video";
import { Loader } from "@/components/loader";
import { FadeIn } from "@/lib/framer-motion/components/fade-in";

interface HeroProps {
  backgroundType: "video" | "image";
  heading: string | JSX.Element;
  subheading: string | JSX.Element;
}

export const Hero = ({ backgroundType, heading, subheading }: HeroProps) => {
  return (
    <div
      className="w-full h-dvh pt-16 pb-24 bg-cover bg-center relative"
      style={
        backgroundType === "image"
          ? {
              backgroundImage: "url('/image/background/hero_bg_marketing.jpg')",
            }
          : {}
      }
    >
      {backgroundType === "image" ? (
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      ) : (
        <Suspense fallback={<Loader />}>
          <BackgroundVideo />
        </Suspense>
      )}
      <div className="flex h-full items-end relative z-10">
        <FadeIn className="flex flex-col pl-14 gap-y-3 transition-all duration-75 ease-out">
          <h1 className="text-white text-7xl font-bold leading-tight drop-shadow-sm">
            {heading}
          </h1>
          <p className="text-[#E0E0E0] text-3xl leading-relaxed text-balance">
            {subheading}
          </p>
        </FadeIn>
      </div>
    </div>
  );
};
