// 制作サービス（LP）の唯一の正。文言・料金は各LPの掲載内容に合わせる。
// 出典: https://lp.kenty.app/tdanime と https://lp.kenty.app/shigyopv（2026-09-30 時点）

export type Service = {
  id: "tdanime" | "shigyopv";
  label: string;
  catch: string;
  lead: string;
  points: string[];
  prices: { name: string; value: string }[];
  video: { src: string; poster: string };
  note?: string;
  url: string;
  cta: string;
  tone: "sun" | "sky";
};

export const SERVICES: Service[] = [
  {
    id: "tdanime",
    label: "アニメ・動画／3Dモデル制作",
    catch: "あなたのキャラクターに、動きと立体を。",
    lead: "キャラ紹介、SNS動画、PVを構成から編集まで。キャラクターの立体化（3Dモデル）もお任せください。",
    points: ["AIと手作業の組み合わせで、高品質・低コスト", "ラフから仕上げまで、節目ごとに確認", "既存キャラクターにも対応"],
    prices: [
      { name: "AI動画 15秒", value: "3万円〜" },
      { name: "AI動画 30秒", value: "5万円〜" },
      { name: "3Dモデル", value: "5万円〜" },
    ],
    video: {
      src: "/media/tdanime/xiaolan-pv-hero-20260920.mp4",
      poster: "/media/tdanime/xiaolan-pv-poster-20260920.webp",
    },
    url: "https://lp.kenty.app/tdanime",
    cta: "アニメ・3D制作のLPを見る",
    tone: "sun",
  },
  {
    id: "shigyopv",
    label: "士業・専門家向けプロモ動画制作",
    catch: "その専門性を伝わる30秒に。",
    lead: "税理士・社労士・行政書士・司法書士・弁護士など、事務所の魅力をHPに載せる短い紹介PVに。",
    points: ["台本不要。今のHPやパンフレットから企画", "顔出しなしでもOK。アニメやキャラクターでも表現", "親しみやすさから落ち着いた信頼感まで、雰囲気を選べる"],
    prices: [
      { name: "15秒", value: "3万円〜" },
      { name: "30秒", value: "5万円〜" },
    ],
    video: {
      src: "/media/shigyopv/shigyopv-demo-v12-web-20260924.mp4",
      poster: "/media/shigyopv/shigyopv-poster-20260924.webp",
    },
    note: "動画は制作デモです（実在のお客様の実績ではありません）",
    url: "https://lp.kenty.app/shigyopv",
    cta: "士業PV制作のLPを見る",
    tone: "sky",
  },
];
