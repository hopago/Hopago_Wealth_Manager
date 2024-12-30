"use client";

import { useRouter } from "next/navigation";
import { Button, buttonVariants } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";

export type LinkButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    url: string;
    title: string;
  };

export const LinkButton: React.FC<LinkButtonProps> = ({
  url,
  title,
  variant = "default",
  size = "default",
  className,
  ...props
}) => {
  const router = useRouter();

  const onClick = () => {
    router.push(url);
  };

  return (
    <Button
      className={className}
      onClick={onClick}
      variant={variant}
      size={size}
      {...props}
    >
      {title}
    </Button>
  );
};
