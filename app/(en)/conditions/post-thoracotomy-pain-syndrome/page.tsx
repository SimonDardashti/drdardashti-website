import type { Metadata } from "next";
import Link from "next/link";
import { MedicalFigure } from "@/components/illustrations";

import MedicalReviewFooter from "@/components/MedicalReviewFooter";

const PAGE_URL = "https://www.drdardashti.com/conditions/post-thoracotomy-pain-syndrome";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Post-Thoracotomy Pain Syndrome Evaluation | Simon Dardashti, MD" },
  description:
    "Dr. Simon Dardashti evaluates post-thoracotomy pain syndrome, chronic neuropathic pain that develops after thoracic surgery affecting the chest wall and ribs.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Post-Thoracotomy Pain Syndrome Evaluation | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates post-thoracotomy pain syndrome, chronic neuropathic pain that develops after thoracic surgery affecting the chest wall and ribs.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Post-Thoracotomy Pain Syndrome Evaluation | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates post-thoracotomy pain syndrome, chronic neuropathic pain that develops after thoracic surgery affecting the chest wall and ribs.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Post-Thoracotomy Pain Syndrome Evaluation | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Dr. Simon Dardashti evaluates post-thoracotomy pain syndrome, chronic neuropathic pain that develops after thoracic surgery affecting the chest wall and ribs.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  about: { "@type": "MedicalCondition", name: "Post-Thoracotomy Pain Syndrome" },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Conditions Evaluated", item: `${SITE_URL}/conditions` },
      { "@type": "ListItem", position: 3, name: "Post-Thoracotomy Pain Syndrome", item: PAGE_URL },
    ],
  },
};

