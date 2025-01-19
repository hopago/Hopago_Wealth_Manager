import * as z from "zod";

export const emailSchema = z
  .string()
  .email("유효한 이메일 주소를 입력해 주세요.");
