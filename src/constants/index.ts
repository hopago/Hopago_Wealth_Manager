import { buttonVariants } from "@/components/ui/button";
import { ModelName } from "@/lib/three/types";
import { VariantProps } from "class-variance-authority";

export type ServiceInfoItem = {
  title: string;
  subtitle: string;
  modelName: ModelName;
  className?: string;
  hasButton?: boolean;
  buttonTitle?: string;
  buttonUrl?: string;
  buttonVariant?: Pick<VariantProps<typeof buttonVariants>, "variant">;
  buttonSize?: Pick<VariantProps<typeof buttonVariants>, "size">;
};

export const SCREEN_SIZE = {
  MD: 768,
};

export const SERVICE_INFOS: ServiceInfoItem[] = [
  {
    title: "가계부 관리, 빛이 되줄게요",
    subtitle:
      "월급, 수입, 지출 내역을 한눈에 확인하고, 카테고리별 통계와 캘린더를 활용하세요. 투자 가능 금액까지 스마트하게 관리!",
    modelName: "lamp",
    hasButton: true,
    buttonTitle: "시작하기",
    buttonUrl: "/sign-in",
    className: "",
  },
  {
    title: "목표부터 관리까지, 투자 경험을 새롭게",
    subtitle:
      "투자 목표를 설정하고, 실시간으로 성과를 확인하세요. 종목별 관리부터 배당 알림까지, 투자 여정을 쉽고 간편하게.",
    modelName: "computer",
    hasButton: true,
    buttonTitle: "자세히 알아보기",
    buttonUrl: "/how-it-works/stock",
    className: "flex-row-reverse",
  },
  {
    title: "암호화폐, 체계적인 투자 관리",
    subtitle:
      "투자 목표 수익률을 설정하고, 실시간 시세를 반영한 수익률 계산. 종목별 관리와 기간별 분석을 통해 체계적인 암호화폐 투자를 지원합니다.",
    modelName: "bitcoin",
    hasButton: true,
    buttonTitle: "자세히 알아보기",
    buttonUrl: "/how-it-works/crypto",
    className: "",
  },
];
