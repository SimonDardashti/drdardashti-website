import type { Metadata } from "next";
import Link from "next/link";
import { MedicalFigure } from "@/components/illustrations";

const PAGE_URL = "https://www.drdardashti.com/procedures/peripheral-nerve-blocks";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Peripheral Nerve Blocks | Simon Dardashti, MD" },
  description:
    "Educational information about peripheral nerve blocks for nerve pain and neuropathic conditions, including how they are evaluated and used as part of a clinical treatment plan.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Peripheral Nerve Blocks | Simon Dardashti, MD",
    description:
      "Educational information about peripheral nerve blocks for nerve pain and neuropathic conditions, including how they are evaluated and used as part of a clinical treatment plan.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peripheral Nerve Blocks | Simon Dardashti, MD",
    description:
      "Educational information about peripheral nerve blocks for nerve pain and neuropathic conditions, including how they are evaluated and used as part of a clinical treatment plan.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Peripheral Nerve Blocks | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Educational information about peripheral nerve blocks for nerve pain and neuropathic conditions, including how they are evaluated and used as part of a clinical treatment plan.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  about: {
    "@type": "MedicalProcedure",
    name: "Peripheral Nerve Block",
    procedureType: "https://schema.org/TherapeuticProcedure",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Procedures & Treatment Options", item: `${SITE_URL}/procedures` },
      { "@type": "ListItem", position: 3, name: "Peripheral Nerve Blocks", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "What it is",
    body: "An injection of anesthetic medication around a peripheral nerve to block pain signals, used to address pain in the nerve's distribution after appropriate clinical evaluation.",
  },
  {
    heading: "When it may be considered",
    body: "In selected patients with peripheral nerve pain, neuropathic pain conditions, or nerve entrapment syndromes when other conservative approaches have been tried.",
  },
  {
    heading: "What to expect",
    body: "The target nerve is located by palpation or ultrasound guidance, and anesthetic medication is injected around the nerve. The procedure typically takes 15-30 minutes. Patients are observed briefly and usually go home the same day.",
  },
];

const faqs = [
  {
    q: "What are peripheral nerves?",
    a: "Peripheral nerves are the nerves that extend from the spinal cord to the rest of the body, carrying sensory information and motor signals to muscles. When peripheral nerves become irritated, compressed, or inflamed, they can cause pain in the area they supply.",
  },
  {
    q: "Is ultrasound guidance used?",
    a: "Ultrasound guidance can improve the accuracy of peripheral nerve blocks by allowing the physician to visualize the nerve and surrounding anatomy. However, some peripheral nerve blocks can be performed using anatomical landmarks and palpation alone. The specific approach depends on the nerve being targeted and clinical situation.",
  },
  {
    q: "How long does the numbing last?",
    a: "The duration of numbness from the anesthetic medication typically lasts a few hours. However, some patients may experience longer-lasting pain relief beyond the period of numbness, suggesting additional benefit from the block.",
  },
  {
    q: "Can nerve blocks be repeated?",
    a: "Yes, peripheral nerve blocks can typically be repeated if they provide relief. The frequency of blocks is determined based on clinical response, pain duration, and treatment goals.",
  },
  {
    q: "Is this a permanent treatment?",
    a: "No, peripheral nerve blocks with local anesthetic provide temporary relief. They do not permanently cure the underlying nerve problem. Some patients benefit from repeated blocks; others may benefit from other treatments like physical therapy or longer-lasting interventions.",
  },
  {
    q: "What are the risks?",
    a: "Like all procedures, peripheral nerve blocks carry potential risks including nerve damage, bleeding, infection, allergic reaction, or inadequate block. Serious complications are rare when performed by experienced physicians using appropriate technique.",
  },
];

