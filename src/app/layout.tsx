import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ToastProvider from "@/providers/toast-provider";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Hopago 재무 마스터",
  description: "모든 자산 관리와 투자를 한 곳에서 관리하세요.",
  keywords: [
    "Hopago",
    "자산 관리",
    "재무 추적",
    "투자 포트폴리오",
    "가계부 앱",
    "암호화폐 추적",
    "주식 분석",
    "재무 계획",
  ],
  authors: [
    {
      name: "Hopago",
      url: "https://www.github.com/hopago",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <body className={`${roboto.className}`}>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
