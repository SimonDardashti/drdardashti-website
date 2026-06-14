import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://www.drdardashti.com/es/procedimientos/inyecciones-puntos-gatillo";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Inyecciones en Puntos Gatillo | Simon Dardashti, MD" },
  description:
    "Información educativa en español sobre inyecciones en puntos gatillo para dolor miofascial y condiciones de dolor relacionado con músculos.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Inyecciones en Puntos Gatillo | Simon Dardashti, MD",
    description:
      "Información educativa en español sobre inyecciones en puntos gatillo para dolor miofascial y condiciones de dolor relacionado con músculos.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inyecciones en Puntos Gatillo | Simon Dardashti, MD",
    description:
      "Información educativa en español sobre inyecciones en puntos gatillo para dolor miofascial y condiciones de dolor relacionado con músculos.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Inyecciones en Puntos Gatillo | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Información educativa en español sobre inyecciones en puntos gatillo para dolor miofascial y condiciones de dolor relacionado con músculos.",
  inLanguage: "es",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  about: {
    "@type": "MedicalProcedure",
    name: "Inyección en Punto Gatillo",
    procedureType: "https://schema.org/TherapeuticProcedure",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Español", item: `${SITE_URL}/es` },
      { "@type": "ListItem", position: 3, name: "Procedimientos", item: `${SITE_URL}/es/procedimientos` },
      { "@type": "ListItem", position: 4, name: "Inyecciones en Puntos Gatillo", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "Inyección localizada",
    body: "Inyección de medicamento directamente en un punto gatillo en el músculo para abordar la tensión muscular localizada y el dolor miofascial.",
  },
  {
    heading: "Para pacientes seleccionados",
    body: "Puede considerarse en pacientes seleccionados con dolor miofascial cuando la evaluación clínica y otros enfoques conservadores lo apoyan.",
  },
  {
    heading: "Respuesta variable",
    body: "La respuesta al alivio del dolor varía entre pacientes. El procedimiento no es apropiado para todos los pacientes.",
  },
];

export default function InyeccionesPuntosGatilloPage() {
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
            Inyecciones en Puntos
            <br />
            <em className="not-italic text-[#888]">Gatillo.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Las inyecciones en puntos gatillo se utilizan para abordar el dolor miofascial y condiciones de dolor relacionado con músculos. Se requiere una evaluación clínica formal para determinar si este procedimiento es apropiado.
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
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>¿Qué es un punto gatillo?</h2>
            <p>
              Un punto gatillo es una zona hiperiritable en un músculo que puede causar dolor local y dolor referido. Cuando se aplica presión al punto gatillo, puede provocar sensibilidad o reproducir el dolor del paciente. Los puntos gatillo son parte del diagnóstico clínico del dolor miofascial.
            </p>
            <p>
              Las inyecciones en puntos gatillo implican inyectar medicamento directamente en el punto gatillo en el músculo. El objetivo es aliviar la tensión muscular localizada y el dolor miofascial asociado.
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
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>¿Cuándo pueden considerarse las inyecciones en puntos gatillo?</h2>
            <p>
              Las inyecciones en puntos gatillo pueden considerarse en pacientes seleccionados con:
            </p>
            <ul className="space-y-3 max-w-2xl mb-6">
              {[
                "Dolor miofascial con puntos gatillo identificables",
                "Tensión muscular localizada que no ha mejorado con enfoques conservadores",
                "Síntomas lo suficientemente significativos para justificar evaluación de procedimiento",
                "Evaluación clínica que apoya el uso de este enfoque",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm max-w-2xl">
              Las inyecciones en puntos gatillo no son apropiadas para todos los pacientes con dolor muscular. Se requiere una evaluación clínica para determinar si el procedimiento es apropiado.
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
              El punto gatillo se identifica mediante palpación o guía de imagen. Una vez identificado, se inyecta una pequeña cantidad de medicamento directamente en el punto gatillo en el músculo. El procedimiento típicamente toma 10 a 20 minutos.
            </p>
            <p>
              Los pacientes se monitorean brevemente después del procedimiento y generalmente se van a casa el mismo día. Se puede usar anestésico local, medicamento solo o una combinación, dependiendo de la situación clínica específica.
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
              La respuesta a las inyecciones en puntos gatillo varía entre pacientes. Algunos pacientes experimentan alivio del dolor dentro de horas o días, mientras que otros pueden tomar más tiempo o no experimentar alivio significativo. La respuesta depende de la cronicidad y severidad de la condición, qué músculos están involucrados, y factores individuales.
            </p>
            <p>
              En algunos casos, pueden considerarse múltiples inyecciones en diferentes puntos gatillo durante el tiempo. El número y frecuencia de inyecciones depende de la evaluación clínica y la respuesta del paciente.
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
              La respuesta a las inyecciones en puntos gatillo es variable y depende de muchos factores. El procedimiento no es apropiado para todos los pacientes con dolor muscular. Se requiere una evaluación clínica formal para determinar si el procedimiento es apropiado.
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
              <li><Link href="/procedures/trigger-point-injections" className="text-[#c8a020] hover:underline tracking-wide">Página en inglés →</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
