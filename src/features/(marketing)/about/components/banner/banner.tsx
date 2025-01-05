import { LinkButton } from "@/features/components/buttons/link-button";

export const Banner = () => {
    return (
        <div
            className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage: "url('/images/background/bg_night_city.png')",
            }}
        >
            <div className="absolute inset-0 h-screen bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
            <div className="relative z-10 flex flex-col items-center gap-7 text-center">
                <h1 className="text-9xl font-bold text-custom-white leading-snug">
                    자산 관리, <br />
                    <span className="text-custom-purple-light">지금 바로 시작하세요</span>
                </h1>
                <p className="text-lg text-custom-gray leading-relaxed">
                    Hopago Wealth Manager로 간단하고 체계적인 자산 관리를 경험해보세요.
                </p>
                <LinkButton
                    title="시작하기"
                    url="/sign-in"
                    variant="white"
                    size="lg"
                    className="mt-5"
                />
            </div>
        </div>
    );
};
