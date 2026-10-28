import type { Metadata } from "next";
import Link from "next/link";
import MedicalReviewFooter from "@/components/MedicalReviewFooter";

const PAGE_URL = "https://www.drdardashti.com/es/procedimientos/bloqueos-de-rama-medial";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Bloqueos de Rama Medial y Bloqueos Facetarios | Simon Dardashti, MD" },
  description:
    "Información educativa en español sobre bloqueos de rama medial y bloqueos facetarios para la evaluación del dolor relacionado con las articulaciones facetarias.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Bloqueos de Rama Medial y Bloqueos Facetarios | Simon Dardashti, MD",
    description:
      "Información educativa en español sobre bloqueos de rama medial y bloqueos facetarios para la evaluación del dolor relacionado con las articulaciones facetarias.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bloqueos de Rama Medial y Bloqueos Facetarios | Simon Dardashti, MD",
    description:
      "Información educativa en español sobre bloqueos de rama medial y bloqueos facetarios para la evaluación del dolor relacionado con las articulaciones facetarias.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Bloqueos de Rama Medial y Bloqueos Facetarios | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Información educativa en español sobre bloqueos de rama medial y bloqueos facetarios para la evaluación del dolor relacionado con las articulaciones facetarias.",
  inLanguage: "es",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  about: {
    "@type": "MedicalProcedure",
    name: "Bloqueo de Rama Medial",
    procedureType: "https://schema.org/TherapeuticProcedure",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Español", item: `${SITE_URL}/es` },
      { "@type": "ListItem", position: 3, name: "Procedimientos", item: `${SITE_URL}/es/procedimientos` },
      { "@type": "ListItem", position: 4, name: "Bloqueos de Rama Medial", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "Procedimiento diagnóstico y terapéutico",
    body: "Los bloqueos de rama medial pueden servir tanto para identificar la fuente del dolor como para proporcionar alivio temporal.",
  },
  {
    heading: "Para dolor facetario",
    body: "Se pueden considerar cuando hay sospecha de que el dolor está relacionado con las articulaciones facetarias de la columna.",
  },
  {
    heading: "Guiado por imagen",
    body: "La guía de imagen ayuda a ubicar la aguja y evaluar el procedimiento, pero no garantiza la colocación ni elimina los riesgos.",
  },
];

