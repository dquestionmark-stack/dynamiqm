import React, { useState } from "react";

const AljabarLinearCalc = () => {
  const [inputA, setInputA] = useState("");
  const [inputB, setInputB] = useState("");
  const [inputC, setInputC] = useState("");
  const [hasil, setHasil] = useState(null);
  const [error, setError] = useState("");
  const [langkah, setLangkah] = useState([]);

  const hitungPersamaan = (e) => {
    e.preventDefault();
    setError("");
    setHasil(null);
    setLangkah([]);

    const a = parseFloat(inputA);
    const b = parseFloat(inputB);
    const c = parseFloat(inputC);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      setError("Semua kolom input harus diisi dengan angka murni.");
      return;
    }

    if (a === 0) {
      setError(
        "Nilai A tidak boleh 0 (pembagian dengan nol tidak terdefinisi).",
      );
      return;
    }

    // HITUNG HASIL
    const nilaiX = (c - b) / a;
    const hasilAkhir = Number.isInteger(nilaiX) ? nilaiX : nilaiX.toFixed(2);

    // ARSITEKTUR LANGKAH BARU DENGAN IDENTITAS WARNA KODE
    const listLangkah = [
      {
        teksAwal: "Persamaan awal Anda: ",
        komponen: (
          <span>
            <span className="text-blue-600 font-bold">{a}</span>x + (
            <span className="text-amber-600 font-bold">{b}</span>) ={" "}
            <span className="text-green-600 font-bold">{c}</span>
          </span>
        ),
      },
      {
        teksAwal: "Pindahkan ruas konstanta B (tanda berubah): ",
        komponen: (
          <span>
            <span className="text-blue-600 font-bold">{a}</span>x ={" "}
            <span className="text-green-600 font-bold">{c}</span> - (
            <span className="text-amber-600 font-bold">{b}</span>)
          </span>
        ),
      },
      {
        teksAwal: "Hasil pengurangan sisi kanan: ",
        komponen: (
          <span>
            <span className="text-blue-600 font-bold">{a}</span>x ={" "}
            <span className="text-purple-600 font-bold">{c - b}</span>
          </span>
        ),
      },
      {
        teksAwal: "Isolasi nilai x (pembagian): ",
        komponen: (
          <span>
            x = <span className="text-purple-600 font-bold">{c - b}</span> /{" "}
            <span className="text-blue-600 font-bold">{a}</span>
          </span>
        ),
      },
    ];

    setLangkah(listLangkah);
    setHasil(hasilAkhir);
  };

  const resetForm = () => {
    setInputA("");
    setInputB("");
    setInputC("");
    setHasil(null);
    setError("");
    setLangkah([]);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* PANEL INPUT FORM (KIRI) */}
      <div className="lg:col-span-5 bg-white border border-gray-200/80 rounded-2xl p-6 shadow-sm">
        <h3 className="font-bold text-gray-900 text-lg mb-1">
          Masukan Parameter
        </h3>
        <p className="text-xs text-gray-400 mb-4">
          Isi nilai untuk melihat format persamaannya.
        </p>

        <form onSubmit={hitungPersamaan} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
              Nilai Koefisien A
            </label>
            <input
              type="number"
              step="any"
              required
              placeholder="Contoh: 3"
              value={inputA}
              onChange={(e) => setInputA(e.target.value)}
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl font-mono text-sm focus:bg-white focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
              Nilai Konstanta B
            </label>
            <input
              type="number"
              step="any"
              required
              placeholder="Contoh: 2000"
              value={inputB}
              onChange={(e) => setInputB(e.target.value)}
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl font-mono text-sm focus:bg-white focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
              Nilai Sisi Kanan C
            </label>
            <input
              type="number"
              step="any"
              required
              placeholder="Contoh: 20000"
              value={inputC}
              onChange={(e) => setInputC(e.target.value)}
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl font-mono text-sm focus:bg-white focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none transition-all"
            />
          </div>

          {/* BOX PRATINJAU PERSAMAAN REAL-TIME */}
          <div className="p-3.5 bg-purple-50/50 border border-purple-100 rounded-xl">
            <span className="block text-[10px] font-bold uppercase tracking-widest text-purple-400 mb-1">
              Pratinjau Persamaan Anda:
            </span>
            <div className="font-mono text-base font-black text-purple-700 tracking-wide">
              {/* Logika fallback: jika input kosong, tampilkan huruf standarnya */}
              {inputA || "A"}x{" "}
              {parseFloat(inputB) >= 0
                ? `+ ${inputB}`
                : inputB
                  ? `- ${Math.abs(inputB)}`
                  : "+ B"}{" "}
              = {inputC || "C"}
            </div>
          </div>

          {error && (
            <div className="p-3.5 rounded-xl bg-red-50 text-xs text-red-600 font-medium">
              ⚠️ {error}
            </div>
          )}

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              className="flex-1 py-3 px-4 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-purple-600 shadow-sm transition-all duration-200">
              Hitung Solusi
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="px-4 py-3 bg-gray-100 text-gray-600 text-sm font-semibold rounded-xl hover:bg-gray-200 transition-all">
              Reset
            </button>
          </div>
        </form>
      </div>

      {/* PANEL OUTPUT DISPLAY (KANAN) */}
      <div className="lg:col-span-7 space-y-6">
        <div className="bg-gray-900 text-white rounded-2xl p-6 shadow-md flex flex-col justify-between min-h-[140px]">
          <span className="text-xs text-gray-500 uppercase tracking-widest font-mono font-bold">
            Hasil Akhir Nilai X
          </span>
          <div className="my-3">
            {hasil !== null ? (
              <h2 className="text-4xl md:text-5xl font-black font-mono text-purple-400">
                x = {hasil}
              </h2>
            ) : (
              <h2 className="text-xl font-medium text-gray-500 italic">
                Menunggu kalkulasi parameter...
              </h2>
            )}
          </div>
          <p className="text-xs text-gray-400">
            Diproses secara real-time via client-side JavaScript engine.
          </p>
        </div>

        {langkah.length > 0 && (
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 animate-fade-in">
            <h3 className="font-bold text-gray-400 text-sm uppercase tracking-wider mb-4">
              Papan Alur Simulasi Rumus
            </h3>
            <div className="space-y-3 font-mono text-sm text-gray-700">
              {langkah.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl shadow-sm">
                  <span className="w-5 h-5 rounded-md bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <p className="leading-relaxed text-gray-600">
                    {item.teksAwal}
                    {/* Merender potongan HTML berwarna secara dinamis */}
                    <span className="bg-gray-50 px-2 py-1 rounded-md border border-gray-100 inline-block font-mono">
                      {item.component || item.komponen}
                    </span>
                  </p>
                </div>
              ))}

              <div className="p-3 bg-purple-50 text-purple-700 font-bold rounded-xl font-mono text-center text-base">
                Kesimpulan akhir: Nilai x adalah{" "}
                <span className="underline decoration-2">{hasil}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AljabarLinearCalc;
