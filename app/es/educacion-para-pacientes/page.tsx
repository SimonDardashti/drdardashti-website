import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://www.drdardashti.com/es/educacion-para-pacientes";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Recursos de Educación para Pacientes | Dr. Simon Dardashti" },
  description:
    "Recursos educativos para ayudarlo a comprender condiciones de dolor, opciones de tratamiento, enfoques de cuidado conservador y procedimientos médicos.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Recursos de Educación para Pacientes | Dr. Simon Dardashti",
    description:
      "Recursos educativos para ayudarlo a comprender condiciones de dolor, opciones de tratamiento, enfoques de cuidado conservador y procedimientos médicos.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Dr. Simon Dardashti" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recursos de Educación para Pacientes | Dr. Simon Dardashti",
    description:
      "Recursos educativos para ayudarlo a comprender condiciones de dolor, opciones de tratamiento, enfoques de cuidado conservador y procedimientos médicos.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Recursos de Educación para Pacientes | Dr. Simon Dardashti",
  url: PAGE_URL,
  description:
    "Recursos educativos para ayudarlo a comprender condiciones de dolor, opciones de tratamiento, enfoques de cuidado conservador y procedimientos médicos.",
  inLanguage: "es-ES",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Educación para Pacientes", item: PAGE_URL },
    ],
  },
};

