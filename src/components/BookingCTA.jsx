export default function BookingCTA() {
  return (
    <section id="contact" className="relative py-24 lg:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1800&q=80"
          alt="Resort aerial"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-teal-900/80" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <p className="font-sans text-teal-300 text-xs tracking-[0.4em] uppercase mb-4">
              Reserve Your Escape
            </p>
            <h2 className="font-display text-white text-5xl lg:text-6xl font-light italic leading-tight mb-6">
              Your Perfect Stay<br />Awaits
            </h2>
            <p className="font-sans text-teal-200/70 text-sm leading-relaxed mb-8 max-w-md">
              Each stay is bespoke — no two Olowo experiences are alike. Let our
              concierge team craft your perfect itinerary from arrival to departure.
            </p>

            <div className="flex flex-col gap-3">
              {[
                "✓ Complimentary airport transfers",
                "✓ Daily breakfast for two included",
                "✓ Free spa access with every booking",
                "✓ Flexible cancellation policy",
              ].map((item) => (
                <p key={item} className="font-sans text-teal-200/80 text-sm">{item}</p>
              ))}
            </div>
          </div>

          {/* Right: Booking form card */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h3 className="font-display text-teal-900 text-2xl font-medium mb-6">
              Check Availability
            </h3>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-sans text-gray-500 text-xs tracking-wider uppercase block mb-2">
                    Check In
                  </label>
                  <input
                    type="date"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 font-sans text-sm text-gray-700 focus:outline-none focus:border-teal-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="font-sans text-gray-500 text-xs tracking-wider uppercase block mb-2">
                    Check Out
                  </label>
                  <input
                    type="date"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 font-sans text-sm text-gray-700 focus:outline-none focus:border-teal-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="font-sans text-gray-500 text-xs tracking-wider uppercase block mb-2">
                  Room Type
                </label>
                <select className="w-full border border-gray-200 rounded-xl px-4 py-3 font-sans text-sm text-gray-700 focus:outline-none focus:border-teal-400 transition-colors">
                  <option>Garden Suite</option>
                  <option>Pool Villa</option>
                  <option>Sky Penthouse</option>
                  <option>Not Sure — Surprise Me</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-sans text-gray-500 text-xs tracking-wider uppercase block mb-2">
                    Adults
                  </label>
                  <select className="w-full border border-gray-200 rounded-xl px-4 py-3 font-sans text-sm text-gray-700 focus:outline-none focus:border-teal-400">
                    {[1, 2, 3, 4].map((n) => (
                      <option key={n}>{n}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="font-sans text-gray-500 text-xs tracking-wider uppercase block mb-2">
                    Children
                  </label>
                  <select className="w-full border border-gray-200 rounded-xl px-4 py-3 font-sans text-sm text-gray-700 focus:outline-none focus:border-teal-400">
                    {[0, 1, 2, 3].map((n) => (
                      <option key={n}>{n}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="font-sans text-gray-500 text-xs tracking-wider uppercase block mb-2">
                  Special Requests (optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Anniversary, dietary needs, arrival time..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 font-sans text-sm text-gray-700 focus:outline-none focus:border-teal-400 transition-colors resize-none"
                />
              </div>

              <button className="w-full btn-primary bg-teal-600 hover:bg-teal-700 text-white font-sans font-medium py-4 rounded-xl transition-colors text-sm tracking-wide">
                Check Availability & Book
              </button>
            </div>

            <p className="font-sans text-gray-400 text-[11px] text-center mt-4">
              Or call us directly: <span className="text-teal-600 font-medium">+234 800 OLOWO</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
