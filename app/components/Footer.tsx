'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import xIcon from '@/app/assets/icons/x.png';
import facebookIcon from '@/app/assets/icons/facebook.png';
import linkedInIcon from '@/app/assets/icons/linkedIn.png';
import { style } from 'framer-motion/client';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 h-12 w-12 rounded-full bg-gradient-to-br from-[#5ba3c4] to-[#5b5bde] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5ba3c4] focus-visible:ring-offset-2"
          aria-label="Back to top"
          title="Back to top"
        >
          <svg className="mx-auto h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      <footer className="bg-gradient-to-br from-[#0f172a] via-[#0c2340] to-[#0f172a] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5ba3c4] to-[#5b5bde] flex items-center justify-center">
                  <Image src="/logo2.jpeg" alt="SympliCare AI Logo" width={40} height={40} className="rounded-xl w-full h-full object-cover" />
                </div>
                <span className="font-bold text-white text-base">SympliCare <span className="gradient-text">AI</span></span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-5">
                Supporting care home managers, shift leads, and compliance teams with practical, structured operations management. Built for UK care homes.
              </p>
              <div className="flex gap-3">
                {[xIcon, facebookIcon, linkedInIcon].map((icon, idx) => (
                  <div key={idx} className="w-9 h-9 rounded-lg  flex items-center justify-center border">
                    <Image src={icon} alt="" width={20} height={20} className="object-contain brightness-0 invert opacity-80" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-5 text-sm tracking-wide uppercase">Navigation</h4>
              <ul className="space-y-3 text-sm " style={{ listStyleType:'none' }}>
                {[['/', 'Home'], ['/about', 'About'], ['/careers', 'Careers'], ['/contact', 'Contact']].map(([href, label]) => (
                  <li key={href}>
                    <Link href={href} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
                      <span className="w-1 h-1 rounded-full bg-[#5ba3c4] group-hover:w-2 transition-all duration-300" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-5 text-sm tracking-wide uppercase">Get in Touch</h4>
              <p className="text-sm text-slate-400 mb-5 leading-relaxed">
                Interested in early access or learning more?
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 btn-gradient text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-lg">
                Contact Us →
              </Link>
              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="text-emerald-400">●</span> GDPR Compliant Platform
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="text-[#5ba3c4]">●</span> UK-Based Development Team
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-xs text-slate-500 mb-5 leading-relaxed">
              <span className="font-semibold text-slate-400">Disclaimer:</span> SympliCare AI is a technology platform intended to support operational workflows. It does not provide clinical advice or replace regulatory responsibilities.
            </p>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-xs text-slate-500">
              <p>&copy; {currentYear} SympliCare AI. All rights reserved.</p>
              <div className="flex gap-6">
                <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
