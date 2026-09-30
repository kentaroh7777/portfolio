/* eslint-disable @next/next/no-img-element */
// ちびキャラ「こより」。透過PNGを重ね、まばたき差分があるポーズは CSS だけで瞬かせる。
// next/image を使わないのは、差分3枚を同じ box にピクセル単位で重ねる必要があるため。

type Motion = "float" | "bob" | "sway" | "flutter" | "none";

type PoseAsset = {
  src: string;
  half?: string;
  closed?: string;
  // 画像の縦横比（width / height）。レイアウトのガタつきを防ぐ
  ratio: number;
  // 宙に浮いている絵。影を離して小さくする
  airborne?: boolean;
};

const POSES = {
  genki: {
    src: "/chibi/chara-koyori-genki.png",
    half: "/chibi/chara-koyori-genki-half.png",
    closed: "/chibi/chara-koyori-genki-closed.png",
    ratio: 205 / 420,
  },
  guide: {
    src: "/chibi/chara-koyori-guide.png",
    half: "/chibi/chara-koyori-guide-half.png",
    closed: "/chibi/chara-koyori-guide-closed.png",
    ratio: 168 / 420,
  },
  make: {
    src: "/chibi/chara-koyori-make.png",
    half: "/chibi/chara-koyori-make-half.png",
    closed: "/chibi/chara-koyori-make-closed.png",
    ratio: 189 / 420,
  },
  odoroki: {
    src: "/chibi/chara-koyori-odoroki.png",
    half: "/chibi/chara-koyori-odoroki-half.png",
    closed: "/chibi/chara-koyori-odoroki-closed.png",
    ratio: 172 / 420,
  },
  kachi: {
    src: "/chibi/chara-koyori-kachi.png",
    ratio: 208 / 420,
  },
  // 以下はポートフォリオ用に描き起こした新ポーズ（原本は assets-src/chibi）
  clapper: { src: "/chibi/new/koyori-clapper.webp", ratio: 581 / 800, airborne: true },
  flipbook: { src: "/chibi/new/koyori-flipbook.webp", ratio: 430 / 800 },
  present: { src: "/chibi/new/koyori-present.webp", ratio: 437 / 800 },
  popcorn: { src: "/chibi/new/koyori-popcorn.webp", ratio: 560 / 800, airborne: true },
  point: { src: "/chibi/new/koyori-point.webp", ratio: 593 / 800, airborne: true },
  scroll: { src: "/chibi/new/koyori-scroll.webp", ratio: 406 / 800 },
  letter: { src: "/chibi/new/koyori-letter.webp", ratio: 581 / 800, airborne: true },
  fly: { src: "/chibi/new/koyori-fly.webp", ratio: 586 / 800, airborne: true },
} satisfies Record<string, PoseAsset>;

export type ChibiPose = keyof typeof POSES;

const MOTION_CLASS: Record<Motion, string> = {
  float: "animate-float",
  bob: "animate-bob",
  sway: "animate-sway origin-bottom",
  flutter: "animate-flutter",
  none: "",
};

type ChibiProps = {
  pose: ChibiPose;
  height: number;
  motion?: Motion;
  bubble?: string;
  bubbleSide?: "left" | "right";
  className?: string;
  delay?: number;
};

const Chibi = ({
  pose,
  height,
  motion = "bob",
  bubble,
  bubbleSide = "right",
  className = "",
  delay = 0,
}: ChibiProps) => {
  const asset: PoseAsset = POSES[pose];
  const width = Math.round(height * asset.ratio);
  const airborne = asset.airborne ?? false;
  const animStyle = { animationDelay: `${delay}s` };
  // relative と absolute を同時に付けると relative が勝つため、配置指定があるときは付けない
  const position = /\b(absolute|fixed)\b/.test(className) ? "" : "relative";

  return (
    <div className={`pointer-events-none select-none ${position} ${className}`} style={{ width, height }} aria-hidden="true">
      {bubble && (
        <div
          className={`absolute -top-2 z-10 whitespace-nowrap rounded-2xl bg-white px-3 py-1.5 font-round text-sm font-bold text-ink shadow-soft ring-1 ring-ink/10 ${
            bubbleSide === "right" ? "left-[70%]" : "right-[70%]"
          }`}
        >
          {bubble}
        </div>
      )}
      <div
        className={`absolute left-1/2 -translate-x-1/2 rounded-[50%] bg-ink/15 blur-[2px] ${airborne ? "bottom-[-14px] h-2 w-[45%] animate-pulse" : "bottom-0 h-2.5 w-[70%]"}`}
      />
      <div className={`absolute inset-0 ${MOTION_CLASS[motion]}`} style={animStyle}>
        <img src={asset.src} alt="" width={width} height={height} className="absolute inset-0 h-full w-full object-contain" draggable={false} />
        {asset.half && (
          <img src={asset.half} alt="" width={width} height={height} className="absolute inset-0 h-full w-full object-contain opacity-0 animate-blinkHalf" style={animStyle} draggable={false} />
        )}
        {asset.closed && (
          <img src={asset.closed} alt="" width={width} height={height} className="absolute inset-0 h-full w-full object-contain opacity-0 animate-blinkClosed" style={animStyle} draggable={false} />
        )}
      </div>
    </div>
  );
};

export default Chibi;
