import type { Metadata } from "next";
import Link from "next/link";
import MedicalReviewFooter from "@/components/MedicalReviewFooter";

const PAGE_URL = "https://www.drdardashti.com/es/segunda-opinion-cirugia-columna";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Segunda Opinión Antes de Cirugía de Columna | Simon Dardashti, MD" },
  description:
    "Guía para entender cuándo una segunda opinión es razonable antes de cirugía de columna, qué preguntas hacer al cirujano, y cómo evaluar recomendaciones quirúrgicas.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "¿Cuándo Debe Obtener una Segunda Opinión Antes de Cirugía de Columna?",
    description:
      "Entienda cuándo una segunda opinión es razonable antes de cirugía, qué preguntas hacer a su cirujano, y cómo evaluar sus opciones de tratamiento.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Segunda Opinión Antes de Cirugía de Columna | Simon Dardashti, MD",
    description:
      "Entendiendo recomendaciones quirúrgicas: cuándo las segundas opiniones son razonables y qué preguntas hacer.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalWebPage", "Article"],
  name: "¿Cuándo Debe Obtener una Segunda Opinión Antes de Cirugía de Columna?",
  url: PAGE_URL,
  headline: "¿Cuándo Debe Obtener una Segunda Opinión Antes de Cirugía de Columna?",
  description:
    "Guía completa para entender recomendaciones de cirugía de columna, cuándo las segundas opiniones son razonables, y cómo evaluar sus opciones de tratamiento.",
  image: "https://www.drdardashti.com/headshot.webp",
  datePublished: "2026-06-18",
  dateModified: "2026-10-13",
  author: {
    "@type": "Person",
    name: "Simon Dardashti, MD",
    title: "Médico Especialista en Medicina del Dolor Certificado",
    url: SITE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: "Simon Dardashti, MD",
  },
  inLanguage: "es",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuándo es razonable obtener una segunda opinión antes de cirugía de columna?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Una segunda opinión puede ayudar a aclarar una recomendación quirúrgica electiva, los beneficios esperados, los riesgos y las alternativas. Pregunte al equipo tratante si es seguro esperar. No retrase una valoración de emergencia o un tratamiento urgente para obtener una segunda opinión rutinaria.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuándo la cirugía de columna es claramente necesaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Las decisiones quirúrgicas requieren valoración individual de los síntomas, la exploración, las imágenes y los beneficios y riesgos esperados. Los cambios nuevos del control intestinal o de la vejiga, o el entumecimiento alrededor de los genitales o del ano, requieren atención de emergencia. La debilidad progresiva requiere valoración pronta. Estos síntomas requieren evaluación y no establecen por sí solos la operación necesaria.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo sé si el cuidado conservador ha sido intentado adecuadamente?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La suficiencia del cuidado depende del diagnóstico, la evolución clínica, las metas funcionales, el tratamiento recibido, la respuesta y las contraindicaciones. Revise estos aspectos con su médico. No existe un número mínimo universal de semanas o visitas, y la rehabilitación rutinaria no debe retrasar una valoración urgente.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué preguntas debo hacer a un cirujano antes de acordar cirugía?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pregunte qué diagnóstico y hallazgos apoyan la recomendación, qué busca cambiar la operación, qué beneficios y riesgos son pertinentes para usted, qué alternativas existen y qué ocurre si espera. Pregunte cómo se mide la mejoría y qué seguimiento existe si persisten los síntomas. La conversación apoya una decisión informada; no es una prueba del carácter del médico.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué hallazgos de imagen de alerta roja sugieren evaluación quirúrgica urgente?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Las imágenes deben interpretarse junto con los síntomas y la exploración. La sospecha de infección, lesión inestable o compresión con síntomas neurológicos nuevos puede requerir valoración urgente. Los cambios nuevos del control intestinal o de la vejiga, o el entumecimiento de la zona genital o anal, requieren atención de emergencia; no espere una imagen ambulatoria ni una segunda opinión. Un informe de imagen por sí solo no determina la urgencia ni la operación.",
        },
      },
    ],
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Segunda Opinión", item: PAGE_URL },
    ],
  },
};

