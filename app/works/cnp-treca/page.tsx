"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Globe, Clock, Code, Users } from "lucide-react";

export default function CNPTrecaPage() {
  const projectStats = [
    { label: "開発期間", value: "6ヶ月", icon: Clock },
    { label: "実質開発工数", value: "10人月", icon: Users },
    { label: "コード行数", value: "約4万行", icon: Code },
    { label: "デモサイト", value: "公開中", icon: Globe },
  ];

  const techStack = [
    "Next.js",
    "TypeScript",
    "Socket.js",
    "MongoDB",
    "Google Cloud",
    "DnD Kit"
  ];

  const features = [
    {
      title: "リアルタイム対戦",
      description: "WebSocketを使用した双方向通信により、スムーズなオンライン対戦を実現"
    },
    {
      title: "CPU対戦機能",
      description: "合法手生成アルゴリズムを実装したCPU相手との対戦が可能"
    },
    {
      title: "直感的なUI",
      description: "ドラッグ&ドロップ操作でカードゲームの臨場感を再現"
    },
    {
      title: "マルチデバイス対応",
      description: "モバイル、タブレット、PCすべてに最適化されたレスポンシブデザイン"
    },
    {
      title: "ゲームルール完全再現",
      description: "実物のカードゲームルールを忠実にデジタル化"
    },
    {
      title: "堅牢なエラーハンドリング",
      description: "ネットワーク切断時の再接続機能など、安定したゲーム体験を提供"
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
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              CNPトレカアプリ開発
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              リアルカードゲームのオンライン化の可能性を検証した本格的なWebアプリケーション。
              初心者でも気軽にCNPトレカを楽しめるゲーム体験を提供。現在も継続開発中です（本アプリは株式会社モノリスおよび株式会社ORGの許可を得て開発しています）。
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
              href="https://cnp-tcg-62972841056.asia-northeast1.run.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300"
            >
              デモサイトを見る
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
              src="/cnp-traca-banner.jpeg"
              alt="CNPトレカアプリのスクリーンショット"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              デモ・操作体験
            </h2>
            <p className="text-lg text-gray-600">
              実際のゲームプレイを体験してみてください
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">ライブデモ</h3>
              <div className="aspect-video bg-gray-100 rounded-lg mb-6 overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/eQig2LT7heo"
                  title="CNPトレカアプリ開発デモ動画"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
              <div className="text-center mb-6">
                <Link
                  href="https://cnp-tcg-62972841056.asia-northeast1.run.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
                >
                  デモサイトでプレイ
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="text-sm text-gray-600">
                <p className="mb-2">• モバイル、タブレット、PC対応</p>
                <p className="mb-2">• CPU対戦とオンライン対戦</p>
                <p>• ブラウザで即座にプレイ可能</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">機能ハイライト</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">ドラッグ&ドロップ操作</h4>
                    <p className="text-gray-600 text-sm">直感的なカード操作でゲームの臨場感を再現</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">リアルタイム対戦</h4>
                    <p className="text-gray-600 text-sm">WebSocketによる即座なゲーム状態同期</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">CPU対戦AI</h4>
                    <p className="text-gray-600 text-sm">合法手生成による賢いCPU対戦相手</p>
                  </div>
                </div>
              </div>
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
                  CNPトレカアプリは、人気のCNP（CryptoNinja Partners）トレーディングカードゲームを
                  オンラインで楽しめるWebアプリケーションです。
                </p>
                <p>
                  実物のカードゲームの複雑なルールを完全に再現し、リアルタイムでの対戦機能を実装。
                  初心者でも直感的に操作できるUI/UXを重視した設計となっています。
                </p>
                <p>
                  6ヶ月間の集中的な開発により、約4万行のコードで構築された本格的なゲームアプリケーションです。
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    詳細な開発過程については
                    <Link 
                      href="https://h-fpo.com/development/tracaonline.html" 
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">使用技術</h3>
              <div className="grid grid-cols-2 gap-3">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="bg-white px-4 py-3 rounded-lg shadow-sm text-center font-medium text-gray-800"
                  >
                    {tech}
                  </motion.div>
                ))}
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
              ユーザー体験を重視した充実の機能群
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

      {/* Development Details */}
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
              開発のポイント
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">技術的挑戦</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">1</span>
                  <span>リアルタイム双方向通信によるスムーズな対戦体験の実現</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">2</span>
                  <span>複雑なカードゲームルールの完全なデジタル化</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">3</span>
                  <span>サーバーサイドでの一元的なゲーム状態管理</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">4</span>
                  <span>柔軟なカード効果システムの実装</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">成果・反響</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">✓</span>
                  <span>リアルカードゲームのオンライン化可能性を実証</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">✓</span>
                  <span>初心者にも分かりやすいUI/UXを実現</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">✓</span>
                  <span>安定したネットワーク対戦環境の構築</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">✓</span>
                  <span>今後のAI対戦機能強化への基盤確立</span>
                </li>
              </ul>
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
              このような開発にご興味はありませんか？
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Web3、リアルタイム通信、ゲーム開発など、
              技術的挑戦のあるプロジェクトのご相談を承ります
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://cnp-tcg-62972841056.asia-northeast1.run.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                デモを体験する
                <ExternalLink className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
              >
                プロジェクトを相談する
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}