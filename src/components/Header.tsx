'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-transparent backdrop-blur-md border-b border-gold/30">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-4xl font-serif font-bold text-gold hover:text-white transition-colors tracking-wider">
              HSA
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-12">
              <Link
                href="#gallery"
                className="text-white hover:text-gold px-3 py-2 text-sm font-medium transition-colors tracking-widest uppercase"
              >
                Gallery
              </Link>
              <Link
                href="#about"
                className="text-white hover:text-gold px-3 py-2 text-sm font-medium transition-colors tracking-widest uppercase"
              >
                About
              </Link>
              <Link
                href="#contact"
                className="luxury-button text-sm"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gold hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link
              href="#gallery"
              className="block text-gray-700 hover:text-accent px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="#about"
              className="block text-gray-700 hover:text-accent px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="block bg-accent text-white px-3 py-2 rounded-md text-base font-medium mt-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
