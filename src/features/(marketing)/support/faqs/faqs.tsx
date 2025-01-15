import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Faqs = () => {
  return (
    <div className="w-full flex pt-32 pb-5 gap-5">
      <div className="flex-[2_5]">
        <h1 className="text-5xl font-bold mb-4">자주 묻는 질문</h1>
        <p
          className="text-balance"
          style={{
            background:
              "linear-gradient(to right, var(--custom-purple-light), var(--custom-purple-lighter))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
          }}
        >
          Hopago Wealth Master를 처음 사용하시나요? 우리가 준비한 답변으로 더
          빠르고 편리하게 문제를 해결하세요. 원하는 답변이 없으시면 언제든
          고객센터에 문의해 주세요!
        </p>
      </div>
      <div className="flex-[3_5]">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-3xl font-bold">
              가입 후 비밀번호를 잊어버렸어요. 어떻게 복구하죠?
            </AccordionTrigger>
            <AccordionContent className="text-slate-300 text-wrap text-xl">
              로그인 화면에서 비밀번호 찾기를 클릭하면 이메일로 재설정 링크를
              보내드릴게요.
              <br />
              비밀번호 잊으셨다고요? 걱정 마세요. 저희가 간단하게 도와드릴게요!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-3xl font-bold">
              특정 지출을 반복 설정으로 추가할 수 있나요?
            </AccordionTrigger>
            <AccordionContent className="text-slate-300 text-wrap text-xl">
              가능합니다. 항목 추가 시 반복 설정을 체크하고 주기를 선택하세요.
              <br />
              귀찮은 반복 작업은 우리에게 맡기세요. 알아서 척척 추가합니다!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-3xl font-bold">
              내가 등록한 주식 데이터를 엑셀로 다운받을 수 있나요?
            </AccordionTrigger>
            <AccordionContent className="text-slate-300 text-wrap text-xl">
              네! 내보내기 버튼을 클릭하면 바로 엑셀 파일로 다운로드됩니다.
              <br />
              데이터 관리, 이제 엑셀로 한 번에 끝내세요!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-3xl font-bold">
              Hopago Wealth Master는 무료인가요?
            </AccordionTrigger>
            <AccordionContent className="text-slate-300 text-wrap text-xl">
              기본 기능은 무료로 제공됩니다. 추가적인 고급 기능은 프리미엄
              요금제로 이용 가능합니다.
              <br />
              무료로 시작하고, 필요에 따라 업그레이드하세요!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
