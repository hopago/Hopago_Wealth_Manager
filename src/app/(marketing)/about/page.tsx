import { AboutInfo } from "@/features/(marketing)/about/components/about-info/about-info";
import { Marquee } from "@/components/marquee";
import { Hero } from "@/features/(marketing)/components/hero/hero";
import { features } from "@/constants";
import { AboutCTO } from "@/features/(marketing)/about/components/about-ceo/about-cto";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-custom-black text-custom-white w-full">
      <Hero
        backgroundType="video"
        heading={
          <>
            Hopago Wealth Master <br /> 당신만의 자산 관리 파트너
          </>
        }
        subheading={
          <>
            전문가들의 통찰을 담아 설계된 자산 관리 시스템. <br />
            위험 수준에 맞춰 나만의 관리법으로 쉽고 체계적으로.
          </>
        }
      />
      <AboutInfo
        mainTitle={
          <>
            당신의 금융 생활을 <br /> 새로운 차원으로
          </>
        }
        subTitle={
          <>
            "Hopago Wealth Master"는 <br />
            자산 관리의 시작과 끝을 <br />
            <span className="text-accent">하나의 플랫폼</span>에서 제공합니다.
          </>
        }
        description={
          <>
            가계부부터 주식, 암호화폐, 채권 관리까지 <br />
            모든 자산을 체계적으로 관리하세요. <br />
            목표 수익률 설정, 캘린더 기반 알림, <br />
            그리고 실시간 데이터와 함께 <br />
            투자 여정을 손쉽게 완성해보세요.
          </>
        }
      />
      <Marquee text={features} />
      <AboutCTO />
    </main>
  );
};

export default AboutPage;
