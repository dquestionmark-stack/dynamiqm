import React from "react";
import { Link } from "react-router-dom"; // Wajib import Link

const ToolCard = ({ data }) => {
  return (
    <Link
      to={`/tools/${data.slug}`}
      className="group block p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:border-purple-500 hover:shadow-md transition-all duration-300">
      {/* Kategori & Badge */}
      <span className="inline-block px-2.5 py-1 text-xs font-semibold text-purple-600 bg-purple-50 rounded-md mb-4">
        {data.category}
      </span>

      {/* Judul Tool */}
      <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
        {data.title}
      </h3>

      {/* Deskripsi */}
      <p className="text-gray-500 text-sm mt-2 leading-relaxed">{data.desc}</p>

      {/* Tombol Interaktif Palsu (Akan terpicu otomatis saat kartu diklik) */}
      <div className="mt-4 flex items-center gap-1 text-sm font-bold text-purple-600 opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300">
        <span>Buka Tool</span>
        <span>&rarr;</span>
      </div>
    </Link>
  );
};

export default ToolCard;
