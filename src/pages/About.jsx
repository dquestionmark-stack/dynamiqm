import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Background Grid Pattern Halus (Konsisten dengan Hero, Blog, & Tools) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-16 z-10">
        {/* HEADER */}
        <div className="mb-14 animate-fade-in">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 rounded-full mb-4">
            ✨ Manifestasi & Visi
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900">
            Tentang{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Platform Kami
            </span>
          </h1>
          <p className="text-gray-500 mt-3 text-lg max-w-2xl leading-relaxed">
            Mengenal lebih dekat ekosistem digital Dynamiqm, misi yang kami
            bawa, dan bagaimana kami membantu Anda bertumbuh.
          </p>
        </div>

        {/* INTRO BOX */}
        <div className="bg-white border border-gray-200/80 rounded-2xl p-8 md:p-12 shadow-sm animate-fade-in">
          <h2 className="text-2xl font-bold text-gray-950 tracking-tight mb-4">
            Membangun Jembatan Edukasi & Solusi
          </h2>

          <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed max-w-4xl">
            <p>
              Platform ini dirancang dari sebuah visi untuk menyatukan logika
              analitis dan kreativitas digital. Kami mengintegrasikan jurnal
              edukasi, utilitas berbasis web (*micro-apps*), serta layanan
              rekayasa perangkat lunak profesional di bawah satu atap.
            </p>
            <p>
              Fokus fundamental kami berpusat pada penjelajahan estetika{" "}
              <strong>matematika</strong>, perancangan{" "}
              <strong>logika pemrograman</strong> yang bersih, pengembangan
              aplikasi modern (Web & Android), serta penyediaan solusi digital
              end-to-end untuk kebutuhan personal maupun bisnis.
            </p>
          </div>
        </div>

        {/* THREE CORE PILLARS (GRID) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {/* Pillar 1: Blog */}
          <div className="group bg-white border border-gray-200/80 rounded-2xl p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 text-lg font-bold mb-4">
                📚
              </div>
              <h3 className="font-bold text-xl text-gray-900 tracking-tight group-hover:text-blue-600 transition-colors">
                Jurnal & Insight
              </h3>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                Artikel mendalam tentang visualisasi matematika, tutorial kode,
                optimasi performa, dan tren teknologi terupdate.
              </p>
            </div>
            <Link
              to="/blog"
              className="text-xs font-semibold text-gray-900 mt-6 inline-flex items-center gap-1 hover:text-blue-600 transition-colors">
              Eksplorasi Blog{" "}
              <span className="transform group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>

          {/* Pillar 2: Tools */}
          <div className="group bg-white border border-gray-200/80 rounded-2xl p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 text-lg font-bold mb-4">
                ⚡
              </div>
              <h3 className="font-bold text-xl text-gray-900 tracking-tight group-hover:text-purple-600 transition-colors">
                Utilitas Web
              </h3>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                Aplikasi mikro instan yang andal untuk membantu kalkulasi
                matematis, pengolahan string, dan otomatisasi tugas harian Anda.
              </p>
            </div>
            <Link
              to="/tools"
              className="text-xs font-semibold text-gray-900 mt-6 inline-flex items-center gap-1 hover:text-purple-600 transition-colors">
              Gunakan Tools{" "}
              <span className="transform group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>

          {/* Pillar 3: Services */}
          <div className="group bg-white border border-gray-200/80 rounded-2xl p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 text-lg font-bold mb-4">
                💼
              </div>
              <h3 className="font-bold text-xl text-gray-900 tracking-tight group-hover:text-indigo-600 transition-colors">
                Layanan Digital
              </h3>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                Transformasi ide kustom menjadi produk nyata melalui rekayasa
                website profesional berkinerja tinggi serta aplikasi andal.
              </p>
            </div>
            <Link
              to="/services"
              className="text-xs font-semibold text-gray-900 mt-6 inline-flex items-center gap-1 hover:text-indigo-600 transition-colors">
              Lihat Layanan{" "}
              <span className="transform group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* BOTTOM CTA (MATCHING WITH THE PREMIUM FEEL) */}
        <div className="mt-20 p-8 md:p-12 bg-gray-50/80 border border-gray-100 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 animate-fade-in">
          <div>
            <h3 className="text-xl font-bold text-gray-950">
              Tertarik membangun sesuatu bersama?
            </h3>
            <p className="text-gray-500 text-sm md:text-base mt-1">
              Kami membuka peluang kolaborasi pengerjaan proyek kustom maupun
              diskusi teknis.
            </p>
          </div>
          <Link
            to="/services"
            className="px-6 py-3 bg-gray-900 text-white font-semibold text-sm rounded-xl hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 transition-all shadow-sm hover:shadow-lg hover:shadow-indigo-500/20 active:scale-[0.98] duration-300 whitespace-nowrap">
            Lihat Solusi Kami
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
