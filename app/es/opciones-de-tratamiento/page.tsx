import { Metadata } from 'next'
import Link from 'next/link'
import MedicalReviewFooter from "@/components/MedicalReviewFooter";

const PAGE_URL = 'https://www.drdardashti.com/es/opciones-de-tratamiento'

export const metadata: Metadata = {
  title: 'Cuidado Conservador vs Inyecciones vs Cirugía: Opciones de Tratamiento',
  description: 'Comprenda cuándo es apropiado el cuidado conservador, inyecciones y cirugía para el dolor de cuello y espalda. Aprenda cómo se toman las decisiones de tratamiento.',
  keywords: [
    'cuidado conservador vs inyecciones',
    'inyecciones vs cirugía',
    'opciones de tratamiento del dolor',
    'alternativas a la cirugía de espalda',
    'inyección epidural',
    'tratamiento no quirúrgico',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Cuidado Conservador vs Inyecciones vs Cirugía: Opciones de Tratamiento',
    description: 'Comprenda cuándo es apropiado el cuidado conservador, inyecciones y cirugía para el dolor de cuello y espalda. Aprenda cómo se toman las decisiones de tratamiento.',
    type: 'article',
    url: PAGE_URL,
  },
}

// JSON-LD Schema (Spanish)
const pageSchema = {
  '@context': 'https://schema.org',
  '@type': ['MedicalWebPage', 'Article'],
  name: 'Cuidado Conservador vs Inyecciones vs Cirugía: Eligiendo el Camino Correcto de Tratamiento',
  url: PAGE_URL,
  headline: 'Cuidado Conservador vs Inyecciones vs Cirugía: Eligiendo el Camino Correcto de Tratamiento',
  description: 'Guía completa para comprender las opciones de tratamiento del dolor, del especialista en medicina del dolor certificado Dr. Simon Dardashti.',
  image: 'https://www.drdardashti.com/headshot.webp',
  datePublished: '2026-06-16',
  dateModified: '2026-10-13',
  author: {
    '@type': 'Person',
    name: 'Simon Dardashti, MD',
    title: 'Médico Especialista en Medicina del Dolor Certificado',
    url: 'https://www.drdardashti.com/about',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Simon Dardashti, MD',
  },
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Debo probar la fisioterapia antes de las inyecciones?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "La fisioterapia y otras opciones no quirúrgicas suelen ser apropiadas, según el diagnóstico y la exploración. No existe un único plazo de espera antes de considerar una inyección. Los síntomas persistentes deben reevaluarse con su médico. La debilidad progresiva requiere valoración pronta; los cambios nuevos del control intestinal o de la vejiga, o el entumecimiento alrededor de los genitales o del ano, requieren atención de emergencia.",
        },
      },
      {
        '@type': 'Question',
        name: '¿Las inyecciones previenen la cirugía?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Una inyección puede ayudar con ciertos síntomas, pero no garantiza evitar la cirugía. Deben discutirse la indicación, el beneficio esperado, los riesgos y las alternativas del procedimiento específico. Una inyección no es un paso obligatorio antes de una valoración quirúrgica urgente.",
        },
      },
      {
        '@type': 'Question',
        name: '¿Pueden las inyecciones curar una hernia discal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Una inyección no repara una hernia discal. Una inyección epidural de esteroides puede reducir los síntomas en pacientes seleccionados, pero la respuesta varía y no garantiza la recuperación. La decisión debe considerar el diagnóstico clínico, los riesgos, las alternativas y las metas del tratamiento.",
        },
      },
      {
        '@type': 'Question',
        name: '¿Cuánto tiempo debo intentar el cuidado conservador?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "La duración del cuidado conservador depende del diagnóstico, la intensidad de los síntomas, las limitaciones funcionales y la respuesta al tratamiento. Acuerde metas y un plan de reevaluación con su médico en lugar de usar un plazo fijo. Los síntomas neurológicos nuevos o que empeoran requieren reevaluación más pronta; los síntomas de emergencia requieren atención inmediata.",
        },
      },
      {
        '@type': 'Question',
        name: '¿Cuándo es la cirugía verdaderamente inevitable?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "La cirugía se considera después de una valoración individual del diagnóstico, los síntomas, la exploración, las imágenes y los beneficios y riesgos esperados. La debilidad progresiva requiere valoración pronta. Los cambios nuevos del control intestinal o de la vejiga, o el entumecimiento alrededor de los genitales o del ano, requieren atención de emergencia. Estos síntomas requieren evaluación y no establecen por sí solos la necesidad de una operación específica.",
        },
      },
      {
        '@type': 'Question',
        name: '¿Son seguras las inyecciones?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cuando se realizan por un médico capacitado usando guía de imágenes y técnica estéril, las inyecciones son generalmente seguras. Los medicamentos utilizados han sido usados durante décadas en medicina del dolor. Las complicaciones graves son poco comunes. Sin embargo, ningún procedimiento es completamente libre de riesgo. Las complicaciones potenciales incluyen infección, daño nervioso o reacción a medicamentos. Se debe discutir a fondo los beneficios y riesgos específicos de su situación antes de cualquier procedimiento.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué si mi resonancia muestra daño significativo pero me siento relativamente bien?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Los hallazgos de imágenes y los síntomas no siempre coinciden. Una resonancia anormal por sí sola no establece la fuente del dolor ni la necesidad de cirugía. Su médico debe comparar los hallazgos con sus antecedentes y exploración; una discrepancia no demuestra por sí sola que una anomalía sea ajena a los síntomas.",
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué si mi resonancia es normal pero tengo dolor significativo?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Una imagen normal no excluye el dolor ni establece su causa. Los siguientes pasos dependen de los antecedentes, la exploración y las limitaciones del estudio. Los síntomas persistentes o cambiantes pueden requerir más evaluación. El tratamiento debe seguir una valoración clínica individual, no solamente el resultado de la imagen.",
        },
      },
    ],
  },
}

