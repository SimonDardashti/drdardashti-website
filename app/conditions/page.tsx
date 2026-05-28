import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://www.drdardashti.com/conditions";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Conditions Evaluated | Simon Dardashti, MD" },
  description:
    "Dr. Simon Dardashti evaluates spine pain, nerve pain, joint pain, radicular pain, sacroiliac joint pain, CRPS, and complex chronic pain conditions in Mission Hills, CA.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Conditions Evaluated | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates spine pain, nerve pain, joint pain, radicular pain, sacroiliac joint pain, CRPS, and complex chronic pain conditions in Mission Hills, CA.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conditions Evaluated | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates spine pain, nerve pain, joint pain, radicular pain, sacroiliac joint pain, CRPS, and complex chronic pain conditions in Mission Hills, CA.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Conditions Evaluated | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Dr. Simon Dardashti evaluates spine pain, nerve pain, joint pain, radicular pain, sacroiliac joint pain, CRPS, and complex chronic pain conditions in Mission Hills, CA.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Conditions Evaluated", item: PAGE_URL },
    ],
  },
};

const conditionGroups = [
  {
    title: "Spine Pain",
    items: [
      { label: "Neck pain", href: "/conditions/neck-pain" },
      { label: "Low back pain", href: "/conditions/low-back-pain" },
      { label: "Spine-related pain" },
      { label: "Facet-mediated pain" },
      { label: "Sacroiliac joint pain", href: "/conditions/sacroiliac-joint-pain" },
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
      { label: "Complex regional pain syndrome evaluation", href: "/conditions/crps-evaluation" },
      { label: "Post-mastectomy pain syndrome", href: "/conditions/post-mastectomy-pain-syndrome" },
      { label: "Chronic pain syndrome evaluation" },
      { label: "Complex pain conditions" },
    ],
  },
];

export default function ConditionsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      {/* HERO */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Conditions Evaluated
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Conditions
            <br />
            <em className="not-italic text-[#888]">Evaluated.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Dr. Simon Dardashti evaluates a range of pain conditions affecting the spine,
            nervous system, and musculoskeletal system. Evaluation is individualized and
            based on the patient's history, symptoms, examination findings, and relevant records.
          </p>
        </div>
      </section>

      {/* CONDITIONS GRID */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#e5e5e0]">
            {conditionGroups.map((group, i) => (
              <div
                key={group.title}
                className={`p-7 ${i < conditionGroups.length - 1 ? "border-b lg:border-b-0 lg:border-r border-[#e5e5e0]" : ""}`}
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

      {/* EVALUATION APPROACH */}
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
              Evaluation Approach.
            </h2>
            <p>
              Dr. Dardashti's clinical approach begins with a thorough review of the
              patient's history, symptom onset, character, and progression, along with
              prior imaging and treatment records. Physical examination is used to identify
              clinical findings relevant to the likely pain generator and to guide treatment
              planning.
            </p>
            <p>
              Diagnosis is based on the full clinical picture — not a single symptom,
              imaging finding, or test result in isolation. When treatment options are
              considered, they are selected based on the individual patient's clinical
              presentation, functional goals, and prior treatment response.
            </p>
          </div>
        </div>
      </section>

      {/* LIMITATIONS */}
      <section className="bg-[#0a0a0a] py-16 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#666] uppercase tracking-widest">Information</p>
          </div>
          <div className="md:col-span-10 space-y-3 text-[#888] text-sm leading-relaxed">
            <h2
              className="text-xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Important Information.
            </h2>
            <p>
              This page lists conditions that may be evaluated — it is not a guarantee that
              any specific diagnosis will be confirmed or any particular treatment recommended.
              A formal clinical evaluation is required for any individual patient. This content
              is for general informational purposes only and does not constitute medical advice.
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
              Procedures &amp; Treatment Options.
            </h2>
            <ul className="space-y-3 text-sm">
              <li><Link href="/procedures/epidural-steroid-injections" className="text-[#c8a020] hover:underline tracking-wide">Epidural Steroid Injections →</Link></li>
              <li><Link href="/procedures/radiofrequency-ablation" className="text-[#c8a020] hover:underline tracking-wide">Radiofrequency Ablation →</Link></li>
              <li><Link href="/procedures/spinal-cord-stimulation-evaluation" className="text-[#c8a020] hover:underline tracking-wide">Spinal Cord Stimulation Evaluation →</Link></li>
              <li><Link href="/procedures" className="text-[#c8a020] hover:underline tracking-wide">View all Procedures &amp; Treatment Options →</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
