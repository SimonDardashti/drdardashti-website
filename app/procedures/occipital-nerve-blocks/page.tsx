import type { Metadata } from "next";
import Link from "next/link";
import { MedicalFigure } from "@/components/illustrations";

const PAGE_URL = "https://www.drdardashti.com/procedures/occipital-nerve-blocks";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Occipital Nerve Blocks | Simon Dardashti, MD" },
  description:
    "Educational information about occipital nerve blocks for occipital neuralgia and headache conditions, including how they are evaluated and used as part of a clinical treatment plan.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Occipital Nerve Blocks | Simon Dardashti, MD",
    description:
      "Educational information about occipital nerve blocks for occipital neuralgia and headache conditions, including how they are evaluated and used as part of a clinical treatment plan.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Occipital Nerve Blocks | Simon Dardashti, MD",
    description:
      "Educational information about occipital nerve blocks for occipital neuralgia and headache conditions, including how they are evaluated and used as part of a clinical treatment plan.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Occipital Nerve Blocks | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Educational information about occipital nerve blocks for occipital neuralgia and headache conditions, including how they are evaluated and used as part of a clinical treatment plan.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  about: {
    "@type": "MedicalProcedure",
    name: "Occipital Nerve Block",
    procedureType: "https://schema.org/TherapeuticProcedure",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Procedures & Treatment Options", item: `${SITE_URL}/procedures` },
      { "@type": "ListItem", position: 3, name: "Occipital Nerve Blocks", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "What it is",
    body: "An injection of anesthetic medication around the occipital nerves at the base of the skull, used to address pain in the back of the head and neck, including occipital neuralgia.",
  },
  {
    heading: "When it may be considered",
    body: "In selected patients with occipital neuralgia, headache involving the occipital nerve distribution, or neck pain originating from the occipital nerve when other approaches have been tried.",
  },
  {
    heading: "What to expect",
    body: "The occipital nerve is located by palpation at the base of the skull, and anesthetic medication is injected. The procedure typically takes 10-15 minutes. Patients are observed briefly and usually go home the same day.",
  },
];

const faqs = [
  {
    q: "What is occipital neuralgia?",
    a: "Occipital neuralgia is a condition causing pain in the distribution of one or both occipital nerves — the nerves that supply the back of the scalp and upper neck. The pain is typically described as sharp, shooting, or electric. The occipital nerves arise from the upper cervical spine.",
  },
  {
    q: "How is the occipital nerve identified?",
    a: "The occipital nerves are located at the base of the skull, just above where the neck meets the head. They are identified by palpation (feeling) of specific anatomical landmarks. The injection is typically performed based on anatomical landmarks, though ultrasound guidance may also be used.",
  },
  {
    q: "How long does the pain relief last?",
    a: "Response duration varies significantly between patients. Some patients experience relief for weeks or even longer, while others have shorter-lived relief. The duration of benefit depends on the underlying condition, individual factors, and the specific diagnosis.",
  },
  {
    q: "Can this block be repeated?",
    a: "Yes, occipital nerve blocks can typically be repeated if they provide relief but the pain returns. The frequency of blocks is determined based on clinical response, the underlying condition, and treatment goals.",
  },
  {
    q: "Is this procedure permanent?",
    a: "No, occipital nerve blocks provide temporary relief by blocking pain signals. They do not permanently cure the underlying condition causing the pain. Some patients may benefit from repeated blocks; others may benefit from other treatments.",
  },
  {
    q: "Are there risks or side effects?",
    a: "Like all injections, occipital nerve blocks carry potential risks including temporary pain, bruising, bleeding, infection, or allergic reaction. Side effects may include temporary numbness in the back of the head or neck. Serious complications are rare when performed by experienced physicians.",
  },
];

