import { useState, useEffect } from "react";

const slides = [
  {
    url: "https://images.unsplash.com/photo-1580977276076-ae4b8c219b8e?w=1800&q=80",
    tagline: "Give yourself the",
    title: "Olowo Treatment",
    sub: "Where ancestral land meets modern opulence",
  },
  {
    url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1800&q=80",
    tagline: "Immerse in",
    title: "Infinite Serenity",
    sub: "Curated experiences for the discerning traveler",
  },
  {
    url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1800&q=80",
    tagline: "Discover",
    title: "Exquisite Opulence",
    sub: "Located on 2 hectares of pristine ancestral land",
  },
];

const stats = [
  { value: "4.9★", label: "Guest Rating" },
  { value: "2 Ha", label: "Private Land" },
  { value: "48+", label: "Suite Rooms" },
  { value: "12+", label: "Amenities" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setTransitioning(false);
      }, 500);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section id="experience" className="relative h-screen min-h-[680px] overflow-hidden">
      {/* Background image with ken burns */}
      <div className="absolute inset-0">
        <img
          key={current}
          src={slide.url}
          alt="Resort"
          className={`w-full h-full object-cover transition-opacity duration-700 animate-kenburns ${
            transitioning ? "opacity-0" : "opacity-100"
          }`}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 via-teal-900/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 via-transparent to-transparent" />
      </div>

      {/* Vertical text accent */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4 z-10">
        <div className="w-px h-16 bg-white/30" />
        <span className="writing-vertical text-white/50 font-sans text-[10px] tracking-[0.4em] uppercase">
          Scroll to explore
        </span>
        <div className="w-px h-16 bg-white/30" />
      </div>

      {/* Slide indicators */}
      <div className="absolute right-8 bottom-12 flex flex-col gap-2 z-10 hidden md:flex">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-1 rounded-full transition-all duration-500 ${
              i === current ? "h-10 bg-white" : "h-4 bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-2xl">
            {/* Award badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="font-sans text-white/90 text-xs tracking-widest uppercase">
                Nigeria's Premier Luxury Resort
              </span>
            </div>

            {/* Tagline */}
            <p
              key={`tag-${current}`}
              className="font-sans text-teal-200 text-sm tracking-[0.3em] uppercase mb-3 animate-fade-up"
            >
              {slide.tagline}
            </p>

            {/* Title */}
            <h1
              key={`h1-${current}`}
              className="font-display text-white text-6xl md:text-7xl lg:text-8xl font-light italic leading-none mb-6 animate-fade-up delay-100"
            >
              {slide.title}
            </h1>

            {/* Subtitle */}
            <p
              key={`sub-${current}`}
              className="font-sans text-white/70 text-base md:text-lg max-w-md leading-relaxed mb-10 animate-fade-up delay-200"
            >
              {slide.sub}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
              <button className="btn-primary bg-teal-500 text-white font-sans text-sm px-8 py-4 rounded-full hover:bg-teal-400 transition-colors shadow-lg shadow-teal-900/30">
                Book Your Escape
              </button>
              <button className="flex items-center gap-3 text-white font-sans text-sm group">
                <span className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center group-hover:border-white transition-colors">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white ml-0.5">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                Watch Film
              </button>
            </div>

            {/* Review snippet */}
            <div className="mt-10 flex items-center gap-4 animate-fade-up delay-400">
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Guest"
                    className="w-9 h-9 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <div>
                <p className="text-white font-sans text-sm font-medium">
                  "Absolutely life-changing experience"
                </p>
                <p className="text-white/50 font-sans text-xs">— Dr. Adaeze Okonkwo, Lagos</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="bg-white/10 backdrop-blur-md border-t border-white/10 rounded-t-2xl mx-0 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map((s, i) => (
              <div key={i} className="px-6 py-5 text-center">
                <div className="font-display text-white text-2xl font-medium">{s.value}</div>
                <div className="font-sans text-white/50 text-xs tracking-wider uppercase mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
