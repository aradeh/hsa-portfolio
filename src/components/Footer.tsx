import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 text-black py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
          <p className="text-sm text-gray-700 font-light">
            &copy; {currentYear} Gordon Aliprandi. All rights reserved.
          </p>
          <div className="flex space-x-8 text-sm">
            <Link href="#about" className="text-gray-700 hover:text-black transition-colors font-light">
              About
            </Link>
            <Link href="#portfolio" className="text-gray-700 hover:text-black transition-colors font-light">
              Portfolio
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-black transition-colors font-light">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
