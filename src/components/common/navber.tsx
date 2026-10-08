// "use client";

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { useState } from 'react';

// const Navbar = () => {
//   const pathname = usePathname();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navLinks = [
//     { name: 'Home', href: '/' },
//     { name: 'Services', href: '/Services' },
//     { name: 'Work', href: '/Work' },
//     { name: 'About', href: '/About' },
//     { name: 'Process', href: '/process' },
//     { name: 'Contact', href: '/contact' },
//     { name: 'Comments', href: '/comments' },
//   ];

//   return (
//     <nav className="w-full bg-white/80 backdrop-blur-lg pt-8 relative sticky top-0 z-50">
//       {/* Top Section: Logo & Branding */}
//       <div className="flex flex-col items-center justify-center mb-6 px-4">
//         <div className="flex items-center space-x-4 md:space-x-6">
//           {/* Logo */}
//           <div className="relative flex items-center -mr-2">
//              <img src="/navlogo/nav.png" alt="Logo" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
//           </div>

//           {/* Company Name */}
//           <h1 className="text-2xl md:text-4xl font-extralight text-[#000] uppercase tracking-wider">
//             VELOXITYTECH
//           </h1>
//         </div>

//         {/* Mobile Menu Button */}
//         <button type="button"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="md:hidden absolute right-6 top-12"
//         >
//           <div className={`w-6 h-0.5 bg-black mb-1.5 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
//           <div className={`w-6 h-0.5 bg-black mb-1.5 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
//           <div className={`w-6 h-0.5 bg-black ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
//         </button>
//       </div>

//       {/* --- Animated Border Section --- */}
//       <div className="w-full h-[2px] bg-gray-100 relative overflow-hidden">
//         {/* This is the green bar that moves to the right */}
//         <div className="absolute top-0 h-full w-40 bg-green-500 shadow-[0_0_10px_#22c55e] animate-border-move"></div>
//       </div>
//       {/* ------------------------------- */}

//       {/* Bottom Section: Navigation Links (Desktop) */}
//       <div className="hidden md:block max-w-full mx-auto bg-amber-500">
//         {/* Navigation Links */}
//         <ul className="flex justify-center items-center py-5 space-x-12">
//           {navLinks.map((link) => {
//             const isActive = pathname === link.href;
//             // 
//             return (
//               <li key={link.name}>
//                 <Link
//                   href={link.href}
//                   className={`text-[17px] font-serif transition-all duration-300 relative pb-1
//                     ${isActive 
//                       ? 'text-black font-semibold border-b-2 border-black' 
//                       : 'text-[#4b5563] hover:text-black'
//                     }`}
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//       </div>

//       {/* Mobile Menu (Dropdown) */}
//       <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-amber-500 border-b border-gray-100 transition-all`}>
//         <ul className="flex flex-col items-center py-6 space-y-4">
//           {navLinks.map((link) => {
//             const isActive = pathname === link.href;
//             return (
//               <li key={link.name}>
//                 <Link
//                   href={link.href}
//                   onClick={() => setIsMenuOpen(false)}
//                   className={`text-lg font-serif ${isActive ? 'text-black font-bold border-b-2 border-black' : 'text-gray-500'}`}
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//       </div>

//     </nav>
//   );
// };

// export default Navbar;







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
    { name: 'Comments', href: '/comments' },
  ];

  return (
    <nav className="w-full bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-xs">
      
      {/* Top Main Bar: Left (Follow), Center (Logo & Brand), Right (Auth) */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between relative">
        
        {/* বাম পাশে: Follow Us / Social Icons */}
        <div className="hidden lg:flex items-center space-x-3">
          <span className="text-xs uppercase tracking-wider text-gray-500 font-serif">Follow:</span>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-black hover:text-white transition-all text-xs">
            in
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-black hover:text-white transition-all text-xs">
            tw
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-black hover:text-white transition-all text-xs">
            gh
          </a>
        </div>

        {/* মাঝখানে: Logo & Branding */}
        <div className="flex items-center space-x-3 md:space-x-4 mx-auto lg:mx-0">
          <div className="relative flex items-center">
             <img src="/navlogo/nav.png" alt="Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
          </div>
          <h1 className="text-xl md:text-3xl font-extralight text-[#000] uppercase tracking-wider">
            VELOXITYTECH
          </h1>
        </div>

        {/* ডান পাশে: Sign In & Sign Up (Desktop) */}
        <div className="hidden lg:flex items-center space-x-3">
          <Link 
            href="/signin" 
            className="text-sm font-serif bg-green-100 text-black hover:text-white px-5 py-2.5 rounded-full hover:bg-green-600 transition-all shadow-sm"
          >
            Sign In
          </Link>
          <Link 
            href="/signup" 
            className="text-sm font-serif bg-green-500 text-black hover:text-white px-5 py-2.5 rounded-full hover:bg-green-600 transition-all shadow-sm"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden absolute right-4 top-6 flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
        >
          <div className={`w-6 h-0.5 bg-black mb-1.5 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-black mb-1.5 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-black ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>

      {/* --- Animated Border Section --- */}
      <div className="w-full h-[2px] bg-gray-100 relative overflow-hidden">
        <div className="absolute top-0 h-full w-40 bg-green-500 shadow-[0_0_10px_#22c55e] animate-border-move"></div>
      </div>

      {/* Bottom Section: Navigation Links (Desktop) */}
      <div className="hidden lg:block w-full bg-amber-500">
        <ul className="flex justify-center items-center py-4 space-x-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`text-[16px] font-serif transition-all duration-300 relative pb-1
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
      <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden bg-amber-500 border-b border-gray-100 transition-all shadow-xl`}>
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
          
          {/* Mobile Auth & Social Links */}
          <div className="pt-4 border-t border-gray-100 flex flex-col items-center space-y-4 w-full px-6">
            <div className="flex space-x-4 mb-2">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-sm font-serif text-gray-600">LinkedIn</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-sm font-serif text-gray-600">Twitter</a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-sm font-serif text-gray-600">GitHub</a>
            </div>
            <div className="flex space-x-3 w-full">
              <Link 
                href="/signin" 
                onClick={() => setIsMenuOpen(false)}
                className="w-1/2 text-center py-2.5 border border-gray-300 rounded-lg text-sm font-serif"
              >
                Sign In
              </Link>
              <Link 
                href="/signup" 
                onClick={() => setIsMenuOpen(false)}
                className="w-1/2 text-center py-2.5 bg-black text-white rounded-lg text-sm font-serif"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;