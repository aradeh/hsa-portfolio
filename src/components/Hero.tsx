'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-black via-transparent to-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gold rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight tracking-tight animate-fadeInUp">
          Capturing Moments,
          <span className="text-gold block mt-3"> Creating Memories</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-12 font-light tracking-wide">
          Professional photography portfolio showcasing the beauty of nature, people, and events through a creative lens.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            href="#gallery"
            className="luxury-button"
          >
            View Gallery
          </Link>
          <Link
            href="#contact"
            className="inline-block border-2 border-gold text-gold px-8 py-3 font-semibold hover:bg-gold hover:text-black transition-all duration-300 tracking-widest text-sm"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
