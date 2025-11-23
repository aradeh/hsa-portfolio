'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
          Capturing Moments,
          <span className="text-accent"> Creating Memories</span>
        </h1>
        <p className="text-lg sm:text-xl text-secondary max-w-2xl mx-auto mb-8">
          Professional photography portfolio showcasing the beauty of nature, people, and events through a creative lens.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#gallery"
            className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            View Gallery
          </Link>
          <Link
            href="#contact"
            className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
