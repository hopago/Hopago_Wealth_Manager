import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva("p-8 rounded-md text-center", {
  variants: {
    variant: {
      purple: "box-shadow-custom-purple bg-transparent text-balance",
      black: "box-shadow-custom-black bg-transparent text-balance",
      white: "box-shadow-custom-white bg-transparent text-balance",
    },
  },
  defaultVariants: {
    variant: "white",
  },
});

interface CardProps extends VariantProps<typeof cardVariants> {
  hasTitle?: boolean;
  title?: string;
  cardTitle: string;
  description: string;
  className?: string;
}

export const TextCard = ({
  hasTitle,
  title,
  cardTitle,
  description,
  variant,
  className,
}: CardProps) => {
  const content = (
    <article className={cn(cardVariants({ variant }), className)}>
      <h3 className="font-bold text-2xl">{cardTitle}</h3>
      <p className="mt-4 text-xl text-muted-foreground">{description}</p>
    </article>
  );

  return hasTitle ? (
    <div className="w-full flex items-center justify-center flex-col gap-5 py-7 text-center">
      <h2 className="font-bold text-4xl text-custom-white mb-5">{title}</h2>
      {content}
    </div>
  ) : (
    <>{content}</>
  );
};
