import { Button } from "@/components/ui/button";
import { useEmailVerificationModal } from "../modals/hooks/use-email-verification-modal";

interface EmailVerificationButtonProps {
  isVerified: boolean;
  setIsVerified: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}

export const EmailVerificationButton = ({
  isVerified,
  setIsVerified,
  className,
}: EmailVerificationButtonProps) => {
  const [modal, setOpen] = useEmailVerificationModal({
    title: "이메일 확인하기",
    message: "입력하신 이메일 주소로 인증을 완료해 주세요",
    variant: {
      size: "default",
      variant: "white-link",
    },
    isVerified,
    setIsVerified,
  });

  return (
    <div className={className}>
      <Button
        type="button"
        variant="white"
        size="sm"
        onClick={() => setOpen(true)}
      >
        이메일 인증
      </Button>
      {modal}
    </div>
  );
};
