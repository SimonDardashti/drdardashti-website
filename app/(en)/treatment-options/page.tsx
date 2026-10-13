import { Metadata } from 'next'
import Link from 'next/link'
import MedicalReviewFooter from "@/components/MedicalReviewFooter"

const PAGE_URL = 'https://www.drdardashti.com/treatment-options'

export const metadata: Metadata = {
  title: 'Conservative Care vs Injections vs Surgery: Treatment Options for Pain',
  description: 'Understand when conservative care, injections, and surgery are appropriate for neck and back pain. Learn how treatment decisions are made and what to expect at each step.',
  keywords: [
    'conservative treatment vs injections',
    'injections vs surgery',
    'back pain treatment options',
    'alternatives to back surgery',
    'when to get epidural injection',
    'nonsurgical pain treatment',
    'pain management before surgery',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Conservative Care vs Injections vs Surgery: Understanding Your Treatment Options',
    description: 'Learn how to choose between conservative care, injections, and surgery based on diagnosis and clinical response.',
    type: 'article',
    url: PAGE_URL,
  },
}

// JSON-LD Schema
const pageSchema = {
  '@context': 'https://schema.org',
  '@type': ['MedicalWebPage', 'Article'],
  name: 'Conservative Care vs Injections vs Surgery: Choosing the Right Treatment Path',
  url: PAGE_URL,
  headline: 'Conservative Care vs Injections vs Surgery: Choosing the Right Treatment Path',
  description: 'Comprehensive guide to understanding treatment options for pain, from board-certified pain medicine specialist Dr. Simon Dardashti.',
  image: 'https://www.drdardashti.com/headshot.webp',
  datePublished: '2026-06-16',
  dateModified: '2026-10-13',
  author: {
    '@type': 'Person',
    name: 'Simon Dardashti, MD',
    title: 'Board-Certified Pain Medicine Physician',
    url: 'https://www.drdardashti.com/about',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Simon Dardashti, MD',
  },
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Should I try physical therapy before injections?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Physical therapy and other non-surgical options are often appropriate, depending on the diagnosis and examination. There is no single waiting period before an injection is considered. Persistent symptoms should be reassessed with your clinician. Progressive weakness needs prompt medical assessment; new bowel or bladder dysfunction or numbness around the genitals or anus requires emergency care.",
        },
      },
      {
        '@type': 'Question',
        name: 'Do injections prevent surgery?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "An injection may help selected symptoms, but it cannot guarantee that surgery will be avoided. The indication, expected benefit, risks, and alternatives should be discussed for the specific procedure. An injection is not a required step before urgent surgical assessment.",
        },
      },
      {
        '@type': 'Question',
        name: 'Can injections cure a herniated disc?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "An injection does not repair a herniated disc. An epidural steroid injection may reduce symptoms in selected patients, but the response varies and is not a guarantee of recovery. The decision should consider the clinical diagnosis, risks, alternatives, and goals of treatment.",
        },
      },
      {
        '@type': 'Question',
        name: 'How long should I try conservative care before considering other options?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "The duration of conservative care depends on the diagnosis, symptom severity, functional limitations, and response to treatment. Agree on goals and a reassessment plan with your clinician rather than using a fixed waiting period. New or worsening neurological symptoms need reassessment sooner; emergency symptoms require immediate care.",
        },
      },
      {
        '@type': 'Question',
        name: 'When is surgery truly unavoidable?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Surgery is considered after an individual assessment of the diagnosis, symptoms, examination, imaging, and expected benefits and risks. Progressive weakness needs prompt assessment. New bowel or bladder dysfunction or numbness around the genitals or anus requires emergency care. These symptoms require evaluation and do not establish the need for a particular operation by themselves.",
        },
      },
      {
        '@type': 'Question',
        name: 'Are injections safe?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'When performed by a trained physician using image guidance and sterile technique, injections are generally safe. The medications used—local anesthetic and steroids—have been used for decades in pain medicine. Serious complications are uncommon. However, no procedure is completely risk-free. Potential complications include infection, nerve damage, or reaction to medication. A thorough discussion of benefits and risks specific to your situation should happen before any procedure.',
        },
      },
      {
        '@type': 'Question',
        name: 'What if my MRI shows significant damage but I feel relatively well?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Imaging findings and symptoms do not always correspond. An abnormal MRI alone does not establish the source of pain or the need for surgery. Your clinician should compare the findings with your history and examination; a mismatch does not by itself prove that an abnormality is unrelated.",
        },
      },
      {
        '@type': 'Question',
        name: 'What if my MRI is normal but I have significant pain?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Normal imaging does not exclude pain or establish its cause. The next steps depend on the history, examination, and the limitations of the test. Persistent or changing symptoms may need further assessment. Treatment should follow an individual clinical evaluation rather than the scan result alone.",
        },
      },
    ],
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.drdardashti.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Conditions',
        item: 'https://www.drdardashti.com/conditions/',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Treatment Options',
        item: PAGE_URL,
      },
    ],
  },
}

