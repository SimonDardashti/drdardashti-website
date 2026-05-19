import type { Metadata } from "next";

const PAGE_URL = "https://www.drdardashti.com/services";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: "Conditions & Services | Interventional Pain Management | Simon Dardashti, MD",
  description:
    "Dr. Simon Dardashti evaluates spine pain, nerve pain, joint pain, radicular pain, sacroiliac joint pain, CRPS, and selected interventional pain treatment options.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Conditions & Services | Interventional Pain Management | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates spine pain, nerve pain, joint pain, radicular pain, sacroiliac joint pain, CRPS, and selected interventional pain treatment options.",
    images: [
      {
        url: "/headshot.webp",
        width: 1200,
        height: 630,
        alt: "Simon Dardashti, MD, board-certified pain medicine physician and anesthesiologist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conditions & Services | Interventional Pain Management | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates spine pain, nerve pain, joint pain, radicular pain, sacroiliac joint pain, CRPS, and selected interventional pain treatment options.",
    images: ["/headshot.webp"],
  },
};

const servicesPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Conditions & Services | Interventional Pain Management",
  url: PAGE_URL,
  description:
    "Dr. Simon Dardashti evaluates spine pain, nerve pain, joint pain, radicular pain, sacroiliac joint pain, CRPS, and selected interventional pain treatment options.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Conditions & Services", item: PAGE_URL },
    ],
  },
};

const conditions = [
  "Neck pain",
  "Low back pain",
  "Sciatica and radicular pain",
  "Cervical radiculopathy",
  "Lumbar radiculopathy",
  "Spine-related pain",
  "Facet-mediated pain",
  "Sacroiliac joint pain",
  "Neuropathic pain",
  "Peripheral nerve pain",
  "Joint pain",
  "Persistent pain after injury or surgery",
  "Persistent pain after spine surgery",
  "Complex regional pain syndrome evaluation",
  "Headache and occipital neuralgia evaluation",
  "Chronic pain syndrome evaluation",
  "Complex pain conditions",
  "Cauda equina syndrome",
];

const procedures = [
  "Epidural steroid injections",
  "Transforaminal epidural steroid injections",
  "Interlaminar epidural steroid injections",
  "Caudal epidural steroid injections",
  "Selective nerve root blocks",
  "Facet joint injections",
  "Medial branch blocks",
  "Radiofrequency ablation",
  "Sacroiliac joint injections",
  "Peripheral nerve blocks",
  "Occipital nerve blocks",
  "Trigger point injections",
  "Joint injections",
  "Bursa injections",
  "Tendon sheath injections",
  "Spinal cord stimulation evaluation",
  "Spinal cord stimulation trial consideration",
  "Medication management when appropriate",
  "Physical therapy coordination",
];

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesPageSchema) }} />
      {/* Hero */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Conditions &amp; Services
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Pain Conditions
            <br />
            <em className="not-italic text-[#888]">&amp; Treatment Options.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-xl leading-relaxed">
            Dr. Dardashti evaluates a range of pain conditions, and develops treatment
            plans based on the patient's symptoms, physical examination, imaging findings,
            prior treatment history, and overall clinical picture.
          </p>
        </div>
      </section>

      {/* SECTION 01 — CONDITIONS */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span
              className="text-7xl font-bold text-[#f0f0f0] leading-none block"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              aria-hidden
            >
              01
            </span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Conditions</p>
          </div>
          <div className="md:col-span-10">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-3"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Conditions Evaluated.
            </h2>
            <p className="text-[#777] text-sm mb-8 max-w-xl">
              Dr. Dardashti evaluates a range of pain conditions, including:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-0 border border-[#e5e5e0]">
              {conditions.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 p-4 border-b border-r border-[#e5e5e0]"
                >
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2 shrink-0" />
                  <span className="text-base text-[#555]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — PROCEDURES */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span
              className="text-7xl font-bold text-[#e8e6e3] leading-none block"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              aria-hidden
            >
              02
            </span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Treatment</p>
          </div>
          <div className="md:col-span-10">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-3"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Procedures &amp; Treatment Options.
            </h2>
            <p className="text-[#777] text-sm mb-8 max-w-xl">
              Treatment recommendations depend on the patient's diagnosis, physical
              examination, imaging findings, prior treatment response, medical history,
              and overall clinical context. When appropriate, treatment options may include:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-0 border border-[#e5e5e0]">
              {procedures.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 p-4 border-b border-r border-[#e5e5e0]"
                >
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2 shrink-0" />
                  <span className="text-base text-[#555]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03 — SCS */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span
              className="text-7xl font-bold text-[#f0f0f0] leading-none block"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              aria-hidden
            >
              03
            </span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Advanced</p>
          </div>
          <div className="md:col-span-10">
            <p className="text-[#c8a020] text-xs font-semibold uppercase tracking-widest mb-2">
              For selected patients
            </p>
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Spinal Cord Stimulation Evaluation.
            </h2>
            <div className="space-y-4 text-[#555] text-sm leading-relaxed max-w-2xl">
              <p>
                For selected patients with chronic neuropathic pain, persistent pain after
                spine surgery, or certain complex pain conditions, Dr. Dardashti may evaluate
                whether spinal cord stimulation is an appropriate treatment consideration.
              </p>
              <p>
                Spinal cord stimulation is not appropriate for every patient. Evaluation
                may include review of the patient's diagnosis, imaging and treatment history,
                medication history, prior procedural response, functional limitations, and
                overall medical and psychological suitability.
              </p>
              <p>
                When clinically appropriate, patients may be considered for a spinal cord
                stimulation trial before any permanent implantation decision is made.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-2xl font-bold text-white mb-3"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Questions About Care
          </h2>
          <p className="text-[#666] text-sm max-w-xl">
            Dr. Dardashti sees patients in Mission Hills, California. For appointment
            scheduling and clinical communication, please reach out through the
            appropriate patient care channels.
          </p>
        </div>
      </section>
    </>
  );
}
