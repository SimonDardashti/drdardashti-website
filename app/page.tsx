import type { Metadata } from "next";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";

const PAGE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: "Simon Dardashti, MD | Interventional Pain Medicine Physician",
  description:
    "Dr. Simon Dardashti is a board-certified interventional pain medicine physician and anesthesiologist evaluating spine pain, nerve pain, joint pain, and complex pain conditions in Mission Hills, California.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Simon Dardashti, MD | Interventional Pain Medicine Physician",
    description:
      "Dr. Simon Dardashti is a board-certified interventional pain medicine physician and anesthesiologist evaluating spine pain, nerve pain, joint pain, and complex pain conditions in Mission Hills, California.",
    images: [
      {
        url: "/headshot.webp",
        width: 1200,
        height: 630,
        alt: "Simon Dardashti, MD, board-certified pain medicine physician and anesthesiologist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Simon Dardashti, MD | Interventional Pain Medicine Physician",
    description:
      "Dr. Simon Dardashti is a board-certified interventional pain medicine physician and anesthesiologist evaluating spine pain, nerve pain, joint pain, and complex pain conditions in Mission Hills, California.",
    images: ["/headshot.webp"],
  },
};

const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Simon Dardashti, MD | Interventional Pain Medicine Physician",
  url: PAGE_URL,
  description:
    "Dr. Simon Dardashti is a board-certified interventional pain medicine physician and anesthesiologist evaluating spine pain, nerve pain, joint pain, and complex pain conditions in Mission Hills, California.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: PAGE_URL },
};

const stats = [
  { value: "2×", label: "Board Certified" },
  { value: "Pain Medicine & Anesthesiology", label: "Board Certified" },
  { value: "UCLA", label: "Fellowship Trained" },
];

