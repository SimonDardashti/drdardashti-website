import type { Metadata } from "next";
import Link from "next/link";

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
  dateModified: "2026-06-18",
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
          text: "Una segunda opinión es razonable siempre que sienta incertidumbre sobre una recomendación quirúrgica. Esto es especialmente cierto si: los síntomas han estado presentes menos de 3-6 meses, no ha intentado cuidado conservador adecuadamente, los hallazgos de imagen parecen inconsistentes con sus síntomas, tiene preguntas sobre el procedimiento recomendado, o simplemente quiere perspectiva adicional. Los cirujanos generalmente entienden y respetan que los pacientes busquen segundas opiniones.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuándo la cirugía de columna es claramente necesaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La cirugía se vuelve claramente necesaria en situaciones específicas: déficits neurológicos progresivos (debilidad empeorante, pérdida de sensibilidad, o pérdida de control intestinal/vejiga), síndrome de cauda equina (emergencia), compresión severa causando discapacidad significativa a pesar de cuidado conservador apropiado, o inestabilidad espinal. Estas situaciones requieren evaluación quirúrgica urgente o electiva. La mayoría de otros casos permiten tiempo para manejo conservador u obtener segundas opiniones.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo sé si el cuidado conservador ha sido intentado adecuadamente?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El cuidado conservador adecuado típicamente incluye 6-12 semanas de fisioterapia estructurada enfocada en su diagnóstico específico, modificación de actividad apropiada a sus síntomas, y a veces medicamentos antiinflamatorios cuando sea clínicamente apropiado. Su fisioterapeuta debe haber realizado evaluación inicial, diseñado un programa específico para su diagnóstico (no ejercicios genéricos), y ajustado el programa basado en su respuesta. Si ha intentado menos que esto o la terapia fue sin enfoque, el cuidado conservador puede no haber sido intentado justamente.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué preguntas debo hacer a un cirujano antes de acordar cirugía?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Las preguntas clave incluyen: '¿Qué estructura específica está causando mi dolor y cómo se relaciona con mis síntomas?' '¿Qué cambiará esta cirugía físicamente?' '¿Cuáles son las tasas de éxito realistas para mi diagnóstico específico?' '¿Cuáles son los riesgos y complicaciones potenciales?' '¿Cómo se compara esto con continuar cuidado conservador?' '¿Si la cirugía no funciona, cuáles son las opciones?' '¿Por qué ahora en lugar de intentar más cuidado conservador primero?' Un cirujano cómodo con estas preguntas está demostrando buen juicio.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué hallazgos de imagen de alerta roja sugieren evaluación quirúrgica urgente?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Los hallazgos de alerta incluyen: síndrome de cauda equina (compresión de múltiples raíces nerviosas), estenosis canal central severa causando dolor significativo en piernas, déficits neurológicos progresivos en imagen y examen, inestabilidad espinal, o absceso/infección epidural. Estos hallazgos justifican evaluación quirúrgica rápida. Muchas otras anomalías de imagen (hernias discales, estenosis, cambios degenerativos) pueden frecuentemente manejarse conservadoramente primero si la función neurológica está intacta.",
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
              <li><strong>Los síntomas son relativamente recientes.</strong> Si el dolor comenzó hace 3-6 meses, el cuidado conservador puede no haber tenido suficiente tiempo.</li>
              <li><strong>No ha intentado cuidado conservador robusto.</strong> Si la fisioterapia fue breve, sin enfoque, o no abordó su diagnóstico específico, el cuidado conservador merece otro intento.</li>
              <li><strong>La imagen no coincide claramente con síntomas.</strong> Si la imagen muestra patología pero no explica sus síntomas, la cirugía puede no abordarse su problema actual.</li>
              <li><strong>Quiere entender todas las opciones.</strong> Esto es razonable. Punto. No necesita explicación.</li>
              <li><strong>Múltiples cirujanos han recomendado enfoques diferentes.</strong> Cuando las recomendaciones se contradicen, explorar el razonamiento es esencial.</li>
              <li><strong>Está ansioso sobre los riesgos.</strong> Entender riesgos realistas es necesario antes de acordar cirugía.</li>
            </ul>
          </div>

          <p className="text-lg leading-relaxed text-gray-700">
            Esto es normal. La mayoría de cirujanos experimentados entienden que los pacientes buscan segundas opiniones y lo respetan. Un cirujano que se pone a la defensiva sobre una solicitud de segunda opinión está demostrando mal juicio.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            ¿Cuándo la Cirugía es Claramente Necesaria?
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Ciertas situaciones requieren evaluación quirúrgica urgente o electiva. Entender estas ayuda a distinguir entre "la cirugía es una opción" y "la cirugía es claramente necesaria":
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Condiciones Quirúrgicas de Emergencia</h3>
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
            <ul className="space-y-3 text-gray-700">
              <li><strong>Síndrome de cauda equina:</strong> Pérdida progresiva de control intestinal/vejiga, dolor bilateral en piernas, debilidad progresiva en piernas, o anestesia en silla de montar. Esta es una emergencia quirúrgica.</li>
              <li><strong>Mielopatía con déficits progresivos:</strong> Debilidad progresiva o pérdida de función de la mano por compresión de la médula espinal cervical.</li>
              <li><strong>Infección epidural o absceso:</strong> Fiebre, déficits neurológicos progresivos, e imagen mostrando infección requiere descompresión urgente.</li>
              <li><strong>Fractura patológica o inestabilidad:</strong> Fracturas de tumores u osteoporosis severa con compromiso neurológico.</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Indicaciones Electivas Pero Claras</h3>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <ul className="space-y-3 text-gray-700">
              <li><strong>Discapacidad significativa a pesar de cuidado conservador apropiado:</strong> 3+ meses de fisioterapia robusta, modificación de actividad, y manejo medicamentoso apropiado sin mejora adecuada.</li>
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
            Una de las preguntas más importantes es si el cuidado conservador ha sido verdaderamente optimizado. No se trata de sufrir innecesariamente—se trata de dar tiempo a la opción más probable de efectivo:
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Qué Incluye el Cuidado Conservador Adecuado</h3>

          <div className="bg-gray-50 p-6 mb-6 rounded-lg border border-gray-200">
            <ul className="space-y-4">
              <li>
                <strong>Fisioterapia específica:</strong> No ejercicios genéricos. Su PT debe tener un programa específico para diagnóstico (diferente para estenosis vs hernias de disco vs dolor de facetas) y debe progresar basado en su respuesta.
              </li>
              <li>
                <strong>Duración:</strong> Mínimo 6 semanas, idealmente 8-12 semanas de terapia estructurada asistiendo 2-3 veces por semana.
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
            <strong>Fisioterapia corta o genérica no cuenta.</strong> Pocas sesiones de ejercicios generales no revelará si un programa específico para diagnóstico funciona. De manera similar, si le dijeron "nada puede ayudar su dolor" sin un intento estructurado de terapia apropiada, el cuidado conservador no ha sido justamente evaluado.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Aquí está la clave: <strong>La mayoría de pacientes incluso con patología significativa de imagen mejoran con cuidado conservador estructurado.</strong> Esto no significa que la patología quirúrgica no exista—significa que su cuerpo frecuentemente puede adaptarse y compensar. La cirugía debe considerarse después que el cuidado conservador verdaderamente adecuado no haya proporcionado alivio.
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
            href="/es/consultas-virtuales"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Programar una Consulta Virtual
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
            <li><Link href="/es/consultas-virtuales" className="text-blue-600 hover:text-blue-800">Consultas Virtuales</Link> — Obtenga una segunda opinión</li>
          </ul>
        </section>
      </article>
    </>
  );
}
