"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, MessageCircle, Clock, MapPin, User, Briefcase } from "lucide-react";

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: "メール",
      value: "info@h-fpo.com",
      description: "お仕事のご相談、お見積もりはこちら",
      link: "mailto:info@h-fpo.com"
    },
    {
      icon: MessageCircle,
      title: "X (Twitter) DM",
      value: "@kabuco_h",
      description: "カジュアルなご相談はDMでもOK",
      link: "https://x.com/kabuco_h"
    }
  ];

  const services = [
    {
      icon: Briefcase,
      title: "Web開発",
      description: "Next.js、React、TypeScriptを使用したWebアプリケーション開発",
      examples: ["ECサイト", "管理システム", "ポートフォリオサイト", "コーポレートサイト"]
    },
    {
      icon: Briefcase,
      title: "AI開発・統合",
      description: "LLMを活用したAIツール開発、既存システムへのAI機能統合",
      examples: ["ChatGPT連携", "自動化ツール", "Chrome拡張", "AI支援アプリ"]
    },
    {
      icon: Briefcase,
      title: "ゲーム開発",
      description: "Webベースのゲーム開発、リアルタイム通信を活用したオンラインゲーム",
      examples: ["カードゲーム", "パズルゲーム", "対戦ゲーム", "教育ゲーム"]
    },
    {
      icon: Briefcase,
      title: "コンテンツ制作・マーケティング支援",
      description: "技術記事執筆、マーケティング戦略、コミュニティ運営支援",
      examples: ["技術記事", "企業ブログ", "マーケティング戦略", "SNS運用"]
    }
  ];

  const workingConditions = [
    {
      icon: Clock,
      title: "稼働時間",
      value: "平日9:00〜18:00",
      description: "時間外対応も相談可能"
    },
    {
      icon: MapPin,
      title: "対応エリア",
      value: "全国リモート対応",
      description: "必要に応じて打ち合わせも可能"
    },
    {
      icon: User,
      title: "時間単価",
      value: "3,000円〜",
      description: "プロジェクト内容により相談"
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
              お問い合わせ
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Web3、AI、ゲーム開発から商業出版・マーケティング支援まで、
              幅広いプロジェクトのご相談を承っております。
            </p>
            <div className="inline-flex items-center bg-green-100 text-green-800 px-6 py-3 rounded-full font-semibold">
              現在新規案件受付中
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
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
              連絡方法
            </h2>
            <p className="text-lg text-gray-600">
              お気軽にご連絡ください
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.link}
                target={method.link.startsWith('http') ? "_blank" : undefined}
                rel={method.link.startsWith('http') ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <method.icon className="text-blue-600 mr-4" size={32} />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{method.title}</h3>
                    <p className="text-lg text-blue-600 font-medium">{method.value}</p>
                  </div>
                </div>
                <p className="text-gray-600">{method.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
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
              対応可能サービス
            </h2>
            <p className="text-lg text-gray-600">
              幅広い技術分野でのお手伝いが可能です
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex items-start mb-4">
                  <service.icon className="text-blue-600 mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  </div>
                </div>
                <div className="ml-10">
                  <h4 className="font-semibold text-gray-900 mb-2">対応例</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.examples.map((example) => (
                      <span
                        key={example}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Conditions */}
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
              稼働条件
            </h2>
            <p className="text-lg text-gray-600">
              柔軟な対応が可能です
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {workingConditions.map((condition, index) => (
              <motion.div
                key={condition.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <condition.icon className="mx-auto mb-4 text-blue-600" size={32} />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{condition.title}</h3>
                <p className="text-xl text-blue-600 font-semibold mb-2">{condition.value}</p>
                <p className="text-gray-600 text-sm">{condition.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Profile Summary */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              プロフィール
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto"
          >
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                2024年からAIの可能性を強く感じ、AIエンジニア・AIプログラマーにリスキリング。
                会社員時代から培っていたエンジニアスキルを活かし、2025年からクライアントワーク開始。
              </p>
              <p>
                おかげさまで開始直後からクライアント様の契約を頂いています（時間単価3,000円以上）。
              </p>
              <p>
                FP（ファイナンシャルプランナー）であることも活かし、
                特に数字に強いAIエンジニアとして活動しています。
              </p>
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
              まずはお気軽にご相談ください
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              プロジェクトの規模や期間に関わらず、
              どのようなご相談でも歓迎いたします
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@h-fpo.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                メールで相談する
              </a>
              <a
                href="https://x.com/kabuco_h"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                X (Twitter) で相談する
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}