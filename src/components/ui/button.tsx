import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[#181818] text-white shadow hover:bg-[#000000] hover:text-white",
        destructive:
          "bg-[#FFCDD2] text-[#B71C1C] shadow-sm hover:bg-[#EF9A9A] hover:text-[#B71C1C]",
        outline:
          "border border-[#181818] bg-transparent text-[#181818] shadow-sm hover:bg-[#F5F5F5] hover:text-[#181818]",
        secondary:
          "bg-[#F5F5F5] text-[#181818] shadow-sm hover:bg-[#E0E0E0] hover:text-[#181818]",
        ghost: "hover:bg-[#F5F5F5] hover:text-[#181818]",
        cancel:
          "bg-[#7B1FA2] text-white shadow-sm hover:bg-[#6A0DAD] hover:text-white",
        link: "text-[#F5F5F5] underline-offset-4 hover:underline hover:text-[#E0E0E0]",
        "black-link":
          "text-[#F5F5F5] underline-offset-4 hover:text-[#E0E0E0] hover:bg-[#292929]",
        "white-link":
          "text-white bg-[#292929] underline-offset-4 hover:text-[#181818] hover:bg-[#F5F5F5]",
        white:
          "bg-white text-[#181818] shadow hover:bg-[#F5F5F5] hover:text-[#000000]",
      },
      size: {
        default: "h-10 px-4 text-base",
        sm: "h-8 px-3 text-sm",
        lg: "h-12 px-6 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
