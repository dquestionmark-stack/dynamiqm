import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "Beranda", link: "/" },
    { name: "Blog", link: "/blog" },
    { name: "Tools", link: "/tools" },
    { name: "Services", link: "/services" },
    { name: "Tentang", link: "/about" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200/60 z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            {/* LOGO */}
            <Link
              to="/"
              className="text-xl font-black tracking-tight text-gray-900 select-none">
              Dynami
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                QM
              </span>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center space-x-1">
              {menu.map((item, i) => (
                <NavLink
                  key={i}
                  to={item.link}
                  className={({ isActive }) => `
                    px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200
                    ${
                      isActive
                        ? "text-blue-600 bg-blue-50/60"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }
                  `}>
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* MOBILE BUTTON (Dengan Transisi Ikon SVG Burger ke Close) */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors focus:outline-none"
              aria-label="Toggle Menu">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24">
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* MOBILE MENU (Slide Down dengan Efek Transparansi) */}
        <div
          className={`
            md:hidden absolute top-16 left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200/80 px-6 py-4 space-y-2 transition-all duration-300 ease-in-out origin-top
            ${open ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-95 invisible h-0 pointer-events-none"}
          `}>
          {menu.map((item, i) => (
            <NavLink
              key={i}
              to={item.link}
              onClick={() => setOpen(false)}
              className={({ isActive }) => `
                block px-4 py-3 text-base font-semibold rounded-xl transition-all
                ${
                  isActive
                    ? "text-blue-600 bg-blue-50/80"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                }
              `}>
              {item.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