export default function EducacionPacientesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      {/* HERO */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Recursos Educativos
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Educación
            <br />
            <em className="not-italic text-[#888]">para Pacientes.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Recursos educativos para ayudarlo a comprender condiciones de dolor, opciones de tratamiento, cuidados conservadores y procedimientos.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-20">
          {/* COMPRENSIÓN DEL DOLOR */}
          <div>
            <h2 className="text-2xl font-bold text-[#0a0a0a] mb-8" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Comprensión del Dolor
            </h2>
            <div className="space-y-4">
              <Link href="/es/dolor-sin-imagenes" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Dolor Sin Hallazgos en Imágenes</h3>
                <p className="text-[#666] text-sm leading-relaxed">Muchos pacientes experimentan dolor significativo a pesar de imágenes normales. Comprenda por qué los hallazgos de imagen no siempre se correlacionan con síntomas.</p>
              </Link>
              <Link href="/es/opciones-de-tratamiento" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Opciones de Tratamiento</h3>
                <p className="text-[#666] text-sm leading-relaxed">Descripción general de cuidados conservadores, procedimientos intervencionistas y consideraciones quirúrgicas en la toma de decisiones sobre manejo del dolor.</p>
              </Link>
              <Link href="/es/segunda-opinion-cirugia-columna" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Segunda Opinión Antes de Cirugía de Columna</h3>
                <p className="text-[#666] text-sm leading-relaxed">Por qué buscar una segunda opinión antes de cirugía espinal es importante y qué esperar durante una evaluación independiente.</p>
              </Link>
            </div>
          </div>

          {/* PREPARANDO SU VISITA */}
          <div>
            <h2 className="text-2xl font-bold text-[#0a0a0a] mb-8" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Preparando su Visita
            </h2>
            <div className="space-y-4">
              <Link href="/es/que-esperar-consulta-dolor" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Qué Esperar Durante su Consulta de Dolor</h3>
                <p className="text-[#666] text-sm leading-relaxed">Guía del proceso de evaluación del dolor, qué registros traer, componentes del examen y cómo se toman decisiones de tratamiento.</p>
              </Link>
              <Link href="/virtual-consultations" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Consultas Virtuales</h3>
                <p className="text-[#666] text-sm leading-relaxed">Información sobre consultas de medicina del dolor por telehealth, cómo funcionan y qué preparar.</p>
              </Link>
            </div>
          </div>

          {/* CUIDADOS CONSERVADORES */}
          <div>
            <h2 className="text-2xl font-bold text-[#0a0a0a] mb-8" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Cuidados Conservadores
            </h2>
            <div className="space-y-4">
              <Link href="/es/cuidados-conservadores" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Tratamientos Conservadores para el Dolor Crónico</h3>
                <p className="text-[#666] text-sm leading-relaxed">Descripción general de terapia física, ejercicio, terapias mente-cuerpo y enfoques de estilo de vida para el manejo del dolor.</p>
              </Link>
              <Link href="/articles/aquatic-therapy-arthritis" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Terapia Física Acuática</h3>
                <p className="text-[#666] text-sm leading-relaxed">Cómo la terapia acuática reduce el estrés de soporte de peso mientras proporciona resistencia para fortalecimiento y manejo del dolor.</p>
              </Link>
              <Link href="/es/ejercicios-mcgill-big-3" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Ejercicios McGill Big 3</h3>
                <p className="text-[#666] text-sm leading-relaxed">Ejercicios de estabilidad espinal basados en evidencia: técnica adecuada, errores comunes, quién se beneficia y contraindicaciones.</p>
              </Link>
              <Link href="/es/rodillo-espuma-toracica" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Rodillo de Espuma Torácica</h3>
                <p className="text-[#666] text-sm leading-relaxed">Mejorando la movilidad de la espalda superior para reducir el dolor de cuello y hombro. Técnica, beneficios y precauciones.</p>
              </Link>
            </div>
          </div>

          {/* CONDICIONES DE LA COLUMNA */}
          <div>
            <h2 className="text-2xl font-bold text-[#0a0a0a] mb-8" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Condiciones de la Columna Vertebral
            </h2>
            <div className="space-y-4">
              <Link href="/es/condiciones/dolor-lumbar" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Evaluación de Dolor de Espalda Baja</h3>
                <p className="text-[#666] text-sm leading-relaxed">Enfoque integral para evaluar el dolor de espalda baja, desde el diagnóstico hasta la toma de decisiones de tratamiento.</p>
              </Link>
              <Link href="/es/condiciones/dolor-de-cuello" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Evaluación de Dolor de Cuello</h3>
                <p className="text-[#666] text-sm leading-relaxed">Evaluación de las causas del dolor de cuello, relación con la postura y función, y enfoques de tratamiento.</p>
              </Link>
              <Link href="/es/condiciones/radiculopatia-lumbar" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Radiculopatía Lumbar</h3>
                <p className="text-[#666] text-sm leading-relaxed">Comprensión de la irritación de la raíz nerviosa en la columna lumbar, síntomas, consideraciones de imagen y manejo.</p>
              </Link>
              <Link href="/es/condiciones/radiculopatia-cervical" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Radiculopatía Cervical</h3>
                <p className="text-[#666] text-sm leading-relaxed">Compresión de nervios en el cuello, cómo se presenta, por qué persisten los síntomas y enfoque de evaluación.</p>
              </Link>
              <Link href="/es/condiciones/estenosis-espinal-lumbar" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Estenosis Espinal Lumbar</h3>
                <p className="text-[#666] text-sm leading-relaxed">Estrechamiento del canal espinal, cómo se relaciona con síntomas y por qué inclinarse hacia adelante proporciona alivio.</p>
              </Link>
              <Link href="/es/condiciones/dolor-persistente-despues-cirugia-columna" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Dolor Persistente Después de Cirugía de Columna</h3>
                <p className="text-[#666] text-sm leading-relaxed">Comprensión de síntomas continuos después de intervención quirúrgica, estrategias de evaluación y opciones de manejo.</p>
              </Link>
              <Link href="/es/condiciones/cefalea-cervicogenica" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Cefalea Cervicogénica</h3>
                <p className="text-[#666] text-sm leading-relaxed">Cuando los problemas del cuello causan dolor de cabeza, cómo diferenciar de la migraña y enfoques de tratamiento.</p>
              </Link>
              <Link href="/es/condiciones/sindrome-latigazo-cervical" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Síndrome de Latigazo Cervical</h3>
                <p className="text-[#666] text-sm leading-relaxed">Evaluación médica y manejo del dolor de cuello después de colisión de vehículo motor u otra lesión.</p>
              </Link>
            </div>
          </div>

          {/* PROCEDIMIENTOS */}
          <div>
            <h2 className="text-2xl font-bold text-[#0a0a0a] mb-8" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Procedimientos e Intervenciones
            </h2>
            <div className="space-y-4">
              <Link href="/es/procedimientos/inyecciones-epidurales-de-esteroides" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Inyecciones Epidurales de Esteroides</h3>
                <p className="text-[#666] text-sm leading-relaxed">Cómo funcionan las inyecciones epidurales, cuándo se consideran, qué esperar y expectativas realistas.</p>
              </Link>
              <Link href="/es/procedimientos/ablacion-por-radiofrecuencia" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Ablación por Radiofrecuencia</h3>
                <p className="text-[#666] text-sm leading-relaxed">Procedimiento avanzado dirigido a fibras nerviosas generadoras de dolor, cuándo es apropiado y resultados esperados.</p>
              </Link>
              <Link href="/es/procedimientos/bloqueos-de-rama-medial" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Inyecciones Articulares y Bloqueos de Rama Medial</h3>
                <p className="text-[#666] text-sm leading-relaxed">Inyecciones diagnósticas y terapéuticas para condiciones de dolor mediadas por faceta.</p>
              </Link>
              <Link href="/es/procedimientos/inyecciones-articulacion-sacroiliaca" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Inyecciones de Articulación Sacroiliaca</h3>
                <p className="text-[#666] text-sm leading-relaxed">Tratamiento para el dolor de la articulación sacroiliaca, cuándo es apropiado y qué esperar.</p>
              </Link>
              <Link href="/es/procedimientos/inyecciones-puntos-gatillo" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Inyecciones de Puntos Gatillo</h3>
                <p className="text-[#666] text-sm leading-relaxed">Técnica de inyección para el dolor miofascial, cuándo se usa y función en el manejo general del dolor.</p>
              </Link>
              <Link href="/es/procedimientos/bloqueos-nervios-perifericos" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Bloqueos de Nervios Periféricos</h3>
                <p className="text-[#666] text-sm leading-relaxed">Bloqueos nerviosos diagnósticos y terapéuticos para varias condiciones de dolor.</p>
              </Link>
            </div>
          </div>

          {/* RECURSOS ADICIONALES */}
          <div>
            <h2 className="text-2xl font-bold text-[#0a0a0a] mb-8" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Recursos Adicionales
            </h2>
            <div className="space-y-4">
              <Link href="/es/articulos" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Centro de Artículos y Recursos</h3>
                <p className="text-[#666] text-sm leading-relaxed">Colección de artículos educativos sobre manejo del dolor, cuidados conservadores y enfoques basados en evidencia.</p>
              </Link>
              <Link href="/es/condiciones" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Todas las Condiciones</h3>
                <p className="text-[#666] text-sm leading-relaxed">Directorio completo de condiciones de dolor evaluadas, organizadas por tipo y región del cuerpo.</p>
              </Link>
              <Link href="/es/procedimientos" className="block border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors">
                <h3 className="font-bold text-[#0a0a0a] mb-2">Todos los Procedimientos</h3>
                <p className="text-[#666] text-sm leading-relaxed">Descripción general completa de procedimientos de tratamiento intervencionista y conservador ofrecidos.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
