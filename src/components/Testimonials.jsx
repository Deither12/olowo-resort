import { useState } from "react";

const testimonials = [
  {
    name: "Dr. Adaeze Okonkwo",
    role: "Cardiologist, Lagos",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    quote: "Olowo Resort completely changed my definition of luxury. The private villa, the personalized dining, the spa — every single detail was perfection. I cried when I had to leave.",
    stay: "Pool Villa – 7 nights",
    rating: 5,
  },
  {
    name: "Chukwuemeka Eze",
    role: "CEO, TechBridge Africa",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    quote: "I've stayed at the finest resorts globally — Maldives, Bali, Tuscany. Olowo stands with them, proudly and unapologetically African. Exceptional in every way.",
    stay: "Sky Penthouse – 5 nights",
    rating: 5,
  },
  {
    name: "Amaka & Tunde Adeyemi",
    role: "Honeymooners, Abuja",
    image: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=200&q=80",
    quote: "We chose Olowo for our honeymoon and it was the best decision of our lives. The romance package, sunset dinner by the pool, couple's spa — breathtakingly beautiful.",
    stay: "Garden Suite – 4 nights",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  return (
    <section className="py-24 lg:py-36 bg-teal-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="font-sans text-teal-500 text-xs tracking-[0.4em] uppercase mb-4">
            Guest Stories
          </p>
          <h2 className="font-display text-teal-900 text-5xl lg:text-6xl font-light">
            Voices of <span className="italic text-teal-500">Delight</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-8">
            {Array.from({ length: t.rating }).map((_, i) => (
              <span key={i} className="text-gold text-xl">★</span>
            ))}
          </div>

          {/* Quote */}
          <blockquote className="font-display text-teal-900 text-2xl lg:text-3xl font-light italic leading-relaxed mb-10">
            "{t.quote}"
          </blockquote>

          {/* Author */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <img
              src={t.image}
              alt={t.name}
              className="w-14 h-14 rounded-full object-cover border-2 border-teal-200"
            />
            <div className="text-left">
              <p className="font-sans font-medium text-teal-900 text-sm">{t.name}</p>
              <p className="font-sans text-teal-500/70 text-xs">{t.role}</p>
              <p className="font-sans text-teal-400 text-[10px] tracking-wide mt-0.5">{t.stay}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? "w-8 h-2 bg-teal-500" : "w-2 h-2 bg-teal-200"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-8 mt-16 pt-12 border-t border-teal-100">
          {[
            { val: "4.9/5", label: "TripAdvisor Rating" },
            { val: "2,400+", label: "Five Star Reviews" },
            { val: "#1", label: "Resort in Nigeria" },
            { val: "100%", label: "Would Return" },
          ].map((b) => (
            <div key={b.label} className="text-center">
              <div className="font-display text-teal-600 text-3xl font-medium">{b.val}</div>
              <div className="font-sans text-gray-500 text-xs tracking-wide mt-1">{b.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
