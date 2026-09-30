"use client";

import { motion } from "framer-motion";
import Chibi from "@/components/Chibi";

const skills = [
  {
    category: "アニメ・動画・3D",
    items: ["AI動画生成", "動画編集・音付け", "3Dモデル（Blender）", "2Dパペット"],
    icon: "🎬",
    tone: "from-orange-50 to-pink-50 ring-orange-100",
  },
  {
    category: "AI/機械学習",
    items: ["ChatGPT API", "Claude API", "Prompt Engineering", "MCPサーバー"],
    icon: "🤖",
    tone: "from-sky-50 to-indigo-50 ring-sky-100",
  },
  {
    category: "フロントエンド",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
    icon: "🎨",
    tone: "from-pink-50 to-orange-50 ring-pink-100",
  },
  {
    category: "バックエンド",
    items: ["Next/Node.js", "Python", "SQL", "MongoDB", "DynamoDB"],
    icon: "⚙️",
    tone: "from-emerald-50 to-sky-50 ring-emerald-100",
  },
  {
    category: "データ分析",
    items: ["データ可視化", "統計分析", "FP知識"],
    icon: "📊",
    tone: "from-amber-50 to-orange-50 ring-amber-100",
  },
];

const SkillSection = () => {
  return (
    <section className="relative overflow-hidden bg-cream-dots py-20 lg:py-28">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mb-16 text-center"
        >
          <span className="section-label">SKILLS</span>
          <h2 className="section-title mt-4">Skills &amp; Experience</h2>
          <p className="mt-4 text-lg text-ink/60">映像から開発まで、幅広い技術で価値を提供</p>
          <Chibi pose="scroll" height={160} motion="bob" bubble="ふむふむ…" bubbleSide="left" className="absolute -top-6 right-0 hidden lg:block" />
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`rounded-[28px] bg-gradient-to-br p-6 ring-1 card-hover ${skill.tone}`}
            >
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-white text-2xl shadow-soft">{skill.icon}</div>
              <h3 className="mb-4 font-round text-lg font-extrabold text-ink">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center text-ink/70">
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-sun" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
