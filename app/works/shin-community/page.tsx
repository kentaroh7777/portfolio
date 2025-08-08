"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, BookOpen, Users, TrendingUp, Award } from "lucide-react";

export default function ShinCommunityPage() {
  const bookStats = [
    { label: "販売部数", value: "3,000部", icon: BookOpen },
    { label: "完売期間", value: "3.5日", icon: TrendingUp },
    { label: "共著者", value: "5名", icon: Users },
    { label: "評価", value: "高評価", icon: Award },
  ];

  const chapters = [
    {
      title: "はじめに",
      description: "Web3コミュニティマーケティングの可能性と本書の目的を解説",
      author: "林担当"
    },
    {
      title: "第2章",
      description: "コミュニティマーケティングの理論と基本概念",
      author: "林担当"
    },
    {
      title: "第3章", 
      description: "Web3時代における実践的なマーケティング手法",
      author: "林担当"
    }
  ];

  const keyFeatures = [
    {
      title: "企業向け実践ガイド",
      description: "マーケティング担当者が具体的に活用できる手法を詳しく解説"
    },
    {
      title: "Web3初心者にも分かりやすい",
      description: "専門知識がなくても理解できる丁寧な説明で構成"
    },
    {
      title: "コミュニティの力を重視",
      description: "従来のマーケティングとは異なる、コミュニティ中心のアプローチを提案"
    },
    {
      title: "実践的な事例紹介",
      description: "CNPコミュニティなど成功事例を基にした具体的なノウハウ"
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
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              シン・コミュニティマーケティング
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Web3時代のコミュニティを活用したマーケティングの仕組みと事例を解説した商業出版。
              企業のマーケティング担当者向けに実践的なノウハウを提供。
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {bookStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white rounded-lg p-4 shadow-lg text-center min-w-[120px]"
                >
                  <stat.icon className="mx-auto mb-2 text-purple-600" size={24} />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            <div className="inline-flex items-center px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold text-lg">
              <BookOpen className="mr-2 h-5 w-5" />
              商業出版・完売
            </div>
          </motion.div>
        </div>
      </section>

      {/* Book Image */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl max-w-md">
              <Image
                src="/shin-community-book.jpg"
                alt="シン・コミュニティマーケティング書籍"
                width={400}
                height={600}
                className="w-full h-auto"
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
                出版概要
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  「シン・コミュニティマーケティング」は、Web3時代における新しいマーケティングアプローチを
                  企業のマーケティング担当者向けに解説した商業出版です。
                </p>
                <p>
                  CNP出版部として5名の共著で執筆し、林は「はじめに」「第2章」「第3章」を担当。
                  10年以上のブログ・メルマガ執筆経験を活かした実践的な内容となっています。
                </p>
                <p>
                  2024年12月の予約開始から3.5日で3,000部完売という好調な売れ行きを記録し、
                  Amazonでも高い評価を獲得しました。
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    出版の詳細については
                    <Link 
                      href="https://h-fpo.com/web3/shincomubook.html" 
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
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">林担当章</h3>
              <div className="space-y-4">
                {chapters.map((chapter, index) => (
                  <motion.div
                    key={chapter.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="border-l-4 border-purple-500 pl-4"
                  >
                    <h4 className="font-semibold text-gray-900">{chapter.title}</h4>
                    <p className="text-sm text-gray-600">{chapter.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
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
              本書の特徴
            </h2>
            <p className="text-lg text-gray-600">
              Web3マーケティングの理論と実践を分かりやすく解説
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyFeatures.map((feature, index) => (
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

      {/* Impact & Results */}
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
              成果と反響
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">販売成果</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="bg-purple-100 text-purple-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">1</span>
                  <span>予約開始から3.5日で3,000部完売の快挙</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-100 text-purple-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">2</span>
                  <span>Amazonで継続的な高評価を獲得</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-100 text-purple-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">3</span>
                  <span>CNPトレカとの戦略的な連携でブランド価値向上</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-100 text-purple-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">4</span>
                  <span>オリジナルCNPトレカ付きの差別化戦略</span>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">執筆の価値</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">✓</span>
                  <span>10年以上のコンテンツ制作経験の集大成</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">✓</span>
                  <span>Web3分野における専門性の証明</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">✓</span>
                  <span>企業向けマーケティング支援の実績構築</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">✓</span>
                  <span>コミュニティマーケティング分野でのポジション確立</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section
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
              コンテンツ制作・マーケティング支援
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              10年以上のコンテンツ制作経験と商業出版実績を活かした
              マーケティング支援、執筆・編集業務のご相談を承ります
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
              >
                コンテンツ制作を相談する
              </Link>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
}