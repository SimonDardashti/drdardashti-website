import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Simon Dardashti MD | Pain Management Expert Witness | Los Angeles",
  description:
    "Board-certified pain medicine physician and anesthesiologist retained in 60+ medicolegal matters. Expert witness testimony, IME, and medical record review. Balanced plaintiff and defense. UCLA fellowship-trained. Los Angeles, CA.",
  alternates: { canonical: "https://www.painmanagementmedicalexpert.com" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of pain management cases does Dr. Dardashti take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dr. Dardashti accepts cases involving spine-related injuries (cervical, thoracic, lumbar), nerve and neuropathic pain, complex regional pain syndrome (CRPS), failed back surgery syndrome, sacroiliac joint dysfunction, soft-tissue injuries, and post-surgical pain. He reviews both acute traumatic pain cases and chronic pain management disputes.",
      },
    },
    {
      "@type": "Question",
      name: "Does Dr. Dardashti testify for both plaintiff and defense?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Dr. Dardashti maintains a balanced practice, with approximately 50% plaintiff and 50% defense retention. This balance reinforces his credibility and neutrality on cross-examination.",
      },
    },
    {
      "@type": "Question",
      name: "What jurisdictions has Dr. Dardashti been qualified as an expert?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dr. Dardashti has been retained and qualified as an expert in California state and federal courts, as well as administrative proceedings including workers' compensation panels. He is available for cases throughout California.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can Dr. Dardashti review records and provide a written opinion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard turnaround for a written report is 2 to 4 weeks from receipt of complete records. Rush review is available upon request and subject to scheduling. Contact his office at (818) 730-7579 to discuss your case deadline.",
      },
    },
    {
      "@type": "Question",
      name: "Can Dr. Dardashti perform Independent Medical Examinations (IMEs) and AMEs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Dr. Dardashti conducts IMEs for defense counsel, AMEs in workers' compensation matters, and plaintiff medical evaluations for treating physicians. Examinations are performed at his Los Angeles office at 14320 Ventura Blvd, Suite 827.",
      },
    },
    {
      "@type": "Question",
      name: "What are Dr. Dardashti's board certifications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dr. Dardashti is double board-certified by the American Board of Medical Specialties (ABMS) in both Pain Medicine and Anesthesiology — a combination held by fewer than 5% of practicing physicians.",
      },
    },
    {
      "@type": "Question",
      name: "Is Dr. Dardashti currently in active clinical practice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Dr. Dardashti maintains an active clinical pain management practice in Los Angeles, which means his opinions reflect current, real-world clinical standards — not theoretical academic positions.",
      },
    },
    {
      "@type": "Question",
      name: "How do I retain Dr. Dardashti for my case?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The fastest path is a 15-minute case review call at (818) 730-7579, or by completing the intake form at painmanagementmedicalexpert.com/contact. Please provide the case type, party you represent, jurisdiction, and any applicable deadline.",
      },
    },
  ],
};

const stats = [
  { value: "60+", label: "Medicolegal Matters" },
  { value: "2×", label: "ABMS Board Certified" },
  { value: "50/50", label: "Plaintiff · Defense" },
  { value: "UCLA", label: "Fellowship Trained" },
];

const services = [
  {
    num: "01",
    title: "Expert Witness Testimony",
    body: "Deposition and trial testimony in spine, nerve, and pain management cases. Opinions are defensible, well-documented, and grounded in current clinical standards.",
    href: "/services#expert-witness",
  },
  {
    num: "02",
    title: "Independent Medical Examinations",
    body: "IME and AME services for workers' compensation, personal injury, and disability matters. Reports delivered within agreed timelines.",
    href: "/services#ime",
  },
  {
    num: "03",
    title: "Medical Record Review",
    body: "Detailed review and analysis of treatment records, imaging, operative notes, and billing. Identifies gaps, inconsistencies, and causation issues.",
    href: "/services#records",
  },
];

