'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Mobile Header with Logo & Menu Button */}
      <header className="md:hidden fixed top-0 left-0 right-0 bg-[#0f172a]/90 backdrop-blur-lg border-b border-white/10 z-40">
        <div className="px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#77bdda] to-[#6366f1] flex items-center justify-center">
              <Image src="/logo2.jpeg" alt="SympliCare AI Logo" width={32} height={32} className="rounded-lg w-full h-full object-cover" />
            </div>
            <span className="font-bold text-white text-sm">SympliCare <span className="text-[#77bdda]">AI</span></span>
          </Link>

          {/* Menu Button */}
          <button className="flex flex-col gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#77bdda] rounded p-1" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" aria-expanded={isOpen} aria-controls="mobile-side-navigation">
            <div className={`w-6 h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Side Navigation */}
      <aside
        id="mobile-side-navigation"
        className={`fixed left-0 top-0 h-screen w-72 bg-[#0f172a] border-r border-white/10 z-50 transform transition-transform flex flex-col md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo / Branding */}
        <div className="border-b border-white/10 p-6">
          <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#77bdda] to-[#6366f1] flex items-center justify-center">
              <Image src="/logo2.jpeg" alt="SympliCare AI Logo" width={36} height={36} className="rounded-xl w-full h-full object-cover" />
            </div>
            <span className="font-bold text-white">SympliCare <span className="text-[#77bdda]">AI</span></span>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-8">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-4 py-2.5 rounded-lg text-slate-100 hover:bg-white/10 hover:text-white font-medium transition-all text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="border-t border-white/10 p-5">
          <Link href="/contact"
            className="block btn-gradient text-white px-4 py-3 rounded-xl text-center font-semibold transition-all w-full text-sm shadow-lg"
            onClick={() => setIsOpen(false)}>
            Get in Touch →
          </Link>
        </div>

        {/* Footer Info */}
        <div className="border-t border-white/10 px-5 py-4 text-xs text-slate-500">
          <p>© 2026 SympliCare AI</p>
          <p className="mt-1 text-slate-600">Shaping care home operations.</p>
        </div>
      </aside>
    </>
  );
}
