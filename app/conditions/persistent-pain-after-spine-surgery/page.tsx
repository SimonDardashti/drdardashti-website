import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://www.drdardashti.com/conditions/persistent-pain-after-spine-surgery";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Persistent Pain After Spine Surgery | Simon Dardashti, MD" },
  description:
    "Dr. Simon Dardashti evaluates persistent back, neck, arm, or leg pain after spine surgery — including residual disc pathology, adjacent segment changes, facet and SI joint contributors, and neuropathic pain.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Persistent Pain After Spine Surgery | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates persistent back, neck, arm, or leg pain after spine surgery — including residual disc pathology, adjacent segment changes, facet and SI joint contributors, and neuropathic pain.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Persistent Pain After Spine Surgery | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates persistent back, neck, arm, or leg pain after spine surgery — including residual disc pathology, adjacent segment changes, facet and SI joint contributors, and neuropathic pain.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Persistent Pain After Spine Surgery | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Dr. Simon Dardashti evaluates persistent back, neck, arm, or leg pain after spine surgery — including residual disc pathology, adjacent segment changes, facet and SI joint contributors, and neuropathic pain.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  about: { "@type": "MedicalCondition", name: "Persistent Pain After Spine Surgery" },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Conditions & Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: "Persistent Pain After Spine Surgery", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "Pain After Surgery Is Recognized",
    body: "Some patients continue to experience back, neck, arm, or leg pain after spine surgery. This is a well-recognized clinical challenge with multiple possible contributing factors.",
  },
  {
    heading: "Many Possible Causes",
    body: "Possible contributors include recurrent or residual disc pathology, adjacent segment changes, facet or sacroiliac joint pain, epidural scar formation, neuropathic changes, or incomplete resolution of the original problem.",
  },
  {
    heading: "Evaluation Without Assumption",
    body: "A careful re-evaluation is needed to identify what is currently generating pain — rather than assuming the problem is unchanged from before surgery or attributing all pain to a single prior finding.",
  },
];

