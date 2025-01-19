"use server";

import nodemailer from "nodemailer";
import { emailSchema } from "@/lib/schema";
import { generateVerificationToken } from "./generate-verification-token";

export type MailOption = {
  to: string;
  from: string;
  subject: string;
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

export default async function sendEmail(email: string) {
  const validation = emailSchema.safeParse(email);
  if (!validation.success) {
    return {
      success: false,
      message: "이메일 주소가 올바르지 않습니다. 다시 확인해 주세요.",
      errors: validation.error.flatten().fieldErrors,
    };
  }

  try {
    const { token } = await generateVerificationToken(email);

    const mailOptions: MailOption = {
      to: email,
      from: process.env.NEXT_APP_EMAIL!,
      subject: "Hopago Wealth Master - 이메일 인증",
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
            Hopago Wealth Master - 이메일 인증
          </h1>
          <p style="font-size: 16px; line-height: 1.5; margin-bottom: 20px;">
            인증 요청을 해주셔서 감사합니다! 아래 코드를 입력하여 이메일 인증을 완료하세요.
          </p>
          <h2 style="color: #7B1FA2; font-size: 20px; text-align: center; margin-bottom: 20px;">
            인증 코드: <strong>${token}</strong>
          </h2>
          <p style="font-size: 14px; line-height: 1.5; color: #555; text-align: center;">
            인증 코드는 3분 동안만 유효합니다.
          </p>
        </div>
      `,
    };

    try {
      const { accepted, rejected } = await transporter.sendMail(mailOptions);

      if (accepted) {
        return {
          success: true,
          message:
            "이메일이 성공적으로 발송되었습니다. 메일함을 확인해 주세요! 📩",
        };
      } else {
        return {
          success: false,
          message: "이메일 발송에 실패했습니다. 잠시 후 다시 시도해 주세요.",
          errors: rejected,
        };
      }
    } catch (error) {
      console.error("메일 발송 에러:", error);
      return {
        success: false,
        message: "서버에 문제가 발생했습니다. 잠시 후 다시 시도해 주세요. 🙇‍♂️",
      };
    }
  } catch (err) {
    return {
      success: false,
      message: "이메일 발송에 실패했습니다. 잠시 후 다시 시도해 주세요.",
    };
  }
}
