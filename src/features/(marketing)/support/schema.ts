import * as z from "zod";
import { ACCEPTED_IMAGE_TYPES } from "@/constants";

export const formSchema = z.object({
  category: z.string().nonempty({ message: "문의 내용을 선택해주세요" }),
  email: z.string().email({ message: "유효한 이메일 주소를 입력해주세요" }),
  title: z.string().nonempty({ message: "문의 제목을 입력해주세요" }),
  description: z
    .string()
    .min(10, { message: "문의 내용을 10자 이상 작성해주세요" }),
  images: z
    .array(z.instanceof(File))
    .optional()
    .refine(
      (files) =>
        !files?.length ||
        files.every((file) => ACCEPTED_IMAGE_TYPES.includes(file.type)),
      {
        message: "이미지는 JPEG 또는 PNG 형식만 지원됩니다",
      }
    ),
});
