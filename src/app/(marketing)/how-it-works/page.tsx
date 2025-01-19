import ToastClientWrapper from "@/features/components/toast-client-wrapper";

const HowItWorksPage = () => {
  return (
    <main className="w-full min-h-dvh bg-custom-black text-custom-white -mb-1 pb-5">
      <ToastClientWrapper
        type="info"
        message="지금 열심히 준비하고 있어요! 조금만 기다려주세요 😊"
      />
    </main>
  );
};

export default HowItWorksPage;
