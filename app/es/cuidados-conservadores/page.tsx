import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://www.drdardashti.com/es/cuidados-conservadores";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Tratamientos Conservadores para el Dolor Crónico | Dr. Simon Dardashti" },
  description:
    "Enfoques basados en evidencia para el cuidado conservador del dolor crónico: terapia física, ejercicio, terapias mente-cuerpo y enfoques de estilo de vida.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Tratamientos Conservadores para el Dolor Crónico | Dr. Simon Dardashti",
    description:
      "Enfoques basados en evidencia para el cuidado conservador del dolor crónico: terapia física, ejercicio, terapias mente-cuerpo y enfoques de estilo de vida.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Dr. Simon Dardashti" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tratamientos Conservadores para el Dolor Crónico | Dr. Simon Dardashti",
    description:
      "Enfoques basados en evidencia para el cuidado conservador del dolor crónico: terapia física, ejercicio, terapias mente-cuerpo y enfoques de estilo de vida.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Tratamientos Conservadores para el Dolor Crónico | Dr. Simon Dardashti",
  url: PAGE_URL,
  description:
    "Enfoques basados en evidencia para el cuidado conservador del dolor crónico: terapia física, ejercicio, terapias mente-cuerpo y enfoques de estilo de vida.",
  inLanguage: "es-ES",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Cuidados Conservadores", item: PAGE_URL },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es el cuidado conservador?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El cuidado conservador se refiere a enfoques no quirúrgicos y sin inyecciones para manejar el dolor. Estos incluyen terapia física, ejercicio, terapias mente-cuerpo y modificaciones del estilo de vida. El cuidado conservador es a menudo un enfoque de tratamiento inicial apropiado para muchas condiciones de dolor crónico.",
      },
    },
    {
      "@type": "Question",
      name: "¿El cuidado conservador siempre es efectivo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La respuesta al cuidado conservador varía entre los pacientes. Algunos pacientes experimentan mejoras significativas solo con enfoques conservadores. Otros se benefician del cuidado conservador combinado con intervenciones adicionales. Se necesita una evaluación clínica formal para determinar el tratamiento apropiado para cualquier paciente individual.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo tarda el cuidado conservador en funcionar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La mejoría varía según el diagnóstico y las circunstancias individuales. Acuerde metas funcionales y un plan de reevaluación con su médico. El empeoramiento o los síntomas nuevos pueden requerir revisión más pronta; no existe un plazo universal antes de reevaluar.",
      },
    },
    {
      "@type": "Question",
      name: "¿Debo intentar cuidado conservador antes de considerar inyecciones o cirugía?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El cuidado conservador es a menudo un enfoque inicial apropiado para muchas condiciones de dolor. Sin embargo, la secuencia y el tiempo apropiados del tratamiento dependen del diagnóstico específico, la gravedad de los síntomas y las circunstancias individuales. Una evaluación clínica puede ayudar a determinar el mejor enfoque para su situación.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puede el cuidado conservador prevenir la necesidad de cirugía?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El cuidado conservador puede ayudar a algunos pacientes a evitar la cirugía, mientras que otros eventualmente requieren evaluación quirúrgica o intervencionista a pesar de los esfuerzos conservadores. El papel del cuidado conservador en la prevención de cirugía depende de la condición específica y la respuesta individual al tratamiento.",
      },
    },
    {
      "@type": "Question",
      name: "¿Hay condiciones donde el cuidado conservador solo no es apropiado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Algunos síntomas requieren valoración pronta en lugar de un programa rutinario de rehabilitación. Con dolor de espalda, los cambios nuevos del control intestinal o de la vejiga, o el entumecimiento alrededor de los genitales o del ano, requieren atención de emergencia. La debilidad progresiva requiere valoración pronta. Un médico debe determinar si la rehabilitación es apropiada.",
      },
    },
    {
      "@type": "Question",
      name: "¿La terapia física siempre es necesaria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La terapia física es beneficiosa para muchas condiciones de dolor, pero no todos los pacientes requieren terapia física formal. Algunos pacientes se benefician de programas de ejercicio en el hogar. Otros pueden beneficiarse de una combinación de enfoques. Una evaluación clínica y discusión con un fisioterapeuta puede ayudar a determinar el mejor enfoque.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo hacer cuidado conservador por mi cuenta, o necesito orientación profesional?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La orientación profesional puede ayudar a identificar ejercicios apropiados y vigilar la técnica y la respuesta. Un programa en el hogar puede ser apropiado después de una evaluación, con un plan de seguimiento. La orientación no garantiza un resultado específico.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué debo hacer si el cuidado conservador no está ayudando?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Consulte con su médico sobre síntomas persistentes, barreras para participar o empeoramiento. Revise el diagnóstico, el programa, las metas funcionales y las alternativas. Los síntomas neurológicos nuevos o de emergencia requieren valoración más pronta o inmediata, sin esperar a terminar un curso rutinario.",
      },
    },
  ],
};

