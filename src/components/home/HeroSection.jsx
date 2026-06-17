import React from "react";
// Catatan: Jika belum install lucide-react, bisa pakai ikon SVG biasa atau jalankan `npm i lucide-react`
import { Sparkles, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
      {/* Background Grid Pattern Halus */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center py-12">
        {/* LEFT SIDE */}
        <div className="animate-fade-in z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium text-gray-900 bg-gray-50 border border-gray-200 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Eksplorasi Tanpa Batas</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-none text-gray-900">
            Tempat Dinamis Untuk{" "}
            <span className="bg-gradient-to-r select-none from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Ide & Tools
            </span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg md:text-xl leading-relaxed max-w-xl">
            Satu hub digital terintegrasi untuk artikel edukasi, eksplorasi
            matematika, tren teknologi, dan deretan tools praktis yang siap
            membantu produktivitasmu.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="/blog"
              className="group inline-flex items-center gap-2 px-6 py-3.5 bg-gray-900 text-white font-medium rounded-xl hover:bg-black transition-all shadow-sm hover:shadow-md">
              Baca Blog
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/tools"
              className="px-6 py-3.5 border border-gray-200 font-medium text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all">
              Coba Tools Digital
            </a>
          </div>
        </div>

        {/* RIGHT SIDE (Interactive Showcase) */}
        <div className="relative animate-fade-in lg:ml-6">
          {/* Decorative Blur Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-10 blur-xl tracking-wide" />

          <div className="relative bg-white border border-gray-100 rounded-2xl p-8 shadow-xl shadow-gray-100/50">
            <h2 className="text-lg font-bold text-gray-950 flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Eksplorasi yang Tersedia
            </h2>

            <div className="mt-6 space-y-3">
              {[
                {
                  title: "Matematika & Logika",
                  desc: "Formulasi & pola pikir analitis.",
                },
                {
                  title: "Teknologi & Kode",
                  desc: "Konsep programming dan tech-stack.",
                },
                {
                  title: "Ide & Opini",
                  desc: "Eksplorasi pemikiran tanpa batas ruang.",
                },
                {
                  title: "Edukasi Umum",
                  desc: "Rangkuman pengetahuan siap pakai.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50/80 transition-all cursor-default">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
