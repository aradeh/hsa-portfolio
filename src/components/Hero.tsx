'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-end justify-between bg-cover bg-center overflow-hidden" style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop)',
      backgroundAttachment: 'fixed'
    }}>
      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>

      {/* Header text (top left) */}
      <div className="absolute top-8 left-8 z-20">
        <p className="text-white text-xl font-light tracking-widest">Multimedia Artist</p>
      </div>

      {/* Header right */}
      <div className="absolute top-8 right-8 z-20">
        <p className="text-white text-xl font-light tracking-widest">Portfolio</p>
      </div>

      {/* Main content - bottom left */}
      <div className="relative z-10 p-8 sm:p-12 md:p-16 max-w-2xl pb-20">
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-serif font-bold text-gold mb-4 leading-tight tracking-tight">
          GORDON
        </h1>
        <p className="text-5xl sm:text-6xl font-serif text-gold italic mb-12 font-light">Eleganti</p>
        
        <Link
          href="#contact"
          className="inline-block bg-black/80 text-white px-8 py-4 font-semibold hover:bg-gold hover:text-black transition-all duration-300 tracking-widest text-sm uppercase border border-gold/50"
        >
          Work With Me
        </Link>
      </div>
    </section>
  );
}
