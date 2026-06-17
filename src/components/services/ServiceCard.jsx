import React from "react";

const ServiceCard = ({ data, onOrder }) => {
  return (
    <div className="group relative bg-white border border-gray-200/80 rounded-2xl p-8 hover:shadow-xl hover:border-gray-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full overflow-hidden">
      {/* Garid Dekoratif: Diganti dari Hijau ke Gradasi Indigo-Purple (Sama seperti Hero) */}
      <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-blue-600 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      <div className="flex-1">
        {/* Judul Layanan */}
        <h2 className="text-xl font-bold text-gray-900 tracking-tight group-hover:text-blue-600 transition-colors">
          {data.title}
        </h2>

        {/* Deskripsi */}
        <p className="text-gray-500 mt-3 text-sm md:text-base leading-relaxed">
          {data.desc}
        </p>
      </div>

      <div className="mt-8">
        <div className="pt-5 border-t border-gray-50">
          <p className="text-xs text-gray-400 font-medium tracking-wider uppercase">
            Mulai Dari
          </p>
          <p className="text-2xl font-black text-gray-900 mt-1 tracking-tight">
            {data.price}
          </p>
        </div>

        {/* Tombol: Saat di-hover berubah menjadi Hitam Pekat dengan shadow Indigo halus */}
        <button
          onClick={onOrder}
          className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-gray-900 text-white font-semibold text-sm py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 shadow-sm hover:shadow-lg hover:shadow-indigo-500/20 active:scale-[0.98] transition-all duration-300">
          Pesan Layanan
          <span className="text-xs transform group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
