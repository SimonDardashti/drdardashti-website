import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://www.drdardashti.com/es/condiciones/dolor-miofascial";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Evaluación de Dolor Miofascial | Simon Dardashti, MD" },
  description:
    "El Dr. Simon Dardashti evalúa el dolor miofascial — dolor muscular y de tejido blando con patrones de puntos gatillo, a menudo relacionado con postura, sobreuso u superposición con dolor de columna y articulaciones.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Evaluación de Dolor Miofascial | Simon Dardashti, MD",
    description:
      "El Dr. Simon Dardashti evalúa el dolor miofascial — dolor muscular y de tejido blando con patrones de puntos gatillo, a menudo relacionado con postura, sobreuso u superposición con dolor de columna y articulaciones.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evaluación de Dolor Miofascial | Simon Dardashti, MD",
    description:
      "El Dr. Simon Dardashti evalúa el dolor miofascial — dolor muscular y de tejido blando con patrones de puntos gatillo, a menudo relacionado con postura, sobreuso u superposición con dolor de columna y articulaciones.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Evaluación de Dolor Miofascial | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "El Dr. Simon Dardashti evalúa el dolor miofascial — dolor muscular y de tejido blando con patrones de puntos gatillo, a menudo relacionado con postura, sobreuso u superposición con dolor de columna y articulaciones.",
  inLanguage: "es-ES",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  about: { "@type": "MedicalCondition", name: "Síndrome de Dolor Miofascial" },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Condiciones y Servicios", item: `${SITE_URL}/es/servicios` },
      { "@type": "ListItem", position: 3, name: "Dolor Miofascial", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "Dolor Muscular y de Tejido Blando",
    body: "El dolor miofascial surge de los músculos y su fascia circundante. A menudo se caracteriza por sensibilidad localizada y patrones reproducibles de dolor referido que pueden ser provocados por presión sobre puntos específicos dentro del tejido muscular.",
  },
  {
    heading: "Superposición con Otras Condiciones",
    body: "El dolor miofascial frecuentemente coexiste con dolor de columna, dolor articular o síntomas radiculares. A menudo no se reconoce como factor contribuyente en pacientes con dolor complejo o persistente.",
  },
  {
    heading: "Enfoque Multimodal",
    body: "El manejo del dolor miofascial típicamente enfatiza abordajes físicos, modificación de actividad y factores posturales. El tratamiento es individualizado y toma en cuenta cualquier condición de dolor superpuesta.",
  },
];

