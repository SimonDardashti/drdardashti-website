import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://www.drdardashti.com/procedures";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Procedures & Treatment Options | Simon Dardashti, MD" },
  description:
    "Dr. Simon Dardashti evaluates selected patients for epidural steroid injections, radiofrequency ablation, spinal cord stimulation, and other interventional pain procedures in Mission Hills, CA.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Procedures & Treatment Options | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates selected patients for epidural steroid injections, radiofrequency ablation, spinal cord stimulation, and other interventional pain procedures in Mission Hills, CA.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Procedures & Treatment Options | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates selected patients for epidural steroid injections, radiofrequency ablation, spinal cord stimulation, and other interventional pain procedures in Mission Hills, CA.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Procedures & Treatment Options | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Dr. Simon Dardashti evaluates selected patients for epidural steroid injections, radiofrequency ablation, spinal cord stimulation, and other interventional pain procedures in Mission Hills, CA.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Procedures & Treatment Options", item: PAGE_URL },
    ],
  },
};

const procedureGroups = [
  {
    title: "Spine Procedures",
    items: [
      { label: "Cervical epidural steroid injections", href: "/procedures/epidural-steroid-injections" },
      { label: "Lumbar epidural steroid injections", href: "/procedures/epidural-steroid-injections" },
      { label: "Transforaminal epidural steroid injections", href: "/procedures/epidural-steroid-injections" },
      { label: "Interlaminar epidural steroid injections", href: "/procedures/epidural-steroid-injections" },
      { label: "Caudal epidural steroid injections", href: "/procedures/epidural-steroid-injections" },
      { label: "Selective nerve root blocks" },
      { label: "Facet joint injections / medial branch blocks", href: "/procedures/facet-joint-injections-medial-branch-blocks" },
      { label: "Radiofrequency ablation", href: "/procedures/radiofrequency-ablation" },
      { label: "Sacroiliac joint injections", href: "/procedures/sacroiliac-joint-injections" },
    ],
  },
  {
    title: "Peripheral Nerve & Musculoskeletal",
    items: [
      { label: "Peripheral nerve blocks" },
      { label: "Occipital nerve blocks" },
      { label: "Trigger point injections" },
      { label: "Joint injections" },
      { label: "Bursa injections" },
      { label: "Tendon sheath injections" },
    ],
  },
  {
    title: "Advanced Pain Procedures",
    items: [
      { label: "Spinal cord stimulation evaluation", href: "/procedures/spinal-cord-stimulation-evaluation" },
      { label: "Spinal cord stimulation trial consideration", href: "/procedures/spinal-cord-stimulation-evaluation" },
      { label: "Peripheral nerve stimulation evaluation" },
      { label: "Peripheral nerve stimulation trial consideration" },
    ],
  },
  {
    title: "Medication & Conservative Care",
    items: [
      { label: "Medication management when clinically appropriate" },
      { label: "Physical therapy coordination" },
      { label: "Review of imaging and prior treatment history" },
      { label: "Multimodal pain management planning" },
    ],
  },
];

export default function ProceduresPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      {/* HERO */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Procedures &amp; Treatment Options
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Procedures &amp;
            <br />
            <em className="not-italic text-[#888]">Treatment Options.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Treatment options are considered after clinical evaluation and are selected based
            on each patient's diagnosis, history, functional goals, and prior treatment
            response. Not all procedures are appropriate for every patient.
          </p>
        </div>
      </section>

      {/* PROCEDURES GRID */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#e5e5e0]">
            {procedureGroups.map((group, i) => (
              <div
                key={group.title}
                className={`p-7 ${i < procedureGroups.length - 1 ? "border-b lg:border-b-0 lg:border-r border-[#e5e5e0]" : ""}`}
              >
                <div className="w-5 h-px bg-[#c8a020] mb-4" />
                <h2
                  className="font-bold text-[#0a0a0a] text-sm mb-5"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {group.title}
                </h2>
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item.label} className="text-sm text-[#666] leading-relaxed">
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="hover:text-[#c8a020] transition-colors"
                        >
                          {item.label} →
                        </Link>
                      ) : (
                        item.label
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TREATMENT APPROACH */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#999] uppercase tracking-widest">Approach</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Treatment Planning.
            </h2>
            <p>
              Treatment recommendations are based on the patient's history, physical
              examination, imaging when available, prior treatment response, medical history,
              and overall clinical context. Procedures are image-guided and performed
              following appropriate clinical evaluation.
            </p>
            <p>
              Dr. Dardashti's approach emphasizes careful diagnostic evaluation, clear
              communication, and evidence-informed decision-making. Treatment options are
              tailored to each patient's clinical presentation and functional goals.
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
            <h2
              className="text-xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Important Limitations.
            </h2>
            <p>
              Not all procedures listed are appropriate for every patient. Treatment
              recommendations are individualized and based on formal clinical evaluation.
              Response to treatment varies and cannot be predicted in advance. This content
              is for general informational purposes only and does not constitute medical
              advice or a guarantee of any specific treatment outcome.
            </p>
            <p>
              Dr. Dardashti sees patients in Mission Hills, California, serving patients from
              the San Fernando Valley, Santa Clarita Valley, and surrounding Los Angeles
              communities.
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
            <h2
              className="text-base font-bold text-[#0a0a0a] mb-5"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Conditions Evaluated.
            </h2>
            <ul className="space-y-3 text-sm">
              <li><Link href="/conditions/low-back-pain" className="text-[#c8a020] hover:underline tracking-wide">Low Back Pain Evaluation →</Link></li>
              <li><Link href="/conditions/sciatica-radicular-pain" className="text-[#c8a020] hover:underline tracking-wide">Sciatica &amp; Radicular Pain Evaluation →</Link></li>
              <li><Link href="/conditions/crps-evaluation" className="text-[#c8a020] hover:underline tracking-wide">Complex Regional Pain Syndrome Evaluation →</Link></li>
              <li><Link href="/services" className="text-[#c8a020] hover:underline tracking-wide">View all Conditions &amp; Services →</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
