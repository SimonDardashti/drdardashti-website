import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

const PAGE_URL =
  "https://www.drdardashti.com/procedures/facet-joint-injections-medial-branch-blocks";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: {
    absolute:
      "Facet Joint Injections and Medial Branch Blocks | Simon Dardashti, MD",
  },
  description:
    "Learn how facet joint injections and medial branch blocks may help evaluate neck or back pain that may be coming from the small joints of the spine.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title:
      "Facet Joint Injections and Medial Branch Blocks | Simon Dardashti, MD",
    description:
      "Learn how facet joint injections and medial branch blocks may help evaluate neck or back pain that may be coming from the small joints of the spine.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Facet Joint Injections and Medial Branch Blocks | Simon Dardashti, MD",
    description:
      "Learn how facet joint injections and medial branch blocks may help evaluate neck or back pain that may be coming from the small joints of the spine.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Facet Joint Injections and Medial Branch Blocks | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Learn how facet joint injections and medial branch blocks may help evaluate neck or back pain that may be coming from the small joints of the spine.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  about: {
    "@type": "MedicalProcedure",
    name: "Facet Joint Injection / Medial Branch Block",
  },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Procedures & Treatment Options",
        item: `${SITE_URL}/procedures`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Facet Joint Injections and Medial Branch Blocks",
        item: PAGE_URL,
      },
    ],
  },
};

const inBrief = [
  {
    heading: "Facet-Mediated Pain",
    body: "Facet joint injections and medial branch blocks are used to evaluate and sometimes treat pain that may be coming from the small joints along the back of the spine.",
  },
  {
    heading: "Diagnostic and Therapeutic",
    body: "A medial branch block is primarily a diagnostic test. A facet joint injection may serve both a diagnostic and a therapeutic purpose, depending on the clinical situation.",
  },
  {
    heading: "May Inform Next Steps",
    body: "A meaningful response to medial branch blocks can help guide whether a patient may later be considered for radiofrequency ablation of the medial branch nerves.",
  },
];

const faqs = [
  {
    q: "Are facet joint injections and medial branch blocks the same thing?",
    a: "They are related but not identical. A facet joint injection places medication directly into or near the joint itself. A medial branch block places local anesthetic near the small nerves that carry pain signals from the joint. Both are used to evaluate facet-related pain, but they target slightly different structures.",
  },
  {
    q: "How long does the procedure take?",
    a: "The procedure itself is typically brief — often fifteen to thirty minutes or less, depending on the number of levels treated. Patients generally spend additional time in observation before discharge.",
  },
  {
    q: "Will I be asleep during the procedure?",
    a: "Most patients remain awake. Light sedation may be offered in some cases, but general anesthesia is not typically used. The skin is numbed with local anesthetic before the procedure.",
  },
  {
    q: "How soon will I know if it helped?",
    a: "With a medial branch block, any pain relief from the local anesthetic is usually noticeable within the first hour or two after the procedure. Patients may be asked to track their pain levels and activities during this window to help assess the response.",
  },
  {
    q: "What does it mean if a medial branch block works?",
    a: "Significant temporary relief following a medial branch block suggests that the targeted nerves are contributing to the patient's pain. This finding can help support — though not confirm — a diagnosis of facet-mediated pain and may inform future treatment decisions, including whether radiofrequency ablation is appropriate.",
  },
  {
    q: "Can this lead to radiofrequency ablation?",
    a: "It can, in appropriate patients. Radiofrequency ablation of the medial branch nerves may be considered when a patient has a meaningful response to diagnostic medial branch blocks and meets other clinical criteria. The decision depends on the full clinical picture.",
  },
  {
    q: "Are these procedures appropriate for all back or neck pain?",
    a: "No. Facet joint injections and medial branch blocks are most likely to be appropriate when the clinical evaluation suggests that the facet joints may be a significant source of pain. They are not the right choice for every type of spine pain and are not recommended without a formal clinical evaluation.",
  },
];

