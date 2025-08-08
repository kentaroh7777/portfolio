import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">林</h3>
            <p className="text-gray-400 leading-relaxed">
              AI、Web3に詳しいF/Bエンジニア<br />
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">連絡先</h3>
            <div className="space-y-3 text-gray-400">
              <p>
                <a href="mailto:info@h-fpo.com" className="hover:text-white transition-colors">
                  info@h-fpo.com
                </a>
              </p>
              <p>
                <a 
                  href="https://x.com/kabuco_h" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  X (Twitter): @kabuco_h
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">リンク</h3>
            <div className="space-y-3">
              <Link href="/works" className="block text-gray-400 hover:text-white transition-colors">
                実績
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2025 林. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;