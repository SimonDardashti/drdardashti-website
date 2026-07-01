import type { Metadata } from "next";
import Link from "next/link";
import { MedicalFigure } from "@/components/illustrations";

const PAGE_URL = "https://www.drdardashti.com/conditions/whiplash-associated-disorder";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Whiplash-Associated Disorder | Simon Dardashti, MD" },
  description:
    "Understanding whiplash-associated disorder: causes, symptoms, why pain persists, and evidence-based treatment options. Medical guide from a pain medicine physician.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Whiplash-Associated Disorder | Simon Dardashti, MD",
    description:
      "Comprehensive guide to whiplash injury: mechanism, symptoms, recovery expectations, and treatment options for acute and chronic whiplash pain.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Whiplash-Associated Disorder | Simon Dardashti, MD",
    description: "Understanding neck pain after whiplash injury and evidence-based treatment options.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalWebPage", "Article"],
  name: "Whiplash-Associated Disorder | Simon Dardashti, MD",
  url: PAGE_URL,
  headline: "Whiplash-Associated Disorder: Understanding Neck Pain After Injury",
  description:
    "Comprehensive guide to whiplash-associated disorder written by a board-certified pain medicine physician. Covers mechanism of injury, common symptoms, why pain persists, why imaging may be normal, evaluation methods, and evidence-based treatment options.",
  image: "https://drdardashti.com/og-images/whiplash-associated-disorder.jpg",
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
  about: { "@type": "MedicalCondition", name: "Whiplash-Associated Disorder" },
  inLanguage: "en",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is whiplash always caused by car accidents?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. While motor vehicle collisions are the most common cause, whiplash can result from any mechanism that causes sudden acceleration-deceleration of the head and neck. Sports injuries, falls, physical assault, and other traumatic events can all cause whiplash. The injury mechanism—rapid head and neck movement—is what matters, not the specific cause.",
        },
      },
      {
        "@type": "Question",
        name: "Why does my neck still hurt months after the accident?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Whiplash involves injury to multiple structures—ligaments, muscles, joints, nerves—that take time to heal. Some injuries develop chronic pain patterns, particularly when inflammation persists, muscle weakness remains, or nerve irritation continues. Factors like age, previous neck problems, and initial injury severity influence recovery time.",
        },
      },
      {
        "@type": "Question",
        name: "Why is my MRI normal if I have significant neck pain?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many whiplash injuries involve muscle strain, ligament injuries, and nerve irritation that don't show up on standard MRI. Imaging is good at showing bone and major structural damage but less sensitive to soft tissue injuries and inflammation. Pain can be significant even when imaging appears normal.",
        },
      },
      {
        "@type": "Question",
        name: "Should I wear a neck collar after whiplash?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Prolonged immobilization with neck collars is generally not recommended. Initial rest for a few days may provide comfort, but early gentle movement and physical therapy typically lead to better outcomes than prolonged immobilization. Your physical therapist can guide appropriate activity progression.",
        },
      },
      {
        "@type": "Question",
        name: "Can whiplash cause permanent damage?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most whiplash injuries recover within weeks to months with appropriate treatment. Some people develop chronic pain or persistent symptoms. This doesn't necessarily mean permanent structural damage—it often reflects ongoing muscle tension, nerve irritation, or pain processing changes that can be addressed with targeted treatment.",
        },
      },
      {
        "@type": "Question",
        name: "What is trigger point injection for whiplash?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Trigger points are tight, irritable spots in muscles that refer pain. After whiplash, trigger point injections can relax muscle tension and reduce referred pain. The injection delivers numbing medication and sometimes a small amount of anti-inflammatory medication into the trigger point to interrupt the pain-tension cycle.",
        },
      },
      {
        "@type": "Question",
        name: "When should I see a pain specialist after whiplash?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If acute neck pain after injury isn't improving with conservative treatment (rest, ice, physical therapy) after 2-4 weeks, or if pain is preventing function, seeing a pain specialist is reasonable. If symptoms persist beyond 3 months despite treatment, evaluation for specific pain sources is appropriate.",
        },
      },
      {
        "@type": "Question",
        name: "Can physical therapy really help chronic whiplash?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Evidence supports physical therapy for both acute and chronic whiplash. Therapy focusing on muscle strengthening, flexibility, posture correction, and cervical stability helps restore function and reduce pain. Specialized whiplash rehabilitation protocols have strong evidence for effectiveness.",
        },
      },
    ],
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Conditions", item: `${SITE_URL}/conditions` },
      { "@type": "ListItem", position: 3, name: "Whiplash-Associated Disorder", item: PAGE_URL },
    ],
  },
};

export default function WhiplashAssociatedDisorderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      <article className="prose prose-lg max-w-3xl mx-auto px-4 py-12 md:py-16 lg:py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900">
          Whiplash-Associated Disorder
        </h1>

        <section className="mb-12">
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            You were injured—perhaps in a car accident, a sports collision, or a fall—and your neck has been painful ever since. Your doctor said it was "just whiplash," but weeks or months later, the pain hasn't gone away. You're wondering: Why isn't this healing? Is there something seriously wrong? What can actually help?
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Whiplash-associated disorder is common and can be complex. While many people recover quickly, others develop persistent symptoms that significantly impact their lives. Understanding what happened to your neck, why symptoms persist, and what treatment options exist is the first step toward recovery.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            This page explains whiplash injuries from a medical perspective—what structures are involved, why healing can take time, and what evidence-based treatments can help you recover.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            What Is Whiplash-Associated Disorder?
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Whiplash-associated disorder (WAD) occurs when a sudden acceleration-deceleration force causes the head and neck to move rapidly backward then forward (or in other directions). This violent movement injures soft tissues—muscles, ligaments, joints, and nerves—in the neck.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            The injury typically affects several structures simultaneously:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li><strong>Cervical muscles:</strong> Strain from sudden acceleration causes muscle tears and inflammation</li>
            <li><strong>Ligaments:</strong> The ligaments supporting the cervical spine can be stretched or torn</li>
            <li><strong>Facet joints:</strong> Small joints connecting vertebrae can be irritated or develop inflammation</li>
            <li><strong>Nerve roots:</strong> Nerves can be irritated by inflammation, muscle spasm, or joint involvement</li>
            <li><strong>Discs:</strong> Cervical discs can be stressed or mildly herniated by the injury mechanism</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700">
            The severity of injury varies widely—some people have minor soft tissue strain, others have more significant injury to multiple structures.
          </p>
        </section>

        {/* ILLUSTRATION: Cervical Spine Anatomy */}
        <div className="my-12 flex justify-center">
          <MedicalFigure
            role="anatomy"
            src="/images/anatomy/spine/cervical-spine-anatomy.png"
            alt="Cervical spine anatomy showing the seven cervical vertebrae (C1-C7), supporting ligaments, muscles, discs, facet joints, and nerve roots that are commonly injured in whiplash-associated disorder"
            caption="Cervical Spine Anatomy Involved in Whiplash Injury: Whiplash-associated disorder injures multiple cervical structures. The cervical spine contains seven vertebrae (C1 through C7) separated by intervertebral discs, supported by muscles and ligaments, and connected by small facet joints. The spinal cord passes through the center, and nerve roots exit between vertebrae. The sudden acceleration-deceleration movement of whiplash causes strain and injury to these structures—muscle tears, ligament stretching, disc stress, and nerve irritation. Understanding this anatomy explains why whiplash injuries can affect multiple areas and why symptoms can persist as these tissues heal or develop chronic inflammation."
            priority={true}
          />
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Common Causes
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Motor Vehicle Collisions</h3>
              <p className="text-gray-700">
                The most common cause of whiplash. Rear-end, head-on, and side-impact collisions can all cause whiplash. Even low-speed collisions can cause significant injury if the vehicle is struck unexpectedly.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sports Injuries</h3>
              <p className="text-gray-700">
                Contact sports (football, hockey, rugby), activities with falls or sudden movements (skiing, snowboarding), and tackling in any sport can cause whiplash-type injuries. High-speed collisions and tackles are particularly likely to cause significant injury.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Falls</h3>
              <p className="text-gray-700">
                Falls where the head or neck experiences rapid acceleration-deceleration can cause whiplash injury. This includes falls from height, falls on stairs, or falls where the body decelerates suddenly while the head and neck continue forward.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Common Symptoms
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Whiplash symptoms vary based on injury severity but commonly include:
          </p>

          <div className="space-y-2 text-gray-700 mb-6">
            <p><strong>Neck symptoms:</strong> Neck pain, stiffness, limited range of motion, muscle tightness, pain radiating across the shoulders</p>
            <p><strong>Headaches:</strong> Often at the back of the head, sometimes radiating to the front or sides</p>
            <p><strong>Arm symptoms:</strong> Pain, numbness, or tingling radiating into the arms or hands if nerves are irritated</p>
            <p><strong>Other symptoms:</strong> Dizziness, jaw pain, upper back pain, difficulty concentrating</p>
          </div>

          <p className="text-lg leading-relaxed text-gray-700">
            <strong>Important:</strong> Symptoms don't always start immediately after injury. Some people experience delayed onset of pain and stiffness, developing full symptoms over hours to days.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Why Symptoms Can Persist
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Most whiplash injuries resolve within weeks to a few months. However, some people develop chronic pain. Understanding why this happens helps guide treatment:
          </p>

          <ul className="list-disc list-inside space-y-3 text-gray-700 mb-4">
            <li><strong>Ongoing inflammation:</strong> Inflammation from the initial injury can persist, continuing to irritate nerves and muscles</li>
            <li><strong>Muscle protective spasm:</strong> Neck muscles may remain tight and guarded, preventing normal healing and creating a pain-tension cycle</li>
            <li><strong>Nerve irritation:</strong> If nerves were irritated during the injury, ongoing inflammation may keep them irritated</li>
            <li><strong>Facet joint involvement:</strong> Injured facet joints may develop arthritis or ongoing inflammation</li>
            <li><strong>Deconditioning:</strong> If pain prevents activity early on, muscles weaken, perpetuating poor posture and pain</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700">
            Factors that increase risk of chronic whiplash include: older age, pre-existing neck problems, high injury severity, psychological distress, and delayed initiation of treatment.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Why Imaging May Be Normal
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            After whiplash injury, many people have significant pain while imaging (MRI or X-ray) looks relatively normal. This can be frustrating—you're in pain, but doctors say "nothing is broken." Understanding why is important:
          </p>

          <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
            <li><strong>Soft tissue injuries aren't always visible:</strong> Muscle strains, ligament injuries, and inflammation don't always show up on standard imaging</li>
            <li><strong>Early imaging misses inflammation:</strong> Acute inflammation from injury isn't always apparent on imaging</li>
            <li><strong>Minor joint injuries may not be visible:</strong> Small facet joint injuries or cartilage damage may not show on routine imaging</li>
            <li><strong>Pain can exist without structural damage:</strong> <Link href="/pain-without-imaging" className="text-blue-600 hover:text-blue-800">Pain can be real and significant even when imaging is normal</Link></li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700">
            Normal imaging after whiplash doesn't mean your injury isn't real—it means the structures involved don't show up on standard tests. Clinical evaluation is more important than imaging for whiplash diagnosis.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            How I Evaluate Whiplash Injuries
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Thorough evaluation of whiplash injury includes:
          </p>

          <div className="space-y-4 mb-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Detailed Injury History</h3>
              <p className="text-gray-700">How the injury occurred, initial symptoms, how symptoms evolved over time, what makes them better or worse, and what treatments have been tried</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Physical Examination</h3>
              <p className="text-gray-700">Assessment of neck range of motion, muscle tenderness and spasm, palpation of structures, nerve testing, and specific maneuvers to identify pain sources</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Imaging Review</h3>
              <p className="text-gray-700">If imaging exists, review for major structural problems. New imaging is ordered only if clinical findings suggest it would change treatment</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Identification of Specific Pain Sources</h3>
              <p className="text-gray-700">Determining whether pain comes from muscles, joints, nerves, or a combination—this guides treatment selection</p>
            </div>
          </div>

          <p className="text-lg leading-relaxed text-gray-700">
            This comprehensive approach identifies what structures are causing pain so treatment can be targeted accurately.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Treatment Options
          </h2>

          <div className="space-y-4">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Activity Modification</h3>
              <p className="text-gray-700">
                Avoiding activities that aggravate symptoms while gradually returning to normal activity. Initial rest may be appropriate, but prolonged immobilization is generally avoided in favor of early gentle movement.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Physical Therapy</h3>
              <p className="text-gray-700">
                Specialized whiplash rehabilitation focusing on muscle strengthening, flexibility, posture correction, and cervical stability. This is a cornerstone of treatment for both acute and chronic whiplash.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Medications</h3>
              <p className="text-gray-700">
                Anti-inflammatory medications, muscle relaxants, and other medications depending on symptom type. Coordinated with your primary care doctor.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                <Link href="/procedures/trigger-point-injections" className="text-blue-600 hover:text-blue-800">Trigger Point Injections</Link>
              </h3>
              <p className="text-gray-700">
                For persistent muscle tightness and trigger points common after whiplash. Injections relax muscles and interrupt pain-tension cycles.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                <Link href="/procedures/facet-joint-injections-medial-branch-blocks" className="text-blue-600 hover:text-blue-800">Medial Branch Blocks</Link>
              </h3>
              <p className="text-gray-700">
                If facet joint pain is identified, diagnostic blocks can confirm this and provide relief while other treatments take effect.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                <Link href="/procedures/radiofrequency-ablation" className="text-blue-600 hover:text-blue-800">Radiofrequency Ablation</Link>
              </h3>
              <p className="text-gray-700">
                For persistent facet joint pain, radiofrequency ablation can provide longer-lasting relief by reducing pain signals from irritated joints.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Recovery Expectations
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Recovery from whiplash varies widely, but understanding typical timelines can help set realistic expectations:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li><strong>Acute phase (first 2-3 weeks):</strong> Initial inflammation, muscle guarding, pain is typically worst. Rest and ice are appropriate.</li>
            <li><strong>Early recovery (weeks 3-8):</strong> Transition to active treatment. Physical therapy and gradual activity resumption typically begin. Pain gradually improves.</li>
            <li><strong>Intermediate recovery (weeks 8-16):</strong> Most people show significant improvement. Progressive strengthening and return to activities continue.</li>
            <li><strong>Longer term:</strong> Most acute whiplash resolves within 3 months. However, 20-30% of people develop chronic symptoms lasting longer.</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700">
            Factors that speed recovery: early physical therapy, consistent treatment, gradual activity progression, and staying active despite pain (within limits). Early immobilization and extended rest can actually slow recovery.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            When Additional Evaluation Is Needed
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Seek additional evaluation if:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li><strong>Significant neurological symptoms:</strong> Weakness, numbness, or coordination problems</li>
            <li><strong>Progressively worsening symptoms:</strong> Most whiplash improves over time; progressive worsening warrants investigation</li>
            <li><strong>Pain not improving after 4-6 weeks:</strong> Earlier specialist evaluation can identify specific pain sources and initiate targeted treatment</li>
            <li><strong>Persistent symptoms beyond 3 months:</strong> Evaluation for chronic pain patterns and procedural treatment options is appropriate</li>
            <li><strong>Associated headaches or dizziness:</strong> May indicate <Link href="/conditions/cervicogenic-headache" className="text-blue-600 hover:text-blue-800">cervicogenic headache</Link> or other specific problems worth evaluating</li>
          </ul>
        </section>

        <section className="mb-12 bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">About Simon Dardashti, MD</h3>
          <p className="text-gray-700 mb-2">
            <strong>Board-Certified Pain Medicine Physician</strong>
          </p>
          <ul className="text-sm text-gray-700 space-y-1 mb-3">
            <li>• Specialized training in Pain Medicine from UCLA</li>
            <li>• 10+ years evaluating and treating whiplash injuries</li>
            <li>• Expert in identifying specific pain sources in whiplash injury</li>
            <li>• Focus on targeted, evidence-based treatment</li>
            <li>• Virtual consultations available</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How long does it take to recover from whiplash?
              </h3>
              <p className="text-gray-700">
                Most people recover within 3 months. However, recovery varies—some recover in weeks, others take longer. Factors like age, injury severity, and treatment compliance affect timeline. Early active treatment typically leads to faster recovery than prolonged rest.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do I need imaging after whiplash?
              </h3>
              <p className="text-gray-700">
                Not always. If you have neurological symptoms (weakness, numbness) or signs of serious injury, imaging is appropriate. But for typical muscle strain and ligament injury, clinical evaluation is usually sufficient. Imaging is ordered based on findings, not routinely.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Will I have permanent damage from whiplash?
              </h3>
              <p className="text-gray-700">
                Most whiplash injuries heal completely without permanent damage. Some people develop chronic pain, but this isn't necessarily from structural damage—it can be muscle tension, nerve irritation, or altered pain processing that responds to treatment.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Should I continue physical therapy if it hurts?
              </h3>
              <p className="text-gray-700">
                Some discomfort during therapy is normal, but pain should be manageable. Tell your therapist if something is too painful—they can modify exercises. Gentle movement and gradual progression are important; overaggressive therapy can slow recovery.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can I exercise with whiplash?
              </h3>
              <p className="text-gray-700">
                Yes, gradual exercise and physical therapy are important for recovery. Avoid high-impact activities or contact sports early on, but low-impact exercise and stretching should start early. Your physical therapist can guide appropriate activity level.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                <Link href="/treatment-options" className="text-blue-600 hover:text-blue-800">What treatment options are available</Link> for chronic whiplash?
              </h3>
              <p className="text-gray-700">
                Conservative management (physical therapy, medications, activity modification) should be tried first. If that's insufficient, specific pain sources can be identified through diagnostic evaluation and targeted with injections or procedures. Each person's treatment plan is individualized.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 pt-8 border-t">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">
            Related Resources
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><Link href="/pain-without-imaging" className="text-blue-600 hover:text-blue-800">Pain Without Imaging Findings</Link> — Understanding pain when imaging is normal</li>
            <li><Link href="/treatment-options" className="text-blue-600 hover:text-blue-800">Treatment Options</Link> — Overview of all pain management approaches</li>
            <li><Link href="/conditions/neck-pain" className="text-blue-600 hover:text-blue-800">Neck Pain</Link> — Comprehensive neck pain guide</li>
            <li><Link href="/conditions/cervicogenic-headache" className="text-blue-600 hover:text-blue-800">Cervicogenic Headache</Link> — Common whiplash complication</li>
            <li><Link href="/conditions/myofascial-pain" className="text-blue-600 hover:text-blue-800">Myofascial Pain</Link> — Muscle pain common in whiplash</li>
            <li><Link href="/virtual-consultations" className="text-blue-600 hover:text-blue-800">Virtual Consultations</Link> — Schedule an appointment</li>
          </ul>
        </section>

        <section className="mb-12 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Evaluate Your Whiplash Injury
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            If you've suffered a whiplash injury and are experiencing persistent symptoms, comprehensive evaluation can identify exactly which structures are causing pain and what treatment options may help. Early intervention often leads to better outcomes than waiting.
          </p>

          <Link
            href="/virtual-consultations"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Schedule a Virtual Consultation
          </Link>
          <p className="text-sm text-gray-600 mt-4">
            Virtual consultations allow detailed history taking and discussion of your symptoms and treatment options.
          </p>
        </section>

        <section className="mt-12 pt-8 border-t text-sm text-gray-600">
          <p>
            <strong>Medical Disclaimer:</strong> This page is educational and does not constitute medical advice. All medical decisions should be made in consultation with a qualified healthcare provider who understands your complete medical history. If you have symptoms from whiplash injury, seek evaluation from a qualified pain medicine physician or your primary care doctor.
          </p>
        </section>
      </article>
    </>
  );
}
