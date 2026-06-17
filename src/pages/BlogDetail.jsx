import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogData } from "../data/Blog/blogData";
import ShareButton from "../components/ShareButton";

const BlogDetail = () => {
  const { slug } = useParams();

  const article = blogData.find((item) => item.slug === slug);

  // EMPTY STATE (Jika artikel tidak ditemukan)
  if (!article) {
    return (
      <div className="relative min-h-[70vh] bg-white flex items-center justify-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
        <div className="relative text-center py-20 px-6 max-w-sm border border-dashed border-gray-200 rounded-2xl bg-gray-50/50 z-10">
          <div className="text-3xl mb-3">📖</div>
          <h3 className="text-gray-900 font-semibold text-lg">
            Artikel tidak ditemukan
          </h3>
          <p className="text-gray-500 mt-1 text-sm mb-6">
            Maaf, konten yang Anda cari tidak tersedia atau telah dipindahkan.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-black transition-colors">
            ← Kembali ke Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-white">
      {/* Background Grid Pattern Halus */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6 py-16 z-10">
        {/* TOMBOL KEMBALI */}
        <Link
          to="/blog"
          className="group inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-gray-900 mb-8 transition-colors">
          <span className="transform group-hover:-translate-x-1 transition-transform">
            ←
          </span>
          Kembali ke Blog
        </Link>

        {/* METADATA ARTICLE */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-md">
            {article.category}
          </span>
          <span className="text-gray-300">•</span>
          <p className="text-sm text-gray-400 font-medium">
            {article.date || "Baru saja dirilis"}
          </p>
        </div>

        {/* JUDUL ARTIKEL (Typography Premium) */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-[1.15] tracking-tight mb-10">
          {article.title}
        </h1>

        {/* PEMBATAS GARIS HALUS */}
        <div className="w-full h-px bg-gray-100 mb-10" />

        {/* KONTEN UTAMA (Dioptimasi untuk kenyamanan mata pembaca) */}
        {/* PASTIKAN STRUKTURNYA PERSIS SEPERTI INI */}
        <div
          className="mt-10 text-gray-800 text-base md:text-lg tracking-normal font-normal selection:bg-blue-100"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* FOOTER ARTIKEL (Apresiasi Membaca) */}
        <div className="mt-16 pt-6 border-t border-gray-100 flex items-center justify-between text-sm text-gray-400">
          <p>Terima kasih telah membaca.</p>
          <ShareButton />
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
