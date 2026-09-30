"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import Chibi from "@/components/Chibi";
import { LoopVideo } from "@/components/media";
import { SERVICES } from "@/components/services";

const timeline = [
  { year: "1999–2014", text: "大手メーカーで研究・エンジニア" },
  { year: "2015–2024", text: "フリーランスFP" },
  { year: "2024", text: "AIエンジニアへリスキリング（総エンジニア歴15年以上）" },
  { year: "2025", text: "クライアントワーク開始・継続契約中", strong: true },
  { year: "2025.10", text: "1社の技術顧問に就任" },
  { year: "2025.12", text: "CNPトレカアプリ α版公開・スポンサー獲得", href: "/works/cnp-treca" },
  { year: "2026.01", text: "AI応用の爆速開発手法を開発", href: "/works/card-search" },
];

const HeroSection = () => {
  const [anime, shigyo] = SERVICES;

  return (
    <section className="relative overflow-hidden bg-dots">
      {/* 淡い色の光だまり */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-orange-200/50 blur-3xl" />
      <div className="pointer-events-none absolute right-[-10rem] top-10 h-[30rem] w-[30rem] rounded-full bg-sky-200/50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-12rem] left-1/3 h-[26rem] w-[26rem] rounded-full bg-pink-200/40 blur-3xl" />

      <div className="container-custom relative pb-16 pt-12 lg:pb-24 lg:pt-20">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
          {/* 左: 見出し */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="section-label">
              <Sparkles className="h-4 w-4" />
              AI × アニメ・動画 × 開発
            </span>
            <h1 className="mt-6 font-round text-4xl font-extrabold leading-[1.3] text-ink sm:text-5xl lg:text-[3.4rem]">
              <span className="whitespace-nowrap">
                <span className="text-gradient">アニメ・動画制作</span>と、
              </span>
              <br />
              AIアプリ開発。
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
              AIと手作業を組み合わせて、キャラクターが動く映像から、士業・専門家の紹介PV、Web3・AIアプリの開発まで。ヒアリングから納品まで一貫してサポートします。
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="#services" className="btn-primary text-lg">
                制作サービスを見る
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/contact" className="btn-secondary text-lg">
                お問い合わせ
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full bg-orange-50 px-4 py-2 font-bold text-sun ring-1 ring-orange-100">AI動画 15秒 3万円〜</span>
              <span className="rounded-full bg-sky-50 px-4 py-2 font-bold text-sky ring-1 ring-sky-100">30秒 5万円〜</span>
              <span className="rounded-full bg-pink-50 px-4 py-2 font-bold text-sakura ring-1 ring-pink-100">3Dモデル 5万円〜</span>
            </div>
          </motion.div>

          {/* 右: 2つのサービスを動画で */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mx-auto w-full max-w-xl pb-24 sm:pb-28"
          >
            <a
              href={anime.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block -rotate-2 overflow-hidden rounded-[28px] bg-white p-2.5 shadow-pop ring-1 ring-ink/5 transition-transform duration-300 hover:rotate-0"
            >
              <div className="aspect-[2/1] overflow-hidden rounded-[20px]">
                <LoopVideo src={anime.video.src} poster={anime.video.poster} label="月蝕綺譚ファンメイドPVで歌うシャオラン" />
              </div>
              <div className="flex items-center justify-between px-3 pb-1 pt-3">
                <span className="font-round font-extrabold text-ink">{anime.label}</span>
                <span className="flex items-center gap-1 text-sm font-bold text-sun">
                  LP <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </a>

            <a
              href={shigyo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group absolute bottom-0 left-[-4%] w-[64%] rotate-3 overflow-hidden rounded-[24px] bg-white p-2 shadow-pop ring-1 ring-ink/5 transition-transform duration-300 hover:rotate-0 sm:left-[-8%]"
            >
              <div className="aspect-[7/4] overflow-hidden rounded-[18px]">
                <LoopVideo src={shigyo.video.src} poster={shigyo.video.poster} label="士業事務所の紹介PV（制作デモ）" />
              </div>
              <div className="flex items-center justify-between px-2 pb-1 pt-2">
                <span className="text-sm font-extrabold text-ink">{shigyo.label}</span>
                <ArrowRight className="h-4 w-4 text-sky transition-transform group-hover:translate-x-1" />
              </div>
            </a>

            <Chibi
              pose="fly"
              height={200}
              motion="flutter"
              bubble="動画、つくります！"
              bubbleSide="left"
              className="absolute -bottom-4 right-[-2%] z-10 origin-bottom-right scale-75 sm:scale-100"
            />
          </motion.div>
        </div>

        {/* 経歴 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 flex flex-col gap-6 rounded-[28px] bg-white/90 p-6 shadow-soft ring-1 ring-ink/5 backdrop-blur md:flex-row md:items-center lg:p-8"
        >
          <div className="flex shrink-0 items-center gap-4">
            <div className="relative h-20 w-20 overflow-hidden rounded-full ring-4 ring-orange-100">
              <Image src="/00-gold-towa.png" alt="林のプロフィール画像" fill className="object-cover" sizes="80px" priority />
            </div>
            <div>
              <div className="font-round text-2xl font-extrabold">林</div>
              <div className="text-sm text-ink/60">AIエンジニア / 動画クリエイター</div>
            </div>
          </div>
          <ol className="grid flex-1 grid-cols-1 gap-x-6 gap-y-2 text-sm sm:grid-cols-2 xl:grid-cols-3">
            {timeline.map((t) => (
              <li key={t.year} className="flex gap-3">
                <span className="w-[4.8rem] shrink-0 font-bold text-sun">{t.year}</span>
                {t.href ? (
                  <Link href={t.href} className="font-medium text-ink underline decoration-sun/40 underline-offset-4 hover:text-sun">
                    {t.text}
                  </Link>
                ) : (
                  <span className={t.strong ? "font-bold text-ink" : "text-ink/70"}>{t.text}</span>
                )}
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
