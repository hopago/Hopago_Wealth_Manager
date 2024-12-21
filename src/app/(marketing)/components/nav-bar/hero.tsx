export const Hero = () => {
  return (
    <div
      className="w-full h-screen pt-16 pb-24 bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/images/background/hero_bg_marketing.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80"></div>
      <div className="flex h-full items-end relative z-10">
        <div className="flex flex-col px-14 gap-y-3">
          <h1 className="text-white text-7xl font-bold leading-tight drop-shadow-sm">
            계획적으로, A-Z까지 <br /> 자산 관리를 도와드립니다
          </h1>
          <p className="text-[#E0E0E0] text-3xl leading-relaxed text-balance">
            Hopago Wealth Manager는 가계부, 투자 관리, 채권, 암호화폐를 하나로
            통합하여 쉽고 체계적으로 금융 관리를 돕습니다.
            <br /> 이제{" "}
            <span className="text-[#E0E0E0] font-semibold">금융 관리 졸업</span>
            을 향해 나아가세요!
          </p>
        </div>
      </div>
    </div>
  );
};
