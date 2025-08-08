"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "AI/機械学習",
    items: ["ChatGPT API", "Claude API", "Prompt Engineering", "MCPサーバー"],
    icon: "🤖",
  },
  {
    category: "フロントエンド",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
    icon: "🎨",
  },
  {
    category: "バックエンド",
    items: ["Next/Node.js", "Python", "SQL", "MongoDB", "DynamoDB"],
    icon: "⚙️",
  },
  {
    category: "データ分析",
    items: ["データ可視化", "統計分析", "FP知識"],
    icon: "📊",
  },
];

const SkillSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Skills & Experience</h2>
          <p className="text-lg text-gray-600">幅広い技術スタックで価値を提供</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-gray-600 flex items-center">
                    <span className="text-black mr-2 text-sm">•</span>
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