import React from "react";

const BlogFilter = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="flex flex-wrap gap-2.5 mb-10 pb-2 border-b border-gray-100">
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium tracking-wide transition-all duration-200 border
              ${
                isActive
                  ? "bg-gray-950 text-white border-gray-950 shadow-sm shadow-gray-950/20 scale-102"
                  : "bg-white text-gray-600 border-gray-200 hover:text-gray-900 hover:border-gray-400 hover:bg-gray-50/50"
              }
            `}>
            {cat}
          </button>
        );
      })}
    </div>
  );
};

export default BlogFilter;
