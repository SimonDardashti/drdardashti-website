import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://www.drdardashti.com";
const PAGE_URL = `${SITE_URL}/conditions/peripheral-neuropathy`;
const title = "Peripheral Neuropathy & Walkasins for Balance | Simon Dardashti, MD";
const description = "Understand peripheral neuropathy, numb feet and balance problems, plus how Walkasins sensory feedback works, who may qualify, and what the research does not prove.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: PAGE_URL },
  openGraph: { type: "website", title, description, url: PAGE_URL },
  twitter: { card: "summary", title, description },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: title,
  description,
  url: PAGE_URL,
  inLanguage: "en",
  about: { "@type": "MedicalCondition", name: "Peripheral neuropathy" },
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Conditions", item: `${SITE_URL}/conditions` },
      { "@type": "ListItem", position: 3, name: "Peripheral neuropathy", item: PAGE_URL },
    ],
  },
};

const questions = [
  { question: "Can neuropathy cause numbness without pain?", answer: "Yes. Reduced sensation and balance difficulty can occur without burning pain. Numb feet still need evaluation and protection from unnoticed injuries." },
  { question: "Is Walkasins an electrical nerve stimulator?", answer: "No. It provides mechanical vibration cues on the lower leg. It is not TENS, an implanted peripheral nerve stimulator, or spinal cord stimulation." },
  { question: "Will it cure neuropathy or relieve burning feet?", answer: "It is intended to help compensate for missing sensory information used in balance. It does not repair damaged nerves. The cited study did not show a significant overall reduction in pain; it should not be presented as a proven pain treatment." },
  { question: "What if I cannot feel the device above my ankle?", answer: "Being able to perceive its cues is part of the indication. A clinician must test this; having numb feet alone does not establish suitability." },
  { question: "Can I stop using my cane, walker, or physical therapy?", answer: "Do not stop prescribed supports or rehabilitation on your own. A wearable device does not remove fall risk; mobility recommendations need individual assessment." },
  { question: "Does it require surgery?", answer: "No implant or surgery is involved. The prescription system requires appropriate fitting, instruction, and follow-up." },
  { question: "Will insurance cover it, and where can I get it?", answer: "Ask your clinician whether a device evaluation or referral is appropriate and where fitting can be arranged. Confirm availability, plan-specific coverage, and a written cost estimate with the prescribing team and insurer before proceeding." },
  { question: "What should I ask at an appointment?", answer: "Ask what is causing the neuropathy, whether pain and balance need different treatments, how benefit would be measured, and what the plan would be if the device does not help." },
];

