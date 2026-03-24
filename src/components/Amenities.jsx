import { useState } from "react";

const categories = ["All", "Relaxation", "Recreation", "Dining", "Wellness"];

const amenities = [
  {
    id: 1,
    category: "Relaxation",
    icon: "🛏️",
    title: "Cozy Suites",
    subtitle: "Private Pool Villas",
    desc: "Each suite is a private sanctuary featuring floor-to-ceiling glass walls, hand-curated furniture, private plunge pools, and panoramic forest views.",
    features: ["King-size canopy bed", "Private plunge pool", "Forest view balcony", "Butler service"],
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    tag: "48 Suites Available",
    color: "teal",
  },
  {
    id: 2,
    category: "Dining",
    icon: "🍽️",
    title: "Bespoke Meals",
    subtitle: "Fine Culinary Arts",
    desc: "Our master chefs blend indigenous Nigerian flavors with international gastronomy — every meal is an edible art form crafted around your preferences.",
    features: ["Farm-to-table cuisine", "Private dining setup", "Rooftop sunset dinners", "Wine cellar access"],
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    tag: "4 Signature Restaurants",
    color: "amber",
  },
  {
    id: 3,
    category: "Recreation",
    icon: "⛳",
    title: "Golf Courses",
    subtitle: "Championship 18-Hole",
    desc: "Set against the breathtaking Nigerian landscape, our championship-grade golf course challenges and rewards both beginners and seasoned players.",
    features: ["18-hole championship", "Pro coaching available", "Golf cart included", "Clubhouse access"],
    image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800&q=80",
    tag: "Rated Top 10 in Africa",
    color: "green",
  },
  {
    id: 4,
    category: "Recreation",
    icon: "🚣",
    title: "Kayak & Water Sports",
    subtitle: "Aquatic Adventures",
    desc: "Glide across pristine natural waterways in our kayaks, paddle boards, and guided boat excursions — adventure meets serenity on the water.",
    features: ["Guided kayak tours", "Stand-up paddleboard", "Night boat cruises", "Fishing expeditions"],
    image: "https://images.unsplash.com/photo-1526188717906-ab4a2f949f47?w=800&q=80",
    tag: "Daily Guided Tours",
    color: "blue",
  },
  {
    id: 5,
    category: "Wellness",
    icon: "💆",
    title: "Signature Spa",
    subtitle: "Holistic Healing Sanctuary",
    desc: "A 2,500 sqm wellness oasis where ancient African healing rituals meet modern therapies — restoring balance to body, mind, and spirit.",
    features: ["20 treatment rooms", "Hot stone therapy", "Herbal steam rooms", "Meditation garden"],
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
    tag: "Award-Winning Spa",
    color: "purple",
  },
  {
    id: 6,
    category: "Relaxation",
    icon: "🏊",
    title: "Infinity Pools",
    subtitle: "Sky-Touching Waters",
    desc: "Three stunning infinity pools set at different elevations offer uninterrupted views of the lush canopy below — swim with the horizon as your backdrop.",
    features: ["3 infinity pools", "Adults-only pool deck", "Poolside cabanas", "Sunset cocktail bar"],
    image: "https://images.unsplash.com/photo-1540541338537-71acf8c4d53f?w=800&q=80",
    tag: "Open 6AM – Midnight",
    color: "teal",
  },
];

const colorMap = {
  teal: "bg-teal-50 text-teal-700 border-teal-100",
  amber: "bg-amber-50 text-amber-700 border-amber-100",
  green: "bg-green-50 text-green-700 border-green-100",
  blue: "bg-blue-50 text-blue-700 border-blue-100",
  purple: "bg-purple-50 text-purple-700 border-purple-100",
};

export default function Amenities() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState(null);

  const filtered = amenities.filter(
    (a) => activeCategory === "All" || a.category === activeCategory
  );

  return (
    <section id="amenities" className="py-24 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div>
            <p className="font-sans text-teal-500 text-xs tracking-[0.4em] uppercase mb-4">
              Our Offerings
            </p>
            <h2 className="font-display text-teal-900 text-5xl lg:text-6xl font-light leading-tight">
              Immerse yourself in<br />
              <span className="italic text-teal-500">opulence & luxury</span>
            </h2>
          </div>
          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-sans text-sm px-5 py-2 rounded-full border transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-teal-600 text-white border-teal-600"
                    : "bg-white text-teal-700 border-teal-200 hover:border-teal-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Amenities grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((amenity, i) => (
            <div
              key={amenity.id}
              className="amenity-card group cursor-pointer rounded-2xl overflow-hidden border border-gray-100 bg-white"
              onMouseEnter={() => setHoveredId(amenity.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div className="img-zoom relative h-56">
                <img
                  src={amenity.image}
                  alt={amenity.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className={`font-sans text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-full border backdrop-blur-sm ${colorMap[amenity.color]} bg-opacity-90`}>
                    {amenity.tag}
                  </span>
                </div>
                {/* Icon on hover */}
                <div className={`absolute bottom-4 right-4 w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-2xl transition-all duration-400 ${hoveredId === amenity.id ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}>
                  {amenity.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="font-sans text-teal-400 text-[10px] tracking-[0.3em] uppercase mb-1">
                  {amenity.subtitle}
                </p>
                <h3 className="font-display text-teal-900 text-2xl font-medium mb-3">
                  {amenity.title}
                </h3>
                <p className="font-sans text-gray-500 text-sm leading-relaxed mb-4">
                  {amenity.desc}
                </p>

                {/* Features */}
                <ul className="grid grid-cols-2 gap-1.5 mb-5">
                  {amenity.features.map((f) => (
                    <li key={f} className="flex items-center gap-1.5 font-sans text-xs text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <button className="font-sans text-teal-600 text-sm font-medium hover:text-teal-800 transition-colors inline-flex items-center gap-2 group/btn">
                    Learn More
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </button>
                  <span className="text-gray-200 font-sans text-xs">#{String(i + 1).padStart(2, "0")}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="font-sans text-gray-400 text-sm mb-4">
            And many more exclusive experiences await you
          </p>
          <button className="btn-primary bg-teal-700 text-white font-sans text-sm px-10 py-4 rounded-full hover:bg-teal-600 transition-colors">
            View All Amenities
          </button>
        </div>
      </div>
    </section>
  );
}