export default function SegundaOpinionCirugia() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      <article className="prose prose-lg max-w-3xl mx-auto px-4 py-12 md:py-16 lg:py-20">
        {/* H1 */}
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-900">
          ¿Cuándo Debe Obtener una Segunda Opinión Antes de Cirugía de Columna?
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 font-medium">
          Entendiendo recomendaciones quirúrgicas y cómo evaluar sus opciones
        </p>

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            La cirugía de columna es una decisión significativa con riesgos y beneficios reales. Obtener una segunda opinión antes de cirugía no es irrespeto a su cirujano—es toma de decisiones médica responsable. Esta guía explica cuándo segundas opiniones son razonables, qué preguntas hacer, y cómo evaluar recomendaciones quirúrgicas.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            El objetivo no es evitar cirugía cuando es verdaderamente necesaria. El objetivo es asegurar que la cirugía aborde su problema específico, que el cuidado conservador haya sido explorado completamente cuando es apropiado, y que entienda expectativas realistas antes de comprometerse a un procedimiento mayor.
          </p>
        </section>

        {/* Section 1 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            ¿Cuándo es Razonable una Segunda Opinión?
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Una segunda opinión es razonable—y común—en varias situaciones:
          </p>

          <div className="bg-gray-50 border-l-4 border-blue-500 p-6 mb-6">
            <ul className="space-y-3 text-gray-700">
              <li><strong>Siente incertidumbre.</strong> Si algo no se siente correcto o no está seguro de la recomendación, ese sentimiento vale la pena explorar.</li>
              <li><strong>Los síntomas o la función están cambiando.</strong> Pregunte cómo la evolución afecta la recomendación y si necesita más evaluación.</li>
              <li><strong>Preguntas sobre el cuidado previo.</strong> Revise si otro tratamiento no quirúrgico es apropiado en su situación; no es un paso obligatorio antes de una evaluación urgente.</li>
              <li><strong>La imagen no coincide claramente con síntomas.</strong> Si la imagen muestra patología pero no explica sus síntomas, la cirugía puede no abordarse su problema actual.</li>
              <li><strong>Quiere entender todas las opciones.</strong> Esto es razonable. Punto. No necesita explicación.</li>
              <li><strong>Múltiples cirujanos han recomendado enfoques diferentes.</strong> Cuando las recomendaciones se contradicen, explorar el razonamiento es esencial.</li>
              <li><strong>Está ansioso sobre los riesgos.</strong> Entender riesgos realistas es necesario antes de acordar cirugía.</li>
            </ul>
          </div>

          <p className="text-lg leading-relaxed text-gray-700">
            Puede pedir al equipo tratante que explique la recomendación, atienda sus inquietudes y facilite otra opinión cuando sea clínicamente seguro. La respuesta a una solicitud por sí sola no establece la competencia clínica ni la idoneidad de la operación propuesta.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            ¿Cuándo la Cirugía es Claramente Necesaria?
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Algunas presentaciones requieren valoración de emergencia o pronta; otras permiten una conversación electiva. Los ejemplos siguientes describen motivos para solicitar evaluación, no una lista que demuestre que se requiere cirugía.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Condiciones Quirúrgicas de Emergencia</h3>
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
            <ul className="space-y-3 text-gray-700">
              <li><strong>Posible síndrome de cauda equina:</strong> Los cambios nuevos del control intestinal o de la vejiga, o el entumecimiento alrededor de los genitales o del ano, requieren atención de emergencia. No espere una cita rutinaria ni una segunda opinión.</li>
              <li><strong>Mielopatía con déficits progresivos:</strong> Debilidad progresiva o pérdida de función de la mano por compresión de la médula espinal cervical.</li>
              <li><strong>Sospecha de infección espinal:</strong> La fiebre con dolor de espalda preocupante o síntomas neurológicos nuevos requiere valoración médica urgente. Los hallazgos del especialista determinan el tratamiento; esta lista no supone que se necesita cirugía.</li>
              <li><strong>Fractura patológica o inestabilidad:</strong> Fracturas de tumores u osteoporosis severa con compromiso neurológico.</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Indicaciones Electivas Pero Claras</h3>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <ul className="space-y-3 text-gray-700">
              <li><strong>Síntomas persistentes y discapacitantes:</strong> Los síntomas a pesar del cuidado no quirúrgico apropiado pueden justificar discutir cirugía cuando el diagnóstico y el tratamiento propuesto concuerdan; no existe una duración obligatoria universal.</li>
              <li><strong>Correlación clara entre imagen y síntomas:</strong> La imagen muestra compresión específica que coincide exactamente con sus hallazgos neurológicos y patrón de dolor.</li>
              <li><strong>Déficits neurológicos progresivos en examen:</strong> No solo dolor—debilidad actual, pérdida progresiva de sensibilidad, o pérdida de reflejos empeorando con el tiempo a pesar del cuidado conservador.</li>
              <li><strong>Estenosis severa causando limitación funcional significativa:</strong> Capacidad de caminar distancias muy cortas debido a dolor/debilidad en piernas con imagen mostrando estrechamiento crítico.</li>
              <li><strong>Patología estable pero preferencia del paciente:</strong> Algunos pacientes con patología clara prefieren resolución quirúrgica sobre manejo conservador continuo. Esta es una opción razonable si está completamente informada.</li>
            </ul>
          </div>

          <p className="text-lg leading-relaxed text-gray-700">
            Note que "tengo una imagen mostrando hernias discales" o "la imagen muestra estenosis" solamente NO aparece en la lista. Muchas personas tienen anomalías de imagen sin síntomas de nivel quirúrgico. La cirugía debe abordarse la estructura realmente causando dolor y discapacidad.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Cuidado Conservador: ¿Realmente Ha Sido Intentado?
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Revise qué cuidado no quirúrgico era apropiado, qué se recibió y cómo cambiaron los síntomas y la función. Esta evaluación debe considerar las contraindicaciones y la urgencia, sin imponer una duración o secuencia obligatoria.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Qué Incluye el Cuidado Conservador Adecuado</h3>

          <div className="bg-gray-50 p-6 mb-6 rounded-lg border border-gray-200">
            <ul className="space-y-4">
              <li>
                <strong>Fisioterapia específica:</strong> No ejercicios genéricos. Su PT debe tener un programa específico para diagnóstico (diferente para estenosis vs hernias de disco vs dolor de facetas) y debe progresar basado en su respuesta.
              </li>
              <li>
                <strong>Duración y frecuencia:</strong> Individualice el programa y la reevaluación según el diagnóstico, la respuesta, la tolerancia y la urgencia, sin imponer semanas o visitas fijas.
              </li>
              <li>
                <strong>Modificación de actividad:</strong> Entender qué posiciones/movimientos empeoran síntomas y estructurar su día en consecuencia.
              </li>
              <li>
                <strong>Manejo antiinflamatorio:</strong> Cuando sea apropiado, cursos cortos de medicamentos para permitir participación en terapia.
              </li>
              <li>
                <strong>Reevaluación:</strong> Chequeos con su médico de atención primaria o especialista en dolor para verificar progreso y ajustar enfoque.
              </li>
            </ul>
          </div>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            <strong>Revise el cuidado recibido.</strong> Un curso corto no significa automáticamente que el tratamiento fue insuficiente. Considere el programa, la tolerancia, la respuesta, las barreras y los motivos para detenerlo o cambiarlo.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            La respuesta al cuidado no quirúrgico varía. La gravedad de una imagen por sí sola no predice la recuperación. Las decisiones deben considerar la evolución clínica individual, la discapacidad, los hallazgos neurológicos y los riesgos de esperar.
          </p>
        </section>

        {/* Authority Box */}
        <section className="mb-12 bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
          <div className="flex gap-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Acerca del Dr. Simon Dardashti, MD</h3>
              <p className="text-gray-700 mb-2">
                <strong>Certificado en Medicina del Dolor y Anestesiología</strong>
              </p>
              <ul className="text-sm text-gray-700 space-y-1 mb-3">
                <li>• Entrenamiento en especialidad de Medicina del Dolor de UCLA</li>
                <li>• Más de 10 años especializándose en dolor de columna, nervios y musculoesquelético</li>
                <li>• Evaluación de recomendaciones quirúrgicas y alternativas conservadoras</li>
                <li>• Consultas virtuales disponibles para discusiones de segunda opinión</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Discuta Su Recomendación Quirúrgica
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Si está considerando cirugía de columna y quiere discutir su recomendación con un especialista en dolor, podemos ayudar a aclarar sus opciones y evaluar si el cuidado conservador debe explorarse más o si la cirugía está claramente indicada.
          </p>

          <Link
            href="/virtual-consultations"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Programar una Consulta Virtual (en inglés)
          </Link>
          <p className="text-sm text-gray-600 mt-4">
            Las consultas virtuales nos permiten revisar sus registros médicos, imagen, recomendación quirúrgica, y discutir el mejor camino a seguir para su situación específica.
          </p>
        </section>

        {/* Related Content */}
        <section className="mt-12 pt-8 border-t">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">
            Recursos Relacionados
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><Link href="/es/dolor-sin-imagenes" className="text-blue-600 hover:text-blue-800">Dolor Sin Hallazgos de Imagen</Link> — Entendiendo síntomas cuando la imagen es normal</li>
            <li><Link href="/es/opciones-de-tratamiento" className="text-blue-600 hover:text-blue-800">Cuidado Conservador vs Inyecciones vs Cirugía</Link> — Descripción general de la vía de tratamiento integral</li>
            <li><Link href="/es/condiciones/radiculopatia-lumbar" className="text-blue-600 hover:text-blue-800">Evaluación de Radiculopatía Lumbar</Link> — Entendiendo dolor radicular</li>
            <li><Link href="/es/condiciones/radiculopatia-cervical" className="text-blue-600 hover:text-blue-800">Evaluación de Radiculopatía Cervical</Link> — Entendiendo dolor cervical de nervio</li>
            <li><Link href="/virtual-consultations" className="text-blue-600 hover:text-blue-800">Consultas Virtuales (en inglés)</Link> — Obtenga una segunda opinión</li>
          </ul>
        </section>
      <section className="mb-12"><h2 className="text-2xl font-bold mb-6">Preguntas frecuentes</h2><div className="space-y-6">{pageSchema.mainEntity.mainEntity.map((item) => (<div key={item.name}><h3 className="text-xl font-semibold mb-2">{item.name}</h3><p className="text-gray-700">{item.acceptedAnswer.text}</p></div>))}</div></section><section className="max-w-5xl mx-auto px-6 py-12"><h2 className="text-2xl font-bold mb-4">Fuentes y alcance</h2><ul className="list-disc pl-6 space-y-2"><li><a className="text-blue-600 underline" href="https://www.nice.org.uk/guidance/ng59/chapter/Recommendations">NICE NG59: Low back pain and sciatica in over 16s: assessment and management</a></li><li><a className="text-blue-600 underline" href="https://www.nhs.uk/conditions/back-pain/">NHS: Back pain</a></li><li><a className="text-blue-600 underline" href="https://www.nhs.uk/tests-and-treatments/having-surgery/specialist/">NHS: Seeing a specialist — Having an operation (surgery)</a></li></ul><p className="mt-4 text-gray-700">La guía NICE citada trata el dolor lumbar y la ciática, no toda condición del cuello o la espalda. Esta página no puede determinar si usted necesita cirugía ni justificar retrasar una evaluación urgente.</p></section>
      </article>

      {/* REVISIÓN MÉDICA */}
      <MedicalReviewFooter path="/es/segunda-opinion-cirugia-columna" locale="es" />
    </>
  );
}