export default function FacetJointInjectionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* HERO */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center gap-10 md:gap-16">
          <div className="flex-1">
            <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              Procedures &amp; Treatment Options
            </p>
            <h1
              className="text-4xl md:text-6xl font-bold leading-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Facet Joint Injections
              <br />
              <em className="not-italic text-[#888]">
                &amp; Medial Branch Blocks.
              </em>
            </h1>
            <p className="mt-5 text-[#666] text-lg leading-relaxed">
              Facet joint injections and medial branch blocks are image-guided
              procedures used to evaluate — and sometimes treat — pain that may
              be coming from the small joints along the back of the spine. A
              formal clinical evaluation is required to determine whether either
              procedure is appropriate for an individual patient.
            </p>
          </div>
          <div className="hidden md:block w-[300px] shrink-0 rounded-xl overflow-hidden bg-white">
            <Image
              src="/images/procedures/facet-medial-branch-blocks.png"
              alt="Simplified medical illustration of lumbar facet joints, medial branch nerves, and needle approach for facet joint injection or medial branch block."
              width={1254}
              height={1254}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* IN BRIEF */}
      <section className="bg-white py-16 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-[#999] uppercase tracking-widest mb-8">
            In Brief
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#e5e5e0]">
            {inBrief.map((item, i) => (
              <div
                key={item.heading}
                className={`p-6 ${
                  i < inBrief.length - 1
                    ? "border-b md:border-b-0 md:border-r border-[#e5e5e0]"
                    : ""
                }`}
              >
                <div className="w-5 h-px bg-[#c8a020] mb-4" />
                <h2
                  className="font-bold text-[#0a0a0a] text-sm mb-3"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {item.heading}
                </h2>
                <p className="text-sm text-[#666] leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 01 — OVERVIEW */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span
              className="text-7xl font-bold text-[#e8e6e3] leading-none block"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              aria-hidden
            >
              01
            </span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">
              Overview
            </p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Facet Joints and Medial Branch Nerves.
            </h2>
            <p>
              Facet joints — also called zygapophyseal joints — are small
              paired joints located along the back of the spine at every
              vertebral level. They help guide spinal motion and provide
              stability. Like other joints in the body, facet joints can become
              painful due to arthritis, inflammation, injury, or degenerative
              changes over time.
            </p>
            <p>
              The medial branch nerves are small nerves that carry pain signals
              from the facet joints to the brain. Because these nerves follow a
              consistent anatomical course, they can be targeted with injections
              for both diagnostic and therapeutic purposes.
            </p>
            <p>
              Facet joint injections and medial branch blocks are related
              procedures that approach this pain from slightly different angles.
              Both are performed under imaging guidance and are part of a
              broader evaluation and treatment strategy for spine pain that may
              involve the facet joints.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 02 — CONDITIONS */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span
              className="text-7xl font-bold text-[#f0f0f0] leading-none block"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              aria-hidden
            >
              02
            </span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">
              Conditions
            </p>
          </div>
          <div className="md:col-span-10">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              When May These Procedures Be Considered?
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              These procedures may be considered for patients with neck pain,
              mid-back pain, or low back pain when the facet joints are
              suspected to be contributing to symptoms. Facet-mediated pain
              often presents as axial spine pain — pain felt in the neck or
              back itself rather than traveling down the arm or leg — though
              referred pain patterns can occur.
            </p>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              Symptoms that may suggest facet joint involvement include pain
              that is worsened by extension, rotation, prolonged standing, or
              certain movements. Pain may also be aggravated by rising from a
              seated position or maintaining a static posture for extended
              periods.
            </p>
            <p className="text-[#777] text-sm mb-6 max-w-2xl">
              Conditions for which facet joint injections or medial branch
              blocks may be evaluated include:
            </p>
            <ul className="space-y-3 max-w-2xl mb-6">
              {[
                "Cervical facet pain (neck pain of possible facet origin)",
                "Thoracic facet pain (mid-back pain of possible facet origin)",
                "Lumbar facet pain (low back pain of possible facet origin)",
                "Arthritis-related spine pain involving the facet joints",
                "Mechanical neck or back pain not explained by disc or nerve root pathology",
                "Pain following whiplash or other spine injury",
                "Axial spine pain that has not responded adequately to conservative care",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm max-w-2xl">
              Imaging findings alone do not diagnose facet-mediated pain.
              Clinical history and physical examination are essential parts of
              the evaluation.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 03 — INJECTION VS BLOCK */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span
              className="text-7xl font-bold text-[#e8e6e3] leading-none block"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              aria-hidden
            >
              03
            </span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">
              Procedure Types
            </p>
          </div>
          <div className="md:col-span-10">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-6"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Facet Joint Injection vs. Medial Branch Block.
            </h2>
            <div className="space-y-6 max-w-2xl">
              <div className="border-l-2 border-[#c8a020] pl-4">
                <p
                  className="font-semibold text-[#0a0a0a] text-sm mb-2"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Facet Joint Injection
                </p>
                <p className="text-sm text-[#666] leading-relaxed">
                  A facet joint injection places medication — typically local
                  anesthetic and sometimes a corticosteroid — directly into or
                  near the facet joint capsule. It may serve a diagnostic
                  purpose by helping to determine whether the joint is a
                  significant pain source, and it may also provide temporary
                  therapeutic relief if inflammation is present.
                </p>
              </div>
              <div className="border-l-2 border-[#c8a020] pl-4">
                <p
                  className="font-semibold text-[#0a0a0a] text-sm mb-2"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Medial Branch Block
                </p>
                <p className="text-sm text-[#666] leading-relaxed">
                  A medial branch block places local anesthetic near the small
                  medial branch nerves that carry pain signals from the facet
                  joints. It is primarily used as a diagnostic test: by
                  temporarily numbing these nerves, the procedure helps
                  determine whether the facet joints are a likely contributor to
                  the patient's pain. Temporary pain relief may occur during the
                  block period, but the medial branch block itself is not
                  intended as a long-term therapeutic treatment.
                </p>
              </div>
              <div className="border-l-2 border-[#c8a020] pl-4">
                <p
                  className="font-semibold text-[#0a0a0a] text-sm mb-2"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Connection to Radiofrequency Ablation
                </p>
                <p className="text-sm text-[#666] leading-relaxed">
                  If medial branch blocks provide significant temporary relief, a
                  patient may later be considered for{" "}
                  <Link
                    href="/procedures/radiofrequency-ablation"
                    className="text-[#c8a020] hover:underline"
                  >
                    radiofrequency ablation
                  </Link>{" "}
                  of the medial branch nerves — a procedure that uses heat
                  energy to interrupt pain signaling on a longer-term basis.
                  This decision depends on the full clinical picture, the degree
                  of response, and other patient factors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04 — THE PROCEDURE */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span
              className="text-7xl font-bold text-[#f0f0f0] leading-none block"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              aria-hidden
            >
              04
            </span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">
              The Procedure
            </p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              What Happens During the Procedure?
            </h2>
            <p>
              The procedure is typically performed with the patient lying on an
              imaging table. The skin over the injection site is cleaned and
              numbed with local anesthetic. Using fluoroscopic (X-ray) guidance,
              a small needle is carefully guided to the target area — either the
              facet joint or the medial branch nerve.
            </p>
            <p>
              Contrast dye may be injected to confirm that the needle is
              properly positioned before medication is delivered. The medication
              is then injected through the needle. Patients may feel pressure or
              brief discomfort during the procedure. The injection itself is
              typically completed within a few minutes per target level, though
              the full procedure time varies based on the number of levels being
              treated.
            </p>
            <h2
              className="text-xl md:text-2xl font-bold text-[#0a0a0a] mt-8 mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              What to Expect Afterward.
            </h2>
            <p>
              Some patients experience temporary soreness at the injection site
              following the procedure. Pain relief, if it occurs, may be
              noticeable within the first hour or two from the local anesthetic
              component. If a corticosteroid was included, any additional
              anti-inflammatory effect may develop over the following days.
            </p>
            <p>
              With medial branch blocks specifically, the pattern of pain relief
              during the block period — rather than the duration of relief — is
              what matters most diagnostically. Patients are typically asked to
              track their pain levels and activity tolerance in the hours after
              the procedure to help assess the response.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 05 — RISKS & TREATMENT PLAN */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span
              className="text-7xl font-bold text-[#e8e6e3] leading-none block"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              aria-hidden
            >
              05
            </span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">
              Risks &amp; Context
            </p>
          </div>
          <div className="md:col-span-10 space-y-6 text-[#555] text-base leading-relaxed">
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Risks and Considerations.
              </h2>
              <p className="mb-4">
                As with any procedure, facet joint injections and medial branch
                blocks carry potential risks. Serious complications are uncommon
                but may include temporary soreness or bruising at the injection
                site, bleeding, infection, allergic reaction to the injected
                medication, temporary numbness or weakness in the treated area,
                worsening of pain, or lack of meaningful relief.
              </p>
              <p>
                Dr. Dardashti reviews each patient's medical history,
                medications, imaging, and symptoms before recommending a
                procedure. Risks, expected benefits, and realistic outcomes are
                discussed as part of the pre-procedure evaluation.
              </p>
            </div>
            <div>
              <h2
                className="text-xl md:text-2xl font-bold text-[#0a0a0a] mb-4"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                How This Fits Into a Treatment Plan.
              </h2>
              <p className="mb-4">
                Facet joint injections and medial branch blocks are rarely a
                standalone solution. They are most useful as part of a broader
                pain management plan that may also include physical therapy,
                home exercise programs, activity modification, and medications
                when clinically appropriate.
              </p>
              <p className="mb-4">
                When medial branch blocks confirm a significant facet joint
                contribution to a patient's pain,{" "}
                <Link
                  href="/procedures/radiofrequency-ablation"
                  className="text-[#c8a020] hover:underline"
                >
                  radiofrequency ablation
                </Link>{" "}
                may be considered as a next step for selected patients. The goal
                is to find the combination of treatments most likely to improve
                function and reduce pain based on each patient's individual
                clinical situation.
              </p>
              <p className="text-[#777] text-sm max-w-2xl">
                An evaluation can help determine whether facet-related pain may
                be contributing to your symptoms and whether an injection-based
                approach is appropriate for your clinical situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#999] uppercase tracking-widest">
              FAQ
            </p>
          </div>
          <div className="md:col-span-10">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-8"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Frequently Asked Questions.
            </h2>
            <div className="space-y-8 max-w-2xl">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-[#e5e5e0] pb-8 last:border-b-0 last:pb-0">
                  <p
                    className="font-bold text-[#0a0a0a] text-sm mb-3"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {faq.q}
                  </p>
                  <p className="text-sm text-[#666] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LIMITATIONS */}
      <section className="bg-[#0a0a0a] py-16 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#666] uppercase tracking-widest">
              Limitations
            </p>
          </div>
          <div className="md:col-span-10 space-y-3 text-[#888] text-sm leading-relaxed">
            <h2
              className="text-xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Important Limitations.
            </h2>
            <p>
              Facet joint injections and medial branch blocks do not treat
              underlying degenerative changes in the spine and are not a cure
              for arthritis or structural spinal conditions. Response varies
              among patients. Some patients experience meaningful temporary
              relief; others may experience partial benefit or no relief.
            </p>
            <p>
              A formal clinical evaluation is required to determine whether
              either procedure is appropriate for an individual patient. This
              page is for general informational purposes only and does not
              constitute medical advice or a guarantee of any specific outcome.
            </p>
            <p>
              Dr. Dardashti sees patients in Mission Hills, California, serving
              patients from the San Fernando Valley, Santa Clarita Valley, and
              surrounding Los Angeles communities.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-[#f9f7f4] py-14 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#999] uppercase tracking-widest">
              Related
            </p>
          </div>
          <div className="md:col-span-10">
            <h2
              className="text-base font-bold text-[#0a0a0a] mb-5"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Related Conditions &amp; Procedures.
            </h2>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/procedures/radiofrequency-ablation"
                  className="text-[#c8a020] hover:underline tracking-wide"
                >
                  Radiofrequency Ablation →
                </Link>
              </li>
              <li>
                <Link
                  href="/conditions/low-back-pain"
                  className="text-[#c8a020] hover:underline tracking-wide"
                >
                  Low Back Pain Evaluation →
                </Link>
              </li>
              <li>
                <Link
                  href="/conditions/neck-pain"
                  className="text-[#c8a020] hover:underline tracking-wide"
                >
                  Neck Pain Evaluation →
                </Link>
              </li>
              <li>
                <Link
                  href="/procedures"
                  className="text-[#c8a020] hover:underline tracking-wide"
                >
                  View all Procedures &amp; Treatment Options →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
