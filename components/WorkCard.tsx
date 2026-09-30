"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
    <Link href={link} className="group block h-full">
      <motion.div
        whileHover={{ y: -4 }}
        className="flex h-full cursor-pointer flex-col overflow-hidden rounded-[28px] bg-white p-2 shadow-soft ring-1 ring-ink/5 transition-shadow duration-300 group-hover:shadow-pop"
      >
        <div className="relative h-48 overflow-hidden rounded-[20px] bg-cream">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {badge && (
            <div className="absolute right-3 top-3 rounded-full bg-sakura px-3 py-1 text-sm font-bold text-white shadow-soft">{badge}</div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-5">
          <h3 className="mb-2 font-round text-xl font-extrabold text-ink transition-colors group-hover:text-sun">{title}</h3>
          <p className="mb-4 flex-1 leading-relaxed text-ink/65">{description}</p>

          {stats && (
            <div className="mb-4 flex gap-4 text-sm font-medium text-ink/50">
              {stats.reposts && <span>リポスト {stats.reposts}</span>}
              {stats.likes && <span>いいね {stats.likes}</span>}
              {stats.views && <span>{stats.views}表示</span>}
            </div>
          )}

          <div className="flex items-end justify-between gap-3">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="rounded-full bg-cream px-3 py-1 text-xs font-bold text-ink/70 ring-1 ring-orange-100">
                  {tag}
                </span>
              ))}
            </div>
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-orange-50 text-sun transition-all group-hover:bg-sun group-hover:text-white">
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default WorkCard;