export default function PeripheralNerveBlocksPage() {
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
            Peripheral
            <br />
            <em className="not-italic text-[#888]">Nerve Blocks.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Peripheral nerve blocks are used to address nerve pain and neuropathic pain
            conditions by temporarily blocking pain signals in peripheral nerves. A formal
            clinical evaluation is needed to determine whether a peripheral nerve block is
            appropriate for any individual patient.
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

      {/* SECTION 1 — How Peripheral Nerve Blocks Work */}
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
              How Peripheral Nerve Blocks Work.
            </h2>
            <p>
              A peripheral nerve block works by injecting local anesthetic medication around
              a peripheral nerve. The anesthetic temporarily blocks the nerve's ability to
              transmit pain signals, providing relief from pain in the area supplied by that
              nerve.
            </p>
            <p>
              The block is temporary — as the anesthetic wears off (typically over hours),
              the nerve function returns and pain sensation returns. However, some patients
              experience longer-lasting pain relief beyond the period of numbness from the
              anesthetic.
            </p>
          </div>
        </div>

        {/* ILLUSTRATION: Peripheral Nerve Block Technique */}
        <div className="max-w-5xl mx-auto mt-12 flex justify-center">
          <MedicalFigure
            variant="default"
            src="/images/procedures/injections/peripheral-nerve-block.png"
            alt="Peripheral nerve block showing needle placement along target peripheral nerve, local anesthetic delivery around nerve, and pain signal blockade"
            caption="Peripheral Nerve Block Technique: Under imaging or anatomical landmark guidance, local anesthetic is placed around the target peripheral nerve. This blocks pain signals in that nerve's distribution."
          />
        </div>

        {/* ILLUSTRATION: Peripheral Nerve Anatomy */}
        <div className="max-w-5xl mx-auto mt-12 flex justify-center">
          <MedicalFigure
            variant="default"
            src="/images/anatomy/nerves/peripheral-nerve-anatomy.png"
            alt="Peripheral nerve anatomy showing major peripheral nerves, nerve pathways, sensory distributions, and anatomical landmarks for nerve block targeting"
            caption="Peripheral Nerve Anatomy: Understanding the course and distribution of peripheral nerves is essential for accurate nerve block placement. Different nerves supply sensation and motor function to different limb regions."
          />
        </div>
      </section>

      {/* SECTION 2 — When Peripheral Nerve Blocks May Be Considered */}
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
              When Peripheral Nerve Blocks May Be Considered.
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              Peripheral nerve blocks may be considered for selected patients with:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Peripheral nerve pain or neuropathic pain",
                "Pain from nerve compression or entrapment syndromes",
                "Pain in a peripheral nerve distribution",
                "Conditions where other conservative treatments have not provided adequate relief",
                "Conditions where a clinical evaluation supports the use of nerve blocks",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm mt-6 max-w-2xl">
              The appropriate nerve to block depends on the location and distribution of the
              patient's pain, as identified by clinical examination and, when available, imaging.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Types of Peripheral Nerves That May Be Blocked */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>03</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Nerves</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Peripheral Nerves and Pain Conditions.
            </h2>
            <p>
              Many peripheral nerves can be targeted with nerve blocks depending on the
              location of pain. These include upper extremity nerves (such as those affecting
              the arm and hand), lower extremity nerves (such as those affecting the leg and
              foot), and other peripheral nerves throughout the body.
            </p>
            <p>
              The specific nerve to be blocked is determined based on the patient's
              symptoms, location of pain, and clinical evaluation. A thorough history and
              physical examination helps identify which peripheral nerve is responsible for
              the patient's pain.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — The Procedure */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>04</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Procedure</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              The Peripheral Nerve Block Procedure.
            </h2>
            <p>
              The target peripheral nerve is identified by palpation of anatomical landmarks
              and/or ultrasound guidance. Ultrasound guidance improves accuracy by allowing
              visualization of the nerve and surrounding structures.
            </p>
            <p>
              Once the nerve is located, local anesthetic is carefully injected around the
              nerve. The procedure typically takes 15-30 minutes depending on the specific
              nerve and anatomy. Patients are observed briefly after the procedure and usually
              go home the same day. Numbing typically begins within minutes to hours and lasts
              for several hours.
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
              Peripheral nerve blocks provide temporary relief from pain. They do not cure
              the underlying condition causing the pain. Response is variable and depends on
              the specific nerve involved, severity and chronicity of the pain condition, and
              individual patient factors. These blocks are not guaranteed to provide pain relief.
            </p>
            <p>
              A formal clinical evaluation is required to determine whether a peripheral nerve
              block is an appropriate option for any individual patient. This page is for
              general informational purposes only and does not constitute medical advice or
              create a physician-patient relationship.
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
              <li><Link href="/conditions/peripheral-nerve-pain" className="text-[#c8a020] hover:underline tracking-wide">Peripheral Nerve Pain Evaluation →</Link></li>
              <li><Link href="/conditions/neuropathic-pain" className="text-[#c8a020] hover:underline tracking-wide">Neuropathic Pain Evaluation →</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
