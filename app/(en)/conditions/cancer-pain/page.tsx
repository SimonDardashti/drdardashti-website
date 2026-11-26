import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://www.drdardashti.com";
const PAGE_URL = `${SITE_URL}/conditions/cancer-pain`;
const title = "Cancer Pain: Bone, Organ & Nerve Pain | Simon Dardashti, MD";
const description = "Learn how cancer and metastases can cause bone, organ, and nerve pain, when to get urgent help, and how oncology, palliative care, and hospice coordinate pain care.";

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
  about: { "@type": "MedicalCondition", name: "Cancer-related pain" },
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Conditions", item: `${SITE_URL}/conditions` },
      { "@type": "ListItem", position: 3, name: "Cancer pain", item: PAGE_URL },
    ],
  },
};

const headingStyle = { fontFamily: "var(--font-playfair), Georgia, serif" };
const sectionClass = "scroll-mt-28 border-b border-[#e5e5e0] px-6 py-12 md:py-16";
const linkClass = "underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4";
const sources = [
  { label: "National Cancer Institute · Cancer Pain (PDQ)", href: "https://www.cancer.gov/about-cancer/treatment/side-effects/pain/pain-hp-pdq" },
  { label: "ASTRO · Radiation therapy for symptomatic bone metastases", href: "https://pubmed.ncbi.nlm.nih.gov/38788923/" },
  { label: "ASCO · Chemotherapy-induced peripheral neuropathy guideline", href: "https://ascopubs.org/doi/abs/10.1200/JCO.20.01399" },
  { label: "National Cancer Institute · Palliative care in cancer", href: "https://www.cancer.gov/about-cancer/advanced-cancer/care-choices/palliative-care-fact-sheet" },
];

