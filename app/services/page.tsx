import type { Metadata } from "next";
import Link from "next/link";

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

const conditionGroups = [
  {
    title: "Spine Pain",
    items: [
      { label: "Neck pain" },
      { label: "Low back pain", href: "/conditions/low-back-pain" },
      { label: "Spine-related pain" },
      { label: "Facet-mediated pain" },
      { label: "Sacroiliac joint pain" },
    ],
  },
  {
    title: "Nerve & Radicular Pain",
    items: [
      { label: "Sciatica", href: "/conditions/sciatica-radicular-pain" },
      { label: "Cervical radiculopathy" },
      { label: "Lumbar radiculopathy" },
      { label: "Radicular pain", href: "/conditions/sciatica-radicular-pain" },
      { label: "Neuropathic pain" },
      { label: "Peripheral nerve pain" },
    ],
  },
  {
    title: "Joint & Musculoskeletal Pain",
    items: [
      { label: "Joint pain" },
      { label: "Bursa-related pain" },
      { label: "Myofascial pain" },
      { label: "Occipital neuralgia" },
      { label: "Persistent pain after injury or surgery" },
      { label: "Persistent pain after spine surgery" },
    ],
  },
  {
    title: "Complex Pain Conditions",
    items: [
      { label: "Complex regional pain syndrome evaluation" },
      { label: "Chronic pain syndrome evaluation" },
      { label: "Complex pain conditions" },
    ],
  },
];

