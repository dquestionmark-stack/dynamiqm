import React, { useState, useMemo } from "react";
import { blogData } from "../data/Blog/blogData";
import { categories } from "../data/Blog/categories";
import BlogFilter from "../components/blog/BlogFilter";
import BlogCard from "../components/blog/BlogCard";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBlogs = useMemo(() => {
    if (activeCategory === "All") return blogData;
    return blogData.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="relative min-h-screen bg-white">
      {/* Background Grid Pattern Halus (Senada dengan Hero) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-16 z-10">
        {/* HEADER */}
        <div className="mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 rounded-full mb-4">
            📚 Jurnal & Pemikiran
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900">
            Arsip{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Artikel & Edukasi
            </span>
          </h1>
          <p className="text-gray-500 mt-3 text-lg max-w-2xl leading-relaxed">
            Tempat santai untuk membedah konsep matematika, mengasah logika
            pemrograman, dan mendiskusikan berbagai topik menarik lainnya.
          </p>
        </div>

        {/* FILTER COMPONENT */}
        <BlogFilter
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((item) => (
            <div key={item.id} className="animate-fade-in">
              <BlogCard data={item} />
            </div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredBlogs.length === 0 && (
          <div className="text-center py-20 border border-dashed border-gray-200 rounded-2xl bg-gray-50/50 mt-8">
            <div className="text-3xl mb-3">🔍</div>
            <h3 className="text-gray-900 font-semibold text-lg">
              Artikel tidak ditemukan
            </h3>
            <p className="text-gray-500 mt-1 text-sm max-w-xs mx-auto">
              Belum ada tulisan di kategori{" "}
              <span className="font-medium text-gray-800">
                "{activeCategory}"
              </span>
              . Coba pilih kategori yang lain!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
