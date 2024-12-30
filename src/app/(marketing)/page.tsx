import { Footer } from "@/features/(marketing)/components/footer/footer";
import { Hero } from "@/features/(marketing)/components/hero";
import { ServiceInfo } from "@/features/(marketing)/components/service-info/service-info";

export default function MarketingPage() {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      <Hero />
      <ServiceInfo
        title="가계부 관리, 빛이 되줄게요"
        subtitle={`월급, 수입, 지출 내역을 한눈에 확인하고, 카테고리별 통계와 캘린더를 활용하세요.
          투자 가능 금액까지 스마트하게 관리!`}
        modelName="lamp"
        hasButton
        buttonTitle="시작하기"
        buttonUrl="/sign-in"
      />
      <ServiceInfo
        title="목표부터 관리까지, 투자 경험을 새롭게"
        subtitle={`투자 목표를 설정하고, 실시간으로 성과를 확인하세요.
          종목별 관리부터 배당 알림까지, 투자 여정을 쉽고 간편하게.`}
        modelName="computer"
        className="flex-row-reverse"
        hasButton
        buttonTitle="더 알아보기"
        buttonUrl="/how-it-works/stocks"
      />
      <Footer />
    </div>
  );
}
