"use client";

import { useRef, useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formSchema } from "@/features/(marketing)/support/schema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CameraIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { ImagePreview } from "@/features/components/image-preview";
import sendEmail from "@/features/actions/send-email.support";
import { toast } from "sonner";
import { EmailVerificationButton } from "@/features/components/buttons/email-verification-button";

export const SupportForm = () => {
  const [isVerified, setIsVerified] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      title: "",
      description: "",
      images: undefined,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const validateFields = await formSchema.safeParseAsync(values);
    if (!validateFields.success) {
      return {
        errors: validateFields.error.flatten().fieldErrors,
      };
    }

    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      const isText =
        typeof key === "string" &&
        typeof value === "string" &&
        key !== "images";

      if (isText) {
        formData.append(key, value);
      } else {
        values.images?.forEach((file) => {
          formData.append("images", file);
        });
      }
    });

    try {
      const { success, errors } = await sendEmail(formData);

      if (success) {
        toast.success(
          "요청이 성공적으로 처리되었습니다. 확인 이메일을 확인해 주세요! 😊"
        );
      } else if (errors) {
        toast.error("입력 정보를 다시 확인해 주세요.");
        // TODO: FOR DEVELOP
        errors.forEach((err) => console.log(err));
      }
    } catch (error) {
      toast.error("서버에 문제가 발생했습니다. 잠시 후 다시 시도해 주세요. 🙇‍♂️");
      // TODO: FOR DEVELOP
      console.log(error);
    }
  };

  return (
    <section className="flex-[3_5]">
      <Form {...form}>
        <form
          className="w-full flex flex-col gap-6"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-custom-gray">
                  문의 유형
                </FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="bg-custom-black-light text-custom-white rounded-md border border-custom-gray">
                      <SelectValue placeholder="문의 내용을 선택해주세요" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="faq">
                        서비스 이용과 관련된 자주 묻는 질문
                      </SelectItem>
                      <SelectItem value="hacked">
                        계정 보안 관련 문의
                      </SelectItem>
                      <SelectItem value="payments">
                        결제 및 환불 문의
                      </SelectItem>
                      <SelectItem value="suggestion">개선 사항 제안</SelectItem>
                      <SelectItem value="bug">오류 및 문제 신고</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1">
                <FormLabel className="text-sm font-semibold text-custom-gray relative">
                  이메일
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="example@domain.com"
                    {...field}
                    className="bg-custom-black-light text-custom-white placeholder:text-white"
                  />
                </FormControl>
                <FormMessage />
                <EmailVerificationButton
                  isVerified={isVerified}
                  setIsVerified={setIsVerified}
                />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-custom-gray">
                  제목
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="문의 제목을 입력해주세요"
                    {...field}
                    className="bg-custom-black-light text-custom-white placeholder:text-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-custom-gray">
                  설명
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="문제나 개선 사항에 대해 간략히 설명해주세요"
                    {...field}
                    className="bg-custom-black-light text-custom-white min-h-[125px] placeholder:text-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="images"
            render={({ field }) => (
              <>
                {field.value && field.value.length > 0 ? (
                  <div className="flex gap-3 flex-wrap items-center justify-center border bg-custom-black-light border-gray-100 py-7 rounded-md">
                    {field.value.map((file) => (
                      <ImagePreview key={file.name} file={file} field={field} />
                    ))}
                  </div>
                ) : (
                  <FormItem>
                    <div className="flex flex-col gap-3 items-center justify-center border bg-custom-black-light border-gray-100 py-7 rounded-[20px]">
                      <FormLabel
                        htmlFor="support-image"
                        className="cursor-pointer"
                      >
                        <CameraIcon className="size-9 text-custom-gray" />
                      </FormLabel>
                      <FormDescription className="text-sm text-center text-balance text-custom-gray">
                        카메라 아이콘을 클릭하여 파일을 추가해 더 정확한 문제를
                        전달해 보세요.
                        <br />
                        이미지는 최대 5개까지 첨부 가능합니다.
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Input
                        id="support-image"
                        ref={inputRef}
                        className="hidden"
                        aria-label="add_image"
                        multiple
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          field.onChange(Array.from(e.target.files ?? []));
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              </>
            )}
          />

          <Button
            type="submit"
            variant="white"
            size="lg"
            className="mt-4 w-fit self-center"
          >
            문의하기
          </Button>
        </form>
      </Form>
    </section>
  );
};
