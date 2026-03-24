const rooms = [
  {
    name: "Garden Suite",
    type: "Forest View",
    price: "₦350,000",
    per: "/ night",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
    features: ["48 sqm", "King Bed", "Garden View", "Soaking Tub"],
    badge: "Most Popular",
  },
  {
    name: "Pool Villa",
    type: "Private Pool",
    price: "₦650,000",
    per: "/ night",
    image: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=800&q=80",
    features: ["120 sqm", "2 Bedrooms", "Private Pool", "Butler"],
    badge: "Signature",
  },
  {
    name: "Sky Penthouse",
    type: "Panoramic Canopy",
    price: "₦1,200,000",
    per: "/ night",
    image: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=800&q=80",
    features: ["200 sqm", "3 Bedrooms", "Rooftop Terrace", "Helipad"],
    badge: "Exclusive",
  },
];

export default function Rooms() {
  return (
    <section id="rooms" className="py-24 lg:py-36 bg-teal-900 overflow-hidden relative">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-teal-400 text-xs tracking-[0.4em] uppercase mb-4">
            Accommodation
          </p>
          <h2 className="font-display text-white text-5xl lg:text-6xl font-light mb-4">
            Your Private <span className="italic text-teal-300">Sanctuary</span>
          </h2>
          <p className="font-sans text-teal-300/70 text-sm max-w-xl mx-auto leading-relaxed">
            Each room is a world unto itself — a space where luxury, privacy, and natural
            beauty converge to create your perfect escape.
          </p>
        </div>

        {/* Room cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {rooms.map((room, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="img-zoom aspect-[3/4]">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-950/30 to-transparent" />

              {/* Badge */}
              <div className="absolute top-4 right-4">
                <span className="font-sans text-[10px] tracking-widest uppercase bg-gold/90 text-white px-3 py-1.5 rounded-full">
                  {room.badge}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-sans text-teal-300/80 text-[10px] tracking-[0.3em] uppercase mb-1">
                  {room.type}
                </p>
                <h3 className="font-display text-white text-2xl font-medium mb-3">{room.name}</h3>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {room.features.map((f) => (
                    <span
                      key={f}
                      className="font-sans text-[10px] text-teal-200/80 bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded-full"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* Price + CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-display text-white text-2xl font-medium">{room.price}</span>
                    <span className="font-sans text-teal-300/60 text-xs ml-1">{room.per}</span>
                  </div>
                  <button className="font-sans text-[11px] tracking-wider uppercase bg-white/10 hover:bg-teal-500 text-white px-4 py-2 rounded-full border border-white/20 hover:border-teal-500 transition-all duration-300">
                    Reserve
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-12">
          <button className="font-sans text-teal-300 text-sm border border-teal-700 hover:border-teal-400 px-8 py-3 rounded-full transition-colors hover:text-white">
            View All Room Types
          </button>
        </div>
      </div>
    </section>
  );
}
