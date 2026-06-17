import React, { useState, useMemo } from "react";
import ToolCard from "../components/tools/ToolCard";
import { toolsData } from "../data/Tools/toolsData";

const Tools = () => {
  const [search, setSearch] = useState("");

  const filteredTools = useMemo(() => {
    return toolsData.filter(
      (tool) =>
        tool.title.toLowerCase().includes(search.toLowerCase()) ||
        tool.category.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  return (
    <div className="relative min-h-screen bg-white">
      {/* Background Grid Pattern Halus (Konsisten dengan Hero & Blog) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-16 z-10">
        {/* HEADER */}
        <div className="mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-purple-600 bg-purple-50 border border-purple-100 rounded-full mb-4">
            ⚡ Micro-Apps & Solusi
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900">
            Kumpulan{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Tools Digital
            </span>
          </h1>
          <p className="text-gray-500 mt-3 text-lg max-w-2xl leading-relaxed">
            Asah produktivitasmu dengan utilitas web instan untuk kalkulasi,
            konversi data, optimasi file, dan kebutuhan operasional harian.
          </p>
        </div>

        {/* SEARCH BAR (Premium Input dengan Ikon SVG) */}
        <div className="relative max-w-xl mb-12 animate-fade-in">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Cari nama tool atau kategori..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-2xl font-medium text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 transition-all"
          />
        </div>

        {/* TOOLS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTools.map((tool) => (
            <div key={tool.id} className="animate-fade-in">
              <ToolCard
                data={tool}
                onOpen={() => console.log(`Membuka tool: ${tool.title}`)} // Nanti bisa diganti rute navigasi/modal
              />
            </div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredTools.length === 0 && (
          <div className="text-center py-20 border border-dashed border-gray-200 rounded-2xl bg-gray-50/50 mt-4">
            <div className="text-3xl mb-3">🛠️</div>
            <h3 className="text-gray-900 font-semibold text-lg">
              Alat digital tidak ditemukan
            </h3>
            <p className="text-gray-500 mt-1 text-sm max-w-xs mx-auto">
              Tidak ada tools yang cocok dengan kata kunci{" "}
              <span className="font-medium text-gray-800">"{search}"</span>.
              Coba cari dengan kata kunci lain.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tools;
