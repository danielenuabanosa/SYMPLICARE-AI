import Section from '../components/Section';

export default function TermsPage() {
  return (
    <div className="w-full bg-white">
      <Section className="pt-24 md:pt-28" heading="Terms of Service" subheading="Simple terms for using the SympliCare AI website.">
        <div className="max-w-3xl space-y-8 text-slate-700 leading-7">
          <section>
            <h2 className="text-xl font-semibold text-slate-950 mb-3">Website Use</h2>
            <p>By using this website, you agree to use it lawfully and respectfully. Content is provided for general informational purposes.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-950 mb-3">No Clinical Advice</h2>
            <p>SympliCare AI does not provide clinical advice and does not replace professional regulatory responsibilities.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-950 mb-3">Intellectual Property</h2>
            <p>All branding, visuals, and website content are owned by SympliCare AI unless otherwise stated and may not be reused without permission.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-950 mb-3">Contact</h2>
            <p>For terms-related enquiries, contact hello@symplicare.ai.</p>
          </section>

          <p className="text-sm text-slate-500">Last updated: April 2026</p>
        </div>
      </Section>
    </div>
  );
}
