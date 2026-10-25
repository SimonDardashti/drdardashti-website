import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const PAGE_URL = "https://www.drdardashti.com/procedures/basivertebral-nerve-ablation";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Basivertebral Nerve Ablation (BVNA) | Simon Dardashti, MD" },
  description: "A patient guide to basivertebral nerve ablation for selected chronic vertebrogenic low back pain, including evaluation, procedure steps, potential benefits, risks, and alternatives.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website", url: PAGE_URL,
    title: "Basivertebral Nerve Ablation (BVNA) | Simon Dardashti, MD",
    description: "A patient guide to basivertebral nerve ablation for selected chronic vertebrogenic low back pain, including evaluation, procedure steps, potential benefits, risks, and alternatives.",
    images: [{ url: "/images/procedures/basivertebral-nerve-ablation-concept.webp", width: 1536, height: 1024, alt: "Educational illustration of basivertebral nerve ablation anatomy and conceptual instrument access" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Basivertebral Nerve Ablation (BVNA) | Simon Dardashti, MD",
    description: "A patient guide to basivertebral nerve ablation for selected chronic vertebrogenic low back pain, including evaluation, procedure steps, potential benefits, risks, and alternatives.",
    images: ["/images/procedures/basivertebral-nerve-ablation-concept.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Basivertebral Nerve Ablation (BVNA)", url: PAGE_URL,
  description: "Patient education about basivertebral nerve ablation for selected people with chronic vertebrogenic low back pain.",
  inLanguage: "en-US", isPartOf: { "@type": "WebSite", url: SITE_URL },
  about: { "@type": "MedicalProcedure", name: "Basivertebral nerve ablation", alternateName: ["BVNA", "BVN ablation"] },
  breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Procedures & Treatment Options", item: SITE_URL + "/procedures" },
    { "@type": "ListItem", position: 3, name: "Basivertebral Nerve Ablation", item: PAGE_URL },
  ] },
};

const facts = [
  ["A specific pain pattern", "Intended for selected chronic low back pain associated with vertebral endplate changes—not back pain in general."],
  ["MRI is one part of evaluation", "Modic type 1 or 2 changes may be relevant, but imaging alone cannot identify the pain source or determine candidacy."],
  ["Results differ", "Studies report improvements for some carefully selected patients. Relief is not guaranteed, and an individual's response cannot be predicted."],
];

const sources = [
  ["Intracept System Instructions for Use: indications, contraindications, risks, procedure details", "https://www.bostonscientific.com/content/dam/elabeling/nm/intracept/51875763-01B_INTRACEPT_IFU_ML_s.pdf"],
  ["Khalil et al. — pooled five-year follow-up analysis (2024)", "https://pmc.ncbi.nlm.nih.gov/articles/PMC11700295/"],
];

function SectionHeading({ number, eyebrow, title }: { number: string; eyebrow: string; title: string }) {
  return <div className="md:col-span-3">
    <span className="block text-6xl font-bold leading-none text-[#e8e6e3] md:text-7xl" aria-hidden="true" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>{number}</span>
    <p className="mt-3 text-xs uppercase tracking-[0.22em] text-[#6b6b65]">{eyebrow}</p>
    <h2 className="mt-2 text-2xl font-bold leading-tight text-[#0a0a0a] md:text-3xl" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>{title}</h2>
  </div>;
}

