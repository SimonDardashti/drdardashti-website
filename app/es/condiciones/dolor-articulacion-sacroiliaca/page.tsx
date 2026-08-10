import type { Metadata } from "next";
import Link from "next/link";
import MedicalReviewFooter from "@/components/MedicalReviewFooter";

const PAGE_URL = "https://www.drdardashti.com/es/condiciones/dolor-articulacion-sacroiliaca";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Dolor de la Articulación Sacroilíaca | Simon Dardashti, MD" },
  description:
    "Información educativa en español sobre el dolor de la articulación sacroilíaca, incluyendo síntomas y opciones de tratamiento.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Dolor de la Articulación Sacroilíaca | Simon Dardashti, MD",
    description:
      "Información educativa en español sobre el dolor de la articulación sacroilíaca, incluyendo síntomas y opciones de tratamiento.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dolor de la Articulación Sacroilíaca | Simon Dardashti, MD",
    description:
      "Información educativa en español sobre el dolor de la articulación sacroilíaca, incluyendo síntomas y opciones de tratamiento.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Dolor de la Articulación Sacroilíaca | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Información educativa en español sobre el dolor de la articulación sacroilíaca, incluyendo síntomas y opciones de tratamiento.",
  inLanguage: "es",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  about: { "@type": "MedicalCondition", name: "Dolor de la Articulación Sacroilíaca" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Español", item: `${SITE_URL}/es` },
      { "@type": "ListItem", position: 3, name: "Condiciones", item: `${SITE_URL}/es/condiciones` },
      { "@type": "ListItem", position: 4, name: "Dolor de la Articulación Sacroilíaca", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "Ubicación Específica",
    body: "El dolor de la articulación sacroilíaca se refiere al dolor en la región donde se conecta la columna vertebral con la pelvis. Esta articulación puede ser una fuente de dolor de espalda baja.",
  },
  {
    heading: "Diagnóstico Clínico",
    body: "La evaluación incluye examen físico, pruebas específicas de la articulación sacroilíaca, e imagen cuando sea apropiada para descartar otras fuentes de dolor.",
  },
  {
    heading: "Opciones de Tratamiento",
    body: "El tratamiento puede incluir cuidado conservador, inyecciones de articulación sacroilíaca para pacientes seleccionados, o procedimientos guiados por imagen cuando sea clínicamente apropiado.",
  },
];

export default function DolorArticulacionSacroiliacaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      {/* SPANISH SECTION NAV */}
      <section className="bg-[#0a0a0a] py-4 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-6">
          <span className="text-[10px] text-[#666] uppercase tracking-widest">Sección en español</span>
          <nav className="flex items-center gap-6">
            <Link href="/es" className="text-xs font-medium tracking-widest uppercase text-[#888] hover:text-[#c8a020] transition-colors">Inicio</Link>
            <span className="w-px h-4 bg-[#333]" />
            <Link href="/es/condiciones" className="text-xs font-medium tracking-widest uppercase text-white">Condiciones</Link>
            <span className="w-px h-4 bg-[#333]" />
            <Link href="/es/procedimientos" className="text-xs font-medium tracking-widest uppercase text-[#888] hover:text-[#c8a020] transition-colors">Procedimientos</Link>
          </nav>
        </div>
      </section>

      {/* HERO */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-4">Condiciones Evaluadas</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Dolor de la Articulación
            <br />
            <em className="not-italic text-[#888]">Sacroilíaca.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            El dolor de la articulación sacroilíaca se refiere al dolor en la región donde la columna vertebral se conecta con la pelvis. Esta articulación puede ser una fuente de dolor de espalda baja. El Dr. Dardashti evalúa el dolor de la articulación sacroilíaca en el contexto de los síntomas del paciente, examen físico, imágenes cuando están disponibles y respuesta al tratamiento previo.
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

      {/* SECTION 1 — QUÉ ES */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>01</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Descripción</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>¿Qué es la articulación sacroilíaca?</h2>
            <p>
              La articulación sacroilíaca es la conexión donde el sacro (la base de la columna vertebral) se une con la pelvis. Hay dos articulaciones sacroilíacas, una a cada lado. Estas articulaciones permiten el movimiento entre la columna vertebral y la pelvis, pero el movimiento es bastante limitado.
            </p>
            <p>
              El dolor de la articulación sacroilíaca puede originarse de la propia articulación, los ligamentos que la rodean, o los músculos y tejidos asociados. El dolor generalmente se siente en la parte baja de la espalda o el área de las nalgas, aunque puede irradiar hacia la pierna en algunos casos. Identificar si la articulación sacroilíaca es la probable fuente del dolor es una parte importante de la evaluación clínica.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — SÍNTOMAS */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>02</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Síntomas</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Síntomas comunes.</h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              Los síntomas asociados con dolor de la articulación sacroilíaca pueden incluir:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Dolor en la parte baja de la espalda, generalmente en un lado",
                "Dolor en el área de las nalgas o la cadera",
                "Dolor que puede irradiar hacia la pierna o el muslo, pero típicamente no más allá de la rodilla",
                "Dolor que empeora con actividades como caminar, subir escaleras, o estar de pie prolongadamente",
                "Dolor que puede mejorar al sentarse o acostarse",
                "Sensación de que la espalda baja o la pelvis están inestables",
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

      {/* SECTION 3 — EVALUACIÓN */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>03</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Evaluación</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Cómo evalúa el Dr. Dardashti el dolor de la articulación sacroilíaca.</h2>
            <p>
              La evaluación incluye un historial detallado de los síntomas y un examen físico que incluye pruebas específicas diseñadas para evaluar la función de la articulación sacroilíaca. El examen ayuda a determinar si los síntomas probablemente se originan de la articulación sacroilíaca o de otras estructuras de la espalda baja.
            </p>
            <p>
              Cuando hay imágenes disponibles, como radiografía o resonancia magnética, los hallazgos se revisan en el contexto de la presentación clínica. El objetivo de la evaluación es identificar si la articulación sacroilíaca es la probable fuente del dolor y desarrollar un plan de tratamiento apropiado.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — OPCIONES DE TRATAMIENTO */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>04</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Tratamiento</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Opciones de tratamiento que pueden considerarse.</h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              El tratamiento depende de la severidad y duración de los síntomas, junto con los hallazgos del examen clínico. Las opciones que pueden considerarse incluyen:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Coordinación del cuidado conservador, incluyendo fisioterapia y estabilización",
                "Manejo de medicamentos cuando sea clínicamente apropiado",
                "Inyecciones de articulación sacroilíaca con anestésico local o esteroides para pacientes seleccionados",
                "Inyecciones diagnósticas para ayudar a confirmar que la articulación sacroilíaca es la fuente del dolor",
                "Evaluación para procedimientos adicionales si el dolor persiste después del tratamiento conservador",
                "Monitoreo continuo y reevaluación basada en la respuesta al tratamiento",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm mt-6 max-w-2xl">
              No todos los pacientes con dolor de la articulación sacroilíaca requieren una inyección. El tratamiento se basa en la evaluación clínica individual y la respuesta al tratamiento inicial.
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
              El dolor de la articulación sacroilíaca puede confundirse con otras fuentes de dolor de espalda baja. Un diagnóstico preciso basado en la evaluación clínica es importante. La respuesta al tratamiento varía entre los pacientes, y no todos los casos se resuelven con un único enfoque.
            </p>
            <p>
              Esta página es solo para fines informativos generales y no constituye consejo médico ni crea una relación médico-paciente. Se requiere una evaluación clínica formal para determinar el tratamiento apropiado para cualquier paciente individual.
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
              <li><Link href="/es/condiciones/dolor-lumbar" className="text-[#c8a020] hover:underline tracking-wide">Evaluación de Dolor Lumbar →</Link></li>
              <li><Link href="/es/condiciones/radiculopatia-ciatica" className="text-[#c8a020] hover:underline tracking-wide">Evaluación de Ciática y Dolor Radicular →</Link></li>
              <li><Link href="/es/condiciones" className="text-[#c8a020] hover:underline tracking-wide">Ver todas las Condiciones Evaluadas →</Link></li>
              <li><Link href="/es/procedimientos" className="text-[#c8a020] hover:underline tracking-wide">Ver todos los Procedimientos →</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* REVISIÓN MÉDICA */}
      <MedicalReviewFooter path="/es/condiciones/dolor-articulacion-sacroiliaca" locale="es" />
    </>
  );
}
