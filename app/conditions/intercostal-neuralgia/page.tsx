import type { Metadata } from "next";
import Link from "next/link";
import { MedicalFigure } from "@/components/illustrations";

import MedicalReviewFooter from "@/components/MedicalReviewFooter";

const PAGE_URL = "https://www.drdardashti.com/conditions/intercostal-neuralgia";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Intercostal Neuralgia Evaluation | Simon Dardashti, MD" },
  description:
    "Dr. Simon Dardashti evaluates intercostal neuralgia, which causes burning, sharp, or shooting pain along the ribs and chest wall due to nerve irritation or injury.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Intercostal Neuralgia Evaluation | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates intercostal neuralgia, which causes burning, sharp, or shooting pain along the ribs and chest wall due to nerve irritation or injury.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Intercostal Neuralgia Evaluation | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates intercostal neuralgia, which causes burning, sharp, or shooting pain along the ribs and chest wall due to nerve irritation or injury.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Intercostal Neuralgia Evaluation | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Dr. Simon Dardashti evaluates intercostal neuralgia, which causes burning, sharp, or shooting pain along the ribs and chest wall due to nerve irritation or injury.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  about: { "@type": "MedicalCondition", name: "Intercostal Neuralgia" },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Conditions Evaluated", item: `${SITE_URL}/conditions` },
      { "@type": "ListItem", position: 3, name: "Intercostal Neuralgia", item: PAGE_URL },
    ],
  },
};

