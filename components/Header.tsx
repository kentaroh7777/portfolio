"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: "/#services", label: "制作サービス" },
    { href: "/#videos", label: "動画" },
    { href: "/works", label: "実績" },
    { href: "/contact", label: "お問い合わせ" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-white/85 backdrop-blur-md">
      <nav className="container-custom">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link href="/" className="group flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-sun to-sakura font-round text-lg font-extrabold text-white shadow-soft transition-transform group-hover:rotate-6">
              林
            </span>
            <span className="leading-tight">
              <span className="block font-round text-lg font-extrabold text-ink">林</span>
              <span className="block text-xs font-medium text-ink/60">AIエンジニア × アニメ・動画制作</span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {menuItems.slice(0, 3).map((item) => (
              <Link key={item.href} href={item.href} className="font-bold text-ink/70 transition-colors hover:text-sun">
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary !px-5 !py-2.5 text-sm">
              お問い合わせ
            </Link>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="メニュー">
            <div className="flex h-6 w-6 flex-col justify-center space-y-1.5">
              <motion.span animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 8 : 0 }} className="block h-0.5 w-full origin-center bg-ink" />
              <motion.span animate={{ opacity: isMenuOpen ? 0 : 1 }} className="block h-0.5 w-full bg-ink" />
              <motion.span animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0 }} className="block h-0.5 w-full origin-center bg-ink" />
            </div>
          </button>
        </div>

        <motion.div initial={{ height: 0 }} animate={{ height: isMenuOpen ? "auto" : 0 }} className="overflow-hidden md:hidden">
          <div className="space-y-3 py-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block font-bold text-ink/70 transition-colors hover:text-sun"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;
