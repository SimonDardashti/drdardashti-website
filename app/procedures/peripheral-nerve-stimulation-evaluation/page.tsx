import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://www.drdardashti.com/procedures/peripheral-nerve-stimulation-evaluation";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Peripheral Nerve Stimulation Evaluation | Simon Dardashti, MD" },
  description:
    "Educational information about peripheral nerve stimulation evaluation, including how this advanced pain treatment option is assessed and considered for selected patients.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Peripheral Nerve Stimulation Evaluation | Simon Dardashti, MD",
    description:
      "Educational information about peripheral nerve stimulation evaluation, including how this advanced pain treatment option is assessed and considered for selected patients.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peripheral Nerve Stimulation Evaluation | Simon Dardashti, MD",
    description:
      "Educational information about peripheral nerve stimulation evaluation, including how this advanced pain treatment option is assessed and considered for selected patients.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Peripheral Nerve Stimulation Evaluation | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Educational information about peripheral nerve stimulation evaluation, including how this advanced pain treatment option is assessed and considered for selected patients.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  about: {
    "@type": "MedicalProcedure",
    name: "Peripheral Nerve Stimulation Evaluation",
    procedureType: "https://schema.org/TherapeuticProcedure",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Procedures & Treatment Options", item: `${SITE_URL}/procedures` },
      { "@type": "ListItem", position: 3, name: "Peripheral Nerve Stimulation Evaluation", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "What it is",
    body: "An evaluation to determine whether peripheral nerve stimulation (PNS) — an implantable device that delivers electrical stimulation to peripheral nerves — may be appropriate for chronic pain management.",
  },
  {
    heading: "When it may be considered",
    body: "In selected patients with chronic peripheral nerve pain that has not responded adequately to conservative treatment and other interventional options, after comprehensive clinical evaluation.",
  },
  {
    heading: "What to expect",
    body: "The evaluation includes a thorough history, physical examination, review of prior treatments, and discussion of potential benefits and limitations. If appropriate, a trial of temporary nerve stimulation may be offered to assess response before considering implantation.",
  },
];

const faqs = [
  {
    q: "What is peripheral nerve stimulation?",
    a: "Peripheral nerve stimulation (PNS) is an implantable device-based treatment where a small electrode is placed near the peripheral nerve causing pain, and a small generator delivers electrical stimulation to that nerve. The stimulation may interfere with pain signals or modulate pain perception.",
  },
  {
    q: "How is peripheral nerve stimulation different from spinal cord stimulation?",
    a: "Both are neuromodulation treatments using electrical stimulation to address pain. Spinal cord stimulation targets nerves in the spinal cord, while peripheral nerve stimulation targets specific peripheral nerves in the periphery. The choice between them depends on the pain condition and location.",
  },
  {
    q: "What does a trial consist of?",
    a: "A trial (also called a screening or evaluation) typically involves percutaneous placement of a temporary electrode near the target nerve. The patient tests the stimulation for several days to a week to assess whether it provides adequate pain relief. If successful, a permanent system may then be considered.",
  },
  {
    q: "How is the device controlled?",
    a: "Once implanted, the peripheral nerve stimulation system includes a small generator implanted under the skin and a remote control that allows the patient to adjust stimulation settings. Patients learn to control the device to optimize pain relief.",
  },
  {
    q: "Is implantation required?",
    a: "A trial does not require implantation — it uses temporary leads. If the trial is successful and both patient and physician agree that implantation is appropriate, then a permanent system can be surgically implanted. Not all patients proceed to implantation.",
  },
  {
    q: "What are the limitations?",
    a: "Peripheral nerve stimulation does not cure the underlying condition. Response varies widely and cannot be predicted before trial. The device requires programming and maintenance. Long-term effectiveness data is still developing for many indications.",
  },
];

