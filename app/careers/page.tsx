'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import processIcon from '@/app/assets/icons/process.png';
import flashIcon from '@/app/assets/icons/flash.png';
import targetIcon from '@/app/assets/icons/target.png';
import teamIcon from '@/app/assets/icons/team.png';
import notificationIcon from '@/app/assets/icons/notification.png';
import trustIcon from '@/app/assets/icons/trust.png';
import fileIcon from '@/app/assets/icons/file.png';
import verifiedIcon from '@/app/assets/icons/verified.png';

const opportunities = [
  {
    id: 'full-stack-developer',
    title: 'Full Stack Developer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote',
    experience: '3-5 years',
    description:
      'Build the next generation of care home operations software. Work with React, Next.js, and modern cloud infrastructure to deliver reliable, scalable features.',
  },
  {
    id: 'product-manager',
    title: 'Product Manager',
    department: 'Product',
    type: 'Full-time',
    location: 'Remote',
    experience: '2-4 years',
    description:
      'Shape the future of our platform by working directly with care home professionals and industry advisors to define what gets built and why.',
  },
  {
    id: 'care-operations-consultant',
    title: 'Care Operations Consultant',
    department: 'Operations',
    type: 'Full-time',
    location: 'Remote',
    experience: '5+ years',
    description:
      'Bring your care home expertise to help us design features that truly solve real-world challenges faced by care teams every day.',
  },
  {
    id: 'ux-ui-designer',
    title: 'UX/UI Designer',
    department: 'Design',
    type: 'Full-time',
    location: 'Remote',
    experience: '2-4 years',
    description:
      'Design intuitive interfaces for busy care teams. Create experiences that reduce complexity and make day-to-day operations feel effortless.',
  },
];

const departments = ['All', 'Engineering', 'Product', 'Design', 'Operations'];

const deptConfig: Record<string, { badge: string; dot: string }> = {
  Engineering: {
    badge: 'bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300',
    dot: 'bg-sky-500',
  },
  Product: {
    badge: 'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300',
    dot: 'bg-violet-500',
  },
  Design: {
    badge: 'bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300',
    dot: 'bg-pink-500',
  },
  Operations: {
    badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
    dot: 'bg-emerald-500',
  },
};

export default function Careers() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? opportunities
      : opportunities.filter((o) => o.department === activeFilter);

  const countFor = (dept: string) =>
    dept === 'All'
      ? opportunities.length
      : opportunities.filter((o) => o.department === dept).length;

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-[#1a1f3a] to-[#0c2340] overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#5ba3c4]/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#d16ba0]/12 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 md:py-32">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-white/80 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {opportunities.length} open positions
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Build something <span className="gradient-text">meaningful</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mb-8">
            We are a small, focused team building software that makes a real difference for UK care homes. If you want your work to matter, you are in the right place.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#open-roles"
              className="btn-gradient inline-flex items-center gap-2 text-white px-6 py-3 rounded-lg font-semibold text-sm"
            >
              See open roles
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors"
            >
              Learn about us
            </Link>
          </div>
        </div>
      </section>

      {/* Why Join Strip */}
      <section className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-8 text-center">
            Why join SympliCare?
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {[
              { label: 'Fully Remote', icon: processIcon },
              { label: 'Growth', icon: flashIcon },
              { label: 'Impact', icon: targetIcon },
              { label: 'Great Team', icon: teamIcon },
              { label: '25 Days PTO', icon: notificationIcon },
              { label: 'Equity', icon: trustIcon },
            ].map((perk) => (
              <div key={perk.label} className="flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5ba3c4]/15 to-[#d16ba0]/15 dark:from-[#5ba3c4]/25 dark:to-[#d16ba0]/25 flex items-center justify-center overflow-hidden">
                  <Image src={perk.icon} alt={perk.label} width={24} height={24} className="object-contain" />
                </div>
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-200 leading-tight">
                  {perk.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section id="open-roles" className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-1">
            Open Roles
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            {filtered.length} position{filtered.length !== 1 ? 's' : ''} available
            {activeFilter !== 'All' ? ` in ${activeFilter}` : ' across all departments'}
          </p>
        </div>

        {/* Department filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setActiveFilter(dept)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === dept
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
              }`}
            >
              {dept}
              <span
                className={`text-xs font-semibold px-1.5 py-0.5 rounded-full ${
                  activeFilter === dept
                    ? 'bg-white/20 dark:bg-slate-900/20 text-white dark:text-slate-900'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
                }`}
              >
                {countFor(dept)}
              </span>
            </button>
          ))}
        </div>

        {/* Job list */}
        <div className="space-y-3">
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-slate-400 dark:text-slate-500">
              No open roles in this department right now.
            </div>
          ) : (
            filtered.map((job) => {
              const cfg = deptConfig[job.department];
              return (
                <Link key={job.id} href={`/careers/${job.id}`} className="group block">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-[#5ba3c4] dark:hover:border-[#5ba3c4] hover:shadow-md dark:hover:shadow-slate-900/50 transition-all">
                    <div className={`hidden sm:block w-2 h-2 rounded-full flex-shrink-0 ${cfg.dot}`} />
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <h3 className="text-base font-semibold text-slate-900 dark:text-white group-hover:text-[#5ba3c4] transition-colors">
                          {job.title}
                        </h3>
                        <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${cfg.badge}`}>
                          {job.department}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-2.5">
                        <span className="flex items-center gap-1">
                          <Image src={fileIcon} alt="" width={14} height={14} className="object-contain opacity-60" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <Image src={processIcon} alt="" width={14} height={14} className="object-contain opacity-60" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Image src={verifiedIcon} alt="" width={14} height={14} className="object-contain opacity-60" />
                          {job.experience}
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                        {job.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#5ba3c4] group-hover:gap-2.5 transition-all">
                        View role
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })
          )}
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 dark:bg-slate-800/50 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                label: 'Simplicity',
                color: 'text-[#5ba3c4]',
                desc: "Complex problems don't require complex solutions. We advocate for clarity in everything we build.",
              },
              {
                label: 'Empathy',
                color: 'text-[#d16ba0]',
                desc: 'We listen to care professionals and understand their challenges. Their success is our success.',
              },
              {
                label: 'Integrity',
                color: 'text-[#5b5bde]',
                desc: "We operate with transparency and honesty. We do what we say we'll do, every time.",
              },
            ].map((value) => (
              <div key={value.label} className="flex gap-4">
                <div className={`text-2xl font-black ${value.color} leading-none mt-0.5 select-none`}>/</div>
                <div>
                  <h3 className={`text-base font-bold ${value.color} mb-2`}>{value.label}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <div className="bg-gradient-to-br from-slate-900 to-[#1a1f3a] dark:from-slate-800 dark:to-slate-900 rounded-2xl p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Don't see a role that fits?
            </h2>
            <p className="text-white/70 text-base mb-8 max-w-lg mx-auto leading-relaxed">
              We're always interested in talented people who share our mission. Send us your details and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact#contact-methods"
                className="btn-gradient inline-flex items-center gap-2 text-white px-8 py-3 rounded-lg font-semibold text-sm"
              >
                Get in touch
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
