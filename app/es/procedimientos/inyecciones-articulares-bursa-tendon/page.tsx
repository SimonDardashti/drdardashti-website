import type { Metadata } from "next";
import Link from "next/link";
import MedicalReviewFooter from "@/components/MedicalReviewFooter";

const PAGE_URL = "https://www.drdardashti.com/es/procedimientos/inyecciones-articulares-bursa-tendon";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Inyecciones Articulares, de Bursa y Tendón | Simon Dardashti, MD" },
  description:
    "Información educativa en español sobre inyecciones en articulaciones, bolsas serosas y tendones para dolor articular y condiciones relacionadas.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Inyecciones Articulares, de Bursa y Tendón | Simon Dardashti, MD",
    description:
      "Información educativa en español sobre inyecciones en articulaciones, bolsas serosas y tendones para dolor articular y condiciones relacionadas.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inyecciones Articulares, de Bursa y Tendón | Simon Dardashti, MD",
    description:
      "Información educativa en español sobre inyecciones en articulaciones, bolsas serosas y tendones para dolor articular y condiciones relacionadas.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Inyecciones Articulares, de Bursa y Tendón | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Información educativa en español sobre inyecciones en articulaciones, bolsas serosas y tendones para dolor articular y condiciones relacionadas.",
  inLanguage: "es",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  about: {
    "@type": "MedicalProcedure",
    name: "Inyecciones Articulares, de Bursa y Tendón",
    procedureType: "https://schema.org/TherapeuticProcedure",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Español", item: `${SITE_URL}/es` },
      { "@type": "ListItem", position: 3, name: "Procedimientos", item: `${SITE_URL}/es/procedimientos` },
      { "@type": "ListItem", position: 4, name: "Inyecciones Articulares, de Bursa y Tendón", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "Inyecciones guiadas",
    body: "Inyecciones guiadas por imagen en articulaciones, bolsas serosas o tendones para evaluar y posiblemente aliviar el dolor localizado.",
  },
  {
    heading: "Para condiciones seleccionadas",
    body: "Puede considerarse en pacientes seleccionados con dolor articular, de bursa o tendón cuando la evaluación clínica lo respalda.",
  },
  {
    heading: "Respuesta variable",
    body: "La respuesta varía entre pacientes. El procedimiento se basa en evaluación clínica individualizada.",
  },
];

export default function InyeccionesArticularesPage() {
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
            Inyecciones Articulares,
            <br />
            <em className="not-italic text-[#888]">de Bursa y Tendón.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Las inyecciones articulares, de bursa y tendón son procedimientos guiados por imagen que pueden considerarse para evaluar y tratar dolor localizado en estas estructuras. Se requiere una evaluación clínica formal para determinar si el procedimiento es apropiado.
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
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>¿Qué son estas inyecciones?</h2>
            <p>
              Las inyecciones articulares, de bursa y tendón son procedimientos que administran medicamento directamente en una articulación específica, bolsa serosa (bursa) o estructura tendinosa. Estas estructuras pueden convertirse en fuentes de dolor debido a inflamación, irritación o degeneración.
            </p>
            <p>
              El objetivo del procedimiento es reducir la inflamación y posiblemente aliviar el dolor localizado. Los procedimientos se realizan típicamente bajo guía de imagen — como ultrasonido o fluoroscopia — para garantizar una colocación precisa del medicamento en el sitio objetivo.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — INDICACIONES */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>02</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Indicaciones</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>¿Cuándo pueden considerarse?</h2>
            <p>
              Estos procedimientos pueden considerarse en pacientes seleccionados con:
            </p>
            <ul className="space-y-3 max-w-2xl mb-6">
              {[
                "Dolor articular localizado o cambios degenerativos",
                "Bursitis o inflamación de bolsa serosa",
                "Tendinitis o dolor relacionado con tendones",
                "Síntomas que no han mejorado adecuadamente con tratamiento conservador",
                "Evaluación clínica que respalda consideración de procedimiento",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm max-w-2xl">
              Los procedimientos no son apropiados para todos los pacientes. Se requiere una evaluación clínica para determinar si el procedimiento es apropiado para cada paciente individual.
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
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Qué implica el procedimiento.</h2>
            <p>
              El procedimiento se realiza bajo guía de imagen — típicamente ultrasonido o fluoroscopia — para permitir una colocación precisa de la aguja en la estructura objetivo. La piel se limpia y se adormece con anestésico local. La aguja se guía al sitio bajo visualización de imagen, se confirma la colocación, y se administra el medicamento.
            </p>
            <p>
              El procedimiento típicamente toma un tiempo corto. Los pacientes se monitorean brevemente después y generalmente se van a casa el mismo día. Se proporciona instrucción sobre cuidado después del procedimiento según la situación clínica individual.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — RESPUESTA */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>04</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Respuesta</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Variabilidad en la respuesta.</h2>
            <p>
              La respuesta a estas inyecciones varía significativamente entre pacientes. Algunos pacientes experimentan mejoría en el dolor, mientras que otros experimentan mínima o ninguna mejoría. La duración de cualquier beneficio también varía entre individuos.
            </p>
            <p>
              El calendario de respuesta también puede variar — algunos pacientes sienten mejoría dentro de días, mientras que otros pueden tomar más tiempo. La respuesta depende de la condición específica, la estructura afectada, y factores individuales del paciente.
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
              La respuesta a estas inyecciones es variable y no puede predecirse de antemano. Los procedimientos no son apropiados para todos los pacientes. Se requiere una evaluación clínica formal para determinar la idoneidad.
            </p>
            <p>
              Este contenido es solo para propósitos informativos generales y no constituye consejo médico ni crea una relación médico-paciente.
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
              <li><Link href="/es/procedimientos" className="text-[#c8a020] hover:underline tracking-wide">Ver todos los procedimientos →</Link></li>
              <li><Link href="/procedures/joint-bursa-tendon-injections" className="text-[#c8a020] hover:underline tracking-wide">Página en inglés →</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* REVISIÓN MÉDICA */}
      <MedicalReviewFooter path="/es/procedimientos/inyecciones-articulares-bursa-tendon" locale="es" />
    </>
  );
}
