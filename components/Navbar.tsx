'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-black/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          {/* Logo - Routes to home ("/") */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer group">
            {/* Clean transparent logo with no box or border */}
            <Image 
              src="/trumine-logo.png" 
              alt="Trumine Digital Logo" 
              width={40} 
              height={40} 
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <span className="text-2xl font-black tracking-tighter text-white uppercase">
              Trumine<span className="text-corporate-blue">Digital</span>
            </span>
          </Link>

          {/* Navigation Links - Cleanly aligned to the right */}
          <div className="hidden md:flex space-x-10 items-center">
            <Link href="/#services" className="text-xs font-bold tracking-widest text-silver-400 hover:text-white uppercase transition-colors">
              Services
            </Link>
            <Link href="/#process" className="text-xs font-bold tracking-widest text-silver-400 hover:text-white uppercase transition-colors">
              The Protocol
            </Link>
            <Link href="/#leadership" className="text-xs font-bold tracking-widest text-silver-400 hover:text-white uppercase transition-colors">
              Leadership
            </Link>
            {/* Contact is now Corporate Blue by default, and turns White on hover */}
            <Link href="/#contact" className="text-xs font-bold tracking-widest text-corporate-blue hover:text-white uppercase transition-colors">
              Contact
            </Link>
          </div>
          
        </div>
      </div>
    </nav>
  );
}