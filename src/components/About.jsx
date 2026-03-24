export default function About() {
  return (
    <section className="py-24 lg:py-36 bg-warm-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text */}
          <div>
            <p className="font-sans text-teal-500 text-xs tracking-[0.4em] uppercase mb-6">
              About Olowo Resort
            </p>
            <h2 className="font-display text-teal-900 text-5xl lg:text-6xl xl:text-7xl font-light leading-tight mb-8">
              Exquisite{" "}
              <span className="italic text-teal-500">Opulence</span>
              <br />
              Redefined
            </h2>
            <div className="w-16 h-px bg-gold mb-8" />
            <p className="font-sans text-gray-600 text-base leading-relaxed mb-6">
              Nestled on 2 hectares of ancestral Nigerian land, Olowo Resort is an
              exclusively curated sanctuary designed for those who work hard and
              deserve the finest. Every detail has been meticulously crafted to
              provide an unmatched experience.
            </p>
            <p className="font-sans text-gray-500 text-sm leading-relaxed mb-10">
              From the moment you arrive, you'll be enveloped in a world where
              nature's grandeur meets contemporary luxury — where the sounds of
              the forest blend seamlessly with the gentle ripple of your private
              infinity pool.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                { icon: "🌿", label: "Eco-Conscious", desc: "Sustainable luxury practices" },
                { icon: "🏆", label: "Award-Winning", desc: "Best resort in West Africa 2024" },
                { icon: "👁️", label: "Private & Secure", desc: "Exclusive gated estate" },
                { icon: "✦", label: "Bespoke Service", desc: "Personalized to every guest" },
              ].map((f) => (
                <div key={f.label} className="flex gap-3">
                  <span className="text-2xl flex-shrink-0">{f.icon}</span>
                  <div>
                    <p className="font-sans font-medium text-teal-900 text-sm">{f.label}</p>
                    <p className="font-sans text-gray-500 text-xs mt-0.5">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="inline-flex items-center gap-3 font-sans text-teal-600 text-sm font-medium group">
              <span>Explore Our Story</span>
              <span className="w-8 h-8 rounded-full border border-teal-300 flex items-center justify-center group-hover:bg-teal-600 group-hover:border-teal-600 group-hover:text-white transition-all">
                →
              </span>
            </button>
          </div>

          {/* Right: Images collage */}
          <div className="relative">
            {/* Main image */}
            <div className="img-zoom rounded-2xl overflow-hidden aspect-[3/4] max-w-sm mx-auto lg:ml-auto shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80"
                alt="Resort pool"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-4 md:left-0 bg-white rounded-2xl shadow-xl p-5 w-56 animate-float">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-lg">🌅</div>
                <div>
                  <p className="font-sans font-medium text-teal-900 text-xs">Sunrise Ritual</p>
                  <p className="font-sans text-gray-400 text-[10px]">Daily 6:00 AM</p>
                </div>
              </div>
              <p className="font-sans text-gray-500 text-[11px] leading-relaxed">
                Start each morning with a curated sunrise yoga session overlooking the valley.
              </p>
            </div>
            {/* Small accent image */}
            <div className="absolute -top-8 -right-4 w-32 h-32 rounded-2xl overflow-hidden shadow-lg img-zoom hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=300&q=80"
                alt="Spa"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Stat badge */}
            <div className="absolute top-8 -left-6 bg-teal-600 text-white rounded-2xl p-4 shadow-lg hidden md:block">
              <div className="font-display text-3xl font-medium">15+</div>
              <div className="font-sans text-teal-200 text-[10px] tracking-wider uppercase">Years of<br />Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
