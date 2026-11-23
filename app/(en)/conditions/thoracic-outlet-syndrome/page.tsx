import type { Metadata } from "next";
import Link from "next/link";

const url = "https://www.drdardashti.com/conditions/thoracic-outlet-syndrome";
const title = "Thoracic Outlet Syndrome Evaluation | Simon Dardashti, MD";
const description =
  "Learn how nerve, vein, and artery forms of thoracic outlet syndrome differ, when arm symptoms need urgent care, and what evaluation and treatment may involve.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: url },
  openGraph: { type: "website", title, description, url },
  twitter: { card: "summary", title, description },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: title,
  description,
  url,
  inLanguage: "en-US",
  about: { "@type": "MedicalCondition", name: "Thoracic outlet syndrome" },
};

const types = [
  {
    name: "Neurogenic TOS",
    description:
      "Pressure on the brachial plexus, the network of nerves that serves the arm, may cause aching, tingling, numbness, fatigue, or weakness. Reaching overhead or using the arm for long periods can bring on symptoms.",
  },
  {
    name: "Venous TOS",
    description:
      "Pressure on the subclavian vein may restrict blood returning from the arm. The arm can become swollen, heavy, or bluish. A blood clot can cause symptoms to start suddenly.",
  },
  {
    name: "Arterial TOS",
    description:
      "Pressure on the subclavian artery may reduce blood flow to the arm or hand. The hand may feel cold, look pale, or hurt with use. A sudden change can indicate an emergency.",
  },
];

const questions = [
  {
    question: "Can a cervical rib cause symptoms?",
    answer:
      "An extra rib near the base of the neck can contribute to compression. A clinician compares the finding with your symptoms and examination before deciding whether it matters.",
  },
  {
    question: "Can one test confirm neurogenic TOS?",
    answer:
      "The diagnosis depends on the pattern of symptoms, an examination, and evaluation for other causes. Imaging and nerve tests can help answer specific questions. Reproducing symptoms with one arm position cannot establish the diagnosis on its own.",
  },
  {
    question: "Will I need surgery?",
    answer:
      "Many people with suspected neurogenic TOS start with physical therapy tailored to their symptoms. Significant weakness or muscle loss can warrant earlier specialist evaluation. Vein and artery problems need a different evaluation and may need prompt treatment.",
  },
];

export default function ThoracicOutletSyndromePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="border-b border-[#1a1a1a] bg-[#0a0a0a] px-6 py-16 text-white md:py-24">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl font-bold leading-tight md:text-6xl" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Thoracic Outlet Syndrome
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#d1d1cd]">
            Thoracic outlet syndrome (TOS) occurs when a nerve or blood vessel is compressed as it
            travels from the base of the neck into the arm. The structure involved determines which
            symptoms to look for and how quickly they need attention.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-12 px-6 py-12 md:py-16">
        <section aria-labelledby="urgent-signs" className="border-l-4 border-[#806207] bg-[#f9f7f4] p-5 sm:p-6">
          <h2 id="urgent-signs" className="text-xl font-bold">When to seek urgent care</h2>
          <p className="mt-3 leading-relaxed text-[#333]">
            Sudden swelling, pain, or bluish discoloration in one arm needs urgent same-day assessment
            for a possible clot, especially when these symptoms occur together. A suddenly cold or pale
            hand with severe pain, numbness, or weakness needs emergency care right away. Call 911 for
            sudden shortness of breath or severe chest pain.
          </p>
        </section>

        <section aria-labelledby="types">
          <h2 id="types" className="text-2xl font-bold">The three types of TOS</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {types.map(({ name, description }) => (
              <div key={name} className="border border-[#e5e5e0] p-5">
                <h3 className="font-bold">{name}</h3>
                <p className="mt-3 leading-relaxed text-[#555]">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="evaluation" className="max-w-3xl">
          <h2 id="evaluation" className="text-2xl font-bold">How clinicians evaluate it</h2>
          <p className="mt-4 leading-relaxed text-[#555]">
            Tell your clinician when symptoms started, which arm positions bring them on, and whether
            you notice swelling, color changes, or weakness. The exam may include arm strength and
            sensation, circulation, and movements of the neck and shoulder. A pinched nerve at the
            neck, a nerve problem at the elbow or wrist, or a shoulder condition can produce similar symptoms.
          </p>
          <p className="mt-4 leading-relaxed text-[#555]">
            An X-ray may show an extra rib. Ultrasound can help check blood flow or look for a clot
            when a vascular cause is suspected. MRI, other imaging, or electrical nerve tests may
            be helpful depending on what the clinician is trying to distinguish.
          </p>
        </section>

        <section aria-labelledby="treatment" className="max-w-3xl">
          <h2 id="treatment" className="text-2xl font-bold">Treatment depends on the type</h2>
          <p className="mt-4 leading-relaxed text-[#555]">
            For neurogenic TOS, treatment often starts with physical therapy and adapting activities that
            trigger symptoms. Marked weakness, loss of muscle bulk, or persistent symptoms may warrant
            specialist assessment for other options, including surgery in selected cases.
          </p>
          <p className="mt-4 leading-relaxed text-[#555]">
            Suspected venous or arterial TOS needs vascular assessment. A clot, damaged artery, or
            reduced blood flow may require time-sensitive care. The vascular team determines which
            treatments are appropriate based on the cause and urgency.
          </p>
        </section>

        <section aria-labelledby="questions" className="max-w-3xl">
          <h2 id="questions" className="text-2xl font-bold">Common questions</h2>
          <div className="mt-4 divide-y divide-[#e5e5e0] border-y border-[#e5e5e0]">
            {questions.map(({ question, answer }) => (
              <details key={question} className="py-4">
                <summary className="cursor-pointer font-semibold">{question}</summary>
                <p className="mt-3 leading-relaxed text-[#555]">{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section aria-labelledby="sources">
          <h2 id="sources" className="text-xl font-bold">Sources and further reading</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[#664d06]">
            <li><a className="underline underline-offset-4" href="https://vascular.org/pmg/vascular-conditions/thoracic-outlet-syndrome">Society for Vascular Surgery · Thoracic Outlet Syndrome</a></li>
            <li><a className="underline underline-offset-4" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11357692/">INTOS Workgroup · Consensus Recommendations for Neurogenic TOS (2024)</a></li>
          </ul>
          <p className="mt-6 leading-relaxed text-[#555]">
            Related topics include{" "}
            <Link className="text-[#664d06] underline underline-offset-4" href="/conditions/cervical-radiculopathy">cervical radiculopathy</Link>
            {" "}and{" "}
            <Link className="text-[#664d06] underline underline-offset-4" href="/conditions/peripheral-nerve-pain">peripheral nerve pain</Link>.
          </p>
        </section>
      </div>
    </>
  );
}
