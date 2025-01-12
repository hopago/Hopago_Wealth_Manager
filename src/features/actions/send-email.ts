"use server";

import nodemailer from "nodemailer";
import { Attachment } from "nodemailer/lib/mailer";
import { formSchema } from "../(marketing)/support/schema";

export type MailOption = {
  to: string;
  from: string;
  description: string;
  attachments?: Attachment[];
  html: string;
};

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.NEXT_APP_EMAIL,
    pass: process.env.NEXT_APP_PASSWORD,
  },
});

export default async function sendEmail(formData: FormData) {
  const validateFields = await formSchema.safeParseAsync(formData);
  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
    };
  }

  const mailOptions: MailOption = {
    to: process.env.NEXT_APP_EMAIL!,
    from: formData.get("email") as string,
    description: `신규 메시지, 발송자:${formData.get("name")}`,
    html: `
      <div style="
        font-family: Arial, sans-serif; 
        max-width: 600px; 
        margin: 0 auto; 
        padding: 20px; 
        border: 1px solid #EDEDED; 
        border-radius: 8px; 
        background-color: #F9F9F9; 
        color: #333;
      ">
        <h1 style="color: #7B1FA2; font-size: 24px; text-align: center; margin-bottom: 20px;">
          Hopago Wealth Master - 문의 접수
        </h1>
        <p style="font-size: 16px; line-height: 1.5; margin-bottom: 20px;">
          아래는 고객님께서 보내주신 메시지입니다.
        </p>
        <hr style="border: none; border-top: 1px solid #EDEDED; margin: 20px 0;">
        <h2 style="color: #7B1FA2; font-size: 20px; margin-bottom: 10px;">
          보낸 사람 정보
        </h2>
        <p style="margin: 0 0 10px;"><strong>이메일:</strong> ${formData.get(
          "email"
        )}</p>
        <p style="margin: 0 0 10px;"><strong>제목:</strong> ${formData.get(
          "title"
        )}</p>
        <h2 style="color: #7B1FA2; font-size: 20px; margin-bottom: 10px; margin-top: 20px;">
          메시지 내용
        </h2>
        <p style="margin: 0 0 10px; font-size: 16px; line-height: 1.5;">
          ${formData.get("description")}
        </p>
      </div>
    `,
  };

  const { accepted, rejected } = await transporter.sendMail(mailOptions);

  if (accepted) {
    return {
      success: true,
      message: "메일이 성공적으로 발송되었습니다.",
    };
  } else {
    return {
      success: false,
      message: "메일 발송에 실패했습니다.",
      errors: rejected,
    };
  }
}
