import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://www.drdardashti.com/es/condiciones/dolor-nervio-periferico";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Evaluación de Dolor de Nervio Periférico | Simon Dardashti, MD" },
  description:
    "El Dr. Simon Dardashti evalúa el dolor de nervio periférico — irritación nerviosa focal, atrapamiento y dolor nervioso postlesión distintos de la radiculopatía espinal. Mission Hills, CA.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Evaluación de Dolor de Nervio Periférico | Simon Dardashti, MD",
    description:
      "El Dr. Simon Dardashti evalúa el dolor de nervio periférico — irritación nerviosa focal, atrapamiento y dolor nervioso postlesión distintos de la radiculopatía espinal. Mission Hills, CA.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evaluación de Dolor de Nervio Periférico | Simon Dardashti, MD",
    description:
      "El Dr. Simon Dardashti evalúa el dolor de nervio periférico — irritación nerviosa focal, atrapamiento y dolor nervioso postlesión distintos de la radiculopatía espinal. Mission Hills, CA.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Evaluación de Dolor de Nervio Periférico | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "El Dr. Simon Dardashti evalúa el dolor de nervio periférico — irritación nerviosa focal, atrapamiento y dolor nervioso postlesión distintos de la radiculopatía espinal. Mission Hills, CA.",
  inLanguage: "es-ES",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  about: { "@type": "MedicalCondition", name: "Dolor de Nervio Periférico" },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Condiciones y Servicios", item: `${SITE_URL}/es/servicios` },
      { "@type": "ListItem", position: 3, name: "Dolor de Nervio Periférico", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "Distinto de la Radiculopatía Espinal",
    body: "El dolor de nervio periférico surge de la irritación o lesión de nervios fuera del canal espinal. Se evalúa diferentemente de la radiculopatía e puede involucrar atrapamiento focal, cambios posttraumáticos u otros mecanismos periféricos.",
  },
  {
    heading: "Presentación Variable",
    body: "Los síntomas pueden incluir ardor focal, dolor punzante, entumecimiento u hormigueo en una distribución que no sigue un patrón dermatómico típico. La ubicación y carácter de síntomas ayudan a guiar la evaluación.",
  },
  {
    heading: "El Diagnóstico Preciso Importa",
    body: "El dolor de nervio periférico a menudo se confunde con radiculopatía o dolor musculoesquelético. Distinguir entre estos requiere evaluación clínica cuidadosa antes de seleccionar el tratamiento.",
  },
];

