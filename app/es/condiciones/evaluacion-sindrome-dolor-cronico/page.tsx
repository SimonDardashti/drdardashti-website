import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://www.drdardashti.com/es/condiciones/evaluacion-sindrome-dolor-cronico";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Evaluación de Síndrome de Dolor Crónico | Simon Dardashti, MD" },
  description:
    "El Dr. Simon Dardashti evalúa el síndrome de dolor crónico — evaluando duración, distribución, función, tratamientos previos y factores contribuyentes para identificar generadores de dolor tratables. Mission Hills, CA.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Evaluación de Síndrome de Dolor Crónico | Simon Dardashti, MD",
    description:
      "El Dr. Simon Dardashti evalúa el síndrome de dolor crónico — evaluando duración, distribución, función, tratamientos previos y factores contribuyentes para identificar generadores de dolor tratables. Mission Hills, CA.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evaluación de Síndrome de Dolor Crónico | Simon Dardashti, MD",
    description:
      "El Dr. Simon Dardashti evalúa el síndrome de dolor crónico — evaluando duración, distribución, función, tratamientos previos y factores contribuyentes para identificar generadores de dolor tratables. Mission Hills, CA.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Evaluación de Síndrome de Dolor Crónico | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "El Dr. Simon Dardashti evalúa el síndrome de dolor crónico — evaluando duración, distribución, función, tratamientos previos y factores contribuyentes para identificar generadores de dolor tratables. Mission Hills, CA.",
  inLanguage: "es-ES",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  about: { "@type": "MedicalCondition", name: "Síndrome de Dolor Crónico" },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Condiciones y Servicios", item: `${SITE_URL}/es/servicios` },
      { "@type": "ListItem", position: 3, name: "Evaluación de Síndrome de Dolor Crónico", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "Dolor que Persiste en el Tiempo",
    body: "El dolor crónico generalmente se define como dolor que persiste más allá de tres a seis meses, más allá del período de curación esperado, o en asociación con una condición que es continua. Es un problema clínico significativo que afecta la función y calidad de vida.",
  },
  {
    heading: "La Evaluación Examina el Cuadro Completo",
    body: "Una evaluación de dolor crónico evalúa duración, distribución, carácter, impacto funcional, tratamientos previos y sus respuestas, medicamentos actuales, hallazgos de imagen y diagnósticos, y el contexto clínico general.",
  },
  {
    heading: "El Objetivo es Identificación de Factores Tratables",
    body: "No todo el dolor crónico tiene una fuente estructural completamente identificable, pero muchos pacientes tienen factores contribuyentes tratables que no han sido adecuadamente abordados. La evaluación tiene como objetivo identificar esos factores y desarrollar un siguiente paso racional.",
  },
];

export default function EvaluacionSindromeDulorCronicoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      {/* HERO */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Condiciones Evaluadas
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Síndrome de Dolor Crónico
            <br />
            <em className="not-italic text-[#888]">Evaluación.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            El dolor crónico es dolor que persiste durante un período extendido y puede involucrar
            múltiples factores contribuyentes. Una evaluación para síndrome de dolor crónico examina
            sistemáticamente el historial de dolor del paciente, estado funcional, tratamientos previos
            e imagen clínica actual — con el objetivo de identificar lo que sigue siendo tratable
            y qué próximos pasos realistas se ven como.
          </p>
        </div>
      </section>

      {/* IN BRIEF */}
      <section className="bg-white py-16 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-[#999] uppercase tracking-widest mb-8">En Breve</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#e5e5e0]">
            {inBrief.map((item, i) => (
              <div
                key={item.heading}
                className={`p-6 ${i < inBrief.length - 1 ? "border-b md:border-b-0 md:border-r border-[#e5e5e0]" : ""}`}
              >
                <div className="w-5 h-px bg-[#c8a020] mb-4" />
                <h2
                  className="font-bold text-[#0a0a0a] text-sm mb-3"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {item.heading}
                </h2>
                <p className="text-sm text-[#666] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>01</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Descripción</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Comprendiendo el Síndrome de Dolor Crónico.
            </h2>
            <p>
              El síndrome de dolor crónico se refiere a un patrón de dolor persistente que ha estado
              presente lo suficiente como para afectar la función, actividad diaria, sueño o bienestar
              general. A diferencia del dolor agudo — que típicamente se resuelve cuando la lesión
              subyacente cura — el dolor crónico puede continuar o evolucionar durante meses y años,
              con contribuciones de factores tanto estructurales como neurobiológicos.
            </p>
            <p>
              Es importante reconocer que el dolor crónico es una condición médica real y legítima.
              Los pacientes con dolor crónico no están exagerando su experiencia. Los mecanismos
              subyacentes del dolor crónico están bien estudiados e incluyen factores estructurales
              continuos, sensibilización de nervios periféricos y cambios en cómo el sistema nervioso
              central modula y amplifica las señales de dolor con el tiempo.
            </p>
            <p>
              Muchos pacientes con dolor de larga data no han tenido una evaluación integral que
              aborde todos los factores relevantes. Algunos han visto múltiples proveedores sin un
              enfoque sistemático para identificar lo que sigue siendo abordable. El propósito de
              una evaluación de síndrome de dolor crónico es tomar en consideración la imagen clínica
              completa y determinar qué se puede mejorar realistamente.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT THE EVALUATION INCLUDES */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>02</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Evaluación</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Qué Examina la Evaluación.
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              Una evaluación de síndrome de dolor crónico es integral. Típicamente cubre:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Duración e inicio del dolor — cuándo comenzó, cómo ha cambiado con el tiempo, y si es continuo o episódico",
                "Distribución y carácter del dolor — ubicación, patrón de radiación, calidad e intensidad",
                "Impacto funcional — cómo el dolor afecta la actividad, movilidad, sueño, trabajo y vida diaria",
                "Tratamientos previos y sus respuestas — qué se ha intentado, durante cuánto tiempo y si ayudó",
                "Medicamentos actuales y sus efectos en el dolor",
                "Estudios de imagen y diagnósticos previos — revisados en el contexto de la presentación clínica",
                "Examen físico y neurológico para identificar hallazgos clínicos actuales",
                "Identificación de generadores de dolor estructural que pueden haber sido perdidos o que pueden haber cambiado con el tiempo",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TREATMENT OPTIONS */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>03</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Tratamiento</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Direcciones de Tratamiento que se Pueden Considerar.
            </h2>
            <p>
              Después de la evaluación, la planificación del tratamiento se individualiza e se basa
              en evidencia. Donde se identifican factores contribuyentes estructurales — como dolor
              mediado por facetas, afectación de articulación sacroiliaca, síntomas radiculares o
              componentes neuropáticos — opciones de intervención dirigidas pueden ser apropiadas
              para pacientes seleccionados.
            </p>
            <p>
              Para pacientes donde la sensibilización o factores funcionales son prominentes, la
              planificación del tratamiento se extiende más allá de los procedimientos e puede incluir
              optimización de medicamentos, rehabilitación física y coordinación con especialistas
              apropiados. La intención es identificar lo que es abordable y crear un plan estructurado
              — no perseguir cada posible intervención indiscriminadamente.
            </p>
            <p>
              La neuromodulación — como la estimulación de la médula espinal — puede considerarse
              para pacientes seleccionados con dolor crónico neuropático o mixto refractario cuando
              los enfoques más conservadores han sido insuficientes.
            </p>
          </div>
        </div>
      </section>

      {/* LIMITATIONS */}
      <section className="bg-[#0a0a0a] py-16 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#666] uppercase tracking-widest">Limitaciones</p>
          </div>
          <div className="md:col-span-10 space-y-3 text-[#888] text-sm leading-relaxed">
            <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Limitaciones Importantes.
            </h2>
            <p>
              El dolor crónico a menudo es difícil de resolver completamente. El objetivo de la
              evaluación y tratamiento es reducir el dolor de manera significativa, mejorar la función
              e identificar lo que es realísticamente lograble — no eliminar todo el dolor en cada
              paciente. Algunos pacientes tienen condiciones donde la resolución completa del dolor
              es improbable, y la discusión honesta sobre expectativas realistas es parte del proceso
              clínico.
            </p>
            <p>
              Se requiere una evaluación clínica formal para determinar el enfoque apropiado para
              cualquier paciente individual. Esta página es solo con propósitos informativos generales
              y no constituye consejo médico ni crea una relación médico-paciente.
            </p>
            <p>
              El Dr. Dardashti ve pacientes en Mission Hills, California, sirviendo a pacientes del Valle
              de San Fernando, Valle de Santa Clarita y comunidades circundantes de Los Ángeles.
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
            <h2 className="text-base font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Condiciones y Procedimientos Relacionados.
            </h2>
            <ul className="space-y-3 text-sm">
              <li><Link href="/es/condiciones/condiciones-dolor-complejas" className="text-[#c8a020] hover:underline tracking-wide">Condiciones de Dolor Complejas →</Link></li>
              <li><Link href="/es/condiciones/dolor-neuropatico" className="text-[#c8a020] hover:underline tracking-wide">Evaluación de Dolor Neuropático →</Link></li>
              <li><Link href="/es/condiciones/dolor-columna" className="text-[#c8a020] hover:underline tracking-wide">Evaluación de Dolor de Columna →</Link></li>
              <li><Link href="/es/condiciones/dolor-miofascial" className="text-[#c8a020] hover:underline tracking-wide">Evaluación de Dolor Miofascial →</Link></li>
              <li><Link href="/es/procedimientos/estimulacion-medula-espinal" className="text-[#c8a020] hover:underline tracking-wide">Evaluación de Estimulación de la Médula Espinal →</Link></li>
              <li><Link href="/es/procedimientos/ablacion-radiofrecuencia" className="text-[#c8a020] hover:underline tracking-wide">Ablación por Radiofrecuencia →</Link></li>
              <li><Link href="/es/servicios" className="text-[#c8a020] hover:underline tracking-wide">Ver todas las Condiciones y Servicios →</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
