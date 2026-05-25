'use client';

import Image from 'next/image';
import Link from 'next/link';
import { animate, motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const challenges = [
  {
    title: 'Delayed Documentation',
    description:
      'Incidents happen in real time, but records are often completed hours later due to fragmented tooling and shift pressure.',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
      </svg>
    ),
  },
  {
    title: 'Duplicate Data Entry',
    description:
      'Teams repeatedly re-enter the same information across disconnected systems, increasing admin effort and error risk.',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 8h10M9 12h10M9 16h10M5 8h.01M5 12h.01M5 16h.01" />
      </svg>
    ),
  },
  {
    title: 'Inspection Stress',
    description:
      'Before audits, teams manually gather evidence under pressure, creating avoidable stress and operational disruption.',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6M7 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z" />
      </svg>
    ),
  },
];

function DelayCounter() {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-120px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const controls = animate(0, 3, {
      duration: 1.2,
      ease: 'easeOut',
      onUpdate: (latest) => setValue(latest),
    });

    return () => controls.stop();
  }, [inView]);

  return (
    <span ref={ref} aria-label="3 plus hours delay" className="text-4xl md:text-5xl font-bold text-slate-950 tracking-tight">
      {Math.round(value)}+
    </span>
  );
}

export default function ChallengesSection() {
  return (
    <section id="challenges" className="relative overflow-hidden py-24 md:py-32 bg-gradient-to-b from-[#f7fbff] via-white to-[#f8f9ff]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#cbeeff]/50 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#e9dcff]/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[#dff6ef]/50 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <p className="inline-flex items-center rounded-full border border-[#d8e9f5] bg-white/80 px-4 py-2 text-xs font-semibold tracking-wide text-slate-600">
            Operational bottlenecks
          </p>
          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-950 leading-[1.1]">
            Real-World <span className="bg-gradient-to-r from-[#5ba3c4] via-[#5b5bde] to-[#d16ba0] bg-clip-text text-transparent">Challenges</span> Care Teams Face
          </h2>
          <p className="mt-5 max-w-3xl text-lg md:text-xl text-slate-600 leading-relaxed">
            Daily teams work hard, but fragmented workflows create delays, repeated admin, and audit pressure. This section highlights the moments where time and clarity are lost.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-7 relative overflow-hidden rounded-3xl border border-[#d8e9f5] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] min-h-[420px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=1400&h=900&fit=crop"
              alt="Care team in a real working shift"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-900/10 to-transparent" />

            <div className="absolute left-5 right-5 bottom-5 md:left-7 md:right-auto md:w-[360px] rounded-2xl border border-white/40 bg-white/70 p-5 backdrop-blur-xl shadow-lg">
              <p className="text-xs uppercase tracking-wider text-slate-600 font-semibold">Average documentation delay</p>
              <div className="mt-1 flex items-end gap-2">
                <DelayCounter />
                <span className="pb-1 text-sm font-medium text-slate-600">hours</span>
              </div>
              <p className="mt-2 text-sm text-slate-700">When incidents are logged late, visibility and response quality drop across the shift.</p>
            </div>

            <div className="absolute right-5 top-5 rounded-xl border border-white/40 bg-white/70 px-4 py-3 backdrop-blur-xl shadow-md">
              <p className="text-xs text-slate-600 font-semibold">Compliance risk</p>
              <p className="text-xl font-bold text-slate-950">High</p>
            </div>
          </motion.div>

          <div className="lg:col-span-5 space-y-4">
            {challenges.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: index * 0.12 }}
                whileHover={{ scale: 1.03, y: -2 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 p-6 md:p-7 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:border-[#8cb9d6]"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#d8f0ff] blur-2xl" />
                  <div className="absolute -left-8 bottom-0 h-20 w-20 rounded-full bg-[#f1e3ff] blur-2xl" />
                </div>

                <div className="relative flex items-start gap-4">
                  <div className="mt-0.5 flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm md:text-[15px] leading-relaxed text-slate-600">{item.description}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10"
        >
          <Link
            href="/#how-it-works"
            className="btn-gradient inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-sm md:text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            See How It Works
            <span className="ml-2" aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
