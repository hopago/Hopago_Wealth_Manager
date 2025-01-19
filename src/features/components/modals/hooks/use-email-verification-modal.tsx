"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
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
import { getVerificationTokenByToken } from "@/features/(auth)/services/verification-token";

interface UseEmailVerificationModalProps {
  email: string;
  title: string;
  message: string;
  variant: VariantProps<typeof buttonVariants>;
  setIsVerified: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useEmailVerificationModal = ({
  email,
  title,
  message,
  variant,
  setIsVerified,
}: UseEmailVerificationModalProps): [
  JSX.Element,
  React.Dispatch<React.SetStateAction<boolean>>
] => {
  // TODO: 이메일 성공 후 처리, 이메일 재전송 처리

  const [isVerificationModalOpen, setVerificationModalOpen] = useState(false);
  const [verificationTokenClient, setVerificationTokenClient] =
    useState<string>("");
  const [resendAttemptCount, setResendAttemptCount] = useState(3);

  useEffect(() => {
    if (verificationTokenClient.length < 6) return;

    const verifyToken = async () => {
      try {
        const token = await getVerificationTokenByToken(
          verificationTokenClient
        );
        if (!token) {
          setVerificationTokenClient("");
          toast.error("인증번호를 확인해 주세요. 잘못된 인증번호입니다.");
          return;
        }

        const { expires } = token;
        if (new Date(expires) < new Date()) {
          setVerificationTokenClient("");
          toast.error("인증번호가 만료되었습니다. 다시 요청해 주세요.");
          return;
        }

        toast.success("인증이 완료되었습니다! 🎉");
      } catch (error) {
        console.error("Error fetching token:", error);
        toast.error("문제가 발생했습니다. 잠시 후 다시 시도해 주세요. 🙇‍♂️");
      }
    };

    verifyToken();
  }, [verificationTokenClient.length]);

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
              value={verificationTokenClient}
              onChange={(e) => setVerificationTokenClient(e.target.value)}
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