export default function BasivertebralNerveAblationPage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
    <section className="border-b border-[#1a1a1a] bg-[#0a0a0a] px-5 py-14 text-white sm:px-6 md:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-7">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#c8a020]">Patient Education · Spine Procedure</p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Basivertebral{" "}<br/><em className="not-italic text-[#c8a020]">Nerve Ablation.</em></h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#d1d1cd] sm:text-lg">Basivertebral nerve ablation (BVNA, sometimes called BVN ablation) is intended for a carefully selected group of people with chronic vertebrogenic low back pain. It targets a small sensory nerve inside the vertebral body. It is different from medial branch radiofrequency ablation for some facet-joint pain.</p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#aaa]">This page is general education, not a diagnosis or a promise that a procedure is appropriate for you. Individual decisions require evaluation by a qualified clinician.</p>
          <a href="#who-may-be-considered" className="mt-7 inline-flex min-h-11 items-center border border-[#c8a020] px-5 py-2 text-sm font-semibold text-[#f1cf68] hover:bg-[#c8a020] hover:text-[#0a0a0a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f1cf68]">See who may be considered</a>
        </div>
        <figure className="md:col-span-5">
          <div className="overflow-hidden border border-[#393939] bg-white">
            <Image src="/images/procedures/basivertebral-nerve-ablation-concept.webp" alt="Educational cutaway illustration of the vertebral endplate, basivertebral nerve, and RF treatment target, alongside a labeled conceptual instrument path." width={1536} height={1024} preload unoptimized sizes="(max-width: 767px) 100vw, 42vw" className="h-auto w-full" />
          </div>
          <figcaption className="mt-3 text-xs leading-relaxed text-[#aaa]">Educational illustration only. Anatomy and the instrument path are simplified and not to scale. This image is not procedural guidance and should not be used to infer an individual’s anatomy or approach.</figcaption>
          <a href="/images/procedures/basivertebral-nerve-ablation-concept.webp" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-11 items-center text-sm text-[#f1cf68] underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f1cf68]">View full-size illustration<span className="sr-only"> (opens in a new tab)</span></a>
        </figure>
      </div>
    </section>

    <section className="border-b border-[#e5e5e0] bg-white px-5 py-10 sm:px-6 md:py-14" aria-label="Key points">
      <div className="mx-auto grid max-w-6xl grid-cols-1 border border-[#e5e5e0] sm:grid-cols-3">
        {facts.map((fact, i) => <article key={fact[0]} className={"p-5 sm:p-6 " + (i < facts.length - 1 ? "border-b border-[#e5e5e0] sm:border-b-0 sm:border-r" : "")}>
          <span className="mb-4 block h-px w-6 bg-[#c8a020]" aria-hidden="true"/><h2 className="text-base font-semibold text-[#111]">{fact[0]}</h2><p className="mt-2 text-sm leading-relaxed text-[#555]">{fact[1]}</p>
        </article>)}
      </div>
    </section>

    <section className="border-b border-[#e5e5e0] bg-[#f9f7f4] px-5 py-14 sm:px-6 md:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
        <SectionHeading number="01" eyebrow="The anatomy" title="What does the basivertebral nerve do?"/>
        <div className="space-y-4 text-base leading-relaxed text-[#555] md:col-span-9">
          <p>The basivertebral nerve travels inside the vertebral body and carries sensory information from the vertebral endplates—the thin interfaces between each vertebral body and the disc next to it. Changes around these endplates can be one contributor to chronic low back pain.</p>
          <p>BVNA uses radiofrequency energy to ablate a targeted portion of this nerve from within the bone. It is intended to reduce pain signals from a vertebrogenic source; it does not repair the disc or treat every cause of back pain.</p>
          <div className="border-l-2 border-[#c8a020] bg-white px-5 py-4 text-sm leading-relaxed text-[#444]"><strong className="text-[#111]">A different target than facet RFA.</strong> Medial branch RFA targets nerves carrying signals from facet joints. BVNA targets a nerve inside a vertebral body. They address different suspected pain sources.</div>
        </div>
      </div>
    </section>

    <section id="who-may-be-considered" className="scroll-mt-8 border-b border-[#e5e5e0] bg-white px-5 py-14 sm:px-6 md:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
        <SectionHeading number="02" eyebrow="Patient selection" title="Who may be evaluated?"/>
        <div className="space-y-6 md:col-span-9">
          <p className="text-base leading-relaxed text-[#555]">The FDA-cleared Intracept system labeling describes treatment for chronic low back pain lasting at least six months that has not responded to at least six months of conservative care, with MRI findings consistent with Modic type 1 or type 2 changes at L3 through S1. These features guide clinical evaluation; they do not prove eligibility. Other systems, clinical circumstances, and coverage policies may differ.</p>
          <div className="grid grid-cols-1 border border-[#e5e5e0] sm:grid-cols-3">
            <article className="border-b border-[#e5e5e0] p-5 sm:border-b-0 sm:border-r sm:p-6"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#806207]">Feature 1</p><h3 className="mt-2 text-lg font-semibold text-[#111]">Persistent low back pain</h3><p className="mt-2 text-sm leading-relaxed text-[#555]">At least six months, still limiting despite a meaningful course of nonsurgical care.</p></article>
            <article className="border-b border-[#e5e5e0] p-5 sm:border-b-0 sm:border-r sm:p-6"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#806207]">Feature 2</p><h3 className="mt-2 text-lg font-semibold text-[#111]">MRI finding</h3><p className="mt-2 text-sm leading-relaxed text-[#555]">Modic type 1 or type 2 changes at one or more vertebral levels from L3 through S1 in the Intracept labeling.</p></article>
            <article className="p-5 sm:p-6"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#806207]">Feature 3</p><h3 className="mt-2 text-lg font-semibold text-[#111]">Clinical fit</h3><p className="mt-2 text-sm leading-relaxed text-[#555]">Symptoms, examination, and imaging are considered together while other likely pain sources are assessed.</p></article>
          </div>
          <p className="text-sm leading-relaxed text-[#555]">Modic changes can be present in people without pain, and back pain can have more than one contributor. A clinician considers symptoms, examination, MRI, prior care, overall health, and alternative sources together. MRI alone cannot diagnose vertebrogenic pain.</p>
          <aside className="border border-[#e5e5e0] bg-[#f9f7f4] p-5 sm:p-6"><h3 className="text-lg font-semibold text-[#111]">Reasons to discuss other options</h3><p className="mt-2 text-sm leading-relaxed text-[#555]">Pain that mainly travels down a leg, neurologic symptoms, fracture, infection, tumor, or another spinal condition may point to a different or additional pain source. Device-specific contraindications and bone quality also need individual review.</p></aside>
        </div>
      </div>
    </section>

    <section className="border-b border-[#e5e5e0] bg-[#f9f7f4] px-5 py-14 sm:px-6 md:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
        <SectionHeading number="03" eyebrow="The procedure" title="Before, during, and after"/>
        <div className="space-y-8 md:col-span-9">
          <article><h3 className="text-lg font-semibold text-[#111]">Before</h3><p className="mt-2 text-sm leading-relaxed text-[#555]">The care team reviews your symptoms, examination, prior treatment, and MRI or CT images. They discuss how the clinical pattern and imaging fit, alternatives, device-specific risks, medicines, and sedation. Intracept instructions call for imaging guidance and at least moderate conscious sedation; approaches may vary by system and patient.</p></article>
          <article><h3 className="text-lg font-semibold text-[#111]">During</h3><p className="mt-2 text-sm leading-relaxed text-[#555]">In a sterile procedure setting, the clinician uses fluoroscopy or CT to guide specialized instruments through a small skin opening into the vertebral body. A radiofrequency probe is positioned at the target and energy is applied to ablate the basivertebral nerve. One or more levels may be treated depending on evaluation and device instructions.</p></article>
          <article><h3 className="text-lg font-semibold text-[#111]">After</h3><p className="mt-2 text-sm leading-relaxed text-[#555]">The care team monitors you and gives instructions for activity, incision care, medicines, and follow-up. Temporary soreness or a short-term increase in pain can occur. Recovery and return to usual activities vary; follow your treating team&rsquo;s plan rather than a general timeline.</p></article>
        </div>
      </div>
    </section>

    <section className="border-b border-[#e5e5e0] bg-white px-5 py-14 sm:px-6 md:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
        <SectionHeading number="04" eyebrow="Benefits and tradeoffs" title="Potential benefits, limits, and risks"/>
        <div className="space-y-7 md:col-span-9">
          <article><h3 className="text-lg font-semibold text-[#111]">Potential benefits and limits</h3><p className="mt-2 text-sm leading-relaxed text-[#555]">Clinical studies of carefully selected participants report improved pain and function; follow-up studies report that some participants retained benefit at five years. Studies used specific selection criteria, and some long-term reports no longer had a randomized comparison group. Evidence cannot predict an individual result. Relief is not guaranteed, and treatment may not help if the main pain source is elsewhere.</p></article>
          <article><h3 className="text-lg font-semibold text-[#111]">Risks to discuss</h3><p className="mt-2 text-sm leading-relaxed text-[#555]">Potential adverse events in the Intracept instructions include pain or discomfort, bleeding or hematoma, infection, nerve injury, unintended injury to nearby structures, and pedicle or vertebral-body fracture. There are also risks related to sedation or anesthesia and imaging radiation. Relevance depends on the patient, procedure, and device; discuss your individual risk with a clinician.</p></article>
          <article><h3 className="text-lg font-semibold text-[#111]">Alternatives</h3><p className="mt-2 text-sm leading-relaxed text-[#555]">Options may include exercise-based rehabilitation, activity or lifestyle changes, medication when appropriate, other targeted procedures, or surgical evaluation, depending on the pain source, health, and goals. Choosing among them requires an individualized clinical discussion.</p></article>
        </div>
      </div>
    </section>

    <section className="border-b border-[#e5e5e0] bg-[#f9f7f4] px-5 py-14 sm:px-6 md:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
        <SectionHeading number="05" eyebrow="Next steps" title="Questions to ask your clinician"/>
        <div className="md:col-span-9">
          <ul className="list-disc space-y-3 pl-5 text-sm leading-relaxed text-[#555] marker:text-[#c8a020]">
            <li>What pain source best fits my symptoms and examination?</li><li>What do my MRI findings mean in the context of my symptoms?</li><li>What other causes of my back pain have been considered?</li><li>What benefits, risks, alternatives, and recovery expectations apply to me?</li><li>Which device and procedure-specific instructions would be used, and what would my insurance require?</li>
          </ul>
          <p className="mt-7 text-sm leading-relaxed text-[#555]">For more on persistent back pain, see <Link href="/conditions/low-back-pain" className="font-semibold text-[#806207] underline decoration-[#c8a020] underline-offset-4 hover:text-[#594507]">Low Back Pain Evaluation</Link>. For a different target, see <Link href="/procedures/radiofrequency-ablation" className="font-semibold text-[#806207] underline decoration-[#c8a020] underline-offset-4 hover:text-[#594507]">medial branch radiofrequency ablation</Link>.</p>
        </div>
      </div>
    </section>

    <section className="border-b border-[#e5e5e0] bg-white px-5 py-14 sm:px-6 md:py-16" aria-labelledby="bvna-sources">
      <div className="mx-auto max-w-6xl">
        <h2 id="bvna-sources" className="text-2xl font-bold text-[#111]" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Sources and further reading</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#555]">Device safety labeling and long-term clinical evidence inform this overview. Study results describe groups and do not establish an individual&rsquo;s outcome.</p>
        <ol className="mt-5 grid grid-cols-1 gap-3 text-sm leading-relaxed md:grid-cols-2">
          {sources.map(([label, href]) => <li key={href}><a href={href} target="_blank" rel="noopener noreferrer" className="text-[#806207] underline decoration-[#c8a020] underline-offset-4 hover:text-[#594507] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c8a020]">{label}<span className="sr-only"> (opens in a new tab)</span></a></li>)}
        </ol>
      </div>
    </section>
  </>;
}