const faqs = faqSchema.mainEntity;

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO */}
      <section className="bg-[#0a0a0a] text-white min-h-[90vh] flex flex-col justify-center px-6 py-24 relative overflow-hidden">
        {/* large decorative number */}
        <span
          className="absolute right-0 top-1/2 -translate-y-1/2 text-[20rem] font-bold leading-none text-[#111] select-none pointer-events-none hidden lg:block"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          aria-hidden
        >
          MD
        </span>

        <div className="max-w-5xl mx-auto w-full relative z-10">
          <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-6">
            Pain Medicine · Anesthesiology · Expert Witness
          </p>
          <h1
            className="text-5xl md:text-7xl font-bold leading-[1.05] mb-8 max-w-3xl"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            The Expert
            <br />
            <em className="not-italic text-[#c8a020]">Los Angeles Attorneys</em>
            <br />
            Retain.
          </h1>
          <p className="text-[#888] text-lg md:text-xl max-w-xl leading-relaxed mb-10">
            Simon Dardashti, MD, MS — dual board-certified in Pain Medicine and Anesthesiology.
            Retained in 60+ medicolegal matters. Balanced plaintiff and defense.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-block bg-[#c8a020] hover:bg-[#e0b830] text-black font-bold px-8 py-4 text-sm tracking-widest uppercase transition-colors duration-200"
            >
              Request a Free 15-Min Case Review
            </Link>
            <a
              href="tel:+18187307579"
              className="inline-block border border-[#333] hover:border-[#c8a020] text-[#888] hover:text-[#c8a020] font-semibold px-8 py-4 text-sm tracking-widest uppercase transition-colors duration-200"
            >
              Call (818) 730-7579
            </a>
          </div>

          {/* Trust strip */}
          <div className="mt-16 pt-10 border-t border-[#1a1a1a] grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-[#1a1a1a]">
            {stats.map((s) => (
              <div key={s.label} className="md:px-8 first:pl-0">
                <p
                  className="text-3xl font-bold text-white mb-1"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {s.value}
                </p>
                <p className="text-xs text-[#555] uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 01 — POSITIONING */}
      <section className="bg-white py-24 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-2">
            <span
              className="text-7xl font-bold text-[#f0f0f0] leading-none block"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              aria-hidden
            >
              01
            </span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">The Expert</p>
          </div>
          <div className="md:col-span-10">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Credibility That Holds Up<br />on Cross-Examination.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#555] text-base leading-relaxed">
              <p>
                Dr. Dardashti holds dual ABMS board certification in both Pain Medicine and
                Anesthesiology — a credential held by fewer than 5% of practicing physicians. His
                opinions are grounded in an active clinical practice, not academic conjecture.
              </p>
              <p>
                A balanced retention history (50% plaintiff, 50% defense) and UCLA fellowship
                training give his testimony the professional neutrality that survives aggressive
                cross-examination and Daubert challenges in California state and federal courts.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "ABMS Board-Certified — Pain Medicine",
                "ABMS Board-Certified — Anesthesiology",
                "UCLA Fellowship",
                "UC Irvine Residency",
                "Active Clinical Practice",
                "60+ Medicolegal Cases",
              ].map((badge) => (
                <span
                  key={badge}
                  className="border border-[#e0e0e0] text-[#555] text-xs px-3 py-1.5 tracking-wide"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — SERVICES */}
      <section className="bg-[#f9f7f4] py-24 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16 items-start">
            <div className="md:col-span-2">
              <span
                className="text-7xl font-bold text-[#e8e6e3] leading-none block"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                aria-hidden
              >
                02
              </span>
              <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Services</p>
            </div>
            <div className="md:col-span-10">
              <h2
                className="text-3xl md:text-4xl font-bold text-[#0a0a0a] leading-tight"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Three Ways to Engage.
              </h2>
              <p className="text-[#777] mt-3 text-base">
                Structured to serve attorneys efficiently — from initial record review to trial testimony.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#e0e0d8]">
            {services.map((svc, i) => (
              <Link
                key={svc.num}
                href={svc.href}
                className={`group block p-8 bg-white hover:bg-[#0a0a0a] transition-colors duration-300 ${
                  i < services.length - 1 ? "border-b md:border-b-0 md:border-r border-[#e0e0d8]" : ""
                }`}
              >
                <p
                  className="text-5xl font-bold text-[#f0f0f0] group-hover:text-[#1a1a1a] leading-none mb-5 transition-colors duration-300"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  aria-hidden
                >
                  {svc.num}
                </p>
                <h3
                  className="text-lg font-bold text-[#0a0a0a] group-hover:text-white mb-3 transition-colors duration-300"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {svc.title}
                </h3>
                <p className="text-sm text-[#777] group-hover:text-[#aaa] leading-relaxed transition-colors duration-300">
                  {svc.body}
                </p>
                <span className="mt-6 inline-block text-xs text-[#c8a020] font-semibold uppercase tracking-widest group-hover:underline">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 03 — MID-PAGE CTA */}
      <section className="bg-[#0a0a0a] py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
              Schedule a Case Review
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              15 Minutes.
              <br />
              No Commitment.
              <br />
              <em className="not-italic text-[#c8a020]">Real Answers.</em>
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[#888] text-sm leading-relaxed">
              Tell Dr. Dardashti the case type, party you represent, and jurisdiction.
              You'll know within 15 minutes whether his opinion will help your case.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#c8a020] hover:bg-[#e0b830] text-black font-bold px-8 py-4 text-sm tracking-widest uppercase transition-colors duration-200 text-center"
            >
              Request a Free 15-Min Case Review
            </Link>
            <a
              href="tel:+18187307579"
              className="inline-block text-center border border-[#333] hover:border-[#555] text-[#777] hover:text-white font-semibold px-8 py-4 text-sm tracking-widest uppercase transition-colors duration-200"
            >
              Call (818) 730-7579 Directly
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 04 — FAQ */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16 items-start">
            <div className="md:col-span-2">
              <span
                className="text-7xl font-bold text-[#f0f0f0] leading-none block"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                aria-hidden
              >
                04
              </span>
              <p className="text-xs text-[#999] uppercase tracking-widest mt-2">FAQ</p>
            </div>
            <div className="md:col-span-10">
              <h2
                className="text-3xl md:text-4xl font-bold text-[#0a0a0a] leading-tight"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Questions Attorneys Ask.
              </h2>
            </div>
          </div>

          <div className="md:ml-[calc(2/12*100%+2.5rem)] divide-y divide-[#e5e5e0]">
            {faqs.map((faq, i) => (
              <details key={i} className="group py-5 cursor-pointer">
                <summary className="flex justify-between items-start gap-4 list-none">
                  <h3
                    className="font-semibold text-[#0a0a0a] text-base group-open:text-[#c8a020] transition-colors pr-4"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {faq.name}
                  </h3>
                  <span className="text-[#999] group-open:text-[#c8a020] text-xl leading-none shrink-0 mt-0.5 transition-colors">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-[#666] leading-relaxed max-w-2xl">
                  {faq.acceptedAnswer.text}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
