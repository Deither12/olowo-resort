const restaurants = [
  {
    name: "Akure Table",
    cuisine: "Nigerian Fine Dining",
    desc: "The crown jewel of Olowo's culinary experience — an open-air terrace dining venue serving elevated Nigerian classics with a contemporary twist.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    hours: "7:00 PM – 11:00 PM",
    seats: "40 seats",
    dress: "Smart Elegant",
  },
  {
    name: "The Canopy",
    cuisine: "International Cuisine",
    desc: "A treehouse-inspired all-day dining venue surrounded by the forest canopy, serving global flavors with locally sourced ingredients.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    hours: "6:30 AM – 10:00 PM",
    seats: "80 seats",
    dress: "Resort Casual",
  },
  {
    name: "Sundowner Bar",
    cuisine: "Cocktails & Light Bites",
    desc: "Watch the golden hour paint the valley from our pool-level bar. Expert mixologists craft signature cocktails using native botanicals.",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80",
    hours: "3:00 PM – 1:00 AM",
    seats: "30 seats",
    dress: "Casual",
  },
];

export default function Dining() {
  return (
    <section id="dining" className="py-24 lg:py-36 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="font-sans text-teal-500 text-xs tracking-[0.4em] uppercase mb-4">
              Culinary Arts
            </p>
            <h2 className="font-display text-teal-900 text-5xl lg:text-6xl font-light leading-tight">
              A Journey for<br />
              <span className="italic text-teal-500">Every Palate</span>
            </h2>
          </div>
          <div>
            <div className="w-12 h-px bg-gold mb-6" />
            <p className="font-sans text-gray-600 text-sm leading-relaxed">
              Our culinary team, led by award-winning Chef Emeka Osei, sources 90% of ingredients
              from our own gardens and partner farms within 50km of the resort. Taste the
              terroir of Nigeria in every single bite.
            </p>
          </div>
        </div>

        {/* Restaurant cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {restaurants.map((r, i) => (
            <div key={i} className="group">
              {/* Image */}
              <div className="img-zoom rounded-2xl overflow-hidden aspect-[4/3] mb-6 shadow-md">
                <img src={r.image} alt={r.name} className="w-full h-full object-cover" />
              </div>

              {/* Details */}
              <p className="font-sans text-teal-400 text-[10px] tracking-[0.35em] uppercase mb-2">
                {r.cuisine}
              </p>
              <h3 className="font-display text-teal-900 text-3xl font-medium italic mb-3">
                {r.name}
              </h3>
              <p className="font-sans text-gray-500 text-sm leading-relaxed mb-5">{r.desc}</p>

              {/* Meta info */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                {[
                  { icon: "🕐", val: r.hours.split("–")[0].trim(), label: "Opens" },
                  { icon: "👥", val: r.seats, label: "Capacity" },
                  { icon: "👔", val: r.dress, label: "Dress" },
                ].map((m) => (
                  <div key={m.label} className="bg-white rounded-xl p-3 text-center">
                    <div className="text-lg mb-1">{m.icon}</div>
                    <div className="font-sans font-medium text-teal-900 text-xs">{m.val}</div>
                    <div className="font-sans text-gray-400 text-[10px]">{m.label}</div>
                  </div>
                ))}
              </div>

              <button className="font-sans text-teal-600 text-sm font-medium inline-flex items-center gap-2 hover:gap-3 transition-all group/btn">
                Make a Reservation
                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
