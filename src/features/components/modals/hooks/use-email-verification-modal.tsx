"use client";

import { useEffect, useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { VariantProps } from "class-variance-authority";
import { ResponsiveModal } from "../responsive-modal";
import { Input } from "@/components/ui/input";

interface UseEmailVerificationModalProps {
  title: string;
  message: string;
  variant: VariantProps<typeof buttonVariants>;
  isVerified: boolean;
  setIsVerified: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useEmailVerificationModal = ({
  title,
  message,
  variant,
  isVerified,
  setIsVerified,
}: UseEmailVerificationModalProps): [
  JSX.Element,
  React.Dispatch<React.SetStateAction<boolean>>
] => {
  useEffect(() => {
    // TODO: send email and post 2fa code to db
  }, []);

  const [isVerificationModalOpen, setVerificationModalOpen] = useState(false);
  const [verificationCode, setVerificationCode] = useState<string>("");
  const [resendAttemptCount, setResendAttemptCount] = useState(3);

  const VerificationDialog = (
    <ResponsiveModal
      open={isVerificationModalOpen}
      onOpenChange={setVerificationModalOpen}
    >
      <Card className="w-full h-full border-none shadow-none">
        <CardContent className="pt-8">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{message}</CardDescription>
          </CardHeader>
          <div className="w-full flex flex-col gap-y-2 lg:flex-row gap-x-2 items-center justify-end">
            <Input
              placeholder="이메일로 받은 인증 코드를 입력해 주세요"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />
            <Button
              onClick={() => {}}
              size="sm"
              variant={resendAttemptCount === 0 ? "destructive" : "secondary"}
            >
              이메일 재전송 &#40;남은 횟수: {resendAttemptCount}&#41;
            </Button>
          </div>
          <div className="pt-7 w-full flex flex-col gap-y-2 lg:flex-row gap-x-2 items-center justify-end">
            <Button
              onClick={() => setVerificationModalOpen(false)}
              variant="outline"
              type="button"
              className="w-full lg:w-auto"
            >
              취소하기
            </Button>
            <Button {...variant} className="w-full lg:w-auto">
              진행하기
            </Button>
          </div>
        </CardContent>
      </Card>
    </ResponsiveModal>
  );

  return [VerificationDialog, setVerificationModalOpen];
};
