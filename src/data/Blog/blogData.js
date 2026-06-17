export const blogData = [
  {
    id: 1,
    title:
      "Menyingkap Rahasia Aljabar: Bagaimana Menemukan Nilai X dalam Matematika dan Coding",
    slug: "menyingkap-rahasia-aljabar-matematika-coding",
    category: "Matematika",
    date: "2026-06-17",
    content: `
      <p class="text-gray-600 mb-6">Saat duduk di bangku SMP, salah satu kejutan terbesar kita dalam pelajaran matematika adalah ketika angka-angka yang biasa kita hitung tiba-masing menghilang dan digantikan oleh huruf, terutama si misterius <strong>"X"</strong>.</p>
      
      <p class="text-gray-600 mb-6">Banyak dari kita yang bertanya, <em>"Kenapa matematika sekarang pakai huruf?"</em> atau <em>"Apa gunanya mencari nilai X di kehidupan nyata?"</em></p>
      
      <p class="text-gray-600 mb-8">Menariknya, jika kamu tertarik pada dunia teknologi dan pemrograman (coding), huruf "X" dalam aljabar ini bukan sekadar coretan di papan tulis. Ia adalah fondasi paling awal dari seluruh perangkat lunak yang kamu gunakan hari ini. Mari kita bedah bagaimana aljabar bekerja dan bagaimana ia berubah wujud menjadi kode program.</p>

      <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4 tracking-tight">1. Apa Itu Aljabar dan Mengapa Harus Ada Huruf?</h3>
      <p class="text-gray-600 mb-4">Secara sederhana, aljabar adalah cabang matematika yang menggunakan simbol atau huruf untuk mewakili angka yang belum diketahui nilainya. Huruf ini disebut sebagai <strong>Variabel</strong>.</p>
      
      <div class="bg-gray-50 border border-gray-100 rounded-2xl p-6 mb-6 my-4">
        <p class="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Contoh Kasus:</p>
        <p class="text-gray-700 italic">"Kamu membeli 3 buah buku tulis yang sama dan membayar dengan uang Rp20.000, lalu mendapatkan kembalian Rp2.000. Kamu ingin tahu berapa harga satu buku tersebut tanpa harus bertanya ke kasir."</p>
        <div class="mt-4 pt-3 border-t border-gray-200/60 text-lg font-mono text-blue-600 font-bold">
          3x + 2.000 = 20.000
        </div>
      </div>

      <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4 tracking-tight">2. Langkah Demi Langkah Mencari Nilai X (Konsep Pindah Ruas)</h3>
      <p class="text-gray-600 mb-4">Untuk menyelesaikan persamaan linear satu variabel seperti 3x + 2.000 = 20.000, aturan main utamanya adalah <strong>isolasi</strong>. Kita harus membuat si "x" sendirian di satu sisi.</p>
      
      <ul class="space-y-3 my-6 pl-4 border-l-2 border-indigo-500">
        <li class="text-gray-600">
          <strong class="text-gray-900 block mb-0.5">Langkah 1: Singkirkan Konstanta Bebas</strong>
          Angka 2.000 di kiri pindah ke kanan menjadi negatif:<br/>
          <span class="font-mono text-sm bg-gray-100 px-1.5 py-0.5 rounded">3x = 20.000 - 2.000</span> &rarr; <span class="font-mono text-sm bg-gray-100 px-1.5 py-0.5 rounded">3x = 18.000</span>
        </li>
        <li class="text-gray-600">
          <strong class="text-gray-900 block mb-0.5">Langkah 2: Singkirkan Koefisien</strong>
          Angka 3 perkalian pindah ke kanan menjadi pembagian:<br/>
          <span class="font-mono text-sm bg-gray-100 px-1.5 py-0.5 rounded">x = 18.000 / 3</span> &rarr; <strong class="font-mono text-blue-600 font-bold">x = 6.000</strong>
        </li>
      </ul>

      <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4 tracking-tight">3. Jembatan Emas: Aljabar di Dalam Dunia Coding</h3>
      <p class="text-gray-600 mb-4">Jika kamu belajar bahasa pemrograman seperti JavaScript atau Python, hal pertama yang akan kamu pelajari adalah cara membuat variabel. Konsepnya 100% diadopsi dari aljabar SMP.</p>
      
      <div class="bg-gray-900 text-gray-100 rounded-2xl p-5 font-mono text-sm my-6 shadow-sm overflow-x-auto">
        <div class="flex items-center gap-1.5 mb-3 border-b border-gray-800 pb-2 text-gray-500 text-xs">
          <span class="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
          <span class="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
          <span class="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
          <span class="ml-2">main.js</span>
        </div>
        <span class="text-purple-400">let</span> x = <span class="text-amber-400">5</span>;<br/>
        <span class="text-purple-400">let</span> y = x + <span class="text-amber-400">10</span>;<br/>
        <span class="text-blue-400">console</span>.log(y); <span class="text-gray-500">// Hasil di terminal: 15</span>
      </div>

      <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4 tracking-tight">Kesimpulan</h3>
      <p class="text-gray-600 mb-4">Aljabar SMP bukan sekadar hafalan rumus untuk lulus ujian. Aljabar adalah cara melatih otak kita untuk berpikir secara terstruktur, logis, dan abstrak.</p>
      <p class="text-gray-600">Pada artikel selanjutnya, kita akan mencoba membangun sebuah 'Alat Asisten PR' (Kalkulator Aljabar) berbasis web yang bisa menyelesaikan persamaan ini secara otomatis. Stay tuned!</p>
    `,
  },
  {
    id: 2,
    title:
      "Mendesain Algoritma: Mengubah Rumus Aljabar Menjadi Logika Program Komputer",
    slug: "mendesain-algoritma-rumus-aljabar-ke-program",
    category: "IT & Coding",
    date: "2026-06-18",
    content: `
      <p class="text-gray-600 mb-6">
        Di 
        <a href="/blog/menyingkap-rahasia-aljabar-matematika-coding" class="text-blue-600 font-semibold underline underline-offset-4 hover:text-indigo-600 transition-colors">
          artikel sebelumnya
        </a>
        , kita sudah memahami bahwa huruf <strong>"X"</strong> dalam aljabar SMP sebenarnya adalah konsep awal dari sebuah variabel. Sekarang, pertanyaannya: bagaimana kita menyusun instruksi agar komputer bisa menyelesaikan persamaan aljabar tersebut secara otomatis?
      </p>      
      
      <p class="text-gray-600 mb-6">Di sinilah kita membutuhkan sesuatu yang disebut <strong>Algoritma</strong>, yaitu urutan langkah logis untuk menyelesaikan sebuah masalah. Kabar baiknya, algoritma ini bersifat universal. Sekali kamu memahami logikanya, kamu bisa menerapkannya di bahasa pemrograman apa pun, baik itu JavaScript, Python, C++, maupun Java.</p>

      <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4 tracking-tight">1. Dekonstruksi Masalah: Cara Manusia vs Cara Komputer</h3>
      <p class="text-gray-600 mb-4">Manusia memiliki kemampuan intuitif untuk melihat pola. Ketika melihat persamaan <span class="font-mono bg-gray-100 px-1 py-0.5 rounded text-sm">3x + 2.000 = 20.000</span>, otak kita secara otomatis langsung tahu bahwa 2.000 harus dikurangi dari 20.000.</p>
      
      <p class="text-gray-600 mb-4">Namun, komputer itu sangat patuh sekaligus "polos". Komputer tidak tahu apa itu persamaan linear satu variabel berbentuk <span class="font-mono bg-gray-100 px-1 py-0.5 rounded text-sm font-bold text-blue-600">Ax + B = C</span> kecuali kita mendiktekan rumusnya dari hulu ke hilir.</p>
      
      <p class="text-gray-600 mb-6">Tugas kita sebagai pemrogram adalah mengubah rumus matematika tersebut menjadi langkah mekanis yang bisa dieksekusi oleh mesin:</p>

      <div class="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-6">
        <p class="text-sm font-bold text-blue-800 uppercase tracking-wider mb-3">Arsitektur Logika (Algoritma):</p>
        <ol class="list-decimal list-inside space-y-2 text-gray-700 font-medium">
          <li>Terima tiga buah data input: <span class="font-mono">A</span>, <span class="font-mono">B</span>, dan <span class="font-mono">C</span>.</li>
          <li>Lakukan validasi: Pastikan nilai <span class="font-mono">A</span> tidak sama dengan <span class="font-mono">0</span> (karena angka berapa pun tidak bisa dibagi nol).</li>
          <li>Kurangi nilai <span class="font-mono">C</span> dengan <span class="font-mono">B</span>, lalu simpan hasilnya sementara.</li>
          <li>Bagi hasil pengurangan tadi dengan <span class="font-mono">A</span> untuk mendapatkan nilai akhir <span class="font-mono">X</span>.</li>
          <li>Tampilkan nilai <span class="font-mono">X</span> ke layar pengguna.</li>
        </ol>
      </div>

      <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4 tracking-tight">2. Menuangkan Logika ke Dalam Cetak Biru Kode</h3>
      <p class="text-gray-600 mb-4">Setelah algoritmanya matang, barulah kita menulis baris instruksinya. Sebagai contoh, kita akan meminjam bahasa <strong>JavaScript</strong> karena strukturnya yang bersih dan mudah dibaca layaknya bahasa Inggris standar:</p>

      <div class="bg-gray-900 text-gray-100 rounded-2xl p-5 font-mono text-sm my-6 shadow-sm overflow-x-auto">
        <div class="flex items-center gap-1.5 mb-3 border-b border-gray-800 pb-2 text-gray-500 text-xs">
          <span class="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
          <span class="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
          <span class="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
          <span class="ml-2">UniversalLogic.js</span>
        </div>
        <span class="text-purple-400">function</span> <span class="text-blue-400">selesaikanAljabar</span>(a, b, c) {<br/>
        &nbsp;&nbsp;<span class="text-gray-500">// Langkah 1: Proteksi / Validasi Sistem</span><br/>
        &nbsp;&nbsp;<span class="text-purple-400">if</span> (a === <span class="text-amber-400">0</span>) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">return</span> <span class="text-green-400">"Error: Nilai pembagi tidak boleh nol."</span>;<br/>
        &nbsp;&nbsp;}<br/><br/>
        &nbsp;&nbsp;<span class="text-gray-500">// Langkah 2: Eksekusi Rumus Isolasi Matematika</span><br/>
        &nbsp;&nbsp;<span class="text-purple-400">let</span> nilaiX = (c - b) / a;<br/><br/>
        &nbsp;&nbsp;<span class="text-gray-500">// Langkah 3: Kembalikan Hasil</span><br/>
        &nbsp;&nbsp;<span class="text-purple-400">return</span> nilaiX;<br/>
        }
      </div>

      <p class="text-gray-600 mb-4">Perhatikan betapa indahnya logika ini: jika besok kamu harus bermigrasi menggunakan bahasa lain seperti <strong>Python</strong>, kamu hanya perlu mengganti kata <span class="font-mono text-sm bg-gray-100 px-1 py-0.5 rounded text-purple-600">function</span> menjadi <span class="font-mono text-sm bg-gray-100 px-1 py-0.5 rounded text-purple-600">def</span>. Logika berpikir di dalamnya sama sekali tidak berubah.</p>

      <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4 tracking-tight">3. Mengapa Validasi Angka Nol itu Wajib?</h3>
      <p class="text-gray-600 mb-4">Dalam matematika, membagi angka dengan nol (seperti kasus harga buku dibagi 0) akan menghasilkan nilai yang tidak terdefinisi. Di dalam dunia komputer, membiarkan hal itu terjadi bisa berakibat fatal.</p>
      
      <p class="text-gray-600 mb-6">Program komputer bisa mengalami macet total (<em>crash</em>), kehabisan memori, atau memunculkan pesan error yang merusak antarmuka web. Logika proteksi di atas memastikan aplikasi kita tetap berjalan dengan aman seburuk apa pun input yang dimasukkan oleh pengguna.</p>

      <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4 tracking-tight">Kesimpulan</h3>
      <p class="text-gray-600 mb-4">Menulis kode (<em>coding</em>) sebenarnya hanyalah aktivitas mengetik di papan ketik. Keahlian utama seorang software engineer yang sesungguhnya terletak pada kemampuan merumuskan <strong>algoritma</strong>&mdash;menjembatani masalah konseptual matematika menjadi baris solusi yang dipahami oleh mesin digital.</p>
      
      <p class="text-gray-600 mb-6">Untuk membuktikannya, logika di atas telah diintegrasikan langsung ke dalam modul interaktif halaman khusus di platform ini. Kamu bisa langsung mencoba dan memverifikasi kebenaran rumus aljabar yang sedang kamu pelajari melalui tautan berikut:</p>

      <div class="inline-block bg-gray-50 border border-gray-200 rounded-xl p-4 hover:border-blue-500 hover:bg-blue-50/30 transition-all duration-300">
        <a href="/tools" class="flex items-center gap-2 text-blue-600 font-bold text-sm tracking-tight group">
          <span>Coba Alat Kalkulator Aljabar Linear Otomatis</span>
          <span class="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
        </a>
      </div>
    `,
  },
];
