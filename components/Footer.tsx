import Link from "next/link";
import Chibi from "@/components/Chibi";
import { SERVICES } from "@/components/services";

const Footer = () => {
  return (
    <footer className="relative mt-10 border-t border-orange-100 bg-cream-dots pt-16 pb-10 text-ink">
      <Chibi pose="genki" height={150} motion="sway" className="absolute -top-[150px] right-6 hidden sm:block lg:right-16" />
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <h3 className="mb-3 font-round text-2xl font-extrabold">林</h3>
            <p className="leading-relaxed text-ink/70">
              AIエンジニア × アニメ・動画制作
              <br />
              AI、Web3に詳しいF/Bエンジニア
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-bold">制作サービス</h3>
            <div className="space-y-3">
              {SERVICES.map((s) => (
                <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer" className="block text-ink/70 transition-colors hover:text-sun">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-bold">連絡先</h3>
            <div className="space-y-3 text-ink/70">
              <p>
                <a href="mailto:info@h-fpo.com" className="transition-colors hover:text-sun">
                  info@h-fpo.com
                </a>
              </p>
              <p>
                <a href="https://x.com/kabuco_h" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-sun">
                  X (Twitter): @kabuco_h
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-bold">リンク</h3>
            <div className="space-y-3">
              <Link href="/works" className="block text-ink/70 transition-colors hover:text-sun">
                実績
              </Link>
              <Link href="/contact" className="block text-ink/70 transition-colors hover:text-sun">
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-orange-100 pt-8 text-center text-sm text-ink/50">
          <p>&copy; 2026 林. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