export default function OccipitalNerveBlocksPage() {
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
            Occipital
            <br />
            <em className="not-italic text-[#888]">Nerve Blocks.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Occipital nerve blocks are used to address pain in the occipital nerve
            distribution, including occipital neuralgia and certain headache conditions.
            A formal clinical evaluation is needed to determine whether an occipital nerve
            block is appropriate for any individual patient.
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

      {/* SECTION 1 — The Occipital Nerves */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>01</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Anatomy</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              The Occipital Nerves.
            </h2>
            <p>
              The occipital nerves are sensory nerves that arise from the upper cervical
              spine (C1, C2, and C3 nerve roots). They travel upward along the back of the
              neck and supply sensation to the back of the scalp and upper neck area.
            </p>
            <p>
              The greater occipital nerve and lesser occipital nerve are the primary occipital
              nerves. When these nerves become irritated or inflamed, they can cause pain in
              the back of the head and neck. This pain condition is called occipital neuralgia.
            </p>
          </div>
        </div>

        {/* ILLUSTRATION: Occipital Neuralgia */}
        <div className="max-w-5xl mx-auto mt-12 flex justify-center">
          <MedicalFigure
            variant="default"
            src="/images/conditions/headache/occipital-neuralgia.png"
            alt="Occipital neuralgia showing greater and lesser occipital nerve anatomy, pain distribution at back of scalp and neck, and nerve irritation at cervical spine origin"
            caption="Occipital Neuralgia: The occipital nerves arise from the upper cervical spine (C1, C2, C3) and travel up the back of the neck to supply the scalp. When these nerves become irritated or compressed, they cause sharp, shooting pain in the back of the head."
          />
        </div>

        {/* ILLUSTRATION: Occipital Nerve Block Technique */}
        <div className="max-w-5xl mx-auto mt-12 flex justify-center">
          <MedicalFigure
            variant="default"
            src="/images/procedures/injections/peripheral-nerve-block.png"
            alt="Peripheral nerve block technique showing needle placement along nerve pathway, local anesthetic delivery around nerve, and pain signal blockade"
            caption="Occipital Nerve Block Technique: Under imaging guidance or anatomical landmarks, local anesthetic is placed around the greater and lesser occipital nerves. This temporarily numbs the nerves and reduces or eliminates pain in the occipital distribution."
          />
        </div>
      </section>

      {/* SECTION 2 — When Occipital Nerve Blocks May Be Considered */}
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
              When Occipital Nerve Blocks May Be Considered.
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              Occipital nerve blocks may be considered for selected patients with:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Occipital neuralgia",
                "Pain in the occipital nerve distribution (back of the head and neck)",
                "Cervicogenic headache",
                "Other headache conditions where the occipital nerve may be involved",
                "Pain that has not responded adequately to conservative treatment",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm mt-6 max-w-2xl">
              Whether an occipital nerve block is appropriate depends on the patient's
              diagnosis, location of pain, prior treatment response, and overall clinical context.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — How the Procedure Is Performed */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>03</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Procedure</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              The Occipital Nerve Block Procedure.
            </h2>
            <p>
              The patient sits or lies in a comfortable position. The physician identifies
              the occipital nerves by palpating anatomical landmarks at the base of the skull
              where the greater and lesser occipital nerves emerge. Ultrasound guidance may
              also be used to improve accuracy.
            </p>
            <p>
              Once the nerves are located, local anesthetic is injected around the occipital
              nerves. The procedure typically takes 10-15 minutes. Most patients experience
              some degree of numbness or tingling in the back of the head after the block,
              which gradually resolves as the anesthetic wears off. Patients are observed
              briefly and usually go home the same day.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Duration and Repeat Blocks */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>04</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Outcomes</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Relief Duration and Repeat Treatments.
            </h2>
            <p>
              The duration of pain relief from an occipital nerve block varies significantly.
              Some patients experience relief lasting weeks or months, while others have
              shorter-lived relief. The duration depends on the underlying cause of the
              occipital nerve irritation and individual patient factors.
            </p>
            <p>
              If the initial block provides relief, repeat blocks can typically be performed
              when pain returns. Some patients benefit from a series of blocks spaced over
              time. The frequency and number of blocks recommended depends on response and
              clinical assessment.
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
              Occipital nerve blocks provide temporary relief from pain and do not cure the
              underlying condition. Response is variable and depends on the cause of the
              occipital nerve irritation, severity and duration of symptoms, and individual
              patient factors. These blocks are not guaranteed to provide pain relief.
            </p>
            <p>
              A formal clinical evaluation is required to determine whether an occipital nerve
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
              <li><Link href="/conditions/occipital-neuralgia" className="text-[#c8a020] hover:underline tracking-wide">Occipital Neuralgia Evaluation →</Link></li>
              <li><Link href="/conditions/peripheral-nerve-pain" className="text-[#c8a020] hover:underline tracking-wide">Peripheral Nerve Pain Evaluation →</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
