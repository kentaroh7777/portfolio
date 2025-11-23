"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Globe, Clock, Code, Users, Wallet } from "lucide-react";

export default function JpycPaymentPage() {
  const projectStats = [
    { label: "開発期間", value: "2週間", icon: Clock },
    { label: "担当領域", value: "アプリ開発", icon: Code },
    { label: "実験期間", value: "2025年11月〜", icon: CalendarIcon },
    { label: "決済手段", value: "JPYC", icon: Wallet },
  ];

  const techStack = [
    "Vite",
    "TypeScript",
    "Web3",
    "JPYC",
    "Cloudflare",
    "Convex"
  ];

  const features = [
    {
      title: "JPYC決済機能",
      description: "Polygonネットワーク上のJPYCを使用したスムーズな決済フローを実現"
    },
    {
      title: "リアルタイム決済確認",
      description: "ブロックチェーン上のトランザクションを監視し、支払いを即座に検知"
    },
    {
      title: "直感的なUI",
      description: "店舗スタッフもお客様も迷わずに操作できるシンプルなインターフェース"
    },
    {
      title: "キャンペーン連携",
      description: "KryptoKyoto様での導入実験に合わせたキャンペーン情報の表示"
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
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              JPYC決済アプリ導入実験成功
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              KryptoKyoto様と共同で実施した、日本円ステーブルコイン「JPYC」を用いた店舗決済の導入実験。
              実店舗でのオペレーションを考慮した専用決済アプリを開発し、スムーズな暗号資産決済を実現しました。
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
              href="https://note.com/kenhfp/n/n50fe0965018c"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300"
            >
              記事を読む
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
            className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-200 aspect-video flex items-center justify-center"
          >
            {/* Placeholder for actual image */}
            <div className="text-gray-500 text-lg">
              <Image
                src="/jpyc-payment-banner.png"
                alt="JPYC決済アプリ"
                width={1200}
                height={630}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
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
                  2025年11月より、京都の「KryptoKyoto」様にてJPYC決済の導入実験を開始しました。
                  本プロジェクトでは、店舗スタッフが簡単に決済を受け付けられ、お客様もスムーズに支払いができる専用のWebアプリを開発しました。
                </p>
                <p>
                  ブロックチェーン決済特有の「着金確認の難しさ」や「操作の複雑さ」を解消するため、
                  直感的なUIとリアルタイムなトランザクション監視機能を実装しています。
                </p>
                <p>
                  実験期間中は、JPYC決済を利用したお客様向けの特別キャンペーンも実施され、
                  実店舗における暗号資産決済の有用性と課題を検証しています。
                </p>
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
              実店舗での利用を想定した機能設計
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              Web3決済の導入をご検討ですか？
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              店舗やECサイトへの暗号資産決済導入、
              ブロックチェーンを活用したシステム開発のご相談を承ります
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://note.com/kenhfp/n/n50fe0965018c"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                詳細記事を読む
                <ExternalLink className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
              >
                お問い合わせはこちら
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function CalendarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}
