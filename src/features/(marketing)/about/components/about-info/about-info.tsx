import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/button";
import { LinkButton } from "@/features/components/buttons/link-button";
import { SlideUp } from "@/lib/framer-motion/components/slide-up";

interface AboutInfoProps {
  mainTitle: string | JSX.Element;
  subTitle: string | JSX.Element;
  description: string | JSX.Element;
  hasButton?: boolean;
  buttonTitle?: string;
  buttonUrl?: string;
  buttonVariant?: VariantProps<typeof buttonVariants>["variant"];
  buttonSize?: VariantProps<typeof buttonVariants>["size"];
}

export const AboutInfo = ({
  mainTitle,
  subTitle,
  description,
  hasButton = false,
  buttonTitle = "더 알아보기",
  buttonUrl = "#",
  buttonVariant = "white",
  buttonSize = "lg",
}: AboutInfoProps) => {
  return (
    <section className="w-full p-14 flex h-full min-h-[600px]">
      <div className="flex flex-[3_5] flex-col gap-2">
        <SlideUp>
          <div className="w-fit h-fit flex items-center gap-1">
            <div className="rounded-full w-[12px] h-[12px] bg-[#6A0DAD]" />
            <div className="rounded-full w-[12px] h-[12px] bg-[#D8B4FE]" />
          </div>
          <h1 className="text-[#D8B4FE] text-7xl font-bold leading-snug tracking-tight">
            {mainTitle}
          </h1>
        </SlideUp>
      </div>

      <div className="flex flex-[2_5] flex-col gap-y-2 text-balance">
        <SlideUp>
          <h2 className="text-custom-white text-4xl font-semibold leading-relaxed">
            {subTitle}
          </h2>
          <p className="text-muted-foreground text-lg leading-loose">
            {description}
          </p>
        </SlideUp>

        {hasButton && (
          <LinkButton
            title={buttonTitle}
            size={buttonSize}
            variant={buttonVariant}
            url={buttonUrl}
            className="w-fit mt-7"
          />
        )}
      </div>
    </section>
  );
};
