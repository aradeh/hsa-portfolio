'use client';

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 lg:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="h-64 sm:h-80 md:h-96 overflow-hidden luxury-border">
            <img
              src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&h=600&fit=crop"
              alt="Photographer"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-8 tracking-tight">
              About Me
            </h2>
            <div className="h-1 w-16 bg-gold mb-8"></div>
            <p className="text-lg text-gray-400 mb-6 leading-relaxed font-light">
              I&apos;m a passionate photographer with over 10 years of experience capturing
              beautiful moments across the globe. My work focuses on authentic storytelling
              through the lens of nature, culture, and human emotion.
            </p>
            <p className="text-lg text-gray-400 mb-12 leading-relaxed font-light">
              Whether it&apos;s a dramatic landscape, intimate portrait, or vibrant street scene,
              I believe every photograph has a story to tell. I&apos;m committed to delivering
              high-quality imagery that resonates with viewers and creates lasting memories.
            </p>
            <div className="flex flex-col sm:flex-row gap-12">
              <div className="border-l-2 border-gold pl-6">
                <p className="text-3xl sm:text-4xl font-bold text-gold">500+</p>
                <p className="text-gray-400 text-sm uppercase tracking-widest">Projects Completed</p>
              </div>
              <div className="border-l-2 border-gold pl-6">
                <p className="text-3xl sm:text-4xl font-bold text-gold">1000+</p>
                <p className="text-gray-400 text-sm uppercase tracking-widest">Happy Clients</p>
              </div>
              <div className="border-l-2 border-gold pl-6">
                <p className="text-3xl sm:text-4xl font-bold text-gold">10+</p>
                <p className="text-gray-400 text-sm uppercase tracking-widest">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
