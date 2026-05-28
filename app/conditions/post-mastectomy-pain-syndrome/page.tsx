import type { Metadata } from "next";
import Link from "next/link";
import PMPSIllustration from "@/components/illustrations/PMPSIllustration";

const PAGE_URL = "https://www.drdardashti.com/conditions/post-mastectomy-pain-syndrome";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Post-Mastectomy Pain Syndrome Evaluation | Simon Dardashti, MD" },
  description:
    "Post-mastectomy pain syndrome (PMPS) is persistent pain that can develop after breast surgery. Dr. Simon Dardashti evaluates patients with complex pain after breast cancer treatment in Mission Hills, CA.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Post-Mastectomy Pain Syndrome Evaluation | Simon Dardashti, MD",
    description:
      "Post-mastectomy pain syndrome (PMPS) is persistent pain that can develop after breast surgery. Dr. Simon Dardashti evaluates patients with complex pain after breast cancer treatment in Mission Hills, CA.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Post-Mastectomy Pain Syndrome Evaluation | Simon Dardashti, MD",
    description:
      "Post-mastectomy pain syndrome (PMPS) is persistent pain that can develop after breast surgery. Dr. Simon Dardashti evaluates patients with complex pain after breast cancer treatment in Mission Hills, CA.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Post-Mastectomy Pain Syndrome Evaluation | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Post-mastectomy pain syndrome (PMPS) is persistent pain that can develop after breast surgery. Dr. Simon Dardashti evaluates patients with complex pain after breast cancer treatment in Mission Hills, CA.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  about: {
    "@type": "MedicalCondition",
    name: "Post-Mastectomy Pain Syndrome",
    alternateName: "PMPS",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Conditions", item: `${SITE_URL}/conditions` },
      { "@type": "ListItem", position: 3, name: "Post-Mastectomy Pain Syndrome", item: PAGE_URL },
    ],
  },
};

const faqs = [
  {
    q: "Is PMPS different from cancer recurrence?",
    a: "PMPS is a pain condition related to the surgery and its effects on nerves and surrounding tissue — not a sign that cancer has returned. That said, any new or changing symptoms following breast cancer treatment should be reported to the oncology team for appropriate evaluation before focusing solely on pain management.",
  },
  {
    q: "How long after surgery can PMPS develop?",
    a: "PMPS can begin shortly after surgery or emerge months later. It is generally defined as pain that persists beyond three months after the procedure and is not related to wound healing or a new medical issue. The timing varies between individuals.",
  },
  {
    q: "Can PMPS improve on its own?",
    a: "For some patients, symptoms improve over time without intervention. For others, pain persists or becomes more disruptive. Early evaluation can help identify whether treatment options may be appropriate and prevent the development of more entrenched pain patterns.",
  },
  {
    q: "What does evaluation involve?",
    a: "Evaluation includes a detailed pain history, review of prior treatment and surgical records when available, physical examination, and consideration of whether imaging or other assessments are needed. The goal is to characterize the pain and identify which anatomical structures may be involved.",
  },
  {
    q: "What treatment options may be considered?",
    a: "Treatment options depend on the clinical picture. They may include medications, targeted nerve blocks, physical therapy coordination, and in selected cases with refractory pain, neuromodulation. Not every patient requires procedural intervention, and options are discussed individually.",
  },
  {
    q: "Can nerve blocks cure PMPS?",
    a: "No. Nerve blocks are not a cure for PMPS. In appropriate patients, targeted nerve blocks may reduce pain temporarily and help clarify which nerves are involved. This information can help guide a broader treatment plan. Results vary and cannot be predicted in advance.",
  },
  {
    q: "Should I coordinate with my oncologist?",
    a: "Yes. Pain management after breast cancer treatment should be coordinated with the oncology team. The pain medicine evaluation focuses specifically on pain — not on cancer surveillance or treatment. Both areas of care can proceed in parallel.",
  },
];

