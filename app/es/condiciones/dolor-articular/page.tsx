import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://www.drdardashti.com/es/condiciones/dolor-articular";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Evaluación de Dolor Articular | Simon Dardashti, MD" },
  description:
    "El Dr. Simon Dardashti evalúa el dolor articular de fuentes mecánicas, degenerativas e inflamatorias. Evaluación individualizada para identificar el generador de dolor probable. Mission Hills, CA.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Evaluación de Dolor Articular | Simon Dardashti, MD",
    description:
      "El Dr. Simon Dardashti evalúa el dolor articular de fuentes mecánicas, degenerativas e inflamatorias. Evaluación individualizada para identificar el generador de dolor probable. Mission Hills, CA.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evaluación de Dolor Articular | Simon Dardashti, MD",
    description:
      "El Dr. Simon Dardashti evalúa el dolor articular de fuentes mecánicas, degenerativas e inflamatorias. Evaluación individualizada para identificar el generador de dolor probable. Mission Hills, CA.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Evaluación de Dolor Articular | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "El Dr. Simon Dardashti evalúa el dolor articular de fuentes mecánicas, degenerativas e inflamatorias. Evaluación individualizada para identificar el generador de dolor probable. Mission Hills, CA.",
  inLanguage: "es-ES",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  about: { "@type": "MedicalCondition", name: "Dolor Articular" },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Condiciones y Servicios", item: `${SITE_URL}/es/servicios` },
      { "@type": "ListItem", position: 3, name: "Dolor Articular", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "Múltiples Mecanismos Contribuyentes",
    body: "El dolor articular puede surgir de desgaste mecánico, cambios degenerativos, procesos inflamatorios, lesión previa o dolor referido de estructuras adyacentes. Identificar el mecanismo probable guía la evaluación y tratamiento.",
  },
  {
    heading: "La Ubicación y Contexto Importan",
    body: "El carácter, ubicación, inicio y características asociadas del dolor articular — incluyendo su relación con la actividad, reposo y tratamientos previos — proporcionan información clínica importante.",
  },
  {
    heading: "Evaluación Individualizada",
    body: "Una evaluación clínica que incorpore historial, examen físico y hallazgos de imágenes relevantes es necesaria para determinar el enfoque de tratamiento más apropiado para cada paciente.",
  },
];