const procedureGroups = [
  {
    title: "Spine Procedures",
    items: [
      { label: "Cervical epidural steroid injections", href: "/procedures/epidural-steroid-injections" },
      { label: "Thoracic epidural steroid injections", href: "/procedures/epidural-steroid-injections" },
      { label: "Lumbar epidural steroid injections", href: "/procedures/epidural-steroid-injections" },
      { label: "Transforaminal epidural steroid injections", href: "/procedures/epidural-steroid-injections" },
      { label: "Interlaminar epidural steroid injections", href: "/procedures/epidural-steroid-injections" },
      { label: "Caudal epidural steroid injections", href: "/procedures/epidural-steroid-injections" },
      { label: "Selective nerve root blocks" },
      { label: "Facet joint injections" },
      { label: "Medial branch blocks" },
      { label: "Radiofrequency ablation", href: "/procedures/radiofrequency-ablation" },
      { label: "Sacroiliac joint injections" },
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
      { label: "Spinal cord stimulation evaluation" },
      { label: "Spinal cord stimulation trial consideration" },
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

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesPageSchema) }} />

      {/* HERO */}
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
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Dr. Simon Dardashti evaluates spine, nerve, joint, and complex pain conditions.
            Treatment recommendations are based on the patient's symptoms, physical examination,
            imaging when available, prior treatment response, medical history, and overall
            clinical context.
          </p>
        </div>
      </section>

      {/* SECTION 1 — CONDITIONS EVALUATED */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
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
              <p className="text-[#777] text-base max-w-2xl">
                Dr. Dardashti evaluates a range of pain conditions, including:
              </p>
            </div>
          </div>

          <div className="md:ml-[calc(2/12*100%+2.5rem)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#e5e5e0]">
            {conditionGroups.map((group, i) => (
              <div
                key={group.title}
                className={`bg-white p-6 ${i < conditionGroups.length - 1 ? "border-b lg:border-b-0 lg:border-r border-[#e5e5e0]" : ""}`}
              >
                <div className="w-5 h-px bg-[#c8a020] mb-4" />
                <h3
                  className="font-bold text-[#0a0a0a] text-sm mb-4"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {group.title}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item.label} className="text-sm text-[#666] leading-relaxed">
                      {item.href ? (
                        <Link href={item.href} className="hover:text-[#c8a020] transition-colors">
                          {item.label}
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

      {/* SECTION 2 — PROCEDURES & TREATMENT OPTIONS */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
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
              <p className="text-[#777] text-base max-w-2xl">
                When clinically appropriate, treatment options may include conservative care
                coordination, medication management, image-guided procedures, and advanced pain
                treatment options for selected patients.
              </p>
            </div>
          </div>

          <div className="md:ml-[calc(2/12*100%+2.5rem)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#e0e0d8]">
            {procedureGroups.map((group, i) => (
              <div
                key={group.title}
                className={`bg-white p-6 ${i < procedureGroups.length - 1 ? "border-b lg:border-b-0 lg:border-r border-[#e0e0d8]" : ""}`}
              >
                <div className="w-5 h-px bg-[#c8a020] mb-4" />
                <h3
                  className="font-bold text-[#0a0a0a] text-sm mb-4"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {group.title}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item.label} className="text-sm text-[#666] leading-relaxed">
                      {item.href ? (
                        <Link href={item.href} className="hover:text-[#c8a020] transition-colors">
                          {item.label}
                        </Link>
                      ) : item.label === "Spinal cord stimulation evaluation" ? (
                        <a href="#scs" className="hover:text-[#c8a020] transition-colors">
                          {item.label}
                        </a>
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

      {/* SECTION 3 — SPINAL CORD STIMULATION */}
      <section id="scs" className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
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
            <div className="space-y-4 text-[#555] text-base leading-relaxed max-w-2xl">
              <p>
                For selected patients with chronic nerve-related pain, persistent pain after
                spine surgery, or certain complex pain conditions, Dr. Dardashti may evaluate
                whether spinal cord stimulation is an appropriate treatment consideration.
              </p>
              <p>
                Spinal cord stimulation is not appropriate for every patient. Evaluation may
                include review of the patient's diagnosis, imaging and treatment history,
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

      {/* SECTION 4 — TREATMENT APPROACH */}
      <section className="bg-[#0a0a0a] py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
              Section 04
            </p>
            <h2
              className="text-3xl md:text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Treatment
              <br />
              <em className="not-italic text-[#c8a020]">Approach.</em>
            </h2>
          </div>
          <div className="space-y-4 text-[#888] text-sm leading-relaxed">
            <p>
              Treatment recommendations are based on the patient's history, physical examination,
              imaging when available, prior treatment response, medical history, and overall
              clinical context.
            </p>
            <p>
              Dr. Dardashti's approach emphasizes careful diagnostic evaluation, clear
              communication, evidence-informed decision-making, and appropriate use of
              conservative, medication-based, image-guided, and interventional treatment options
              based on each patient's clinical presentation.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 — DISCLAIMER */}
      <section className="bg-[#f9f7f4] py-14 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#999] uppercase tracking-widest">Information</p>
          </div>
          <div className="md:col-span-10">
            <h2
              className="text-base font-bold text-[#0a0a0a] mb-3"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Important Information.
            </h2>
            <p className="text-[#777] text-sm leading-relaxed max-w-2xl">
              This website is for general informational purposes only and does not provide
              medical advice, diagnosis, or treatment. Clinical questions, appointment requests,
              prescriptions, and patient-specific medical concerns should be handled through the
              appropriate medical office or patient communication channel. If you are
              experiencing a medical emergency, call 911 or seek emergency medical care.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="bg-[#0a0a0a] py-14 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h2
              className="text-xl font-bold text-white mb-2"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Learn More About Dr. Dardashti.
            </h2>
            <p className="text-[#666] text-sm max-w-md">
              Dr. Dardashti sees patients in Mission Hills, California, serving the San Fernando
              Valley and surrounding Los Angeles communities.
            </p>
          </div>
          <Link
            href="/about"
            className="shrink-0 inline-block border border-[#333] hover:border-[#c8a020] text-[#888] hover:text-[#c8a020] font-semibold px-8 py-4 text-xs tracking-widest uppercase transition-colors duration-200"
          >
            About Dr. Dardashti
          </Link>
        </div>
      </section>
    </>
  );
}
