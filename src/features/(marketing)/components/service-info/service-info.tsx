"use client";

import dynamic from "next/dynamic";
import { Loader } from "@/components/loader";
import { cn } from "@/lib/utils";
import { LinkButton } from "@/features/components/buttons/link-button";
import { ServiceInfoItem } from "@/constants";
import { RenderThreeProps } from "@/lib/three/render-three";
import { SlideUp } from "@/lib/framer-motion/components/slide-up";

const RenderThree = dynamic<RenderThreeProps>(
  () => import("@/lib/three/render-three"),
  { ssr: false, loading: () => <Loader /> }
);

export const ServiceInfo = ({
  title,
  subtitle,
  modelName,
  className,
  hasButton = false,
  buttonTitle = "더 알아보기",
  buttonUrl = "#",
  buttonVariant = { variant: "white" },
  buttonSize = { size: "lg" },
}: ServiceInfoItem) => {
  return (
    <section
      className={cn(
        "flex items-center justify-between py-7 px-24 h-[600px] w-full",
        className
      )}
    >
      {/* 3D 모델 렌더링 */}
      <div className="flex-1 w-full h-full flex items-center justify-center">
        <RenderThree name={modelName} />
      </div>

      {/* 텍스트 및 버튼 */}
      <div className="flex-1 h-full relative flex flex-col justify-center">
        <SlideUp
          delay={0.375}
          className={className?.includes("flex-row-reverse")
            ? "w-fit mx-auto text-left"
            : "text-left"}
        >
          {/* 헤더와 서브헤더 */}
          <div className="w-fit h-fit flex items-center gap-1">
            <div className="rounded-full w-[12px] h-[12px] bg-[#6A0DAD]" />
            <div className="rounded-full w-[12px] h-[12px] bg-[#D8B4FE]" />
          </div>
          <h2 className="text-7xl mt-5 mb-8 tracking-tight">{title}</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        </SlideUp>

        {/* 버튼 표시 */}
        {hasButton && (
          <LinkButton
            url={buttonUrl}
            title={buttonTitle}
            variant={buttonVariant.variant}
            size={buttonSize.size}
            className="w-fit mt-7"
          />
        )}
      </div>
    </section>
  );
};
