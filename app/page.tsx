import Hero from './components/Hero';
import Section from './components/Section';
import ChallengesSection from './components/ChallengesSection';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full bg-white">
      {/* SECTION 1: HERO */}
      <Hero
        headline="Simplifying Care Home Operations Built for Real-World Use"
        subtext="We are developing a platform to support care home teams in managing documentation, workflows, and day-to-day operations in a more structured and practical way."
        primaryCTA={{
          label: 'Join Early Access',
          href: '/contact',
        }}
        secondaryCTA={{
          label: 'Book a Call',
          href: 'https://calendly.com/symplicare-ai/new-meeting',
        }}
      />

      {/* SECTION 2: REAL-WORLD CHALLENGES */}
      <ChallengesSection />

      {/* SECTION 3: WHAT WE ARE BUILDING */}
      <Section
        id="building"
        heading="A Platform Designed to Support Everyday Care Operations"
        subheading="Simple, intuitive tools that fit into the real rhythm of care home work — not against it."
        className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Feature list */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow animate-fade-left">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-[#5ba3c4] to-[#5b5bde] rounded-xl flex items-center justify-center shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Platform Capabilities</h3>
            </div>
            <ul className="space-y-6">
              {[
                { title: 'Structured Documentation', desc: 'Clear templates and workflows that teams understand instantly', color: 'from-[#5ba3c4] to-[#4a8bad]' },
                { title: 'Simple Workflows', desc: 'Processes that fit into daily routines, not against them', color: 'from-[#5b5bde] to-[#3d3d9f]' },
                { title: 'Centralised Information', desc: 'Eliminate fragmented data — everything in one place', color: 'from-[#d16ba0] to-[#b14d80]' },
                { title: 'Manager Visibility', desc: 'Clear reporting without extra admin work', color: 'from-[#7c3aed] to-[#6d28d9]' },
              ].map((item, i) => (
                <li key={i} className="flex gap-4 group cursor-pointer">
                  <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform mt-2.5 bg-gradient-to-br ${item.color}`} />
                  <div>
                    <p className="text-slate-900 font-semibold text-base">{item.title}</p>
                    <p className="text-slate-600 text-sm mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-slate-500 italic mt-10 pt-8 border-t border-slate-100 text-base leading-relaxed">
              &ldquo;Designed to make everyday tasks easier to manage — without adding complexity.&rdquo;
            </p>
          </div>

          {/* Right: Image stack */}
          <div className="relative animate-fade-right">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=600&fit=crop"
                alt="Healthcare worker managing patient care"
                width={800}
                height={600}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#5ba3c4]/20 to-transparent rounded-3xl" />
            </div>
            {/* Stacked second image */}
            <div className="absolute -bottom-8 -right-8 w-56 h-40 rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden lg:block hover:shadow-3xl transition-shadow">
              <Image
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop"
                alt="Care team"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating metric */}
            <div className="absolute -top-6 -left-6 glass-card rounded-2xl p-5 shadow-xl hidden lg:block border border-white/60">
              <p className="text-xs text-slate-600 font-semibold tracking-wide">Time Saved</p>
              <p className="text-3xl font-bold text-slate-900 mt-1">10×</p>
              <p className="text-xs text-[#5ba3c4] font-semibold mt-2">↑ Faster workflows</p>
            </div>
          </div>
        </div>
      </Section>

      {/* VIDEO SHOWCASE SECTION */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#5ba3c4]/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#d16ba0]/10 blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm text-white/80 mb-6 hover:bg-white/15 transition-colors">
              <svg className="w-4 h-4 text-[#5ba3c4]" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              Platform in Action
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              See How <span className="gradient-text">SympliCare AI</span> Works
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto text-lg font-light leading-relaxed">
              Watch how care homes are transforming their daily operations with our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Video / Demo placeholder */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 aspect-video bg-gradient-to-br from-slate-700 to-slate-900 group hover:shadow-3xl transition-all duration-300 animate-fade-left">
              <Image
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=700&fit=crop"
                alt="SympliCare AI Platform Demo"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#5ba3c4]/30 to-[#5b5bde]/30" />
              {/* Play button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-md border-2 border-white/50 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 cursor-pointer group shadow-2xl group-hover:scale-110">
                  <svg className="w-10 h-10 text-white ml-1.5 group-hover:scale-125 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <div className="text-center">
                  <div className="bg-black/50 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4">
                    <p className="text-white font-semibold text-base">Full Platform Demo</p>
                    <p className="text-white/70 text-sm mt-1">Coming Soon — Join Early Access</p>
                  </div>
                </div>
              </div>
              {/* Top badge */}
              <div className="absolute top-6 left-6 bg-red-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                LIVE SOON
              </div>
            </div>

            {/* Video feature list */}
            <div className="space-y-6 animate-fade-right">
              {[
                { icon: '📋', title: 'Smart Documentation', desc: 'Auto-populated care records that save hours of manual entry every shift.', color: 'from-[#5ba3c4] to-[#4a8bad]' },
                { icon: '📊', title: 'Live Dashboards', desc: 'Real-time visibility into care activities, compliance, and team performance.', color: 'from-[#5b5bde] to-[#3d3d9f]' },
                { icon: '🔔', title: 'Instant Alerts', desc: 'Critical notifications delivered immediately — no more missed incidents.', color: 'from-[#d16ba0] to-[#b14d80]' },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-xl flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW IT WORKS */}
      <Section
        id="how-it-works"
        heading="How It Works"
        subheading="Four simple steps from chaos to clarity"
        className="text-center"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { number: '01', title: 'Staff Record Information', desc: 'In a structured way that takes just minutes', icon: '📝', color: 'from-[#5ba3c4] to-[#4a8bad]' },
            { number: '02', title: 'Information Organized', desc: 'All data stored in one accessible place', icon: '🗂️', color: 'from-[#5b5bde] to-[#3d3d9f]' },
            { number: '03', title: 'Managers Gain Visibility', desc: 'Dashboard and clear operational reporting', icon: '📊', color: 'from-[#d16ba0] to-[#b14d80]' },
            { number: '04', title: 'Better Preparedness', desc: 'Teams ready for regulatory requirements', icon: '✅', color: 'from-[#7c3aed] to-[#6d28d9]' },
          ].map((step, i) => (
            <div key={i} className="relative group animate-scale-in" style={{ animationDelay: `${i * 100}ms` }}>
              {i < 3 && <div className="hidden md:block absolute top-8 -right-3 w-6 h-0.5 bg-gradient-to-r from-slate-300 to-slate-100 z-10" />}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center h-full hover:shadow-lg hover:-translate-y-2 transition-all duration-300 hover:border-[#5ba3c4]/50">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${step.color} text-white rounded-2xl text-3xl mb-5 shadow-md group-hover:scale-110 transition-transform`}>
                  {step.icon}
                </div>
                <div className="text-xs font-bold text-slate-500 mb-2 tracking-widest uppercase">{step.number}</div>
                <h3 className="text-base font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* SECTION 5: BUILT WITH INDUSTRY INPUT + IMAGE GALLERY */}
      <section className="py-24 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-left">
              <div className="inline-flex items-center gap-2 bg-[#ddf2ff] text-[#5ba3c4] text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-wide">
                Industry-Led
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Built With Real<br />
                <span className="gradient-text">Industry Input</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-10 font-light">
                We are working closely with care home professionals, operational leader, and compliance-focused advisors to ensure the platform reflects real-world needs — not assumptions
              </p>
              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: 'Deep', label: 'Care Team Discovery', color: 'text-[#5ba3c4]' },
                  { value: 'Ongoing', label: 'User-Led Research', color: 'text-[#5b5bde]' },
                  { value: 'UK', label: 'Care Home Focus', color: 'text-[#d16ba0]' },
                ].map((s, i) => (
                  <div key={i} className="relative bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                    <p className={`text-3xl font-bold ${s.color} mb-2`}>{s.value}</p>
                    <p className="text-xs text-slate-600 font-semibold leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image grid */}
            <div className="grid grid-cols-2 gap-5 animate-fade-right">
              <div className="space-y-5">
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3] hover:shadow-xl transition-shadow">
                  <Image src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=500&h=400&fit=crop" alt="Professional consultation" width={500} height={400} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-square hover:shadow-xl transition-shadow">
                  <Image src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop" alt="Care home team" width={400} height={400} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <div className="space-y-5 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-square hover:shadow-xl transition-shadow">
                  <Image src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=400&fit=crop" alt="Healthcare collaboration" width={400} height={400} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3] hover:shadow-xl transition-shadow">
                  <Image src="https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=500&h=400&fit=crop" alt="Care operations" width={500} height={400} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: OUR APPROACH */}
      <Section
        id="approach"
        heading="Our Approach"
        subheading="Focused on simplicity, trust and practical use in every care setting"
        className="text-center"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              gradient: 'from-[#77bdda] to-[#5a9bb3]',
              bg: 'bg-[#f0f9fc]',
              icon: '🎯',
              title: 'Easy to Use',
              desc: 'Designed for busy care teams. Minimal training required. Maximum clarity for daily operations.',
              tags: ['Simple UI', 'Quick Learn'],
            },
            {
              gradient: 'from-[#6366f1] to-[#4338ca]',
              bg: 'bg-[#eef2ff]',
              icon: '🔄',
              title: 'Supports Existing Workflows',
              desc: 'Integrates alongside your current processes without disrupting established care routines.',
              tags: ['Flexible', 'Non-Disruptive'],
            },
            {
              gradient: 'from-[#ca86bc] to-[#aa60a0]',
              bg: 'bg-[#f5e6f3]',
              icon: '⚡',
              title: 'Reduces Complexity',
              desc: 'Simplifies care operations without adding unnecessary features or bloated dashboards.',
              tags: ['Streamlined', 'Focused'],
            },
          ].map((item, i) => (
            <div key={i} className={`group relative ${item.bg} rounded-2xl p-7 border border-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col items-center`}>
              {/* Gradient accent line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} rounded-t-2xl`} />
              <div className="text-4xl mb-5">{item.icon}</div>
              <h3 className="text-base font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">{item.desc}</p>
              <div className="flex gap-2 flex-wrap justify-center">
                {item.tags.map((tag, j) => (
                  <span key={j} className={`bg-gradient-to-r ${item.gradient} text-white text-xs px-2.5 py-1 rounded-full font-medium`}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* SECTION 7: CAREERS */}
      <Section
        id="careers"
        heading="Join Our Team"
        subheading="Help us build a platform that genuinely improves care home operations across the UK."
        className="bg-gradient-to-br from-[#f8fafc] to-[#f0f9fc] text-center"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-slate-950 mb-4 flex items-center justify-center gap-2">
                <span className="text-2xl">🌟</span> Why Join Us?
              </h3>
              <ul className="space-y-3">
                {[
                  { icon: '💙', text: 'Work on a product that directly impacts real lives' },
                  { icon: '🤝', text: 'Collaborate with industry experts and care professionals' },
                  { icon: '🏡', text: 'Flexible, remote-first workplace culture' },
                  { icon: '📈', text: 'Continuous learning and professional growth' },
                ].map((item, i) => (
                  <li key={i} className="flex items-center justify-center gap-3">
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-slate-600 text-sm">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-slate-950 mb-4 flex items-center justify-center gap-2">
                <span className="text-2xl">🚀</span> Open Positions
              </h3>
              <ul className="space-y-3 mb-6 max-w-sm mx-auto">
                {[
                  { role: 'Full Stack Developer', type: 'Remote', color: 'bg-[#e0f5fb] text-[#77bdda]' },
                  { role: 'UX/UI Designer', type: 'Remote', color: 'bg-[#eef2ff] text-[#6366f1]' },
                  { role: 'Operations Lead', type: 'Hybrid', color: 'bg-[#f5e6f3] text-[#ca86bc]' },
                  { role: 'QA Engineer', type: 'Remote', color: 'bg-[#f5f3ff] text-[#8b5cf6]' },
                ].map((item, i) => (
                  <li key={i} className="flex items-center justify-center gap-3 flex-wrap">
                    <span className="text-slate-700 text-sm font-medium">{item.role}</span>
                    <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${item.color}`}>{item.type}</span>
                  </li>
                ))}
              </ul>
              <Link href="/careers"
                className="inline-flex items-center gap-2 btn-gradient text-white px-6 py-2.5 rounded-xl font-semibold text-sm shadow-lg">
                View All Positions →
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 8: FINAL CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0c2340]" />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-[#77bdda]/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#ca86bc]/15 blur-3xl pointer-events-none" />
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm text-white/80 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            Limited Early Access Available
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Ready to Transform<br/>
            <span className="gradient-text">Your Care Operations?</span>
          </h2>
          <p className="text-lg text-slate-300 mb-10 leading-relaxed">
            Join care homes already benefiting from SympliCare AI. Get early access and shape the future of care home operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gradient text-white px-8 py-4 rounded-xl font-semibold shadow-xl text-base">
              Join Early Access →
            </Link>
            <Link href="/contact" className="bg-white/10 backdrop-blur-sm border border-white/25 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all text-base">
              Schedule a Demo
            </Link>
          </div>

          {/* Social proof */}
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            {[
              { icon: '🏥', label: '500+ Care Homes' },
              { icon: '⭐', label: 'Industry Verified' },
              { icon: '🔒', label: 'GDPR Compliant' },
              { icon: '🇬🇧', label: 'UK Based Team' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-white/60">
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
