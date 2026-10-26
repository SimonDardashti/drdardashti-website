import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

const SITE_URL = "https://www.drdardashti.com";
const PAGE_URL = `${SITE_URL}/procedures/genicular-nerve-block`;
const title = "Genicular Nerve Block for Knee Pain | Simon Dardashti, MD";
const description = "Understand genicular nerve blocks for selected knee pain: diagnostic and therapeutic uses, how they differ from ablation, potential benefits, limitations, and risks.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: PAGE_URL },
  openGraph: { type: "website", title, description, url: PAGE_URL, images: [{ url: "/images/procedures/genicular-nerve-block-concept.webp", width: 1536, height: 1024, alt: "Educational illustration of sensory nerve regions around the knee" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/images/procedures/genicular-nerve-block-concept.webp"] },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: title,
  description,
  url: PAGE_URL,
  inLanguage: "en",
  about: { "@type": "MedicalProcedure", name: "Genicular nerve block" },
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Procedures", item: `${SITE_URL}/procedures` },
      { "@type": "ListItem", position: 3, name: "Genicular nerve block", item: PAGE_URL },
    ],
  },
};

const sections = [
  { number: "01", title: "Who may be considered?", text: "A block may be considered for persistent knee pain, including osteoarthritis, after evaluation and nonsurgical care. Pain after knee surgery needs assessment for a treatable cause before considering a block. It does not repair cartilage, correct a mechanical problem, or replace rehabilitation or indicated surgery." },
  { number: "02", title: "A block is not ablation", text: "A diagnostic block uses local anesthetic to assess temporary pain relief. A therapeutic block aims to ease symptoms; some use a corticosteroid as well. Genicular radiofrequency ablation is a separate procedure that uses heat to interrupt nerve signals. A helpful block may inform that discussion, but does not guarantee ablation will work." },
  { number: "03", title: "What happens?", text: "The clinician reviews the pain pattern, prior care, medicines, allergies, and relevant imaging. Using ultrasound or X-ray guidance, small injections are placed near selected nerves around the knee. These injections target nerves, rather than the inside of the joint. You may be asked to record pain and function afterwards in a diary." },
  { number: "04", title: "Potential benefit and limitations", text: "A placebo-controlled trial in knee osteoarthritis found short-term improvement after a block containing anesthetic and steroid, with benefit diminishing over time. That study does not establish lasting relief, results for every cause of knee pain, or the effect of an anesthetic-only diagnostic block. Relief may be brief, incomplete, or absent." },
  { number: "05", title: "Risks and preparation", text: "Risks include soreness, increased pain, bruising, bleeding, infection, allergic reactions, and temporary numbness or unsteadiness. Persistent nerve problems are possible. Discuss blood thinners, diabetes, infection, allergies, and possible pregnancy with the team. Do not stop prescribed medicines on your own. Follow individualized instructions for transport, activity, and follow-up." },
  { number: "06", title: "Other options and questions", text: "Exercise-based rehabilitation, activity changes, medication, joint injections, and orthopedic evaluation may be options depending on the diagnosis. Ask: What is causing my pain? Is this block diagnostic or therapeutic? What medicine is planned? How should I measure the response, and what would the next step be?" },
];

const commonQuestions = [
  { question: "Will it hurt? Do I have to be asleep?", answer: "Skin numbing can reduce discomfort, but a brief sting or pressure is possible. Sedation is not always needed. Tell the team if you feel anxious and ask what is planned for your block." },
  { question: "How soon will I know whether it helped?", answer: "A diagnostic block is assessed while the local anesthetic is working. Record pain and the activities your team recommends. The timing and duration depend on the medicine; do not assume lasting relief from an early response." },
  { question: "Does a successful block mean I need ablation?", answer: "No. A response can inform a separate discussion about genicular radiofrequency ablation, alternatives, risks, and your goals. A block does not commit you to another procedure or guarantee its outcome." },
  { question: "Will my knee be numb or weak? Can I walk?", answer: "Temporary numbness or unsteadiness can occur. Ask the team to check that you can walk safely before leaving, and follow their activity instructions. Do not push through weakness or reduced sensation." },
  { question: "Can I drive myself home?", answer: "Arrange transport according to your clinic’s instructions. Do not drive while sedated, numb, weak, or unsteady. Ask in advance when driving, work, and usual activities can safely resume for you." },
  { question: "Should I stop medicines or fast beforehand?", answer: "Tell the team about blood thinners, diabetes medicines, allergies, and all other treatments. Follow their specific medication and fasting instructions; do not stop prescribed medicines or assume fasting is required on your own." },
  { question: "Can it help after a knee replacement?", answer: "It may be discussed for selected patients, but persistent pain after surgery needs evaluation for its cause first. A block does not correct an implant problem or replace assessment by your surgical team." },
  { question: "What if it does not help, or the pain comes back?", answer: "That is useful information for follow-up, not a reason to keep repeating injections automatically. Review the pain diary and diagnosis with your clinician and discuss rehabilitation, other treatments, or further evaluation." },
  { question: "What symptoms should I report afterwards?", answer: "Contact the treating team promptly for new or worsening weakness, persistent numbness, increasing pain, or signs of infection such as redness, swelling, or fever. Breathing difficulty or a severe allergic reaction requires emergency care." },
  { question: "Will insurance cover it?", answer: "Coverage and out-of-pocket costs depend on your plan and the proposed procedure. Ask the office and insurer about authorization and a written estimate before scheduling." },
];

