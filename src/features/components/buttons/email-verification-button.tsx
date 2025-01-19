"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useEmailVerificationModal } from "../modals/hooks/use-email-verification-modal";
import sendEmail from "@/features/actions/send-email.email-verification";

interface EmailVerificationButtonProps {
  email: string;
  setIsVerified: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}

export const EmailVerificationButton = ({
  email,
  setIsVerified,
  className,
}: EmailVerificationButtonProps) => {
  const [modal, setOpen] = useEmailVerificationModal({
    email,
    title: "이메일 확인하기",
    message: "입력하신 이메일 주소로 인증을 완료해 주세요",
    variant: {
      size: "default",
      variant: "white-link",
    },
    setIsVerified,
  });

  const onClick = async () => {
    const { success, message } = await sendEmail(email);
    if (success) {
      toast.success(message, {
        duration: 3000,
      });
    } else {
      toast.error(message, {
        duration: 3000,
      });
    }
    setOpen(true);
  };

  return (
    <div className={className}>
      <Button type="button" variant="white" size="sm" onClick={onClick}>
        이메일 인증
      </Button>
      {modal}
    </div>
  );
};