const conditionHighlights = [
  {
    title: "Spine Pain",
    items: ["Neck pain", "Low back pain", "Spine-related pain", "Facet-mediated pain", "Sacroiliac joint pain"],
  },
  {
    title: "Nerve & Radicular Pain",
    items: ["Sciatica", "Cervical radiculopathy", "Lumbar radiculopathy", "Neuropathic pain", "Peripheral nerve pain", "Post-laminectomy syndrome"],
  },
  {
    title: "Joint & Musculoskeletal Pain",
    items: ["Joint pain", "Bursa-related pain", "Myofascial pain", "Occipital neuralgia", "Persistent pain after injury or surgery"],
  },
  {
    title: "Complex Pain Conditions",
    items: ["Complex regional pain syndrome evaluation", "Chronic pain syndrome evaluation", "Complex pain conditions"],
  },
];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }} />
      {/* HERO */}
      <section className="bg-[#0a0a0a] text-white md:min-h-[90vh] flex flex-col justify-center px-6 py-14 md:py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto w-full relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Text */}
          <div>
            <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-6">
              Pain Medicine Physician · <span className="whitespace-nowrap">Mission Hills, CA</span>
            </p>
            <h1
              className="text-2xl md:text-3xl font-bold leading-[1.2] mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Simon Dardashti, <em className="not-italic text-[#c8a020]">MD</em>
            </h1>
            <p className="text-[#888] text-xl md:text-2xl leading-relaxed mb-4">
              Board-Certified Interventional Pain Medicine &amp; Anesthesiology
            </p>
            <p className="text-[#666] text-base leading-relaxed mb-10">
              Dr. Simon Dardashti evaluates and treats patients with spine, nerve, and joint
              pain using a careful, evidence-informed approach focused on diagnosis, function,
              and practical treatment options.
            </p>
            <Link
              href="/conditions"
              className="inline-block border border-[#333] hover:border-[#c8a020] text-[#888] hover:text-[#c8a020] font-semibold px-8 py-4 text-xs tracking-widest uppercase transition-colors duration-200"
            >
              Explore Conditions &amp; Procedures
            </Link>

            <div className="mt-16 pt-10 border-t border-[#1a1a1a] grid grid-cols-3 gap-6 items-end">
              <div>
                <p className="text-xs font-semibold text-white mb-1 leading-snug" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Dual Board-Certified</p>
                <p className="text-xs text-[#555] uppercase tracking-widest">Pain Medicine &amp; Anesthesiology</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>10+</p>
                <p className="text-xs text-[#555] uppercase tracking-widest">Years Active Clinical Practice</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#8BB8E8] mb-1" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>UCLA</p>
                <p className="text-xs text-[#555] uppercase tracking-widest">Pain Medicine Fellowship</p>
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center md:block mt-4 md:mt-0">
            <img
              src="/headshot.webp"
              alt="Simon Dardashti, MD, board-certified pain medicine physician and anesthesiologist"
              className="w-[85%] md:w-full object-cover rounded-md md:rounded-none"
              style={{ filter: "grayscale(20%)" }}
            />
          </div>
        </div>
      </section>

      {/* SECTION 01 — ABOUT */}
      <FadeUp>
      <section className="bg-white py-24 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-2">
            <p className="text-xs text-[#999] uppercase tracking-widest">About</p>
          </div>
          <div className="md:col-span-10">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              About Dr. Dardashti.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#555] text-base leading-relaxed">
              <p>
                Dr. Simon Dardashti is a board-certified pain medicine physician and
                anesthesiologist who evaluates and treats patients with acute and chronic
                pain conditions. His clinical work focuses on careful diagnostic evaluation,
                identification of likely pain generators, review of relevant imaging and
                treatment history, and development of individualized treatment plans.
              </p>
              <p>
                His clinical focus includes spine-related pain, neck pain, low back pain,
                radicular pain, neuropathic pain, joint pain, sacroiliac joint pain,
                persistent pain after injury or surgery, and complex chronic pain conditions.
                He also evaluates selected patients for advanced pain management options,
                including spinal cord stimulation when clinically appropriate.
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/about"
                className="text-[#c8a020] text-sm font-semibold uppercase tracking-widest hover:underline"
              >
                Read full bio →
              </Link>
            </div>
          </div>
        </div>
      </section>
      </FadeUp>

      {/* CLINICAL FOCUS */}
      <FadeUp>
      <section className="bg-white py-16 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-2">
            <p className="text-xs text-[#999] uppercase tracking-widest">Clinical Focus</p>
          </div>
          <div className="md:col-span-10">
            <h2
              className="text-xl md:text-2xl font-bold text-[#0a0a0a] mb-4 leading-snug"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Clinical Focus.
            </h2>
            <p className="text-[#555] text-base leading-relaxed max-w-2xl">
              Dr. Dardashti's clinical focus includes evaluation and treatment of spine-related
              pain, nerve pain, joint and musculoskeletal pain, radicular pain, sacroiliac joint
              pain, neuropathic pain, and selected complex pain conditions.
            </p>
          </div>
        </div>
      </section>
      </FadeUp>

      {/* BANNER — SERVICE AREA */}
      <section className="bg-[#0a0a0a] py-5 px-6 border-y border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto flex items-center justify-center text-center">
          <span className="text-[#888] text-xs tracking-[0.2em] uppercase">
            Serving Mission Hills, the San Fernando Valley, and surrounding Los Angeles communities.
          </span>
        </div>
      </section>

      {/* SECTION 02 — CONDITIONS */}
      <FadeUp>
      <section className="bg-[#f9f7f4] py-24 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#0a0a0a] leading-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Conditions Evaluated.
            </h2>
            <p className="text-[#777] mt-3 text-base max-w-xl">
              Dr. Dardashti evaluates a range of pain conditions affecting the spine,
              nervous system, and musculoskeletal system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-[#e0e0d8]">
            {conditionHighlights.map((group, i) => (
              <div
                key={group.title}
                className={`bg-white p-7 ${i < conditionHighlights.length - 1 ? "border-b md:border-b-0 md:border-r border-[#e0e0d8]" : ""}`}
              >
                <div className="w-5 h-px bg-[#c8a020] mb-4" />
                <h3
                  className="font-bold text-[#0a0a0a] text-sm mb-4"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {group.title}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-xs text-[#666] leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/conditions"
              className="text-[#c8a020] text-sm font-semibold uppercase tracking-widest hover:underline"
            >
              View Conditions Evaluated →
            </Link>
          </div>
        </div>
      </section>
      </FadeUp>

      {/* COMMON CONDITIONS & PROCEDURES */}
      <FadeUp>
      <section className="bg-white py-16 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-2">
            <p className="text-xs text-[#999] uppercase tracking-widest">Explore</p>
          </div>
          <div className="md:col-span-10">
            <h2
              className="text-xl md:text-2xl font-bold text-[#0a0a0a] mb-3 leading-snug"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Featured Clinical Topics.
            </h2>
            <p className="text-[#777] text-sm mb-8 max-w-xl">
              Explore selected conditions and treatment options commonly evaluated in
              interventional pain medicine.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-[#e5e5e0] max-w-2xl">
              {[
                { label: "Low Back Pain", href: "/conditions/low-back-pain", sub: "Condition" },
                { label: "Sciatica & Radicular Pain", href: "/conditions/sciatica-radicular-pain", sub: "Condition" },
                { label: "Epidural Steroid Injections", href: "/procedures/epidural-steroid-injections", sub: "Procedure" },
                { label: "Radiofrequency Ablation", href: "/procedures/radiofrequency-ablation", sub: "Procedure" },
              ].map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group flex items-center justify-between p-5 hover:bg-[#fafaf8] transition-colors ${
                    i % 2 === 0 ? "border-r border-[#e5e5e0]" : ""
                  } ${i < 2 ? "border-b border-[#e5e5e0]" : ""}`}
                >
                  <div>
                    <p className="text-[10px] text-[#c8a020] uppercase tracking-widest mb-1">{item.sub}</p>
                    <p className="text-sm font-semibold text-[#0a0a0a] group-hover:text-[#c8a020] transition-colors" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                      {item.label}
                    </p>
                  </div>
                  <span className="text-[#ccc] group-hover:text-[#c8a020] transition-colors text-sm">→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      </FadeUp>

      {/* INTERVENTIONAL PAIN MANAGEMENT */}
      <FadeUp>
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-2">
            <p className="text-xs text-[#999] uppercase tracking-widest">Procedures</p>
          </div>
          <div className="md:col-span-10">
            <h2
              className="text-xl md:text-2xl font-bold text-[#0a0a0a] mb-4 leading-snug"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Interventional Pain Management.
            </h2>
            <p className="text-[#555] text-base leading-relaxed max-w-2xl mb-6">
              When clinically appropriate, treatment may include image-guided procedures such as
              epidural steroid injections, selective nerve root blocks, medial branch blocks,
              radiofrequency ablation, sacroiliac joint injections, peripheral nerve blocks,
              trigger point injections, joint injections, and spinal cord stimulation evaluation.
            </p>
            <Link
              href="/procedures"
              className="text-[#c8a020] text-sm font-semibold uppercase tracking-widest hover:underline"
            >
              View Procedures &amp; Treatment Options →
            </Link>
          </div>
        </div>
      </section>
      </FadeUp>

      {/* SECTION 03 — APPROACH */}
      <FadeUp>
      <section className="bg-[#0a0a0a] py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
              Treatment Approach
            </p>
            <h2
              className="text-4xl md:text-6xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Individualized
              <br />
              <em className="not-italic text-[#c8a020]">Treatment Planning.</em>
            </h2>
          </div>
          <div className="space-y-4 text-[#888] text-sm leading-relaxed">
            <p>
              Treatment recommendations are based on the patient's history, physical examination,
              imaging when available, prior treatment response, medical history, and overall
              clinical context.
            </p>
            <p>
              Dr. Dardashti's approach emphasizes careful diagnostic evaluation, clear
              communication, evidence-informed decision-making, and treatment options tailored
              to the patient's clinical presentation and functional goals.
            </p>
          </div>
        </div>
      </section>
      </FadeUp>

      {/* CLINICAL REPUTATION */}
      <FadeUp>
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
            <div className="md:col-span-2">
              <p className="text-xs text-[#999] uppercase tracking-widest">Reputation</p>
            </div>
            <div className="md:col-span-10">
              <h2
                className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Clinical Reputation.
              </h2>
              <p className="text-[#666] text-base leading-relaxed max-w-2xl">
                Dr. Dardashti maintains an active clinical pain management practice with
                consistently strong patient feedback across major physician and healthcare
                review platforms, including a 4.9/5 rating on Healthgrades and a 5/5 rating
                on WebMD Care. Public profiles commonly reflect patient comments regarding
                communication, professionalism, compassion, and clear explanation of treatment
                options.
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#e5e5e0] mb-10">

            {/* Healthgrades */}
            <div className="bg-white p-7 border-b md:border-b-0 md:border-r border-[#e5e5e0]">
              <div className="w-5 h-px bg-[#c8a020] mb-4" />
              <p className="text-[10px] font-semibold text-[#999] uppercase tracking-widest mb-4">
                Healthgrades
              </p>
              <p className="leading-none mb-1" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                <span className="text-5xl font-bold text-[#0a0a0a]">4.9</span>
                <span className="text-xl font-bold text-[#999]">/5</span>
              </p>
              <p className="text-[10px] text-[#999] uppercase tracking-widest mb-3">Patient rating</p>
              <div className="flex gap-0.5 mb-4" aria-hidden="true">
                {[0,1,2,3,4].map((i) => <span key={i} className="text-[#c8a020]">★</span>)}
              </div>
              <p className="text-sm text-[#666] leading-relaxed">
                Based on approximately 579 public reviews.
              </p>
            </div>

            {/* WebMD Care */}
            <div className="bg-white p-7 border-b md:border-b-0 md:border-r border-[#e5e5e0]">
              <div className="w-5 h-px bg-[#c8a020] mb-4" />
              <p className="text-[10px] font-semibold text-[#999] uppercase tracking-widest mb-4">
                WebMD Care
              </p>
              <p className="leading-none mb-1" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                <span className="text-5xl font-bold text-[#0a0a0a]">5</span>
                <span className="text-xl font-bold text-[#999]">/5</span>
              </p>
              <p className="text-[10px] text-[#999] uppercase tracking-widest mb-3">Patient rating</p>
              <div className="flex gap-0.5 mb-4" aria-hidden="true">
                {[0,1,2,3,4].map((i) => <span key={i} className="text-[#c8a020]">★</span>)}
              </div>
              <p className="text-sm text-[#666] leading-relaxed">
                Based on approximately 504 public ratings.
              </p>
            </div>

            {/* Patient Communication */}
            <div className="bg-white p-7">
              <div className="w-5 h-px bg-[#c8a020] mb-4" />
              <p className="text-[10px] font-semibold text-[#999] uppercase tracking-widest mb-4">
                Patient Communication
              </p>
              <p
                className="text-5xl font-bold text-[#e8e3d8] leading-none mb-4 select-none"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                aria-hidden="true"
              >
                &ldquo;
              </p>
              <p className="text-[10px] text-[#999] uppercase tracking-widest mb-2">Common patient themes</p>
              <p className="text-sm text-[#555] leading-relaxed">
                Public reviews commonly describe Dr. Dardashti as respectful, attentive,
                patient, and clear in explaining medical issues.
              </p>
            </div>

          </div>

          {/* External links */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-2">
              <p className="text-[10px] text-[#999] uppercase tracking-widest leading-relaxed">
                View public<br className="hidden md:block" /> profiles
              </p>
            </div>
            <div className="md:col-span-10 flex flex-wrap gap-2">
              {[
                { label: "Providence", href: "https://www.providence.org/doctors/pain-medicine/ca/mission-hills/simon-dardashti-1023335957" },
                { label: "Healthgrades", href: "https://www.healthgrades.com/physician/dr-simon-dardashti-gfjqs" },
                { label: "WebMD", href: "https://doctor.webmd.com/doctor/simon-dardashti-af601989-d7f1-407a-b022-41572a80c061-overview" },
                { label: "Vitals", href: "https://www.vitals.com/doctors/Dr_Simon_Dardashti.html" },
                { label: "Yelp", href: "https://www.yelp.com/biz/simon-dardashti-md-mission-hills" },
                { label: "Doximity", href: "https://www.doximity.com/pub/simon-dardashti-md" },
                { label: "Henry Mayo", href: "https://www.henrymayo.com/doctors/profile/simon-dardashti/" },
                { label: "SEAK", href: "https://www.seakexperts.com/members/18571-simon-dardashti" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#c8a020]/40 text-[#c8a020] text-[10px] font-semibold uppercase tracking-widest px-3 py-1.5 hover:border-[#c8a020] hover:bg-[#c8a020]/5 transition-colors duration-150"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>
      </FadeUp>

      {/* SECTION 04 — LOCATION */}
      <FadeUp>
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#999] uppercase tracking-widest">Location</p>
          </div>
          <div className="md:col-span-10">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Clinical Location.
            </h2>
            <p className="text-[#555] text-base leading-relaxed mb-6 max-w-xl">
              Dr. Dardashti sees patients in Mission Hills, California, serving patients from
              the San Fernando Valley, Santa Clarita Valley, and surrounding Los Angeles
              communities.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="border border-[#e0e0e0] text-[#555] text-xs px-3 py-1.5 tracking-wide">Mission Hills, CA</span>
              <span className="border border-[#e0e0e0] text-[#555] text-xs px-3 py-1.5 tracking-wide">San Fernando Valley</span>
              <span className="border border-[#e0e0e0] text-[#555] text-xs px-3 py-1.5 tracking-wide">Santa Clarita Valley</span>
              <span className="border border-[#e0e0e0] text-[#555] text-xs px-3 py-1.5 tracking-wide">Los Angeles, CA</span>
            </div>
          </div>
        </div>
      </section>
      </FadeUp>
    </>
  );
}
