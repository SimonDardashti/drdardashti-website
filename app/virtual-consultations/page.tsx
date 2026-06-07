import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://www.drdardashti.com/virtual-consultations";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Virtual Consultations for Pain Medicine | Simon Dardashti, MD" },
  description:
    "Virtual consultations for selected patients with spine, nerve, and joint pain. Earlier evaluation, imaging direction, and treatment planning for patients with mobility, transportation, or scheduling barriers.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Virtual Consultations for Pain Medicine | Simon Dardashti, MD",
    description:
      "Virtual consultations for selected patients with spine, nerve, and joint pain. Earlier evaluation, imaging direction, and treatment planning for patients with mobility, transportation, or scheduling barriers.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Virtual Consultations for Pain Medicine | Simon Dardashti, MD",
    description:
      "Virtual consultations for selected patients with spine, nerve, and joint pain. Earlier evaluation, imaging direction, and treatment planning for patients with mobility, transportation, or scheduling barriers.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Virtual Consultations for Pain Medicine | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Virtual consultations for selected patients with spine, nerve, and joint pain. Earlier evaluation, imaging direction, and treatment planning for patients with mobility, transportation, or scheduling barriers.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Virtual Consultations", item: PAGE_URL },
    ],
  },
};

const patientGroups = [
  {
    heading: "Limited mobility or disability",
  },
  {
    heading: "Transportation barriers",
  },
  {
    heading: "Long wait times for specialty care",
  },
  {
    heading: "Work or family scheduling constraints",
  },
  {
    heading: "Recent car accidents",
  },
  {
    heading: "Workplace accidents",
  },
  {
    heading: "Falls or acute injuries",
  },
  {
    heading: "Existing MRI, CT, X-ray, or medical records available for review",
  },
];

