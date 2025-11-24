'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo/Name on left */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-sm md:text-base text-gray-700 hover:text-black transition-colors font-light">
              Multimedia Artist
            </Link>
          </div>

          {/* Navigation on right */}
          <div className="hidden md:block">
            <Link
              href="#portfolio"
              className="text-sm text-gray-700 hover:text-black px-4 py-2 font-light transition-colors"
            >
              Portfolio
            </Link>
          </div>

          {/* Mobile nav */}
          <div className="md:hidden">
            <Link
              href="#portfolio"
              className="text-xs text-gray-700 hover:text-black font-light"
            >
              Portfolio
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
