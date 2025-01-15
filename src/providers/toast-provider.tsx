"use client";

import { TOASTER_COLORS } from "@/lib/sonner/styles";
import { Toaster } from "sonner";

export default function ToastProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Toaster
        style={{
          ...TOASTER_COLORS.default,
        }}
      />
    </>
  );
}
