import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://www.drdardashti.com/conditions/thoracic-outlet-syndrome";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Thoracic Outlet Syndrome Evaluation | Simon Dardashti, MD" },
  description:
    "Dr. Simon Dardashti evaluates thoracic outlet syndrome, which causes arm pain, numbness, and weakness due to compression of nerves and blood vessels.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Thoracic Outlet Syndrome Evaluation | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates thoracic outlet syndrome, which causes arm pain, numbness, and weakness due to compression of nerves and blood vessels.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thoracic Outlet Syndrome Evaluation | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates thoracic outlet syndrome, which causes arm pain, numbness, and weakness due to compression of nerves and blood vessels.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Thoracic Outlet Syndrome Evaluation | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Dr. Simon Dardashti evaluates thoracic outlet syndrome, which causes arm pain, numbness, and weakness due to compression of nerves and blood vessels.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  about: { "@type": "MedicalCondition", name: "Thoracic Outlet Syndrome" },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Conditions & Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: "Thoracic Outlet Syndrome", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "Nerve and Vessel Compression",
    body: "Thoracic outlet syndrome results from compression of nerves (brachial plexus) and blood vessels as they pass through the thoracic outlet between the neck and shoulder.",
  },
  {
    heading: "Varied Presentations",
    body: "Symptoms depend on which structures are compressed and may include arm pain, numbness, tingling, weakness, and neck or shoulder discomfort.",
  },
  {
    heading: "Multifactorial Condition",
    body: "Thoracic outlet syndrome results from anatomical compression and may be associated with postural factors, trauma, repetitive activities, or structural variations.",
  },
];

const faqs = [
  {
    q: "What does thoracic outlet syndrome feel like?",
    a: "Symptoms vary depending on which structures are compressed. Patients may experience tingling and numbness in the arm or hand, arm pain or heaviness, weakness in the arm or hand, or neck and shoulder pain. Some describe a feeling of swelling or numbness that worsens with overhead activities or repetitive use.",
  },
  {
    q: "Can thoracic outlet syndrome cause arm numbness?",
    a: "Yes. When the brachial plexus (nerves that control the arm) is compressed in neurogenic thoracic outlet syndrome, numbness and tingling in the arm and hand are common symptoms. The distribution of numbness depends on which specific nerves are affected.",
  },
  {
    q: "Is thoracic outlet syndrome the same as a pinched nerve?",
    a: "Thoracic outlet syndrome is a type of nerve compression, but it differs from typical cervical radiculopathy (pinched nerve in the neck). In TOS, compression occurs at the thoracic outlet as nerves and vessels pass through anatomically tight spaces, whereas cervical radiculopathy typically involves compression at the spine itself. The locations, mechanisms, and appropriate evaluations differ.",
  },
  {
    q: "Can thoracic outlet syndrome be seen on MRI?",
    a: "MRI can show anatomical structures in the thoracic outlet region and may reveal contributory factors such as cervical ribs, muscle hypertrophy, or other anatomical variations. However, thoracic outlet syndrome is primarily a clinical diagnosis based on symptoms and physical examination findings. Not all anatomical abnormalities visible on imaging cause symptoms, and not all cases of symptomatic TOS show obvious findings on MRI.",
  },
  {
    q: "Does thoracic outlet syndrome require surgery?",
    a: "Most cases of thoracic outlet syndrome respond to conservative treatment including physical therapy, activity modification, and postural correction. Surgery is considered only when conservative measures have been exhausted and symptoms remain significantly disabling. When surgery is appropriate, the decision depends on the specific type of TOS, the structures involved, and the patient's overall clinical picture.",
  },
  {
    q: "Can physical therapy help thoracic outlet syndrome?",
    a: "Physical therapy is often a first-line treatment for thoracic outlet syndrome. Therapy typically focuses on postural correction, stretching of tight muscles, strengthening of stabilizing muscles, and activity modification. Many patients experience significant improvement with a well-designed physical therapy program. The effectiveness depends on the underlying cause, patient compliance, and the specifics of the therapy approach.",
  },
  {
    q: "What is the difference between thoracic outlet syndrome and cervical radiculopathy?",
    a: "Thoracic outlet syndrome and cervical radiculopathy are distinct conditions affecting different anatomical locations. Cervical radiculopathy involves compression of a nerve root at the spine, typically causing pain that radiates in a specific nerve distribution, often with weakness in muscles supplied by that nerve. Thoracic outlet syndrome involves compression of multiple nerves (brachial plexus) or blood vessels as they pass through the thoracic outlet, with a broader distribution of symptoms. The causes, diagnoses, and treatments differ, so accurate diagnosis is important.",
  },
  {
    q: "Can thoracic outlet syndrome occur after a car accident?",
    a: "Yes. Trauma such as whiplash from a car accident can contribute to thoracic outlet syndrome by causing neck and shoulder injuries, postural changes, or inflammation that compresses structures in the thoracic outlet. Some patients develop TOS symptoms immediately after trauma, while others develop symptoms gradually. An evaluation can help determine whether trauma was a contributing factor and guide treatment planning.",
  },
];

