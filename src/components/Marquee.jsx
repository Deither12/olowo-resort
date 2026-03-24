const items = [
  "Luxury Suites", "★", "Private Pool Villas", "★", "Championship Golf", "★",
  "World-Class Spa", "★", "Bespoke Dining", "★", "Water Sports", "★",
  "Kayaking & Canoeing", "★", "Concierge Service", "★", "Helicopter Transfers", "★",
  "Luxury Suites", "★", "Private Pool Villas", "★", "Championship Golf", "★",
  "World-Class Spa", "★", "Bespoke Dining", "★", "Water Sports", "★",
  "Kayaking & Canoeing", "★", "Concierge Service", "★", "Helicopter Transfers", "★",
];

export default function Marquee() {
  return (
    <div className="bg-teal-600 py-4 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {items.map((item, i) => (
          <span
            key={i}
            className={`font-sans text-sm tracking-widest uppercase mx-4 ${
              item === "★" ? "text-teal-300" : "text-white/90"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
