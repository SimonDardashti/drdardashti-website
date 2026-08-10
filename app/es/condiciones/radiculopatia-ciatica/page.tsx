import type { Metadata } from "next";
import Link from "next/link";
import MedicalReviewFooter from "@/components/MedicalReviewFooter";

const PAGE_URL = "https://www.drdardashti.com/es/condiciones/radiculopatia-ciatica";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Radiculopatía y Ciática | Simon Dardashti, MD" },
  description:
    "Información educativa en español sobre radiculopatía, dolor radicular y ciática, incluyendo síntomas relacionados con irritación o compresión de raíces nerviosas.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Radiculopatía y Ciática | Simon Dardashti, MD",
    description:
      "Información educativa en español sobre radiculopatía, dolor radicular y ciática, incluyendo síntomas relacionados con irritación o compresión de raíces nerviosas.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Radiculopatía y Ciática | Simon Dardashti, MD",
    description:
      "Información educativa en español sobre radiculopatía, dolor radicular y ciática, incluyendo síntomas relacionados con irritación o compresión de raíces nerviosas.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Radiculopatía y Ciática | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Información educativa en español sobre radiculopatía, dolor radicular y ciática, incluyendo síntomas relacionados con irritación o compresión de raíces nerviosas.",
  inLanguage: "es",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  about: { "@type": "MedicalCondition", name: "Radiculopatía y Ciática" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Español", item: `${SITE_URL}/es` },
      { "@type": "ListItem", position: 3, name: "Condiciones", item: `${SITE_URL}/es/condiciones` },
      { "@type": "ListItem", position: 4, name: "Radiculopatía y Ciática", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "Dolor que se irradia",
    body: "La ciática se refiere al dolor que se irradia desde la espalda baja o las nalgas hacia la pierna, a menudo como resultado de irritación o compresión de una raíz nerviosa lumbar.",
  },
  {
    heading: "Diagnóstico preciso",
    body: "El dolor de pierna tiene múltiples posibles causas. Una evaluación clínica precisa es importante para identificar la fuente probable antes de considerar el tratamiento.",
  },
  {
    heading: "Tratamiento individualizado",
    body: "Las opciones pueden incluir cuidado conservador, manejo de medicamentos cuando sea clínicamente apropiado, o procedimientos guiados por imagen para pacientes seleccionados.",
  },
];

export default function RadiculopatiaPage() {
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
            Radiculopatía
            <br />
            <em className="not-italic text-[#888]">y Ciática.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            La radiculopatía y el dolor radicular se refieren a síntomas que pueden surgir cuando una raíz nerviosa de la columna se irrita o se comprime. El Dr. Dardashti evalúa estas condiciones a través de un historial cuidadoso, examen neurológico y revisión de estudios de imagen cuando están disponibles.
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
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>¿Qué es la radiculopatía y la ciática?</h2>
            <p>
              La ciática comúnmente se refiere al dolor que se irradia desde la espalda baja o las nalgas hacia la pierna, a veces extendiéndose al pie. El término se usa a menudo para describir síntomas que pueden resultar de irritación o compresión de una raíz nerviosa lumbar, aunque no todo dolor de pierna es ciática. Un diagnóstico preciso es importante porque el tratamiento depende de identificar la fuente probable.
            </p>
            <p>
              El dolor radicular se refiere de manera más amplia al dolor que viaja a lo largo de la trayectoria de una raíz nerviosa. Puede ocurrir en la columna lumbar, causando síntomas hacia la pierna, o en la columna cervical, causando síntomas hacia el brazo. La radiculopatía se refiere a la disfunción de la raíz nerviosa que también puede incluir entumecimiento, hormigueo o debilidad además del dolor.
            </p>
            <p>
              Las causas subyacentes comunes pueden incluir hernias discales, estenosis espinal, estrechamiento foraminal u otras condiciones que afecten al nervio cuando sale de la columna vertebral.
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
              Los síntomas asociados con dolor radicular o irritación de raíces nerviosas pueden incluir:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Dolor que se irradia desde el cuello hacia el brazo, o desde la espalda baja hacia la pierna",
                "Entumecimiento u hormigueo a lo largo del brazo, mano, pierna o pie",
                "Debilidad en el brazo, mano, pierna o pie",
                "Dolor que empeora con ciertas posiciones, movimientos o estar sentado o de pie prolongadamente",
                "Dolor similar a una descarga eléctrica a lo largo de la distribución de un nervio",
                "Síntomas que son más intensos en una extremidad que en la otra",
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
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Cómo evalúa el Dr. Dardashti la radiculopatía.</h2>
            <p>
              La evaluación incluye un historial detallado del inicio de los síntomas, características, distribución y respuesta al tratamiento previo. Un examen neurológico evalúa los reflejos, la sensibilidad y la fuerza muscular para ayudar a localizar la probable raíz nerviosa afectada.
            </p>
            <p>
              Cuando hay disponible imágenes médicas, como resonancia magnética de la columna cervical o lumbar, los hallazgos se revisan en el contexto de la presentación clínica del paciente. Una hernia discal o estrechamiento foraminal en las imágenes no indica automáticamente que sea necesario un procedimiento; las decisiones de tratamiento se basan en el cuadro clínico completo.
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
              El tratamiento depende de la severidad, duración y características de los síntomas, junto con el historial de tratamiento previo del paciente y el examen clínico. Las opciones que pueden considerarse incluyen:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Coordinación del cuidado conservador, incluyendo fisioterapia",
                "Manejo de medicamentos cuando sea clínicamente apropiado",
                "Inyecciones epidurales de esteroides para pacientes seleccionados con síntomas radiculares relacionados con nervios",
                "Bloqueos selectivos de raíces nerviosas para consideración diagnóstica o terapéutica",
                "Abordajes cervicales o lumbares interlaminares o transforaminales dependiendo de la situación clínica",
                "Monitoreo continuo y reevaluación basada en la respuesta al tratamiento",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm mt-6 max-w-2xl">
              No todos los pacientes con dolor radicular requieren una inyección. Las recomendaciones de tratamiento se basan en la evaluación clínica individual.
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
              El dolor radicular puede tener múltiples causas contribuyentes, y no todos los casos se resuelven con un único tratamiento. La respuesta al tratamiento varía entre pacientes. Un diagnóstico preciso basado en la evaluación clínica es esencial antes de iniciar el tratamiento. Esta página es solo para fines informativos generales y no constituye consejo médico ni crea una relación médico-paciente.
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
              <li><Link href="/es/procedimientos/inyecciones-epidurales-de-esteroides" className="text-[#c8a020] hover:underline tracking-wide">Inyecciones epidurales de esteroides →</Link></li>
              <li><Link href="/es/procedimientos" className="text-[#c8a020] hover:underline tracking-wide">Ver todos los procedimientos →</Link></li>
              <li><Link href="/conditions/sciatica-radicular-pain" className="text-[#c8a020] hover:underline tracking-wide">Página en inglés →</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* REVISIÓN MÉDICA */}
      <MedicalReviewFooter path="/es/condiciones/radiculopatia-ciatica" locale="es" />
    </>
  );
}
