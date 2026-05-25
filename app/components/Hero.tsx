'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeroProps {
  headline: string;
  subtext: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA: { label: string; href: string };
}

const slides = [
  { src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=800&fit=crop', alt: 'Care team providing support', caption: 'Empowering Care Teams' },
  { src: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&h=800&fit=crop', alt: 'Healthcare professional with elderly patient', caption: 'Compassionate Operations' },
  { src: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1200&h=800&fit=crop', alt: 'Digital healthcare dashboard', caption: 'Smart Documentation' },
  { src: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&h=800&fit=crop', alt: 'Care home operations', caption: 'Simplified Workflows' },
];

const trustBadges = [
  { icon: '🏥', text: 'Built for UK Care Homes' },
  { icon: '🔒', text: 'GDPR Compliant' },
  { icon: '🤝', text: 'Designed with Care Teams' },
];

export default function Hero({ headline, subtext, primaryCTA, secondaryCTA }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurrentIndex((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-[#5ba3c4]/12 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[#d16ba0]/12 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[#5b5bde]/8 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="relative z-10 flex flex-1 items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-24 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[75vh]">

            {/* Text Content */}
            <div className="space-y-8 animate-fade-up">
              <div className="inline-flex items-center gap-2 mt-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2.5 text-sm text-white/90 w-fit hover:bg-white/15 transition-colors">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                Now Accepting Early Access Applications
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.15] tracking-tight">
                {headline}
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed max-w-lg font-light">{subtext}</p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href={primaryCTA.href} className="btn-gradient text-white px-8 py-4 rounded-xl font-semibold text-base shadow-xl text-center">
                  {primaryCTA.label} <span className="ml-2">→</span>
                </a>
                <a href={secondaryCTA.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/25 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-white/20 transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  {secondaryCTA.label}
                </a>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                {trustBadges.map((b, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white/8 border border-white/15 rounded-lg px-3.5 py-2.5 text-xs text-white/80 hover:bg-white/12 transition-colors">
                    <span>{b.icon}</span>{b.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Image Carousel */}
            <div className="relative animate-fade-right">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 aspect-[4/3]">
                {slides.map((slide, idx) => (
                  <div key={idx} className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                    <Image src={slide.src} alt={slide.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" priority={idx === 0} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white text-sm font-medium bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                      {slide.caption}
                    </div>
                  </div>
                ))}
                <div className="absolute top-5 right-5 glass-card rounded-xl p-4 shadow-lg min-w-[140px]">
                  <p className="text-xs text-slate-600 font-semibold tracking-wide">Product Status</p>
                  <p className="text-2xl font-bold text-slate-900 mt-1">Pilot-ready</p>
                  <p className="text-xs text-emerald-500 font-semibold mt-2">Early access open</p>
                </div>
              </div>
              <div className="flex justify-center gap-2.5 mt-6">
                {slides.map((_, idx) => (
                  <button key={idx} onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-[#5ba3c4] w-8' : 'bg-white/30 w-3 hover:bg-white/50'}`}
                    aria-label={`Slide ${idx + 1}`} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 border-t border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 'UK', label: 'Care Home Focus' },
              { value: 'MVP', label: 'Built with Industry Input' },
              { value: 'Early', label: 'Access Applications Live' },
              { value: 'Fast', label: 'Feedback-led Iteration' },
            ].map((s, i) => (
              <div key={i} className="space-y-2">
                <p className="text-3xl font-bold text-white">{s.value}</p>
                <p className="text-xs text-slate-400 tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
