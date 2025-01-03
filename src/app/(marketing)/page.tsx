import { TextCard } from "@/components/ui/card";
import { SERVICE_INFOS } from "@/constants";
import { Hero } from "@/features/(marketing)/components/hero";
import { ServiceInfo } from "@/features/(marketing)/components/service-info/service-info";

export default function MarketingPage() {
  return (
    <main className="w-full min-h-screen bg-custom-black text-white">
      <Hero />
      {SERVICE_INFOS.map((info) => (
        <ServiceInfo key={info.title} {...info} />
      ))}
      <TextCard
        hasTitle
        className="max-w-5xl"
        title="Hopago Wealth Master와 함께하는 자산 관리"
        cardTitle="자산 관리의 새로운 표준을 경험하세요"
        description="Hopago Wealth Manager는 가계부, 투자 관리, 배당 알림까지 모든 자산 관리 기능을 하나로 통합하여, 사용자가 목표를 효율적으로 달성할 수 있도록 돕습니다. 직관적인 UI와 고급 기능으로 자산 관리를 단순하고 스마트하게 만들어 보세요."
      />
    </main>
  );
}
