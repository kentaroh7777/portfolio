"use client";

/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import Chibi from "@/components/Chibi";
import { ClickVideo, LiteYouTube, LoopVideo } from "@/components/media";

// 題名と説明は各LP（lp.kenty.app/tdanime・anime-puppet・shigyopv）の掲載文に合わせる
const featured = [
  {
    kind: "youtube" as const,
    id: "pMi4N6IxR4U",
    tag: "ANIMATION / ファンメイドPV",
    title: "月蝕綺譚リリース記念｜シャオランが歌う1分映像",
    text: "シャオランの歌唱と、戦闘・光の演出を組み合わせた1分映像。",
  },
  {
    kind: "click" as const,
    src: "https://lp.kenty.app/assets/landingpages/tdanime/soranowaza.mp4",
    poster: "/media/tdanime/soranowaza-poster.webp",
    tag: "ANIMATION / コンテスト作品",
    title: "そらのわざ（CryptoNinja夏のAIアニメコンテスト）",
    text: "本編・約2分7秒。音声付きでご覧いただけます。",
  },
];

const puppets = [
  {
    src: "/media/puppet/cut2-talk.mp4",
    poster: "/media/puppet/cut2-talk-thumb.webp",
    tag: "動くキャラクター",
    title: "話しかけると口が動いて返事をする",
    span: "",
    fit: "object-cover",
  },
  {
    src: "/media/puppet/cut4-three.mp4",
    poster: "/media/puppet/cut4-three-thumb.webp",
    tag: "動くキャラクター",
    title: "咲耶・ネム・シャオランの3人が同時に動く",
    span: "md:col-span-2",
    fit: "!object-contain",
  },
];

const stories = [1, 2, 3, 4].map((n, i) => ({
  src: `/media/shigyopv/shigyopv-story-${n}-20260928.mp4`,
  poster: `/media/shigyopv/shigyopv-story-${n}-20260928-thumb.webp`,
  title: ["言葉に、表情を添える。", "相談の場面が、見えてくる。", "専門性の向こうに、人が見える。", "「相談してみよう」の、一歩へ。"][i],
}));

const threeD = [
  { kind: "image" as const, src: "/media/tdanime/xiaolan-model.webp", title: "シャオランの3Dモデル", text: "衣装や髪を含めた立体化の作例" },
  { kind: "youtube" as const, id: "iipMDnUe1Vg", title: "月蝕綺譚「エマ」喜びの舞！", text: "髪揺れ、振袖の揺れを工夫" },
  { kind: "youtube" as const, id: "yD2llFI88oc", title: "Astra x Blenderの制作例", text: "仮想の邸宅をウォークスルーする動画" },
];

const devDemos = [
  { id: "eQig2LT7heo", title: "CNPトレカアプリ開発 デモ" },
  { id: "UkSqxUgGLQY", title: "AI Reply Assistant Chrome拡張 デモ" },
  { id: "BLRgHETopOg", title: "AI駆動 爆速開発手法（card-search / メタタグDB）デモ" },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, delay },
});

const VideoGallery = () => {
  return (
    <section id="videos" className="relative scroll-mt-20 overflow-hidden bg-cream-dots py-20 lg:py-28">
      <div className="container-custom relative">
        <motion.div {...fade()} className="relative mb-14 text-center">
          <span className="section-label">VIDEOS</span>
          <h2 className="section-title mt-4">動画・3Dの制作例</h2>
          <p className="mt-4 text-lg text-ink/60">アニメーション、動くキャラクター、紹介PV、3Dモデル</p>
          <Chibi pose="popcorn" height={170} motion="flutter" bubble="わぁ…！" bubbleSide="left" className="absolute -top-8 right-0 hidden lg:block" />
        </motion.div>

        {/* 本編 2本 */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {featured.map((v, i) => (
            <motion.div key={v.title} {...fade(i * 0.1)} className="overflow-hidden rounded-[28px] bg-white p-2.5 shadow-pop ring-1 ring-ink/5">
              <div className="aspect-video overflow-hidden rounded-[20px] bg-ink/5">
                {v.kind === "youtube" ? <LiteYouTube id={v.id} title={v.title} /> : <ClickVideo src={v.src} poster={v.poster} title={v.title} />}
              </div>
              <div className="px-3 pb-3 pt-4">
                <div className="text-xs font-bold tracking-wider text-sun">{v.tag}</div>
                <h3 className="mt-1 font-round text-xl font-extrabold text-ink">{v.title}</h3>
                <p className="mt-1 text-sm text-ink/60">{v.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 動くキャラクター */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {puppets.map((v, i) => (
            <motion.figure key={v.src} {...fade(i * 0.08)} className={`overflow-hidden rounded-3xl bg-white p-2 shadow-soft ring-1 ring-ink/5 card-hover ${v.span}`}>
              <div className="h-64 overflow-hidden rounded-2xl bg-white lg:h-72">
                <LoopVideo src={v.src} poster={v.poster} label={v.title} className={v.fit} />
              </div>
              <figcaption className="px-2 pb-2 pt-3">
                <div className="text-xs font-bold text-sakura">{v.tag}</div>
                <div className="mt-0.5 font-bold text-ink">{v.title}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* 士業PV デモの4場面 */}
        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stories.map((v, i) => (
            <motion.figure key={v.src} {...fade(i * 0.08)} className="overflow-hidden rounded-3xl bg-white p-2 shadow-soft ring-1 ring-ink/5 card-hover">
              <div className="aspect-video overflow-hidden rounded-2xl bg-ink/5">
                <LoopVideo src={v.src} poster={v.poster} label={v.title} />
              </div>
              <figcaption className="px-2 pb-1 pt-3">
                <div className="text-xs font-bold text-sky">士業PV・制作デモ {i + 1}/4</div>
                <div className="mt-0.5 text-sm font-bold text-ink">{v.title}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
        <p className="mt-3 text-center text-xs text-ink/50">士業PVの映像は制作デモです（実在のお客様の実績ではありません）</p>

        {/* 3D */}
        <motion.h3 {...fade()} className="mt-20 text-center font-round text-2xl font-extrabold text-ink sm:text-3xl">
          3Dモデル・3D映像
        </motion.h3>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {threeD.map((v, i) => (
            <motion.div key={v.title} {...fade(i * 0.08)} className="overflow-hidden rounded-3xl bg-white p-2 shadow-soft ring-1 ring-ink/5">
              <div className="aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-sky-50 to-pink-50">
                {v.kind === "image" ? (
                  <img src={v.src} alt={v.title} className="h-full w-full object-contain" loading="lazy" />
                ) : (
                  <LiteYouTube id={v.id} title={v.title} />
                )}
              </div>
              <div className="px-2 pb-2 pt-3">
                <div className="font-bold text-ink">{v.title}</div>
                <div className="text-sm text-ink/60">{v.text}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 開発デモ */}
        <motion.h3 {...fade()} className="mt-20 text-center font-round text-2xl font-extrabold text-ink sm:text-3xl">
          アプリ開発のデモ動画
        </motion.h3>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {devDemos.map((v, i) => (
            <motion.div key={v.id} {...fade(i * 0.08)} className="overflow-hidden rounded-3xl bg-white p-2 shadow-soft ring-1 ring-ink/5">
              <div className="aspect-video overflow-hidden rounded-2xl bg-ink/5">
                <LiteYouTube id={v.id} title={v.title} />
              </div>
              <div className="px-2 pb-2 pt-3 text-sm font-bold text-ink">{v.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
