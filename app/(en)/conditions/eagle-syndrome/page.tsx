import type { Metadata } from "next";
import Link from "next/link";
import { MedicalFigure } from "@/components/illustrations";

import MedicalReviewFooter from "@/components/MedicalReviewFooter";

const PAGE_URL = "https://www.drdardashti.com/conditions/eagle-syndrome";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Eagle Syndrome Evaluation | Simon Dardashti, MD" },
  description:
    "Educational overview of Eagle syndrome, including elongated styloid process or calcified stylohyoid ligament, throat, neck, facial, or ear pain symptoms, and general evaluation considerations.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Eagle Syndrome Evaluation | Simon Dardashti, MD",
    description:
      "Educational overview of Eagle syndrome, including elongated styloid process or calcified stylohyoid ligament, throat, neck, facial, or ear pain symptoms, and general evaluation considerations.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eagle Syndrome Evaluation | Simon Dardashti, MD",
    description:
      "Educational overview of Eagle syndrome, including elongated styloid process or calcified stylohyoid ligament, throat, neck, facial, or ear pain symptoms, and general evaluation considerations.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Eagle Syndrome Evaluation | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Educational overview of Eagle syndrome, including elongated styloid process or calcified stylohyoid ligament, throat, neck, facial, or ear pain symptoms, and general evaluation considerations.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  about: { "@type": "MedicalCondition", name: "Eagle Syndrome" },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Conditions & Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: "Eagle Syndrome", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "An Uncommon, Often-Missed Diagnosis",
    body: "Eagle syndrome is caused by an elongated styloid process or a calcified stylohyoid ligament. Because it is uncommon and its symptoms overlap with several other conditions, it is frequently overlooked or misdiagnosed.",
  },
  {
    heading: "Symptoms That Mimic Other Conditions",
    body: "Throat, neck, facial, and ear pain associated with Eagle syndrome can resemble cervicogenic headache, TMJ disorders, or nerve-related facial pain, which is why careful evaluation is important.",
  },
  {
    heading: "Imaging-Guided Evaluation",
    body: "CT imaging can typically identify an elongated styloid process or calcified stylohyoid ligament, helping guide whether further specialist evaluation is appropriate.",
  },
];