export default function PostThoracotomyPainSyndromePage() {
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
            Post-Thoracotomy
            <br />
            <em className="not-italic text-[#888]">Pain Syndrome.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Post-thoracotomy pain syndrome is chronic neuropathic pain that develops after thoracic
            surgery, caused by injury to the intercostal nerves during the surgical incision or from
            scar tissue formation affecting nerve function.
          </p>
        </div>
      </section>

      {/* IN BRIEF */}
      <section className="bg-white py-16 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-[#c8a020] text-xs font-semibold tracking-widest uppercase mb-3">
                Post-Surgical Complication
              </p>
              <p className="text-[#555] text-base leading-relaxed">
                Chronic pain that develops after thoracic surgery (lung, heart, or esophageal surgery)
                due to intercostal nerve injury. Can occur after traditional thoracotomy or minimally
                invasive VATS procedures.
              </p>
            </div>
            <div>
              <p className="text-[#c8a020] text-xs font-semibold tracking-widest uppercase mb-3">
                Neuropathic Pain Condition
              </p>
              <p className="text-[#555] text-base leading-relaxed">
                Characterized by burning, sharp, or shooting pain; numbness; tingling; and sensory
                abnormalities in the chest wall and ribs. Often described as persistent,
                unpredictable pain.
              </p>
            </div>
            <div>
              <p className="text-[#c8a020] text-xs font-semibold tracking-widest uppercase mb-3">
                Individualized Treatment
              </p>
              <p className="text-[#555] text-base leading-relaxed">
                Treatment options range from conservative management (physical therapy, medications)
                to procedural interventions (nerve blocks, neuromodulation) based on severity and
                clinical findings.
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
              What Is Post-Thoracotomy Pain Syndrome?
            </h2>
            <p>
              Post-thoracotomy pain syndrome (PTPS) is chronic neuropathic pain that develops or
              persists after thoracic surgery, typically defined as pain lasting more than two months
              following the surgical procedure. It results from injury to the intercostal nerves
              during the surgical approach, manipulation of ribs during surgery, or secondary effects
              of scar tissue on nerve function.
            </p>
            <p>
              Thoracotomy refers to a surgical incision through the chest wall, most commonly performed
              for lung surgery (lobectomy, lung cancer resection), heart surgery, esophageal surgery,
              or other procedures requiring access to the thoracic cavity. While thoracotomy is a
              necessary surgical approach for many life-saving procedures, nerve injury is a recognized
              potential complication. Video-assisted thoracoscopic surgery (VATS) — a minimally invasive
              alternative to traditional thoracotomy — can also result in nerve injury and chronic pain,
              though the incidence may be lower with smaller incisions.
            </p>
            <p>
              The pain of PTPS is neuropathic in nature, meaning it results from injury or dysfunction
              of the nerves themselves rather than inflammation of other tissues. Patients often describe
              burning, sharp, or shooting pain along the ribs and chest wall, frequently accompanied by
              numbness, tingling, or abnormal sensations (allodynia, where light touch causes pain).
            </p>
          </div>
        </div>
      </section>

      {/* ILLUSTRATION: Post-Thoracotomy Pain */}
      <div className="max-w-5xl mx-auto mt-12 flex justify-center">
        <MedicalFigure
          role="mechanism"
          src="/images/conditions/pain-mechanisms.png"
          alt="Post-thoracotomy pain syndrome showing intercostal nerve damage, scar tissue formation, rib injury, and neuropathic pain development after chest surgery"
          caption="Post-Thoracotomy Pain Syndrome: Following thoracotomy (surgical opening of the chest wall), pain can persist through multiple mechanisms: direct injury to intercostal nerves during rib spreading or dissection produces neuropathic pain; scar tissue formation and nerve entrapment develop as healing occurs; rib fractures or changes in chest wall mechanics alter movement; inflammatory responses create hypersensitivity; and in some patients, central sensitization amplifies pain signals. These mechanisms often coexist, requiring comprehensive evaluation and individualized treatment. Understanding that post-thoracotomy pain is a recognized complication with specific contributing factors helps guide targeted interventions beyond basic pain management."
          priority={true}
        />
      </div>

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
              Post-thoracotomy pain syndrome presents with a range of neuropathic pain symptoms that
              may develop weeks to months after surgery. Typical symptoms include:
            </p>
            <ul className="space-y-2 list-disc list-inside text-[#555]">
              <li>Chronic burning or shooting pain in the chest wall and along the ribs</li>
              <li>Sharp, stabbing pain in areas supplied by the injured intercostal nerves</li>
              <li>Numbness or decreased sensation in the chest wall or side</li>
              <li>Tingling, pins-and-needles sensations along the ribs or chest</li>
              <li>Allodynia (pain triggered by light touch or clothing)</li>
              <li>Hyperalgesia (heightened pain sensitivity in the affected area)</li>
              <li>Pain that may be constant or intermittent and unpredictable</li>
              <li>Pain triggered or worsened by certain movements, positions, or breathing</li>
              <li>Sleep disruption from chronic pain</li>
              <li>Emotional distress or reduced quality of life from persistent pain</li>
            </ul>
            <p>
              The intensity and character of pain vary significantly among patients. Some experience
              mild, manageable discomfort, while others suffer severe pain that substantially impacts
              daily activities, work capacity, and emotional well-being. Symptoms may improve gradually
              over months to years, remain stable, or occasionally worsen.
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
              Causes & Risk Factors
            </h2>
            <p>
              Post-thoracotomy pain syndrome results from injury to the intercostal nerves during or
              after thoracic surgery. Multiple factors contribute to this complication:
            </p>
            <ul className="space-y-2 list-disc list-inside text-[#555]">
              <li>Direct injury to intercostal nerves during the surgical incision</li>
              <li>Nerve stretch or manipulation during surgical retraction of ribs</li>
              <li>Rib fracture or damage during rib spreading for surgical access</li>
              <li>Scar tissue formation that impinges or irritates nerves postoperatively</li>
              <li>Inflammation of nerves in the early postoperative period</li>
              <li>Infection or seroma (fluid collection) affecting nerve function</li>
              <li>Type and extent of surgical procedure (lung vs. cardiac vs. esophageal surgery)</li>
              <li>Surgical approach (traditional thoracotomy vs. minimally invasive VATS)</li>
              <li>Surgical technique and skill of the surgeon</li>
              <li>Patient factors (age, pre-existing neuropathy, healing capacity)</li>
            </ul>
            <p>
              The incidence of PTPS varies widely depending on the type of surgery and surgical approach,
              ranging from approximately 5% to 65% in different patient populations. It is a recognized
              complication that thoracic surgeons discuss with patients during preoperative counseling,
              though its severity cannot be predicted in advance.
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
              Diagnosis of post-thoracotomy pain syndrome begins with a detailed clinical history,
              including the type of surgery performed, incision location, timing of pain onset relative
              to surgery, pain character and distribution, and prior treatment attempts. The history
              provides essential context for understanding the pain's relationship to the surgical injury.
            </p>
            <p>
              <strong>Physical Examination:</strong> Physical examination includes palpation along the
              surgical scar and intercostal spaces to identify tenderness, scar sensitivity, and trigger
              points. The examiner assesses sensory changes (numbness, tingling) in the distribution of
              affected intercostal nerves and may reproduce pain with specific movements or palpation.
              Testing for allodynia (abnormal pain to light touch) helps confirm neuropathic pain.
            </p>
            <p>
              <strong>Imaging Studies:</strong> X-rays or CT scans may be used to evaluate for rib
              fractures, scar tissue, or other structural abnormalities, particularly if mechanical
              issues are suspected. However, imaging often appears normal in PTPS, as the nerve injury
              may not be visible on standard imaging.
            </p>
            <p>
              <strong>Diagnostic Procedures:</strong> Intercostal nerve blocks — injection of local
              anesthetic around the affected nerves — serve both diagnostic and therapeutic purposes. If
              pain is significantly relieved following a properly placed nerve block, this confirms nerve
              involvement and supports the diagnosis of PTPS.
            </p>
            <p>
              <strong>Electrodiagnostic Testing:</strong> Electromyography (EMG) or nerve conduction studies
              may identify nerve dysfunction, particularly if significant axonal loss occurred. These tests
              are not always necessary but can be helpful in select cases.
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
              Treatment of post-thoracotomy pain syndrome is individualized based on pain severity,
              duration, prior treatment response, and patient goals. Many patients benefit from combined
              conservative and procedural approaches.
            </p>
            <p>
              <strong>Conservative Management:</strong> Initial treatment typically includes physical
              therapy focused on chest wall mobility, scar tissue mobilization, and gentle strengthening
              to improve function and reduce pain. Activity modification to avoid movements that trigger
              pain and postural training are important components. Neuropathic pain medications such as
              gabapentin, pregabalin, or tricyclic antidepressants (amitriptyline, nortriptyline) can
              reduce nerve pain and improve sleep.
            </p>
            <p>
              <strong>Topical Treatments:</strong> Lidocaine patches applied over the surgical scar and
              affected area can provide localized pain relief without systemic side effects. These may be
              particularly helpful for allodynia.
            </p>
            <p>
              <strong>Procedural Options:</strong> When conservative treatment provides insufficient relief,
              procedural interventions may be considered. Intercostal nerve blocks — injection of local
              anesthetic and sometimes steroid medication around the affected nerves — can provide pain
              relief lasting days to weeks or longer. Multiple blocks over time may be performed for
              sustained benefit.
            </p>
            <p>
              <strong>Neuromodulation:</strong> In patients with severe, refractory post-thoracotomy pain
              that has not responded adequately to conservative and nerve block treatments, peripheral nerve
              stimulation or spinal cord stimulation may be considered to modulate pain signals and improve
              function.
            </p>
            <p>
              Treatment selection is based on pain severity, functional impairment, prior treatment response,
              and individual patient factors. The goal is to reduce pain and improve quality of life while
              minimizing unnecessary interventions.
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
              If you have undergone thoracic surgery and are experiencing persistent chest wall or rib
              pain that is affecting your quality of life, clinical evaluation can help establish the
              diagnosis and identify appropriate treatment options. Consider seeking evaluation if:
            </p>
            <ul className="space-y-2 list-disc list-inside text-[#555]">
              <li>You have persistent chest wall pain lasting weeks to months after thoracic surgery</li>
              <li>Pain is limiting your return to normal activities or work</li>
              <li>You experience burning, sharp, or shooting pain in the surgical scar area or ribs</li>
              <li>You have numbness, tingling, or sensory abnormalities in the chest wall</li>
              <li>Pain is affecting your sleep or emotional well-being</li>
              <li>Previous treatments or pain management strategies have provided limited relief</li>
              <li>You want to discuss available treatment options with a pain specialist</li>
            </ul>
            <p>
              Clinical evaluation will include a detailed history, physical examination, and appropriate
              diagnostic testing to confirm the diagnosis of post-thoracotomy pain syndrome. Once confirmed,
              a comprehensive treatment plan tailored to your specific situation and goals can be developed.
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
                What is post-thoracotomy pain syndrome?
              </h3>
              <p className="text-[#666] text-sm leading-relaxed pt-2">
                Post-thoracotomy pain syndrome is chronic neuropathic pain that develops after thoracic surgery, caused by injury to the intercostal nerves during the surgical procedure. It is characterized by burning, sharp, or shooting pain in the chest wall and ribs, often accompanied by numbness, tingling, or abnormal sensations.
              </p>
            </div>

            <div className="space-y-1 pb-4 border-b border-[#ddd]">
              <h3 className="font-bold text-[#0a0a0a] text-base">
                How common is chronic pain after thoracic surgery?
              </h3>
              <p className="text-[#666] text-sm leading-relaxed pt-2">
                The incidence of chronic pain after thoracic surgery varies depending on the type of surgery and surgical approach, ranging from approximately 5% to 65% in different patient populations. Many thoracic surgeons discuss this risk with patients during preoperative counseling.
              </p>
            </div>

            <div className="space-y-1 pb-4 border-b border-[#ddd]">
              <h3 className="font-bold text-[#0a0a0a] text-base">
                Can VATS cause chronic nerve pain?
              </h3>
              <p className="text-[#666] text-sm leading-relaxed pt-2">
                Yes. While video-assisted thoracoscopic surgery (VATS) uses smaller incisions than traditional thoracotomy, intercostal nerve injury and chronic pain can still occur. The incidence may be somewhat lower with VATS due to smaller incisions, but VATS-related post-thoracotomy pain syndrome is a recognized complication.
              </p>
            </div>

            <div className="space-y-1 pb-4 border-b border-[#ddd]">
              <h3 className="font-bold text-[#0a0a0a] text-base">
                What does post-thoracotomy pain feel like?
              </h3>
              <p className="text-[#666] text-sm leading-relaxed pt-2">
                Post-thoracotomy pain typically feels like burning, sharp, or shooting pain along the ribs and chest wall. Patients often experience numbness or tingling in the area, and some describe allodynia (abnormal pain triggered by light touch) or hyperalgesia (heightened pain sensitivity). The pain may be constant or intermittent.
              </p>
            </div>

            <div className="space-y-1 pb-4 border-b border-[#ddd]">
              <h3 className="font-bold text-[#0a0a0a] text-base">
                Can post-thoracotomy pain improve over time?
              </h3>
              <p className="text-[#666] text-sm leading-relaxed pt-2">
                Yes, many patients experience gradual improvement in pain over months to years following surgery as the nerves adapt and inflammatory processes resolve. However, some patients have persistent or chronic pain that requires ongoing management. The trajectory varies significantly among individuals.
              </p>
            </div>

            <div className="space-y-1 pb-4 border-b border-[#ddd]">
              <h3 className="font-bold text-[#0a0a0a] text-base">
                How is post-thoracotomy pain diagnosed?
              </h3>
              <p className="text-[#666] text-sm leading-relaxed pt-2">
                Diagnosis is based on clinical history (including the surgical procedure and pain characteristics), physical examination, and sometimes diagnostic nerve blocks. Imaging may be used to rule out other causes, and electrodiagnostic testing (EMG/NCS) may help identify nerve dysfunction in some cases.
              </p>
            </div>

            <div className="space-y-1 pb-4 border-b border-[#ddd]">
              <h3 className="font-bold text-[#0a0a0a] text-base">
                What treatments are available?
              </h3>
              <p className="text-[#666] text-sm leading-relaxed pt-2">
                Treatment options include conservative approaches (physical therapy, medications for neuropathic pain, topical treatments), and procedural interventions (intercostal nerve blocks, neuromodulation in selected cases). Treatment is individualized based on pain severity, duration, and prior response to therapy.
              </p>
            </div>

            <div className="space-y-1 pb-4 border-b border-[#ddd]">
              <h3 className="font-bold text-[#0a0a0a] text-base">
                When should I seek evaluation?
              </h3>
              <p className="text-[#666] text-sm leading-relaxed pt-2">
                You should consider evaluation if you have persistent chest wall pain lasting weeks to months after thoracic surgery, pain that is limiting activities or affecting quality of life, or if initial treatments have provided limited relief. A pain specialist can help confirm the diagnosis and develop an appropriate treatment plan.
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
              This page describes post-thoracotomy pain syndrome for general educational purposes. It is not
              a guarantee that any specific diagnosis will be confirmed or any particular treatment recommended.
              A formal clinical evaluation is required for any individual patient. This content is for general
              informational purposes only and does not constitute medical advice.
            </p>
            <p>
              Dr. Dardashti sees patients in Mission Hills, California, serving patients from the San Fernando
              Valley, Santa Clarita Valley, and surrounding Los Angeles communities.
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
                  href="/conditions/intercostal-neuralgia"
                  className="text-[#c8a020] hover:underline tracking-wide"
                >
                  Intercostal Neuralgia Evaluation →
                </Link>
              </li>
              <li>
                <Link href="/conditions/peripheral-nerve-pain" className="text-[#c8a020] hover:underline tracking-wide">
                  Peripheral Nerve Pain Evaluation →
                </Link>
              </li>
              <li>
                <Link
                  href="/conditions/thoracic-outlet-syndrome"
                  className="text-[#c8a020] hover:underline tracking-wide"
                >
                  Thoracic Outlet Syndrome Evaluation →
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
      <MedicalReviewFooter path="/conditions/post-thoracotomy-pain-syndrome" />
    </>
  );
}