export default function TreatmentOptions() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <article className="prose prose-lg max-w-3xl mx-auto px-4 py-12 md:py-16 lg:py-20">

        {/* H1 */}
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-900">
          Conservative Care vs Injections vs Surgery
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 font-medium">
          How to Choose the Right Treatment Path for Back Pain, Neck Pain, Sciatica, and Nerve Pain
        </p>

        {/* Authority Page Callout */}
        <section className="mb-12 bg-amber-50 border border-amber-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Normal MRI but Still in Pain?
          </h3>
          <p className="text-gray-700 mb-4">
            Many patients experience significant pain despite normal MRI or CT findings. Imaging is only one part of the diagnostic process.
          </p>
          <Link href="/pain-without-imaging" className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded transition-colors text-sm">
            Pain Without Imaging Findings
          </Link>
        </section>

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            One of the most common questions I hear is: "Do I need injections? Do I need surgery? Shouldn't I just try physical therapy first?"
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            The honest answer is: it depends on your diagnosis.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            There is no one-size-fits-all treatment for pain. The right treatment path depends on what is actually causing your pain, how severe your symptoms are, whether your nerves are being damaged, how you are responding to prior care, and what your goals are. This page will help you understand how these decisions are made and what to expect at each stage of treatment.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            <strong>Note:</strong> If your imaging tests are normal but you still have pain, understanding <Link href="/pain-without-imaging" className="text-blue-600 hover:text-blue-800 font-medium">why normal imaging doesn't rule out real pain</Link> is essential context for this conversation. Many of the conditions discussed here present with normal or minimally abnormal imaging.
          </p>
        </section>

        {/* Section 1 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Why Most Patients Do Not Need Immediate Surgery
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Many patients can be managed without immediate surgery, but the treatment path depends on the particular condition and neurological findings. An imaging abnormality alone is not a reason to operate. New emergency symptoms or progressive weakness require timely assessment rather than completion of a routine treatment sequence.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            The course of disc-related symptoms varies. Improvement is possible without surgery, but this page cannot predict whether a particular disc will shrink or whether function will recover. Treatment and follow-up should be based on the individual clinical picture.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            This does not mean surgery is never necessary. For the right patient—someone with progressive nerve damage, severe compression, or symptoms that are not improving despite appropriate treatment—surgery can be genuinely helpful. But surgery is not the first answer for most patients. It is a tool for specific situations.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            The approach should be: "What is the least invasive treatment likely to address your diagnosis and help you return to function?" Often, that is conservative care. Sometimes, it is injections. Occasionally, it is surgery. The key is matching treatment to diagnosis, not choosing treatment because the tools are available.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            What Conservative Care Includes
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Conservative care is not just "wait and see." It is an active, structured approach to managing pain and restoring function.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Physical Therapy</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Physical therapy can address strength, movement, and functional limitations through an individualized program. Exercise should be adjusted to your condition and tolerance. Do not assume that worsening pain is a necessary part of recovery; discuss deterioration or new symptoms with your clinician. Progressive weakness or sensory changes need reassessment.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Activity Modification</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Some activities make pain worse. Others help. Learning which is which and adjusting your activity—not eliminating activity, but modifying it—is crucial. Pain is a signal. Listening to that signal and working within your tolerance while gradually expanding it is how you recover.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Medication When Appropriate</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Anti-inflammatory medications, muscle relaxants, or other medications can help in the early stages. The goal is using medication to reduce pain enough to allow physical therapy to work, not using medication as a permanent solution. Some patients benefit from additional medication to manage pain at night or during work.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Sleep, Weight, and General Health</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Sleep quality affects pain perception and healing. Weight affects load on joints and spine. Overall fitness affects recovery. These factors matter. Conservative care includes attention to these elements, not just formal therapy sessions.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            <strong>Timeline and expectations:</strong> Set individual goals for pain, function, and activity with your clinician. Reassessment depends on the diagnosis and response, rather than a fixed number of weeks. Worsening symptoms may require earlier review.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Response to conservative care varies by diagnosis and individual circumstances. Progress should be assessed against your agreed functional goals and symptoms, without relying on a general success percentage.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            When Injections Become Useful
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Injections are not a substitute for conservative care—they are a tool that works alongside it. When inflammation is the primary problem, reducing that inflammation can reduce pain and improve function. This is where injections become useful.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            <strong>Common injections include:</strong>
          </p>
          <ul className="list-disc list-inside mb-6 text-gray-700 space-y-2">
            <li><strong><Link href="/procedures/epidural-steroid-injections" className="text-blue-600 hover:text-blue-800">Epidural steroid injection:</Link></strong> Reduces inflammation in the spinal canal around nerves. Can improve pain and function, allowing physical therapy to work better.</li>
            <li><strong><Link href="/procedures/facet-joint-injections-medial-branch-blocks" className="text-blue-600 hover:text-blue-800">Medial branch block:</Link></strong> Targets facet joint pain. Can provide relief while guiding whether facet joints are actually the source of pain.</li>
            <li><strong><Link href="/procedures/radiofrequency-ablation" className="text-blue-600 hover:text-blue-800">Radiofrequency ablation:</Link></strong> For persistent facet pain, longer-term relief through controlled heat.</li>
            <li><strong>Sacroiliac joint injections:</strong> Target SI joint dysfunction when that is the pain source.</li>
            <li><strong>Peripheral nerve blocks:</strong> Address pain from specific nerves outside the spine.</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            <strong>What injections can and cannot do:</strong> Injections can reduce inflammation, improve function, and provide relief while your body heals. They can also provide diagnostic information—if pain improves after targeting a specific structure, that tells you something important about where the pain is coming from. What injections cannot do is repair structural damage or guarantee permanent relief. They are tools, used in the right situation, for the right patient.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            The decision to inject should always be based on diagnosis. The fact that a certain injection exists does not mean you need it. The presence of an abnormality on imaging does not mean that abnormality is causing your pain. Injections should target the structure you believe is causing your pain—and that belief should come from clinical evaluation, not imaging severity.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            When Surgery Should Be Considered
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            A surgical consultation may be appropriate for a condition that can benefit from surgery, including persistent disabling symptoms despite appropriate non-surgical care. Injections are not mandatory before every consultation. Urgent neurological problems require timely assessment.
          </p>

          <ul className="list-disc list-inside mb-6 text-gray-700 space-y-2">
            <li><strong>Progressive neurological deficits:</strong> Worsening weakness, numbness, loss of reflexes, or functional loss despite treatment suggests nerve damage is progressing. This can warrant surgical decompression.</li>
            <li><strong>Severe nerve compression causing significant disability:</strong> If you are unable to work or perform basic activities despite appropriate treatment, surgery may be an option.</li>
            <li><strong>Spinal instability:</strong> Certain conditions cause instability that conservative care cannot address. Surgery may stabilize the spine.</li>
            <li><strong>Persistent symptoms despite appropriate conservative and interventional treatment:</strong> If you have tried conservative care and injections without sufficient relief, and imaging shows a structural problem that could be surgically corrected, surgery may be worth considering.</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            <strong>An important note:</strong> Decisions about surgery should be made with a surgeon who has evaluated you. My role is to help clarify the pain diagnosis and discuss suitable treatment options. A routine sequence of therapy and injections should not delay urgent assessment.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            A surgical decision considers the clinical diagnosis, examination, relevant imaging, alternatives, expected benefits, and risks. The urgency of the condition matters. There is no universal checklist that determines whether surgery is right for every patient.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            How I Help Patients Decide
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            My job is to help you understand what is causing your pain and what treatment options make sense for your specific situation.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Comprehensive History</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            I want to understand how your pain started, what makes it better or worse, how it has changed over time, and what you have already tried. Your history tells me about pain patterns and mechanisms. It also tells me whether treatments have been appropriate and what you are actually experiencing day to day.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Detailed Physical Examination</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            The exam tells me which structures are involved. I assess your range of motion, strength, sensation, and reflexes. I use specific maneuvers to reproduce your pain or rule out certain conditions. If I can reproduce your pain with a specific movement or test, that tells me something concrete about what is wrong. This information is at least as important as imaging.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Functional Assessment</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            How is your pain affecting your life? Can you work? Sleep? Exercise? How does that limitation affect your goals? This is not about pain severity—it is about how pain impacts the life you want to live. Treatment should address functional limitations, not just the number on a pain scale.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Imaging and Test Interpretation</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            I review your imaging in context of your clinical presentation. Does the imaging finding match your symptoms? Does it explain your exam findings? Many imaging abnormalities are coincidental and not causing your pain. Others are clearly the source. The interpretation depends on the whole picture, not the image alone.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Response to Prior Treatment</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            What did you try? How did you respond? If you improved with physical therapy, that tells me your pain has a mechanical or functional component. If you didn't improve, that tells me something different. If you had an injection and it helped, that tells me something about which structure is involved. This information guides what to try next.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Diagnostic Injections When Appropriate</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            A diagnostic injection may contribute information about a suspected pain source. The response must be interpreted with the technique, medication, timing, activity, and other clinical findings. Relief does not conclusively prove a diagnosis, and lack of relief does not automatically exclude a structure.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            <strong>The goal of this entire process:</strong> To arrive at an accurate diagnosis and recommend the least invasive treatment likely to help you return to function. Not to recommend injections because they exist. Not to recommend surgery because you are frustrated. But to recommend the right treatment for your specific problem.
          </p>
        </section>

        {/* Section 6: FAQs */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">

            <div className="border-b pb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Should I try physical therapy before injections?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Physical therapy and other non-surgical options are often appropriate, depending on the diagnosis and examination. There is no single waiting period before an injection is considered. Persistent symptoms should be reassessed with your clinician. Progressive weakness needs prompt medical assessment; new bowel or bladder dysfunction or numbness around the genitals or anus requires emergency care.
              </p>
            </div>

            <div className="border-b pb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Do injections prevent surgery?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                An injection may help selected symptoms, but it cannot guarantee that surgery will be avoided. The indication, expected benefit, risks, and alternatives should be discussed for the specific procedure. An injection is not a required step before urgent surgical assessment.
              </p>
            </div>

            <div className="border-b pb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Can injections cure a herniated disc?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                An injection does not repair a herniated disc. An epidural steroid injection may reduce symptoms in selected patients, but the response varies and is not a guarantee of recovery. The decision should consider the clinical diagnosis, risks, alternatives, and goals of treatment.
              </p>
            </div>

            <div className="border-b pb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                How long should I try conservative care before considering other options?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The duration of conservative care depends on the diagnosis, symptom severity, functional limitations, and response to treatment. Agree on goals and a reassessment plan with your clinician rather than using a fixed waiting period. New or worsening neurological symptoms need reassessment sooner; emergency symptoms require immediate care.
              </p>
            </div>

            <div className="border-b pb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                When is surgery truly unavoidable?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Surgery is considered after an individual assessment of the diagnosis, symptoms, examination, imaging, and expected benefits and risks. Progressive weakness needs prompt assessment. New bowel or bladder dysfunction or numbness around the genitals or anus requires emergency care. These symptoms require evaluation and do not establish the need for a particular operation by themselves.
              </p>
            </div>

            <div className="border-b pb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Are injections safe?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                When performed by a trained physician using image guidance and sterile technique, injections are generally safe. The medications used—local anesthetic and steroids—have been used for decades in pain medicine. Serious complications are uncommon. However, no procedure is completely risk-free. Potential complications include infection, nerve damage, or reaction to medication. A thorough discussion of benefits and risks specific to your situation should happen before any procedure.
              </p>
            </div>

            <div className="border-b pb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                What if my MRI shows significant damage but I feel relatively well?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Imaging findings and symptoms do not always correspond. An abnormal MRI alone does not establish the source of pain or the need for surgery. Your clinician should compare the findings with your history and examination; a mismatch does not by itself prove that an abnormality is unrelated.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                What if my MRI is normal but I have significant pain?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Normal imaging does not exclude pain or establish its cause. The next steps depend on the history, examination, and the limitations of the test. Persistent or changing symptoms may need further assessment. Treatment should follow an individual clinical evaluation rather than the scan result alone.
              </p>
            </div>

          </div>
        </section>

        {/* Section 7 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            The Right Treatment Is the One That Fits Your Diagnosis
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            The fundamental principle behind choosing between conservative care, injections, and surgery is this: diagnosis drives treatment.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Not every patient needs surgery. Not every patient needs injections. Not every patient improves with conservative care alone. The goal is understanding what is actually causing your pain and choosing the least invasive, most effective treatment for that specific problem.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            This requires thorough evaluation. It requires listening to your history and taking it seriously. It requires a careful physical examination. It requires interpreting imaging correctly—not as a treatment plan, but as one piece of diagnostic information. It requires watching how you respond to treatment and adjusting accordingly.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            This approach takes time and thought. It is easier to offer the first injection or surgery that comes to mind. But that is not how good medicine works. Good medicine asks: "What is actually wrong? What treatment will address that problem? What is the least invasive option likely to work?" If the answer is physical therapy, that is the recommendation. If it is injections, that is what we do. If it is surgery, we recommend that. The answer depends on your diagnosis.
          </p>
        </section>

        {/* Physician Authority Box */}
        <section className="mb-12 bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
          <div className="flex gap-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">About Dr. Simon Dardashti, MD</h3>
              <p className="text-gray-700 mb-2">
                <strong>Board-Certified in Pain Medicine and Anesthesiology</strong>
              </p>
              <ul className="text-sm text-gray-700 space-y-1 mb-3">
                <li>• UCLA Pain Medicine fellowship-trained</li>
                <li>• 10+ years specializing in spine, nerve, and musculoskeletal pain</li>
                <li>• Diagnosis-driven approach to treatment planning</li>
                <li>• Virtual consultations available for patients worldwide</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 8: Next Steps */}
        <section className="mb-12 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Next Steps
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            If you are unsure whether conservative care, injections, or surgery is the right next step for your pain, a consultation can help clarify your options.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            I can review your specific situation, examine you if needed, help you understand what may be causing your pain, and discuss what treatment approach makes sense for your diagnosis and goals.
          </p>

          <div className="flex flex-col gap-4">
            <Link
              href="/virtual-consultations"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Schedule a Virtual Consultation
            </Link>
            <p className="text-sm text-gray-600">
              Virtual consultations allow us to discuss your condition, review your imaging and prior treatment, and determine the right next step for your situation.
            </p>
          </div>
        </section>

        {/* Related Content */}
        <section className="mt-12 pt-8 border-t">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">
            Related Conditions and Treatments
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><Link href="/conditions/low-back-pain" className="text-blue-600 hover:text-blue-800">Low Back Pain</Link></li>
            <li><Link href="/conditions/sciatica-radicular-pain" className="text-blue-600 hover:text-blue-800">Sciatica</Link></li>
            <li><Link href="/conditions/cervical-radiculopathy" className="text-blue-600 hover:text-blue-800">Cervical Radiculopathy</Link></li>
            <li><Link href="/procedures/epidural-steroid-injections" className="text-blue-600 hover:text-blue-800">Epidural Steroid Injection</Link></li>
            <li><Link href="/procedures/facet-joint-injections-medial-branch-blocks" className="text-blue-600 hover:text-blue-800">Medial Branch Block</Link></li>
            <li><Link href="/procedures/radiofrequency-ablation" className="text-blue-600 hover:text-blue-800">Radiofrequency Ablation</Link></li>
          </ul>
        </section>

      <section className="mb-12"><h2 className="text-2xl font-bold mb-4">Sources and scope</h2><ul className="list-disc pl-6 space-y-2"><li><a className="text-blue-600 underline" href="https://www.nice.org.uk/guidance/ng59/chapter/Recommendations">NICE NG59: Low back pain and sciatica in over 16s: assessment and management</a></li><li><a className="text-blue-600 underline" href="https://www.nhs.uk/conditions/back-pain/">NHS: Back pain</a></li></ul><p className="text-gray-700 mt-4">The NICE guideline concerns low back pain and sciatica; it is not a rule for every neck or back condition. This page provides general education and cannot determine your treatment.</p></section>
      </article>

      {/* MEDICAL REVIEW */}
      <MedicalReviewFooter path="/treatment-options" />
    </>
  )
}