export default function CancerPainPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <section className="border-b border-[#1a1a1a] bg-[#0a0a0a] px-6 py-16 text-white md:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#e3bd59]">Patient Education</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl" style={headingStyle}>Cancer pain</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#deded8]">
            Cancer and its treatment can affect bones, internal organs, and nerves. Identifying the cause helps your team choose treatment and balance pain relief with what matters to you, such as staying alert, moving more easily, or spending time at home.
          </p>
          <nav aria-label="On this page" className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-sm font-semibold text-[#f1cf68]">
            {[
              ["urgent-help", "When to get urgent help"],
              ["bone-metastases", "Bone metastases"],
              ["visceral-pain", "Organ pain"],
              ["nerve-pain", "Nerve pain medicines"],
              ["goals-of-care", "Goals of care"],
            ].map(([id, label]) => (
              <a key={id} href={`#${id}`} className={`inline-flex min-h-11 items-center ${linkClass}`}>{label}</a>
            ))}
          </nav>
        </div>
      </section>

      <section id="urgent-help" className={`${sectionClass} bg-[#f9f7f4]`} aria-labelledby="urgent-heading">
        <div className="mx-auto max-w-5xl border-l-4 border-[#9d452c] bg-white p-5 sm:p-7">
          <h2 id="urgent-heading" className="text-2xl font-bold text-[#111]" style={headingStyle}>When to get urgent help</h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 leading-relaxed text-[#444]">
            <li><strong>Get emergency help now</strong> if you have or have had cancer and develop new arm or leg weakness, trouble walking, new numbness with back or neck pain, or new trouble passing urine or controlling your bladder or bowels. These can be signs of pressure on the spinal cord or its nerves. Call 911 if you cannot safely reach an emergency department.</li>
            <li><strong>Seek immediate medical attention</strong> for sudden severe bone pain with inability to bear weight or use a limb, or for severe belly pain with repeated vomiting, a swollen belly, or inability to pass stool or gas. A fracture or bowel blockage may need urgent treatment.</li>
            <li><strong>Call your cancer team today</strong> for new or worsening back or neck pain, particularly if it wakes you at night or worsens as you move.</li>
          </ul>
          <p className="mt-4 leading-relaxed text-[#444]">If you are enrolled in hospice, follow your emergency care plan and use the hospice team’s 24-hour number for immediate guidance.</p>
          <p className="mt-4 text-sm text-[#555]">
            <a className={linkClass} href="https://www.nice.org.uk/guidance/ng234/resources/metastatic-spinal-cord-compression-initial-assessment-and-management-pdf-13134700768">Spinal cord compression guidance</a>
            {" · "}
            <a className={linkClass} href="https://www.cancer.gov/about-cancer/treatment/side-effects/bowel-obstruction">Bowel obstruction guidance</a>
          </p>
        </div>
      </section>

      <section className={`${sectionClass} bg-white`} aria-labelledby="pain-types-heading">
        <div className="mx-auto max-w-5xl">
          <h2 id="pain-types-heading" className="text-3xl font-bold text-[#111]" style={headingStyle}>Where cancer pain can come from</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-[#555]">Metastasis means cancer has spread from where it started. Pain may come from the cancer itself, the effects of treatment, or another health condition. A person can have more than one kind of pain at the same time. Tell your team when pain is new or changes.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article id="bone-metastases" className="scroll-mt-28 border border-[#e5e5e0] bg-[#f9f7f4] p-6">
              <h3 className="text-2xl font-bold text-[#111]" style={headingStyle}>Bone pain and bone metastases</h3>
              <p className="mt-4 leading-relaxed text-[#555]">Cancer that spreads to bone can cause a deep ache or pain with movement or weight-bearing. It may weaken a bone and increase fracture risk. When it affects the spine, the team may check whether the spine is stable and whether nerves are under pressure.</p>
              <p className="mt-4 leading-relaxed text-[#555]">Radiation can relieve pain from selected bone metastases. If a bone is weakened or broken, surgery or stabilization may be considered. Oncology may also discuss cancer treatment or medicines that reduce the risk of bone complications in selected patients.</p>
            </article>
            <article id="visceral-pain" className="scroll-mt-28 border border-[#e5e5e0] bg-[#f9f7f4] p-6">
              <h3 className="text-2xl font-bold text-[#111]" style={headingStyle}>Visceral pain and organ metastases</h3>
              <p className="mt-4 leading-relaxed text-[#555]">Visceral pain comes from internal organs. A tumor that starts in or spreads to an organ can cause pain by stretching its outer covering or pressing on nearby structures. A tumor can also block a passage such as the bowel. The pain may feel deep, crampy, or harder to pinpoint.</p>
              <p className="mt-4 leading-relaxed text-[#555]">Treatment depends on what is causing the pain. Your team may treat a blockage, consider cancer-directed treatment, or use pain medicine to improve comfort. Moderate to severe cancer pain may need a closely monitored opioid plan.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="nerve-pain" className={`${sectionClass} bg-[#f9f7f4]`} aria-labelledby="nerve-heading">
        <div className="mx-auto max-w-5xl">
          <h2 id="nerve-heading" className="text-3xl font-bold text-[#111]" style={headingStyle}>When nerve pain medicines may help</h2>
          <div className="mt-4 max-w-3xl space-y-4 leading-relaxed text-[#555]">
            <p>A tumor can press on or grow into a nerve. Some cancer treatments can also damage nerves. Nerve pain may feel burning, shooting, or electric. Tingling, numbness, or sensitivity to light touch can occur. Treating nerve pressure or another underlying cause may be just as important as pain relief.</p>
            <p><strong>Gabapentin or pregabalin</strong> may be considered for selected cancer-related nerve pain. For <strong>painful neuropathy caused by chemotherapy</strong>, evidence supports considering duloxetine, although the benefit can be modest. New symptoms during chemotherapy should be reported to oncology because they may affect the treatment plan.</p>
            <p>Have your team review kidney or liver function, other medicines, and side effects that could affect balance or alertness. Gabapentin and pregabalin can cause dizziness or sleepiness. Serious breathing problems are possible when they are combined with opioids or other sedating medicines, especially in people with breathing risk factors.</p>
          </div>
          <p className="mt-5 text-sm text-[#555]">
            <a className={linkClass} href="https://www.fda.gov/safety/medical-product-safety-information/neurontin-gralise-horizant-gabapentin-and-lyrica-lyrica-cr-pregabalin-drug-safety-communication">FDA medication safety information</a>
            {" · "}
            <Link href="/conditions/peripheral-neuropathy" className={linkClass}>Peripheral neuropathy guide</Link>
          </p>
        </div>
      </section>

      <section id="goals-of-care" className={`${sectionClass} bg-white`} aria-labelledby="goals-heading">
        <div className="mx-auto max-w-5xl">
          <h2 id="goals-heading" className="text-3xl font-bold text-[#111]" style={headingStyle}>How your teams can work together</h2>
          <div className="mt-4 max-w-3xl space-y-4 leading-relaxed text-[#555]">
            <p><strong>Oncology</strong> evaluates new pain, checks for cancer or treatment complications, and coordinates cancer-directed options. A <strong>pain specialist</strong> can help identify overlapping pain sources and discuss selected interventions with the treating team.</p>
            <p><strong>Palliative care</strong> can begin alongside cancer treatment. It helps with pain and other symptoms, supports caregivers, and can help you talk through choices as your priorities change.</p>
            <p><strong>Hospice</strong> provides end-of-life care focused on comfort and quality of life when eligible patients choose that approach. Ask how the hospice team would handle pain at home, what services it can arrange, and whom to call after hours.</p>
            <p>Ask for one written plan that names who is coordinating your care, who manages each medicine, and when the team will check whether the plan is working. Share it with the people you want involved in your care.</p>
          </div>
          <div className="mt-7 border border-[#e5e5e0] bg-[#f9f7f4] p-6">
            <h3 className="text-xl font-bold text-[#111]" style={headingStyle}>Questions to bring to a goals-of-care visit</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-[#555]">
              <li>What is most important to me now, such as sleeping better, walking to the bathroom, or staying alert with family?</li>
              <li>What relief might each treatment provide, how soon might it help, and what side effects or trips to the clinic are likely?</li>
              <li>Who manages my pain medicines? What is the plan for a pain flare, trouble swallowing pills, or symptoms after hours?</li>
              <li>If I want to focus on comfort at home, what can palliative care or hospice arrange for me and my caregivers?</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-[#f9f7f4]`} aria-labelledby="cancer-pain-sources">
        <div className="mx-auto max-w-5xl">
          <h2 id="cancer-pain-sources" className="text-2xl font-bold text-[#111]" style={headingStyle}>Sources and further reading</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#555]">
            {sources.map(({ label, href }) => <li key={href}><a href={href} className={linkClass}>{label}</a></li>)}
          </ul>
        </div>
      </section>
    </>
  );
}
