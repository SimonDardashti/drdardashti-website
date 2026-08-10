import type { Metadata } from "next";
import Link from "next/link";
import MedicalReviewFooter from "@/components/MedicalReviewFooter";

const PAGE_URL = "https://www.drdardashti.com/es/procedimientos/inyecciones-epidurales-de-esteroides";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Inyecciones Epidurales de Esteroides | Simon Dardashti, MD" },
  description:
    "Información educativa en español sobre inyecciones epidurales de esteroides para ciertos tipos de dolor radicular, ciática y dolor relacionado con nervios espinales.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Inyecciones Epidurales de Esteroides | Simon Dardashti, MD",
    description:
      "Información educativa en español sobre inyecciones epidurales de esteroides para ciertos tipos de dolor radicular, ciática y dolor relacionado con nervios espinales.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inyecciones Epidurales de Esteroides | Simon Dardashti, MD",
    description:
      "Información educativa en español sobre inyecciones epidurales de esteroides para ciertos tipos de dolor radicular, ciática y dolor relacionado con nervios espinales.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Inyecciones Epidurales de Esteroides | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Información educativa en español sobre inyecciones epidurales de esteroides para ciertos tipos de dolor radicular, ciática y dolor relacionado con nervios espinales.",
  inLanguage: "es",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  about: {
    "@type": "MedicalProcedure",
    name: "Inyección Epidural de Esteroides",
    procedureType: "https://schema.org/TherapeuticProcedure",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Español", item: `${SITE_URL}/es` },
      { "@type": "ListItem", position: 3, name: "Procedimientos", item: `${SITE_URL}/es/procedimientos` },
      { "@type": "ListItem", position: 4, name: "Inyecciones Epidurales de Esteroides", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "Procedimiento guiado por imagen",
    body: "Las inyecciones epidurales de esteroides administran medicamento antiinflamatorio cerca de las raíces nerviosas de la columna bajo guía de imagen.",
  },
  {
    heading: "Para pacientes seleccionados",
    body: "Pueden considerarse en pacientes con dolor radicular o sospecha de irritación de raíces nerviosas cuando se cumplen criterios clínicos apropiados.",
  },
  {
    heading: "La respuesta varía",
    body: "El procedimiento no es apropiado para todo paciente. Los riesgos, beneficios y expectativas realistas deben discutirse antes del procedimiento.",
  },
];

