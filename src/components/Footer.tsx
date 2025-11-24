'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-300 text-black py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-serif font-bold mb-4 text-black tracking-wider">HSA</h3>
            <p className="text-gray-700 font-light">
              Multimedia artist creating eco-friendly and sustainable designs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-black uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#gallery" className="text-gray-700 hover:text-amber-600 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-700 hover:text-amber-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-gray-700 hover:text-amber-600 transition-colors">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6 text-black uppercase tracking-widest text-sm">Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-700 hover:text-amber-600 transition-colors cursor-pointer">Art Direction</li>
              <li className="text-gray-700 hover:text-amber-600 transition-colors cursor-pointer">Design Consulting</li>
              <li className="text-gray-700 hover:text-amber-600 transition-colors cursor-pointer">Eco-Projects</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-6 text-black uppercase tracking-widest text-sm">Follow</h4>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-black hover:text-amber-600 transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.646.069 4.85 0 3.204-.012 3.584-.07 4.85-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                  <circle cx="12" cy="12" r="3" />
                  <circle cx="18.5" cy="5.5" r="1.5" />
                </svg>
              </a>
              <a
                href="#"
                className="text-black hover:text-amber-600 transition-colors"
                aria-label="Email"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-12 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-700 text-sm">
            &copy; {currentYear} Gordon Eleganti. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0 text-sm">
            <Link href="#" className="text-gray-700 hover:text-amber-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-700 hover:text-amber-600 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 002.856-3.915 3.967 3.967 0 01-1.017.27 5.5 5.5 0 002.416-3.03 11.016 11.016 0 01-3.288 1.256 5.5 5.5 0 00-9.475 5.02A15.64 15.64 0 011.671 3.149a5.5 5.5 0 001.703 7.35 5.47 5.47 0 01-2.49-.687v.069a5.5 5.5 0 004.414 5.39 5.52 5.52 0 01-2.48.092 5.507 5.507 0 005.141 3.821 11.04 11.04 0 01-6.84 2.366 15.62 15.62 0 008.433 2.467c10.12 0 15.631-8.379 15.631-15.63 0-.238-.005-.475-.014-.71a11.172 11.172 0 002.728-2.864z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gold/30 pt-12">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm font-light">
              © {currentYear} HSA Photography. All rights reserved.
            </p>
            <div className="flex gap-8 mt-6 sm:mt-0">
              <Link href="#" className="text-gray-400 hover:text-gold text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gold text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
