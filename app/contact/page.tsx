'use client';

import Section from '../components/Section';
import Link from 'next/link';
import Image from 'next/image';
import { FormEvent, useMemo, useState } from 'react';
import {
  FormErrors,
  ContactFormValues,
  initialValues,
  sanitizeContactForm,
  validateContactForm,
} from './contactValidation';

export default function Contact() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const messageLength = useMemo(() => values.message.trim().length, [values.message]);

  const updateField = <K extends keyof ContactFormValues>(field: K, value: ContactFormValues[K]) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    if (submitError) setSubmitError(null);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
    const sanitizedValues = sanitizeContactForm(values);
    const validationErrors = validateContactForm(sanitizedValues);
    setIsLoading(false);

    if (Object.keys(validationErrors).length > 0) {
      setSubmitted(false);
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitError(null);

    const subject = `Website Inquiry: ${sanitizedValues.interest}`;
    const body = [
      `Name: ${sanitizedValues.firstName} ${sanitizedValues.lastName}`,
      `Work Email: ${sanitizedValues.workEmail}`,
      `Company: ${sanitizedValues.company}`,
      `Role: ${sanitizedValues.role}`,
      `Interest: ${sanitizedValues.interest}`,
      '',
      'Message:',
      sanitizedValues.message,
    ].join('\n');

    const mailtoHref = `mailto:hello@symplicare.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    try {
      window.location.href = mailtoHref;
      setSubmitted(true);
      setValues(initialValues);
    } catch {
      setSubmitted(false);
      setSubmitError('Could not open your mail app. Please email hello@symplicare.ai directly.');
    }
    }, 600);
  };

  return (
    <div className="w-full bg-gradient-to-b from-[#f8fcfe] via-white to-[#f7f9ff]">

      <Section id="contact-methods" className="pt-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3 rounded-3xl bg-white border border-[#c8e7f0] shadow-md p-6 md:p-8 animate-scale-in relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#77bdda] via-[#6366f1] to-[#ca86bc]" />
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-950">Contact Form</h2>
              <p className="mt-2 text-slate-600">
                Share a few details and we’ll connect you with the right member of our team.
              </p>
            </div>

            {submitted && (
              <div
                role="status"
                className="mb-6 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-800 text-sm"
              >
                ✓ Email draft ready! Click send in your mail app to submit.
              </div>
            )}

            {submitError && (
              <div
                role="alert"
                className="mb-6 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-rose-700 text-sm"
              >
                ⚠ {submitError}
              </div>
            )}

            <form onSubmit={onSubmit} className="space-y-5" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-800 mb-1.5">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    value={values.firstName}
                    onChange={(event) => updateField('firstName', event.target.value)}
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-slate-900 outline-none focus:ring-2 focus:ring-[#77bdda]/50 focus:border-[#77bdda] transition-colors"
                    aria-invalid={Boolean(errors.firstName)}
                    aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                    autoComplete="given-name"
                  />
                  {errors.firstName && (
                    <p id="firstName-error" className="mt-1.5 text-sm text-rose-600">{errors.firstName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-800 mb-1.5">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    value={values.lastName}
                    onChange={(event) => updateField('lastName', event.target.value)}
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-slate-900 outline-none focus:ring-2 focus:ring-[#77bdda]/50 focus:border-[#77bdda] transition-colors"
                    aria-invalid={Boolean(errors.lastName)}
                    aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                    autoComplete="family-name"
                  />
                  {errors.lastName && (
                    <p id="lastName-error" className="mt-1.5 text-sm text-rose-600">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="workEmail" className="block text-sm font-medium text-slate-800 mb-1.5">
                    Work Email
                  </label>
                  <input
                    id="workEmail"
                    type="email"
                    value={values.workEmail}
                    onChange={(event) => updateField('workEmail', event.target.value)}
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-slate-900 outline-none focus:ring-2 focus:ring-[#77bdda]/50 focus:border-[#77bdda] transition-colors"
                    aria-invalid={Boolean(errors.workEmail)}
                    aria-describedby={errors.workEmail ? 'workEmail-error' : undefined}
                    autoComplete="email"
                  />
                  {errors.workEmail && (
                    <p id="workEmail-error" className="mt-1.5 text-sm text-rose-600">{errors.workEmail}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-800 mb-1.5">
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    value={values.company}
                    onChange={(event) => updateField('company', event.target.value)}
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-slate-900 outline-none focus:ring-2 focus:ring-[#77bdda]/50 focus:border-[#77bdda] transition-colors"
                    aria-invalid={Boolean(errors.company)}
                    aria-describedby={errors.company ? 'company-error' : undefined}
                    autoComplete="organization"
                  />
                  {errors.company && (
                    <p id="company-error" className="mt-1.5 text-sm text-rose-600">{errors.company}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-slate-800 mb-1.5">
                    Role
                  </label>
                  <input
                    id="role"
                    type="text"
                    value={values.role}
                    onChange={(event) => updateField('role', event.target.value)}
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-slate-900 outline-none focus:ring-2 focus:ring-[#77bdda]/50 focus:border-[#77bdda] transition-colors"
                    aria-invalid={Boolean(errors.role)}
                    aria-describedby={errors.role ? 'role-error' : undefined}
                    autoComplete="organization-title"
                  />
                  {errors.role && (
                    <p id="role-error" className="mt-1.5 text-sm text-rose-600">{errors.role}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-slate-800 mb-1.5">
                    I’m Interested In
                  </label>
                  <select
                    id="interest"
                    value={values.interest}
                    onChange={(event) => updateField('interest', event.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 outline-none focus:ring-2 focus:ring-[#77bdda]/50 focus:border-[#77bdda] transition-colors"
                    aria-invalid={Boolean(errors.interest)}
                    aria-describedby={errors.interest ? 'interest-error' : undefined}
                  >
                    <option value="">Select an option</option>
                    <option value="Product Demo">Product Demo</option>
                    <option value="Operational Consultation">Operational Consultation</option>
                    <option value="Partnership Opportunity">Partnership Opportunity</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                  {errors.interest && (
                    <p id="interest-error" className="mt-1.5 text-sm text-rose-600">{errors.interest}</p>
                  )}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-800">
                    Message
                  </label>
                  <span className="text-xs text-slate-500">{messageLength}/600</span>
                </div>
                <textarea
                  id="message"
                  rows={5}
                  maxLength={600}
                  value={values.message}
                  onChange={(event) => updateField('message', event.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-slate-900 outline-none focus:ring-2 focus:ring-[#77bdda]/50 focus:border-[#77bdda] transition-colors resize-y"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  placeholder="Tell us about your current workflow, pain points, and target outcomes."
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-sm text-rose-600">{errors.message}</p>
                )}
              </div>

              <div>
                <label className="inline-flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={values.consent}
                    onChange={(event) => updateField('consent', event.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-[#77bdda] focus:ring-[#77bdda]"
                    aria-invalid={Boolean(errors.consent)}
                    aria-describedby={errors.consent ? 'consent-error' : undefined}
                  />
                  <span className="text-sm text-slate-600">
                    I agree to be contacted about my inquiry and understand my information will be handled according to your privacy policy.
                  </span>
                </label>
                {errors.consent && (
                  <p id="consent-error" className="mt-1.5 text-sm text-rose-600">{errors.consent}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="btn-gradient inline-flex items-center justify-center rounded-xl px-6 py-3 text-white font-semibold shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#77bdda] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Preparing Email...' : 'Send Message'}
              </button>
            </form>
          </div>

          <aside className="lg:col-span-2 space-y-5 animate-fade-right">
            <div className="relative h-44 rounded-2xl overflow-hidden border border-[#c8e7f0] shadow-md">
              <Image
                src="/uk2.jpg"
                alt="UK care operations landscape"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/55 to-transparent" />
              <div className="absolute inset-y-0 left-4 flex flex-col justify-center">
                <p className="text-white text-sm font-semibold">Care teams first</p>
                <p className="text-white/90 text-xs mt-1">Practical support from first contact</p>
              </div>
            </div>

            <div className="rounded-2xl border border-[#c8e7f0] bg-white p-6 shadow-md">
              <h3 className="text-lg font-semibold text-slate-950 mb-3">Ways to Connect</h3>
              <div className="space-y-4">
                <div className="rounded-xl border border-slate-200 p-4 bg-gradient-to-r from-[#f0f9fc] to-white">
                  <p className="text-sm font-semibold text-slate-950 mb-1">Email</p>
                  <p className="text-sm text-slate-600 mb-2">Direct contact for inquiries</p>
                  <a
                    href="mailto:hello@symplicare.ai"
                    className="text-[#77bdda] font-medium hover:text-[#5a9bb3] transition-colors"
                  >
                    hello@symplicare.ai
                  </a>
                </div>

                <div className="rounded-xl border border-slate-200 p-4 bg-gradient-to-r from-[#eef2ff] to-white">
                  <p className="text-sm font-semibold text-slate-950 mb-1">LinkedIn</p>
                  <p className="text-sm text-slate-600 mb-2">Follow our journey and connect</p>
                  <a
                    href="https://linkedin.com/company/symplicare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#77bdda] font-medium hover:text-[#5a9bb3] transition-colors"
                  >
                    Visit LinkedIn
                  </a>
                </div>

                <div className="rounded-xl border border-slate-200 p-4 bg-gradient-to-r from-[#f5e6f3] to-white">
                  <p className="text-sm font-semibold text-slate-950 mb-1">Schedule a Call</p>
                  <p className="text-sm text-slate-600 mb-2">Book a time to discuss in detail</p>
                  <a
                    href="https://calendly.com/symplicare-ai/new-meeting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#77bdda] font-medium hover:text-[#5a9bb3] transition-colors"
                  >
                    Book a Call
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#c8e7f0] bg-gradient-to-br from-[#f0f9fc] via-white to-[#f5e6f3] p-6">
              <h3 className="text-base font-semibold text-slate-950 mb-2">What happens next?</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>1. We review your goals and operating context.</li>
                <li>2. You receive a tailored follow-up from the right specialist.</li>
                <li>3. We align on a practical next step.</li>
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <Section id="location-map" className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-950 mb-2">Our Location</h2>
            <p className="text-slate-600">Visit us or connect with our team</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 rounded-3xl overflow-hidden border border-[#c8e7f0] shadow-md h-96 lg:h-full lg:min-h-[500px]">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                title="SympliCare Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.2876854157!2d-1.8851325!3d52.6368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a1a5e5e5e5e5d%3A0x5e5e5e5e5e5e5e5e!2sUK!5e0!3m2!1sen!2s!4v1640000000000"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            <aside className="space-y-6">
              <div className="bg-gradient-to-br from-[#f0f9fc] via-white to-[#f5e6f3] rounded-2xl border border-[#c8e7f0] p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-950 mb-4">Visit Us</h3>
                <div className="space-y-4 text-sm text-slate-700">
                  <div>
                    <p className="font-semibold text-slate-950 mb-1">Headquarters</p>
                    <p>United Kingdom</p>
                    <p className="text-slate-600">Supporting care teams across the UK</p>
                  </div>
                  <div className="border-t border-[#c8e7f0] pt-4">
                    <p className="font-semibold text-slate-950 mb-1">Availability</p>
                    <p>Monday to Friday</p>
                    <p className="text-slate-600">9:00 AM - 5:00 PM GMT</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-[#c8e7f0] p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-950 mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <a
                    href="mailto:hello@symplicare.ai"
                    className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-[#f0f9fc] to-white hover:shadow-md transition-shadow"
                  >
                    <span className="text-[#77bdda] text-lg">📧</span>
                    <div>
                      <p className="text-xs font-semibold text-slate-600">Email</p>
                      <p className="text-sm font-medium text-slate-950">hello@symplicare.ai</p>
                    </div>
                  </a>
                  <a
                    href="https://linkedin.com/company/symplicare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-[#eef2ff] to-white hover:shadow-md transition-shadow"
                  >
                    <span className="text-[#6366f1] text-lg">🔗</span>
                    <div>
                      <p className="text-xs font-semibold text-slate-600">LinkedIn</p>
                      <p className="text-sm font-medium text-slate-950">Follow us</p>
                    </div>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </Section>

      <Section
        id="final-cta"
        className="bg-[#77bdda] text-white text-center"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore SympliCare?</h2>
          <p className="text-[#e0f5fb] mb-8 text-lg">
            We’re building this with care professionals. Your input shapes our direction.
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-[#77bdda] px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </Section>
    </div>
  );
}
