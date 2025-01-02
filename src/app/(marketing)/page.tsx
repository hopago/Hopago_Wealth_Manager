import { Card } from "@/components/ui/card";
import { Footer } from "@/features/(marketing)/components/footer/footer";
import { Hero } from "@/features/(marketing)/components/hero";
import { ServiceInfo } from "@/features/(marketing)/components/service-info/service-info";

export default function MarketingPage() {
  return (
    <main className="w-full min-h-screen bg-custom-black text-white">
      <Hero />
      <ServiceInfo
        title="가계부 관리, 빛이 되줄게요"
        subtitle="월급, 수입, 지출 내역을 한눈에 확인하고, 카테고리별 통계와 캘린더를 활용하세요. 투자 가능 금액까지 스마트하게 관리!"
        modelName="lamp"
        hasButton
        buttonTitle="시작하기"
        buttonUrl="/sign-in"
      />
      <ServiceInfo
        title="목표부터 관리까지, 투자 경험을 새롭게"
        subtitle="투자 목표를 설정하고, 실시간으로 성과를 확인하세요. 종목별 관리부터 배당 알림까지, 투자 여정을 쉽고 간편하게."
        modelName="computer"
        className="flex-row-reverse"
        hasButton
        buttonTitle="자세히 알아보기"
        buttonUrl="/how-it-works/stock"
      />
      <ServiceInfo
        title="암호화폐, 체계적인 투자 관리"
        subtitle="투자 목표 수익률을 설정하고, 실시간 시세를 반영한 수익률 계산. 종목별 관리와 기간별 분석을 통해 체계적인 암호화폐 투자를 지원합니다."
        modelName="bitcoin"
        hasButton
        buttonTitle="자세히 알아보기"
        buttonUrl="/how-it-works/crypto"
      />
      <Card
        hasTitle
        title="Hopago Wealth Master와 함께하는 자산 관리"
        cardTitle="자산 관리의 새로운 표준을 경험하세요"
        description="Hopago Wealth Master는 가계부, 투자 관리, 배당 알림까지 모든 자산 관리 기능을 하나로 통합하여, 사용자가 목표를 효율적으로 달성할 수 있도록 돕습니다. 직관적인 UI와 고급 기능으로 자산 관리를 단순하고 스마트하게 만들어 보세요."
      />
      <Footer />
    </main>
  );
}
