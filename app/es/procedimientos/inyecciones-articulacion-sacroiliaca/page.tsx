import type { Metadata } from "next";
import Link from "next/link";
import MedicalReviewFooter from "@/components/MedicalReviewFooter";

const PAGE_URL = "https://www.drdardashti.com/es/procedimientos/inyecciones-articulacion-sacroiliaca";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Inyecciones de la Articulación Sacroilíaca | Simon Dardashti, MD" },
  description:
    "Información educativa en español sobre inyecciones de la articulación sacroilíaca para evaluación y tratamiento del dolor en la articulación SI.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Inyecciones de la Articulación Sacroilíaca | Simon Dardashti, MD",
    description:
      "Información educativa en español sobre inyecciones de la articulación sacroilíaca para evaluación y tratamiento del dolor en la articulación SI.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inyecciones de la Articulación Sacroilíaca | Simon Dardashti, MD",
    description:
      "Información educativa en español sobre inyecciones de la articulación sacroilíaca para evaluación y tratamiento del dolor en la articulación SI.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Inyecciones de la Articulación Sacroilíaca | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Información educativa en español sobre inyecciones de la articulación sacroilíaca para evaluación y tratamiento del dolor en la articulación SI.",
  inLanguage: "es",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  about: {
    "@type": "MedicalProcedure",
    name: "Inyección de la Articulación Sacroilíaca",
    procedureType: "https://schema.org/TherapeuticProcedure",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Español", item: `${SITE_URL}/es` },
      { "@type": "ListItem", position: 3, name: "Procedimientos", item: `${SITE_URL}/es/procedimientos` },
      { "@type": "ListItem", position: 4, name: "Inyecciones de la Articulación Sacroilíaca", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "Procedimiento guiado por imagen",
    body: "Inyección guiada por imagen en la articulación sacroilíaca para evaluar y posiblemente aliviar el dolor relacionado con esta articulación.",
  },
  {
    heading: "Para pacientes seleccionados",
    body: "Puede considerarse en pacientes seleccionados con dolor en la espalda baja o glúteos cuando la evaluación sugiere que la articulación SI puede ser una fuente de dolor.",
  },
  {
    heading: "Respuesta variable",
    body: "La respuesta varía entre pacientes. No es apropiada para todos. Los riesgos, beneficios y expectativas realistas deben discutirse antes del procedimiento.",
  },
];

