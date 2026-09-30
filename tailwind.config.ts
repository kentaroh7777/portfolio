import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 白地に映える明るい差し色。こより（紺×白×金）とシャオラン（橙）から取る
        ink: "#1E2346",
        sun: "#FF8A3D",
        sky: "#3E9BFF",
        sakura: "#FF6FA5",
        mint: "#2CC6A0",
        cream: "#FFF8EF",
        primary: "#FF8A3D",
        secondary: "#6B7280",
        accent: "#FF6FA5",
        dark: "#1E2346",
        light: "#FFFFFF",
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-noto-sans-jp)", "sans-serif"],
        round: ["var(--font-rounded)", "var(--font-noto-sans-jp)", "sans-serif"],
        mono: ["Fira Code", "Source Code Pro", "monospace"],
      },
      boxShadow: {
        pop: "0 6px 0 0 rgba(30,35,70,0.08), 0 18px 40px -12px rgba(30,35,70,0.18)",
        soft: "0 10px 30px -12px rgba(30,35,70,0.15)",
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        slideUp: "slideUp 0.5s ease-out",
        float: "float 3.2s ease-in-out infinite",
        bob: "bob 2.4s ease-in-out infinite",
        sway: "sway 3.6s ease-in-out infinite",
        flutter: "flutter 5.5s ease-in-out infinite",
        blinkHalf: "blinkHalf 4.2s steps(1) infinite",
        blinkClosed: "blinkClosed 4.2s steps(1) infinite",
        marquee: "marquee 40s linear infinite",
        spinSlow: "spin 18s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        bob: {
          "0%, 100%": { transform: "translateY(0) scaleY(1)" },
          "45%": { transform: "translateY(-6px) scaleY(1.01)" },
          "55%": { transform: "translateY(-6px) scaleY(1.01)" },
        },
        sway: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        // 宙に浮くポーズ用。上下に漂いながら、わずかに傾きを変える
        flutter: {
          "0%, 100%": { transform: "translate(0, 0) rotate(-3deg)" },
          "30%": { transform: "translate(6px, -14px) rotate(2deg)" },
          "60%": { transform: "translate(-4px, -6px) rotate(-1deg)" },
        },
        // まばたき: 半目→閉じ→半目を 4.2 秒周期の終わりに一瞬だけ出す
        blinkHalf: {
          "0%, 91%": { opacity: "0" },
          "92%": { opacity: "1" },
          "93%, 95%": { opacity: "0" },
          "96%": { opacity: "1" },
          "97%, 100%": { opacity: "0" },
        },
        blinkClosed: {
          "0%, 92%": { opacity: "0" },
          "93%": { opacity: "1" },
          "96%, 100%": { opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