export default function DulorArticularPage() {
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
            Dolor Articular
            <br />
            <em className="not-italic text-[#888]">Evaluación.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            El dolor articular es una de las razones más comunes por las que los pacientes son
            remitidos para evaluación de medicina del dolor. Puede surgir de procesos mecánicos,
            degenerativos o inflamatorios e involucrar una o varias articulaciones. El Dr. Dardashti
            evalúa el dolor articular en el contexto de la imagen clínica completa del paciente —
            para identificar los factores contribuyentes más probables antes de planificar el tratamiento.
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
              ¿Qué es el Dolor Articular?
            </h2>
            <p>
              Una articulación es la interfaz entre dos o más huesos, soportada por cartílago,
              ligamentos y tejido blando circundante. El dolor puede surgir desde dentro de la
              articulación en sí — su cartílago, sinovio, cápsula o estructuras de soporte — así
              como de estructuras adyacentes como bolsas sinoviales, tendones o dolor referido
              de la columna u otras articulaciones.
            </p>
            <p>
              La enfermedad articular degenerativa, a veces llamada osteoartritis, es una de las
              fuentes más comunes de dolor articular e involucra el desgaste progresivo de las
              superficies de cartílago. Las condiciones inflamatorias — incluyendo artritis reumatoide
              y diagnósticos relacionados — también pueden producir dolor articular significativo y
              típicamente se manejan en coordinación con reumatología. El dolor articular posttraumático
              después de lesión, cirugía o estrés mecánico prolongado es otra presentación común.
            </p>
            <p>
              El dolor que parece originarse en una articulación a veces puede ser referido de una
              estructura cercana — por ejemplo, el dolor de cadera puede originarse de la articulación
              sacroiliaca o columna lumbar, y el dolor de rodilla puede tener un componente de la cadera
              o de tejido blando adyacente. Una evaluación precisa ayuda a distinguir la patología
              articular local de las fuentes referidas.
            </p>
          </div>
        </div>
      </section>

      {/* REASONS FOR EVALUATION */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>02</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Evaluación</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Razones Comunes para Evaluación.
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              Los pacientes son comúnmente remitidos o se presentan para evaluación debido a:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Dolor articular persistente que no ha respondido adecuadamente a medidas conservadoras",
                "Dolor articular que limita la función diaria, movilidad o calidad de vida",
                "Dolor desproporcionado a los hallazgos en imágenes o evaluaciones previas",
                "Dolor articular en el contexto de cambios degenerativos conocidos que no ha sido bien manejado",
                "Dolor referido a una articulación de otra fuente que no ha sido claramente identificada",
                "Procedimientos o cirugías articulares previas con dolor persistente o recurrente",
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

      {/* EVALUATION APPROACH */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>03</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Enfoque</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Cómo el Dr. Dardashti Evalúa el Dolor Articular.
            </h2>
            <p>
              La evaluación comienza con un historial exhaustivo — incluyendo la articulación o
              articulaciones afectadas, el inicio y carácter del dolor, factores agravantes y
              aliviantes, tratamientos previos y sus respuestas, e cualquier historial relevante
              de lesión, cirugía o enfermedad inflamatoria sistémica.
            </p>
            <p>
              El examen físico evalúa el rango de movimiento, hallazgos de palpación, sensibilidad
              de línea articular y signos de inflamación. También busca evidencia de dolor referido
              de estructuras adyacentes o la columna. Las imágenes — como rayos X o resonancia magnética —
              se revisan cuando están disponibles para ayudar a caracterizar el grado de afectación
              estructural, aunque los hallazgos de imagen se interpretan junto con la presentación
              clínica en lugar de aisladamente.
            </p>
            <p>
              Cuando se sospecha enfermedad articular inflamatoria, la coordinación con reumatología
              puede ser apropiada. La evaluación de medicina del dolor se enfoca en identificar
              generadores de dolor y desarrollar un plan de tratamiento para reducir el dolor
              y apoyar la función.
            </p>
          </div>
        </div>
      </section>

      {/* TREATMENT OPTIONS */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>04</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Tratamiento</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Opciones de Tratamiento que se Pueden Considerar.
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              El tratamiento se individualiza según la articulación específica, mecanismo sospechado,
              severidad de síntomas e historial de tratamientos previos. Las opciones que se pueden
              considerar incluyen:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Terapia física y modificación de actividad para reducir el estrés mecánico articular",
                "Manejo de medicamentos cuando es clínicamente apropiado",
                "Inyecciones articulares guiadas por imagen para pacientes seleccionados para reducir dolor y apoyar función",
                "Inyecciones de articulación sacroiliaca cuando la articulación sacroiliaca es un factor contribuyente principal",
                "Inyecciones articulares facetarias cuando se sospecha que las articulaciones facetarias espinales son la fuente",
                "Coordinación con ortopedia o reumatología cuando se indica por hallazgos clínicos",
                "Planificación del manejo del dolor multimodal cuando el dolor articular es parte de un cuadro de dolor crónico más amplio",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm mt-6 max-w-2xl">
              No todos los pacientes con dolor articular requieren una inyección. Las recomendaciones
              se basan en la presentación clínica individual del paciente, historial de tratamientos
              previos y objetivos funcionales.
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
              El dolor articular tiene muchas posibles causas y factores contribuyentes. Los hallazgos
              de imagen como cambios degenerativos no siempre se correlacionan directamente con el grado
              de dolor, y la respuesta al tratamiento varía entre pacientes.
            </p>
            <p>
              Se requiere una evaluación clínica formal para determinar un enfoque de tratamiento
              apropiado para cualquier paciente individual. Esta página es solo con propósitos informativos
              generales y no constituye consejo médico ni crea una relación médico-paciente.
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
              <li><Link href="/es/condiciones/dolor-articulacion-sacroiliaca" className="text-[#c8a020] hover:underline tracking-wide">Evaluación de Dolor Articular Sacroiliaca →</Link></li>
              <li><Link href="/es/condiciones/dolor-facetario" className="text-[#c8a020] hover:underline tracking-wide">Evaluación de Dolor Facetario →</Link></li>
              <li><Link href="/es/procedimientos/inyecciones-articulacion-sacroiliaca" className="text-[#c8a020] hover:underline tracking-wide">Inyecciones Articulación Sacroiliaca →</Link></li>
              <li><Link href="/es/procedimientos/inyecciones-articulos-facetarios" className="text-[#c8a020] hover:underline tracking-wide">Inyecciones Articular Facetaria y Bloqueos de Rama Medial →</Link></li>
              <li><Link href="/es/servicios" className="text-[#c8a020] hover:underline tracking-wide">Ver todas las Condiciones y Servicios →</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
