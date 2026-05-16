'use client';

import Link from 'next/link';
import Section from '../../components/Section';
import { useParams } from 'next/navigation';

interface JobPosting {
  title: string;
  department: string;
  type: string;
  location: string;
  experience: string;
  salary: string;
  postedDate: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  benefits: string[];
  type_details: string;
}

// Job details data
const jobsData: Record<string, JobPosting> = {
  'full-stack-developer': {
    title: 'Full Stack Developer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote',
    experience: '3-5 years',
    salary: 'Competitive',
    postedDate: 'April 2026',
    overview:
      `We are looking for an experienced Full Stack Developer to join our engineering team. You will work on building scalable web applications that help care home professionals manage their operations more effectively. This is an opportunity to work with modern technologies and make a direct impact on improving care delivery.`,
    responsibilities: [
      'Build and maintain responsive web applications using React and Next.js',
      'Design and implement RESTful APIs and database schemas',
      'Collaborate with product managers and designers to translate requirements into code',
      'Write clean, maintainable code and contribute to code reviews',
      'Implement best practices for performance, accessibility, and security',
      'Troubleshoot and debug applications to improve user experience',
      'Participate in planning and estimation of features',
    ],
    requirements: [
      'Proficiency in React, JavaScript/TypeScript, and Node.js',
      'Experience with Next.js or similar modern frameworks',
      'Strong understanding of database design and SQL',
      'Experience with Git and collaborative development workflows',
      'Familiarity with cloud platforms (AWS, Google Cloud, or similar)',
      'Understanding of REST APIs and HTTP protocols',
      'Strong problem-solving and debugging skills',
    ],
    niceToHave: [
      'Experience with healthcare or regulated industries',
      'Knowledge of care home operations or healthcare workflows',
      'Experience with DevOps and containerization (Docker, Kubernetes)',
      'Familiarity with testing frameworks and CI/CD pipelines',
      'Open source contributions',
    ],
    benefits: [
      'Competitive salary and equity options',
      'Flexible remote work arrangement',
      '25 days of paid time off',
      'Professional development budget',
      'Health and wellness benefits',
      'Collaborative and supportive team culture',
      'Direct impact on healthcare operations',
    ],
    type_details:
      `This is a full-time permanent position with competitive salary negotiable based on experience. We offer equity for early team members.`,
  },
  'product-manager': {
    title: 'Product Manager',
    department: 'Product',
    type: 'Full-time',
    location: 'Remote',
    experience: '2-4 years',
    salary: 'Competitive',
    postedDate: 'April 2026',
    overview:
      `Join us as a Product Manager to shape the future of SympliCare. You will work directly with care home professionals and industry advisors to understand real-world challenges and translate them into product features that matter. This role is perfect for someone passionate about solving healthcare operational problems.`,
    responsibilities: [
      'Conduct user research and interviews with care home professionals',
      'Define product vision and roadmap based on user needs',
      'Work with engineering and design teams to deliver features',
      'Analyze data and metrics to inform product decisions',
      'Create and maintain product requirements documents',
      'Manage feature prioritization and release planning',
      'Gather and incorporate stakeholder feedback',
    ],
    requirements: [
      'Experience in product management or business analysis role',
      'Strong understanding of user-centered design principles',
      'Excellent communication and stakeholder management skills',
      'Data-driven decision making approach',
      'Experience with Agile/Scrum methodologies',
      'Ability to work with technical and non-technical teams',
      'Problem-solving mindset and strategic thinking',
    ],
    niceToHave: [
      'Background in healthcare or regulated industries',
      'Experience managing B2B SaaS products',
      'Knowledge of care home operations',
      'Experience with product analytics tools',
      'Familiarity with care technology landscape',
    ],
    benefits: [
      'Competitive salary and equity options',
      'Flexible remote work arrangement',
      '25 days of paid time off',
      'Professional development budget',
      'Health and wellness benefits',
      'Direct impact on healthcare innovation',
      'Access to care home partners and professionals',
    ],
    type_details:
      `This is a full-time permanent position. We seek a Product Manager with background in healthcare or B2B SaaS who is passionate about solving real operational problems.`,
  },
  'care-operations-consultant': {
    title: 'Care Operations Consultant',
    department: 'Operations',
    type: 'Full-time',
    location: 'Remote',
    experience: '5+ years',
    salary: 'Competitive',
    postedDate: 'April 2026',
    overview:
      `We're seeking an experienced Care Operations Consultant to bring your deep knowledge of care home practices to our product team. You will act as the voice of care professionals, ensuring our platform truly addresses real-world operational challenges. This is a unique opportunity to blend operational expertise with product development.`,
    responsibilities: [
      'Conduct assessments of care home workflows and pain points',
      'Collaborate with product and engineering teams on feature design',
      'Validate product assumptions against real-world operations',
      'Create documentation on care home best practices',
      'Conduct user testing sessions with care home professionals',
      'Provide training and support materials for users',
      'Monitor industry trends and regulatory requirements',
    ],
    requirements: [
      'Minimum 5 years of experience in care home operations',
      'Deep knowledge of UK care regulations and compliance requirements',
      'Understanding of care documentation and reporting processes',
      'Strong communication skills to bridge technical and operational teams',
      'Experience with process improvement and change management',
      'Ability to simplify complex processes',
      'Passion for improving care delivery',
    ],
    niceToHave: [
      'Experience with healthcare technology implementation',
      'Background in process consulting',
      'Knowledge of care home management systems',
      'Experience with regulatory compliance',
      'Project management certifications',
    ],
    benefits: [
      'Competitive salary reflecting your experience',
      'Equity options for long-term team members',
      'Flexible remote work with occasional in-person meetings',
      '25 days of paid time off',
      'Professional development budget',
      'Health and wellness benefits',
      'Direct influence on product strategy',
    ],
    type_details:
      `This is a full-time permanent position offering competitive compensation for experienced care professionals looking to transition into product and technology roles.`,
  },
  'ux-ui-designer': {
    title: 'UX/UI Designer',
    department: 'Design',
    type: 'Full-time',
    location: 'Remote',
    experience: '2-4 years',
    salary: 'Competitive',
    postedDate: 'April 2026',
    overview:
      `We are looking for a thoughtful UX/UI Designer to create intuitive interfaces for busy care teams. You will design experiences that simplify rather than complicate, working closely with healthcare professionals to ensure every pixel serves a purpose. Join us in making care operations less stressful through great design.`,
    responsibilities: [
      'Design user interfaces for web application using Figma',
      'Conduct user research and usability testing',
      'Create wireframes, prototypes, and design specifications',
      'Collaborate with product and engineering teams',
      'Develop and maintain design systems and component libraries',
      'Iterate on designs based on user feedback and analytics',
      'Ensure accessibility standards are met (WCAG)',
    ],
    requirements: [
      'Proven experience in UX/UI design (portfolio required)',
      'Proficiency in Figma or similar design tools',
      'Strong understanding of user-centered design principles',
      'Experience with web and mobile design',
      'Knowledge of accessibility best practices',
      'Excellent visual design and typography skills',
      'Communication and collaboration abilities',
    ],
    niceToHave: [
      'Experience designing for healthcare applications',
      'Knowledge of care home workflows and challenges',
      'Experience with design systems at scale',
      'Understanding of frontend technologies',
      'Experience with user testing tools',
    ],
    benefits: [
      'Competitive salary and equity options',
      'Flexible remote work arrangement',
      '25 days of paid time off',
      'Design tools and software provided',
      'Professional development budget',
      'Health and wellness benefits',
      'Collaborative creative environment',
    ],
    type_details:
      `This is a full-time permanent position. We seek a designer passionate about simplifying complex interfaces and making healthcare technology accessible to all users.`,
  },
};

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 py-3 border-b border-slate-200 last:border-b-0">
      <span className="text-sm font-medium text-slate-500">{label}</span>
      <span className="text-sm font-semibold text-slate-900 text-right">{value}</span>
    </div>
  );
}

