export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-teal-950 text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-full border-2 border-teal-400 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-teal-400">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <div>
                <span className="font-display font-semibold text-xl text-white block leading-none">Olowo</span>
                <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-teal-400 block">Luxury Resort</span>
              </div>
            </div>
            <p className="font-sans text-teal-300/60 text-sm leading-relaxed mb-6">
              An exclusive sanctuary on 2 hectares of ancestral Nigerian land. Built for those who work hard and deserve the finest.
            </p>
            <div className="flex gap-3">
              {["instagram", "facebook", "twitter", "youtube"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-full border border-teal-700 flex items-center justify-center hover:border-teal-400 hover:bg-teal-800 transition-all"
                >
                  <span className="font-sans text-teal-400 text-xs uppercase">{s[0].toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.35em] uppercase text-teal-400 mb-6">Explore</h4>
            <ul className="space-y-3">
              {["Suites & Villas", "Dining", "Spa & Wellness", "Golf Course", "Water Sports", "Events"].map((item) => (
                <li key={item}>
                  <a href="#" className="font-sans text-teal-200/60 text-sm hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.35em] uppercase text-teal-400 mb-6">Information</h4>
            <ul className="space-y-3">
              {["About Olowo", "Press & Media", "Careers", "Sustainability", "Gift Cards", "Loyalty Programme"].map((item) => (
                <li key={item}>
                  <a href="#" className="font-sans text-teal-200/60 text-sm hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.35em] uppercase text-teal-400 mb-6">Contact</h4>
            <ul className="space-y-4">
              {[
                { icon: "📍", label: "Location", val: "Akure, Ondo State, Nigeria" },
                { icon: "📞", label: "Phone", val: "+234 800 OLOWO-RESORT" },
                { icon: "✉️", label: "Email", val: "hello@oloworesort.com" },
                { icon: "🕐", label: "Concierge", val: "24 hours, 7 days" },
              ].map((c) => (
                <li key={c.label} className="flex gap-3">
                  <span className="text-base">{c.icon}</span>
                  <div>
                    <p className="font-sans text-teal-400 text-[10px] tracking-wide uppercase">{c.label}</p>
                    <p className="font-sans text-teal-200/70 text-xs mt-0.5">{c.val}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-teal-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-teal-400/50 text-xs">
            © {year} Olowo Resort. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Cookie Settings"].map((item) => (
              <a key={item} href="#" className="font-sans text-teal-400/50 text-xs hover:text-teal-300 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
