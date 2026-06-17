import React from "react";
import ServiceCard from "../components/services/ServiceCard";
import { servicesData } from "../data/Services/servicesData";

const Services = () => {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Background Grid Pattern Halus */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-16 z-10">
        {/* HEADER */}
        <div className="mb-14 animate-fade-in">
          {/* Badge: Diubah ke Indigo */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-full mb-4">
            💼 Solusi & Pengembangan
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900">
            Layanan &{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Solusi Digital
            </span>
          </h1>
          <p className="text-gray-500 mt-3 text-lg max-w-2xl leading-relaxed">
            Transformasikan ide besarmu menjadi produk nyata. Kami membantu
            pembuatan website profesional, aplikasi web kustom, dan optimasi
            performa digital untuk personal maupun bisnis.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {servicesData.map((service) => (
            <div key={service.id} className="animate-fade-in">
              <ServiceCard
                data={service}
                onOrder={() => console.log(`Memesan layanan: ${service.title}`)}
              />
            </div>
          ))}
        </div>

        {/* CTA SECTION TAMBAHAN */}
        <div className="mt-20 p-8 md:p-12 bg-gray-50/80 border border-gray-100 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 animate-fade-in">
          <div>
            <h3 className="text-xl font-bold text-gray-950">
              Punya kebutuhan project kustom?
            </h3>
            <p className="text-gray-500 text-sm md:text-base mt-1">
              Diskusikan spesifikasi websitemu secara gratis tanpa dipungut
              biaya.
            </p>
          </div>
          <a
            href="https://wa.me/nomor-kamu"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-gray-900 text-white font-semibold text-sm rounded-xl hover:bg-black transition-all shadow-sm">
            Konsultasi Sekarang
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
