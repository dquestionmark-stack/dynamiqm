import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ data }) => {
  return (
    <Link to={`/blog/${data.slug}`} className="group block">
      <div className="h-full bg-white border border-gray-200/80 rounded-2xl p-6 hover:shadow-xl hover:border-gray-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
        <div>
          {/* Kategori dengan Badge Kecil */}
          <span className="inline-block text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 px-2.5 py-1 rounded-md">
            {data.category}
          </span>

          {/* Judul Artikel */}
          <h2 className="text-xl font-bold text-gray-900 mt-4 tracking-tight group-hover:text-blue-600 transition-colors line-clamp-2">
            {data.title}
          </h2>

          {/* Potongan Konten / Eksper */}
          <p
            className="text-gray-500 mt-3 text-sm md:text-base leading-relaxed line-clamp-3"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>

        {/* Bagian Bawah / Footer Kartu */}
        <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between text-xs text-gray-400">
          <span>{data.date || "Artikel Baru"}</span>

          <span className="font-semibold text-gray-900 group-hover:text-blue-600 inline-flex items-center gap-1 transition-colors">
            Baca Selengkapnya
            <span className="text-sm transform group-hover:translate-x-1 transition-transform">
              →
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
