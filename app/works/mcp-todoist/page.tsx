"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, GitBranch, Server, Wrench, CheckCircle2 } from "lucide-react";

export default function MCPTodoistPage() {
  const projectStats = [
    { label: "プロトコル", value: "stdio MCP", icon: Server },
    { label: "品質", value: "多数テスト", icon: CheckCircle2 },
    { label: "UI", value: "MCPテスター", icon: Wrench },
    { label: "実装規模", value: "Monorepo", icon: GitBranch },
  ];

  const techStack = [
    "TypeScript",
    "Convex",
    "Next.js",
    "Firebase Auth",
    "WebSocket",
    "Vitest",
  ];

  const features = [
    {
      title: "Todoist統合ツール",
      description: "タスク取得・移動・更新など、実務で使える一連のツールをMCP経由で提供",
    },
    {
      title: "セッション管理",
      description: "ConvexとWebSocketにより、堅牢なセッション・リアルタイム更新を実現",
    },
    {
      title: "UIテスター",
      description: "WebUIでツール・リソース・デバッグを統合検証可能",
    },
    {
      title: "TDD/自動テスト",
      description: "段階的TDDで多数のテストを整備し、信頼性を確保",
    },
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

      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">MCP Todoist サーバー</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              標準入出力(stdio)型のMCPサーバー。Todoist連携ツール群、セッション管理、UIテスターを揃えた実運用向け基盤。
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {projectStats.map((stat, index) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 * index }} className="bg-white rounded-lg p-4 shadow-lg text-center min-w-[140px]">
                  <stat.icon className="mx-auto mb-2 text-blue-600" size={24} />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            <Link href="https://github.com/taroken7777/mcp-todoist" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300">
              GitHubで詳細を見る
              <ExternalLink className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative overflow-hidden rounded-2xl shadow-2xl">
            <Image src="/mcp-todoist-banner.png" alt="MCP Todoist" width={1200} height={600} className="w-full h-auto" />
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">プロジェクト概要</h2>
              <div className="space-y-4 text-gray-600">
                <p>Todoistを対象に、MCPプロトコル準拠で各種ツールを提供するサーバー実装。</p>
                <p>Convex + WebSocketでセッション・リアルタイム更新、Firebase Authで認証連携。</p>
                <p>段階的TDDにより、機能追加ごとにテストを整備し堅牢性を担保。</p>
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
            <p className="text-lg text-gray-600">MCP活用の基盤としての機能を網羅</p>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">MCP連携・業務自動化のご相談</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">MCPサーバー構築、既存サービス連携、UIテスター実装まで支援します</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://github.com/taroken7777/mcp-todoist" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300">
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