export default function VirtualConsultationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      {/* HERO */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto flex flex-col gap-6">
          <div>
            <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              Services &amp; Options
            </p>
            <h1
              className="text-4xl md:text-6xl font-bold leading-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Virtual Consultations
              <br />
              <em className="not-italic text-[#888]">for Pain Medicine.</em>
            </h1>
            <p className="mt-5 text-[#666] text-lg leading-relaxed max-w-2xl">
              Accessible pain medicine evaluation from home. Dr. Simon Dardashti offers virtual
              consultations for selected patients with spine, nerve, and joint pain. Virtual visits
              can make it easier to begin the evaluation process, review symptoms and prior imaging,
              discuss treatment options, and determine whether an in-person examination or procedure
              may be appropriate.
            </p>
            <p className="mt-4 text-[#666] text-lg leading-relaxed max-w-2xl">
              Virtual consultations may be especially helpful for patients with limited mobility,
              disability, transportation barriers, work or family scheduling limitations, or long
              wait times for specialty care.
            </p>
          </div>
        </div>
      </section>

      {/* REDUCING SUFFERING */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>01</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Earlier Care</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Reducing Suffering Through Earlier Evaluation
            </h2>
            <p>
              Pain can become more difficult to manage when evaluation is delayed. After a car
              accident, workplace accident, fall, or acute injury, patients may be left waiting
              without clear direction while pain, uncertainty, and functional limitations continue.
            </p>
            <p>
              A virtual consultation can help begin the assessment process sooner. During the visit,
              Dr. Dardashti can review the mechanism of injury, pain location, neurologic symptoms,
              functional limitations, prior treatment, medication history, and any available imaging
              or records.
            </p>
            <p>
              When appropriate, this may allow earlier recommendations for imaging, additional
              diagnostic workup, conservative care, medication considerations, interventional pain
              procedures, or an in-person examination.
            </p>
            <p>
              Virtual consultations may be especially helpful for patients who need timely review of
              whether imaging should be requested, or for patients who already have imaging reports,
              MRI or CT studies, medical records, or prior treatment notes available for review.
            </p>
          </div>
        </div>
      </section>

      {/* WHO VIRTUAL CONSULTATIONS MAY HELP */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>02</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Eligibility</p>
          </div>
          <div className="md:col-span-10 space-y-6 text-[#555] text-base leading-relaxed">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Who Virtual Consultations May Help
              </h2>
              <p className="mb-6">
                Virtual consultations may be helpful for patients with spine, nerve, or joint pain
                who have difficulty attending an in-person visit or who need earlier direction
                regarding next steps in care.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
              {patientGroups.map((group) => (
                <div
                  key={group.heading}
                  className="flex items-start gap-3 p-3 bg-[#f9f7f4] rounded border border-[#e5e5e0]"
                >
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <p className="text-sm text-[#0a0a0a]">{group.heading}</p>
                </div>
              ))}
            </div>
            <p className="mt-6">
              For some patients, an earlier virtual consultation can help determine whether imaging,
              additional diagnostic testing, conservative treatment, medication management,
              interventional pain procedures, or an in-person examination may be appropriate.
            </p>
          </div>
        </div>
      </section>

      {/* FASTER DIAGNOSIS */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>03</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Planning</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Faster Diagnosis and Treatment Planning
            </h2>
            <p>
              Virtual consultations can help organize the next steps in care. By reviewing the
              history, pain pattern, functional limitations, prior treatments, and available records,
              Dr. Dardashti can help identify possible pain generators and determine what additional
              information may be needed.
            </p>
            <p>
              This may include review of whether imaging should be requested, whether prior imaging
              needs to be obtained, whether conservative care should be started or continued, or
              whether an in-person examination or procedure should be considered.
            </p>
            <p>
              The goal is to reduce unnecessary delay and help patients move from uncertainty toward
              a clearer diagnostic and treatment plan.
            </p>
          </div>
        </div>
      </section>

      {/* CONVENIENCE */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>04</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Accessibility</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Convenience Without Delaying Care
            </h2>
            <p>
              For many patients, travel itself can worsen pain. Sitting in traffic, arranging
              transportation, missing work, relying on caregivers, or transferring in and out of a
              vehicle may create additional barriers to care.
            </p>
            <p>
              A virtual consultation allows selected patients to begin the discussion from home. This
              can be especially valuable when the first priority is to review symptoms, records,
              imaging reports, prior treatment, and determine the next appropriate step.
            </p>
          </div>
        </div>
      </section>

      {/* WHEN IN-PERSON MAY BE NEEDED */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>05</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Limitations</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              When an In-Person Visit May Still Be Needed
            </h2>
            <p>
              Virtual consultations do not replace every aspect of an in-person physical examination.
              Some patients may still require an in-office examination, imaging review, neurologic
              assessment, or procedure.
            </p>
            <p>
              Patients with severe or progressive weakness, bowel or bladder dysfunction, fever,
              infection concern, recent major trauma, or rapidly worsening neurologic symptoms should
              seek urgent or emergency medical care.
            </p>
          </div>
        </div>
      </section>

      {/* SUPPORTING LITERATURE */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#999] uppercase tracking-widest">Evidence</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Supporting Literature
            </h2>
            <p>
              Published pain medicine literature has emphasized that telehealth can improve access
              for patients with mobility, travel, or time constraints, reduce the burden of travel,
              support timely consultation, and help patients receive care in a more efficient manner.
            </p>
            <div className="mt-6 p-6 bg-[#f9f7f4] border-l-4 border-[#c8a020]">
              <p className="text-sm italic text-[#666]">
                Pritzlaff SG, Singh N, Sanghvi C, Schatman ME. Telehealth is Crucial for Pain
                Medicine: Patients and Doctors are at the Brink, and Medicare Must Act Now.{" "}
                <em>Journal of Pain Research</em>. 2025;18:1057-1059.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SUMMARY */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#999] uppercase tracking-widest">Summary</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Virtual Consultation Summary
            </h2>
            <p>
              Virtual consultations may help selected patients receive earlier evaluation, reduce
              unnecessary delays, review whether imaging or additional diagnostic workup may be
              appropriate, and move toward a clearer treatment plan.
            </p>
            <p>
              This option may be especially helpful for patients with spine, nerve, or joint pain
              after a car accident, workplace accident, fall, acute injury, or for patients who
              already have imaging or medical records available for review.
            </p>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="bg-[#0a0a0a] py-16 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#666] uppercase tracking-widest">Important</p>
          </div>
          <div className="md:col-span-10 space-y-3 text-[#888] text-sm leading-relaxed">
            <p>
              This page is for general informational purposes only and does not constitute medical
              advice or create a physician-patient relationship. All medical decisions should be made
              in consultation with a qualified healthcare provider following a thorough clinical
              evaluation.
            </p>
            <p>
              Dr. Dardashti sees patients in Mission Hills, California, serving patients from the
              San Fernando Valley, Santa Clarita Valley, and surrounding Los Angeles communities.
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
              Related Services &amp; Information.
            </h2>
            <ul className="space-y-3 text-sm">
              <li><Link href="/conditions" className="text-[#c8a020] hover:underline tracking-wide">Conditions Evaluated →</Link></li>
              <li><Link href="/procedures" className="text-[#c8a020] hover:underline tracking-wide">Procedures & Treatment Options →</Link></li>
              <li><Link href="/about" className="text-[#c8a020] hover:underline tracking-wide">About Dr. Dardashti →</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