export default function PMPSPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      {/* HERO */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center gap-10 md:gap-16">
          <div className="flex-1">
            <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              Conditions Evaluated
            </p>
            <h1
              className="text-4xl md:text-6xl font-bold leading-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Post-Mastectomy
              <br />
              <em className="not-italic text-[#888]">Pain Syndrome.</em>
            </h1>
            <p className="mt-5 text-[#666] text-lg leading-relaxed">
              Post-mastectomy pain syndrome (PMPS) refers to persistent pain
              that can develop in the chest wall, shoulder, axilla, or arm
              following breast surgery. It is a recognized pain condition that
              can affect quality of life and may be appropriate for pain
              medicine evaluation.
            </p>
          </div>
          <div className="hidden md:block w-[300px] shrink-0 opacity-90">
            <PMPSIllustration className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* IN BRIEF */}
      <section className="bg-white py-16 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-[#999] uppercase tracking-widest mb-8">In Brief</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="w-5 h-px bg-[#c8a020] mb-4" />
              <h2
                className="font-bold text-[#0a0a0a] text-sm mb-2"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                What it is
              </h2>
              <p className="text-sm text-[#666] leading-relaxed">
                Persistent pain in the chest wall, shoulder, armpit, or arm
                that develops after mastectomy, lumpectomy, or other breast
                surgery. Often neuropathic in character.
              </p>
            </div>
            <div>
              <div className="w-5 h-px bg-[#c8a020] mb-4" />
              <h2
                className="font-bold text-[#0a0a0a] text-sm mb-2"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Who may benefit from evaluation
              </h2>
              <p className="text-sm text-[#666] leading-relaxed">
                Patients who have completed or are undergoing breast cancer
                treatment and have persistent pain that has not resolved with
                standard measures.
              </p>
            </div>
            <div>
              <div className="w-5 h-px bg-[#c8a020] mb-4" />
              <h2
                className="font-bold text-[#0a0a0a] text-sm mb-2"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Focus of evaluation
              </h2>
              <p className="text-sm text-[#666] leading-relaxed">
                Pain characterization, identification of potential anatomical
                sources, review of prior treatment, and exploration of
                appropriate pain management options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1 — Overview */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2 flex md:justify-end">
            <span className="text-[6rem] font-bold text-[#e8e6e3] leading-none select-none">1</span>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Understanding PMPS.
            </h2>
            <p>
              Post-mastectomy pain syndrome is a term used to describe
              persistent pain that develops after breast surgery — most commonly
              mastectomy, but also lumpectomy, axillary lymph node dissection,
              or reconstruction procedures. It is generally defined as pain
              lasting beyond three months after the procedure that is not
              explained by wound healing, infection, or cancer recurrence.
            </p>
            <p>
              The pain is often described as burning, aching, shooting, or
              hypersensitive in character. It can involve the chest wall,
              shoulder, armpit, or the inner upper arm. The pattern and
              intensity vary between individuals.
            </p>
            <p>
              PMPS is not rare. Published literature on breast cancer surgery
              outcomes suggests a meaningful proportion of patients experience
              some degree of persistent pain following these procedures. For
              some patients, the pain significantly affects daily function and
              quality of life.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Why Pain Persists */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2 flex md:justify-end">
            <span className="text-[6rem] font-bold text-[#f0f0f0] leading-none select-none">2</span>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Why Pain Can Persist After Breast Surgery.
            </h2>
            <p>
              Several mechanisms may contribute to chronic pain following
              breast surgery. Nerve injury or irritation during surgery is one
              of the most commonly discussed factors. The chest wall, axilla,
              and upper arm are supplied by a network of nerves that can be
              affected during the surgical process.
            </p>
            <p>
              The intercostobrachial nerve — a sensory nerve that runs through
              the axilla and supplies sensation to the inner upper arm and
              lateral chest wall — is frequently identified as a potential
              source. Other nerves in the area, including the long thoracic and
              thoracodorsal nerves, may also be involved depending on the extent
              of the surgery.
            </p>
            <p>
              In some patients, tissue changes from radiation therapy or
              reconstruction may also contribute to ongoing discomfort.
              The overall picture is often multifactorial, and the exact source
              of pain may not be fully apparent without evaluation.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Common Symptoms */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2 flex md:justify-end">
            <span className="text-[6rem] font-bold text-[#e8e6e3] leading-none select-none">3</span>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Common Symptoms.
            </h2>
            <p>
              Symptoms of PMPS vary, but frequently include one or more of the
              following:
            </p>
            <ul className="list-none space-y-2 pl-0">
              {[
                "Burning, aching, or shooting pain in the chest wall, armpit, or inner arm",
                "Hypersensitivity to light touch in the affected area",
                "Pain that persists at rest or is triggered by movement",
                "Numbness or abnormal sensation along the chest wall or upper arm",
                "Discomfort with shoulder movement or reaching",
                "Pain that may be present on the same side as surgery or bilaterally in some cases",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#c8a020] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-[#888]">
              These symptoms should always be evaluated in collaboration with
              the oncology team to rule out other causes before attributing
              them to PMPS.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Evaluation */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2 flex md:justify-end">
            <span className="text-[6rem] font-bold text-[#f0f0f0] leading-none select-none">4</span>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Pain Medicine Evaluation.
            </h2>
            <p>
              A pain medicine evaluation for PMPS focuses on understanding the
              nature and distribution of the patient&apos;s pain, identifying which
              structures may be contributing, and reviewing what has been tried
              previously.
            </p>
            <p>
              This includes a detailed pain history (onset, character,
              distribution, aggravating and relieving factors), physical
              examination including sensory testing, review of operative and
              treatment records when available, and discussion of functional
              impact. Imaging may be reviewed if relevant.
            </p>
            <p>
              The evaluation does not overlap with oncology care. It is
              specifically focused on the pain problem and on identifying what
              pain management options may be appropriate for the individual
              patient.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Treatment Options */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2 flex md:justify-end">
            <span className="text-[6rem] font-bold text-[#e8e6e3] leading-none select-none">5</span>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Treatment Options That May Be Considered.
            </h2>
            <p>
              Treatment for PMPS is individualized and often multimodal. The
              approach depends on the patient&apos;s specific pain pattern, overall
              health, prior treatment history, and goals. Not every option is
              appropriate for every patient.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2">
              {[
                {
                  title: "Medications",
                  body: "Neuropathic pain medications or topical agents may help reduce discomfort in selected patients. Options are individualized based on clinical profile, other medical conditions, and tolerability.",
                },
                {
                  title: "Physical therapy",
                  body: "Coordination with physical therapy may address shoulder or chest wall mobility limitations and soft tissue contributors to ongoing pain.",
                },
                {
                  title: "Targeted nerve blocks",
                  body: "In appropriate patients, image-guided or ultrasound-guided nerve blocks targeting specific nerves in the axilla, chest wall, or intercostal region may help reduce pain or clarify the pain source.",
                },
                {
                  title: "Neuromodulation",
                  body: "Published cancer pain literature describes stepwise approaches that may include neuromodulation in carefully selected patients with refractory pain. This is not a routine recommendation.",
                },
              ].map((item) => (
                <div key={item.title} className="border border-[#e5e5e0] rounded p-5">
                  <p className="text-xs text-[#c8a020] uppercase tracking-widest font-semibold mb-2">{item.title}</p>
                  <p className="text-sm text-[#555] leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Targeted Nerve Blocks */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2 flex md:justify-end">
            <span className="text-[6rem] font-bold text-[#f0f0f0] leading-none select-none">6</span>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Targeted Nerve Blocks for PMPS.
            </h2>
            <p>
              In appropriate patients with PMPS, targeted nerve blocks may be
              considered as part of a broader treatment plan. These injections
              deliver local anesthetic — and sometimes a corticosteroid — near
              specific nerves believed to be contributing to the pain.
            </p>
            <p>
              The approach depends on the patient&apos;s specific pain distribution
              and the nerves most likely involved. Blocks may be performed
              under ultrasound or image guidance. Options that may be evaluated
              in selected patients include:
            </p>
            <ul className="list-none space-y-2 pl-0">
              {[
                "Intercostobrachial nerve block — for axillary or inner arm pain following breast surgery",
                "Intercostal nerve blocks — for chest wall pain in the distribution of affected intercostal nerves",
                "Serratus anterior plane block — a regional approach that may address lateral chest wall pain",
                "Pectoral nerve block (PECS) — a regional approach sometimes considered for anterior chest wall pain in appropriate patients",
                "Paravertebral block — when pain has a thoracic dermatomal distribution, in selected patients",
                "Stellate ganglion block — considered in carefully selected patients when sympathetically maintained pain is a possible component",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#c8a020] shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Nerve blocks are not a cure for PMPS. In some patients, they
              can reduce pain temporarily and help identify which nerves are
              involved. This information can inform decisions about further
              treatment. Not every patient is a candidate for every block, and
              results vary between individuals.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7 — Advanced Options */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2 flex md:justify-end">
            <span className="text-[6rem] font-bold text-[#e8e6e3] leading-none select-none">7</span>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Advanced Options for Refractory Cases.
            </h2>
            <p>
              For patients whose pain has not responded to conservative
              measures or nerve blocks, additional options may be considered.
              Published cancer pain literature describes stepwise approaches
              that may include targeted nerve blocks and, in selected refractory
              cases, neuromodulation.
            </p>
            <p>
              Spinal cord stimulation and peripheral nerve stimulation are
              among the neuromodulation options that may be evaluated in
              appropriate patients. These are complex decisions made
              collaboratively with the patient and, when relevant, in
              coordination with the oncology team.
            </p>
            <p>
              In limited circumstances — particularly in the context of
              refractory cancer-related pain — intrathecal therapy may be
              considered as an advanced option. This is not a typical first- or
              second-line approach for PMPS and would require careful
              multidisciplinary evaluation.
            </p>
            <p>
              Evaluation for any advanced option does not imply that a
              procedure will be recommended. A full clinical assessment
              determines whether a patient is an appropriate candidate.
            </p>
            <div className="mt-4">
              <Link
                href="/procedures/spinal-cord-stimulation-evaluation"
                className="text-[#c8a020] text-sm hover:underline tracking-wide"
              >
                Learn about Spinal Cord Stimulation Evaluation →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — Multidisciplinary Care */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2 flex md:justify-end">
            <span className="text-[6rem] font-bold text-[#f0f0f0] leading-none select-none">8</span>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Coordinated Care After Breast Cancer Treatment.
            </h2>
            <p>
              Managing pain after breast cancer treatment involves more than
              one specialty. Pain medicine focuses on characterizing and
              treating the pain itself — not on cancer surveillance or
              oncology decision-making. These areas of care are complementary.
            </p>
            <p>
              Patients seeking pain medicine evaluation for PMPS should
              continue their oncology follow-up as scheduled. Any new or
              concerning symptoms should be brought to the oncologist&apos;s
              attention promptly, separate from the pain management evaluation.
            </p>
            <p>
              Physical therapy, psychology support, and other disciplines may
              also play a role in the overall management of PMPS depending on
              the patient&apos;s needs and goals.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#999] uppercase tracking-widest">FAQ</p>
          </div>
          <div className="md:col-span-10 divide-y divide-[#e5e5e0]">
            {faqs.map((item) => (
              <div key={item.q} className="py-8 first:pt-0">
                <h3
                  className="font-bold text-[#0a0a0a] text-base mb-3"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {item.q}
                </h3>
                <p className="text-[#555] text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
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
            <h2
              className="text-xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Important Limitations.
            </h2>
            <p>
              This page is intended for general informational purposes only.
              It does not constitute medical advice and does not represent the
              clinical management guidelines of any institution. Not every
              patient with post-mastectomy pain syndrome is a candidate for
              interventional procedures. Treatment decisions are individualized
              and require formal clinical evaluation. Response to any
              treatment varies and cannot be predicted in advance.
            </p>
            <p>
              Pain medicine evaluation for PMPS does not replace oncology care.
              Patients should maintain their oncology follow-up as recommended.
              Any new symptoms should be discussed with the oncology team
              promptly.
            </p>
            <p>
              Dr. Dardashti sees patients in Mission Hills, California, serving
              the San Fernando Valley, Santa Clarita Valley, and surrounding
              Los Angeles communities.
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
              Related Conditions &amp; Procedures.
            </h2>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/conditions/crps-evaluation" className="text-[#c8a020] hover:underline tracking-wide">
                  Complex Regional Pain Syndrome Evaluation →
                </Link>
              </li>
              <li>
                <Link href="/procedures/spinal-cord-stimulation-evaluation" className="text-[#c8a020] hover:underline tracking-wide">
                  Spinal Cord Stimulation Evaluation →
                </Link>
              </li>
              <li>
                <Link href="/conditions" className="text-[#c8a020] hover:underline tracking-wide">
                  View all Conditions Evaluated →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
