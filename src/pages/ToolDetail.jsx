import React from "react";
import { useParams, Link } from "react-router-dom";
import AljabarLinearCalc from "../components/tools/AljabarLinearCalc"; // Import file komponen kalkulator tadi
import { toolsData } from "../data/Tools/toolsData";

const ToolDetail = () => {
  const { slug } = useParams();

  // Ambil data tool berdasarkan slug URL saat ini
  // CARA YANG BENAR UNTUK ARRAY
  const currentTool = toolsData.find((item) => item.slug === slug);

  // EMPTY STATE: Jika slug tidak terdaftar di dalam objek registry kita
  if (!currentTool) {
    return (
      <div className="relative min-h-[70vh] bg-white flex items-center justify-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
        <div className="relative text-center py-20 px-6 max-w-sm border border-dashed border-gray-200 rounded-2xl bg-gray-50/50 z-10">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-gray-900 font-semibold text-lg">
            Modul Belum Tersedia
          </h3>
          <p className="text-gray-500 mt-1 text-sm mb-6">
            Aplikasi mikro ini sedang dalam tahap konfigurasi logika sistem.
          </p>
          <Link
            to="/tools"
            className="px-4 py-2 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-black transition-colors">
            &larr; Kembali ke Tools
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-white">
      {/* Background Grid Pattern Halus */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 py-12 z-10">
        {/* BREADCRUMB / NAVIGASI */}
        <Link
          to="/tools"
          className="group inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-gray-900 mb-8 transition-colors">
          <span className="transform group-hover:-translate-x-1 transition-transform">
            &larr;
          </span>
          Kembali ke Koleksi Tools
        </Link>

        {/* HEADER UTAMA SHELL (Dinamis Berubah Sesuai Tool) */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-purple-600 bg-purple-50 border border-purple-100 rounded-full mb-3">
            {currentTool.badge}
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
            {currentTool.title}
          </h1>
          <p className="text-gray-500 mt-2 text-base max-w-2xl leading-relaxed">
            {currentTool.desc}
          </p>
        </div>

        {/* BOX INTERAKTIF UTAMA: Merender komponen formulir tool secara dinamis */}
        <div className="animate-fade-in">{currentTool.component}</div>
      </div>
    </div>
  );
};

export default ToolDetail;
