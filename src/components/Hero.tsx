'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-white pt-20 pb-12">
      {/* Top section with navigation text */}
      <div className="flex justify-between items-start px-6 sm:px-12 mb-12">
        <p className="text-xs sm:text-sm font-light text-gray-600 tracking-widest">Multimedia Artist</p>
        <p className="text-xs sm:text-sm font-light text-gray-600 tracking-widest">Portfolio</p>
      </div>

      {/* Main hero content */}
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-6 sm:px-12 max-w-7xl mx-auto w-full">
        {/* Left side - Text */}
        <div className="md:w-1/2">
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-serif font-bold text-black mb-2 leading-tight">
            GORDON
          </h1>
          <p className="text-4xl sm:text-5xl font-serif font-light text-black mb-8 italic">
            Aliprandi
          </p>
          
          <Link
            href="#contact"
            className="inline-block bg-black text-white px-8 py-3 text-sm font-light tracking-wider hover:bg-gray-800 transition-colors"
          >
            WORK WITH ME
          </Link>
        </div>

        {/* Right side - Featured Image */}
        <div className="md:w-1/2 h-80 md:h-96 overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop"
            alt="Featured work"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="flex justify-center mt-12">
        <p className="text-xs font-light text-gray-500 tracking-widest">SCROLL</p>
      </div>
    </section>
  );
}
