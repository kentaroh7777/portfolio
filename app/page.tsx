"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import WorkCard from "@/components/WorkCard";
import SkillSection from "@/components/SkillSection";

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
];

export default function Home() {
  return (
    <div>
      <HeroSection />

      {/* Project Videos Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">プロジェクト動画</h2>
            <p className="text-lg text-gray-600">記事内のデモ動画をピックアップ</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 p-4 rounded-xl shadow-sm"
            >
              <div className="aspect-video rounded-lg overflow-hidden bg-black mb-3">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/eQig2LT7heo"
                  title="CNPトレカアプリ開発デモ動画"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="text-sm text-gray-700 font-medium">CNPトレカアプリ開発 デモ</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-50 p-4 rounded-xl shadow-sm"
            >
              <div className="aspect-video rounded-lg overflow-hidden bg-black mb-3">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/UkSqxUgGLQY"
                  title="AI Reply Assistant Chrome拡張デモ動画"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="text-sm text-gray-700 font-medium">AI Reply Assistant Chrome拡張 デモ</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section className="py-20 bg-gray-50" id="works">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Selected projects</h2>
            <p className="text-lg text-gray-600">クライアントワークと個人開発の実績</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {works.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <WorkCard {...work} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-16"
          >
            <Link 
              href="/works" 
              className="inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all duration-300"
            >
              すべての実績を見る
            </Link>
          </motion.div>
        </div>
      </section>

      <SkillSection />

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">プロジェクトのご相談</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Web3、AIを活用した開発やシステム構築のご相談を承っています
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              お問い合わせはこちら
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}