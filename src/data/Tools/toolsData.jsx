import AljabarLinearCalc from "../../components/tools/AljabarLinearCalc";

export const toolsData = [
  {
    id: 1,
    title: "Kalkulator Aljabar Linear",
    slug: "kalkulator-aljabar-linear",
    desc: "Selesaikan persamaan Ax + B = C secara instan lengkap dengan jabaran langkahnya.",
    category: "Matematika SMP",
    badge: "Matematika SMP",
    component: <AljabarLinearCalc />,
  },
  {
    id: 2,
    title: "Konversi Mata Uang",
    slug: "konversi-mata-uang",
    desc: "USD ke IDR dan sebaliknya dengan kurs ter-update.",
    category: "Finansial",
    badge: "💰 Finansial",
    component: (
      <div className="p-8 text-center bg-gray-50 border border-dashed rounded-2xl text-gray-400 font-medium italic">
        🔒 Komponen Konverter Mata Uang sedang dirancang dalam logika kode.
      </div>
    ),
  },
  {
    id: 3,
    title: "Password Generator",
    slug: "password-generator",
    desc: "Buat password kuat otomatis untuk mengamankan akun digital Anda.",
    category: "Keamanan",
    badge: "🔑 Keamanan",
    component: (
      <div className="p-8 text-center bg-gray-50 border border-dashed rounded-2xl text-gray-400 font-medium italic">
        🔒 Komponen Password Generator sedang dirancang dalam logika kode.
      </div>
    ),
  },
];