const sources = [
  { label: "Royal Cornwall Hospitals NHS Trust — Genicular nerve block: patient information (2025)", href: "https://doclibrary-rcht.cornwall.nhs.uk/DocumentsLibrary/RoyalCornwallHospitalsTrust/PatientInformation/Pain/RCHT3080GenicularNerveBlock.pdf" },
  { label: "Shanahan et al. — Genicular Nerve Block for Pain Management in Patients With Knee Osteoarthritis: A Randomized Placebo-Controlled Trial. Arthritis & Rheumatology (2023); DOI: 10.1002/art.42384", href: "https://pubmed.ncbi.nlm.nih.gov/36369781/" },
];

export default function GenicularNerveBlockPage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
    <section className="border-b border-[#1a1a1a] bg-[#0a0a0a] px-6 py-16 text-white md:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-6">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c8a020]">Patient Education · Knee Pain</p>
        <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Genicular Nerve Block.{" "}<br/><span className="text-[#c8a020]">A targeted approach to knee pain.</span></h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#d1d1cd]">A genicular nerve block places medicine near small nerves carrying pain signals from the knee. It may help evaluate pain or provide temporary symptom relief.</p>
        <a href="#common-questions" className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-[#f1cf68] underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f1cf68]">Common questions and patient concerns</a>
        </div>
        <figure className="md:col-span-6">
          <div className="overflow-hidden border border-[#393939] bg-[#faf7f0]">
            <Image src="/images/procedures/genicular-nerve-block-concept.webp" alt="Conceptual front view of a knee with the femur, patella, tibia, and sensory nerve branches labeled. Highlighted regions lie around the knee rather than inside the joint." width={1536} height={1024} preload unoptimized className="h-auto w-full" />
          </div>
          <figcaption className="mt-3 text-xs leading-relaxed text-[#aaa]">Educational illustration. Gold highlights represent sensory nerve regions, not heat. Anatomy is simplified and not to scale; this is not a needle-placement guide.</figcaption>
          <a href="/images/procedures/genicular-nerve-block-concept.webp" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-11 items-center text-sm text-[#f1cf68] underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f1cf68]">View full-size illustration<span className="sr-only"> (opens in a new tab)</span></a>
        </figure>
      </div>
    </section>
    <div className="border-b border-[#e5e5e0] bg-white px-6 py-7">
      <p className="mx-auto max-w-5xl border-l-2 border-[#c8a020] pl-5 text-sm leading-relaxed text-[#555]">The purpose matters: a diagnostic block, therapeutic injection, and radiofrequency ablation are different treatments. This guide is general education, not a determination that a procedure is right for you.</p>
    </div>
    {sections.map((section, index) => <section key={section.number} className={`border-b border-[#e5e5e0] px-6 py-12 md:py-16 ${index % 2 === 0 ? "bg-[#f9f7f4]" : "bg-white"}`}>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-4">
          <span aria-hidden="true" className="text-4xl font-bold text-[#d8d4cc]" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>{section.number}</span>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-[#111]" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>{section.title}</h2>
        </div>
        <p className="text-base leading-relaxed text-[#555] md:col-span-8 md:pt-2">{section.text}</p>
      </div>
    </section>)}
    <section id="common-questions" className="scroll-mt-28 border-b border-[#e5e5e0] bg-[#f9f7f4] px-6 py-12 md:py-16" aria-labelledby="common-questions-heading">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#806207]">Before you decide</p>
        <h2 id="common-questions-heading" className="mt-3 text-3xl font-bold text-[#111]" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Common questions and patient concerns</h2>
        <div className="mt-7 divide-y divide-[#e5e5e0] border-y border-[#e5e5e0]">
          {commonQuestions.map((item, index) => <details key={item.question} open={index === 0} className="group py-5">
            <summary className="cursor-pointer text-base font-semibold leading-relaxed text-[#111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#806207]">{item.question}</summary>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#555]">{item.answer}</p>
          </details>)}
        </div>
      </div>
    </section>
    <section className="bg-white px-6 py-12 md:py-16" aria-labelledby="genicular-sources">
      <div className="mx-auto max-w-5xl">
        <h2 id="genicular-sources" className="text-2xl font-bold text-[#111]" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Sources and further reading</h2>
        <ul className="mt-5 grid grid-cols-1 gap-4 text-sm leading-relaxed md:grid-cols-2">
          {sources.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noopener noreferrer" className="text-[#806207] underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#806207]">{source.label}<span className="sr-only"> (opens in a new tab)</span></a></li>)}
        </ul>
        <p className="mt-8 text-sm text-[#555]">Related guides: <Link href="/conditions/joint-pain" className="text-[#806207] underline underline-offset-4">joint pain evaluation</Link>, <Link href="/procedures/peripheral-nerve-blocks" className="text-[#806207] underline underline-offset-4">peripheral nerve blocks</Link>, and <Link href="/conservative-care" className="text-[#806207] underline underline-offset-4">conservative care</Link>.</p>
      </div>
    </section>
  </>;
}
