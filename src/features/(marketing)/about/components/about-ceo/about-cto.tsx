import Image from "next/image";
import {
  jsSvg,
  tsSvg,
  reactSvg,
  nextSvg,
} from "../../../../../../public/svg/icons";
import { AnimatedCard } from "@/components/ui/card";
import Link from "next/link";
import { ZoomIn } from "@/lib/framer-motion/components/zoom-in";

const skillStacks = [jsSvg, tsSvg, reactSvg, nextSvg];

export const AboutCTO = () => {
  return (
    <section className="w-full flex p-14 min-h-[600px] gap-5">
      <div className="flex-[3_5] flex flex-col gap-7">
        <div className="w-full flex flex-col gap-3">
          <ZoomIn delay={1.5}>
            <h2 className="text-7xl font-bold text-[#D8B4FE] mb-3">
              About CTO, 최호준
            </h2>
            <p className="text-lg text-custom-white leading-relaxed text-balance">
              프론트엔드 및 풀스택 개발로 전향한 신입 개발자입니다. React,
              Next.js, Node.js, MongoDB 등 최신 기술 스택을 활용해 성능 최적화와
              확장 가능한 아키텍처를 설계했습니다.
              <br />
              대표 프로젝트에서 <strong>
                PageSpeed Insights 99점
              </strong> 달성, <strong>데이터 처리 속도 50%</strong> 개선,{" "}
              <strong>코드 재사용성을 30% 이상</strong> 향상시킨 경험이
              있습니다.
            </p>
          </ZoomIn>
        </div>
        <div className="flex justify-between gap-5">
          <div className="flex-1 flex flex-col gap-5">
            <span className="font-bold text-2xl text-custom-white">
              기술 스택
            </span>
            <div className="flex items-center gap-5 flex-wrap">
              {skillStacks.map((icon, i) => (
                <Image key={i} src={icon} alt="skill-set" className="size-16" />
              ))}
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-7">
            <span className="font-bold text-2xl text-custom-white">
              프로젝트
            </span>
            <div className="flex items-center gap-5 flex-wrap">
              <Link
                href="https://hommerce.co.kr"
                target="_blank"
                rel="noopener noreferrer"
                className="box-shadow-custom-white rounded-[20px]"
              >
                <AnimatedCard
                  title="Hommerce"
                  imgSrc="/images/hommerce.png"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[2_5] h-[600px] my-auto relative rounded-[20px] overflow-hidden">
        <Image
          src="/images/cto/hopago.jpg"
          className="object-contain"
          alt="Hopago"
          priority
          fill
        />
      </div>
    </section>
  );
};
