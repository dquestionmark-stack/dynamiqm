import { BookOpen, Cpu, Wrench } from "lucide-react";
import React from "react";

const FeatureSection = () => {
  const features = [
    {
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      title: "Blog & Wawasan",
      desc: "Selami artikel mendalam tentang matematika, logika, teknologi, hingga opini acak yang dikemas secara ringan namun tetap edukatif.",
      link: "/blog",
      bgHover: "hover:border-blue-500/30",
    },
    {
      icon: <Wrench className="w-6 h-6 text-purple-600" />,
      title: "Tools Praktis",
      desc: "Kumpulan kalkulator kustom, alat konversi, dan micro-apps digital yang dirancang khusus untuk mempermudah tugas harianmu.",
      link: "/tools",
      bgHover: "hover:border-purple-500/30",
    },
    {
      icon: <Cpu className="w-6 h-6 text-emerald-600" />,
      title: "Layanan Digital",
      desc: "Butuh kehadiran digital? Kami menyediakan jasa pembuatan website kustom, sistem web, dan solusi teknologi modern untuk bisnis Anda.",
      link: "/services",
      bgHover: "hover:border-emerald-500/30",
    },
  ];

  return (
    <section className="py-28 bg-gray-50/50 border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 animate-fade-in">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Satu Ekosistem, <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Banyak Solusi
            </span>
          </h2>
          <p className="text-gray-500 mt-4 text-lg">
            Navigasikan kebutuhanmu dalam satu platform terpadu yang terus
            tumbuh dan bertransformasi.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`group bg-white border border-gray-200/80 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between ${feature.bgHover}`}>
              <div>
                {/* Icon Wrapper */}
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-6 tracking-tight">
                  {feature.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed text-sm md:text-base">
                  {feature.desc}
                </p>
              </div>

              {/* Action Link */}
              <div className="mt-8 pt-4 border-t border-gray-50">
                <a
                  href={feature.link}
                  className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 inline-flex items-center gap-1.5 transition-colors">
                  Eksplorasi Selengkapnya
                  <span className="text-xs group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
