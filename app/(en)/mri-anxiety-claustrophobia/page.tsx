import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.drdardashti.com";
const PAGE_URL = `${SITE_URL}/mri-anxiety-claustrophobia`;

export const metadata: Metadata = {
  title: { absolute: "MRI Anxiety & Claustrophobia: A Calm, Practical Guide" },
  description:
    "Worried about an MRI? Learn what MRI is, why it uses no ionizing radiation, how standard and open MRI scanners differ, and which comfort options may help.",
  keywords: [
    "MRI anxiety",
    "MRI claustrophobia",
    "open MRI for claustrophobia",
    "how to get through an MRI",
    "does MRI have radiation",
    "MRI anxiety medication",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "MRI Anxiety & Claustrophobia: A Calm, Practical Guide",
    description:
      "A physician-authored guide to what an MRI feels like, comfort options, open MRI, and when medication may be considered.",
    images: [
      {
        url: "/images/resources/standard-mri-scanner.png",
        width: 1536,
        height: 1024,
        alt: "Illustration of a modern standard MRI scanner room",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MRI Anxiety & Claustrophobia: A Calm, Practical Guide",
    description: "What to expect, how MRI stays safe, and practical ways to feel more comfortable.",
    images: ["/images/resources/standard-mri-scanner.png"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalWebPage", "Article"],
  name: "MRI Anxiety & Claustrophobia: A Calm, Practical Guide",
  headline: "MRI Anxiety and Claustrophobia: What to Expect and How to Prepare",
  url: PAGE_URL,
  description:
    "Patient education about MRI safety, claustrophobia, standard and open MRI equipment, comfort measures, and clinician-directed anxiety medication.",
  image: `${SITE_URL}/images/resources/standard-mri-scanner.png`,
  datePublished: "2026-10-06",
  dateModified: "2026-10-06",
  inLanguage: "en-US",
  author: {
    "@type": "Physician",
    name: "Simon Dardashti, MD",
    url: SITE_URL,
    medicalSpecialty: ["Pain Medicine", "Anesthesiology"],
  },
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Patient Education", item: `${SITE_URL}/patient-education` },
      { "@type": "ListItem", position: 3, name: "MRI Anxiety & Claustrophobia", item: PAGE_URL },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does an MRI use radiation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MRI uses a powerful magnet, radio waves, and a computer to make detailed images. It does not use x-rays or ionizing radiation.",
      },
    },
    {
      "@type": "Question",
      name: "Can I have an open MRI if I am claustrophobic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An open or wide-bore MRI may be more comfortable for some people, but it is not appropriate or available for every examination. Ask the ordering clinician and imaging center which scanner can provide the images your exam requires.",
      },
    },
    {
      "@type": "Question",
      name: "Can I take an anxiety pill before an MRI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In selected circumstances, a clinician may prescribe medication to help with MRI anxiety. Coordinate this in advance with the prescriber and imaging center, take it only as directed, and follow all instructions about transportation, driving, food, and other medicines.",
      },
    },
    {
      "@type": "Question",
      name: "Can the MRI technologist hear me during the scan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The technologist can see, hear, and speak with you during the exam. Most centers also provide a call or squeeze device so you can ask for attention at any time.",
      },
    },
  ],
};

const comfortOptions = [
  {
    title: "Tell the imaging center early",
    body: "When you schedule, say that you have anxiety or claustrophobia. This gives the team time to discuss the scanner, positioning, appointment length, and available accommodations.",
  },
  {
    title: "Reduce the sound",
    body: "MRI scanners make loud tapping, knocking, and thumping sounds. The imaging team should provide hearing protection such as earplugs, headphones, or both. Some centers can also play music.",
  },
  {
    title: "Limit what you see",
    body: "Closing your eyes before the table moves, using an MRI-safe eye covering, or asking whether a mirror is available can reduce the visual sense of enclosure. Confirm that anything brought into the room is approved and contains no metal.",
  },
  {
    title: "Stay connected",
    body: "The technologist can see, hear, and speak with you. Ask whether they can tell you how long each image sequence will last. You will usually have a call or squeeze device if you need attention.",
  },
  {
    title: "Ask about positioning and support",
    body: "Depending on the body part being imaged, feet-first positioning may be possible. Some facilities also allow a screened support person in the room. Availability and safety rules vary.",
  },
  {
    title: "Practice one simple calming skill",
    body: "Slow breathing, counting, or focusing on music can give your attention a predictable task. Practice before the appointment so the technique feels familiar rather than new.",
  },
];

export default function MriAnxietyClaustrophobiaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-[#0a0a0a] text-white py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Patient Comfort Guide
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Anxious About an MRI?
            <br />
            <em className="not-italic text-[#888]">You have options.</em>
          </h1>
          <p className="mt-6 text-[#aaa] text-lg md:text-xl max-w-3xl leading-relaxed">
            MRI anxiety and claustrophobia are common. Knowing what the scanner does, what you will hear, and which comfort options to request can make the experience feel more predictable and manageable.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a href="#comfort-plan" className="inline-flex justify-center bg-[#c8a020] text-black px-6 py-3 text-sm font-semibold hover:bg-[#d8b43a] transition-colors">
              Build your comfort plan
            </a>
            <a href="#scanner-options" className="inline-flex justify-center border border-[#555] text-white px-6 py-3 text-sm font-semibold hover:border-[#c8a020] transition-colors">
              Compare scanner options
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#f9f7f4] py-14 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            ["No ionizing radiation", "MRI uses a strong magnet and radio waves—not x-rays or CT radiation."],
            ["You stay in contact", "The technologist can see, hear, and speak with you throughout the exam."],
            ["Preparation can help", "Sound reduction, an eye covering, positioning, and scanner choice may improve comfort."],
          ].map(([title, body]) => (
            <div key={title} className="bg-white border border-[#e5e5e0] p-6">
              <h2 className="font-bold text-[#0a0a0a] mb-2">{title}</h2>
              <p className="text-[#666] text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#c8a020] text-xs font-semibold tracking-[0.25em] uppercase mb-3">The basics</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-6" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            What is an MRI?
          </h2>
          <div className="space-y-5 text-[#555] text-lg leading-relaxed">
            <p>
              Magnetic resonance imaging, or MRI, uses a powerful magnet, radio waves, and a computer to create detailed pictures of structures inside the body. Unlike an x-ray or CT scan, an MRI does <strong className="text-[#0a0a0a]">not</strong> use ionizing radiation.
            </p>
            <p>
              The scan itself is generally painless, but you must remain still while the images are being made. You will hear repeated tapping, knocking, or thumping. These sounds are expected and come from the scanner operating—not from anything touching or harming you.
            </p>
            <p>
              MRI is considered very safe for most people when proper screening and facility protocols are followed. Because the magnet is powerful, tell the imaging team about implanted devices, prior surgery, metal or fragments in your body, pregnancy, kidney problems, and any previous contrast reaction. The imaging center—not this website—must determine whether your specific exam and equipment are appropriate.
            </p>
          </div>
          <div className="mt-8 border-l-4 border-[#c8a020] bg-[#f9f7f4] p-6">
            <p className="text-[#333] leading-relaxed">
              <strong>You are not locked inside.</strong> Standard scanners are open at both ends. The technologist monitors you, communicates through an intercom, and can move the table out if necessary.
            </p>
          </div>
        </div>
      </section>

      <section id="scanner-options" className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0] scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-10">
            <p className="text-[#c8a020] text-xs font-semibold tracking-[0.25em] uppercase mb-3">Scanner options</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Standard, wide-bore, and open MRI
            </h2>
            <p className="text-[#666] leading-relaxed">
              The best scanner is the one that can produce the images your medical question requires while helping you complete the exam. Ask the ordering clinician and imaging center what is available and appropriate.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <figure className="bg-white border border-[#e5e5e0] overflow-hidden">
              <Image
                src="/images/resources/standard-mri-scanner.png"
                alt="Illustrative view of a standard cylindrical MRI scanner with a sliding table"
                width={1536}
                height={1024}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="w-full h-auto"
              />
              <figcaption className="p-6">
                <h3 className="text-xl font-bold text-[#0a0a0a] mb-2">Standard or wide-bore MRI</h3>
                <p className="text-[#666] text-sm leading-relaxed">
                  A standard MRI has a short cylindrical tunnel. Newer wide-bore scanners have a larger opening and may feel less confining while preserving the capabilities needed for many studies.
                </p>
              </figcaption>
            </figure>

            <figure className="bg-white border border-[#e5e5e0] overflow-hidden">
              <Image
                src="/images/resources/open-mri-scanner.png"
                alt="Illustrative view of an open MRI scanner with broad open sides around the table"
                width={1536}
                height={1024}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="w-full h-auto"
              />
              <figcaption className="p-6">
                <h3 className="text-xl font-bold text-[#0a0a0a] mb-2">Open MRI</h3>
                <p className="text-[#666] text-sm leading-relaxed">
                  Open MRI systems have more open space around the table and can help some people with severe claustrophobia. They are not available or suitable for every exam, and image quality or scan time may differ by machine and body part.
                </p>
              </figcaption>
            </figure>
          </div>
          <p className="text-[#888] text-xs mt-4">Original illustrative images created for patient education. Scanner designs and room layouts vary by facility.</p>
        </div>
      </section>

      <section id="comfort-plan" className="bg-white py-20 px-6 border-b border-[#e5e5e0] scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c8a020] text-xs font-semibold tracking-[0.25em] uppercase mb-3">Your comfort plan</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Six things to ask about before the appointment
          </h2>
          <p className="text-[#666] leading-relaxed max-w-3xl mb-10">
            Not every imaging center offers every option. Call ahead rather than waiting until you arrive.
          </p>
          <div className="grid md:grid-cols-2 gap-px bg-[#e5e5e0] border border-[#e5e5e0]">
            {comfortOptions.map((option, index) => (
              <div key={option.title} className="bg-white p-7">
                <p className="text-[#c8a020] text-xs font-bold tracking-widest mb-3">0{index + 1}</p>
                <h3 className="font-bold text-[#0a0a0a] mb-2">{option.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{option.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] text-white py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#c8a020] text-xs font-semibold tracking-[0.25em] uppercase mb-3">Medication</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            When comfort measures are not enough
          </h2>
          <div className="space-y-5 text-[#bbb] text-lg leading-relaxed">
            <p>
              In selected circumstances, a clinician may prescribe an oral anxiety medication or arrange sedation to help a patient complete an MRI. This is not necessary for most people and must be planned in advance.
            </p>
            <p>
              Contact the clinician who ordered the MRI and the imaging center before the appointment. Take medication only if it was prescribed for you and only as directed. Facility policies differ, and medication can interact with alcohol, opioids, sleep medicines, and other sedating drugs.
            </p>
            <p>
              If medication or sedation is used, you may need a responsible adult to drive you home and may be told not to drive, work, sign important documents, or make major decisions for a period of time. Follow the prescriber&apos;s and imaging center&apos;s exact instructions.
            </p>
          </div>
          <div className="mt-8 border border-[#333] p-6 text-sm text-[#999] leading-relaxed">
            This page does not prescribe medication and is not a substitute for individualized medical advice. Do not borrow another person&apos;s medication or take an unapproved medicine before an MRI.
          </div>
        </div>
      </section>

      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0a0a0a] mb-8" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            A simple script for calling the imaging center
          </h2>
          <blockquote className="bg-white border-l-4 border-[#c8a020] p-7 text-[#444] text-lg leading-relaxed">
            “I am concerned about anxiety or claustrophobia during my MRI. Which scanner will be used, how long will my exam take, and what comfort options do you offer? Is a wide-bore or open MRI appropriate for this study? If I may need medication, who should I contact and what transportation rules should I follow?”
          </blockquote>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-[#e5e5e0] p-7">
              <h3 className="font-bold text-[#0a0a0a] mb-3">Before you arrive</h3>
              <ul className="space-y-2 text-[#666] text-sm leading-relaxed list-disc pl-5">
                <li>Complete the facility&apos;s safety screening honestly.</li>
                <li>Ask how long your specific exam is expected to take.</li>
                <li>Confirm whether contrast is planned and whether special preparation is needed.</li>
                <li>Arrange transportation if your care team says medication or sedation will be used.</li>
              </ul>
            </div>
            <div className="bg-white border border-[#e5e5e0] p-7">
              <h3 className="font-bold text-[#0a0a0a] mb-3">When you check in</h3>
              <ul className="space-y-2 text-[#666] text-sm leading-relaxed list-disc pl-5">
                <li>Remind the technologist about your anxiety.</li>
                <li>Ask for properly fitted hearing protection.</li>
                <li>Confirm how you will communicate during the scan.</li>
                <li>Ask to review the plan before the table moves.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0a0a0a] mb-8" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Common questions
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-[#0a0a0a] mb-2">Does an MRI expose me to radiation?</h3>
              <p className="text-[#666] leading-relaxed">No. MRI does not use ionizing radiation. It uses a magnetic field and radio waves to create images.</p>
            </div>
            <div>
              <h3 className="font-bold text-[#0a0a0a] mb-2">Will my whole body be inside?</h3>
              <p className="text-[#666] leading-relaxed">That depends on the body part being imaged, the scanner, and positioning. Ask whether feet-first positioning is possible for your exam.</p>
            </div>
            <div>
              <h3 className="font-bold text-[#0a0a0a] mb-2">Can I stop if I panic?</h3>
              <p className="text-[#666] leading-relaxed">Tell the technologist immediately. You can communicate during the scan, and the table can be moved out. Stopping may mean images need to be repeated or the exam rescheduled, so discussing anxiety beforehand is helpful.</p>
            </div>
            <div>
              <h3 className="font-bold text-[#0a0a0a] mb-2">Is an open MRI always better?</h3>
              <p className="text-[#666] leading-relaxed">No. It may feel more comfortable, but it is not the best or available option for every body part or clinical question. A standard wide-bore scanner may be another useful option.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f9f7f4] py-16 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <p className="text-[#c8a020] text-xs font-semibold tracking-[0.25em] uppercase mb-3">About the author</p>
            <h2 className="text-2xl font-bold text-[#0a0a0a] mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Simon Dardashti, MD, MS
            </h2>
            <p className="text-[#666] leading-relaxed">
              Dr. Dardashti is board-certified in Pain Medicine and Anesthesiology. This guide is intended to help patients prepare for conversations with the clinician who ordered their MRI and the imaging center performing it.
            </p>
          </div>
          <Link href="/about" className="inline-flex justify-center border border-[#333] px-6 py-3 text-sm font-semibold text-[#222] hover:border-[#c8a020] hover:text-[#8f6d00] transition-colors">
            About Dr. Dardashti
          </Link>
        </div>
      </section>

      <section className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-bold text-[#0a0a0a] mb-4">Authoritative patient resources</h2>
          <ul className="space-y-2 text-sm">
            <li><a className="text-[#8f6d00] hover:underline" href="https://www.radiologyinfo.org/en/info/how-to-prepare-for-mri-exam" rel="noopener noreferrer">RadiologyInfo.org: How to Prepare for an MRI Exam</a></li>
            <li><a className="text-[#8f6d00] hover:underline" href="https://www.radiologyinfo.org/en/info/safety-mr" rel="noopener noreferrer">RadiologyInfo.org: MRI Safety</a></li>
            <li><a className="text-[#8f6d00] hover:underline" href="https://www.nhs.uk/tests-and-treatments/mri-scan/" rel="noopener noreferrer">NHS: MRI Scan</a></li>
            <li><a className="text-[#8f6d00] hover:underline" href="https://www.mayoclinic.org/tests-procedures/mri/about/pac-20384768" rel="noopener noreferrer">Mayo Clinic: MRI</a></li>
          </ul>
          <p className="text-[#999] text-xs leading-relaxed mt-6">
            Educational information only. Your ordering clinician and imaging center should provide instructions specific to your health, implanted devices, medications, and planned examination.
          </p>
        </div>
      </section>
    </>
  );
}
