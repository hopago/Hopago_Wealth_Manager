"use server";

import nodemailer from "nodemailer";
import { Attachment } from "nodemailer/lib/mailer";
import { formSchema } from "../(marketing)/support/schema";

export type MailOption = {
  to: string;
  from: string;
  subject: string;
  category: string;
  attachments: Attachment[] | undefined;
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
  const email = formData.get("email") as string | null;
  const category = formData.get("category");
  const images = formData.getAll("images") as File[] | null;
  const title = formData.get("title") as string | null;
  const description = formData.get("description");

  const attachments: Attachment[] | undefined = images
    ? await Promise.all(
        images.map(async (file, index) => ({
          filename: `image-${index + 1}`,
          content: Buffer.from(await file.arrayBuffer()),
          contentType: file.type,
          cid: `image-${index + 1}`,
        }))
      )
    : undefined;

  const imageTags = images
    ?.map(
      (_, index) => `
    <img 
      src="cid:image-${index + 1}" 
      alt="첨부 이미지 ${index + 1}" 
      style="max-width: 100%; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 8px;" 
    />
  `
    )
    .join("");

  const mailOptions: MailOption = {
    to: process.env.NEXT_APP_EMAIL!,
    from: email || "",
    subject: title || "",
    category: `신규 메시지, 카테고리:${category}`,
    attachments,
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
        <h2 style="color: #7B1FA2; font-size: 20px;">보낸 사람 정보</h2>
        <p><strong>이메일:</strong> ${email}</p>
        <p><strong>제목:</strong> ${title}</p>
        <h2 style="color: #7B1FA2; font-size: 20px;">메시지 내용</h2>
        <p>${description}</p>
        <h2 style="color: #7B1FA2; font-size: 20px;">첨부 이미지</h2>
        ${imageTags}
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
