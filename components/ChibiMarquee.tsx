/* eslint-disable @next/next/no-img-element */
// サービスの見出し語と、こよりの顔ぶれを流す帯。
const WORDS = ["キャラ紹介アニメ", "SNS動画", "PV制作", "3Dモデル", "士業・専門家PV", "Webアプリ開発", "MCPサーバー", "Chrome拡張"];
const FACES = ["genki", "kachi", "odoroki", "guide"];

const ChibiMarquee = () => {
  const items = WORDS.map((w, i) => ({ w, face: FACES[i % FACES.length] }));
  // 2周分並べて -50% 送ると継ぎ目なく回る
  const loop = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-orange-100 bg-gradient-to-r from-orange-50 via-pink-50 to-sky-50 py-3" aria-hidden="true">
      <div className="flex w-max animate-marquee items-center gap-8 pr-8">
        {loop.map((it, i) => (
          <span key={i} className="flex items-center gap-3 whitespace-nowrap">
            <span className="h-10 w-10 overflow-hidden rounded-full bg-white ring-2 ring-white shadow-soft">
              <img src={`/chibi/chara-koyori-${it.face}.png`} alt="" className="h-[250%] w-full object-cover object-top" />
            </span>
            <span className="font-round text-lg font-extrabold text-ink/80">{it.w}</span>
            <span className="text-sun">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default ChibiMarquee;
