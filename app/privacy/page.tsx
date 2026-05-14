import Section from '../components/Section';

export default function PrivacyPage() {
  return (
    <div className="w-full bg-white dark:bg-slate-900">
      <Section className="pt-24 md:pt-28" heading="Privacy Policy" subheading="How SympliCare AI handles information responsibly and transparently.">
        <div className="max-w-3xl space-y-8 text-slate-700 dark:text-slate-300 leading-7">
          <section>
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white mb-3">Information We Collect</h2>
            <p>We collect contact details submitted through our website, such as name, email, and enquiry information, to respond to requests and support early-access conversations.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white mb-3">How We Use Information</h2>
            <p>We use submitted information to communicate with you, improve our services, and provide updates about SympliCare AI. We do not sell personal information.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white mb-3">Data Security</h2>
            <p>We apply reasonable technical and organisational measures to protect information from unauthorized access, disclosure, or misuse.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white mb-3">Your Rights</h2>
            <p>You can request access, correction, or deletion of your personal information by contacting us at hello@symplicare.ai.</p>
          </section>

          <p className="text-sm text-slate-500 dark:text-slate-400">Last updated: April 2026</p>
        </div>
      </Section>
    </div>
  );
}
