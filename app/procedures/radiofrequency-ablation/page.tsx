import type { Metadata } from "next";
import Link from "next/link";
import ProcedureIllustration from "@/components/ProcedureIllustration";

const PAGE_URL = "https://www.drdardashti.com/procedures/radiofrequency-ablation";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Radiofrequency Ablation | Simon Dardashti, MD" },
  description:
    "Dr. Simon Dardashti evaluates selected patients for radiofrequency ablation when facet-mediated spine pain is suspected and diagnostic medial branch blocks support the diagnosis.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Radiofrequency Ablation | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates selected patients for radiofrequency ablation when facet-mediated spine pain is suspected and diagnostic medial branch blocks support the diagnosis.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Radiofrequency Ablation | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates selected patients for radiofrequency ablation when facet-mediated spine pain is suspected and diagnostic medial branch blocks support the diagnosis.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Radiofrequency Ablation | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Dr. Simon Dardashti evaluates selected patients for radiofrequency ablation when facet-mediated spine pain is suspected and diagnostic medial branch blocks support the diagnosis.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  about: { "@type": "MedicalProcedure", name: "Radiofrequency Ablation" },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Conditions & Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: "Radiofrequency Ablation", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "Facet-Mediated Pain",
    body: "Radiofrequency ablation (RFA) is most commonly used for suspected facet-mediated spine pain in the cervical, thoracic, or lumbar regions.",
  },
  {
    heading: "Diagnostic Blocks First",
    body: "Medial branch blocks are typically performed before RFA to confirm that the facet joints are a significant contributor to the patient's pain.",
  },
  {
    heading: "Response Varies",
    body: "RFA is not appropriate for every type of spine pain. Response varies, and the procedure should only be considered after appropriate clinical evaluation.",
  },
];

export default function RadiofrequencyAblationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      {/* HERO */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-start gap-10 md:gap-16">
          <div className="flex-1">
            <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              Procedures &amp; Treatment Options
            </p>
            <h1
              className="text-4xl md:text-6xl font-bold leading-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Radiofrequency
              <br />
              <em className="not-italic text-[#888]">Ablation.</em>
            </h1>
            <p className="mt-5 text-[#666] text-lg leading-relaxed">
              Radiofrequency ablation may be considered for selected patients with suspected
              facet-mediated spine pain. The procedure is performed after appropriate clinical
              evaluation and diagnostic nerve blocks confirm a likely facet joint contribution
              to the patient's pain.
            </p>
          </div>
          <div className="hidden md:block w-[200px] shrink-0 pt-2 opacity-70">
            <ProcedureIllustration variant="radiofrequency-ablation" />
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

      {/* WHAT IS RFA */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>01</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Overview</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              What Is Radiofrequency Ablation?
            </h2>
            <p>
              Radiofrequency ablation (RFA) is a procedure that uses heat generated by
              radiofrequency energy to disrupt the pain signals carried by specific nerves.
              For spine-related pain, RFA is most commonly applied to the medial branch nerves —
              small nerves that carry pain signals from the facet joints to the brain.
            </p>
            <p>
              By interrupting these pain signals, RFA may provide relief for patients whose pain
              is primarily mediated by the facet joints. The procedure is performed under imaging
              guidance and is typically an outpatient procedure.
            </p>
            <p>
              RFA does not treat the underlying degenerative changes in the spine and is not
              a permanent solution. The targeted nerves can regenerate over time, and symptoms
              may return. Repeat procedures may be considered in appropriate clinical circumstances.
            </p>
          </div>
        </div>
      </section>

      {/* DIAGNOSTIC PROCESS */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>02</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Diagnostic Steps</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Diagnostic Blocks Before RFA.
            </h2>
            <p>
              Before radiofrequency ablation is considered, diagnostic medial branch blocks are
              typically performed to determine whether the facet joints are a significant source
              of the patient's pain. A medial branch block is an injection of local anesthetic
              near the medial branch nerve, temporarily numbing the nerve to assess its contribution
              to the patient's symptoms.
            </p>
            <p>
              A meaningful positive response to medial branch blocks — typically defined by a
              significant reduction in pain during the block period — helps support the rationale
              for considering RFA. The number of diagnostic blocks and criteria for a positive
              response are determined based on clinical guidelines and individual clinical context.
            </p>
            <p>
              Patients who do not have an adequate response to diagnostic medial branch blocks
              are generally not considered appropriate candidates for RFA at that time.
            </p>
          </div>
        </div>
      </section>

      {/* WHEN MAY RFA BE CONSIDERED */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>03</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Candidacy</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              When May Radiofrequency Ablation Be Considered?
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              RFA may be considered for selected patients who meet appropriate clinical criteria,
              including:
            </p>
            <ul className="space-y-3 max-w-2xl mb-6">
              {[
                "Suspected facet-mediated pain in the cervical, thoracic, or lumbar spine",
                "Axial spine pain without dominant radicular symptoms",
                "Meaningful positive response to diagnostic medial branch blocks",
                "Pain that has not been adequately managed with conservative measures",
                "Clinical presentation consistent with facet joint involvement on evaluation",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm max-w-2xl">
              RFA is not appropriate for every type of spine pain and should only be considered
              after appropriate clinical evaluation and positive diagnostic block response.
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
              Radiofrequency ablation is not a cure for underlying degenerative spine conditions.
              Response to the procedure varies among patients. Some patients experience significant
              and lasting relief; others may experience partial or short-term benefit.
            </p>
            <p>
              The procedure carries potential risks, which should be discussed with the treating
              physician before any procedure is performed. This page is for general informational
              purposes only and does not constitute medical advice.
            </p>
            <p>
              Dr. Dardashti sees patients in Mission Hills, California, serving patients from the
              San Fernando Valley, Santa Clarita Valley, and surrounding Los Angeles communities.
            </p>
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
              <li><Link href="/conditions/low-back-pain" className="text-[#c8a020] hover:underline tracking-wide">Low Back Pain Evaluation →</Link></li>
              <li><Link href="/procedures/epidural-steroid-injections" className="text-[#c8a020] hover:underline tracking-wide">Epidural Steroid Injections →</Link></li>
              <li><Link href="/conditions/sciatica-radicular-pain" className="text-[#c8a020] hover:underline tracking-wide">Sciatica and Radicular Pain Evaluation →</Link></li>
              <li><Link href="/services" className="text-[#c8a020] hover:underline tracking-wide">View all Conditions &amp; Services →</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
