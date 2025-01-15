import { Toaster } from "@/lib/sonner/toaster";

const HowItWorksPage = () => {
  return (
    <main className="w-full min-h-dvh bg-custom-black text-custom-white -mb-1 pb-5">
      <Toaster
        message="지금 열심히 준비하고 있어요! 조금만 기다려주세요 😊"
        messageType="info"
        position="center"
      />
    </main>
  );
};

export default HowItWorksPage;