export default function InyeccionesArtSacroiliacaPage() {
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
            Inyecciones de la
            <br />
            <em className="not-italic text-[#888]">Articulación Sacroilíaca.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Las inyecciones de la articulación sacroilíaca son procedimientos guiados por imagen que pueden ayudar a determinar si esta articulación contribuye al dolor del paciente, y pueden proporcionar alivio temporal. Se requiere una evaluación clínica formal para determinar si este procedimiento es apropiado.
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
              Las articulaciones sacroilíacas (SI) se encuentran en la base de la columna vertebral, donde el sacro — el hueso triangular entre la columna lumbar y el cóccix — se conecta a los huesos ilíacos de la pelvis. Hay una articulación SI a cada lado.
            </p>
            <p>
              Las articulaciones SI soportan carga entre el cuerpo superior y las piernas. Son sostenidas por ligamentos y músculos fuertes y permiten movimiento relativamente limitado. Sin embargo, pueden convertirse en una fuente de dolor en algunas personas.
            </p>
            <p>
              El dolor de la articulación SI típicamente se presenta en la región de la espalda baja y glúteos, y puede extenderse hacia el muslo superior. Puede ser difícil de distinguir de otras causas de dolor de espalda baja basándose solo en los síntomas.
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
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Síntomas que pueden sugerir implicación de la articulación SI.</h2>
            <p>
              Ningún síntoma único confirma que la articulación SI es la fuente del dolor. Los siguientes patrones a veces se asocian con dolor de la articulación SI, aunque la superposición con otras condiciones es común:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Dolor de espalda baja, a menudo unilateral, cerca de la parte superior del glúteo",
                "Dolor en glúteos, cadera o muslo superior",
                "Dolor que empeora con estar sentado o de pie prolongadamente",
                "Dolor con movimientos de transición como darse la vuelta en la cama o levantarse de una silla",
                "Sensibilidad sobre la región sacroilíaca en uno o ambos lados",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm max-w-2xl mt-6">
              Estas características por sí solas no son diagnósticas. Se requiere una evaluación clínica exhaustiva, incluyendo examen físico con maniobras de provocación específicas, para determinar si la articulación SI puede ser una fuente significativa de dolor.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — CUÁNDO CONSIDERARSE */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>03</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Evaluación</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>¿Cuándo puede considerarse este procedimiento?</h2>
            <p>
              Diagnosticar el dolor de la articulación SI con certeza es un desafío. Los hallazgos del examen físico y las imágenes son útiles pero ninguno es definitivo. Una inyección de la articulación SI tiene dos propósitos potenciales:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div className="border border-[#e5e5e0] rounded p-5">
                <p className="text-xs text-[#c8a020] uppercase tracking-widest font-semibold mb-2">Diagnóstico</p>
                <p className="text-sm text-[#555] leading-relaxed">
                  Si el dolor típico del paciente disminuye significativamente después de inyectar anestésico local en la articulación, esto sugiere que la articulación SI está contribuyendo al dolor. Esta respuesta puede ayudar a guiar futuras decisiones de tratamiento.
                </p>
              </div>
              <div className="border border-[#e5e5e0] rounded p-5">
                <p className="text-xs text-[#c8a020] uppercase tracking-widest font-semibold mb-2">Terapéutico</p>
                <p className="text-sm text-[#555] leading-relaxed">
                  Un medicamento antiinflamatorio (corticoesteroide) puede incluirse junto con anestésico local. Esto puede proporcionar alivio temporal en algunos pacientes, aunque la respuesta varía y no puede predecirse de antemano.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — PROCEDIMIENTO */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>04</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Procedimiento</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Qué implica el procedimiento.</h2>
            <p>
              Las inyecciones de la articulación sacroilíaca se realizan utilizando guía de imagen en tiempo real — típicamente fluoroscopia — para permitir una colocación precisa de la aguja en el espacio articular.
            </p>
            <p>
              El paciente se acuesta boca abajo en la mesa del procedimiento. La piel sobre el área objetivo se limpia y se adormece con anestésico local. La aguja se guía luego a su posición bajo imágenes continuas. Una vez confirmada la colocación, se administra el medicamento.
            </p>
            <p>
              El procedimiento típicamente toma un tiempo corto. Los pacientes se monitorean brevemente después y generalmente se van a casa el mismo día. Un adulto responsable debe estar disponible para llevar al paciente a casa.
            </p>
            <p>
              A menudo se pide a los pacientes que noten sus niveles de dolor en las horas posteriores al procedimiento, particularmente durante actividades que típicamente provocan sus síntomas. Esta información puede ser útil para el diagnóstico.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 — DESPUÉS */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>05</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Después</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Después del procedimiento.</h2>
            <p>
              Es común tener algo de sensibilidad en el sitio de inyección durante un día o dos después del procedimiento. También es posible un aumento temporal del dolor a medida que desaparece el anestésico local.
            </p>
            <p>
              Se aconseja a la mayoría de los pacientes que se tomen las cosas con calma durante el resto del día y que eviten la actividad extenuante hasta que se dé autorización. Las instrucciones específicas se proporcionan según la situación clínica individual.
            </p>
            <p>
              Si se usó un corticoesteroide, cualquier efecto antiinflamatorio puede tardar varios días en desarrollarse. Se pide típicamente a los pacientes que reporten su respuesta para que el resultado pueda incorporarse al plan de tratamiento continuo.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6 — RIESGOS */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>06</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Riesgos</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Riesgos y consideraciones.</h2>
            <p>
              Las inyecciones de la articulación sacroilíaca generalmente se toleran bien cuando se realizan siguiendo una evaluación clínica apropiada. Como con cualquier procedimiento, hay riesgos a tener en cuenta:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Aumento temporal del dolor en el sitio de inyección",
                "Sangrado o moretones menores",
                "Infección (poco común con técnica adecuada)",
                "Entumecimiento o debilidad temporal en la pierna (raro)",
                "Efectos relacionados con medicamentos de corticoesteroides",
                "Respuesta incompleta o ausente a la inyección",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm max-w-2xl mt-6">
              Los riesgos y beneficios se discuten con cada paciente antes de cualquier procedimiento. La idoneidad del procedimiento depende de circunstancias individuales.
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
              No todos los pacientes con dolor de espalda baja o glúteos son candidatos para inyecciones de la articulación sacroilíaca. Las recomendaciones de tratamiento se individualizan y se basan en evaluación clínica formal. La respuesta al procedimiento varía y no puede predecirse de antemano. Este contenido es solo para propósitos informativos generales y no constituye consejo médico ni una garantía de ningún resultado específico.
            </p>
            <p>
              El Dr. Dardashti ve pacientes en Mission Hills, California, sirviendo a los valles de San Fernando y Santa Clarita y las comunidades circundantes del área de Los Ángeles.
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
              <li><Link href="/es/condiciones/dolor-articulacion-sacroiliaca" className="text-[#c8a020] hover:underline tracking-wide">Evaluación de Dolor de Articulación Sacroilíaca →</Link></li>
              <li><Link href="/es/condiciones/dolor-lumbar" className="text-[#c8a020] hover:underline tracking-wide">Evaluación de Dolor Lumbar →</Link></li>
              <li><Link href="/es/procedimientos" className="text-[#c8a020] hover:underline tracking-wide">Ver todos los procedimientos →</Link></li>
              <li><Link href="/procedures/sacroiliac-joint-injections" className="text-[#c8a020] hover:underline tracking-wide">Página en inglés →</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* REVISIÓN MÉDICA */}
      <MedicalReviewFooter path="/es/procedimientos/inyecciones-articulacion-sacroiliaca" locale="es" />
    </>
  );
}
