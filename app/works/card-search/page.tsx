import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI駆動 爆速開発手法（card-search / メタタグDB） | 実績",
  description:
    "CNPトレカの「カード効果ロジック」を高速・高品質に実装するための開発手法を開発しました。類似カード検索CLI（card-search）と実装パターンのメタタグDBで、AIエージェントの認知負荷を下げて設計・実装を加速しました。",
};

const NOTE_URL = "https://note.com/kenhfp/n/ne03138396533?sub_rt=share_pw";
const PUBLISHED_AT = "2026/01/12";
const VIDEO_EMBED_URL = "https://www.youtube-nocookie.com/embed/BLRgHETopOg?rel=0";

export default function CardSearchArticlePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-black text-white py-4">
        <div className="container-custom">
          <Link
            href="/"
            className="inline-flex items-center text-gray-300 hover:text-white transition-colors"
          >
            ← ホームに戻る
          </Link>
        </div>
      </div>

      <main>
        <header className="py-16 bg-gradient-to-br from-blue-50 to-sky-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 text-sm text-gray-600 mb-4">
                <span className="px-3 py-1 rounded-full bg-white border border-gray-200">
                  note記事
                </span>
                <span>公開日 {PUBLISHED_AT}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                AI駆動、爆速開発手法について解説します
                <span className="block mt-2 text-gray-800">
                  （CNPトレカ：カード効果ロジックの実装効率化）
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                類似カードを瞬時に提示する <strong>card-search</strong> と、
                「何を守るべきか」をAIへ伝える <strong>実装パターンのメタタグDB</strong>{" "}
                により、AIエージェントの認知負荷を下げ、設計・実装の手戻りを減らしました。
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={NOTE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300"
                >
                  noteで記事を読む
                </a>
                <Link
                  href="/works"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-800 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                >
                  実績一覧に戻る
                </Link>
              </div>
            </div>
          </div>
        </header>

        <section className="py-12">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <figure className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-50">
                <Image
                  src="/card-search.png"
                  alt="AIとメタタグでカード効果ロジックを自動設計（card-search）"
                  width={1600}
                  height={800}
                  className="w-full h-auto"
                  priority
                />
              </figure>
              <p className="mt-4 text-sm text-gray-500">
                バナー画像：記事の要点（card-search / メタタグDBによる設計支援）
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-6">
                <div className="max-w-3xl">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    動画で全体像をサクッと把握
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    note記事内の動画です。<strong>card-search</strong> と{" "}
                    <strong>メタタグDB</strong> による「設計の筋道」の立て方を、短時間で掴めます。
                  </p>
                </div>
                <a
                  href={NOTE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300"
                >
                  記事で詳細を見る
                </a>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4 shadow-sm">
                <div className="aspect-video rounded-xl overflow-hidden bg-black">
                  <iframe
                    width="100%"
                    height="100%"
                    src={VIDEO_EMBED_URL}
                    title="AI駆動 爆速開発手法（card-search / メタタグDB）デモ動画"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
              <article className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">この記事で扱う課題</h2>
                <ul className="space-y-3 text-gray-700 leading-relaxed">
                  <li>
                    <strong>AIエージェントが途中で迷子になる</strong>
                    ：複雑なコード・条件分岐の読み解きで認知負荷が上がり、見落としや誤解が増える
                  </li>
                  <li>
                    <strong>カードが増えるほど実装負荷が爆発</strong>
                    ：100種超のカード効果を個別に設計・実装すると開発期間が伸びる
                  </li>
                  <li>
                    <strong>未知カードへの素早い対応</strong>
                    ：事前計画が難しい状況でも、正しい筋道で設計・実装できる仕組みが必要
                  </li>
                </ul>
              </article>

              <article className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">解決アプローチ（2つの工夫）</h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      1) 類似カードを探す CLI「card-search」
                    </h3>
                    <p>
                      既存の成功パターン（似た効果の実装）を迷わず参照できるようにし、設計の探索コストを
                      一気に下げました。
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      2) 実装情報のメタタグ化（パターンDB）
                    </h3>
                    <p>
                      「この3つだけ守ればよい」のように、AIが守るべき制約を最小情報で伝達し、
                      ハルシネーションや見逃しを減らしました。
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl p-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">おすすめの読み方</h2>
                <p className="text-gray-200 leading-relaxed mb-8">
                  「なぜAIがうまく動かないのか？」の分析 → 「似たカード探索」→「メタタグDB」の順で追うと、
                  仕組み全体の狙いが最短で理解できます。
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={NOTE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                  >
                    noteで記事を開く
                  </a>
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300"
                  >
                    トップへ戻る
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