export default function PeripheralNerveStimulationEvaluationPage() {
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
            Peripheral Nerve Stimulation
            <br />
            <em className="not-italic text-[#888]">Evaluation.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Peripheral nerve stimulation is an advanced pain management option for selected
            patients with chronic peripheral nerve pain. A thorough evaluation is required to
            determine whether peripheral nerve stimulation is appropriate for any individual patient.
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

      {/* SECTION 1 — What Is Peripheral Nerve Stimulation? */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>01</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Overview</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              What Is Peripheral Nerve Stimulation?
            </h2>
            <p>
              Peripheral nerve stimulation (PNS) is a neuromodulation treatment where an
              electrode is placed near a peripheral nerve, and a small implantable generator
              delivers electrical pulses to that nerve. The stimulation is thought to interfere
              with pain signal transmission or modulate pain perception.
            </p>
            <p>
              PNS systems consist of an implanted generator (power source) placed under the skin,
              electrodes that contact the nerve, and a remote control that allows the patient to
              adjust stimulation parameters. The system can be programmed and adjusted to optimize
              pain relief for the individual patient.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — When PNS Evaluation May Be Appropriate */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>02</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Indications</p>
          </div>
          <div className="md:col-span-10">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              When PNS Evaluation May Be Appropriate.
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              Peripheral nerve stimulation evaluation may be considered for selected patients with:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Chronic peripheral nerve pain that has not responded to conservative treatment",
                "Pain in the distribution of a specific peripheral nerve",
                "Inadequate response to medications and other interventional procedures",
                "Conditions where other advanced pain management options have been exhausted or are not appropriate",
                "Strong motivation to pursue advanced pain management and willingness to participate in trial and potential implantation",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm mt-6 max-w-2xl">
              Comprehensive clinical evaluation is required to determine candidacy for PNS.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — The Evaluation Process */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>03</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Evaluation</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              The Peripheral Nerve Stimulation Evaluation.
            </h2>
            <p>
              The evaluation begins with a comprehensive history including the character of
              pain, duration, location, prior treatments, response to medications and prior
              procedures, and impact on function. Physical examination helps identify the
              specific nerve(s) responsible for pain.
            </p>
            <p>
              Imaging and prior diagnostic testing results are reviewed. The physician assesses
              whether the patient is a candidate for PNS and discusses potential benefits and
              limitations. If appropriate, a trial may be offered to test whether PNS provides
              adequate pain relief before considering implantation.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Trial and Implantation Consideration */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>04</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Trial &amp; Implant</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Trial Period and Implantation Consideration.
            </h2>
            <p>
              If evaluation suggests PNS may be beneficial, a trial period may be recommended.
              During trial, a temporary electrode is percutaneously placed near the target nerve,
              connected to an external generator. The patient tests stimulation at home for
              several days to assess pain relief. A successful trial (typically defined as 50%
              or greater pain relief) suggests candidacy for permanent implantation.
            </p>
            <p>
              If the trial is successful and the patient wishes to proceed, permanent
              implantation of the PNS system is a surgical procedure. Not all patients who
              undergo trial proceed to implantation — some may decline after trial or may not
              meet implantation criteria.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-[#999] uppercase tracking-widest mb-2">Questions</p>
          <h2
            className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-10"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Frequently Asked Questions.
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white p-6 border border-[#e5e5e0]">
                <h3 className="font-bold text-[#0a0a0a] text-base mb-3">{faq.q}</h3>
                <p className="text-[#555] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
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
              Peripheral nerve stimulation does not cure the underlying condition causing nerve
              pain. Response to PNS varies widely and cannot be predicted in advance. Some
              patients experience significant pain relief while others experience minimal relief.
              Long-term effectiveness data is still developing for many indications.
            </p>
            <p>
              Implantation of a PNS system is a surgical procedure carrying surgical risks.
              The device requires ongoing management including programming, battery monitoring,
              and potential replacement. Insurance coverage for PNS varies; some plans may not
              cover the procedure or may have specific coverage criteria.
            </p>
            <p>
              A comprehensive clinical evaluation is required to determine whether peripheral
              nerve stimulation evaluation is appropriate for any individual patient. This page
              is for general informational purposes only and does not constitute medical advice
              or create a physician-patient relationship.
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
              Other Treatment Options.
            </h2>
            <ul className="space-y-3 text-sm">
              <li><Link href="/procedures" className="text-[#c8a020] hover:underline tracking-wide">View all Procedures &amp; Treatment Options →</Link></li>
              <li><Link href="/procedures/spinal-cord-stimulation-evaluation" className="text-[#c8a020] hover:underline tracking-wide">Spinal Cord Stimulation Evaluation →</Link></li>
              <li><Link href="/conditions/peripheral-nerve-pain" className="text-[#c8a020] hover:underline tracking-wide">Peripheral Nerve Pain Evaluation →</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
