"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Chrome, Star, Code, Zap } from "lucide-react";

export default function AIReplyAssistantPage() {
  const projectStats = [
    { label: "評価", value: "最高評価", icon: Star },
    { label: "技術", value: "Chrome拡張", icon: Chrome },
    { label: "アーキテクチャ", value: "4層設計", icon: Code },
    { label: "AI統合", value: "複数LLM", icon: Zap },
  ];

  const platforms = [
    "Gmail",
    "Discord", 
    "LINE"
  ];

  const techStack = [
    "TypeScript",
    "React",
    "Webpack 5",
    "Chrome Extension API",
    "Manifest V3",
    "Clean Architecture"
  ];

  const features = [
    {
      title: "マルチプラットフォーム統合",
      description: "Gmail、Discord、LINEなど複数のコミュニケーションプラットフォームを統一的に管理"
    },
    {
      title: "AI支援返信生成",
      description: "OpenAI、Anthropic、GoogleのLLMを活用した効率的な返信文生成"
    },
    {
      title: "クロスプラットフォーム識別",
      description: "異なるプラットフォーム間でのユーザー識別とコンテキスト管理"
    },
    {
      title: "統一返信インターフェース",
      description: "プラットフォームに依存しない一貫したユーザー体験を提供"
    },
    {
      title: "手動支援重視",
      description: "完全自動化ではなく、ユーザーの判断を重視した支援型アプローチ"
    },
    {
      title: "プライバシー重視設計",
      description: "セキュアで安全なデータ処理により、プライバシーを徹底保護"
    }
  ];

  const technicalChallenges = [
    {
      title: "CORS制約の解決",
      description: "プロキシサーバーによる統一API アクセスでクロスオリジン制約を解決"
    },
    {
      title: "プラットフォーム固有UI注入",
      description: "各プラットフォームに最適化されたUI要素の動的注入"
    },
    {
      title: "Manifest V3対応",
      description: "最新のChrome拡張仕様に準拠した実装"
    },
    {
      title: "4層アーキテクチャ設計",
      description: "Clean Architectureパターンによる保守性の高い設計"
    }
  ];

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
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold mb-6">
              <Star className="mr-2 h-5 w-5" />
              最高評価獲得
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              AI Reply Assistant Chrome拡張
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              複数のコミュニケーションプラットフォームを統一的に管理し、
              AI支援による効率的な返信業務を実現するChrome拡張機能。
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {projectStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white rounded-lg p-4 shadow-lg text-center min-w-[120px]"
                >
                  <stat.icon className="mx-auto mb-2 text-blue-600" size={24} />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            <Link
              href="https://github.com/kentaroh7777/ax-camp-test"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300"
            >
              GitHubで詳細を見る
              <ExternalLink className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl shadow-2xl"
          >
            <Image
              src="/ranking-first.png"
              alt="AI Reply Assistant Chrome拡張の最高評価画面"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Demo & Code Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              デモ・技術詳細
            </h2>
            <p className="text-lg text-gray-600">
              実装内容とソースコードを詳しくご覧ください
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">デモ動画・解説</h3>
              <div className="aspect-video bg-gray-100 rounded-lg mb-6 overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/UkSqxUgGLQY"
                  title="AI Reply Assistant Chrome拡張デモ動画"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
              <div className="text-sm text-gray-600">
                <p className="mb-2">• 多プラットフォーム統合デモ</p>
                <p className="mb-2">• AI支援返信機能の実演</p>
                <p>• Chrome拡張の操作方法解説</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">ソースコード</h3>
              <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm mb-6">
                <div className="mb-2"># Chrome Extension Structure</div>
                <div className="mb-2">├── manifest.json (V3)</div>
                <div className="mb-2">├── src/</div>
                <div className="mb-2">│   ├── background/</div>
                <div className="mb-2">│   ├── content/</div>
                <div className="mb-2">│   ├── popup/</div>
                <div className="mb-2">│   └── shared/</div>
                <div>└── Clean Architecture</div>
              </div>
              <Link
                href="https://github.com/kentaroh7777/ax-camp-test"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300"
              >
                GitHubでコードを確認
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                プロジェクト概要
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  AI Reply Assistant Chrome拡張は、AX camp テスト開発期間中に作成された
                  革新的なコミュニケーション支援ツールです。
                </p>
                <p>
                  Gmail、Discord、LINEなど複数のプラットフォームを統一インターフェースで管理し、
                  AIによる返信支援機能を提供します。完全自動化ではなく、
                  ユーザーの判断を重視した「手動支援」アプローチを採用。
                </p>
                <p>
                  株式会社AXから最高評価を獲得し、複数のコミュニケーションプラットフォームを
                  統一的に管理するシステムとして高く評価されました。
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    開発の詳細については
                    <Link 
                      href="https://h-fpo.com/development/ai-reply-assistant-chrome-extension.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline ml-1"
                    >
                      ブログ記事
                    </Link>
                    もご覧ください
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">対応プラットフォーム</h3>
                <div className="grid grid-cols-1 gap-4 mb-8">
                  {platforms.map((platform, index) => (
                    <motion.div
                      key={platform}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      className="flex items-center p-4 border-2 border-blue-100 rounded-lg"
                    >
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                      <span className="font-medium text-gray-800">{platform}</span>
                    </motion.div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">使用技術</h3>
                <div className="grid grid-cols-2 gap-3">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      className="bg-gray-50 px-3 py-2 rounded-lg text-center font-medium text-gray-800 text-sm"
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              主な機能・特徴
            </h2>
            <p className="text-lg text-gray-600">
              効率的なコミュニケーションを支援する豊富な機能
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Challenges */}
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
              技術的挑戦と解決策
            </h2>
            <p className="text-lg text-gray-600">
              複雑な技術課題を創意工夫で解決
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {technicalChallenges.map((challenge, index) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {challenge.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {challenge.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Evaluation Highlight */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-6 py-3 rounded-full font-semibold mb-8">
              <Star className="mr-2 h-6 w-6" />
              株式会社AXより最高評価獲得
            </div>
            <blockquote className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 leading-relaxed">
              「複数のコミュニケーションプラットフォームを統一的に管理し、
              AI支援による効率的な返信業務を実現するシステムとして高く評価されました。」
            </blockquote>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">統一管理</div>
                <p className="text-gray-600">複数プラットフォームの一元化</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">AI支援</div>
                <p className="text-gray-600">効率的な返信業務の実現</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">最高評価</div>
                <p className="text-gray-600">株式会社AXからの認定</p>
              </div>
            </div>
          </motion.div>
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
              各種AIツール開発
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              業務効率化、AI統合、複雑な技術要件のあるChrome拡張機能を含む、
              各種AIツールの開発をお任せください
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://github.com/kentaroh7777/ax-camp-test"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                ソースコードを見る
                <ExternalLink className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
              >
                開発を相談する
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}