export default function EagleSyndromePage() {
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
            Eagle Syndrome
            <br />
            <em className="not-italic text-[#888]">Evaluation.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Eagle syndrome is an uncommon cause of throat, neck, facial, and ear pain related to
            the styloid process or stylohyoid ligament. Dr. Dardashti provides supportive
            evaluation of pain symptoms that may be associated with this condition as part of a
            broader differential diagnosis.
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

      {/* WHAT IS EAGLE SYNDROME */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>01</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Overview</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              What Is Eagle Syndrome?
            </h2>
            <p>
              Eagle syndrome is a condition associated with an abnormally elongated styloid
              process — a small, pointed piece of bone that extends downward from the base of
              the skull — or calcification of the stylohyoid ligament, which normally connects
              the styloid process to the hyoid bone in the neck.
            </p>
            <p>
              When the styloid process is longer than typical, or when the stylohyoid ligament
              becomes calcified and rigid, these structures can irritate or compress nearby
              nerves, blood vessels, and soft tissue in the neck and throat. This is believed to
              be the underlying mechanism behind the pain symptoms associated with the condition.
            </p>
            <p>
              Eagle syndrome is considered uncommon, and elongated styloid processes are sometimes
              identified incidentally on imaging in patients without any symptoms. This means that
              an elongated styloid process alone does not confirm the diagnosis — symptoms,
              clinical history, and examination findings must be considered together.
            </p>
          </div>
        </div>

        {/* ILLUSTRATION: Eagle Syndrome Anatomy */}
        <div className="max-w-5xl mx-auto mt-12 flex justify-center">
          <MedicalFigure
            variant="default"
            role="anatomy"
            src="/images/conditions/eagle-syndrome-anatomy.png"
            alt="Medical illustration of Eagle syndrome showing the styloid process, stylohyoid ligament, throat, ear, jaw, and upper neck pain referral areas."
          />
        </div>
      </section>

      {/* COMMON SYMPTOMS */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>02</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Symptoms</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Common Symptoms Associated With Eagle Syndrome.
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              Symptoms that may be associated with Eagle syndrome include:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Throat pain, often described as a persistent ache or a sensation of a foreign body",
                "Neck pain, which may be dull or sharp and may worsen with certain head positions",
                "Facial pain, sometimes affecting one side more than the other",
                "Ear pain that is not explained by an ear examination",
                "Pain or discomfort with swallowing",
                "Pain that worsens with head or neck movement, or with turning the head",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm mt-6 max-w-2xl">
              These symptoms are not specific to Eagle syndrome and overlap significantly with
              other conditions. Their presence does not confirm the diagnosis on its own.
            </p>
          </div>
        </div>
      </section>

      {/* WHY IT MAY MIMIC OTHER CONDITIONS */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>03</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Overlap</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Why Eagle Syndrome May Mimic Other Conditions.
            </h2>
            <p>
              Because the styloid process and stylohyoid ligament are located near a number of
              nerves and vascular structures in the neck, symptoms of Eagle syndrome can closely
              resemble other, more common causes of head, neck, and facial pain — including
              cervicogenic headache, temporomandibular joint (TMJ) disorders, glossopharyngeal
              neuralgia, and cervical facet-related pain.
            </p>
            <p>
              This overlap means that Eagle syndrome is often considered only after other, more
              common causes of similar symptoms have been evaluated and are not fully explaining
              the clinical picture. A broad differential diagnosis is an important part of the
              evaluation process.
            </p>
          </div>
        </div>
      </section>

      {/* EVALUATION APPROACH */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>04</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Approach</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              General Evaluation Considerations.
            </h2>
            <p>
              Evaluation typically begins with a detailed history of pain location, character,
              triggers, and associated symptoms such as pain with swallowing or head movement.
              Physical examination may include palpation of the tonsillar region and assessment
              of pain reproduction with specific movements.
            </p>
            <p>
              Imaging plays an important role in evaluation. CT imaging, in particular, can
              identify an elongated styloid process or calcified stylohyoid ligament and help
              correlate anatomical findings with the patient&apos;s reported symptoms.
            </p>
            <p>
              Because Eagle syndrome sits at the intersection of several specialties, evaluation
              often involves coordination with an ear, nose, and throat (ENT) specialist or an
              oral-maxillofacial specialist, particularly when structural or surgical management
              of the styloid process or stylohyoid ligament is being considered.
            </p>
          </div>
        </div>
      </section>

      {/* ROLE OF PAIN MANAGEMENT */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>05</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Role</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              How Pain Management May Fit Into Evaluation.
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              Within a broader care team, pain management evaluation may contribute to the workup
              of suspected Eagle syndrome in the following ways:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Reviewing pain patterns and history to help distinguish Eagle syndrome from other pain generators",
                "Supporting differential diagnosis alongside ENT or oral-maxillofacial evaluation",
                "Discussing non-surgical pain care options when clinically appropriate",
                "Coordinating with other specialists when structural evaluation or surgical consultation is indicated",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm mt-6 max-w-2xl">
              Dr. Dardashti&apos;s role in suspected Eagle syndrome is one of supportive
              evaluation and pain-focused care coordination. Definitive structural or surgical
              management of an elongated styloid process, when indicated, is directed by ENT or
              oral-maxillofacial specialists.
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
              Eagle syndrome cannot be diagnosed from imaging findings or symptoms alone, and no
              single test or examination finding is definitive. This page is for general
              educational purposes only and does not constitute medical advice, and it does not
              represent a guarantee that any specific diagnosis will be confirmed or that any
              particular treatment will be recommended or effective.
            </p>
            <p>
              A formal clinical evaluation — often involving more than one specialist — is
              required to determine the likely cause of throat, neck, facial, or ear pain in any
              individual patient.
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
              <li><Link href="/conditions/cervicogenic-headache" className="text-[#c8a020] hover:underline tracking-wide">Cervicogenic Headache Evaluation →</Link></li>
              <li><Link href="/conditions/neuropathic-pain" className="text-[#c8a020] hover:underline tracking-wide">Neuropathic Pain Evaluation →</Link></li>
              <li><Link href="/conditions/facet-mediated-pain" className="text-[#c8a020] hover:underline tracking-wide">Facet-Mediated Pain Evaluation →</Link></li>
              <li><Link href="/conditions/neck-pain" className="text-[#c8a020] hover:underline tracking-wide">Neck Pain Evaluation →</Link></li>
              <li><Link href="/services" className="text-[#c8a020] hover:underline tracking-wide">View all Conditions &amp; Services →</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* MEDICAL REVIEW */}
      <MedicalReviewFooter path="/conditions/eagle-syndrome" />
    </>
  );
}
