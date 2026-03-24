const images = [
  { url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80", label: "Infinity Pool", span: "col-span-2 row-span-2" },
  { url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80", label: "Garden Suite" },
  { url: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80", label: "Spa" },
  { url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80", label: "Fine Dining" },
  { url: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=600&q=80", label: "Golf Course" },
  { url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80", label: "Resort Exterior", span: "col-span-2" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-sans text-teal-500 text-xs tracking-[0.4em] uppercase mb-4">
              Gallery
            </p>
            <h2 className="font-display text-teal-900 text-5xl lg:text-6xl font-light">
              A Glimpse of<br />
              <span className="italic text-teal-500">Paradise</span>
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-2 font-sans text-teal-600 text-sm border border-teal-200 px-6 py-3 rounded-full hover:border-teal-400 transition-colors">
            View Full Gallery
            <span>→</span>
          </button>
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-4 h-auto md:h-[600px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`img-zoom rounded-2xl overflow-hidden group cursor-pointer relative ${img.span || ""}`}
            >
              <img
                src={img.url}
                alt={img.label}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-teal-900/0 group-hover:bg-teal-900/40 transition-colors duration-400 flex items-end p-4">
                <span className="font-sans text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-400 translate-y-2 group-hover:translate-y-0">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6 md:hidden">
          <button className="font-sans text-teal-600 text-sm border border-teal-200 px-6 py-3 rounded-full">
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
}
