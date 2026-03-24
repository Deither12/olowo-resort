import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Experience", "Amenities", "Rooms", "Dining", "Gallery", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full border-2 border-teal-500 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-teal-500">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </div>
          <div>
            <span
              className={`font-display font-semibold text-xl tracking-wide block leading-none ${
                scrolled ? "text-teal-800" : "text-white"
              }`}
            >
              Olowo
            </span>
            <span
              className={`font-sans text-[9px] tracking-[0.3em] uppercase block ${
                scrolled ? "text-teal-500" : "text-teal-300"
              }`}
            >
              Luxury Resort
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={`nav-link font-sans text-sm tracking-wide transition-colors ${
                  scrolled
                    ? "text-teal-900 hover:text-teal-600"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            className={`font-sans text-sm px-6 py-2.5 rounded-full transition-all duration-300 ${
              scrolled
                ? "bg-teal-600 text-white hover:bg-teal-700"
                : "bg-white/20 text-white border border-white/40 hover:bg-white/30 backdrop-blur-sm"
            }`}
          >
            Book a Stay
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className={`lg:hidden p-2 ${scrolled ? "text-teal-800" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 bg-white/98 backdrop-blur-md ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="font-sans text-teal-800 hover:text-teal-600 block py-1"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <button className="w-full bg-teal-600 text-white font-sans text-sm py-3 rounded-full mt-2">
              Book a Stay
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
