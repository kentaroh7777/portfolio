import type { Metadata } from "next";
import { Inter, Noto_Sans_JP, M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSansJP = Noto_Sans_JP({ 
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

const rounded = M_PLUS_Rounded_1c({
  weight: ["500", "700", "800"],
  subsets: ["latin"],
  variable: "--font-rounded",
});

export const metadata: Metadata = {
  title: "林 | AIエンジニア・アニメ／動画制作",
  description: "AIを活用したアニメ・動画制作と、Web3・AIアプリ開発。士業・専門家向けPV制作、CNPトレカアプリ開発、商業出版、Chrome拡張機能、MCPサーバー、その他AI活用アプリ開発の多数。",
  keywords: ["AIエンジニア", "アニメ制作", "動画制作", "士業 PV", "3Dモデル", "CNPトレカ", "Chrome拡張", "フロントエンド", "バックエンド", "Web3", "MCPサーバー"],
  authors: [{ name: "林" }],
  openGraph: {
    title: "林 | AIエンジニア・アニメ／動画制作",
    description: "AIを活用したアニメ・動画制作と、Web3・AIアプリ開発。士業・専門家向けPV制作、CNPトレカアプリ開発、商業出版、Chrome拡張機能、MCPサーバー、その他AI活用アプリ開発の多数。",
    url: "https://portfolio.h-fpo.com",
    siteName: "林のポートフォリオ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${inter.variable} ${notoSansJP.variable} ${rounded.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}