'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop)' }}>
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 flex flex-col justify-between h-full pt-4 sm:pt-6">
        {/* Top section with navigation text */}
        <div className="flex justify-between items-start px-6 sm:px-12">
          <p className="text-xs sm:text-sm font-light text-white tracking-widest">Multimedia Artist</p>
          <Link href="#portfolio" className="text-xs sm:text-sm font-light text-white tracking-widest hover:text-gray-300 transition-colors">
            Portfolio
          </Link>
        </div>

        {/* Main hero content */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 sm:px-12 max-w-7xl mx-auto w-full mb-20">
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-serif font-bold text-white mb-2 leading-tight text-center">
            GORDON
          </h1>
          <p className="text-4xl sm:text-5xl font-serif font-light text-white mb-8 italic text-center">
            Aliprandi
          </p>
          
          <Link
            href="#contact"
            className="inline-block bg-white text-black px-8 py-3 text-sm font-light tracking-wider hover:bg-gray-200 transition-colors"
          >
            WORK WITH ME
          </Link>
        </div>
      </div>

      {/* Scroll indicator - positioned at bottom */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <p className="text-xs font-light text-white tracking-widest">SCROLL</p>
      </div>
    </section>
  );
}
