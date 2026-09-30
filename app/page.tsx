"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import WorkCard from "@/components/WorkCard";
import SkillSection from "@/components/SkillSection";
import ServiceShowcase from "@/components/ServiceShowcase";
import VideoGallery from "@/components/VideoGallery";
import ChibiMarquee from "@/components/ChibiMarquee";
import Chibi from "@/components/Chibi";

const works = [
  {
    id: "cnp-traca",
    title: "CNPトレカアプリ開発",
    description: "初心者でも気軽にCNPトレカを楽しめるWebアプリ。ネットワーク対戦とCPU対戦機能を実装。",
    image: "/cnp-traca-banner.jpeg",
    stats: {
      reposts: 115,
      likes: 190,
      views: "4.2万",
    },
    tags: ["Next.js", "TypeScript", "WebSocket", "Game Development"],
    link: "/works/cnp-treca",
  },
  {
    id: "card-search",
    title: "AI駆動 爆速開発手法（card-search）",
    description:
      "類似カード検索CLIと実装パターンのメタタグDBで、AIエージェントの認知負荷を下げて設計・実装の手戻りを削減。",
    image: "/card-search.png",
    tags: ["AI開発", "開発ツール", "検索", "設計支援"],
    link: "/works/card-search",
  },
  {
    id: "shin-community",
    title: "シン・コミュニティマーケティング",
    description: "Web3時代のコミュニティマーケティングについての商業出版。新しいマーケティング手法を提案。",
    image: "/shin-community-book.jpg",
    tags: ["商業出版", "Web3", "マーケティング"],
    link: "/works/shin-community",
  },
  {
    id: "ai-reply-assistant",
    title: "AI Reply Assistant Chrome拡張",
    description: "最高評価を獲得したChrome拡張機能。AIを活用した効率的な返信支援ツール。",
    image: "/ranking-first.png",
    badge: "最高評価",
    tags: ["Chrome Extension", "AI", "JavaScript"],
    link: "/works/ai-reply-assistant",
  },
  {
    id: "mcp-todoist",
    title: "MCP Todoist サーバー",
    description: "標準入出力(stdio)型のMCPサーバー。Convexを用いたセッション管理と多数のTodoistツールを実装。WebUIでのテスト環境も整備。",
    image: "/mcp-todoist-banner.png",
    tags: ["MCP", "TypeScript", "Convex", "Todoist"],
    link: "/works/mcp-todoist",
  },
  {
    id: "mcp-email-server",
    title: "MCP Email サーバー",
    description: "ストリーミングHTTP型MCPサーバー。Gmail/IMAP連携、送信・アーカイブなどのツールを提供し、全テスト合格の堅牢な実装。",
    image: "/mcp-email-banner2.png",
    tags: ["MCP", "TypeScript", "Streaming HTTP", "Gmail", "IMAP"],
    link: "/works/mcp-email-server",
  },
  {
    id: "jpyc-payment",
    title: "JPYC決済アプリ導入実験成功",
    description: "KryptoKyoto様と共同で実施したJPYC決済導入実験。店舗用決済アプリを開発し、スムーズな暗号資産決済を実現。",
    image: "/jpyc-payment-banner.png",
    tags: ["Vite", "TypeScript", "Web3", "JPYC", "Convex"],
    link: "/works/jpyc-payment",
  },
];

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ChibiMarquee />
      <ServiceShowcase />
      <VideoGallery />

      {/* Works Section */}
      <section className="relative scroll-mt-20 bg-dots py-20 lg:py-28" id="works">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative mb-16 text-center"
          >
            <span className="section-label">WORKS</span>
            <h2 className="section-title mt-4">開発・出版の実績</h2>
            <p className="mt-4 text-lg text-ink/60">クライアントワークと個人開発の実績</p>
            <Chibi pose="point" height={170} motion="flutter" bubble="こっちも見てね" bubbleSide="right" className="absolute -top-8 left-0 hidden lg:block" />
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {works.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              >
                <WorkCard {...work} />
              </motion.div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link href="/works" className="btn-dark text-lg">
              すべての実績を見る
            </Link>
          </div>
        </div>
      </section>

      <SkillSection />

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-orange-50 via-pink-50 to-sky-50 px-6 py-16 text-center ring-1 ring-ink/5 lg:px-16"
          >
            <div className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-orange-200/60 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-sky-200/60 blur-3xl" />
            <div className="relative">
              <h2 className="section-title">プロジェクトのご相談</h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-ink/70">
                アニメ・動画、3Dモデルの制作から、Web3・AIを活用した開発やWebシステム構築まで。予算や納期が決まっていなくても、お気軽にご相談ください。
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/contact" className="btn-primary text-lg">
                  お問い合わせはこちら
                </Link>
                <Link href="#services" className="btn-secondary text-lg">
                  制作サービスを見る
                </Link>
              </div>
            </div>
            <div className="relative mt-10 flex items-end justify-center gap-2 sm:gap-6">
              <Chibi pose="present" height={130} motion="bob" delay={0} />
              <Chibi pose="letter" height={170} motion="flutter" delay={0.4} bubble="お便り待ってます！" />
              <Chibi pose="kachi" height={130} motion="bob" delay={0.8} />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
