'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="w-full px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-['Pacifico'] text-blue-600">
              Dr. Emine Sungur Yılmaz
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Ana Sayfa
            </Link>
            <Link href="/hakkinda" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Hakkında
            </Link>
            <Link href="/hizmetler" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Hizmetlerimiz
            </Link>
            <Link href="/randevu" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Randevu
            </Link>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-menu-line text-xl"></i>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Ana Sayfa
              </Link>
              <Link href="/hakkinda" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Hakkında
              </Link>
              <Link href="/hizmetler" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Hizmetlerimiz
              </Link>
              <Link href="/randevu" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Randevu
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}