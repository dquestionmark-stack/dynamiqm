import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 mt-20 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-gray-900">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3">
              {/* Pembungkus Logo agar warna hitamnya terlihat jelas */}
              <div className="p-1.5 bg-white rounded-xl shadow-sm border border-gray-800 flex items-center justify-center">
                <img
                  src="/logo-qm.png"
                  alt="Logo Dynamiqm"
                  className="h-7 w-auto object-contain"
                />
              </div>
              <h2 className="text-xl font-bold tracking-tight text-white">
                Dynamiqm
              </h2>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Hub digital terintegrasi yang menyediakan artikel edukatif,
              eksplorasi analitis, dan ragam tools praktis untuk menyederhanakan
              tantangan harianmu.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:justify-self-center">
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Navigasi
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Beranda", path: "/" },
                { name: "Artikel Blog", path: "/blog" },
                { name: "Tools Digital", path: "/tools" },
                { name: "Layanan Web", path: "/services" },
                { name: "Tentang Kami", path: "/about" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.path}
                    className="hover:text-white transition-all duration-200 inline-block hover:translate-x-1">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Column */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Hubungi Kami
            </h3>
            <p className="text-sm mb-4">
              Mari terhubung dan berdiskusi seputar ide atau project digital.
            </p>

            <div className="flex gap-3">
              {/* Instagram Icon */}
              <a
                href="https://instagram.com/dynamic_qm"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-700 transition-colors"
                title="Instagram">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              {/* TikTok Icon */}
              <a
                href="https://tiktok.com/@questionmark_285"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-700 transition-colors"
                title="TikTok">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.03 2.61-.01 3.91-.02.08 1.53.63 3.02 1.63 4.16 1.02.97 2.38 1.48 3.79 1.55v3.83c-1.5-.08-2.94-.64-4.12-1.58-.17-.12-.33-.26-.5-.39v5.04c.06 3.52-2.13 6.84-5.46 7.93-3.64 1.29-7.9-.53-9.45-4.14C.63 12.91 1.94 8.5 5.58 7.03c1.1-.47 2.3-.64 3.48-.52v3.91c-.96-.24-2 .01-2.73.68-.82.68-1.19 1.83-1 2.87.27 1.51 1.65 2.61 3.18 2.51 1.63-.04 2.97-1.42 2.99-3.05V0l.02.02z" />
                </svg>
              </a>

              {/* YouTube Icon */}
              <a
                href="https://youtube.com/@qstmark"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-700 transition-colors"
                title="YouTube">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar Credits */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Dynamiqm. Hak Cipta Dilindungi.</p>
          <div className="flex gap-6">
            {/* <a
              href="/privacy"
              className="hover:text-gray-300 transition-colors">
              Kebijakan Privasi
            </a>
            <a href="/terms" className="hover:text-gray-300 transition-colors">
              Syarat & Ketentuan
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
