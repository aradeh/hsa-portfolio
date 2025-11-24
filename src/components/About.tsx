'use client';

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 lg:py-32 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content - Left */}
          <div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-serif font-light text-black mb-8 tracking-tight">
              HI I'M GORDON
            </h2>
            <p className="text-base sm:text-lg text-black mb-6 leading-relaxed font-light font-mono">
              A multimedia artist with over ten years of experience in making eco-art and pro-nature designs. I deeply believe that there's great value in nature and if you stand for our environment and are in need of design skills, let's have a chat.
            </p>
          </div>

          {/* Images - Right */}
          <div className="grid grid-cols-2 gap-6">
            <div className="h-80 overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=500&fit=crop"
                alt="Art piece"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="h-80 overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=500&fit=crop"
                alt="Nature art"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