const sources = [
  { href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7680959/", label: "Oddsson et al. — walk2Wellness trial, 10-week outcomes. Frontiers in Aging Neuroscience (2020), 12:592751. DOI: 10.3389/fnagi.2020.592751." },
  { href: "https://rxfunction.com/safety-information/", label: "RxFunction — Walkasins indications, contraindications, warnings, and skin-care precautions. Manufacturer safety information, not independent efficacy evidence." },
];

const headingStyle = { fontFamily: "var(--font-playfair), Georgia, serif" };
const linkStyle = "inline-flex min-h-11 items-center text-sm font-semibold underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4";

export default function PeripheralNeuropathyPage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
    <section className="border-b border-[#1a1a1a] bg-[#0a0a0a] px-6 py-16 text-white md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c8a020]">Patient Education · Sensation & Balance</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl" style={headingStyle}>Peripheral Neuropathy.<br /><span className="text-[#c8a020]">Pain, numbness, and finding your footing.</span></h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#d1d1cd]">Nerve damage can affect how your feet feel and how steadily you walk. Understanding the cause comes first; treating pain and improving balance are different goals.</p>
        <nav aria-label="On this page" className="mt-6 flex flex-wrap gap-x-7 gap-y-2 text-[#f1cf68]">
          <a href="#understanding-neuropathy" className={linkStyle}>Understanding neuropathy</a>
          <a href="#walkasins" className={linkStyle}>Walkasins & the evidence</a>
          <a href="#common-questions" className={linkStyle}>Common questions</a>
        </nav>
      </div>
    </section>

    <section id="understanding-neuropathy" className="scroll-mt-28 border-b border-[#e5e5e0] bg-[#f9f7f4] px-6 py-12 md:py-16">
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-[#111]" style={headingStyle}>What is peripheral neuropathy?</h2>
          <p className="mt-5 leading-relaxed text-[#555]">Peripheral neuropathy means damage to nerves outside the brain and spinal cord. Symptoms can include burning, tingling, numbness, weakness, or difficulty sensing foot position. Causes include diabetes, some cancer treatments, nutritional problems, and other illnesses; sometimes no cause is identified.</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-[#111]" style={headingStyle}>Why does balance change?</h2>
          <p className="mt-5 leading-relaxed text-[#555]">Reduced sensation can make it harder to judge contact with the ground. Pain intensity alone does not measure fall risk. Evaluation may include sensation, strength, walking, medication review, and tests selected for the suspected cause. Foot protection, treatment of the cause, rehabilitation, and appropriate mobility aids remain important.</p>
          <p className="mt-4 leading-relaxed text-[#555]">Seek prompt assessment for new weakness, rapid progression, falls, or a foot wound. Sudden one-sided weakness or breathing difficulty needs emergency care.</p>
        </div>
      </div>
    </section>

    <section id="walkasins" className="scroll-mt-28 border-b border-[#e5e5e0] bg-white px-6 py-12 md:py-16" aria-labelledby="walkasins-heading">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#806207]">A wearable sensory prosthesis</p>
        <h2 id="walkasins-heading" className="mt-3 text-3xl font-bold text-[#111]" style={headingStyle}>What is Walkasins?</h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-[#555]">Walkasins, made by RxFunction, is a prescription system worn outside the body. A shoe insert detects pressure changes; a connected module provides gentle vibration cues above the ankle, where the wearer must still be able to feel them.</p>
        <figure className="mt-8 border border-[#ded8ca] bg-[#faf7f0] p-6 md:p-8">
          <figcaption className="text-sm font-semibold text-[#675321]">How sensory feedback works · simplified concept</figcaption>
          <ol className="mt-5 grid gap-5 md:grid-cols-3">
            {[
              { label: "01 · Foot pressure", text: "A sensor insert measures pressure inside the shoe." },
              { label: "02 · Lower-leg cues", text: "The wearable module translates measurements into vibration cues." },
              { label: "03 · Sensory information", text: "The nervous system can use the cues during standing and walking." },
            ].map((step) => <li key={step.label} className="border-l-2 border-[#b28c24] pl-4"><h3 className="font-semibold text-[#111]">{step.label}</h3><p className="mt-2 text-sm leading-relaxed text-[#555]">{step.text}</p></li>)}
          </ol>
          <p className="mt-5 text-xs leading-relaxed text-[#666]">Educational explanation, not a photograph or fitting guide. The device does not restore normal foot sensation or repair nerves.</p>
        </figure>
        <div className="mt-9 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold text-[#111]" style={headingStyle}>Who might be considered?</h3>
            <p className="mt-4 leading-relaxed text-[#555]">People with lower-limb sensory neuropathy and impaired walking or balance who can feel the module’s cues. Diagnosis, skin condition, circulation, fit, and walking ability need assessment; not everyone with neuropathy is a candidate.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#111]" style={headingStyle}>Who should not use it?</h3>
            <p className="mt-4 leading-relaxed text-[#555]">Manufacturer contraindications include untreated lymphedema; untreated skin lesions, swelling, infection, or inflammation near use; acute thrombophlebitis or deep-vein thrombosis; untreated foot or ankle fractures; and severe peripheral vascular disease. Review the complete safety information with the prescribing team.</p>
          </div>
        </div>
        <p className="mt-8 border-l-2 border-[#b28c24] pl-5 leading-relaxed text-[#555]">It cannot prevent falls. Do not rely on it alone for balance. Skin irritation or injury can occur, especially with poor fit; inspect the feet and lower legs and follow the prescribed instructions.</p>
      </div>
    </section>

    <section className="border-b border-[#e5e5e0] bg-[#f9f7f4] px-6 py-12 md:py-16" aria-labelledby="evidence-heading">
      <div className="mx-auto max-w-5xl">
        <h2 id="evidence-heading" className="text-3xl font-bold text-[#111]" style={headingStyle}>What does the walk2Wellness study show?</h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-[#555]">The 2020 walk2Wellness study enrolled 52 people with sensory neuropathy and high fall risk; 45 completed 10-week assessments. Several walking and balance measures improved, but not every measure did.</p>
        <p className="mt-4 max-w-3xl leading-relaxed text-[#555]">This was an unblinded, single-arm study without a concurrent control group, funded by RxFunction; some authors had manufacturer affiliations. It cannot establish how much improvement was caused by the device, guarantee fall prevention, or demonstrate a neuropathy cure. Overall pain scores did not significantly improve. The findings support further study, not a promise of individual benefit.</p>
        <p className="mt-4 max-w-3xl leading-relaxed text-[#555]">A balance device and a pain treatment answer different questions. Discuss rehabilitation, underlying-cause treatment, foot care, and symptom management alongside any device evaluation.</p>
      </div>
    </section>

    <section id="common-questions" className="scroll-mt-28 border-b border-[#e5e5e0] bg-white px-6 py-12 md:py-16" aria-labelledby="questions-heading">
      <div className="mx-auto max-w-5xl">
        <h2 id="questions-heading" className="text-3xl font-bold text-[#111]" style={headingStyle}>Common questions & patient concerns</h2>
        <div className="mt-7 divide-y divide-[#e5e5e0] border-y border-[#e5e5e0]">
          {questions.map((item, index) => <details key={item.question} open={index === 0} className="py-5">
            <summary className="cursor-pointer font-semibold leading-relaxed text-[#111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#806207]">{item.question}</summary>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#555]">{item.answer}</p>
          </details>)}
        </div>
      </div>
    </section>

    <section className="bg-[#f9f7f4] px-6 py-12 md:py-16" aria-labelledby="neuropathy-sources">
      <div className="mx-auto max-w-5xl">
        <h2 id="neuropathy-sources" className="text-2xl font-bold text-[#111]" style={headingStyle}>Two key references</h2>
        <ul className="mt-5 grid gap-5 text-sm leading-relaxed md:grid-cols-2">
          {sources.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noopener noreferrer" className="text-[#806207] underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">{source.label}<span className="sr-only"> (opens in a new tab)</span></a></li>)}
        </ul>
        <p className="mt-8 text-sm leading-relaxed text-[#555]">Related guides: <Link href="/conditions/neuropathic-pain" className="text-[#806207] underline underline-offset-4">neuropathic pain</Link>, <Link href="/conditions/peripheral-nerve-pain" className="text-[#806207] underline underline-offset-4">peripheral nerve pain</Link>, and <Link href="/conservative-care" className="text-[#806207] underline underline-offset-4">rehabilitation and conservative care</Link>.</p>
      </div>
    </section>
  </>;
}
