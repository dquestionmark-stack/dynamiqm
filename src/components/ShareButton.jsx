import React, { useState } from "react";

const ShareButton = () => {
  // State untuk melacak apakah tautan baru saja disalin
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      // Menggunakan URL halaman aktif saat ini
      await navigator.clipboard.writeText(window.location.href);

      // Picu efek visual sukses
      setCopied(true);

      // Kembalikan teks ke semula setelah 2 detik
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Gagal menyalin tautan: ", err);

      // Metode Cadangan (Fallback) jika navigator.clipboard diblokir browser
      const textArea = document.createElement("textarea");
      textArea.value = window.location.href;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (fallbackErr) {
        alert("Gagal menyalin secara otomatis. Silakan salin URL manual.");
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`inline-flex items-center gap-1.5 font-medium transition-colors ${
        copied
          ? "text-green-600 font-bold"
          : "text-gray-500 hover:text-blue-600"
      }`}
      title="Salin Tautan"
      disabled={copied} // Cegah klik ganda saat animasi berjalan
    >
      {copied ? (
        // Icon Ceklis saat sukses disalin
        <svg
          className="w-4 h-4 text-green-600 animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      ) : (
        // Icon Rantai Link bawaan kamu
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        </svg>
      )}

      {/* Teks Dinamis */}
      <span>{copied ? "Tautan Disalin!" : "Bagikan Artikel"}</span>
    </button>
  );
};

export default ShareButton;
