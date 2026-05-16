import Section from '../components/Section';
import TeamMember from '../components/TeamMember';
import { teamData } from '@/app/data/teamData';
import Link from 'next/link';

export default function About() {
  return (
    <div className="w-full bg-gradient-to-b from-white via-[#f8fcfe] to-white">
      <section className="relative py-20 bg-gradient-to-br from-[#0f172a] via-[#0c2340] to-[#1e1b4b] overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#77bdda]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#ca86bc]/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-2 text-sm text-white/90 mb-6 backdrop-blur-sm">
            🏥 Our Story
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
            About <span className="gradient-text">SympliCare AI</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Understanding care home operations. Building practical solutions.
          </p>
        </div>
      </section>
      {/* Mission & Values */}
      <Section className="py-12 md:py-16">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[1.15fr_0.85fr] md:gap-10">
          <div className="max-w-2xl">
            <p className="mb-4 text-base leading-7 text-slate-700">
              SympliCare AI was founded to address real operational challenges in care homes.
            </p>

            <p className="mb-6 text-sm leading-7 text-slate-700">
              We’ve worked with care home teams, operational leaders, and compliance professionals to understand the true pain points of daily operations. What we discovered was clear:
            </p>

            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex gap-3">
                <span className="text-[#77bdda] font-semibold">•</span>
                <span>Existing systems often add complexity rather than reduce it</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#77bdda] font-semibold">•</span>
                <span>Teams need structured, practical tools that fit into their workflows</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#77bdda] font-semibold">•</span>
                <span>Focus must be on usability and clarity, not feature bloat</span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-[#c8e7f0] bg-gradient-to-br from-[#f0f9fc] to-white p-6 md:p-7 shadow-sm">
            <div className="space-y-6">
              <div>
                <h4 className="mb-2 font-semibold text-slate-950">Our Mission</h4>
                <p className="text-sm text-slate-600 leading-7">
                  &ldquo;To support care teams with simple, reliable, and practical systems that improve operations without adding unnecessary complexity.&rdquo;
                </p>
              </div>

              <div className="border-t border-[#c8e7f0] pt-5">
                <h4 className="mb-2 font-semibold text-slate-950">Our Values</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex gap-2"><span className="text-[#77bdda]">✓</span> <span><strong>Practical:</strong> Solutions that work in real care settings</span></li>
                  <li className="flex gap-2"><span className="text-[#77bdda]">✓</span> <span><strong>Clear:</strong> No jargon. Simple, obvious design.</span></li>
                  <li className="flex gap-2"><span className="text-[#77bdda]">✓</span> <span><strong>Trustworthy:</strong> Honest about capabilities and limitations</span></li>
                  <li className="flex gap-2"><span className="text-[#77bdda]">✓</span> <span><strong>Respectful:</strong> Built with care home professionals, not for them</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section id="founder-note" className="py-10 md:py-12 bg-gradient-to-br from-white via-[#f0f9fc] to-[#f8fcfe]">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-[#77bdda] to-[#ca86bc]" />
            <h2 className="text-2xl font-semibold text-slate-950">Founder&apos;s Note</h2>
          </div>

          <div className="bg-gradient-to-br from-[#f0f9fc] via-white to-[#f5e6f3] border border-[#c8e7f0] rounded-2xl p-6 md:p-8 space-y-5 text-slate-700 text-base leading-7 shadow-sm">
            <p>I started SympliCare after spending time in care homes, watching dedicated teams struggle with fragmented systems that made their jobs harder, not easier.</p>

            <p>These professionals are already stretched thin. They don&apos;t need more apps, more dashboards, or more complexity. They need systems that understand their world and fit into it.</p>

            <p className="text-slate-600 italic border-l-4 border-[#77bdda] pl-4">
              What struck me most wasn’t the technology gaps—it was how much institutional knowledge and context gets lost between shifts, between systems, and between departments.
            </p>

            <p>A fall that occurs at night gets documented hours later. Training gets entered manually into three separate systems. Inspection preparation becomes a week of manual file organization.</p>

            <p>None of these problems exist because of laziness or incompetence. They exist because the tools weren’t designed by people who understand the actual operational reality of care homes.</p>

            <p>SympliCare is being built differently. We&apos;re not coming with preconceived solutions. We&apos;re listening first. We&apos;re learning what actually works in practice. And we&apos;re committing to building only what&apos;s truly needed.</p>

            <p>I believe that care home operations can be simpler, clearer, and more reliable—not through complexity, but through genuine understanding of what your teams face every day.</p>

            <p className="font-semibold text-slate-950 pt-2">That&apos;s what we&apos;re building.</p>
          </div>
        </div>
      </Section>

      <Section className="py-12 md:py-14 bg-gradient-to-br from-[#f0f9fc] via-white to-[#f8fcfe]">
        <div className="text-center mb-10">
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="h-1 w-8 bg-gradient-to-r from-[#77bdda] to-[#6366f1]" />
            <h2 className="text-2xl font-bold text-slate-900">Why It Matters</h2>
            <div className="h-1 w-8 bg-gradient-to-r from-[#6366f1] to-[#ca86bc]" />
          </div>
          <p className="text-slate-500 text-sm">The real-world impact of better care operations</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-[#c8e7f0]">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#77bdda] to-[#5a9bb3]" />
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="font-bold text-slate-900 mb-2">Better Outcomes</h3>
            <p className="text-slate-600 text-sm leading-relaxed">When systems are clear and processes are simple, teams can focus on what matters: quality care and resident wellbeing.</p>
          </div>
          <div className="relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-[#c8e7f0]">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6366f1] to-[#4338ca]" />
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="font-bold text-slate-900 mb-2">Reduced Burden</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Less time on administrative complexity means more time and energy for the people under their care.</p>
          </div>
          <div className="relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-[#c8e7f0]">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ca86bc] to-[#aa60a0]" />
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="font-bold text-slate-900 mb-2">Confidence</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Clear systems and organized information mean teams are prepared and confident for regulatory requirements.</p>
          </div>
        </div>
      </Section>

      <Section id="team" className="py-12 md:py-16 bg-gradient-to-b from-white via-[#f8fcfe] to-white" heading="Meet Our Leadership" subheading="The team building care home solutions with real expertise">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamData.map((member, i) => (
            <TeamMember key={member.id} {...member} index={i} />
          ))}
        </div>
      </Section>

      <section className="py-16 md:py-20 bg-gradient-to-br from-[#0f172a] via-[#0c2340] to-[#1e1b4b] relative overflow-hidden border-t-4 border-[#77bdda]">
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">Where We Are Now</h2>
            <p className="text-slate-400">Our development journey — transparent and honest</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'Actively Learning', text: 'Working with care professionals to understand real-world operations in depth', icon: '🎓', color: 'from-[#77bdda] to-[#5a9bb3]' },
              { step: '02', title: 'Building Core MVP', text: 'Creating the foundation that addresses the most pressing operational challenges', icon: '⚙️', color: 'from-[#6366f1] to-[#4338ca]' },
              { step: '03', title: 'Preparing Pilot', text: 'Getting ready to work with early adopter homes to test and refine our solutions', icon: '🚀', color: 'from-[#ca86bc] to-[#aa60a0]' },
            ].map((item, i) => (
              <div key={i} className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-6 hover:bg-white/12 transition-all duration-300 hover:-translate-y-1">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl mb-4 shadow-lg`}>
                  {item.icon}
                </div>
                <div className="text-xs font-bold text-slate-500 mb-1 tracking-widest uppercase">Step {item.step}</div>
                <h4 className="font-bold text-white mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden border-t border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-br from-[#77bdda] via-[#6366f1] to-[#ca86bc]" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-2xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Interested in Being Part of This?</h2>
          <p className="text-white/85 mb-8 text-lg leading-relaxed">
            We’re actively seeking care professionals, operational leaders, and advisors to shape SympliCare alongside us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-[#6366f1] px-8 py-4 rounded-xl font-bold hover:bg-white/90 transition-all shadow-xl">
              Get in Touch →
            </Link>
            <Link href="/about#team" className="bg-white/20 border border-white/40 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all">
              Meet the Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}