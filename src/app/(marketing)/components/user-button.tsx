"use client";

import { Button } from "@/components/ui/button";

export const UserButton = () => {
  // TODO: Clerk로 교체
  const hasUserSession = () => {
    if (typeof window !== "undefined") {
      const hasSession = localStorage.getItem("hasSession");
      return hasSession;
    }
    return false;
  };

  return (
    <div className="hidden xl:flex flex-1 justify-end">
      <Button variant="white-link" className="transition-all duration-300">
        {hasUserSession() ? "로그인" : "회원가입"}
      </Button>
    </div>
  );
};
