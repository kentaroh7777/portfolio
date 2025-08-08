"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface WorkCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  stats?: {
    reposts?: number;
    likes?: number;
    views?: string;
  };
  badge?: string;
  tags: string[];
  link: string;
}

const WorkCard = ({ title, description, image, stats, badge, tags, link }: WorkCardProps) => {
  return (
    <Link href={link}>
      <motion.div
        whileHover={{ y: -2 }}
        className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer h-full flex flex-col hover:shadow-lg transition-all duration-300"
      >
        <div className="relative h-48 bg-gray-50">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {badge && (
            <div className="absolute top-4 right-4 px-3 py-1 bg-accent text-white rounded-full text-sm font-semibold">
              {badge}
            </div>
          )}
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
          <p className="text-gray-600 mb-4 flex-1 leading-relaxed">{description}</p>

          {stats && (
            <div className="flex gap-4 mb-4 text-sm text-gray-500">
              {stats.reposts && (
                <span>リポスト {stats.reposts}</span>
              )}
              {stats.likes && (
                <span>いいね {stats.likes}</span>
              )}
              {stats.views && (
                <span>{stats.views}表示</span>
              )}
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default WorkCard;