function ListBlock({
  title,
  items,
  marker = 'dot',
}: {
  title: string;
  items: string[];
  marker?: 'dot' | 'check' | 'dash';
}) {
  const markerClass =
    marker === 'check'
      ? 'text-[#77bdda]'
      : marker === 'dash'
      ? 'text-slate-400'
      : 'text-[#77bdda]';

  const markerSymbol = marker === 'check' ? '✓' : marker === 'dash' ? '—' : '•';

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
      <h2 className="mb-5 text-xl md:text-2xl font-semibold text-slate-950">{title}</h2>
      <ul className="space-y-4">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <span className={`mt-0.5 text-sm font-semibold ${markerClass}`}>{markerSymbol}</span>
            <span className="text-sm md:text-[15px] leading-7 text-slate-700">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function JobDetail() {
  const params = useParams();
  const jobId = params.jobId as string;
  const job = jobsData[jobId];

  if (!job) {
    return (
      <div className="w-full">
        <Section className="pt-20 md:pt-24 pb-12 md:pb-16">
          <div className="mx-auto max-w-2xl text-center">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 md:p-10">
              <h1 className="mb-3 text-3xl font-bold text-slate-950">Job Not Found</h1>
              <p className="mb-8 text-slate-600">
                The position you’re looking for doesn’t exist.
              </p>
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 rounded-lg border border-[#77bdda] px-5 py-3 text-sm font-semibold text-[#77bdda] transition-colors hover:bg-[#f0f9fc]"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Careers
              </Link>
            </div>
          </div>
        </Section>
      </div>
    );
  }

  return (
    <div className="w-full bg-white">
      {/* Header */}
      <section className="border-b border-slate-200 bg-[#f0f9fc]">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <Link
            href="/careers"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-[#77bdda] transition-colors hover:text-[#5a9bb3]"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Careers
          </Link>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-end">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
                {job.department}
              </p>
              <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                {job.title}
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-700 md:text-lg">
                {job.overview}
              </p>
            </div>

            <div className="rounded-2xl border border-[#c8e7f0] bg-white p-5 shadow-sm">
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex rounded-full bg-[#77bdda]/10 px-3 py-1 text-xs font-semibold text-[#5a9bb3]">
                    {job.type}
                  </span>
                  <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                    {job.location}
                  </span>
                </div>
                <div className="border-t border-slate-200 pt-3">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    Experience
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">{job.experience}</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    Posted
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">{job.postedDate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <Section className="py-10 md:py-12">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-10">
          <div className="space-y-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
              <h2 className="mb-4 text-xl md:text-2xl font-semibold text-slate-950">
                About This Role
              </h2>
              <p className="text-sm md:text-[15px] leading-7 text-slate-700">{job.overview}</p>
            </section>

            <ListBlock title="Responsibilities" items={job.responsibilities} marker="dot" />
            <ListBlock
              title="Required Skills & Experience"
              items={job.requirements}
              marker="check"
            />
            <ListBlock title="Nice to Have" items={job.niceToHave} marker="dash" />
          </div>

          <aside className="lg:sticky lg:top-24 h-fit space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="mb-4 text-lg font-semibold text-slate-950">Position Details</h3>
              <div>
                <DetailRow label="Department" value={job.department} />
                <DetailRow label="Employment Type" value={job.type} />
                <DetailRow label="Location" value={job.location} />
                <DetailRow label="Experience" value={job.experience} />
                <DetailRow label="Salary" value={job.salary} />
                <DetailRow label="Posted" value={job.postedDate} />
              </div>
              <div className="mt-5 rounded-xl bg-slate-50 p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Role Summary
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700">{job.type_details}</p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-[#f0f9fc] p-6">
              <h3 className="mb-4 text-lg font-semibold text-slate-950">Benefits</h3>
              <ul className="space-y-3">
                {job.benefits.map((benefit: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-0.5 text-sm font-semibold text-[#77bdda]">✓</span>
                    <span className="text-sm leading-7 text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <Link
                href="/contact#contact-methods"
                className="block w-full rounded-lg bg-[#77bdda] px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#5a9bb3]"
              >
                Apply Now
              </Link>
              <p className="mt-3 text-center text-xs leading-5 text-slate-500">
                Ready to join? Complete the application form to get started.
              </p>
            </div>
          </aside>
        </div>
      </Section>

      {/* Other Positions */}
      <Section
        id="other-positions"
        className="border-t border-slate-200 bg-[#f8fbfc] py-10 md:py-12"
        heading="Other Open Positions"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2">
          {Object.entries(jobsData as Record<string, JobPosting>)
            .filter(([id]) => id !== jobId)
            .map(([id, otherJob]) => (
              <Link key={id} href={`/careers/${id}`} className="group block">
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-[#77bdda] hover:shadow-sm">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="inline-flex rounded-full bg-[#77bdda]/10 px-3 py-1 text-xs font-semibold text-[#5a9bb3]">
                      {otherJob.type}
                    </span>
                    <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      {otherJob.location}
                    </span>
                  </div>
                  <h3 className="mb-1 text-lg font-semibold text-slate-950">{otherJob.title}</h3>
                  <p className="text-sm text-slate-600">{otherJob.department}</p>
                </div>
              </Link>
            ))}
        </div>
      </Section>

      {/* Footer CTA */}
      <Section className="py-12 md:py-14 text-center">
        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 md:p-10">
          <h2 className="mb-4 text-3xl font-bold text-slate-950">Have Questions?</h2>
          <p className="mx-auto mb-6 max-w-2xl text-slate-600 leading-7">
            Feel free to reach out to us at hello@symplicare.ai or explore our careers page for
            more information about the team and current openings.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#77bdda] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#5a9bb3]"
            >
              Contact Us
            </Link>
            <Link
              href="/careers"
              className="inline-flex items-center justify-center rounded-lg border border-[#77bdda] px-8 py-3 text-sm font-semibold text-[#77bdda] transition-colors hover:bg-[#f0f9fc]"
            >
              View All Positions
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}