"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/Services' },
    { name: 'Work', href: '/Work' },
    { name: 'About', href: '/About' },
    { name: 'Process', href: '/process' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="w-full bg-white/80 backdrop-blur-lg pt-8 relative sticky top-0 z-50">
      {/* Top Section: Logo & Branding */}
      <div className="flex flex-col items-center justify-center mb-6 px-4">
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* Logo */}
          <div className="relative flex items-center -mr-2">
             <img src="/navlogo/nav.png" alt="Logo" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
          </div>

          {/* Company Name */}
          <h1 className="text-2xl md:text-4xl font-extralight text-[#000] uppercase tracking-wider">
            VELOXITYTECH
          </h1>
        </div>

        {/* Mobile Menu Button */}
        <button type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden absolute right-6 top-12"
        >
          <div className={`w-6 h-0.5 bg-black mb-1.5 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-black mb-1.5 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-black ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>

      {/* --- Animated Border Section --- */}
      <div className="w-full h-[2px] bg-gray-100 relative overflow-hidden">
        {/* This is the green bar that moves to the right */}
        <div className="absolute top-0 h-full w-40 bg-green-500 shadow-[0_0_10px_#22c55e] animate-border-move"></div>
      </div>
      {/* ------------------------------- */}

      {/* Bottom Section: Navigation Links (Desktop) */}
      <div className="hidden md:block max-w-7xl mx-auto">
        {/* Navigation Links */}
        <ul className="flex justify-center items-center py-5 space-x-12">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            // 
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`text-[17px] font-serif transition-all duration-300 relative pb-1
                    ${isActive 
                      ? 'text-black font-semibold border-b-2 border-black' 
                      : 'text-[#4b5563] hover:text-black'
                    }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white border-b border-gray-100 transition-all`}>
        <ul className="flex flex-col items-center py-6 space-y-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-lg font-serif ${isActive ? 'text-black font-bold border-b-2 border-black' : 'text-gray-500'}`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;