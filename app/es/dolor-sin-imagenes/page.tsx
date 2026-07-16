import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dolor Sin Hallazgos de Imagen: Por Qué Duele Cuando los Estudios Son Normales',
  description: 'Su resonancia magnética normal no significa que su dolor sea imaginario. Aprenda por qué los síntomas y los hallazgos de imagen no siempre coinciden, y cómo el Dr. Simon Dardashti evalúa el dolor cuando la imagen es normal.',
  keywords: [
    'dolor sin imagen',
    'resonancia normal pero dolor',
    'hallazgos de imagen vs síntomas',
    'diagnosticar dolor sin MRI',
    'medicina del dolor Los Ángeles',
  ],
}

// JSON-LD Schema (Spanish)
const pageSchema = {
  '@context': 'https://schema.org',
  '@type': ['MedicalWebPage', 'Article'],
  name: 'Dolor Sin Hallazgos de Imagen: Por Qué Duele Cuando los Estudios Son Normales',
  url: 'https://drdardashti.com/es/dolor-sin-imagenes',
  headline: 'Por Qué Tiene Dolor Cuando Sus Estudios de Imagen Son Normales',
  description: 'Guía completa para comprender el dolor cuando los estudios de imagen son normales, del especialista en medicina del dolor certificado Dr. Simon Dardashti.',
  image: 'https://drdardashti.com/og-images/dolor-sin-imagenes.jpg',
  datePublished: '2026-06-16',
  dateModified: '2026-06-16',
  author: {
    '@type': 'Person',
    name: 'Simon Dardashti, MD',
    title: 'Médico Especialista en Medicina del Dolor Certificado',
    url: 'https://drdardashti.com/es/acerca-de/',
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
        name: '¿Si mi resonancia es normal, por qué sigo teniendo dolor?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El dolor y los hallazgos de imagen no siempre se correlacionan. Su sistema nervioso puede generar dolor a través de múltiples mecanismos que la imagen no puede detectar. Estos incluyen irritación nerviosa sin compresión visible, disfunción muscular, problemas de patrones de movimiento y sensibilidad del sistema nervioso. Una resonancia normal significa que necesitamos mirar más allá de los hallazgos estructurales para entender qué está causando su dolor. Aquí es donde la evaluación clínica integral —examen físico, historial y evaluación funcional— se vuelve especialmente valiosa.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Una imagen normal significa que mi dolor es psicológico?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. El dolor que se origina en mecanismos funcionales —irritación nerviosa, disfunción muscular, problemas de movimiento— es absolutamente real y físico. Una imagen normal simplemente significa que la fuente del dolor no es una lesión estructural grande visible en un escáner. Los factores psicológicos pueden contribuir a cualquier dolor, estructural o funcional, pero su dolor no es imaginario ni "está en su cabeza" simplemente porque la imagen aparece normal. La ausencia de hallazgos de imagen no disminuye la realidad de sus síntomas.',
        },
      },
      {
        '@type': 'Question',
        name: '¿La fisioterapia ayudará si mi imagen es normal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, a menudo significativamente. La fisioterapia puede ser particularmente efectiva para el dolor que implica disfunción muscular, patrones de movimiento y sensibilidad del sistema nervioso. La clave es que su terapeuta comprenda el tipo específico de dolor que tiene. Si su dolor implica fuentes miofasciales o disfunción del movimiento, el ejercicio dirigido y la terapia manual frecuentemente proporcionan un alivio sustancial. La mayoría de los pacientes que participan en fisioterapia apropiada ven una mejora significativa dentro de 6 a 12 semanas cuando el diagnóstico es preciso.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Las inyecciones pueden ayudar si mi imagen es normal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí. Las inyecciones diagnósticas y terapéuticas a menudo son valiosas cuando la imagen es normal porque ayudan a identificar la fuente de dolor específica. Una inyección epidural puede demostrar si las estructuras espinales están involucradas. Un bloqueo de rama medial puede determinar si las articulaciones facetarias están contribuyendo. Si el dolor mejora después de una inyección dirigida a una estructura específica, eso proporciona tanto información diagnóstica como alivio terapéutico. El éxito depende del diagnóstico preciso de qué estructura puede estar contribuyendo al dolor.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Debo hacerme otra resonancia magnética?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No necesariamente. Si su imagen ya es normal y sus síntomas no han cambiado sustancialmente, la imagen adicional generalmente no es útil. Más imagen no mejora el diagnóstico cuando el dolor es funcional en lugar de estructural. Sin embargo, si sus síntomas cambian significativamente —nuevos hallazgos neurológicos, debilidad progresiva o nuevas características preocupantes— entonces la imagen puede ayudar a identificar qué ha cambiado. Recomiendo imagen solo cuando los hallazgos clínicos sugieren que guiaría las decisiones de tratamiento.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Puede existir dolor nervioso sin hallazgos de resonancia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutamente. Los nervios pueden irritarse, inflamarse o dañarse parcialmente de maneras que no se muestran en una resonancia magnética estándar. Un nervio puede funcionar anormalmente y causar dolor —punzante, ardiente, sensación radiante— sin compresión obvia visible en la imagen. Los hallazgos del examen físico, los patrones de síntomas y la respuesta a los bloqueos nerviosos diagnósticos pueden confirmar la implicación nerviosa incluso cuando la imagen parece normal. Esta es una de las razones más comunes de imagen normal con dolor significativo.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cómo diagnostica el dolor cuando la imagen es normal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A través de evaluación clínica sistemática. Comienzo con un historial detallado: ¿Cuándo comenzó el dolor? ¿Qué lo empeora o mejora? ¿Qué ha intentado? Luego realizo un examen físico cuidadoso —rango de movimiento, pruebas neurológicas, fuerza, sensación, maniobras específicas que reproducen su dolor. Evalúo sus limitaciones funcionales y cómo el dolor afecta sus actividades diarias. Esta imagen clínica, combinada con pruebas diagnósticas cuando sea apropiado (como inyecciones dirigidas), me ayuda a identificar los generadores de dolor probables y desarrollar un plan de tratamiento apropiado.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cuándo debo buscar evaluación?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Si tiene dolor persistente (que dura más de algunas semanas) que limita sus actividades, una evaluación integral puede ayudar a identificar qué lo está causando. Esto es especialmente cierto si tiene imagen normal pero síntomas continuos. No espere asumiendo que el dolor se resolverá por sí solo, y no asuma que la imagen normal significa que el tratamiento es imposible. Un especialista certificado en medicina del dolor puede ayudar a identificar qué está causando su dolor y desarrollar una estrategia de tratamiento adaptada a su situación específica.',
        },
      },
    ],
  },
}

