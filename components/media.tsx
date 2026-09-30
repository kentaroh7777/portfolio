"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

/**
 * 無音ループ動画。画面に入っている間だけ再生し、外れたら止める。
 * 動画を多く並べてもCPUと通信を食わないようにするため。
 */
export function LoopVideo({
  src,
  poster,
  label,
  className = "",
}: {
  src: string;
  poster?: string;
  label: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className={`h-full w-full object-cover ${className}`}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label}
    />
  );
}

/** クリックで初めて iframe を読み込む YouTube。ページ表示を重くしないため。 */
export function LiteYouTube({ id, title }: { id: string; title: string }) {
  const [active, setActive] = useState(false);
  if (active) {
    return (
      <iframe
        className="h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  }
  return (
    <button type="button" onClick={() => setActive(true)} className="group relative h-full w-full" aria-label={`${title} を再生`}>
      <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" className="h-full w-full object-cover" loading="lazy" />
      <PlayBadge />
    </button>
  );
}

/** 音声付きの本編動画。クリックで読み込んで再生する。 */
export function ClickVideo({ src, poster, title }: { src: string; poster: string; title: string }) {
  const [active, setActive] = useState(false);
  if (active) {
    return <video className="h-full w-full bg-black object-contain" src={src} poster={poster} controls autoPlay playsInline aria-label={title} />;
  }
  return (
    <button type="button" onClick={() => setActive(true)} className="group relative h-full w-full" aria-label={`${title} を再生`}>
      <img src={poster} alt="" className="h-full w-full object-cover" loading="lazy" />
      <PlayBadge />
    </button>
  );
}

function PlayBadge() {
  return (
    <span className="absolute inset-0 grid place-items-center bg-ink/10 transition-colors group-hover:bg-ink/0">
      <span className="grid h-16 w-16 place-items-center rounded-full bg-white/95 text-sun shadow-pop transition-transform group-hover:scale-110">
        <Play className="ml-1 h-7 w-7" fill="currentColor" />
      </span>
    </span>
  );
}