export default function OpcionesdeTratamiento() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <article className="prose prose-lg max-w-3xl mx-auto px-4 py-12 md:py-16 lg:py-20">

        {/* H1 */}
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-900">
          Cuidado Conservador vs Inyecciones vs Cirugía
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 font-medium">
          Cómo Elegir el Tratamiento Correcto para el Dolor de Espalda, Cuello, Ciática y Nervios
        </p>

        {/* Authority Page Callout */}
        <section className="mb-12 bg-amber-50 border border-amber-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            ¿Resonancia Normal Pero Aún Tiene Dolor?
          </h3>
          <p className="text-gray-700 mb-4">
            Muchos pacientes experimentan dolor significativo a pesar de hallazgos normales en la resonancia magnética o tomografía. La imagen es solo una parte del proceso diagnóstico.
          </p>
          <Link href="/es/dolor-sin-imagenes" className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded transition-colors text-sm">
            Dolor Sin Hallazgos de Imagen
          </Link>
        </section>

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Una de las preguntas más comunes que escucho es: "¿Necesito inyecciones? ¿Necesito cirugía? ¿No debería simplemente intentar fisioterapia primero?"
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            La respuesta honesta es: depende de su diagnóstico.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            No existe un tratamiento único para el dolor. El camino de tratamiento correcto depende de qué está causando realmente su dolor, cuán grave es, si sus nervios están siendo dañados, cómo está respondiendo al cuidado anterior, y cuáles son sus objetivos. Esta página le ayudará a entender cómo se toman estas decisiones y qué esperar en cada etapa del tratamiento.
          </p>
        </section>

        {/* Section 1 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Por Qué la Mayoría de los Pacientes No Necesitan Cirugía Inmediata
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Muchos pacientes pueden tratarse sin cirugía inmediata, pero el plan depende de la condición específica y los hallazgos neurológicos. Una anomalía de imagen por sí sola no es motivo para operar. Los síntomas de emergencia nuevos o la debilidad progresiva requieren valoración oportuna, sin esperar a completar una secuencia rutinaria de tratamientos.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            La evolución de los síntomas relacionados con un disco varía. Es posible mejorar sin cirugía, pero esta página no puede predecir si un disco específico se reducirá ni si se recuperará la función. El tratamiento y seguimiento deben basarse en la situación clínica individual.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Esto no significa que la cirugía nunca sea necesaria. Para el paciente correcto—alguien con daño nervioso progresivo, compresión grave, o síntomas que no mejoran a pesar del tratamiento apropiado—la cirugía puede ser genuinamente útil. Pero la cirugía no es la primera respuesta para la mayoría de los pacientes. Es una herramienta para situaciones específicas.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            El enfoque debe ser: "¿Cuál es el tratamiento menos invasivo que probablemente aborde su diagnóstico y lo ayude a recuperar la función?" A menudo, eso es cuidado conservador. A veces, es inyecciones. Ocasionalmente, es cirugía. La clave es hacer coincidir el tratamiento con el diagnóstico, no elegir el tratamiento porque las herramientas están disponibles.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Qué Incluye el Cuidado Conservador
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            El <Link href="/es/cuidados-conservadores" className="text-blue-600 hover:text-blue-800">cuidado conservador</Link> no es solo "esperar a ver". Es un enfoque activo y estructurado para manejar el dolor y restaurar la función.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Fisioterapia</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            La fisioterapia puede abordar la fuerza, el movimiento y las limitaciones funcionales mediante un programa individualizado. El ejercicio debe ajustarse a su condición y tolerancia. No suponga que el empeoramiento del dolor es una parte necesaria de la recuperación; consulte con su médico si empeora o aparecen síntomas nuevos. La debilidad progresiva o los cambios de sensibilidad requieren reevaluación.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Modificación de Actividad</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Algunas actividades empeoran el dolor. Otras ayudan. Aprender cuál es cuál y ajustar su actividad—no eliminándola, pero modificándola—es crucial. El dolor es una señal. Escuchar esa señal y trabajar dentro de su tolerancia mientras la expande gradualmente es cómo se recupera.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Medicamento Cuando Es Apropiado</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Los medicamentos antiinflamatorios, relajantes musculares, u otros medicamentos pueden ayudar en las etapas iniciales. El objetivo es usar medicamento para reducir el dolor lo suficiente para permitir que la fisioterapia funcione, no usar medicamento como una solución permanente. Algunos pacientes se benefician de medicamento adicional para manejar el dolor en la noche o durante el trabajo.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Sueño, Peso y Salud General</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            La calidad del sueño afecta la percepción del dolor y la curación. El peso afecta la carga en las articulaciones y la columna vertebral. La forma física general afecta la recuperación. Estos factores importan. El cuidado conservador incluye atención a estos elementos, no solo sesiones de terapia formal.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            <strong>Cronograma y expectativas:</strong> Acuerde metas individuales de dolor, función y actividad con su médico. La reevaluación depende del diagnóstico y de la respuesta, no de un número fijo de semanas. El empeoramiento puede requerir revisión más pronta.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            La respuesta al cuidado conservador varía según el diagnóstico y las circunstancias individuales. El progreso debe evaluarse según las metas funcionales acordadas y los síntomas, sin depender de un porcentaje general de éxito.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Cuándo Las Inyecciones Se Vuelven Útiles
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Las inyecciones no son un sustituto del cuidado conservador—son una herramienta que funciona junto a él. Cuando la inflamación es el problema principal, reducir esa inflamación puede reducir el dolor y mejorar la función. Aquí es donde las inyecciones se vuelven útiles.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            <strong>Las inyecciones comunes incluyen:</strong>
          </p>
          <ul className="list-disc list-inside mb-6 text-gray-700 space-y-2">
            <li><strong><Link href="/es/procedimientos/inyecciones-epidurales-de-esteroides" className="text-blue-600 hover:text-blue-800">Inyección epidural de esteroides:</Link></strong> Reduce la inflamación en el canal espinal alrededor de los nervios. Puede mejorar el dolor y la función, permitiendo que la fisioterapia funcione mejor.</li>
            <li><strong><Link href="/es/procedimientos/bloqueos-de-rama-medial" className="text-blue-600 hover:text-blue-800">Bloqueo de rama medial:</Link></strong> Se dirige al dolor de la articulación facetaria. Puede proporcionar alivio mientras guía si las articulaciones facetarias son realmente la fuente del dolor.</li>
            <li><strong><Link href="/es/procedimientos/ablacion-por-radiofrecuencia" className="text-blue-600 hover:text-blue-800">Ablación por radiofrecuencia:</Link></strong> Para el dolor persistente de la faceta, alivio a más largo plazo mediante calor controlado.</li>
            <li><strong>Inyecciones de articulación sacroilíaca:</strong> Se dirigen a la disfunción de la articulación SI cuando eso es la fuente del dolor.</li>
            <li><strong>Bloqueos de nervios periféricos:</strong> Abordan el dolor de nervios específicos fuera de la columna vertebral.</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            <strong>Lo que las inyecciones pueden y no pueden hacer:</strong> Las inyecciones pueden reducir la inflamación, mejorar la función, y proporcionar alivio mientras su cuerpo sana. También pueden proporcionar información diagnóstica—si el dolor mejora después de inyectar una estructura específica, eso nos dice algo importante sobre dónde proviene el dolor. Lo que las inyecciones no pueden hacer es reparar daño estructural o garantizar alivio permanente. Son herramientas, utilizadas en la situación correcta, para el paciente correcto.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            La decisión de inyectar siempre debe basarse en el diagnóstico. El hecho de que exista una cierta inyección no significa que la necesite. La presencia de una anormalidad en la imagen no significa que esa anormalidad esté causando su dolor. Las inyecciones deben dirigirse a la estructura que usted cree que está causando su dolor—y esa creencia debe provenir de la evaluación clínica, no de la gravedad de la imagen.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Cuándo Se Debe Considerar la Cirugía
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Una consulta quirúrgica puede ser apropiada para una condición que pueda beneficiarse de la cirugía, incluidos los síntomas persistentes y discapacitantes a pesar del cuidado no quirúrgico apropiado. Las inyecciones no son obligatorias antes de toda consulta. Los problemas neurológicos urgentes requieren valoración oportuna.
          </p>

          <ul className="list-disc list-inside mb-6 text-gray-700 space-y-2">
            <li><strong>Déficits neurológicos progresivos:</strong> La debilidad empeorante, entumecimiento, pérdida de reflejos, o pérdida funcional a pesar del tratamiento sugiere que el daño nervioso está progresando. Esto puede justificar la descompresión quirúrgica.</li>
            <li><strong>Compresión nerviosa grave que causa discapacidad significativa:</strong> Si no puede trabajar o realizar actividades básicas a pesar del tratamiento apropiado, la cirugía puede ser una opción.</li>
            <li><strong>Inestabilidad espinal:</strong> Ciertas condiciones causan inestabilidad que el cuidado conservador no puede abordar. La cirugía puede estabilizar la columna vertebral.</li>
            <li><strong>Síntomas persistentes a pesar del tratamiento conservador e intervencionista apropiado:</strong> Si ha intentado cuidado conservador e inyecciones sin alivio suficiente, y la imagen muestra un problema estructural que podría corregirse quirúrgicamente, la cirugía puede valer la pena considerar.</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            <strong>Una nota importante:</strong> Las decisiones sobre cirugía deben tomarse con un cirujano que lo haya evaluado. Mi papel es ayudar a aclarar el diagnóstico del dolor y discutir opciones apropiadas. Una secuencia rutinaria de terapia e inyecciones no debe retrasar una valoración urgente.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Una decisión quirúrgica considera el diagnóstico clínico, la exploración, las imágenes pertinentes, las alternativas, los beneficios esperados y los riesgos. La urgencia de la condición importa. No existe una lista universal que determine si la cirugía es adecuada para todos los pacientes.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Cómo Le Ayudo a Decidir
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Mi trabajo es ayudarle a entender qué está causando su dolor y qué opciones de tratamiento tienen sentido para su situación específica.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Historial Integral</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Quiero entender cómo comenzó su dolor, qué lo hace mejor o peor, cómo ha cambiado con el tiempo, y qué ya ha intentado. Su historial me dice sobre patrones y mecanismos de dolor. También me dice si los tratamientos han sido apropiados y qué está realmente experimentando día a día.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Examen Físico Detallado</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            El examen me dice qué estructuras están involucradas. Evalúo su rango de movimiento, fuerza, sensación, y reflejos. Uso maniobras específicas para reproducir su dolor o descartar ciertas condiciones. Si puedo reproducir su dolor con un movimiento o prueba específica, eso me dice algo concreto sobre qué está mal. Esta información es al menos tan importante como la imagen.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Evaluación Funcional</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            ¿Cómo está afectando su dolor su vida? ¿Puede trabajar? ¿Dormir? ¿Hacer ejercicio? ¿Cómo esa limitación afecta sus objetivos? Esto no se trata de la gravedad del dolor—se trata de cómo el dolor impacta la vida que desea vivir. El tratamiento debe abordar limitaciones funcionales, no solo el número en una escala de dolor.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Interpretación de Imagen y Pruebas</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Reviso su imagen en contexto de su presentación clínica. ¿El hallazgo de la imagen coincide con sus síntomas? ¿Explica sus hallazgos del examen? Muchas anomalías de imagen son coincidentes y no están causando su dolor. Otras claramente son la fuente. La interpretación depende del cuadro completo, no de la imagen sola.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Respuesta al Tratamiento Anterior</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            ¿Qué intentó? ¿Cómo respondió? Si mejoró con fisioterapia, eso me dice que su dolor tiene un componente mecánico o funcional. Si no mejoró, eso me dice algo diferente. Si tuvo una inyección y ayudó, eso me dice algo sobre qué estructura está involucrada. Esta información guía qué intentar a continuación.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Inyecciones Diagnósticas Cuando Es Apropiado</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Una inyección diagnóstica puede aportar información sobre una posible fuente del dolor. La respuesta debe interpretarse junto con la técnica, el medicamento, el momento de evaluación, la actividad y los demás hallazgos clínicos. El alivio no demuestra concluyentemente un diagnóstico, y su ausencia no excluye automáticamente una estructura.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            <strong>El objetivo de todo este proceso:</strong> Llegar a un diagnóstico preciso y recomendar el tratamiento menos invasivo que probablemente lo ayude a recuperar la función. No recomendar inyecciones porque existen. No recomendar cirugía porque está frustrado. Pero recomendar el tratamiento correcto para su problema específico.
          </p>
        </section>

        {/* Section 6: FAQs */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Preguntas Frecuentes
          </h2>

          <div className="space-y-8">

            <div className="border-b pb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                ¿Debo probar la fisioterapia antes de las inyecciones?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                La fisioterapia y otras opciones no quirúrgicas suelen ser apropiadas, según el diagnóstico y la exploración. No existe un único plazo de espera antes de considerar una inyección. Los síntomas persistentes deben reevaluarse con su médico. La debilidad progresiva requiere valoración pronta; los cambios nuevos del control intestinal o de la vejiga, o el entumecimiento alrededor de los genitales o del ano, requieren atención de emergencia.
              </p>
            </div>

            <div className="border-b pb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                ¿Las inyecciones previenen la cirugía?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Una inyección puede ayudar con ciertos síntomas, pero no garantiza evitar la cirugía. Deben discutirse la indicación, el beneficio esperado, los riesgos y las alternativas del procedimiento específico. Una inyección no es un paso obligatorio antes de una valoración quirúrgica urgente.
              </p>
            </div>

            <div className="border-b pb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                ¿Pueden las inyecciones curar una hernia discal?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Una inyección no repara una hernia discal. Una inyección epidural de esteroides puede reducir los síntomas en pacientes seleccionados, pero la respuesta varía y no garantiza la recuperación. La decisión debe considerar el diagnóstico clínico, los riesgos, las alternativas y las metas del tratamiento.
              </p>
            </div>

            <div className="border-b pb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                ¿Cuánto tiempo debo intentar el cuidado conservador?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                La duración del cuidado conservador depende del diagnóstico, la intensidad de los síntomas, las limitaciones funcionales y la respuesta al tratamiento. Acuerde metas y un plan de reevaluación con su médico en lugar de usar un plazo fijo. Los síntomas neurológicos nuevos o que empeoran requieren reevaluación más pronta; los síntomas de emergencia requieren atención inmediata.
              </p>
            </div>

            <div className="border-b pb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                ¿Cuándo es la cirugía verdaderamente inevitable?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                La cirugía se considera después de una valoración individual del diagnóstico, los síntomas, la exploración, las imágenes y los beneficios y riesgos esperados. La debilidad progresiva requiere valoración pronta. Los cambios nuevos del control intestinal o de la vejiga, o el entumecimiento alrededor de los genitales o del ano, requieren atención de emergencia. Estos síntomas requieren evaluación y no establecen por sí solos la necesidad de una operación específica.
              </p>
            </div>

            <div className="border-b pb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                ¿Son seguras las inyecciones?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Cuando se realizan por un médico capacitado usando guía de imágenes y técnica estéril, las inyecciones son generalmente seguras. Los medicamentos utilizados han sido usados durante décadas en medicina del dolor. Las complicaciones graves son poco comunes. Sin embargo, ningún procedimiento es completamente libre de riesgo. Las complicaciones potenciales incluyen infección, daño nervioso o reacción a medicamentos. Se debe discutir a fondo los beneficios y riesgos específicos de su situación antes de cualquier procedimiento.
              </p>
            </div>

            <div className="border-b pb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                ¿Qué si mi resonancia muestra daño significativo pero me siento relativamente bien?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Los hallazgos de imágenes y los síntomas no siempre coinciden. Una resonancia anormal por sí sola no establece la fuente del dolor ni la necesidad de cirugía. Su médico debe comparar los hallazgos con sus antecedentes y exploración; una discrepancia no demuestra por sí sola que una anomalía sea ajena a los síntomas.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                ¿Qué si mi resonancia es normal pero tengo dolor significativo?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Una imagen normal no excluye el dolor ni establece su causa. Los siguientes pasos dependen de los antecedentes, la exploración y las limitaciones del estudio. Los síntomas persistentes o cambiantes pueden requerir más evaluación. El tratamiento debe seguir una valoración clínica individual, no solamente el resultado de la imagen.
              </p>
            </div>

          </div>
        </section>

        {/* Section 7 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            El Tratamiento Correcto Es Aquel Que Se Ajusta a Su Diagnóstico
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            El principio fundamental detrás de elegir entre cuidado conservador, inyecciones, y cirugía es este: el diagnóstico impulsa el tratamiento.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            No todos los pacientes necesitan cirugía. No todos los pacientes necesitan inyecciones. No todos los pacientes mejoran con solo cuidado conservador. El objetivo es entender qué está causando realmente su dolor y elegir el tratamiento menos invasivo, más efectivo para ese problema específico.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Esto requiere evaluación exhaustiva. Requiere escuchar su historial y tomarlo en serio. Requiere un examen físico cuidadoso. Requiere interpretar la imagen correctamente—no como un plan de tratamiento, sino como una pieza de información diagnóstica. Requiere observar cómo responde al tratamiento y ajustar en consecuencia.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Este enfoque toma tiempo y pensamiento. Es más fácil ofrecer la primera inyección o cirugía que viene a la mente. Pero así no funciona la buena medicina. La buena medicina pregunta: "¿Qué está realmente mal? ¿Qué tratamiento abordará ese problema? ¿Cuál es la opción menos invasiva que probablemente funcione?" Si la respuesta es fisioterapia, esa es la recomendación. Si es inyecciones, eso es lo que hacemos. Si es cirugía, recomendamos eso. La respuesta depende de su diagnóstico.
          </p>
        </section>

        {/* Physician Authority Box */}
        <section className="mb-12 bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
          <div className="flex gap-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Acerca del Dr. Simon Dardashti, MD</h3>
              <p className="text-gray-700 mb-2">
                <strong>Certificado en Medicina del Dolor y Anestesiología</strong>
              </p>
              <ul className="text-sm text-gray-700 space-y-1 mb-3">
                <li>• Entrenamiento en especialidad de Medicina del Dolor de UCLA</li>
                <li>• Más de 10 años especializándose en dolor de columna, nervios y músculo-esquelético</li>
                <li>• Enfoque de tratamiento basado en diagnóstico</li>
                <li>• Consultas virtuales disponibles para pacientes en todo el mundo</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 8: Next Steps */}
        <section className="mb-12 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Próximos Pasos
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Si no está seguro si el cuidado conservador, inyecciones, o cirugía es el paso siguiente correcto para su dolor, una consulta puede ayudar a aclarar sus opciones.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            Puedo revisar su situación específica, examinarlo si es necesario, ayudarle a entender qué puede estar causando su dolor, y discutir qué enfoque de tratamiento tiene sentido para su diagnóstico y objetivos.
          </p>

          <div className="flex flex-col gap-4">
            <Link
              href="/virtual-consultations"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Programar una Consulta Virtual (en inglés)
            </Link>
            <p className="text-sm text-gray-600">
              Las consultas virtuales nos permiten discutir su condición, revisar su imagen y tratamiento anterior, y determinar el paso siguiente correcto para su situación.
            </p>
          </div>
        </section>

        {/* Related Content */}
        <section className="mt-12 pt-8 border-t">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">
            Condiciones y Tratamientos Relacionados
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><Link href="/es/condiciones/dolor-lumbar" className="text-blue-600 hover:text-blue-800">Dolor Lumbar</Link></li>
            <li><Link href="/es/condiciones/radiculopatia-ciatica" className="text-blue-600 hover:text-blue-800">Ciática</Link></li>
            <li><Link href="/es/condiciones/radiculopatia-cervical" className="text-blue-600 hover:text-blue-800">Radiculopatía Cervical</Link></li>
            <li><Link href="/es/procedimientos/inyecciones-epidurales-de-esteroides" className="text-blue-600 hover:text-blue-800">Inyección Epidural de Esteroides</Link></li>
            <li><Link href="/es/procedimientos/bloqueos-de-rama-medial" className="text-blue-600 hover:text-blue-800">Bloqueo de Rama Medial</Link></li>
            <li><Link href="/es/procedimientos/ablacion-por-radiofrecuencia" className="text-blue-600 hover:text-blue-800">Ablación por Radiofrecuencia</Link></li>
          </ul>
        </section>

      <section className="mb-12"><h2 className="text-2xl font-bold mb-4">Fuentes y alcance</h2><ul className="list-disc pl-6 space-y-2"><li><a className="text-blue-600 underline" href="https://www.nice.org.uk/guidance/ng59/chapter/Recommendations">NICE NG59: Low back pain and sciatica in over 16s: assessment and management</a></li><li><a className="text-blue-600 underline" href="https://www.nhs.uk/conditions/back-pain/">NHS: Back pain</a></li></ul><p className="text-gray-700 mt-4">La guía NICE trata el dolor lumbar y la ciática; no es una regla para toda condición del cuello o la espalda. Esta página ofrece educación general y no puede determinar su tratamiento.</p></section>
      </article>

      {/* REVISIÓN MÉDICA */}
      <MedicalReviewFooter path="/es/opciones-de-tratamiento" locale="es" />
    </>
  )
}
