import type { Metadata } from "next";
import Link from "next/link";
import { MedicalFigure } from "@/components/illustrations";

import MedicalReviewFooter from "@/components/MedicalReviewFooter";

const PAGE_URL = "https://www.drdardashti.com/conditions/persistent-pain-after-spine-surgery";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Persistent Pain After Spine Surgery | Simon Dardashti, MD" },
  description:
    "Understanding why pain persists after spine surgery and exploring evidence-based treatment options. Physician-authored guide from a board-certified pain medicine specialist.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Persistent Pain After Spine Surgery | Simon Dardashti, MD",
    description:
      "Comprehensive guide to ongoing symptoms after spine surgery: why they occur, how to evaluate them, and what treatment options may still help.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Persistent Pain After Spine Surgery | Simon Dardashti, MD",
    description:
      "Understanding and treating persistent pain after spine surgery—causes, evaluation, and evidence-based options.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalWebPage", "Article"],
  name: "Persistent Pain After Spine Surgery | Simon Dardashti, MD",
  url: PAGE_URL,
  headline: "Persistent Pain After Spine Surgery: Causes, Evaluation, and Treatment Options",
  description:
    "Comprehensive guide to understanding ongoing pain and symptoms after spine surgery, written by a board-certified pain medicine physician. Covers causes, evaluation methods, diagnostic injections, conservative options, neuromodulation, and when revision surgery may be appropriate.",
  image: "https://drdardashti.com/og-images/persistent-pain-after-spine-surgery.jpg",
  datePublished: "2026-06-18",
  dateModified: "2026-06-18",
  author: {
    "@type": "Person",
    name: "Simon Dardashti, MD",
    title: "Board-Certified Pain Medicine Physician",
    url: SITE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: "Simon Dardashti, MD",
  },
  about: { "@type": "MedicalCondition", name: "Persistent Pain After Spine Surgery" },
  inLanguage: "en",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is it normal to have ongoing pain after spine surgery?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, it is not uncommon for some patients to experience ongoing pain after spine surgery. Studies suggest that 10-40% of patients may have persistent symptoms, depending on the type of surgery and what caused the original pain. The good news: this does not mean the surgery was unsuccessful, and there are often additional treatment options available.",
        },
      },
      {
        "@type": "Question",
        name: "Why would symptoms continue after successful spine surgery?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Multiple reasons can explain persistent symptoms: the surgical approach may not have addressed all pain generators, scar tissue may develop after surgery, adjacent segments may degenerate over time, nerve irritation may persist despite surgical decompression, or the original pain may have had multiple sources—some surgical and some not. This is why comprehensive evaluation is important.",
        },
      },
      {
        "@type": "Question",
        name: "Should I get imaging (MRI, CT) after spine surgery if I still have pain?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sometimes, but not always. Imaging can reveal structural changes like scar tissue, adjacent segment degeneration, or residual stenosis. However, imaging findings don't always correlate with symptoms. We typically order imaging when symptoms suggest a specific structural problem or when it will change treatment planning. A targeted history and physical exam often guide whether imaging is needed.",
        },
      },
      {
        "@type": "Question",
        name: "What are diagnostic injections and how do they help after spine surgery?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Diagnostic injections deliver numbing medication to specific pain generators (facet joints, nerve roots, sacroiliac joints, etc.) to determine if that structure is causing your pain. If you get significant relief after the injection, it confirms that structure is a pain source and suggests it may respond to further treatment—whether conservative care or repeat procedures.",
        },
      },
      {
        "@type": "Question",
        name: "Is revision surgery the only option for persistent pain after surgery?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Revision surgery is rarely the first choice after spine surgery. Most persistent pain improves with conservative management (physical therapy, medication, activity modification) and minimally invasive procedures (injections, nerve blocks, neuromodulation). Revision surgery is considered when: imaging clearly shows an addressable problem, conservative and minimally invasive options have been exhausted, and the patient is a reasonable surgical candidate.",
        },
      },
      {
        "@type": "Question",
        name: "What is epidural fibrosis and can it be treated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Epidural fibrosis (scar tissue around spinal nerves) develops in some patients after spine surgery and can contribute to ongoing pain. While it cannot be eliminated, its impact can be managed through physical therapy, anti-inflammatory medications, epidural steroid injections to reduce inflammation around the scarred area, and sometimes neuromodulation if conservative measures don't provide sufficient relief.",
        },
      },
      {
        "@type": "Question",
        name: "What is spinal cord stimulation and when might it help?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Spinal cord stimulation is a neuromodulation device that delivers electrical pulses to spinal nerves, interrupting pain signals before they reach the brain. It may be considered when: persistent pain is primarily neuropathic (nerve-related), conservative treatments and procedures haven't provided sufficient relief, and imaging doesn't reveal a surgically correctable problem. It requires an evaluation trial before permanent implant.",
        },
      },
      {
        "@type": "Question",
        name: "How long should I try conservative treatment after spine surgery before considering other options?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "This varies by situation. Physical therapy typically requires 6-12 weeks to show meaningful improvement. Medications may need 4-6 weeks to demonstrate benefit. If you have tried conservative options for 8-12 weeks without significant improvement, and your symptoms are limiting your function, it's reasonable to pursue diagnostic evaluation and consider minimally invasive options like injections or neuromodulation trials.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get a second opinion about my persistent pain after surgery?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. A second opinion is valuable after spine surgery, particularly if you're having ongoing symptoms. I can review your surgical records, imaging, and current symptoms to help determine the most likely cause of your persistent pain and discuss what treatment options may still help. A comprehensive evaluation from an independent pain specialist often clarifies the path forward.",
        },
      },
    ],
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Conditions", item: `${SITE_URL}/conditions` },
      { "@type": "ListItem", position: 3, name: "Persistent Pain After Surgery", item: PAGE_URL },
    ],
  },
};

export default function PersistentPainAfterSpineSurgeryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      <article className="prose prose-lg max-w-3xl mx-auto px-4 py-12 md:py-16 lg:py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900">
          Persistent Pain After Spine Surgery
        </h1>

        <section className="mb-12">
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            You had spine surgery hoping it would relieve your pain. But now, weeks or months later, you still have ongoing symptoms. You're wondering: Why? Is this normal? What can be done?
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Persistent pain after spine surgery is more common than many patients realize. Studies suggest that 10-40% of patients experience ongoing symptoms after spine surgery, depending on the type of procedure and what caused the original problem. The important thing to understand: this does not necessarily mean the surgery failed or was unnecessary. It means your pain may be more complex than initially thought—and there are often additional options available.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            This page explains why symptoms can persist after spine surgery, how to evaluate ongoing pain systematically, and what treatment approaches—from conservative care to minimally invasive procedures to revision surgery—may still help.
          </p>
        </section>

        {/* ILLUSTRATION: Post-Surgical Pain Mechanisms */}
        <div className="my-12 flex justify-center">
          <MedicalFigure
            role="mechanism"
            src="/images/conditions/pain-mechanisms.png"
            alt="Persistent pain after spine surgery showing multiple contributing mechanisms including residual nerve irritation, scar tissue formation, adjacent segment degeneration, facet joint pain, and central sensitization"
            caption="Why Pain Persists After Spine Surgery: Spine surgery addresses specific structural problems, but persistent pain often reflects that the original pain had multiple sources. Common contributors include residual nerve irritation despite decompression, scar tissue formation (epidural fibrosis), adjacent segment degeneration occurring over time, facet or sacroiliac joint pain that was present but not addressed, and changes in how the nervous system processes pain. Understanding these mechanisms helps explain why surgery may not have eliminated all pain, and identifies which specific contributors can still be addressed through targeted procedures or conservative management."
            priority={true}
          />
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Pain Can Persist After Spine Surgery</h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Spine surgery addresses specific structural problems—decompressing a nerve root, stabilizing a segment, removing a disc. But pain is often multifactorial. Persistent symptoms after surgery can indicate:
          </p>

          <ul className="list-disc list-inside space-y-3 text-gray-700 mb-4">
            <li><strong>Multiple pain generators:</strong> Your original pain may have had multiple sources. Surgery addressed one, but others remain.</li>
            <li><strong>Incomplete decompression:</strong> The surgical approach may not have fully relieved pressure on all affected nerves.</li>
            <li><strong>Post-surgical changes:</strong> Scar tissue, inflammation, and swelling develop naturally after surgery and can irritate nerves.</li>
            <li><strong>Continued nerve irritation:</strong> Despite surgical decompression, a nerve root may remain irritated or inflamed.</li>
            <li><strong>Adjacent segment changes:</strong> Segments above or below the surgery may degenerate over time, creating new pain sources.</li>
            <li><strong>Non-surgical pain generators:</strong> Facet joints, sacroiliac joints, or peripheral nerves may be contributing pain independent of the original surgical problem.</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700">
            The key insight: persistent pain after surgery is not a reflection on surgical technique. It reflects the complexity of spine pain and the fact that many patients have multiple pain generators that need to be identified and addressed individually.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Common Causes of Ongoing Symptoms After Surgery</h2>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Residual Nerve Irritation</h3>
              <p className="text-gray-700">
                Despite surgical decompression, a nerve root may remain irritated or inflamed. This can produce ongoing radicular pain (pain radiating into the leg or arm). Residual irritation often improves with time, anti-inflammatory medications, and conservative management, but may benefit from diagnostic injections if symptoms persist.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Scar Tissue (Epidural Fibrosis)</h3>
              <p className="text-gray-700">
                After spine surgery, scar tissue naturally forms around the surgical site and can occasionally irritate nerve roots. This condition, called epidural fibrosis, develops in some patients and may contribute to ongoing neuropathic pain. While scar tissue cannot be eliminated, its effects can be managed with anti-inflammatory treatments and sometimes neuromodulation.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Adjacent Segment Degeneration</h3>
              <p className="text-gray-700">
                Over time—sometimes years after surgery—segments above or below the fusion or surgical area may degenerate. This is a natural consequence of aging and changed biomechanics, not a complication of surgery. When it occurs, it can create new pain sources requiring separate management.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Facet-Mediated Pain</h3>
              <p className="text-gray-700">
                Facet joints (the small joints connecting vertebrae) may be a primary or contributory pain source that was not addressed by the original surgery. After spine surgery, facet pain may become more apparent. Diagnostic facet injections can identify if facet joints are contributing.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sacroiliac Joint Dysfunction</h3>
              <p className="text-gray-700">
                Sacroiliac joint pain can coexist with or develop independently from lumbar spine problems. Some patients have ongoing sacroiliac pain that was never identified before surgery. Diagnostic sacroiliac joint injections help determine if this joint is contributing.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Peripheral Nerve Pain</h3>
              <p className="text-gray-700">
                Conditions like small fiber neuropathy, chemotherapy-induced neuropathy, or other peripheral nerve problems may coexist with spine-related pain. These conditions can persist after spine surgery because they originate outside the spine. They require separate evaluation and management.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">When Imaging Explains Symptoms—and When It Doesn't</h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Imaging after spine surgery can show many findings: scar tissue, adjacent segment degeneration, residual stenosis, or hardware-related changes. But here's the critical point: <strong>imaging findings don't always correlate with pain.</strong>
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">You might have:</p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li><strong>Significant imaging findings without corresponding pain</strong> — Some structural changes cause no symptoms</li>
            <li><strong>Severe symptoms with mild imaging findings</strong> — Symptoms may be out of proportion to what imaging shows</li>
            <li><strong>Normal imaging with ongoing symptoms</strong> — The pain generators may not be visible on standard imaging</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700">
            This is why pain without clear imaging findings is not uncommon after surgery. We evaluate persistent symptoms based on your clinical presentation, not just imaging. Diagnostic injections are often more informative than imaging for identifying pain sources.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">How I Evaluate Persistent Pain After Surgery</h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Proper evaluation of persistent pain after spine surgery requires a systematic approach:
          </p>

          <div className="space-y-4 mb-6">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Detailed History</h3>
              <p className="text-gray-700">When did pain improve after surgery, and when did it return or persist? Did certain symptoms never improve? What makes symptoms better or worse? This timeline is crucial.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Complete Surgical Record Review</h3>
              <p className="text-gray-700">Understanding exactly what was done during surgery—which levels, what approach, what was decompressed or fused—provides essential context.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Imaging Correlation</h3>
              <p className="text-gray-700">Recent MRI or CT imaging helps identify post-surgical changes, adjacent segment degeneration, or residual pathology. But we interpret imaging in the context of your symptoms.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Comprehensive Physical Examination</h3>
              <p className="text-gray-700">Careful examination of your back, pelvis, and lower extremities helps identify where pain originates and which structures are involved.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">5. Diagnostic Injections</h3>
              <p className="text-gray-700">Strategic injections to facet joints, nerve roots, sacroiliac joints, or other structures help pinpoint pain generators and guide treatment.</p>
            </div>
          </div>

          <p className="text-lg leading-relaxed text-gray-700">
            The goal is to identify specifically which structures are causing your ongoing symptoms so we can target treatment accordingly.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Diagnostic Injections and Their Role</h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Diagnostic injections are invaluable after spine surgery because they help identify specifically which structure is causing pain. The process works like this:
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            We inject numbing medication (local anesthetic) around a specific pain generator—a facet joint, nerve root, sacroiliac joint, or other structure. If you get significant pain relief (typically 50-80%) that matches how much you usually hurt, it confirms that structure is a primary pain source.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            <strong>Why this matters:</strong> A positive diagnostic injection suggests that structure may respond to further treatment—whether radiofrequency ablation, repeat epidural injections, or other interventions.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Conversely, if a diagnostic injection provides minimal relief, it tells us that structure is not a primary pain source, allowing us to focus on other possibilities.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Conservative Treatment Options</h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Many patients with persistent pain after spine surgery benefit significantly from conservative management:
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Physical Therapy and Rehabilitation</h3>
              <p className="text-gray-700 mb-2">
                Specialized physical therapy after spine surgery helps address muscular weakness, movement dysfunction, and flexibility limitations that develop post-operatively. Post-surgical rehabilitation is different from pre-surgical therapy and focuses on restoring function in the context of what was done surgically.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Medications</h3>
              <p className="text-gray-700 mb-2">
                Depending on the type of pain, medications may help: anti-inflammatory drugs for inflammatory pain, neuropathic pain medications (gabapentin, pregabalin, duloxetine) for nerve-related pain, or muscle relaxants for muscular components.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Activity Modification</h3>
              <p className="text-gray-700 mb-2">
                Understanding which activities worsen pain and which are tolerable helps you stay active while managing symptoms. Many patients find that gentle activity, low-impact exercise, and strategic rest are beneficial.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Weight Management</h3>
              <p className="text-gray-700 mb-2">
                For patients with higher body weight, gradual weight loss can reduce load on the spine and often improves symptoms.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Sleep and Stress Management</h3>
              <p className="text-gray-700 mb-2">
                Sleep disturbances worsen pain perception. Addressing sleep quality, stress management, and psychological factors often helps.
              </p>
            </div>
          </div>

          <p className="text-lg leading-relaxed text-gray-700">
            Conservative management should be tried systematically for 8-12 weeks before moving to more invasive options—unless symptoms are severely disabling.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">When Neuromodulation May Be Considered</h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Neuromodulation—using electrical stimulation to interrupt pain signals—may be appropriate when:
          </p>

          <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
            <li><strong>Pain is primarily neuropathic</strong> — Nerve-related pain (burning, tingling, electric shocks) often responds well to stimulation</li>
            <li><strong>Conservative treatments have not provided adequate relief</strong> — After 8-12 weeks of therapy and medication</li>
            <li><strong>Imaging does not reveal a surgically correctable problem</strong> — Surgery is unlikely to help further</li>
            <li><strong>You are a candidate for trial and potential implant</strong> — Medical factors allow safe placement</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            The most common form is <strong>spinal cord stimulation (SCS),</strong> which delivers mild electrical pulses to spinal nerves. Before permanent implant, you undergo a trial period (typically 3-7 days) with an external trial device. If the trial provides adequate relief (typically 50% or greater improvement), you may proceed to permanent implant.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            <Link href="/procedures/spinal-cord-stimulation-evaluation" className="text-blue-600 hover:text-blue-800">Spinal cord stimulation evaluation</Link> determines whether you're a candidate and whether a trial is worth pursuing.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">When Revision Surgery May Be Appropriate</h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Revision spine surgery is rarely the first choice for persistent post-operative pain. However, it may be appropriate when:
          </p>

          <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
            <li><strong>Imaging clearly shows a correctable problem</strong> — Residual stenosis, inadequate fusion, or hardware complication that anatomically explains symptoms</li>
            <li><strong>Diagnostic injections confirm the problem</strong> — Targeted injections demonstrate that the area identified on imaging is causing pain</li>
            <li><strong>Conservative and minimally invasive options have been exhausted</strong> — You've tried therapy, medications, injections, and potentially neuromodulation</li>
            <li><strong>You have realistic expectations</strong> — Revision surgery reduces pain in many patients but doesn't guarantee complete relief</li>
            <li><strong>You are a reasonable surgical candidate</strong> — Medical factors and fitness support safe surgery</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            If revision surgery is being considered, getting a <Link href="/second-opinion-spine-surgery" className="text-blue-600 hover:text-blue-800">second opinion before spine surgery</Link> is absolutely appropriate. Revision surgery is more complex than primary surgery, and a comprehensive evaluation is essential.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Many patients find that addressing pain systematically through conservative care, diagnostic evaluation, and minimally invasive procedures provides adequate relief without needing revision surgery.
          </p>
        </section>

        <section className="mb-12 bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">About Simon Dardashti, MD</h3>
          <p className="text-gray-700 mb-2">
            <strong>Board-Certified Pain Medicine Physician</strong>
          </p>
          <ul className="text-sm text-gray-700 space-y-1 mb-3">
            <li>• Specialized training in Pain Medicine from UCLA</li>
            <li>• 10+ years evaluating and treating persistent pain after spine surgery</li>
            <li>• Expert in diagnostic injections and procedural management</li>
            <li>• Focus on comprehensive evaluation to identify all pain generators</li>
            <li>• Virtual consultations available</li>
          </ul>
        </section>

        <section className="mb-12 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Get Clarity on Your Persistent Pain After Surgery
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            If you've had spine surgery and still have ongoing symptoms, a comprehensive evaluation can often clarify what's causing the pain and what options may still help. We can review your surgical records, imaging, and current symptoms to develop a targeted treatment plan.
          </p>

          <Link
            href="/virtual-consultations"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Schedule a Virtual Consultation
          </Link>
          <p className="text-sm text-gray-600 mt-4">
            Virtual consultations allow me to review your complete history and imaging to help you understand what may still help.
          </p>
        </section>

        <section className="mb-12 border-t pt-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How long after surgery should I wait before considering treatment for persistent pain?
              </h3>
              <p className="text-gray-700">
                It depends on the surgical approach. Most acute post-operative pain and swelling improves over 6-12 weeks. However, if you have significant pain that's limiting function, you don't need to wait months. We can begin conservative management immediately and reassess at 8-12 weeks. If pain persists despite conservative care, further evaluation and diagnostics are reasonable.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Is it possible that surgery made my pain worse?
              </h3>
              <p className="text-gray-700">
                Occasionally, patients experience different pain after surgery than before—sometimes in different locations. This can occur due to scar tissue, changes in nerve irritation patterns, or previously unrecognized pain generators. This isn't a reflection on surgical technique; it reflects how complex pain can be. Comprehensive evaluation identifies what's causing the new or different pain so we can address it.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can I exercise with persistent pain after spine surgery?
              </h3>
              <p className="text-gray-700">
                Yes, often you should. Appropriate exercise and physical therapy are important after spine surgery. However, exercise should be guided—some movements aggravate pain while others help. Working with a physical therapist experienced in post-operative spine care is important to guide what you do and what you avoid.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Will I need imaging studies after surgery if I have persistent pain?
              </h3>
              <p className="text-gray-700">
                Sometimes. Imaging helps identify structural changes, but it's not always necessary. If your symptoms suggest a specific problem (like residual stenosis or adjacent segment degeneration) or if we're considering revision surgery, imaging is helpful. But for many cases of persistent post-operative pain, careful physical examination and diagnostic injections are more informative than imaging.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Are there risks to having multiple procedures or injections after spine surgery?
              </h3>
              <p className="text-gray-700">
                Injections performed by experienced physicians are relatively safe when spaced appropriately. We typically space injections 2-4 weeks apart and limit the number per year based on guidelines. The goal is to use diagnostic information to guide treatment, not to perform injections indefinitely. Most patients who respond to injections eventually transition to other management.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 pt-8 border-t">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">
            Related Resources
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><Link href="/pain-without-imaging" className="text-blue-600 hover:text-blue-800">Pain Without Imaging Findings</Link> — Understanding symptoms when imaging appears normal</li>
            <li><Link href="/treatment-options" className="text-blue-600 hover:text-blue-800">Treatment Options</Link> — Overview of conservative, procedural, and surgical approaches</li>
            <li><Link href="/second-opinion-spine-surgery" className="text-blue-600 hover:text-blue-800">Second Opinion Before Spine Surgery</Link> — Questions to ask before revision surgery</li>
            <li><Link href="/conditions/lumbar-spinal-stenosis" className="text-blue-600 hover:text-blue-800">Lumbar Spinal Stenosis</Link> — Understanding stenosis as a pain generator</li>
            <li><Link href="/conditions/lumbar-radiculopathy" className="text-blue-600 hover:text-blue-800">Lumbar Radiculopathy</Link> — Nerve root irritation and treatment</li>
            <li><Link href="/procedures/epidural-steroid-injections" className="text-blue-600 hover:text-blue-800">Epidural Steroid Injections</Link> — Common treatment for nerve-related pain</li>
            <li><Link href="/procedures/radiofrequency-ablation" className="text-blue-600 hover:text-blue-800">Radiofrequency Ablation</Link> — Treatment for facet-mediated pain</li>
            <li><Link href="/virtual-consultations" className="text-blue-600 hover:text-blue-800">Virtual Consultations</Link> — Schedule an appointment</li>
          </ul>
        </section>

        <section className="mt-12 pt-8 border-t text-sm text-gray-600">
          <p>
            <strong>Medical Disclaimer:</strong> This page is educational and does not constitute medical advice. Information presented here is based on current evidence and clinical experience but does not replace evaluation by a healthcare provider. All medical decisions should be made in consultation with a qualified physician who understands your complete medical history. If you have persistent pain after spine surgery, seek evaluation from a qualified pain medicine physician.
          </p>
        </section>
      </article>

      {/* MEDICAL REVIEW */}
      <MedicalReviewFooter path="/conditions/persistent-pain-after-spine-surgery" />
    </>
  );
}
