import type { Metadata } from "next";
import Link from "next/link";
import MedicalReviewFooter from "@/components/MedicalReviewFooter";

const PAGE_URL = "https://www.drdardashti.com/es/procedimientos/bloqueos-nervios-perifericos";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Bloqueos de Nervios Periféricos | Simon Dardashti, MD" },
  description:
    "Información educativa en español sobre bloqueos de nervios periféricos para evaluación y tratamiento de dolor relacionado con nervios periféricos.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Bloqueos de Nervios Periféricos | Simon Dardashti, MD",
    description:
      "Información educativa en español sobre bloqueos de nervios periféricos para evaluación y tratamiento de dolor relacionado con nervios periféricos.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bloqueos de Nervios Periféricos | Simon Dardashti, MD",
    description:
      "Información educativa en español sobre bloqueos de nervios periféricos para evaluación y tratamiento de dolor relacionado con nervios periféricos.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Bloqueos de Nervios Periféricos | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Información educativa en español sobre bloqueos de nervios periféricos para evaluación y tratamiento de dolor relacionado con nervios periféricos.",
  inLanguage: "es",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  about: {
    "@type": "MedicalProcedure",
    name: "Bloqueo de Nervio Periférico",
    procedureType: "https://schema.org/TherapeuticProcedure",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Español", item: `${SITE_URL}/es` },
      { "@type": "ListItem", position: 3, name: "Procedimientos", item: `${SITE_URL}/es/procedimientos` },
      { "@type": "ListItem", position: 4, name: "Bloqueos de Nervios Periféricos", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "Bloqueo de nervio dirigido",
    body: "Inyección de anestésico local alrededor de un nervio periférico específico para adormecer el área y evaluar o aliviar el dolor del nervio.",
  },
  {
    heading: "Para condiciones seleccionadas",
    body: "Puede considerarse en pacientes seleccionados con dolor de nervio periférico cuando la evaluación clínica lo respalda.",
  },
  {
    heading: "Respuesta variable",
    body: "La respuesta varía entre pacientes. La duración del alivio y los resultados dependen de la condición específica.",
  },
];

export default function BloqueoNerviosPerifericosPage() {
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
            Bloqueos de Nervios
            <br />
            <em className="not-italic text-[#888]">Periféricos.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Los bloqueos de nervios periféricos son procedimientos que administran anestésico local alrededor de un nervio periférico específico para evaluar y posiblemente aliviar el dolor relacionado. Se requiere una evaluación clínica formal para determinar si el procedimiento es apropiado.
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
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>¿Qué son los bloqueos de nervios periféricos?</h2>
            <p>
              Los nervios periféricos son nervios que se extienden desde la médula espinal hacia los brazos, manos, piernas y pies. Cuando estos nervios se irritan, se comprimen o se lesionan, pueden causar dolor, entumecimiento, hormigueo u otros síntomas.
            </p>
            <p>
              Los bloqueos de nervios periféricos son procedimientos que inyectan anestésico local alrededor de un nervio periférico específico. El objetivo es adormecer el área y evaluar si el nervio es una fuente de dolor, y potencialmente proporcionar alivio temporal.
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
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>¿Cuándo pueden considerarse?</h2>
            <p>
              Los bloqueos de nervios periféricos pueden considerarse en pacientes seleccionados con:
            </p>
            <ul className="space-y-3 max-w-2xl mb-6">
              {[
                "Dolor neuropático periférico o sospecha de irritación de nervios periféricos",
                "Dolor que irradia por un patrón de distribución de nervio específico",
                "Síntomas que no han mejorado adecuadamente con tratamiento conservador",
                "Necesidad de evaluación diagnóstica para identificar la fuente del dolor",
                "Evaluación clínica que respalda la consideración del procedimiento",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm max-w-2xl">
              Los bloqueos de nervios periféricos no son apropiados para todos los pacientes. Se requiere una evaluación clínica para determinar la idoneidad.
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
              El procedimiento generalmente se realiza bajo guía de ultrasonido o fluoroscopia para permitir una identificación precisa del nervio objetivo. La piel se limpia y se adormece con anestésico local. Bajo visualización de imagen, se inyecta anestésico local alrededor del nervio específico.
            </p>
            <p>
              El procedimiento típicamente toma un tiempo corto. Los pacientes se monitorean brevemente después y generalmente se van a casa el mismo día. El alivio del dolor, si ocurre, generalmente comienza dentro de minutos a una hora cuando el anestésico se difunde alrededor del nervio.
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
              La respuesta a los bloqueos de nervios periféricos varía entre pacientes. Algunos experimentan alivio del dolor temporal, mientras que otros pueden no experimentar beneficio significativo. Cuando hay una respuesta diagnóstica positiva a anestésico local, esto puede indicar que el nervio bloqueado es una fuente del dolor.
            </p>
            <p>
              La duración del alivio varía — típicamente desde horas hasta días. En pacientes seleccionados con una respuesta positiva, se pueden considerar procedimientos repetidos u opciones de tratamiento adicionales según la evaluación clínica continua.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 — PROPÓSITO DIAGNÓSTICO Y TERAPÉUTICO */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>05</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Propósito</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Propósito diagnóstico y terapéutico.</h2>
            <p>
              Los bloqueos de nervios periféricos sirven dos propósitos potenciales. Desde una perspectiva diagnóstica, si el dolor del paciente disminuye significativamente después del bloqueo, esto sugiere que el nervio bloqueado es una fuente del dolor y puede ayudar a guiar futuras decisiones de tratamiento.
            </p>
            <p>
              Desde una perspectiva terapéutica, el bloqueo mismo puede proporcionar alivio temporal. En pacientes seleccionados con una respuesta beneficiosa, se pueden considerar procedimientos o tratamientos adicionales.
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
              La respuesta a los bloqueos de nervios periféricos es variable y depende de muchos factores. El procedimiento no es apropiado para todos los pacientes. Se requiere una evaluación clínica formal para determinar la idoneidad.
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
              <li><Link href="/procedures/peripheral-nerve-blocks" className="text-[#c8a020] hover:underline tracking-wide">Página en inglés →</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* REVISIÓN MÉDICA */}
      <MedicalReviewFooter path="/es/procedimientos/bloqueos-nervios-perifericos" locale="es" />
    </>
  );
}
