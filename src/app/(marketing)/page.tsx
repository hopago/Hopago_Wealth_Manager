import { Footer } from "@/features/(marketing)/components/footer/footer";
import { Hero } from "@/features/(marketing)/components/hero";
import { ServiceInfo } from "@/features/(marketing)/components/service-info/service-info";

export default function MarketingPage() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white">
      <Hero />
      <ServiceInfo
        title="자산관리? HWM이 길을 밝혀드립니다"
        subtitle="가계부? 막막할 필요 없어요. 원하는 멘토 스타일로 커스터마이징해서 딱 내 스타일 가계부 만들어볼래요? 지금 바로 시작해보세요!"
        modelName="lamp"
      />
      <Footer />
    </div>
  );
}
