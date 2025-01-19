"use client";

import { Toaster_Message, Toaster_Position } from "@/lib/sonner/types";
import { useEffect } from "react";
import { toast } from "sonner";

interface ToastClientWrapperProps {
  type: Toaster_Message;
  message: string;
  deps?: string[];
  duration?: number;
  position?: Toaster_Position;
}

const ToastClientWrapper = ({
  type,
  message,
  deps = [],
  position = "bottom-right",
  duration = 3000,
}: ToastClientWrapperProps) => {
  useEffect(() => {
    switch (type) {
      case "success":
        toast.success(message, {
          position,
          duration,
        });
        break;
      case "error":
        toast.error(message, {
          position,
          duration,
        });
        break;
      case "info":
        toast.info(message, {
          position,
          duration,
        });
        break;
      case "warning":
        toast.warning(message, {
          position,
          duration,
        });
        break;
      case "default":
        toast(message, {
          position,
          duration,
        });
        break;
      default:
        toast.info(message, {
          position,
          duration,
        });
        break;
    }
  }, deps);

  return <></>;
};

export default ToastClientWrapper;
