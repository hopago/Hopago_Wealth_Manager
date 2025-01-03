"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/framer-motion/utils";

interface HeroProps {
  backgroundType: "video" | "image";
  heading: string | JSX.Element;
  subheading: string | JSX.Element;
}

export const Hero = ({ backgroundType, heading, subheading }: HeroProps) => {
  return (
    <div
      className="w-full h-screen pt-16 pb-24 bg-cover bg-center relative"
      style={
        backgroundType === "image"
          ? {
              backgroundImage:
                "url('/images/background/hero_bg_marketing.jpg')",
            }
          : {}
      }
    >
      {backgroundType === "image" ? (
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      ) : (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover filter brightness-50 saturate-150"
        >
          <source src="/videos/video-hero.mp4" type="video/mp4" />
        </video>
      )}
      <div className="flex h-full items-end relative z-10">
        <motion.div
          initial="hidden"
          animate="show"
          className="flex flex-col px-14 gap-y-3 transition-all duration-75 ease-out"
          variants={fadeIn("right", "spring", 0, 0.5)}
        >
          <h1 className="text-white text-7xl font-bold leading-tight drop-shadow-sm">
            {heading}
          </h1>
          <p className="text-[#E0E0E0] text-3xl leading-relaxed text-balance">
            {subheading}
          </p>
        </motion.div>
      </div>
    </div>
  );
};
