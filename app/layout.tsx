import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "유홍상 | Frontend Developer",
  description: "유홍상 프론트엔드 개발자 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className="h-full antialiased"
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