export default function CuidadosConservadoresPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Cuidados Conservadores
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Tratamientos Conservadores
            <br />
            <em className="not-italic text-[#888]">para el Dolor Crónico.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Terapia física, ejercicio, terapias mente-cuerpo y enfoques de estilo de vida ofrecen opciones basadas en evidencia para manejar el dolor crónico sin cirugía ni inyecciones.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* 01 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-2">
              <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>01</span>
              <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Por Qué</p>
            </div>
            <div className="md:col-span-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Por Qué Importa el Cuidado Conservador.
              </h2>
              <p className="text-[#666] text-base leading-relaxed mb-4 max-w-2xl">
                El cuidado conservador—enfoques no quirúrgicos y sin inyecciones—es a menudo una estrategia de tratamiento inicial apropiada para muchas condiciones de dolor crónico. La terapia física, el ejercicio, las intervenciones mente-cuerpo y las modificaciones del estilo de vida tienen evidencia que respalda su papel en el manejo del dolor y la mejora de la función.
              </p>
              <p className="text-[#666] text-base leading-relaxed mb-4 max-w-2xl">
                No todos los pacientes requieren inyecciones o cirugía. Muchos pacientes logran mejoras significativas con enfoques conservadores. Sin embargo, la respuesta varía entre individuos, y algunos pacientes eventualmente se benefician de intervenciones adicionales cuando el cuidado conservador solo es insuficiente.
              </p>
              <p className="text-[#666] text-base leading-relaxed max-w-2xl">
                El papel del cuidado conservador se determina por el diagnóstico específico, la presentación clínica, la gravedad de los síntomas y la respuesta individual al tratamiento.
              </p>
            </div>
          </div>

          {/* 02 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-2">
              <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>02</span>
              <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Terapia</p>
            </div>
            <div className="md:col-span-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Terapia Física.
              </h2>
              <p className="text-[#666] text-base leading-relaxed mb-4 max-w-2xl">
                La terapia física se enfoca en restaurar la función, mejorar la movilidad y manejar el dolor a través de ejercicios dirigidos, técnicas manuales y entrenamiento funcional. Un fisioterapeuta licenciado personaliza el enfoque basado en su diagnóstico, hallazgos del examen y objetivos funcionales.
              </p>
              <p className="text-[#666] text-base leading-relaxed mb-4 max-w-2xl">
                La participación y la técnica importan, pero no existe una duración única que defina un curso adecuado de terapia para toda condición. Revise los síntomas y la función con su médico y ajuste el programa según su respuesta.
              </p>
            </div>
          </div>

          {/* 03 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-2">
              <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>03</span>
              <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Acuática</p>
            </div>
            <div className="md:col-span-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Terapia Física Acuática.
              </h2>
              <p className="text-[#666] text-base leading-relaxed mb-4 max-w-2xl">
                La terapia acuática utiliza la flotabilidad, resistencia y calidez del agua para facilitar el ejercicio y el entrenamiento de movilidad. El ambiente con peso reducido puede facilitar el movimiento para algunos pacientes mientras proporciona resistencia para el fortalecimiento. La terapia acuática a menudo se combina con terapia física en tierra.
              </p>
            </div>
          </div>

          {/* 04 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-2">
              <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>04</span>
              <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Ejercicio</p>
            </div>
            <div className="md:col-span-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Programas de Ejercicio Específicos.
              </h2>
              <p className="text-[#666] text-base leading-relaxed mb-4 max-w-2xl">
                Los programas de ejercicio dirigidos abordan deficiencias funcionales específicas y generadores de dolor. La evidencia respalda enfoques de ejercicio específicos para muchas condiciones de dolor. Los programas pueden enfocarse en estabilidad espinal, fuerza central, movilidad o patrones de movimiento funcional dependiendo del diagnóstico.
              </p>
              <p className="text-[#666] text-base leading-relaxed max-w-2xl">
                Obtenga más información sobre enfoques de ejercicio basados en evidencia: <Link href="/es/ejercicios-mcgill-big-3" className="text-[#c8a020] hover:underline">Ejercicios McGill Big 3 para Dolor de Espalda Baja</Link> y <Link href="/es/rodillo-espuma-toracica" className="text-[#c8a020] hover:underline">Rodillo de Espuma Torácica para Movilidad de la Espalda Superior</Link>.
              </p>
            </div>
          </div>

          {/* 05 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-2">
              <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>05</span>
              <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Modalidades</p>
            </div>
            <div className="md:col-span-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Modalidades Terapéuticas y Técnicas.
              </h2>
              <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
                Terapias adicionales que pueden apoyar el cuidado conservador incluyen:
              </p>
              <ul className="space-y-3 max-w-2xl mb-4">
                {[
                  "Tai Chi — equilibrio, flexibilidad y conciencia mente-cuerpo",
                  "Acupuntura — puede ayudar a reducir la percepción del dolor para algunos pacientes",
                  "Cuidado quiropáctico — manipulación espinal y terapias manuales",
                  "Meditación y Atención Plena — manejo del dolor y el estrés",
                  "Terapia Cognitivo-Conductual (TCC) — aborda pensamientos y comportamientos relacionados con el dolor",
                  "Biorretroalimentación — entrena la conciencia corporal y la autorregulación",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                    <span className="text-[#555] text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[#666] text-base leading-relaxed max-w-2xl">
                La base de evidencia y la efectividad varían para diferentes modalidades. Un médico puede ayudar a determinar qué enfoques se alinean con su diagnóstico y necesidades clínicas.
              </p>
            </div>
          </div>

          {/* 06 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-2">
              <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>06</span>
              <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Combinando</p>
            </div>
            <div className="md:col-span-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Combinando Enfoques Conservadores.
              </h2>
              <p className="text-[#666] text-base leading-relaxed mb-4 max-w-2xl">
                El enfoque más efectivo a menudo combina múltiples estrategias conservadoras. Por ejemplo, un paciente con dolor de espalda baja podría beneficiarse de terapia física, ejercicios de estabilización específicos, prácticas de atención plena y modificación de actividades trabajando juntas.
              </p>
              <p className="text-[#666] text-base leading-relaxed max-w-2xl">
                La coordinación entre profesionales puede ayudar a aclarar metas, revisar el progreso y ajustar el plan general; no garantiza su eficacia.
              </p>
            </div>
          </div>

          {/* 07 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-2">
              <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>07</span>
              <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Cuándo</p>
            </div>
            <div className="md:col-span-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Cuando el Cuidado Conservador Solo Puede No Ser Suficiente.
              </h2>
              <p className="text-[#666] text-base leading-relaxed mb-4 max-w-2xl">
                Aunque muchos pacientes se benefician significativamente del cuidado conservador, algunas condiciones o presentaciones clínicas pueden requerir evaluación adicional o intervención. Esto podría incluir procedimientos de diagnóstico, inyecciones dirigidas o, en casos seleccionados, intervención quirúrgica.
              </p>
              <p className="text-[#666] text-base leading-relaxed mb-4 max-w-2xl">
                La necesidad de intervenciones adicionales depende del diagnóstico específico, la gravedad de los síntomas, la duración de los síntomas y la respuesta individual al tratamiento conservador. Una evaluación clínica integral ayuda a determinar la ruta de tratamiento apropiada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#999] uppercase tracking-widest">Preguntas</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-8" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Preguntas Frecuentes.
            </h2>
            <div className="space-y-6">
              {faqSchema.mainEntity.map((item, i) => (
                <div key={i}>
                  <h3 className="font-bold text-[#0a0a0a] mb-2">{item.name}</h3>
                  <p className="text-[#666] text-sm leading-relaxed">{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#999] uppercase tracking-widest">Relacionado</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-base font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Recursos Relacionados.
            </h2>
            <ul className="space-y-3 text-sm">
              <li><Link href="/es/ejercicios-mcgill-big-3" className="text-[#c8a020] hover:underline tracking-wide">Ejercicios McGill Big 3 para Dolor de Espalda Baja →</Link></li>
              <li><Link href="/es/rodillo-espuma-toracica" className="text-[#c8a020] hover:underline tracking-wide">Rodillo de Espuma Torácica para Dolor de Cuello y Hombro →</Link></li>
              <li><Link href="/aquatic-therapy-arthritis" className="text-[#c8a020] hover:underline tracking-wide">Terapia Acuática para Manejo del Dolor →</Link></li>
              <li><Link href="/es/dolor-sin-imagenes" className="text-[#c8a020] hover:underline tracking-wide">Dolor Sin Hallazgos en Imágenes →</Link></li>
              <li><Link href="/es/opciones-de-tratamiento" className="text-[#c8a020] hover:underline tracking-wide">Marco de Decisión de Tratamiento →</Link></li>
              <li><Link href="/es/condiciones/dolor-lumbar" className="text-[#c8a020] hover:underline tracking-wide">Evaluación de Dolor de Espalda Baja →</Link></li>
              <li><Link href="/es/condiciones/dolor-de-cuello" className="text-[#c8a020] hover:underline tracking-wide">Evaluación de Dolor de Cuello →</Link></li>
              <li><Link href="/virtual-consultations" className="text-[#c8a020] hover:underline tracking-wide">Agendar Consulta Virtual →</Link></li>
            </ul>
          </div>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-6 py-12"><h2 className="text-2xl font-bold mb-4">Fuentes y alcance</h2><ul className="list-disc pl-6 space-y-2"><li><a className="text-blue-600 underline" href="https://www.nice.org.uk/guidance/ng59/chapter/Recommendations">NICE NG59: Low back pain and sciatica in over 16s: assessment and management</a></li><li><a className="text-blue-600 underline" href="https://www.nhs.uk/conditions/back-pain/">NHS: Back pain</a></li><li><a className="text-blue-600 underline" href="https://pubmed.ncbi.nlm.nih.gov/28192789/">Noninvasive Treatments for Acute, Subacute, and Chronic Low Back Pain: A Clinical Practice Guideline From the American College of Physicians</a></li></ul><p className="mt-4 text-gray-700">Las guías NICE y ACP citadas tratan el dolor lumbar; las recomendaciones dependen de la condición y pueden diferir. No son reglas universales para todo dolor ni una garantía de respuesta. Esta página es educativa y no sustituye una valoración individual.</p></section>
    </>
  );
}
