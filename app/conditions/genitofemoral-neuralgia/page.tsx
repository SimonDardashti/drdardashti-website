import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://www.drdardashti.com/conditions/genitofemoral-neuralgia";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Genitofemoral Neuralgia Evaluation | Simon Dardashti, MD" },
  description:
    "Dr. Simon Dardashti evaluates genitofemoral neuralgia, which causes burning or shooting pain in the groin, genitals, and upper thigh due to irritation or injury of the genitofemoral nerve.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Genitofemoral Neuralgia Evaluation | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates genitofemoral neuralgia, which causes burning or shooting pain in the groin, genitals, and upper thigh due to irritation or injury of the genitofemoral nerve.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Genitofemoral Neuralgia Evaluation | Simon Dardashti, MD",
    description:
      "Dr. Simon Dardashti evaluates genitofemoral neuralgia, which causes burning or shooting pain in the groin, genitals, and upper thigh due to irritation or injury of the genitofemoral nerve.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Genitofemoral Neuralgia Evaluation | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Dr. Simon Dardashti evaluates genitofemoral neuralgia, which causes burning or shooting pain in the groin, genitals, and upper thigh due to irritation or injury of the genitofemoral nerve.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  about: { "@type": "MedicalCondition", name: "Genitofemoral Neuralgia" },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Conditions Evaluated", item: `${SITE_URL}/conditions` },
      { "@type": "ListItem", position: 3, name: "Genitofemoral Neuralgia", item: PAGE_URL },
    ],
  },
};