export default function ThoracicOutletSyndromePage() {
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
            Thoracic Outlet
            <br />
            <em className="not-italic text-[#888]">Syndrome Evaluation.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Thoracic outlet syndrome results from compression of nerves and blood vessels
            as they pass through the thoracic outlet between the neck and shoulder. Dr. Dardashti
            evaluates thoracic outlet syndrome in the context of symptom presentation, physical
            examination findings, and results of diagnostic testing.
          </p>
        </div>
      </section>

      {/* IN BRIEF */}
      <section className="bg-white py-16 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-[#999] uppercase tracking-widest mb-8">In Brief</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#e5e5e0]">
            {inBrief.map((item, i) => (
              <div key={item.heading} className={`p-6 ${i < inBrief.length - 1 ? "border-b md:border-b-0 md:border-r border-[#e5e5e0]" : ""}`}>
                <div className="w-5 h-px bg-[#c8a020] mb-4" />
                <h2 className="font-bold text-[#0a0a0a] text-sm mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                  {item.heading}
                </h2>
                <p className="text-sm text-[#666] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>01</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Overview</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              What Is Thoracic Outlet Syndrome?
            </h2>
            <p>
              Thoracic outlet syndrome (TOS) results from compression of the brachial plexus (a network
              of nerves that controls arm movement and sensation) and blood vessels as they pass through
              the thoracic outlet — the anatomical space between the neck and shoulder formed by the collarbone,
              first rib, and surrounding muscles and tissues.
            </p>
            <p>
              This compression can develop due to anatomical variations such as a cervical rib or muscle
              abnormalities, postural factors, repetitive activities, or trauma such as whiplash. The symptoms
              and severity depend on which structures are compressed and the degree of compression.
            </p>
            <p>
              Thoracic outlet syndrome is distinct from cervical radiculopathy, which involves nerve compression
              at the spine. Understanding the specific type and cause of TOS is important for appropriate management.
            </p>
          </div>
        </div>
      </section>

      {/* TYPES OF TOS */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>02</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Types</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Types of Thoracic Outlet Syndrome.
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              Thoracic outlet syndrome is classified based on which structures are compressed:
            </p>
            <ul className="space-y-3 max-w-2xl mb-6">
              {[
                "Neurogenic TOS: Compression of the brachial plexus (nerves), the most common type, causing arm pain, numbness, tingling, and weakness",
                "Venous TOS: Compression of the axillary or subclavian vein, potentially causing arm swelling, discoloration, or clotting",
                "Arterial TOS: Compression of the subclavian artery, potentially causing arm pain, coldness, or circulatory symptoms",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm max-w-2xl">
              The specific type affects how the condition is evaluated and treated. Accurate diagnosis helps
              determine the appropriate management approach.
            </p>
          </div>
        </div>
      </section>

      {/* SYMPTOMS */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>03</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Symptoms</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Common Symptoms of Thoracic Outlet Syndrome.
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              Symptoms vary depending on which structures are compressed:
            </p>
            <ul className="space-y-3 max-w-2xl mb-6">
              {[
                "Numbness and tingling in the arm, hand, or fingers",
                "Arm pain, aching, or heaviness",
                "Weakness in the arm or hand",
                "Neck and shoulder pain or discomfort",
                "Symptoms that worsen with overhead activities or repetitive arm use",
                "Symptoms that worsen with certain positions or postures",
                "Swelling in the arm or hand (less common)",
                "Discoloration of the arm or hand (with venous or arterial involvement)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm max-w-2xl">
              Symptoms may be intermittent or constant and can vary in severity. Some patients experience
              symptoms that fluctuate with activity or posture.
            </p>
          </div>
        </div>
      </section>

      {/* CAUSES AND RISK FACTORS */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>04</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Causes</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Common Causes and Risk Factors.
            </h2>
            <p>
              Thoracic outlet syndrome results from compression of nerves and blood vessels at the thoracic outlet.
              Contributing factors may include:
            </p>
            <ul className="space-y-2 max-w-2xl list-none mt-4">
              {[
                "Anatomical variations such as a cervical rib or scalene muscle abnormalities",
                "Postural factors, particularly forward shoulder posture or upper crossed syndrome",
                "Repetitive overhead activities or repetitive arm use",
                "Trauma such as whiplash from motor vehicle accidents",
                "Muscle tension or tightness in the neck and shoulder region",
                "Hypertrophy (enlargement) of scalene or pectoralis muscles",
                "Clavicular fracture or abnormal healing",
                "Poor ergonomic setup during work or daily activities",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* DIAGNOSIS */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>05</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Diagnosis</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              How Thoracic Outlet Syndrome Is Diagnosed.
            </h2>
            <p>
              Diagnosis of thoracic outlet syndrome begins with a detailed history of symptoms, including
              when symptoms started, what activities worsen them, and how they affect daily functioning.
              A thorough physical examination includes assessment of posture, palpation of the thoracic outlet
              region, and provocative maneuvers designed to reproduce symptoms.
            </p>
            <p>
              Imaging studies such as cervical X-rays or MRI may be ordered to evaluate for structural
              abnormalities such as cervical ribs or other anatomical variations. Electrodiagnostic testing
              including electromyography (EMG) and nerve conduction studies may be performed to assess nerve
              function and help confirm nerve compression. Doppler ultrasound may be used if vascular involvement
              is suspected.
            </p>
            <p>
              Thoracic outlet syndrome is primarily a clinical diagnosis based on symptoms and examination findings,
              though imaging and testing support the clinical impression. Not all patients with anatomical abnormalities
              on imaging have symptoms, and some symptomatic patients may not show obvious findings.
            </p>
          </div>
        </div>
      </section>

      {/* TREATMENT OPTIONS */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>06</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Treatment</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Treatment Options That May Be Considered.
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              Treatment is individualized based on the type of TOS, severity of symptoms, and response to initial approaches:
            </p>
            <ul className="space-y-3 max-w-2xl mb-6">
              {[
                "Physical therapy focused on postural correction, stretching of tight muscles, and strengthening of stabilizing muscles",
                "Activity modification to avoid or reduce positions and activities that worsen symptoms",
                "Ergonomic optimization of workspace or daily activities",
                "Medications such as muscle relaxants or neuropathic pain agents when clinically appropriate",
                "Conservative management including heat therapy and lifestyle modifications",
                "Diagnostic nerve blocks or other diagnostic injections to clarify the source of symptoms when indicated",
                "Surgical referral when conservative measures have been exhausted and symptoms remain significantly disabling, or when specific indications are present",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm max-w-2xl">
              Most cases of thoracic outlet syndrome respond to conservative treatment. The response to treatment
              depends on the underlying cause, patient compliance with therapy, and the specifics of the treatment approach.
            </p>
          </div>
        </div>
      </section>

      {/* WHEN TO SEEK EVALUATION */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>07</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Evaluation</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              When to Seek Medical Attention.
            </h2>
            <p>
              An evaluation for thoracic outlet syndrome can be helpful if you experience:
            </p>
            <ul className="space-y-2 max-w-2xl list-none mt-4">
              {[
                "Persistent numbness, tingling, or pain in the arm or hand",
                "Arm weakness that affects your ability to work or perform daily activities",
                "Neck and shoulder pain associated with arm symptoms",
                "Symptoms that worsen with overhead activities or repetitive arm use",
                "Symptoms that developed after a traumatic injury such as whiplash",
                "Symptoms that have not improved with initial conservative treatment",
                "New or progressive arm swelling or discoloration",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555]">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              A clinical evaluation can help determine whether thoracic outlet syndrome is the underlying cause
              and guide appropriate treatment planning and management.
            </p>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <p className="text-xs text-[#999] uppercase tracking-widest mb-4">FAQ</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a]" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Frequently Asked Questions.
            </h2>
          </div>
          <div className="space-y-8 max-w-3xl">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-[#e5e5e0] pb-8 last:border-0">
                <h3 className="text-lg font-bold text-[#0a0a0a] mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                  {faq.q}
                </h3>
                <p className="text-[#666] text-base leading-relaxed">{faq.a}</p>
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
            <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Important Limitations.
            </h2>
            <p>
              Thoracic outlet syndrome diagnosis and management is complex. The condition can present in varied ways
              depending on the type and severity of compression, and response to treatment varies among patients. Some
              patients experience sustained relief with conservative treatment, while others may require procedural
              intervention or surgical referral. A formal clinical evaluation is required to determine appropriate
              treatment for any individual patient.
            </p>
            <p>
              This page is for general informational purposes only and does not constitute medical advice or
              create a physician-patient relationship.
            </p>
            <p>
              Dr. Dardashti sees patients in Mission Hills, California, serving patients from the San Fernando
              Valley, Santa Clarita Valley, and surrounding Los Angeles communities.
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
              <li><Link href="/conditions/neck-pain" className="text-[#c8a020] hover:underline tracking-wide">Neck Pain Evaluation →</Link></li>
              <li><Link href="/conditions/cervical-radiculopathy" className="text-[#c8a020] hover:underline tracking-wide">Cervical Radiculopathy Evaluation →</Link></li>
              <li><Link href="/conditions/occipital-neuralgia" className="text-[#c8a020] hover:underline tracking-wide">Occipital Neuralgia Evaluation →</Link></li>
              <li><Link href="/conditions/peripheral-nerve-pain" className="text-[#c8a020] hover:underline tracking-wide">Peripheral Nerve Pain Evaluation →</Link></li>
              <li><Link href="/procedures/peripheral-nerve-blocks" className="text-[#c8a020] hover:underline tracking-wide">Peripheral Nerve Blocks →</Link></li>
              <li><Link href="/services" className="text-[#c8a020] hover:underline tracking-wide">View all Conditions &amp; Services →</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
