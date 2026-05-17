import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — Expert Witness, IME & Medical Record Review",
  description:
    "Dr. Dardashti provides expert witness testimony, independent medical examinations (IME/AME), and medical record review for pain management and spine cases throughout California.",
  alternates: { canonical: "https://www.painmanagementmedicalexpert.com/services" },
};

const services = [
  {
    id: "expert-witness",
    num: "01",
    title: "Expert Witness Testimony",
    tagline: "Opinions that hold up under fire.",
    description:
      "Dr. Dardashti provides written expert opinions and deposition and trial testimony in cases involving pain management, spine injuries, neuropathic conditions, and medication management. His active clinical practice ensures every opinion reflects current standard-of-care.",
    whatToExpect: [
      "Initial case screening call (15 minutes, no fee)",
      "Written retention agreement and fee schedule",
      "Complete record review with written report (2–4 week standard turnaround)",
      "Deposition preparation and testimony",
      "Trial testimony as needed",
      "Supplemental report upon receipt of new records",
    ],
    bestFor: [
      "Personal injury — spine and nerve damage",
      "Medical malpractice — pain management deviations",
      "Workers' compensation — causation and apportionment disputes",
      "Disability determinations",
      "Medication management disputes (opioids, interventional care)",
    ],
  },
  {
    id: "ime",
    num: "02",
    title: "Independent Medical Examinations",
    tagline: "Rigorous, defensible, on time.",
    description:
      "Dr. Dardashti conducts IMEs for defense counsel, AMEs in workers' compensation proceedings, and plaintiff medical evaluations. Examinations are performed at his Los Angeles office. Reports are detailed, well-organized, and delivered within agreed timelines.",
    whatToExpect: [
      "Scheduling confirmation within 48 hours",
      "Examination at 14320 Ventura Blvd, Suite 827, Los Angeles",
      "Comprehensive history and physical examination",
      "Review of all provided records, imaging, and prior reports",
      "Written IME report: standard 10–14 business days",
      "Supplemental reports available upon request",
    ],
    bestFor: [
      "Defense IME — personal injury and auto accidents",
      "AME — California workers' compensation",
      "Second opinion evaluations",
      "Functional capacity and work restriction opinions",
      "Future medical cost determinations",
    ],
  },
  {
    id: "records",
    num: "03",
    title: "Medical Record Review & Analysis",
    tagline: "Find what other experts miss.",
    description:
      "A thorough medical record review is often the fastest way to assess the strength of a pain management claim. Dr. Dardashti reviews treatment records, operative notes, imaging studies, prior expert reports, and billing records to identify causation issues, treatment gaps, deviations from standard care, or billing inconsistencies.",
    whatToExpect: [
      "Records received electronically (secure upload link provided)",
      "Comprehensive review of all supplied materials",
      "Written summary memorandum or full narrative report",
      "Identification of causation questions, inconsistencies, and gaps",
      "Verbal consultation available",
      "Supplemental review upon receipt of additional records",
    ],
    bestFor: [
      "Pre-litigation case assessment",
      "Identifying unsupported future medical claims",
      "Opioid prescribing appropriateness review",
      "Deposition preparation for treating physicians",
      "Rebuttal of opposing expert's opinions",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Services
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Three Ways
            <br />
            <em className="not-italic text-[#888]">to Engage.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-xl leading-relaxed">
            Expert witness testimony, independent medical examinations, and medical record
            review — structured to serve attorneys efficiently and defensibly.
          </p>
        </div>
      </section>

      {/* Services */}
      {services.map((svc, i) => (
        <section
          key={svc.id}
          id={svc.id}
          className={`py-20 px-6 border-b border-[#e5e5e0] ${i % 2 === 0 ? "bg-white" : "bg-[#f9f7f4]"}`}
        >
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-2">
              <span
                className={`text-7xl font-bold leading-none block ${i % 2 === 0 ? "text-[#f0f0f0]" : "text-[#e8e6e3]"}`}
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                aria-hidden
              >
                {svc.num}
              </span>
              <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Service</p>
            </div>

            <div className="md:col-span-10">
              <p className="text-[#c8a020] text-xs font-semibold uppercase tracking-widest mb-2">
                {svc.tagline}
              </p>
              <h2
                className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {svc.title}
              </h2>
              <p className="text-[#555] text-base leading-relaxed mb-10 max-w-2xl">
                {svc.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xs font-semibold text-[#999] uppercase tracking-widest mb-4">
                    What to Expect
                  </h3>
                  <ul className="space-y-3">
                    {svc.whatToExpect.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-[#555]">
                        <span className="text-[#c8a020] font-bold mt-0.5 shrink-0 text-xs">
                          {String(j + 1).padStart(2, "0")}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-[#999] uppercase tracking-widest mb-4">
                    Best For
                  </h3>
                  <ul className="space-y-3">
                    {svc.bestFor.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[#555]">
                        <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2
            className="text-2xl md:text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Not sure which service fits your case?
          </h2>
          <p className="text-[#666] text-sm mb-8 max-w-lg mx-auto">
            A 15-minute call is the fastest way to find out. Dr. Dardashti will tell you
            directly whether — and how — he can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#c8a020] hover:bg-[#e0b830] text-black font-bold px-8 py-4 text-xs tracking-widest uppercase transition-colors duration-200"
            >
              Request a Free Case Review
            </Link>
            <a
              href="tel:+18187307579"
              className="border border-[#333] hover:border-[#555] text-[#777] hover:text-white font-semibold px-8 py-4 text-xs tracking-widest uppercase transition-colors duration-200"
            >
              Call (818) 730-7579
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