export default function DolorSinImagenes() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <article className="prose prose-lg max-w-3xl mx-auto px-4 py-12 md:py-16 lg:py-20">

        {/* H1 */}
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
          Por Qué Tiene Dolor Cuando Sus Estudios de Imagen Son Normales
        </h1>

        {/* Authority Page Callout */}
        <section className="mb-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            ¿No Está Seguro Si Necesita Fisioterapia, Inyecciones o Cirugía?
          </h3>
          <p className="text-gray-700 mb-4">
            Las decisiones de tratamiento deben basarse en el diagnóstico, los síntomas y la respuesta al cuidado conservador, no en un enfoque único.
          </p>
          <Link href="/es/opciones-de-tratamiento" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors text-sm">
            Cuidado Conservador vs Inyecciones vs Cirugía
          </Link>
        </section>

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Tiene dolor significativo. Su resonancia magnética es normal. Su tomografía es normal. Quizás su especialista revisó la imagen y dijo: "No veo nada significativo." Esto crea confusión: ¿Cómo puedo doler tanto si la imagen no muestra nada malo?
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            La respuesta es directa: <strong>El dolor y los hallazgos de imagen no siempre se correlacionan.</strong> Su imagen normal no significa que su dolor sea imaginario o que el tratamiento sea imposible. Significa que necesitamos tomar un enfoque diagnóstico diferente para identificar qué está causando sus síntomas.
          </p>
        </section>

        {/* Section 1 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Una Imagen Normal No Significa Que No Hay Nada Malo
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            La resonancia magnética y la tomografía son excelentes para detectar grandes problemas estructurales: hernias de disco obvias, fracturas óseas, tumores o estenosis espinal significativa. Pero la imagen tiene limitaciones importantes.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            <strong>La imagen no puede mostrar:</strong>
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
            <li>Irritación o inflamación nerviosa sin compresión visible</li>
            <li>Tensión muscular, puntos gatillo o disfunción</li>
            <li>Anomalías del patrón de movimiento</li>
            <li>Microtrauma del ligamento</li>
            <li>Patrones de dolor funcional desde estados de dolor crónico</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            La investigación muestra una realidad clínica común: Muchas personas con imagen completamente normal tienen dolor significativo, mientras que muchas personas con hallazgos de imagen anormales no tienen dolor en absoluto. Este desajuste entre lo que la imagen muestra y lo que experimenta un paciente es bien documentado en la literatura médica y es uno de los conocimientos clínicos más importantes en medicina del dolor.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Esto no significa que su dolor no sea real. Significa que la imagen sola no puede explicar qué lo está causando. Por eso el examen físico, el historial clínico y la evaluación funcional son tan importantes o más importantes que la imagen en la determinación del diagnóstico y el tratamiento.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Cómo Evalúo el Dolor Cuando la Imagen Es Normal
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Cuando la imagen es normal pero el dolor es significativo, el diagnóstico depende de una evaluación clínica integral. Aquí es cómo funciona:
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Examen Físico</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            El examen físico es donde recopilo la información diagnóstica más importante. Evalúo su rango de movimiento —qué movimientos reproducen su dolor y cuáles están libres de dolor. Realizo pruebas neurológicas: fuerza en grupos musculares específicos, sensación en dermatomas específicos y reflejos. Uso maniobras específicas diseñadas para reproducir sus síntomas o descartar ciertos diagnósticos. Por ejemplo, una prueba de Spurling positiva en un paciente con dolor en el brazo e imagen cervical normal sugiere fuertemente la implicación del nervio cervical incluso si la imagen no muestra compresión. Estos hallazgos del examen me ayudan a identificar qué estructura puede estar contribuyendo al dolor.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Evaluación Funcional</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Pregunto sobre sus actividades: ¿Qué empeora el dolor? ¿Qué lo mejora? ¿Cómo afecta el dolor su trabajo, sueño o función diaria? Estos patrones funcionales me ayudan a comprender la base mecánica o neurológica de su dolor. Un paciente cuyo dolor aumenta con la flexión anterior pero mejora al acostarse tiene un patrón de dolor diferente al de alguien cuyo dolor es constante independientemente de la posición. Estos patrones guían el diagnóstico.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Historial Clínico</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Quiero entender el contexto completo: ¿Cuándo comenzó el dolor? ¿Hubo una lesión? ¿Ha tenido tratamientos previos? ¿Qué ha intentado? ¿Cómo ha evolucionado el dolor con el tiempo? Este historial proporciona pistas sobre los mecanismos subyacentes. El dolor crónico que empeora gradualmente a menudo implica mecanismos diferentes al dolor agudo después de una lesión.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Razonamiento Clínico</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            A partir de estos componentes —hallazgos del examen, patrones funcionales e historial— desarrollo un diagnóstico de trabajo sobre qué probablemente está causando el dolor. Este diagnóstico guía las decisiones de tratamiento. Por ejemplo:
          </p>

          <div className="bg-gray-50 border-l-4 border-blue-500 p-6 mb-6">
            <p className="text-gray-800 mb-4">
              <strong>Ejemplo Clínico:</strong> Un paciente de 52 años con dolor en el brazo, resonancia cervical normal, pero prueba de Spurling positiva y debilidad en la abducción del pulgar (distribución del nervio C6). Los hallazgos clínicos sugieren fuertemente la implicación del nervio C6. Comenzamos con cuidado conservador dirigido a ese nervio específico —ejercicios específicos, modificación de postura. Si eso no proporciona un alivio adecuado en 4 a 6 semanas, un bloqueo diagnóstico de rama medial cervical dirigido a la articulación facetaria en ese nivel puede ayudar a identificar si la articulación facetaria está contribuyendo a los síntomas mientras proporciona alivio potencial. La resonancia era normal, pero la imagen clínica proporcionó orientación diagnóstica.
            </p>
          </div>

          <p className="text-lg leading-relaxed text-gray-700">
            El diagnóstico basado en la imagen clínica completa es más valioso que buscar hallazgos de imagen que pueden no existir. Esta es la base de cómo abordo la medicina del dolor.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Las Inyecciones Diagnósticas Pueden Ayudar a Identificar la Fuente del Dolor
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Cuando la evaluación clínica sugiere un generador de dolor específico, las inyecciones diagnósticas pueden ayudar a identificar qué estructura puede estar contribuyendo al dolor mientras proporciona alivio.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            <strong>Cómo funcionan:</strong> Inyecto anestésico local alrededor de una estructura específica —un espacio epidural, una articulación facetaria, un nervio— para adormecerla temporalmente. Si su dolor mejora o desaparece, eso sugiere que la estructura que marqué puede estar contribuyendo al dolor. Si el dolor no mejora, esa estructura probablemente no es la fuente principal y consideramos otras posibilidades.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            <strong>Inyecciones diagnósticas comunes:</strong>
          </p>
          <ul className="list-disc list-inside mb-6 text-gray-700 space-y-2">
            <li><strong>Inyección epidural de esteroides:</strong> Prueba si la implicación del canal espinal contribuye al dolor. Puede proporcionar beneficio antiinflamatorio.</li>
            <li><strong>Bloqueo de rama medial:</strong> Prueba si las articulaciones facetarias pueden estar contribuyendo al dolor. Una prueba diagnóstica de corta duración.</li>
            <li><strong>Inyección de articulación sacroilíaca:</strong> Prueba si la disfunción de la articulación SI contribuye al dolor.</li>
            <li><strong>Bloqueos de nervios periféricos:</strong> Prueba si los nervios periféricos específicos están involucrados.</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            El valor de las inyecciones diagnósticas es doble: Proporcionan información diagnóstica sobre qué puede estar causando el dolor, y proporcionan alivio terapéutico mientras recopilamos esa información. Esto es eficiente: usted puede recibir tanto información diagnóstica como mejora de síntomas simultáneamente.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Dicho esto, las inyecciones diagnósticas son una herramienta —no una prueba definitiva. Los resultados siempre deben interpretarse junto con su historial, hallazgos del examen físico y limitaciones funcionales. El alivio parcial, por ejemplo, puede indicar que múltiples estructuras están contribuyendo al dolor. Factores técnicos pueden influir en los resultados, y lo que aprendemos de una inyección guía los próximos pasos, pero ninguna prueba única determina el diagnóstico o las decisiones de tratamiento por sí sola. Por eso la evaluación clínica integral sigue siendo la base.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            El Tratamiento Se Basa en el Diagnóstico, No en la Resonancia
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Una vez que hemos identificado los generadores de dolor probables a través de la evaluación clínica, el tratamiento se adapta para abordar esas fuentes específicas.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Cuidado Conservador</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            La mayoría de las condiciones de dolor mejoran con cuidado conservador como tratamiento de primera línea:
          </p>
          <ul className="list-disc list-inside mb-6 text-gray-700 space-y-2">
            <li><strong>Fisioterapia</strong> dirigida a su diagnóstico específico</li>
            <li><strong>Modificación de actividad</strong> para reducir la provocación de síntomas</li>
            <li><strong>Progresión del ejercicio</strong> a medida que el dolor mejora</li>
            <li><strong>Optimización del sueño</strong> y gestión del estrés</li>
            <li><strong>Medicamento</strong> cuando sea apropiado para apoyar la recuperación</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Muchos pacientes mejoran significativamente con cuidado conservador solo —a menudo el 70–80% de los pacientes con dolor agudo mejoran con manejo conservador apropiado durante 6 a 12 semanas. El tratamiento debe basarse en lo que encontramos durante la evaluación, no en la gravedad de la imagen.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Opciones Intervencionistas</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Si el cuidado conservador no proporciona alivio adecuado, las opciones intervencionistas pueden ayudar:
          </p>
          <ul className="list-disc list-inside mb-6 text-gray-700 space-y-2">
            <li><strong>Inyección epidural de esteroides</strong> para dolor espinal</li>
            <li><strong>Bloqueos de rama medial</strong> para dolor facetario</li>
            <li><strong>Ablación por radiofrecuencia (RFA)</strong> para dolor facetario o de articulación SI persistente</li>
            <li><strong>Otros procedimientos</strong> basados en diagnóstico específico</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700">
            Las decisiones de tratamiento se basan en el diagnóstico clínico, la respuesta al tratamiento previo y las limitaciones funcionales —no en los hallazgos de imagen. Este enfoque respeta que usted es un individuo único con un problema de dolor único, no un resultado de exploración.
          </p>
        </section>

        {/* Section 5: FAQs */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Preguntas Frecuentes
          </h2>

          <div className="space-y-8">

            <div className="border-b pb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                ¿Si mi resonancia es normal, por qué sigo teniendo dolor?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                El dolor proviene de múltiples fuentes posibles, no todas visibles en la imagen. Su sistema nervioso puede generar dolor a través de irritación nerviosa, disfunción muscular, anomalías del patrón de movimiento y sensibilidad del sistema nervioso. Una resonancia normal significa que su dolor no proviene de una lesión estructural grande, pero no descarta estos otros mecanismos. Por eso la evaluación clínica integral —examen físico, historial y evaluación funcional— es esencial para el diagnóstico cuando la imagen es normal.
              </p>
            </div>

            <div className="border-b pb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                ¿Una imagen normal significa que mi dolor es psicológico?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                No. El dolor que se origina en mecanismos funcionales —irritación nerviosa, disfunción muscular, disfunción del movimiento— es absolutamente real y físico. Una imagen normal simplemente significa que la fuente del dolor no es una lesión estructural grande visible en un escáner. Los factores psicológicos pueden contribuir a cualquier dolor (estructural o funcional), pero su dolor no es imaginario ni "está en su cabeza" porque la imagen parece normal. La ausencia de hallazgos de imagen no disminuye la realidad de sus síntomas.
              </p>
            </div>

            <div className="border-b pb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                ¿La fisioterapia ayudará si mi imagen es normal?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Sí, a menudo significativamente. La fisioterapia puede ser particularmente efectiva para el dolor que implica disfunción muscular, patrones de movimiento y sensibilidad del sistema nervioso. La clave es que su terapeuta comprenda el tipo específico de dolor que tiene. Si su dolor implica fuentes miofasciales o disfunción del movimiento, el ejercicio dirigido y la terapia manual frecuentemente proporcionan un alivio sustancial. La mayoría de los pacientes que participan en fisioterapia apropiada ven una mejora significativa dentro de 6 a 12 semanas cuando el diagnóstico es preciso.
              </p>
            </div>

            <div className="border-b pb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                ¿Las inyecciones pueden ayudar si mi imagen es normal?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Sí. Las inyecciones diagnósticas y terapéuticas a menudo son valiosas cuando la imagen es normal porque ayudan a identificar la fuente de dolor específica. Una inyección epidural puede probar si las estructuras espinales están involucradas. Un bloqueo de rama medial puede determinar si las articulaciones facetarias están contribuyendo. Si el dolor mejora después de una inyección dirigida a una estructura específica, eso proporciona tanto información diagnóstica como alivio terapéutico. El éxito depende del diagnóstico preciso de qué estructura puede estar contribuyendo al dolor.
              </p>
            </div>

            <div className="border-b pb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                ¿Debo hacerme otra resonancia magnética?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                No necesariamente. Si su imagen ya es normal y sus síntomas no han cambiado sustancialmente, la imagen adicional generalmente no es útil. Más imagen no mejora el diagnóstico cuando el dolor es funcional en lugar de estructural. Sin embargo, si sus síntomas cambian significativamente —nuevos hallazgos neurológicos, debilidad progresiva o nuevas características preocupantes— entonces la imagen puede ayudar a identificar qué ha cambiado. Solo recomiendo imagen cuando los hallazgos clínicos sugieren que guiaría las decisiones de tratamiento.
              </p>
            </div>

            <div className="border-b pb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                ¿Puede existir dolor nervioso sin hallazgos de resonancia?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Absolutamente. Los nervios pueden irritarse, inflamarse o dañarse parcialmente de maneras que no se muestran en una resonancia magnética estándar. Un nervio puede funcionar anormalmente y causar dolor —punzante, ardiente, sensación radiante— sin compresión obvia visible en la imagen. Los hallazgos del examen físico, los patrones de síntomas y la respuesta a los bloqueos nerviosos diagnósticos pueden confirmar la implicación nerviosa incluso cuando la imagen parece normal. Esta es una de las razones más comunes de imagen normal con dolor significativo.
              </p>
            </div>

            <div className="border-b pb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                ¿Cómo diagnostica el dolor cuando la imagen es normal?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A través de evaluación clínica sistemática. Comienzo con un historial detallado: ¿Cuándo comenzó el dolor? ¿Qué lo empeora o mejora? ¿Qué ha intentado? Luego realizo un examen físico cuidadoso —rango de movimiento, pruebas neurológicas, fuerza, sensación y maniobras específicas que reproducen su dolor. Evalúo sus limitaciones funcionales y cómo el dolor afecta las actividades diarias. Esta imagen clínica, combinada con pruebas diagnósticas cuando sea apropiado (como inyecciones dirigidas), me ayuda a identificar los generadores de dolor probables y desarrollar un tratamiento apropiado.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                ¿Cuándo debo buscar evaluación?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Si tiene dolor persistente (que dura más de algunas semanas) que limita sus actividades, una evaluación integral puede ayudar a identificar qué lo está causando. Esto es especialmente cierto si tiene imagen normal pero síntomas continuos. No espere asumiendo que el dolor se resolverá por sí solo, y no asuma que la imagen normal significa que el tratamiento es imposible. Un especialista certificado en medicina del dolor puede ayudar a identificar qué está causando su dolor y desarrollar una estrategia de tratamiento adaptada a su situación específica.
              </p>
            </div>

          </div>
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

        {/* Section 6: Next Steps */}
        <section className="mb-12 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Próximos Pasos
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            El dolor es real incluso cuando la imagen es normal. El diagnóstico requiere más que revisar un escáner. Una evaluación clínica integral puede ayudar a identificar los generadores de dolor probables y las opciones de tratamiento apropiadas.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            Si tiene imagen normal pero dolor continuo, le recomiendo que programe una consulta. Podemos discutir sus síntomas, realizar una evaluación exhaustiva y desarrollar un plan de tratamiento adaptado a su situación específica.
          </p>

          <div className="flex flex-col gap-4">
            <Link
              href="/es/consultas-virtuales"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Programar una Consulta Virtual
            </Link>
            <p className="text-sm text-gray-600">
              Las consultas virtuales nos permiten discutir su condición, responder sus preguntas y determinar el mejor enfoque de evaluación y tratamiento para usted.
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

      </article>
    </>
  )
}