export default function GenitofemoralNeuralgiaPage() {
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
            Genitofemoral
            <br />
            <em className="not-italic text-[#888]">Neuralgia.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Genitofemoral neuralgia causes burning, shooting, or stabbing pain in the groin,
            genitals, and upper thigh due to irritation or injury of the genitofemoral nerve.
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
                The genitofemoral nerve originates from the lower thoracic and upper lumbar spine
                and travels through the retroperitoneum to the groin and genital area. Injury or
                compression causes neuropathic pain in the groin, genitals, and upper inner thigh.
              </p>
            </div>
            <div>
              <p className="text-[#c8a020] text-xs font-semibold tracking-widest uppercase mb-3">
                Multiple Causes
              </p>
              <p className="text-[#555] text-base leading-relaxed">
                Genitofemoral neuralgia can develop from hernia repair, pelvic surgery, nerve
                entrapment, scar tissue, direct trauma, or posture-related compression. Pain may
                develop acutely or gradually over time.
              </p>
            </div>
            <div>
              <p className="text-[#c8a020] text-xs font-semibold tracking-widest uppercase mb-3">
                Individualized Treatment
              </p>
              <p className="text-[#555] text-base leading-relaxed">
                Treatment ranges from conservative approaches (physical therapy, medications) to
                procedural options (ultrasound-guided nerve blocks, neuromodulation) based on
                severity and clinical findings.
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
              What Is Genitofemoral Neuralgia?
            </h2>
            <p>
              Genitofemoral neuralgia is pain caused by irritation, compression, or injury to the
              genitofemoral nerve, a sensory and motor nerve that originates from the thoracolumbar
              spine (L1-L2 nerve roots) and travels through the retroperitoneum alongside the psoas
              muscle before dividing into genital and femoral branches. When this nerve is irritated
              or damaged, it generates neuropathic pain characterized by burning, sharp, or shooting
              sensations in the groin, genitals, lower abdomen, and upper inner thigh.
            </p>
            <p>
              The genitofemoral nerve has two divisions: the genital branch, which provides sensory
              innervation to the scrotum (in men) or labia majora (in women) and the inguinal region;
              and the femoral branch, which supplies sensation to the upper medial thigh and carries
              motor fibers to the cremaster muscle in men. Because of this deep anatomic course through
              the retroperitoneum and groin, the nerve is vulnerable to injury during hernia repairs,
              pelvic surgeries, and other procedures in this region. The nerve can also be compressed
              by scar tissue, anatomic structures, or nerve entrapment.
            </p>
            <p>
              Genitofemoral neuralgia may be acute (sudden onset from trauma or surgery) or chronic
              (persistent or recurrent pain lasting weeks to months). The condition is sometimes
              referred to as genitofemoral nerve pain or genitofemoral neuropathy.
            </p>
          </div>
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
              Genitofemoral neuralgia presents with a variety of neuropathic pain symptoms affecting
              the groin, genitals, and upper thigh. Typical symptoms include:
            </p>
            <ul className="space-y-2 list-disc list-inside text-[#555]">
              <li>Burning or shooting pain in the groin and genital region</li>
              <li>Sharp, stabbing pain in the scrotum or labia majora</li>
              <li>Pain in the upper inner thigh extending downward</li>
              <li>Numbness or decreased sensation in the groin or genitals</li>
              <li>Tingling or pins-and-needles sensations in the affected area</li>
              <li>Pain triggered or worsened by certain movements, walking, or positions</li>
              <li>Pain exacerbated by tight clothing, pressure, or prolonged sitting</li>
              <li>Constant or intermittent pain that may fluctuate in severity</li>
              <li>Pain that disrupts sleep or affects daily activities and quality of life</li>
              <li>Sensory abnormalities in the distribution of the genitofemoral nerve</li>
            </ul>
            <p>
              The severity and character of pain vary significantly among patients. Some experience
              mild discomfort, while others suffer severe pain that substantially impacts daily
              function, work capacity, and quality of life. Symptoms may develop suddenly after
              surgery or trauma, or gradually over time from chronic compression or irritation.
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
              Genitofemoral neuralgia can develop from multiple causes, ranging from surgical
              procedures to chronic compression and trauma. Common contributing factors include:
            </p>
            <ul className="space-y-2 list-disc list-inside text-[#555]">
              <li>Direct surgical injury during hernia repair</li>
              <li>Injury during pelvic or retroperitoneal surgery</li>
              <li>Scar tissue formation or adhesions affecting the nerve postoperatively</li>
              <li>Mesh used in hernia repair causing nerve irritation or entrapment</li>
              <li>Nerve entrapment in the inguinal canal or retroperitoneum</li>
              <li>Direct trauma to the groin or lower abdomen from blunt injury</li>
              <li>Compression from psoas muscle tightness or spasm</li>
              <li>Chronic compression from tight clothing or athletic wear</li>
              <li>Poor posture or repetitive activity affecting the groin region</li>
              <li>Inflammation or infection in the retroperitoneal or groin area</li>
            </ul>
            <p>
              Genitofemoral nerve injury is a recognized complication of hernia repair and other
              groin and pelvic surgeries. The nerve is vulnerable to injury during these procedures
              because of its deep anatomic course. In many cases, the injury occurs intraoperatively
              but pain may not develop until weeks or months after surgery.
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
              Diagnosis of genitofemoral neuralgia begins with a detailed clinical history, including
              any prior groin, pelvic, or abdominal surgery, the timing of pain onset, pain character
              and location, and any identifiable triggers or relieving factors. The history provides
              essential context for understanding the pain's relationship to surgical injury or
              compression.
            </p>
            <p>
              <strong>Physical Examination:</strong> Physical examination includes palpation of the
              groin and lower abdomen to identify tenderness, trigger points, or scar sensitivity. The
              examiner assesses sensory changes (numbness, tingling) in the genital region and upper
              inner thigh, which follows the distribution of the genitofemoral nerve. Testing for pain
              triggered by light touch helps confirm neuropathic involvement.
            </p>
            <p>
              <strong>Imaging Studies:</strong> Ultrasound or MRI may be used to evaluate for anatomic
              abnormalities, scar tissue, nerve compression, or structural factors affecting the nerve.
              However, imaging may appear normal even when nerve injury is present.
            </p>
            <p>
              <strong>Diagnostic Procedures:</strong> Ultrasound-guided genitofemoral nerve blocks —
              injection of local anesthetic around the affected nerve — serve both diagnostic and
              therapeutic purposes. If pain is significantly relieved following a properly placed nerve
              block, this confirms nerve involvement and supports the diagnosis of genitofemoral
              neuralgia.
            </p>
            <p>
              <strong>Electrodiagnostic Testing:</strong> Electromyography (EMG) or nerve conduction
              studies may identify nerve dysfunction in select cases, though these tests are not
              always necessary.
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
              Treatment of genitofemoral neuralgia is individualized based on pain severity, duration,
              underlying cause, prior treatment response, and patient preferences. Both conservative and
              procedural approaches may be considered.
            </p>
            <p>
              <strong>Conservative Management:</strong> Initial treatment typically includes activity
              modification to avoid movements or positions that trigger pain, physical therapy focusing
              on core stability, psoas flexibility, and posture correction, and avoiding tight clothing
              or waistbands that may compress the nerve. Neuropathic pain medications such as gabapentin,
              pregabalin, or tricyclic antidepressants (amitriptyline, nortriptyline) can reduce nerve
              pain and improve function.
            </p>
            <p>
              <strong>Topical Treatments:</strong> Lidocaine patches or creams applied over the affected
              area can provide localized pain relief without systemic side effects.
            </p>
            <p>
              <strong>Procedural Options:</strong> When conservative treatment provides insufficient
              relief, procedural interventions may be considered. Ultrasound-guided genitofemoral nerve
              blocks — injection of local anesthetic and sometimes steroid medication around the
              affected nerve — can provide pain relief lasting days to weeks or longer. Repeat blocks
              over time may be performed for sustained benefit.
            </p>
            <p>
              <strong>Neuromodulation:</strong> In selected patients with severe, chronic genitofemoral
              neuralgia that has not responded adequately to conservative and nerve block treatments,
              peripheral nerve stimulation may be considered to modulate pain signals and improve
              function and quality of life.
            </p>
            <p>
              Treatment selection is based on pain severity, functional impairment, medical history, and
              patient goals. The aim is to reduce pain and improve daily function while minimizing
              unnecessary interventions.
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
              If you are experiencing groin or genital pain that follows the distribution of the
              genitofemoral nerve, clinical evaluation can help establish the diagnosis and identify
              appropriate treatment options. Consider seeking evaluation if:
            </p>
            <ul className="space-y-2 list-disc list-inside text-[#555]">
              <li>You have burning, shooting, or stabbing pain in the groin or genitals</li>
              <li>Pain develops or persists following hernia repair or pelvic surgery</li>
              <li>You experience numbness, tingling, or sensory changes in the groin or upper thigh</li>
              <li>Pain is limiting your daily activities, work, or quality of life</li>
              <li>Initial conservative treatment has provided limited or no improvement</li>
              <li>Pain is affecting your sleep, sexual function, or emotional well-being</li>
              <li>You want to discuss available treatment options with a pain specialist</li>
            </ul>
            <p>
              Clinical evaluation will include a detailed history, physical examination, and appropriate
              diagnostic testing to confirm the diagnosis of genitofemoral neuralgia. Once confirmed,
              a comprehensive treatment plan tailored to your specific situation can be developed.
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
                What is genitofemoral neuralgia?
              </h3>
              <p className="text-[#666] text-sm leading-relaxed pt-2">
                Genitofemoral neuralgia is pain caused by irritation or injury to the genitofemoral nerve, a sensory and motor nerve that supplies the groin, genitals, and upper inner thigh. The pain is typically burning, shooting, or stabbing in nature and may be accompanied by numbness or tingling in the region supplied by the nerve.
              </p>
            </div>

            <div className="space-y-1 pb-4 border-b border-[#ddd]">
              <h3 className="font-bold text-[#0a0a0a] text-base">
                What does genitofemoral nerve pain feel like?
              </h3>
              <p className="text-[#666] text-sm leading-relaxed pt-2">
                Genitofemoral nerve pain typically presents as burning, shooting, or stabbing pain in the groin and genital region. Patients often describe sharp, electric pain sensations that may extend to the upper inner thigh. Numbness, tingling, and heightened sensitivity in the affected area are also common.
              </p>
            </div>

            <div className="space-y-1 pb-4 border-b border-[#ddd]">
              <h3 className="font-bold text-[#0a0a0a] text-base">
                Can hernia surgery cause genitofemoral neuralgia?
              </h3>
              <p className="text-[#666] text-sm leading-relaxed pt-2">
                Yes. The genitofemoral nerve travels through the groin region where hernia repair incisions are made, making it vulnerable to injury during surgery. Nerve injury may occur from direct trauma during the procedure or later from scar tissue formation or mesh placement. Genitofemoral neuralgia is a recognized complication of hernia repair.
              </p>
            </div>

            <div className="space-y-1 pb-4 border-b border-[#ddd]">
              <h3 className="font-bold text-[#0a0a0a] text-base">
                Can pelvic surgery injure the genitofemoral nerve?
              </h3>
              <p className="text-[#666] text-sm leading-relaxed pt-2">
                Yes. The genitofemoral nerve passes through the retroperitoneum and groin region where pelvic surgeries are performed. The nerve can be injured during pelvic procedures or secondarily affected by scar tissue formation. Genitofemoral neuralgia is a recognized complication of pelvic surgery.
              </p>
            </div>

            <div className="space-y-1 pb-4 border-b border-[#ddd]">
              <h3 className="font-bold text-[#0a0a0a] text-base">
                How is genitofemoral neuralgia diagnosed?
              </h3>
              <p className="text-[#666] text-sm leading-relaxed pt-2">
                Diagnosis is based on clinical history (including any prior groin or pelvic surgery), physical examination, and sometimes diagnostic ultrasound-guided nerve blocks. Imaging studies such as ultrasound or MRI may help identify structural causes. Electrodiagnostic testing may be used in select cases.
              </p>
            </div>

            <div className="space-y-1 pb-4 border-b border-[#ddd]">
              <h3 className="font-bold text-[#0a0a0a] text-base">
                Can it improve over time?
              </h3>
              <p className="text-[#666] text-sm leading-relaxed pt-2">
                Yes, some patients experience gradual improvement in pain over months following the initial injury as inflammation resolves and the nerve adapts. However, others develop chronic pain that requires ongoing management. The trajectory varies significantly among individuals and depends on the severity of nerve injury.
              </p>
            </div>

            <div className="space-y-1 pb-4 border-b border-[#ddd]">
              <h3 className="font-bold text-[#0a0a0a] text-base">
                What treatments are available?
              </h3>
              <p className="text-[#666] text-sm leading-relaxed pt-2">
                Treatment options include conservative approaches (physical therapy, neuropathic pain medications, topical treatments, activity modification) and procedural interventions (ultrasound-guided nerve blocks, peripheral nerve stimulation in selected patients). Treatment is individualized based on severity and response to initial therapy.
              </p>
            </div>

            <div className="space-y-1 pb-4 border-b border-[#ddd]">
              <h3 className="font-bold text-[#0a0a0a] text-base">
                When should I seek medical evaluation?
              </h3>
              <p className="text-[#666] text-sm leading-relaxed pt-2">
                Consider seeking evaluation if you have persistent groin or genital pain (especially following hernia repair or pelvic surgery), numbness or tingling in the groin or upper thigh, pain that affects daily activities or quality of life, or if initial treatments have provided limited relief.
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
              This page describes genitofemoral neuralgia for general educational purposes. It is not
              a guarantee that any specific diagnosis will be confirmed or any particular treatment
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
                  href="/conditions/ilioinguinal-neuralgia"
                  className="text-[#c8a020] hover:underline tracking-wide"
                >
                  Ilioinguinal Neuralgia Evaluation →
                </Link>
              </li>
              <li>
                <Link
                  href="/conditions/iliohypogastric-neuralgia"
                  className="text-[#c8a020] hover:underline tracking-wide"
                >
                  Iliohypogastric Neuralgia Evaluation →
                </Link>
              </li>
              <li>
                <Link href="/conditions/peripheral-nerve-pain" className="text-[#c8a020] hover:underline tracking-wide">
                  Peripheral Nerve Pain Evaluation →
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
    </>
  );
}
