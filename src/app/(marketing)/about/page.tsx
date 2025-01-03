import { Hero } from "@/features/(marketing)/components/hero";

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
  
    </main>
  );
};

export default AboutPage;
