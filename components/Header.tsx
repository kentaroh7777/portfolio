"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: "/", label: "ホーム" },
    { href: "/works", label: "実績" },
    { href: "/contact", label: "お問い合わせ" },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-gray-600 transition-colors">
            林｜AIとWeb3 F/Bエンジニア
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニュー"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <motion.span
                animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 8 : 0 }}
                className="block w-full h-0.5 bg-gray-900 origin-center"
              />
              <motion.span
                animate={{ opacity: isMenuOpen ? 0 : 1 }}
                className="block w-full h-0.5 bg-gray-900"
              />
              <motion.span
                animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0 }}
                className="block w-full h-0.5 bg-gray-900 origin-center"
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: isMenuOpen ? "auto" : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-3">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-gray-600 hover:text-gray-900 transition-colors duration-300 font-medium"
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