export default function DulorMiofascialPage() {
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
            Dolor Miofascial
            <br />
            <em className="not-italic text-[#888]">Evaluación.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            El dolor miofascial se refiere al dolor que se origina en los músculos y el tejido
            conectivo circundante. Es una fuente reconocida de dolor regional que puede ocurrir
            por sí solo o junto con otras condiciones que afectan la columna, articulaciones o
            sistema nervioso. El Dr. Dardashti evalúa el dolor miofascial como parte de una
            evaluación integral de la imagen general del dolor del paciente.
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
              ¿Qué es el Dolor Miofascial?
            </h2>
            <p>
              El síndrome de dolor miofascial es una condición de dolor regional caracterizada por la
              presencia de puntos gatillo — áreas localizadas dentro de un músculo o su fascia que
              son sensibles a la palpación y pueden producir un patrón característico de dolor referido
              cuando se comprimen. El dolor referido de un punto gatillo puede sentirse a distancia
              del punto gatillo en sí, lo que a veces puede hacer que la fuente del dolor sea
              difícil de identificar.
            </p>
            <p>
              El dolor miofascial puede desarrollarse después de lesión, tensión repetitiva, posturas sostenidas
              o períodos de estrés físico o emocional. Los músculos afectados varían según el paciente y contexto clínico,
              pero los músculos paraespinales, trapecio, músculos glúteos y flexores de cadera están entre los comúnmente
              afectados en pacientes con quejas de dolor espinal y musculoesquelético.
            </p>
            <p>
              La condición puede existir aisladamente o junto con otras fuentes de dolor como degeneración discal,
              dolor articular facetario o patología articular. En algunos pacientes, es un factor significativo en
              la carga general del dolor incluso cuando otros hallazgos estructurales están presentes en imágenes.
            </p>
          </div>
        </div>
      </section>

      {/* COMMON PRESENTATIONS */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>02</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Presentación</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Características y Presentaciones Comunes.
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              El dolor miofascial puede presentarse de varias formas. Las características comunes incluyen:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Dolor regional o rigidez en un grupo muscular, a menudo agravado por postura sostenida o sobreuso",
                "Sensibilidad reproducible en puntos específicos dentro del músculo",
                "Dolor referido sentido en una ubicación distante del punto sensible",
                "Dolor que se agrava por estar sentado, de pie o actividad repetitiva prolongada",
                "Rigidez o rango de movimiento reducido en la región afectada",
                "Síntomas que pueden fluctuar con estrés, fatiga, calidad del sueño o nivel de actividad",
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
              Cómo el Dr. Dardashti Evalúa el Dolor Miofascial.
            </h2>
            <p>
              La evaluación incluye un historial exhaustivo del inicio del dolor, ubicación, carácter
              y factores agravantes — incluyendo patrones relacionados con ocupación y actividad.
              La relación de síntomas con postura, sueño y tratamientos previos también se evalúa.
            </p>
            <p>
              El examen físico incluye palpación de los músculos en la región afectada para identificar
              sensibilidad, puntos gatillo y patrones de dolor referido. Esto se realiza junto con evaluación
              del rango de movimiento y una evaluación de cualquier factor estructural subyacente — incluyendo
              la columna y articulaciones adyacentes.
            </p>
            <p>
              El dolor miofascial puede acompañar o ser secundario a otras fuentes de dolor. Cuando tanto
              factores miofasciales como estructurales están presentes, la evaluación considera la contribución
              relativa de cada uno para guiar la priorización del tratamiento.
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
              El tratamiento del dolor miofascial es típicamente multimodal e individualizado según
              la severidad, factores contribuyentes e historial de tratamientos previos. Las opciones
              que se pueden considerar incluyen:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Terapia física enfocada en estiramiento, corrección de postura y técnicas de tejido blando",
                "Modificación de actividad y orientación ergonómica cuando factores ocupacionales o posturales contribuyen",
                "Manejo de medicamentos cuando es clínicamente apropiado",
                "Inyecciones de puntos gatillo para pacientes seleccionados cuando se identifican puntos gatillo discretos y reproducibles",
                "Tratamiento de fuentes de dolor estructural coexistentes — como articulaciones facetarias o articulación sacroiliaca — que pueden perpetuar guarding muscular",
                "Planificación del manejo del dolor multimodal cuando el dolor miofascial es parte de una presentación de dolor crónico más amplia",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm mt-6 max-w-2xl">
              Las recomendaciones de tratamiento son individualizadas. No todos los pacientes requieren
              inyecciones, y abordar factores posturales o estructurales contribuyentes es a menudo
              una parte central del manejo.
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
              El dolor miofascial es un diagnóstico clínico basado en historial y examen físico.
              Típicamente no se ve en imágenes estándar. El grado en que contribuye a la carga general
              de dolor de un paciente puede ser difícil de cuantificar, y la respuesta al tratamiento
              varía entre pacientes.
            </p>
            <p>
              Se requiere una evaluación clínica formal para determinar el enfoque de tratamiento apropiado.
              Esta página es solo con propósitos informativos generales y no constituye consejo médico
              ni crea una relación médico-paciente.
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
              <li><Link href="/es/condiciones/dolor-columna" className="text-[#c8a020] hover:underline tracking-wide">Evaluación de Dolor de Columna →</Link></li>
              <li><Link href="/es/condiciones/dolor-facetario" className="text-[#c8a020] hover:underline tracking-wide">Evaluación de Dolor Facetario →</Link></li>
              <li><Link href="/es/condiciones/dolor-lumbar" className="text-[#c8a020] hover:underline tracking-wide">Evaluación de Dolor Lumbar →</Link></li>
              <li><Link href="/es/servicios" className="text-[#c8a020] hover:underline tracking-wide">Ver todas las Condiciones y Servicios →</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
