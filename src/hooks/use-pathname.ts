"use client";

import { usePathname as uP } from "next/navigation";

export const usePathname = (urlIndex = 1) => {
  const pathname = uP();

  if (!pathname) return "";

  const segments = pathname.split("/");

  return segments[urlIndex] ?? "";
};
