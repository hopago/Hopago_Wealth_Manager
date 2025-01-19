"use client";

import Image from "next/image";
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/framer-motion/utils";

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
  articleClassName?: string;
}

interface AnimatedCardProps {
  width?: number;
  height?: number;
  index?: number;
  title: string;
  imgSrc: string;
  className?: string;
}

export const TextCard = ({
  hasTitle,
  title,
  cardTitle,
  description,
  variant,
  className,
  articleClassName,
}: CardProps) => {
  const content = (
    <article className={cn(cardVariants({ variant }), articleClassName)}>
      <h3 className="font-bold text-2xl">{cardTitle}</h3>
      <p className="mt-4 text-xl text-muted-foreground">{description}</p>
    </article>
  );

  return hasTitle ? (
    <div
      className={cn(
        "w-full flex items-center justify-center flex-col gap-5 py-7 text-center",
        className
      )}
    >
      <h2 className="font-bold text-4xl text-custom-white mb-5">{title}</h2>
      {content}
    </div>
  ) : (
    <>{content}</>
  );
};

export const AnimatedCard = ({
  width = 250,
  height = 250,
  index = 0,
  title,
  imgSrc,
  className,
}: AnimatedCardProps) => {
  return (
    <Tilt
      className="w-full"
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      scale={1.1}
      transitionSpeed={450}
    >
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeIn(
          "right",
          "spring",
          index > 0 ? 0.25 * index : 0.25,
          0.75
        )}
        className="p-[1px] rounded-[20px] shadow-card green-pink-gradient black-gradient"
      >
        <div className="bg-teritary rounded-[20px] py-5 px-12 flex justify-evenly items-center flex-col w-full h-full">
          <Image
            src={imgSrc}
            alt={title}
            className={cn("object-contain object-center", className)}
            width={width}
            height={height}
            priority
          />
          <h3 className="text-custom-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
