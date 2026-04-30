import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "서규원 — AI 협업 PM | 13년 E스포츠 베테랑의 새 길",
  description:
    "좋은 코드보다, 좋은 판단을 만드는 일. 13년 코칭에서 길러온 분석·정책 설계 시야로 AI 협업 PM으로 전향한 서규원의 포트폴리오. 첫 프로젝트 CookDex 출시 직전.",
  keywords: [
    "AI 협업 PM",
    "서규원",
    "Seo Kyuwon",
    "CookDex",
    "뚝딱레시피",
    "1인 개발자",
    "E스포츠",
    "Esports",
  ],
  authors: [{ name: "서규원 (Seo Kyuwon)" }],
  metadataBase: new URL("https://seokyuwon.vercel.app"),
  openGraph: {
    title: "서규원 — AI 협업 PM",
    description: "좋은 코드보다, 좋은 판단을 만드는 일.",
    url: "https://seokyuwon.vercel.app",
    siteName: "서규원 포트폴리오",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "서규원 — AI 협업 PM",
    description: "좋은 코드보다, 좋은 판단을 만드는 일.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${fraunces.variable} ${jetbrainsMono.variable} ${GeistSans.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
