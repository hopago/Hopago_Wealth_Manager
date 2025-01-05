'use client'

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

export const SupportForm = () => {
  // TODO: 이미지 미리보기, 자주 묻는 질문 섹션

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      title: "",
      description: "",
      image: null,
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <section className="flex-[3_5]">
      <div className="w-full flex flex-col gap-6">
        <Form {...form}>
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-custom-gray">
                  문의 유형
                </FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <SelectTrigger className="bg-custom-black-light text-custom-white rounded-md border border-custom-gray">
                      <SelectValue placeholder="문의 내용을 선택해주세요" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="faq">
                        서비스 이용과 관련된 자주 묻는 질문
                      </SelectItem>
                      <SelectItem value="hacked">계정 보안 관련 문의</SelectItem>
                      <SelectItem value="payments">결제 및 환불 문의</SelectItem>
                      <SelectItem value="suggestion">개선 사항 제안</SelectItem>
                      <SelectItem value="bug">오류 및 문제 신고</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* 이메일 입력 */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-custom-gray">
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
              </FormItem>
            )}
          />

          {/* 제목 입력 */}
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

          {/* 설명 입력 */}
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

          {/* 이미지 업로드 */}
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <div className="flex flex-col gap-3 items-center justify-center border border-gray-100 py-7 rounded-[20px]">
                  <FormLabel htmlFor="support-image" className="cursor-pointer">
                    <CameraIcon className="size-9 text-custom-gray" />
                  </FormLabel>
                  <FormDescription className="text-sm text-center text-balance text-custom-gray">
                    카메라 아이콘을 클릭하여 파일을 추가해 더 정확한 문제를 전달해 보세요.
                    <br />
                    최대 1개의 이미지를 업로드할 수 있습니다.
                  </FormDescription>
                </div>
                <FormControl>
                  <Input
                    id="support-image"
                    className="hidden"
                    aria-label="add_image"
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      field.onChange(e.target.files ? e.target.files[0] : null)
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* 제출 버튼 */}
          <Button
            type="submit"
            variant="white"
            size="lg"
            className="mt-4 w-fit self-center"
          >
            문의하기
          </Button>
        </Form>
      </div>
    </section>
  );
};
