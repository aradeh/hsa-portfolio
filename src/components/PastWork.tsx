'use client';

export default function PastWork() {
  return (
    <section id="portfolio" className="py-20 sm:py-28 lg:py-32 bg-gradient-to-br from-amber-100 via-amber-50 to-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Text and Title */}
          <div className="order-2 md:order-1">
            <h2 className="text-6xl sm:text-7xl md:text-8xl font-serif font-light text-amber-900 mb-8 tracking-tight">
              PAST
              <br />
              <span className="italic font-serif font-light">Work</span>
            </h2>
            <p className="text-base sm:text-lg text-amber-900 mb-8 leading-relaxed font-light">
              Explore my collection of eco-friendly designs and sustainable art projects that reflect my commitment to environmental consciousness and creative excellence.
            </p>
          </div>

          {/* Right - Featured Image */}
          <div className="order-1 md:order-2 h-96 sm:h-[500px] overflow-hidden rounded-lg shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=700&fit=crop"
              alt="Past work showcase"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
