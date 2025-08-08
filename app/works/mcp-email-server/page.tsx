"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Mail, Wifi, ShieldCheck, GitBranch } from "lucide-react";

export default function MCPEmailServerPage() {
  const projectStats = [
    { label: "プロトコル", value: "Streaming HTTP", icon: Wifi },
    { label: "品質", value: "全テスト合格", icon: ShieldCheck },
    { label: "機能", value: "Gmail/IMAP", icon: Mail },
    { label: "実装規模", value: "Monorepo", icon: GitBranch },
  ];

  const techStack = [
    "TypeScript",
    "Node.js",
    "Vitest",
    "Gmail API",
    "IMAP/imapflow",
  ];

  const features = [
    { title: "メール取得/検索/送信", description: "Gmail/IMAPの両方をサポートし、ユニファイドなツールを提供" },
    { title: "アーカイブ/整理", description: "複数メールのアーカイブ、タグ操作など業務運用に即した機能" },
    { title: "ストリーミング応答", description: "長時間操作に向けた進捗ストリーミングと安定した接続管理" },
    { title: "暗号化・ログ", description: "安全な資格情報管理とファイルローテーションログ" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-black text-white py-4">
        <div className="container-custom">
          <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            ホームに戻る
          </Link>
        </div>
      </div>

      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">MCP Email サーバー</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              ストリーミングHTTP型MCPサーバー。Gmail/IMAP統合、送信・検索・アーカイブなどのツールを提供し、全テスト合格の堅牢な実装。
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {projectStats.map((stat, index) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 * index }} className="bg-white rounded-lg p-4 shadow-lg text-center min-w-[140px]">
                  <stat.icon className="mx-auto mb-2 text-emerald-600" size={24} />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            <Link href="https://github.com/taroken7777/mcp-email-server" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-all duration-300">
              GitHubで詳細を見る
              <ExternalLink className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative overflow-hidden rounded-2xl shadow-2xl">
            <Image src="/mcp-email-banner2.png" alt="MCP Email Server" width={1200} height={600} className="w-full h-auto" />
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">プロジェクト概要</h2>
              <div className="space-y-4 text-gray-600">
                <p>複数アカウントの管理にお困りではありませんか？MCPで複数アカウントをAIに接続することで、横断検索や統合的な分析をAIに任せることができます。</p>
                <p>Gmail APIとIMAP(imapflow)をMCPツールとして統合。検索、送信、アーカイブ、暗号化、接続管理を提供。</p>
                <p>ストリーミングHTTPにより、長時間処理でも進捗が可視化され安定運用が可能。</p>
                <p>テストはユニット/統合ともに整備し、主要機能は100%合格。</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">使用技術</h3>
              <div className="grid grid-cols-2 gap-3">
                {techStack.map((tech, index) => (
                  <motion.div key={tech} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 * index }} className="bg-white px-4 py-3 rounded-lg shadow-sm text-center font-medium text-gray-800">
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">主な機能・特徴</h2>
            <p className="text-lg text-gray-600">メール運用自動化を安全に前進させる基盤</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 * index }} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">メール×MCPでの自動化相談</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Gmail/IMAPの統合、ツール設計、運用改善を一気通貫で支援します</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://github.com/taroken7777/mcp-email-server" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300">
                ソースコードを見る
                <ExternalLink className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
                開発を相談する
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


