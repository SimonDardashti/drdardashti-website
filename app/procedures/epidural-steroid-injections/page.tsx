import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const PAGE_URL = "https://www.drdardashti.com/procedures/epidural-steroid-injections";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Epidural Steroid Injections | Simon Dardashti, MD" },
  description:
    "Dr. Simon Dardashti evaluates selected patients for epidural steroid injections when radicular pain or suspected nerve root irritation is present following clinical evaluation.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Epidural Steroid Injections | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates selected patients for epidural steroid injections when radicular pain or suspected nerve root irritation is present following clinical evaluation.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Epidural Steroid Injections | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates selected patients for epidural steroid injections when radicular pain or suspected nerve root irritation is present following clinical evaluation.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Epidural Steroid Injections | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Dr. Simon Dardashti evaluates selected patients for epidural steroid injections when radicular pain or suspected nerve root irritation is present following clinical evaluation.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  about: { "@type": "MedicalProcedure", name: "Epidural Steroid Injection" },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Procedures & Treatment Options", item: `${SITE_URL}/procedures` },
      { "@type": "ListItem", position: 3, name: "Epidural Steroid Injections", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "Image-Guided Procedure",
    body: "Epidural steroid injections deliver anti-inflammatory medication near irritated spinal nerve roots under imaging guidance.",
  },
  {
    heading: "For Selected Patients",
    body: "They may be considered for patients with radicular pain or suspected nerve root irritation when appropriate clinical criteria are met.",
  },
  {
    heading: "Response Varies",
    body: "The procedure is not appropriate for every patient. Risks, benefits, and realistic expectations should be discussed before any procedure is performed.",
  },
];

export default function EpiduralSteroidInjectionsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      {/* HERO */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center gap-10 md:gap-16">
          <div className="flex-1">
            <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              Procedures &amp; Treatment Options
            </p>
            <h1
              className="text-4xl md:text-6xl font-bold leading-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Epidural Steroid
              <br />
              <em className="not-italic text-[#888]">Injections.</em>
            </h1>
            <p className="mt-5 text-[#666] text-lg leading-relaxed">
              Epidural steroid injections are image-guided procedures that may be considered for
              selected patients with radicular pain or suspected nerve root irritation. A formal
              clinical evaluation is required to determine whether this procedure is appropriate
              for an individual patient.
            </p>
          </div>
          <div className="hidden md:block w-[440px] shrink-0">
            <Image
              src="/images/procedures/epidural-steroid-injection-hero.webp"
              alt="Lumbar epidural steroid injection medical illustration."
              width={880}
              height={587}
              sizes="440px"
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* IN BRIEF */}
      <section className="bg-white py-16 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-[#999] uppercase tracking-widest mb-8">In Brief</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#e5e5e0]">
            {inBrief.map((item, i) => (
              <div
                key={item.heading}
                className={`p-6 ${i < inBrief.length - 1 ? "border-b md:border-b-0 md:border-r border-[#e5e5e0]" : ""}`}
              >
                <div className="w-5 h-px bg-[#c8a020] mb-4" />
                <h2
                  className="font-bold text-[#0a0a0a] text-sm mb-3"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {item.heading}
                </h2>
                <p className="text-sm text-[#666] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT ARE ESIs */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>01</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Overview</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              What Are Epidural Steroid Injections?
            </h2>
            <p>
              Epidural steroid injections (ESIs) are procedures that deliver corticosteroid
              medication into the epidural space — the area surrounding the spinal cord and nerve
              roots inside the spinal canal. The goal is to reduce inflammation around irritated or
              compressed nerve roots, which may help reduce associated pain, numbness, or tingling.
            </p>
            <p>
              The procedure is typically performed under fluoroscopic (X-ray) or other imaging
              guidance to confirm accurate needle placement. ESIs are not a structural treatment
              and do not repair underlying disc or spinal pathology.
            </p>
          </div>
        </div>
      </section>

      {/* APPROACHES */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>02</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Approaches</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Injection Approaches.
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              Different injection approaches may be used depending on the patient's anatomy,
              diagnosis, and clinical situation:
            </p>
            <div className="space-y-5 max-w-2xl">
              {[
                {
                  name: "Interlaminar Epidural",
                  desc: "Medication is delivered through the back of the spine into the epidural space, providing broader coverage of the epidural area.",
                },
                {
                  name: "Transforaminal Epidural",
                  desc: "Medication is delivered near a specific nerve root foramen, allowing more targeted treatment of a particular nerve level.",
                },
                {
                  name: "Caudal Epidural",
                  desc: "Medication is delivered through the sacral hiatus at the base of the spine and may be appropriate for certain lower lumbar or sacral symptoms.",
                },
                {
                  name: "Selective Nerve Root Block",
                  desc: "A more targeted injection near a specific nerve root, which may also serve a diagnostic purpose to help confirm the symptomatic nerve level.",
                },
              ].map((item) => (
                <div key={item.name} className="border-l-2 border-[#c8a020] pl-4">
                  <p className="font-semibold text-[#0a0a0a] text-sm mb-1" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>{item.name}</p>
                  <p className="text-sm text-[#666] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHEN MAY ESIs BE CONSIDERED */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>03</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Candidacy</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              When May Epidural Steroid Injections Be Considered?
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              Epidural steroid injections may be considered for selected patients with:
            </p>
            <ul className="space-y-3 max-w-2xl mb-6">
              {[
                "Radicular pain related to a herniated disc or spinal stenosis",
                "Cervical or lumbar nerve root irritation with radiating symptoms",
                "Symptoms that have not improved adequately with conservative treatment",
                "Symptoms significant enough to warrant procedural evaluation",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm max-w-2xl">
              Epidural steroid injections are not appropriate for every patient with back, neck,
              or leg pain. A clinical evaluation is required to determine appropriateness.
            </p>
          </div>
        </div>
      </section>

      {/* LIMITATIONS */}
      <section className="bg-[#0a0a0a] py-16 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#666] uppercase tracking-widest">Limitations</p>
          </div>
          <div className="md:col-span-10 space-y-3 text-[#888] text-sm leading-relaxed">
            <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Important Limitations.
            </h2>
            <p>
              Response to epidural steroid injections varies among patients. The procedure may
              provide temporary relief, partial relief, or no relief. Multiple injections may be
              considered in appropriate clinical circumstances, and the number of injections
              appropriate for a given patient depends on the clinical response and overall context.
            </p>
            <p>
              As with any medical procedure, epidural steroid injections carry potential risks.
              Risks and benefits should be discussed in detail with the treating physician before
              any procedure is performed. This page is for general informational purposes only and
              does not constitute medical advice or create a physician-patient relationship.
            </p>
            <p>
              Dr. Dardashti sees patients in Mission Hills, California, serving patients from the
              San Fernando Valley, Santa Clarita Valley, and surrounding Los Angeles communities.
            </p>
          </div>
        </div>
      </section>

      {/* RECOMMENDED READING */}
      <section className="bg-white py-16 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#999] uppercase tracking-widest">Reading</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-base font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Recommended Reading.
            </h2>
            <p className="text-[#666] text-sm leading-relaxed mb-6">
              Learning about your condition and how procedures work can help you prepare for your consultation and make informed decisions about your treatment.
            </p>
            <ul className="space-y-3 text-sm">
              <li><Link href="/pain-without-imaging" className="text-[#c8a020] hover:underline tracking-wide">Pain Without Imaging Findings →</Link></li>
              <li><Link href="/treatment-options" className="text-[#c8a020] hover:underline tracking-wide">Treatment Decision Framework →</Link></li>
              <li><Link href="/conservative-care" className="text-[#c8a020] hover:underline tracking-wide">Conservative Treatments for Chronic Pain →</Link></li>
              <li><Link href="/patient-education" className="text-[#c8a020] hover:underline tracking-wide">Patient Education Resources →</Link></li>
              <li><Link href="/conditions/low-back-pain" className="text-[#c8a020] hover:underline tracking-wide">Low Back Pain Evaluation →</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-[#f9f7f4] py-14 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#999] uppercase tracking-widest">Related</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-base font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Related Conditions &amp; Procedures.
            </h2>
            <ul className="space-y-3 text-sm">
              <li><Link href="/conditions/sciatica-radicular-pain" className="text-[#c8a020] hover:underline tracking-wide">Sciatica and Radicular Pain Evaluation →</Link></li>
              <li><Link href="/conditions/low-back-pain" className="text-[#c8a020] hover:underline tracking-wide">Low Back Pain Evaluation →</Link></li>
              <li><Link href="/procedures/radiofrequency-ablation" className="text-[#c8a020] hover:underline tracking-wide">Radiofrequency Ablation →</Link></li>
              <li><Link href="/procedures" className="text-[#c8a020] hover:underline tracking-wide">View all Procedures &amp; Treatment Options →</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
