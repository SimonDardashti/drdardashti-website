"use client";

import { useState } from "react";

const caseTypes = [
  "Personal Injury — Spine/Neck",
  "Personal Injury — Nerve/Neuropathic",
  "Workers' Compensation",
  "Medical Malpractice",
  "Disability Determination",
  "Auto Accident",
  "Other / Multiple",
];

const serviceTypes = [
  "Expert Witness Testimony",
  "Independent Medical Examination (IME/AME)",
  "Medical Record Review",
  "Unsure — need guidance",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Replace the action URL below with your Formspree endpoint or API route
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Submission failed. Please call (818) 730-7579 directly.");
      }
    } catch {
      alert("Submission failed. Please call (818) 730-7579 directly.");
    }
    setLoading(false);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Retain Dr. Dardashti
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Request a Free
            <br />
            <em className="not-italic text-[#c8a020]">15-Minute Case Review.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-xl leading-relaxed">
            Tell Dr. Dardashti the basics. He will respond within one business day to confirm
            whether he can help and what the next step is.
          </p>
        </div>
      </section>

      {/* Form + aside */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* Form */}
          <div className="md:col-span-8">
            {submitted ? (
              <div className="border border-[#c8a020] p-10 text-center">
                <p
                  className="text-2xl font-bold text-[#0a0a0a] mb-3"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Request Received.
                </p>
                <p className="text-[#555] text-sm leading-relaxed mb-6">
                  Dr. Dardashti's office will respond within one business day. For urgent
                  deadlines, call directly at{" "}
                  <a href="tel:+18187307579" className="text-[#c8a020] font-semibold">
                    (818) 730-7579
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-[#999] uppercase tracking-widest mb-2">
                      Your Name <span className="text-[#c8a020]">*</span>
                    </label>
                    <input
                      name="name"
                      required
                      type="text"
                      placeholder="Jane Smith"
                      className="w-full border border-[#e0e0e0] px-4 py-3 text-sm text-[#111] placeholder-[#bbb] focus:outline-none focus:border-[#c8a020] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#999] uppercase tracking-widest mb-2">
                      Law Firm <span className="text-[#c8a020]">*</span>
                    </label>
                    <input
                      name="law_firm"
                      required
                      type="text"
                      placeholder="Smith & Associates LLP"
                      className="w-full border border-[#e0e0e0] px-4 py-3 text-sm text-[#111] placeholder-[#bbb] focus:outline-none focus:border-[#c8a020] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-[#999] uppercase tracking-widest mb-2">
                      Email <span className="text-[#c8a020]">*</span>
                    </label>
                    <input
                      name="email"
                      required
                      type="email"
                      placeholder="jane@smithlaw.com"
                      className="w-full border border-[#e0e0e0] px-4 py-3 text-sm text-[#111] placeholder-[#bbb] focus:outline-none focus:border-[#c8a020] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#999] uppercase tracking-widest mb-2">
                      Phone
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="(555) 000-0000"
                      className="w-full border border-[#e0e0e0] px-4 py-3 text-sm text-[#111] placeholder-[#bbb] focus:outline-none focus:border-[#c8a020] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-[#999] uppercase tracking-widest mb-2">
                      Case Type <span className="text-[#c8a020]">*</span>
                    </label>
                    <select
                      name="case_type"
                      required
                      defaultValue=""
                      className="w-full border border-[#e0e0e0] px-4 py-3 text-sm text-[#111] focus:outline-none focus:border-[#c8a020] transition-colors bg-white"
                    >
                      <option value="" disabled>Select case type</option>
                      {caseTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#999] uppercase tracking-widest mb-2">
                      Service Needed <span className="text-[#c8a020]">*</span>
                    </label>
                    <select
                      name="service_type"
                      required
                      defaultValue=""
                      className="w-full border border-[#e0e0e0] px-4 py-3 text-sm text-[#111] focus:outline-none focus:border-[#c8a020] transition-colors bg-white"
                    >
                      <option value="" disabled>Select service</option>
                      {serviceTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-[#999] uppercase tracking-widest mb-2">
                      Party Retained By <span className="text-[#c8a020]">*</span>
                    </label>
                    <select
                      name="party"
                      required
                      defaultValue=""
                      className="w-full border border-[#e0e0e0] px-4 py-3 text-sm text-[#111] focus:outline-none focus:border-[#c8a020] transition-colors bg-white"
                    >
                      <option value="" disabled>Select party</option>
                      <option>Plaintiff / Claimant</option>
                      <option>Defense / Defendant</option>
                      <option>Insurance Carrier</option>
                      <option>Neutral / Court-Appointed</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#999] uppercase tracking-widest mb-2">
                      Jurisdiction
                    </label>
                    <input
                      name="jurisdiction"
                      type="text"
                      placeholder="e.g. Los Angeles Superior Court"
                      className="w-full border border-[#e0e0e0] px-4 py-3 text-sm text-[#111] placeholder-[#bbb] focus:outline-none focus:border-[#c8a020] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#999] uppercase tracking-widest mb-2">
                    Deadline or Urgency
                  </label>
                  <input
                    name="deadline"
                    type="text"
                    placeholder="e.g. Trial set for Sept 15 · Depo in 3 weeks"
                    className="w-full border border-[#e0e0e0] px-4 py-3 text-sm text-[#111] placeholder-[#bbb] focus:outline-none focus:border-[#c8a020] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#999] uppercase tracking-widest mb-2">
                    Brief Case Description
                  </label>
                  <textarea
                    name="description"
                    rows={4}
                    placeholder="Briefly describe the nature of the injury, the key dispute, and what you need from an expert."
                    className="w-full border border-[#e0e0e0] px-4 py-3 text-sm text-[#111] placeholder-[#bbb] focus:outline-none focus:border-[#c8a020] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#c8a020] hover:bg-[#e0b830] disabled:opacity-60 text-black font-bold px-8 py-4 text-sm tracking-widest uppercase transition-colors duration-200"
                >
                  {loading ? "Sending…" : "Submit Case Review Request"}
                </button>
                <p className="text-xs text-[#aaa] text-center">
                  All submissions are confidential. Dr. Dardashti's office will respond within
                  one business day.
                </p>
              </form>
            )}
          </div>

          {/* Aside */}
          <div className="md:col-span-4 space-y-6">
            <div className="border border-[#e5e5e0] p-6">
              <h3
                className="text-base font-bold text-[#0a0a0a] mb-4"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Prefer to call?
              </h3>
              <a
                href="tel:+18187307579"
                className="block text-2xl font-bold text-[#c8a020] hover:text-[#e0b830] transition-colors mb-1"
              >
                (818) 730-7579
              </a>
              <p className="text-xs text-[#999]">Direct line. Monday – Friday, 9am – 5pm PT.</p>
            </div>

            <div className="border border-[#e5e5e0] p-6">
              <h3
                className="text-base font-bold text-[#0a0a0a] mb-4"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Office Address
              </h3>
              <address className="text-sm text-[#666] not-italic leading-relaxed">
                14320 Ventura Blvd<br />
                Suite 827<br />
                Los Angeles, CA 91423
              </address>
            </div>

            <div className="bg-[#0a0a0a] p-6">
              <h3
                className="text-base font-bold text-white mb-4"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Why a 15-minute call works.
              </h3>
              <ul className="space-y-3 text-sm text-[#888]">
                {[
                  "No wasted time on non-qualifying cases",
                  "Instant conflict check",
                  "Direct answer on whether he can help",
                  "No commitment required",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#c8a020] mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-[#e5e5e0] p-6">
              <h3 className="text-xs font-semibold text-[#999] uppercase tracking-widest mb-4">
                Trust Signals
              </h3>
              <ul className="space-y-2 text-sm text-[#555]">
                {[
                  "60+ medicolegal matters",
                  "50% plaintiff · 50% defense",
                  "Dual ABMS board certification",
                  "UCLA fellowship-trained",
                  "Active California clinical practice",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