export default function DulorNervioPerifericoPage() {
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
            Dolor de Nervio Periférico
            <br />
            <em className="not-italic text-[#888]">Evaluación.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            El dolor de nervio periférico describe el dolor que se origina en el daño o irritación
            de nervios fuera de la médula espinal y raíces nerviosas. Puede superponerse en presentación
            con radiculopatía y otras condiciones de dolor, por lo que la evaluación clínica cuidadosa
            es central para identificar la fuente probable.
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
              ¿Qué es el Dolor de Nervio Periférico?
            </h2>
            <p>
              El sistema nervioso periférico incluye todos los nervios que viajan más allá de la
              médula espinal — a través de los miembros, torso y extremidades. Cuando uno o más de
              estos nervios se comprime, estira, lesiona u se irrita de otra manera en un sitio
              fuera de la columna, el dolor resultante se llama dolor de nervio periférico o
              dolor neuropático periférico.
            </p>
            <p>
              Los ejemplos comunes incluyen condiciones de atrapamiento nervioso — como un nervio
              comprimido bajo un ligamento, en un túnel fibroso, o en un sitio de tejido cicatricial
              después de cirugía o lesión. A diferencia de la radiculopatía, donde el problema se
              origina en una raíz nerviosa espinal, el dolor de nervio periférico típicamente involucra
              un segmento más distal del nervio y puede producir síntomas limitados a la distribución
              de un nervio específico en lugar de un patrón dermatómico.
            </p>
            <p>
              La distinción importa clínicamente porque afecta tanto el enfoque diagnóstico como
              las opciones de tratamiento que se pueden considerar. Identificar erróneamente un
              problema de nervio periférico como radiculopatía — o viceversa — puede conducir a
              tratamientos que no están bien adaptados a la fuente subyacente.
            </p>
          </div>
        </div>
      </section>

      {/* COMMON SYMPTOMS */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>02</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Síntomas</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Síntomas y Presentaciones Comunes.
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              El dolor de nervio periférico puede presentarse de varias formas dependiendo de
              qué nervio está involucrado y la naturaleza de la lesión o irritación. Las características
              comunes incluyen:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Dolor ardiente, punzante o similar a descargas eléctricas en una distribución focal",
                "Entumecimiento u hormigueo en el territorio de un nervio periférico específico",
                "Dolor que se reproduce o se agrava por presión en el sitio de irritación nerviosa",
                "Alodinia — malestar con toque ligero sobre el área afectada",
                "Debilidad o pérdida de control motor fino si están involucradas fibras motoras",
                "Síntomas que no siguen un patrón radicular o dermatómico típico",
                "Dolor que persiste o se desarrolla después de cirugía, trauma o lesión previa en el área",
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

      {/* EVALUATION */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>03</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Enfoque</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Cómo el Dr. Dardashti Evalúa el Dolor de Nervio Periférico.
            </h2>
            <p>
              La evaluación comienza con un historial detallado del inicio de síntomas, su distribución,
              calidad y cualquier evento precipitante como cirugía previa, trauma, compresión prolongada
              o una condición sistémica conocida. La relación de síntomas con actividad, postura y
              maniobras provocativas también se evalúa.
            </p>
            <p>
              El examen físico se enfoca en localizar el nervio involucrado — incluyendo palpación de
              sensibilidad en sitios de atrapamiento conocidos, pruebas provocativas y una evaluación
              neurológica de sensación, fuerza y reflejos. Cuando están disponibles, se revisan reportes
              de estudios de conducción nerviosa y electromiografía para ayudar a caracterizar la naturaleza
              y severidad de la afectación nerviosa.
            </p>
            <p>
              El dolor de nervio periférico puede coexistir con radiculopatía o sensibilización central,
              lo que puede complicar la imagen clínica. Cuando el diagnóstico es incierto, los bloqueos
              nerviosos diagnósticos dirigidos pueden ayudar a aclarar la anatomía contribuyente
              antes de que se tomen decisiones de tratamiento.
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
              El tratamiento depende de la naturaleza, ubicación y severidad de la afectación nerviosa,
              así como del historial de tratamientos previos. Las opciones que se pueden considerar incluyen:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Medicamentos con evidencia para dolor neuropático periférico cuando es clínicamente apropiado",
                "Bloqueos de nervio periférico dirigido con propósitos diagnósticos o terapéuticos en pacientes seleccionados",
                "Modificación de actividad y enfoques de terapia física para reducir la irritación nerviosa mecánica",
                "Coordinación con neurología cuando la evaluación electrodiagnóstica o evaluaciones posteriores están justificadas",
                "Evaluación de estimulación de la médula espinal para pacientes seleccionados con dolor de nervio periférico refractario",
                "Planificación del manejo del dolor multimodal incorporando objetivos funcionales",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm mt-6 max-w-2xl">
              No todos los pacientes requieren una inyección o intervención de procedimiento. Las
              recomendaciones se basan en evaluación clínica individual, el mecanismo subyacente probable
              e historial de tratamientos previos.
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
              El dolor de nervio periférico puede ser difícil de diagnosticar con certeza. Múltiples
              factores contribuyentes pueden estar presentes simultáneamente, y las pruebas diagnósticas
              no siempre identifican una fuente anatómica clara. La respuesta al tratamiento varía
              entre pacientes.
            </p>
            <p>
              Se requiere una evaluación clínica formal para determinar el enfoque diagnóstico y de
              tratamiento apropiado para cualquier paciente individual. Esta página es solo con
              propósitos informativos generales y no constituye consejo médico ni crea una
              relación médico-paciente.
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
              <li><Link href="/es/condiciones/dolor-neuropatico" className="text-[#c8a020] hover:underline tracking-wide">Evaluación de Dolor Neuropático →</Link></li>
              <li><Link href="/es/condiciones/radiculopatia-ciatica" className="text-[#c8a020] hover:underline tracking-wide">Evaluación de Ciatalgia y Dolor Radicular →</Link></li>
              <li><Link href="/es/procedimientos/estimulacion-medula-espinal" className="text-[#c8a020] hover:underline tracking-wide">Evaluación de Estimulación de la Médula Espinal →</Link></li>
              <li><Link href="/es/servicios" className="text-[#c8a020] hover:underline tracking-wide">Ver todas las Condiciones y Servicios →</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