export default function InyeccionesEpidualesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      {/* SPANISH SECTION NAV */}
      <section className="bg-[#0a0a0a] py-4 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-6">
          <span className="text-[10px] text-[#666] uppercase tracking-widest">Sección en español</span>
          <nav className="flex items-center gap-6">
            <Link
              href="/es"
              className="text-xs font-medium tracking-widest uppercase text-[#888] hover:text-[#c8a020] transition-colors"
            >
              Inicio
            </Link>
            <span className="w-px h-4 bg-[#333]" />
            <Link
              href="/es/condiciones"
              className="text-xs font-medium tracking-widest uppercase text-[#888] hover:text-[#c8a020] transition-colors"
            >
              Condiciones
            </Link>
            <span className="w-px h-4 bg-[#333]" />
            <Link
              href="/es/procedimientos"
              className="text-xs font-medium tracking-widest uppercase text-[#888] hover:text-[#c8a020] transition-colors"
            >
              Procedimientos
            </Link>
          </nav>
        </div>
      </section>

      {/* HERO */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Procedimientos y Opciones de Tratamiento
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Inyecciones Epidurales
            <br />
            <em className="not-italic text-[#888]">de Esteroides.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Las inyecciones epidurales de esteroides son procedimientos guiados por imagen que pueden
            considerarse en pacientes seleccionados con dolor radicular o irritación sospechada de raíces
            nerviosas. Se requiere una evaluación clínica formal para determinar si este procedimiento es
            apropiado para cada paciente.
          </p>
        </div>
      </section>

      {/* IN BRIEF */}
      <section className="bg-white py-16 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-[#999] uppercase tracking-widest mb-8">Resumen Rápido</p>
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

      {/* SECTION 1 — QUÉ SON */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>01</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Descripción</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              ¿Qué son las inyecciones epidurales de esteroides?
            </h2>
            <p>
              Las inyecciones epidurales de esteroides son procedimientos que administran medicamento
              corticoesteroide en el espacio epidural, el área que rodea la médula espinal y las raíces
              nerviosas dentro del canal espinal. El objetivo es reducir la inflamación alrededor de las
              raíces nerviosas irritadas o comprimidas, lo cual puede ayudar a reducir el dolor, entumecimiento
              u hormigueo asociado.
            </p>
            <p>
              El procedimiento se realiza típicamente bajo guía de fluoroscopia (rayos X) u otra guía de
              imagen para confirmar la colocación correcta de la aguja. Las inyecciones epidurales de
              esteroides no son un tratamiento estructural y no reparan la patología subyacente del disco o
              de la columna.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — ABORDAJES */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>02</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Abordajes</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Abordajes de inyección.
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              Se pueden usar diferentes abordajes de inyección dependiendo de la anatomía del paciente, el
              diagnóstico y la situación clínica:
            </p>
            <div className="space-y-5 max-w-2xl">
              {[
                {
                  name: "Epidural interlaminar",
                  desc: "El medicamento se administra a través de la parte posterior de la columna en el espacio epidural, proporcionando una cobertura más amplia del área epidural.",
                },
                {
                  name: "Epidural transforaminal",
                  desc: "El medicamento se administra cerca de un agujero de raíz nerviosa específico, permitiendo un tratamiento más dirigido de un nivel nervioso particular.",
                },
                {
                  name: "Epidural caudal",
                  desc: "El medicamento se administra a través del hiato sacro en la base de la columna y puede ser apropiado para ciertos síntomas lumbares bajos o sacros.",
                },
                {
                  name: "Bloqueo selectivo de raíz nerviosa",
                  desc: "Una inyección más dirigida cerca de una raíz nerviosa específica, que también puede servir con propósito diagnóstico para ayudar a confirmar el nivel nervioso sintomático.",
                },
              ].map((item) => (
                <div key={item.name} className="border-l-2 border-[#c8a020] pl-4">
                  <p className="font-semibold text-[#0a0a0a] text-sm mb-1" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>{item.name}</p>
                  <p className="text-sm text-[#666] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — CANDIDATOS */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>03</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Candidatos</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              ¿Cuándo pueden considerarse las inyecciones epidurales de esteroides?
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              Las inyecciones epidurales de esteroides pueden considerarse en pacientes seleccionados con:
            </p>
            <ul className="space-y-3 max-w-2xl mb-6">
              {[
                "Dolor radicular relacionado con hernia de disco o estenosis espinal",
                "Irritación de raíces nerviosas cervicales o lumbares con síntomas radiantes",
                "Síntomas que no han mejorado adecuadamente con tratamiento conservador",
                "Síntomas lo suficientemente significativos para justificar evaluación de procedimiento",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm max-w-2xl">
              Las inyecciones epidurales de esteroides no son apropiadas para todo paciente con dolor de
              espalda, cuello o pierna. Se requiere una evaluación clínica para determinar si el procedimiento
              es apropiado.
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
            <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Limitaciones Importantes.
            </h2>
            <p>
              La respuesta a las inyecciones epidurales de esteroides varía entre pacientes. El procedimiento
              puede proporcionar alivio temporal, alivio parcial o ningún alivio. Se pueden considerar múltiples
              inyecciones en circunstancias clínicas apropiadas, y el número de inyecciones apropiado para un
              paciente dado depende de la respuesta clínica y el contexto general.
            </p>
            <p>
              Como con cualquier procedimiento médico, las inyecciones epidurales de esteroides conllevan
              riesgos potenciales. Los riesgos y beneficios deben discutirse en detalle con el médico tratante
              antes de cualquier procedimiento. Esta página es solo para propósitos informativos generales y no
              constituye consejo médico ni crea una relación médico-paciente.
            </p>
            <p>
              El Dr. Dardashti ve pacientes en Mission Hills, California, sirviendo a pacientes de los valles
              de San Fernando y Santa Clarita y las comunidades circundantes del área de Los Ángeles.
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
            <h2
              className="text-base font-bold text-[#0a0a0a] mb-5"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Condiciones y Procedimientos Relacionados.
            </h2>
            <ul className="space-y-3 text-sm">
              <li><Link href="/es/condiciones" className="text-[#c8a020] hover:underline tracking-wide">Ver todas las condiciones evaluadas →</Link></li>
              <li><Link href="/es/procedimientos" className="text-[#c8a020] hover:underline tracking-wide">Ver todos los procedimientos →</Link></li>
              <li><Link href="/procedures/epidural-steroid-injections" className="text-[#c8a020] hover:underline tracking-wide">Página en inglés →</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* REVISIÓN MÉDICA */}
      <MedicalReviewFooter path="/es/procedimientos/inyecciones-epidurales-de-esteroides" locale="es" />
    </>
  );
}
