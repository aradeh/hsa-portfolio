'use client';

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Text Content */}
          <div>
            <h2 className="text-6xl sm:text-7xl md:text-8xl font-serif font-bold text-black mb-8 leading-tight">
              HI I'M<br />GORDON
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed font-light">
              A multimedia artist with over ten years of experience in making eco-art and pro-nature designs. I deeply believe that there's great value in nature and if you stand for our environment and are in need of design skills, let's have a chat.
            </p>
            <p className="text-base text-gray-600 font-light leading-relaxed">
              Specializing in sustainable design, eco-friendly materials, and environmentally conscious creative solutions that make a real difference.
            </p>
          </div>

          {/* Right - Images */}
          <div className="grid grid-cols-2 gap-6">
            <div className="h-80 overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=500&fit=crop"
                alt="Work 1"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="h-80 overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=500&fit=crop"
                alt="Work 2"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