export default function PersistentPainAfterSpineSurgeryPage() {
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
            Persistent Pain After
            <br />
            <em className="not-italic text-[#888]">Spine Surgery.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            A meaningful number of patients continue to experience pain after spine surgery —
            whether in the back, neck, arm, or leg. This is a recognized clinical situation
            that benefits from careful re-evaluation rather than a single-cause explanation.
            Dr. Dardashti evaluates patients with persistent spine-related pain after prior
            surgical procedures.
          </p>
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

      {/* OVERVIEW */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>01</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Overview</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Understanding Persistent Pain After Spine Surgery.
            </h2>
            <p>
              Spine surgery — including lumbar or cervical decompression, discectomy, fusion,
              or laminectomy — is performed to address a specific structural problem. However,
              a subset of patients experience pain that either continues after surgery or returns
              after a period of improvement. This is sometimes referred to in older literature
              as &quot;failed back surgery syndrome,&quot; a term that is now considered imprecise and
              non-specific. A more useful approach is to evaluate what is currently generating
              pain rather than relying on a single categorical label.
            </p>
            <p>
              Persistent pain after spine surgery does not imply that the surgery was
              inappropriate or performed incorrectly. Multiple factors — some predictable
              and some not — can contribute to ongoing pain, and understanding them
              requires a careful clinical re-evaluation.
            </p>
          </div>
        </div>
      </section>

      {/* POSSIBLE CONTRIBUTORS */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>02</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Contributors</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Possible Contributing Factors.
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              Among the factors that may contribute to persistent pain after spine surgery:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Recurrent disc herniation at the same level, or new disc pathology at an adjacent level",
                "Residual nerve root compression or foraminal stenosis that was not fully resolved by surgery",
                "Adjacent segment disease — accelerated degenerative changes at vertebral levels above or below a fusion",
                "Facet joint pain at the surgical level or at adjacent levels that are now bearing increased load",
                "Sacroiliac joint pain, which may develop or worsen after lumbar fusion alters pelvic mechanics",
                "Epidural fibrosis — scar tissue forming around the nerve root following surgery",
                "Neuropathic pain resulting from nerve injury or sensitization that persists after the structural problem has been addressed",
                "Deconditioning and altered movement patterns that develop during the recovery period",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* EVALUATION APPROACH */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>03</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Approach</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              How Dr. Dardashti Evaluates This Presentation.
            </h2>
            <p>
              Evaluation begins with a review of the prior spine surgery — including the
              indication, procedure performed, and the post-operative course. Operative
              reports and prior imaging are reviewed when available. The current symptom
              pattern is assessed — its location, character, and relationship to the original
              pre-surgical complaint — to determine what has changed and what may be new.
            </p>
            <p>
              A physical and neurologic examination establishes the current clinical picture.
              When post-operative imaging is available, findings are reviewed in the context
              of the current symptoms. An MRI from before and after surgery, when available,
              can be informative when evaluated together.
            </p>
            <p>
              Diagnostic nerve blocks or joint injections may help clarify whether a specific
              structure — such as a facet joint, sacroiliac joint, or nerve root — is
              contributing to the current pain pattern, and can inform whether targeted
              treatment is appropriate.
            </p>
          </div>
        </div>
      </section>

      {/* TREATMENT OPTIONS */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>04</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Treatment</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Treatment Options That May Be Considered.
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              Treatment depends on the identified contributors and the patient&apos;s overall
              clinical picture. Options that may be considered include:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Physical therapy and rehabilitation focused on the post-surgical spine and surrounding musculature",
                "Medication management targeting specific contributing mechanisms",
                "Epidural steroid injections for radicular or nerve root symptoms at or adjacent to the surgical level",
                "Facet joint injections or medial branch blocks when facet-mediated pain is suspected",
                "Sacroiliac joint injections when the sacroiliac joint is a likely contributor",
                "Spinal cord stimulation evaluation for selected patients with refractory neuropathic or mixed pain",
                "Coordination with spine surgery when further structural evaluation or surgical options are appropriate",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm mt-6 max-w-2xl">
              Recommendations are individualized based on the clinical evaluation and prior
              treatment history. Not every patient requires an injection or advanced procedure.
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
              Persistent pain after spine surgery is a complex presentation with multiple
              possible contributing factors. Identifying the primary pain generator with
              certainty is not always possible, and treatment response varies considerably
              among patients.
            </p>
            <p>
              A formal clinical evaluation is required to determine the appropriate approach
              for any individual patient. This page is for general informational purposes only
              and does not constitute medical advice or create a physician-patient relationship.
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
            <h2 className="text-base font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Related Conditions &amp; Procedures.
            </h2>
            <ul className="space-y-3 text-sm">
              <li><Link href="/conditions/lumbar-radiculopathy" className="text-[#c8a020] hover:underline tracking-wide">Lumbar Radiculopathy Evaluation →</Link></li>
              <li><Link href="/conditions/cervical-radiculopathy" className="text-[#c8a020] hover:underline tracking-wide">Cervical Radiculopathy Evaluation →</Link></li>
              <li><Link href="/conditions/facet-mediated-pain" className="text-[#c8a020] hover:underline tracking-wide">Facet-Mediated Pain Evaluation →</Link></li>
              <li><Link href="/conditions/sacroiliac-joint-pain" className="text-[#c8a020] hover:underline tracking-wide">Sacroiliac Joint Pain Evaluation →</Link></li>
              <li><Link href="/procedures/epidural-steroid-injections" className="text-[#c8a020] hover:underline tracking-wide">Epidural Steroid Injections →</Link></li>
              <li><Link href="/procedures/spinal-cord-stimulation-evaluation" className="text-[#c8a020] hover:underline tracking-wide">Spinal Cord Stimulation Evaluation →</Link></li>
              <li><Link href="/services" className="text-[#c8a020] hover:underline tracking-wide">View all Conditions &amp; Services →</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
