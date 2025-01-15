"use client";

import { useEffect, useMemo } from "react";
import {
  Toaster as SonnerToaster,
  ToasterProps as SonnerProps,
  toast,
} from "sonner";
import { TOASTER_COLORS } from "./styles";

type ExtendedPosition =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left"
  | "center";

interface ToasterProps
  extends Partial<Omit<SonnerProps, "style" | "position">> {
  toasterStyle?: keyof typeof TOASTER_COLORS;
  position?: ExtendedPosition;
  message: string;
  messageType?: "success" | "info" | "warning" | "error";
}

export const Toaster = ({
  toasterStyle,
  message,
  messageType = "info",
  position,
  ...props
}: ToasterProps) => {
  const defaultToasterStyleMap: Record<
    "success" | "info" | "warning" | "error",
    keyof typeof TOASTER_COLORS
  > = {
    success: "success",
    info: "info",
    warning: "warning",
    error: "error",
  };

  const appliedToasterStyle = useMemo(
    () => toasterStyle || defaultToasterStyleMap[messageType],
    [toasterStyle, messageType]
  );

  const dynamicStyle = useMemo(() => {
    if (position === "center") {
      return {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 999,
      };
    }
    return {};
  }, [position]);

  useEffect(() => {
    if (message) {
      toast[messageType](message, {
        style: {
          ...(dynamicStyle as React.CSSProperties),
        },
      });
    }
  }, [message, messageType, appliedToasterStyle, dynamicStyle]);

  return <SonnerToaster duration={Infinity} {...props} />;
};