export default function IntercostalNeuralgiaPage() {
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
            Intercostal
            <br />
            <em className="not-italic text-[#888]">Neuralgia.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Intercostal neuralgia causes burning, sharp, or shooting pain along the ribs and
            chest wall due to irritation or injury of the intercostal nerves that run beneath
            the ribs.
          </p>
        </div>
      </section>

      {/* IN BRIEF */}
      <section className="bg-white py-16 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-[#c8a020] text-xs font-semibold tracking-widest uppercase mb-3">
                Nerve Involvement
              </p>
              <p className="text-[#555] text-base leading-relaxed">
                The intercostal nerves run between the ribs. When compressed, irritated, or
                damaged, they cause sharp, burning, or shooting pain along the chest wall.
              </p>
            </div>
            <div>
              <p className="text-[#c8a020] text-xs font-semibold tracking-widest uppercase mb-3">
                Multiple Causes
              </p>
              <p className="text-[#555] text-base leading-relaxed">
                Causes include rib trauma, post-surgical pain, shingles, poor posture,
                pregnancy, and inflammation. Symptoms may develop suddenly or gradually.
              </p>
            </div>
            <div>
              <p className="text-[#c8a020] text-xs font-semibold tracking-widest uppercase mb-3">
                Individualized Treatment
              </p>
              <p className="text-[#555] text-base leading-relaxed">
                Treatment ranges from conservative approaches (physical therapy, medications)
                to procedural options (nerve blocks, neuromodulation) based on clinical findings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 01 OVERVIEW */}
      <section className="bg-[#f9f7f4] py-16 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#999] uppercase tracking-widest">01</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              What Is Intercostal Neuralgia?
            </h2>
            <p>
              Intercostal neuralgia is pain caused by irritation or injury to one or more of the
              intercostal nerves — the nerves that run between the ribs along the chest wall. These
              nerves carry sensory signals from the skin and tissues between the ribs, and when
              damaged or compressed, they generate sharp, burning, or shooting pain that follows
              the path of the nerve under and around the ribs.
            </p>
            <p>
              The intercostal nerves branch from the spinal nerves in the thoracic spine region
              and travel along grooves on the undersides of the ribs, giving off smaller branches
              to muscles, skin, and organs. When these nerves are irritated — whether from trauma,
              inflammation, post-surgical changes, viral infection (shingles), or compression — the
              result is often severe neuropathic pain that may worsen with breathing, movement, or
              certain positions.
            </p>
            <p>
              Intercostal neuralgia may be acute (sudden onset, typically from trauma or shingles)
              or chronic (persistent or recurrent pain lasting weeks to months). The condition is
              sometimes referred to as intercostal nerve pain or chest wall neuralgia.
            </p>
          </div>
        </div>

        {/* ILLUSTRATION: Intercostal Nerve Anatomy */}
        <div className="max-w-5xl mx-auto mt-12 flex justify-center">
          <MedicalFigure
            role="anatomy"
            src="/images/conditions/intercostal-neuralgia.png"
            alt="Intercostal neuralgia showing spinal nerve roots, intercostal nerves running between ribs under the rib groove, sensory distribution to chest wall and skin between ribs, and anatomical vulnerability points"
            caption="Intercostal Nerve Anatomy: The intercostal nerves branch from thoracic spinal nerve roots (T1-T12) and run horizontally between and beneath the ribs along the chest wall. Each intercostal nerve travels in a groove along the undersurface of a rib, providing sensory innervation to the skin, muscles, and tissues between the ribs. This anatomic position—nestled in a narrow space between the ribs—makes the nerves vulnerable to compression and irritation from trauma, inflammation, post-surgical changes, viral infection (shingles), or poor posture. When irritated, these nerves produce characteristic pain that radiates along the chest wall, often worsening with breathing, coughing, or movement. Understanding this anatomical course helps explain why symptoms follow specific rib levels and why certain movements can trigger pain."
            priority={true}
          />
        </div>
      </section>

      {/* 02 SYMPTOMS */}
      <section className="bg-white py-16 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#999] uppercase tracking-widest">02</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Symptoms
            </h2>
            <p>
              Intercostal neuralgia presents with a variety of pain characteristics, depending on
              the severity and underlying cause. Common symptoms include:
            </p>
            <ul className="space-y-2 list-disc list-inside text-[#555]">
              <li>Sharp, burning, or shooting pain along the ribs and chest wall</li>
              <li>Pain that follows a specific path between the ribs (dermatomal distribution)</li>
              <li>Burning or tingling sensations along the affected rib spaces</li>
              <li>Pain that worsens with deep breathing, coughing, or sneezing</li>
              <li>Pain exacerbated by movement, twisting, or certain positions</li>
              <li>Numbness or reduced sensation in the area supplied by the affected nerve</li>
              <li>Pain that may radiate from the back around to the front of the chest</li>
              <li>Muscle tightness or spasm in the chest wall muscles</li>
              <li>Post-surgical pain following thoracic surgery or rib surgery</li>
              <li>Post-herpetic pain following shingles (herpes zoster) infection</li>
            </ul>
            <p>
              The severity and character of pain can vary significantly from one individual to
              another, and symptoms may fluctuate over time. Some patients describe the pain as
              constant, while others experience it as intermittent or episodic.
            </p>
          </div>
        </div>
      </section>

      {/* 03 COMMON CAUSES */}
      <section className="bg-[#f9f7f4] py-16 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#999] uppercase tracking-widest">03</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Common Causes & Risk Factors
            </h2>
            <p>
              Intercostal neuralgia can develop from numerous causes, ranging from direct injury
              to surgical procedures to viral infections. Common contributing factors include:
            </p>
            <ul className="space-y-2 list-disc list-inside text-[#555]">
              <li>Rib fractures or blunt chest trauma from accidents, falls, or sports injuries</li>
              <li>Post-surgical pain after thoracic surgery, cardiac surgery, or rib surgery</li>
              <li>Post-thoracotomy pain syndrome (chronic pain after lung or heart surgery)</li>
              <li>Shingles (herpes zoster) infection affecting the thoracic dermatomes</li>
              <li>Post-herpetic neuralgia (chronic pain persisting after shingles has resolved)</li>
              <li>Nerve compression from inflammation, scar tissue, or muscular tightness</li>
              <li>Poor posture or repetitive strain on chest wall muscles</li>
              <li>Pregnancy-related muscle and ligament changes</li>
              <li>Osteoporosis or vertebral compression fractures affecting thoracic spine</li>
              <li>Inflammation of the pleura or other chest wall tissues</li>
            </ul>
            <p>
              Often, intercostal neuralgia develops after an identifiable event (trauma, surgery,
              shingles), but it can also develop insidiously from chronic postural stress or
              repetitive activities. In some cases, no specific cause is identified, but careful
              evaluation can help clarify the underlying mechanism.
            </p>
          </div>
        </div>
      </section>

      {/* 04 DIAGNOSIS */}
      <section className="bg-white py-16 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#999] uppercase tracking-widest">04</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Diagnosis
            </h2>
            <p>
              Diagnosis of intercostal neuralgia begins with a thorough clinical evaluation,
              including a detailed history of symptom onset, pain characteristics, triggers, prior
              treatments, and any relevant prior surgeries or infections. Physical examination is
              essential for identifying tenderness over specific intercostal spaces and reproducing
              pain with palpation or certain movements.
            </p>
            <p>
              <strong>Physical Examination:</strong> The clinician may palpate along the intercostal
              spaces to identify tenderness or trigger points, assess chest wall movement, and test
              for dermatomal (nerve distribution) patterns of pain or sensory changes. Reproducibility
              of pain with specific maneuvers supports the diagnosis.
            </p>
            <p>
              <strong>Imaging Studies:</strong> X-rays, CT scans, or MRI may be used to evaluate for
              rib fractures, vertebral abnormalities, or other structural causes, particularly when
              trauma is involved. However, imaging may appear normal even when nerve pain is present.
            </p>
            <p>
              <strong>Diagnostic Nerve Blocks:</strong> Intercostal nerve blocks — injection of local
              anesthetic around the affected nerve — can serve both a diagnostic (confirming nerve
              involvement) and therapeutic purpose. If pain is significantly relieved following a
              properly placed nerve block, this strongly supports the diagnosis of intercostal neuralgia.
            </p>
            <p>
              <strong>Electrodiagnostic Testing:</strong> Electromyography (EMG) or nerve conduction
              studies may help identify nerve dysfunction or exclude other conditions, though they are
              not always necessary for diagnosis.
            </p>
          </div>
        </div>
      </section>

      {/* 05 TREATMENT OPTIONS */}
      <section className="bg-[#f9f7f4] py-16 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#999] uppercase tracking-widest">05</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Treatment Options
            </h2>
            <p>
              Treatment of intercostal neuralgia is individualized based on symptom severity,
              underlying cause, duration of pain, prior treatment response, and patient preference.
              Both conservative and procedural options may be considered.
            </p>
            <p>
              <strong>Conservative Management:</strong> Initial treatment typically includes activity
              modification to avoid movements that trigger pain, physical therapy focusing on posture
              and chest wall muscle flexibility, and heat or cold application as tolerated. Neuropathic
              pain medications such as gabapentin, pregabalin, or tricyclic antidepressants (amitriptyline,
              nortriptyline) may reduce nerve pain and improve sleep and function.
            </p>
            <p>
              <strong>Topical Treatments:</strong> Lidocaine patches applied over the affected area
              can provide localized pain relief without systemic side effects.
            </p>
            <p>
              <strong>Procedural Options:</strong> When conservative treatment provides insufficient
              relief, procedural interventions may be considered. Intercostal nerve blocks — injection
              of local anesthetic and sometimes steroid medication around the affected nerves — can
              provide pain relief lasting days to weeks or longer. Multiple blocks may be performed for
              sustained benefit.
            </p>
            <p>
              <strong>Neuromodulation:</strong> In selected patients with severe, chronic intercostal
              neuralgia that has not responded to other treatments, peripheral nerve stimulation may be
              considered to modulate pain signals.
            </p>
            <p>
              Treatment decisions are made collaboratively based on diagnostic findings, symptom
              severity, prior treatment response, and individual patient factors. The goal is to reduce
              pain and improve function while minimizing unnecessary procedures or medications.
            </p>
          </div>
        </div>
      </section>

      {/* 06 WHEN TO SEEK EVALUATION */}
      <section className="bg-white py-16 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#999] uppercase tracking-widest">06</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              When to Seek Evaluation
            </h2>
            <p>
              If you are experiencing chest wall or rib pain that follows the pattern of intercostal
              neuralgia, clinical evaluation can help clarify the diagnosis and identify appropriate
              treatment options. Consider seeking evaluation if:
            </p>
            <ul className="space-y-2 list-disc list-inside text-[#555]">
              <li>You have sharp, burning, or shooting pain along the ribs that persists for more than a few days</li>
              <li>Pain develops following rib trauma, surgery, or shingles</li>
              <li>Pain worsens with breathing, coughing, or movement</li>
              <li>Initial conservative treatment has provided limited or no improvement</li>
              <li>Pain is affecting your sleep, work, or daily activities</li>
              <li>You experience numbness, tingling, or sensory changes in the chest wall</li>
              <li>Pain persists for weeks to months and is affecting your quality of life</li>
            </ul>
            <p>
              Clinical evaluation will include a detailed history, physical examination, and appropriate
              diagnostic testing to confirm the diagnosis and identify any underlying conditions requiring
              treatment. Once the diagnosis is established, a treatment plan tailored to your specific
              situation can be developed.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[#f9f7f4] py-16 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#999] uppercase tracking-widest">FAQs</p>
          </div>
          <div className="md:col-span-10 space-y-6">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-8"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Frequently Asked Questions
            </h2>

            <div className="space-y-1 pb-4 border-b border-[#ddd]">
              <h3 className="font-bold text-[#0a0a0a] text-base">
                What does intercostal neuralgia feel like?
              </h3>
              <p className="text-[#666] text-sm leading-relaxed pt-2">
                Intercostal neuralgia typically causes sharp, burning, or shooting pain along the ribs and chest wall. The pain often follows a specific path between the ribs, may worsen with breathing or movement, and can be accompanied by numbness, tingling, or muscle tightness in the affected area.
              </p>
            </div>

            <div className="space-y-1 pb-4 border-b border-[#ddd]">
              <h3 className="font-bold text-[#0a0a0a] text-base">
                Can intercostal neuralgia cause chest pain?
              </h3>
              <p className="text-[#666] text-sm leading-relaxed pt-2">
                Yes. Intercostal neuralgia causes pain in the chest wall due to irritation of the nerves that run between the ribs. This is chest wall pain specifically (neuropathic pain from the nerves themselves), distinct from cardiac chest pain. Medical evaluation can help distinguish intercostal neuralgia from cardiac or other serious causes of chest pain.
              </p>
            </div>

            <div className="space-y-1 pb-4 border-b border-[#ddd]">
              <h3 className="font-bold text-[#0a0a0a] text-base">
                Is intercostal neuralgia dangerous?
              </h3>
              <p className="text-[#666] text-sm leading-relaxed pt-2">
                Intercostal neuralgia itself is not a life-threatening condition, though the pain can be severe and significantly affect quality of life. However, it is important to seek evaluation to confirm the diagnosis and rule out other potentially serious causes of chest pain. Once properly diagnosed, effective treatments can be offered.
              </p>
            </div>

            <div className="space-y-1 pb-4 border-b border-[#ddd]">
              <h3 className="font-bold text-[#0a0a0a] text-base">
                Can shingles cause intercostal neuralgia?
              </h3>
              <p className="text-[#666] text-sm leading-relaxed pt-2">
                Yes. Shingles (herpes zoster) is a viral infection that commonly affects the thoracic nerve roots and can cause acute intercostal pain. Additionally, post-herpetic neuralgia — chronic pain that persists after the shingles rash has resolved — is a well-recognized cause of long-term intercostal neuralgia, particularly in older adults.
              </p>
            </div>

            <div className="space-y-1 pb-4 border-b border-[#ddd]">
              <h3 className="font-bold text-[#0a0a0a] text-base">
                How is intercostal neuralgia diagnosed?
              </h3>
              <p className="text-[#666] text-sm leading-relaxed pt-2">
                Diagnosis begins with a clinical evaluation including history and physical examination. Imaging studies may be used to rule out structural causes. Diagnostic intercostal nerve blocks — injection of local anesthetic around the affected nerves — can confirm the diagnosis if pain is significantly relieved. Electrodiagnostic testing may also be performed in some cases.
              </p>
            </div>

            <div className="space-y-1 pb-4 border-b border-[#ddd]">
              <h3 className="font-bold text-[#0a0a0a] text-base">
                Can intercostal neuralgia become chronic?
              </h3>
              <p className="text-[#666] text-sm leading-relaxed pt-2">
                Yes. While some cases of intercostal neuralgia (particularly from acute trauma) resolve on their own, others can persist for months or years. Post-herpetic neuralgia and post-thoracotomy pain syndrome are examples of chronic forms of intercostal neuralgia. Chronic cases often benefit from comprehensive pain management strategies.
              </p>
            </div>

            <div className="space-y-1 pb-4 border-b border-[#ddd]">
              <h3 className="font-bold text-[#0a0a0a] text-base">
                What treatments are available for intercostal neuralgia?
              </h3>
              <p className="text-[#666] text-sm leading-relaxed pt-2">
                Treatment options range from conservative approaches (activity modification, physical therapy, neuropathic pain medications, topical lidocaine patches) to procedural interventions (intercostal nerve blocks, nerve blocks with steroid medication, and peripheral nerve stimulation in selected cases). The appropriate treatment depends on pain severity, underlying cause, and response to initial therapy.
              </p>
            </div>

            <div className="space-y-1 pb-4 border-b border-[#ddd]">
              <h3 className="font-bold text-[#0a0a0a] text-base">
                When should I seek medical evaluation for intercostal neuralgia?
              </h3>
              <p className="text-[#666] text-sm leading-relaxed pt-2">
                Seek evaluation if you have persistent chest wall or rib pain (especially following trauma, surgery, or shingles), pain that worsens with breathing or movement, pain that affects your sleep or daily activities, or pain that has not improved with initial home care after several days. Clinical evaluation can confirm the diagnosis and identify appropriate treatment options.
              </p>
            </div>
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
              This page describes intercostal neuralgia for general educational purposes. It is not a
              guarantee that any specific diagnosis will be confirmed or any particular treatment
              recommended. A formal clinical evaluation is required for any individual patient. This
              content is for general informational purposes only and does not constitute medical advice.
            </p>
            <p>
              Dr. Dardashti sees patients in Mission Hills, California, serving patients from the San
              Fernando Valley, Santa Clarita Valley, and surrounding Los Angeles communities.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED LINKS */}
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
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/conditions/thoracic-outlet-syndrome"
                  className="text-[#c8a020] hover:underline tracking-wide"
                >
                  Thoracic Outlet Syndrome Evaluation →
                </Link>
              </li>
              <li>
                <Link href="/conditions/peripheral-nerve-pain" className="text-[#c8a020] hover:underline tracking-wide">
                  Peripheral Nerve Pain Evaluation →
                </Link>
              </li>
              <li>
                <Link
                  href="/conditions/occipital-neuralgia"
                  className="text-[#c8a020] hover:underline tracking-wide"
                >
                  Occipital Neuralgia Evaluation →
                </Link>
              </li>
              <li>
                <Link
                  href="/procedures/peripheral-nerve-blocks"
                  className="text-[#c8a020] hover:underline tracking-wide"
                >
                  Peripheral Nerve Blocks →
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#c8a020] hover:underline tracking-wide">
                  View all Conditions &amp; Services →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* MEDICAL REVIEW */}
      <MedicalReviewFooter path="/conditions/intercostal-neuralgia" />
    </>
  );
}
