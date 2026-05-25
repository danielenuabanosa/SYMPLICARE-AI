import Link from 'next/link';
import Section from '../components/Section';

export default function Careers() {
  const opportunities = [
    {
      id: 'full-stack-developer',
      title: 'Full Stack Developer',
      department: 'Engineering',
      type: 'Full-time',
      description: 'Build the next generation of care home operations software. Work with React, Next.js, and modern cloud infrastructure.',
    },
    {
      id: 'product-manager',
      title: 'Product Manager',
      department: 'Product',
      type: 'Full-time',
      description: 'Shape the future of our platform by working directly with care home professionals and industry advisors.',
    },
    {
      id: 'care-operations-consultant',
      title: 'Care Operations Consultant',
      department: 'Operations',
      type: 'Full-time',
      description: 'Bring your care home expertise to help us design features that truly solve real-world challenges.',
    },
    {
      id: 'ux-ui-designer',
      title: 'UX/UI Designer',
      department: 'Design',
      type: 'Full-time',
      description: 'Design intuitive interfaces for busy care teams. Create experiences that reduce complexity, not add to it.',
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-white via-[#f8fcfe] to-white">
      <section className="relative min-h-[500px] flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1a1f3a] to-[#0c2340] overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#77bdda]/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-[#ca86bc]/15 blur-3xl pointer-events-none" />
        <div className="relative z-10 text-center max-w-3xl px-6">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-2 text-sm text-white/90 mb-6 backdrop-blur-sm">
            🚀 Careers at SympliCare
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Join Our <span className="gradient-text">Mission</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            We’re building a team passionate about simplifying care home operations and supporting the professionals who do this critical work.
          </p>
        </div>
      </section>

      <Section
        id="why-join"
        heading="Why Join SympliCare?"
        className="bg-gradient-to-br from-[#f0f9fc] via-white to-[#f8fcfe] text-center"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl p-6 border border-[#c8e7f0] text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="inline-block bg-gradient-to-br from-[#77bdda] to-[#5a9bb3] text-white rounded-full p-4 mb-4">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
            <h3 className="text-base font-semibold text-slate-950 mb-2">Collaborative Culture</h3>
            <p className="text-slate-600 text-sm">Work with a team that values your input and thrives on solving real problems.</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-[#c8e7f0] text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="inline-block bg-gradient-to-br from-[#ca86bc] to-[#aa60a0] text-white rounded-full p-4 mb-4">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.38V4.804z" />
                <path d="M11 15.113v-9.31A7.969 7.969 0 0114.5 4c1.255 0 2.443.29 3.5.804v10A7.97 7.97 0 0014.5 14c-1.669 0-3.218.51-4.5 1.38z" />
              </svg>
            </div>
            <h3 className="text-base font-semibold text-slate-950 mb-2">Impact & Purpose</h3>
            <p className="text-slate-600 text-sm">Your work directly impacts care teams and the people they support every day.</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-[#c8e7f0] text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="inline-block bg-gradient-to-br from-[#77bdda] to-[#5a9bb3] text-white rounded-full p-4 mb-4">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </div>
            <h3 className="text-base font-semibold text-slate-950 mb-2">Flexibility</h3>
            <p className="text-slate-600 text-sm">We believe in remote work, flexible schedules, and trusting our team.</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-[#c8e7f0] text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="inline-block bg-gradient-to-br from-[#ca86bc] to-[#aa60a0] text-white rounded-full p-4 mb-4">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M7 9a2 2 0 100-4 2 2 0 000 4zm.464 7.997A6 6 0 0120 13V5a1 1 0 00-1-1H5a1 1 0 00-1 1v8a1 1 0 001 1h.464l-.536.997zM3 1a1 1 0 011 1v5.5a1.5 1.5 0 01-3 0V2a1 1 0 011-1z" />
              </svg>
            </div>
            <h3 className="text-base font-semibold text-slate-950 mb-2">Learning & Growth</h3>
            <p className="text-slate-600 text-sm">Continuous learning opportunities and support for professional development.</p>
          </div>
        </div>
      </Section>

      <Section
        id="opportunities"
        heading="Open Opportunities"
        subheading="We're looking for talented individuals to join our growing team."
        className="bg-gradient-to-br from-white via-[#f8fcfe] to-[#f0f9fc] text-center"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {opportunities.map((opp) => (
            <Link
              key={opp.id}
              href={`/careers/${opp.id}`}
            >
              <div className="bg-white border border-[#c8e7f0] rounded-xl p-6 hover:shadow-lg hover:border-[#77bdda] transition-all cursor-pointer h-full relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#77bdda] to-[#ca86bc] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                <div className="flex flex-col items-center gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-950">{opp.title}</h3>
                    <p className="text-sm text-slate-600">{opp.department}</p>
                  </div>
                  <span className="bg-[#77bdda]/10 text-[#77bdda] px-3 py-1 rounded-full text-xs font-semibold">
                    {opp.type}
                  </span>
                </div>
                <p className="text-slate-600 text-sm mb-4">{opp.description}</p>
                <div className="text-[#77bdda] font-medium inline-flex items-center justify-center gap-2 group">
                  View Details
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Our Values */}
      <Section
        id="values"
        heading="Our Values"
        className="bg-[#f0f9fc] text-center"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="text-lg font-semibold text-slate-950 mb-3 flex items-center justify-center gap-2">
              <span className="text-[#77bdda] text-xl">→</span> Simplicity
            </h3>
            <p className="text-slate-600">We believe complex problems don’t require complex solutions. We advocate for simplicity in everything we do.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-950 mb-3 flex items-center justify-center gap-2">
              <span className="text-[#ca86bc] text-xl">→</span> Empathy
            </h3>
            <p className="text-slate-600">We listen to care professionals and understand their challenges. Their success is our success.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-950 mb-3 flex items-center justify-center gap-2">
              <span className="text-[#77bdda] text-xl">→</span> Integrity
            </h3>
            <p className="text-slate-600">We operate with transparency and honesty. We do what we say we’ll do.</p>
          </div>
        </div>
      </Section>

      <Section
        id="apply"
        className="bg-gradient-to-br from-[#77bdda] via-[#6366f1] to-[#ca86bc] text-white"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make an Impact?
          </h2>
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            Don’t see a role that fits yet? We’re always interested in talented individuals who share our mission. Send us your details and we’ll get back to you about future opportunities.
          </p>
          <Link
            href="/contact#contact-methods"
            className="inline-block bg-white text-[#77bdda] px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
          >
            Submit Your Application
          </Link>
        </div>
      </Section>

      <Section className="text-center border-t border-slate-200">
        <Link
          href="/"
          className="text-[#77bdda] font-semibold hover:text-[#5a9bb3] transition-colors inline-flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
      </Section>
    </div>
  );
}
