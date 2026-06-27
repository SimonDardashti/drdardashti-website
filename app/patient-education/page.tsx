import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://www.drdardashti.com/patient-education";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Patient Education Resources | Simon Dardashti, MD" },
  description:
    "Educational resources to help you understand pain conditions, treatment options, conservative care approaches, and medical procedures. Physician-authored patient education.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Patient Education Resources | Simon Dardashti, MD",
    description:
      "Educational resources to help you understand pain conditions, treatment options, conservative care approaches, and medical procedures.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Patient Education Resources | Simon Dardashti, MD",
    description:
      "Educational resources to help you understand pain conditions, treatment options, conservative care approaches, and medical procedures.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Patient Education Resources | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Educational resources to help you understand pain conditions, treatment options, conservative care approaches, and medical procedures.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Patient Education", item: PAGE_URL },
    ],
  },
};

export default function PatientEducationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      {/* HERO */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Educational Resources
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Patient
            <br />
            <em className="not-italic text-[#888]">Education.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Educational resources to help you better understand pain conditions, treatment options, conservative care, and procedures.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-20">
          {/* UNDERSTANDING PAIN */}
          <div>
            <h2 className="text-2xl font-bold text-[#0a0a0a] mb-8" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Understanding Pain
            </h2>
            <div className="space-y-4">
              <Link href="/pain-without-imaging" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Pain Without Imaging Findings</h3>
                <p className="text-[#666] text-sm leading-relaxed">Many patients experience significant pain despite normal imaging. Learn why imaging findings don't always correlate with clinical symptoms.</p>
              </Link>
              <Link href="/treatment-options" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Treatment Options</h3>
                <p className="text-[#666] text-sm leading-relaxed">Overview of conservative care, interventional procedures, and surgical considerations in pain management decision-making.</p>
              </Link>
              <Link href="/second-opinion-spine-surgery" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Second Opinion Before Spine Surgery</h3>
                <p className="text-[#666] text-sm leading-relaxed">Why seeking a second opinion before spine surgery is important, and what to expect during an independent evaluation.</p>
              </Link>
            </div>
          </div>

          {/* PREPARING FOR YOUR VISIT */}
          <div>
            <h2 className="text-2xl font-bold text-[#0a0a0a] mb-8" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Preparing for Your Visit
            </h2>
            <div className="space-y-4">
              <Link href="/what-to-expect-pain-consultation" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">What to Expect During a Pain Consultation</h3>
                <p className="text-[#666] text-sm leading-relaxed">Guide to the pain evaluation process, including what records to bring, examination components, and how treatment decisions are made.</p>
              </Link>
              <Link href="/virtual-consultations" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Virtual Consultations</h3>
                <p className="text-[#666] text-sm leading-relaxed">Information about telehealth pain medicine consultations, how they work, and what to prepare.</p>
              </Link>
            </div>
          </div>

          {/* CONSERVATIVE CARE */}
          <div>
            <h2 className="text-2xl font-bold text-[#0a0a0a] mb-8" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Conservative Care
            </h2>
            <div className="space-y-4">
              <Link href="/conservative-care" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Conservative Treatments for Chronic Pain</h3>
                <p className="text-[#666] text-sm leading-relaxed">Comprehensive overview of physical therapy, exercise, mind-body therapies, and lifestyle approaches to pain management.</p>
              </Link>
              <Link href="/articles/aquatic-therapy-arthritis" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Aquatic Physical Therapy</h3>
                <p className="text-[#666] text-sm leading-relaxed">How water-based therapy reduces weight-bearing stress while providing resistance for strengthening and pain management.</p>
              </Link>
              <Link href="/mcgill-big-3-exercises" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">McGill Big 3 Exercises</h3>
                <p className="text-[#666] text-sm leading-relaxed">Evidence-based spinal stability exercises: proper technique, common mistakes, who benefits, and contraindications.</p>
              </Link>
              <Link href="/thoracic-foam-rolling" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Thoracic Foam Rolling</h3>
                <p className="text-[#666] text-sm leading-relaxed">Improving upper back mobility to reduce neck and shoulder pain. Technique, benefits, precautions, and timeline.</p>
              </Link>
            </div>
          </div>

          {/* SPINE CONDITIONS */}
          <div>
            <h2 className="text-2xl font-bold text-[#0a0a0a] mb-8" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Spine Conditions
            </h2>
            <div className="space-y-4">
              <Link href="/conditions/low-back-pain" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Low Back Pain Evaluation</h3>
                <p className="text-[#666] text-sm leading-relaxed">Comprehensive approach to evaluating low back pain, from diagnosis through treatment decision-making.</p>
              </Link>
              <Link href="/conditions/neck-pain" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Neck Pain Evaluation</h3>
                <p className="text-[#666] text-sm leading-relaxed">Evaluation of neck pain causes, relationship to posture and function, and treatment approaches.</p>
              </Link>
              <Link href="/conditions/lumbar-radiculopathy" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Lumbar Radiculopathy</h3>
                <p className="text-[#666] text-sm leading-relaxed">Understanding nerve root irritation in the lower spine, symptoms, imaging considerations, and management.</p>
              </Link>
              <Link href="/conditions/cervical-radiculopathy" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Cervical Radiculopathy</h3>
                <p className="text-[#666] text-sm leading-relaxed">Nerve compression in the neck, how it presents, why symptoms persist, and evaluation approach.</p>
              </Link>
              <Link href="/conditions/lumbar-spinal-stenosis" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Lumbar Spinal Stenosis</h3>
                <p className="text-[#666] text-sm leading-relaxed">Narrowing of the spinal canal, how it relates to symptoms, and why leaning forward provides relief.</p>
              </Link>
              <Link href="/conditions/persistent-pain-after-spine-surgery" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Persistent Pain After Spine Surgery</h3>
                <p className="text-[#666] text-sm leading-relaxed">Understanding ongoing symptoms after surgical intervention, evaluation strategies, and management options.</p>
              </Link>
              <Link href="/conditions/cervicogenic-headache" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Cervicogenic Headache</h3>
                <p className="text-[#666] text-sm leading-relaxed">When neck problems cause head pain, how to differentiate from migraine, and treatment approaches.</p>
              </Link>
              <Link href="/conditions/whiplash-associated-disorder" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Whiplash-Associated Disorder</h3>
                <p className="text-[#666] text-sm leading-relaxed">Medical evaluation and management of neck pain following motor vehicle collision or other injury.</p>
              </Link>
            </div>
          </div>

          {/* PROCEDURES */}
          <div>
            <h2 className="text-2xl font-bold text-[#0a0a0a] mb-8" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Procedures & Interventions
            </h2>
            <div className="space-y-4">
              <Link href="/procedures/epidural-steroid-injections" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Epidural Steroid Injections</h3>
                <p className="text-[#666] text-sm leading-relaxed">How epidural injections work, when they're considered, what to expect, and realistic expectations.</p>
              </Link>
              <Link href="/procedures/radiofrequency-ablation" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Radiofrequency Ablation</h3>
                <p className="text-[#666] text-sm leading-relaxed">Advanced procedure targeting pain-generating nerve fibers, when it's appropriate, and expected outcomes.</p>
              </Link>
              <Link href="/procedures/facet-joint-injections-medial-branch-blocks" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Facet Joint Injections & Medial Branch Blocks</h3>
                <p className="text-[#666] text-sm leading-relaxed">Diagnostic and therapeutic injections for facet-mediated pain conditions.</p>
              </Link>
              <Link href="/procedures/sacroiliac-joint-injections" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Sacroiliac Joint Injections</h3>
                <p className="text-[#666] text-sm leading-relaxed">Treatment for sacroiliac joint pain, when appropriate, and what to expect.</p>
              </Link>
              <Link href="/procedures/trigger-point-injections" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Trigger Point Injections</h3>
                <p className="text-[#666] text-sm leading-relaxed">Injection technique for myofascial pain, when used, and role in overall pain management.</p>
              </Link>
              <Link href="/procedures/peripheral-nerve-blocks" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Peripheral Nerve Blocks</h3>
                <p className="text-[#666] text-sm leading-relaxed">Diagnostic and therapeutic nerve blocks for various pain conditions.</p>
              </Link>
              <Link href="/procedures/spinal-cord-stimulation-evaluation" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Spinal Cord Stimulation Evaluation</h3>
                <p className="text-[#666] text-sm leading-relaxed">Advanced treatment for chronic pain, patient selection, trial process, and expected outcomes.</p>
              </Link>
            </div>
          </div>

          {/* ARTICLES & RESOURCES */}
          <div>
            <h2 className="text-2xl font-bold text-[#0a0a0a] mb-8" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Additional Resources
            </h2>
            <div className="space-y-4">
              <Link href="/articles" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Articles & Resources Hub</h3>
                <p className="text-[#666] text-sm leading-relaxed">Collection of educational articles on pain management, conservative care, and evidence-based approaches.</p>
              </Link>
              <Link href="/conditions" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">All Conditions</h3>
                <p className="text-[#666] text-sm leading-relaxed">Complete directory of pain conditions evaluated, organized by type and body region.</p>
              </Link>
              <Link href="/procedures" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">All Procedures</h3>
                <p className="text-[#666] text-sm leading-relaxed">Complete overview of interventional and conservative treatment procedures offered.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