export default function BloqueosRamaMedialPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      {/* SPANISH SECTION NAV */}
      <section className="bg-[#0a0a0a] py-4 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <span className="text-[10px] text-[#666] uppercase tracking-widest">Sección en español</span>
          <nav className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            <Link href="/es" className="text-xs font-medium tracking-widest uppercase text-[#888] hover:text-[#c8a020] transition-colors">Inicio</Link>
            <span className="w-px h-4 bg-[#333]" />
            <Link href="/es/condiciones" className="text-xs font-medium tracking-widest uppercase text-[#888] hover:text-[#c8a020] transition-colors">Condiciones</Link>
            <span className="w-px h-4 bg-[#333]" />
            <Link href="/es/procedimientos" className="text-xs font-medium tracking-widest uppercase text-[#888] hover:text-[#c8a020] transition-colors">Procedimientos</Link>
          </nav>
        </div>
      </section>

      {/* HERO */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-4">Procedimientos y Opciones de Tratamiento</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Bloqueos de Rama Medial
            <br />
            <em className="not-italic text-[#888]">y Bloqueos Facetarios.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Los bloqueos de rama medial y los bloqueos facetarios son procedimientos guiados por imagen que pueden considerarse cuando hay sospecha de que el dolor está relacionado con las articulaciones facetarias de la columna. Se requiere una evaluación clínica formal para determinar si estos procedimientos son apropiados.
          </p>
        </div>
      </section>

      {/* IN BRIEF */}
      <section className="bg-white py-16 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-[#999] uppercase tracking-widest mb-8">Resumen Rápido</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#e5e5e0]">
            {inBrief.map((item, i) => (
              <div key={item.heading} className={`p-6 ${i < inBrief.length - 1 ? "border-b md:border-b-0 md:border-r border-[#e5e5e0]" : ""}`}>
                <div className="w-5 h-px bg-[#c8a020] mb-4" />
                <h2 className="font-bold text-[#0a0a0a] text-sm mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>{item.heading}</h2>
                <p className="text-sm text-[#666] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 1 — QUÉ SON */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>01</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Descripción</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>¿Qué son los bloqueos de rama medial y los bloqueos facetarios?</h2>
            <p>
              Las articulaciones facetarias conectan las vértebras de la columna y están inervadas por nervios llamados ramas mediales. Cuando hay sospecha de que el dolor está relacionado con estas articulaciones, se pueden realizar bloqueos de rama medial inyectando anestésico alrededor de estos nervios para bloquear temporalmente las señales de dolor.
            </p>
            <p>
              Una inyección facetaria coloca medicamento en la articulación. Un bloqueo de rama medial coloca anestésico cerca de los nervios que llevan señales de esa articulación y se utiliza principalmente para evaluación diagnóstica o pronóstica. El alivio puede ser temporal; no debe presentarse como un tratamiento duradero rutinario. La respuesta se interpreta con la técnica, la actividad y otros hallazgos clínicos.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — CUÁNDO CONSIDERARSE */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>02</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Indicaciones</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>¿Cuándo pueden considerarse estos procedimientos?</h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              Los bloqueos de rama medial y los bloqueos facetarios pueden considerarse en pacientes con:
            </p>
            <ul className="space-y-3 max-w-2xl mb-6">
              {[
                "Dolor de cuello o espalda que puede estar relacionado con las articulaciones facetarias",
                "Dolor que no ha respondido adecuadamente al tratamiento conservador",
                "Sospecha clínica de dolor mediado por las facetas basada en el historial y el examen",
                "Hallazgos de imagen consistentes con cambios en las articulaciones facetarias",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm max-w-2xl">
              Una evaluación clínica cuidadosa ayuda a determinar si estos procedimientos pueden ser apropiados para un paciente específico.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — PROCEDIMIENTO */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>03</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Procedimiento</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Cómo se realiza el procedimiento</h2>
            <p>
              La posición, técnica y duración dependen de la región y los niveles tratados. El anestésico se coloca cerca del nervio o en la articulación según el procedimiento seleccionado. Siga las instrucciones específicas de preparación, observación y alta de su médico.
            </p>
            <p>
              Registre el grado y el momento del alivio, la actividad durante la evaluación y cualquier sedación o medicamento adicional según las instrucciones. El resultado puede apoyar la evaluación de dolor facetario, pero no confirma por sí solo el diagnóstico ni garantiza beneficio con la ablación por radiofrecuencia.
            </p>
          </div>
        </div>
      </section>

      {/* LIMITATIONS */}
      <section className="bg-[#0a0a0a] py-16 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#666] uppercase tracking-widest">Información Importante</p>
          </div>
          <div className="md:col-span-10 space-y-3 text-[#888] text-sm leading-relaxed">
            <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Limitaciones Importantes.</h2>
            <p>
              Los bloqueos de rama medial y los bloqueos facetarios proporcionan alivio temporal. La duración del alivio varía entre pacientes. La respuesta también varía, y no todos los pacientes con sospecha de dolor facetario responden a estos bloqueos.
            </p>
            <p>
              Como con cualquier procedimiento médico, estos bloqueos conllevan riesgos potenciales. Los riesgos y beneficios deben discutirse en detalle con el médico tratante antes de cualquier procedimiento. Esta página es solo para propósitos informativos generales y no constituye consejo médico ni crea una relación médico-paciente.
            </p>
            <p>
              El Dr. Dardashti ve pacientes en Mission Hills, California, sirviendo a pacientes de los valles de San Fernando y Santa Clarita y las comunidades circundantes del área de Los Ángeles.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-[#f9f7f4] py-14 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#999] uppercase tracking-widest">Relacionado</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-base font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Condiciones y Procedimientos Relacionados.</h2>
            <ul className="space-y-3 text-sm">
              <li><Link href="/es/condiciones" className="text-[#c8a020] hover:underline tracking-wide">Ver todas las condiciones evaluadas →</Link></li>
              <li><Link href="/es/procedimientos" className="text-[#c8a020] hover:underline tracking-wide">Ver todos los procedimientos →</Link></li>
              <li><Link href="/procedures/facet-joint-injections-medial-branch-blocks" className="text-[#c8a020] hover:underline tracking-wide">Página en inglés →</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* REVISIÓN MÉDICA */}
      <MedicalReviewFooter path="/es/procedimientos/bloqueos-de-rama-medial" locale="es" />
      <section className="max-w-5xl mx-auto px-6 py-12"><h2 className="text-2xl font-bold mb-4">Cómo se interpreta el resultado y qué preguntar</h2><p className="text-gray-700 mb-4">La selección para ablación por radiofrecuencia depende de la región de la columna, el diagnóstico, la técnica y la respuesta documentada a los bloqueos. Las guías clínicas y las políticas de cobertura pueden usar diferentes protocolos; no existe un número o porcentaje universal que deba aplicarse sin contexto. Un bloqueo positivo no garantiza éxito con la ablación.</p><p className="text-gray-700 mb-6">Pregunte sobre la evaluación, la necesidad de sedación, los riesgos de sangrado, infección o lesión nerviosa, y el plan si no mejora. La sedación no se usa de rutina para bloqueos diagnósticos porque puede afectar su interpretación. No cambie medicamentos por su cuenta; siga el plan individual indicado por su equipo.</p><h3 className="text-xl font-semibold mb-3">Fuentes y alcance</h3><ul className="list-disc pl-6 space-y-2"><li><a className="text-blue-600 underline" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7362874/">Consensus practice guidelines on interventions for lumbar facet joint pain from a multispecialty, international working group</a></li><li><a className="text-blue-600 underline" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8633772/">Consensus practice guidelines on interventions for cervical spine (facet) joint pain from a multispecialty international working group</a></li></ul><p className="text-gray-700 mt-4">Estas fuentes apoyan la educación general; no establecen su diagnóstico ni sustituyen una evaluación individual.</p></section>
    </>
  );
}
