"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Calendar, Tag } from "lucide-react";

const allWorks = [
  {
    id: "cnp-treca",
    title: "CNPトレカアプリ開発",
    description: "初心者でも気軽にCNPトレカを楽しめるWebアプリ。ネットワーク対戦とCPU対戦機能を実装。リアルカードゲームのオンライン化の可能性を検証した本格的なゲームアプリケーション。",
    image: "/cnp-tcg-banner.png",
    period: "2024年9月〜2025年5月",
    stats: {
      development: "10人月",
      codeLines: "約4万行",
      features: "リアルタイム対戦・CPU対戦"
    },
    tags: ["Next.js", "TypeScript", "WebSocket", "Game Development", "MongoDB", "Google Cloud"],
    link: "/works/cnp-treca",
    demoLink: "https://cnp-tcg-62972841056.asia-northeast1.run.app",
    category: "Web開発・ゲーム開発"
  },
  {
    id: "card-search",
    title: "AI駆動 爆速開発手法（card-search / メタタグDB）",
    description:
      "CNPトレカの「カード効果ロジック」を高速・高品質に実装するための開発手法。類似カード検索CLI（card-search）と実装パターンのメタタグDBで、AIエージェントの認知負荷を下げて設計・実装を加速。",
    image: "/card-search.png",
    period: "2026年1月",
    stats: {
      approach: "card-search + メタタグDB",
      goal: "認知負荷の削減",
      outcome: "手戻りを低減"
    },
    tags: ["AI駆動開発", "開発ツール", "TypeScript", "設計支援"],
    link: "/works/card-search",
    category: "AI開発手法・開発ツール"
  },
  {
    id: "shin-community",
    title: "シン・コミュニティマーケティング",
    description: "Web3時代のコミュニティを活用したマーケティングの仕組みと事例を解説した商業出版。企業のマーケティング担当者向けに実践的なノウハウを提供し、3.5日で3,000部完売の好評を博した。",
    image: "/shin-community-book.jpg",
    period: "2024年12月出版",
    stats: {
      sales: "3,000部",
      period: "3.5日完売",
      chapters: "3章担当"
    },
    tags: ["商業出版", "Web3", "マーケティング", "コンテンツ制作"],
    link: "/works/shin-community",
    category: "出版・コンテンツ制作"
  },
  {
    id: "ai-reply-assistant",
    title: "AI Reply Assistant Chrome拡張",
    description: "最高評価を獲得したChrome拡張機能。Gmail、Discord、LINEなど複数のコミュニケーションプラットフォームを統一的に管理し、AIを活用した効率的な返信支援ツールを実現。",
    image: "/ranking-first.png",
    period: "AX camp 開発期間",
    stats: {
      evaluation: "最高評価",
      platforms: "3プラットフォーム",
      architecture: "4層設計"
    },
    badge: "最高評価",
    tags: ["Chrome Extension", "AI", "TypeScript", "React", "Clean Architecture"],
    link: "/works/ai-reply-assistant",
    githubLink: "https://github.com/kentaroh7777/ax-camp-test",
    category: "Chrome拡張・AI開発"
  }
  ,
  {
    id: "mcp-todoist",
    title: "MCP Todoist サーバー",
    description: "標準入出力(stdio)型のMCPサーバー。Convexベースでセッション管理・リアルタイム・ツール実行を統合。TDDで多数テストを整備。",
    image: "/mcp-todoist-banner.png",
    period: "2025年1月-6月",
    stats: {
      tests: "100+",
      features: "ツール/リソース/ログ",
      ui: "WebUI MCPテスター"
    },
    tags: ["MCP", "TypeScript", "Convex", "WebSocket", "Firebase Auth"],
    link: "/works/mcp-todoist",
    githubLink: "https://github.com/taroken7777/mcp-todoist",
    category: "AI基盤・MCPサーバー"
  },
  {
    id: "mcp-email-server",
    title: "MCP Email サーバー",
    description: "ストリーミングHTTP型のMCPサーバー。Gmail/IMAP統合、送信・検索・アーカイブなどのツールを提供し、全テスト合格。",
    image: "/mcp-email-banner2.png",
    period: "2025年6月",
    stats: {
      tests: "100% pass",
      protocol: "Streaming HTTP",
      services: "Gmail/IMAP"
    },
    tags: ["MCP", "TypeScript", "Streaming", "Gmail", "IMAP"],
    link: "/works/mcp-email-server",
    githubLink: "https://github.com/taroken7777/mcp-email-server",
    category: "AI基盤・MCPサーバー"
  },
  {
    id: "jpyc-payment",
    title: "JPYC決済アプリ導入実験成功",
    description: "KryptoKyoto様と共同で実施したJPYC決済導入実験に成功しました。店舗スタッフもお客様も迷わずに操作できる専用決済アプリを開発し、スムーズな暗号資産決済を実現。",
    image: "/jpyc-payment-banner.png",
    period: "2025年11月〜",
    stats: {
      role: "アプリ開発",
      tech: "Vite/Convex",
      status: "実験中"
    },
    tags: ["Vite", "TypeScript", "Web3", "JPYC", "Convex"],
    link: "/works/jpyc-payment",
    demoLink: "https://note.com/kenhfp/n/n50fe0965018c",
    category: "Web開発・Web3"
  }
];

const categories = [
  "全て",
  "Web開発(F/B)・ゲーム開発",
  "Chrome拡張・AIツール開発",
  "AIアシスト効率化基盤・MCPサーバー"
];

export default function WorksPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-black text-white py-4">
        <div className="container-custom">
          <Link
            href="/"
            className="inline-flex items-center text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            ホームに戻る
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              実績・作品一覧
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Web3、AI、ゲーム開発から商業出版まで、
              幅広い分野での実績をご紹介いたします。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Works Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="space-y-12">
            {allWorks.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image Section */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="aspect-[4/3] lg:aspect-auto lg:h-full relative overflow-hidden">
                      <Image
                        src={work.image}
                        alt={work.title}
                        fill
                        className="object-cover"
                      />
                      {work.badge && (
                        <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {work.badge}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="mb-4">
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium mb-2">
                        {work.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm mb-2">
                        <Calendar className="mr-1 h-4 w-4" />
                        {work.period}
                      </div>
                    </div>

                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {work.title}
                    </h2>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {work.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      {Object.entries(work.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-gray-900">{value}</div>
                          <div className="text-sm text-gray-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {work.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          <Tag className="mr-1 h-3 w-3" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href={work.link}
                        className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300"
                      >
                        詳細を見る
                      </Link>

                      {work.demoLink && (
                        <Link
                          href={work.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                        >
                          デモを見る
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      )}

                      {work.githubLink && (
                        <Link
                          href={work.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                        >
                          GitHub
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              対応可能な開発分野
            </h2>
            <p className="text-lg text-gray-600">
              幅広い技術領域での開発実績
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">Web開発</h3>
              <p className="text-gray-600 text-sm">Next.js, React, TypeScript等</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI開発</h3>
              <p className="text-gray-600 text-sm">LLM統合, AI自動化ツール, AIデータ分析等</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">ゲーム開発</h3>
              <p className="text-gray-600 text-sm">リアルタイム通信, WebSocket等</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              プロジェクトのご相談
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Web3、AI、ゲーム開発、コンテンツ制作まで、
              幅広い分野でのご相談を承っています
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