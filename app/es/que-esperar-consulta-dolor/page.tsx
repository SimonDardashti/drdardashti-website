import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://www.drdardashti.com/es/que-esperar-consulta-dolor";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Qué Esperar Durante Su Consulta de Manejo del Dolor | Simon Dardashti, MD" },
  description:
    "Guía de educación al paciente sobre qué esperar durante su consulta de manejo del dolor. Aprenda qué traer, qué preguntas se hacen, y cómo se toman decisiones de tratamiento.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Qué Esperar Durante Su Consulta de Manejo del Dolor | Simon Dardashti, MD",
    description:
      "Guía educativa del paciente explicando el proceso de consulta de dolor, métodos de evaluación, y cómo se desarrollan planes de tratamiento.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qué Esperar Durante Su Consulta de Manejo del Dolor | Simon Dardashti, MD",
    description: "Entendiendo el proceso de evaluación de dolor y qué sucede durante su cita.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalWebPage", "Article"],
  name: "Qué Esperar Durante Su Consulta de Manejo del Dolor | Simon Dardashti, MD",
  url: PAGE_URL,
  headline: "Qué Esperar Durante Su Consulta de Manejo del Dolor",
  description:
    "Guía completa para entender su consulta de manejo del dolor. Aprenda qué traer, cómo se estructura la evaluación, preguntas comunes, examen físico, y cómo se toman decisiones de tratamiento.",
  image: "https://drdardashti.com/og-images/que-esperar-consulta-dolor.jpg",
  datePublished: "2026-06-18",
  dateModified: "2026-06-18",
  author: {
    "@type": "Person",
    name: "Simon Dardashti, MD",
    title: "Especialista en Medicina del Dolor Certificado",
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
        name: "¿Cuánto tiempo típicamente toma una consulta de dolor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Las consultas iniciales típicamente toman 45-90 minutos. Esto permite tiempo adecuado para historial detallado, examen físico, revisión de imagen y registros, y discusión exhaustiva de hallazgos y opciones de tratamiento. Las visitas subsecuentes son usualmente más cortas (20-30 minutos) a menos que procedimientos adicionales o cambios mayores se planeen.",
        },
      },
      {
        "@type": "Question",
        name: "¿Necesito traer algo a mi consulta?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Traiga identificación con foto, tarjeta de seguro, lista de medicamentos actuales, registros de otros especialistas (si disponible), e imagen (MRI, CT, radiografías) o resultados de pruebas. Si registros están disponibles electrónicamente, tráigalos en USB o envíelos por correo electrónico con anticipación para que pueda revisarlos antes de su cita.",
        },
      },
      {
        "@type": "Question",
        name: "¿Va a ordenar imagen nueva?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No necesariamente. Revisaré cuidadosamente cualquier imagen existente. La imagen nueva se ordena solo cuando hallazgos clínicos específicos sugieren que es necesaria. Muchas condiciones de dolor se diagnostican y tratan efectivamente sin imagen adicional. El objetivo es evaluación comprehensiva de sus síntomas actuales, no solo hallazgos de imagen.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasará si los doctores anteriores no pudieron encontrar la causa de mi dolor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El dolor puede originarse de estructuras específicas (articulaciones, nervios, músculos) que no pueden verse en imagen estándar o que no han sido evaluadas sistemáticamente. Mi enfoque es historial detallado, examen físico exhaustivo, e inyecciones diagnósticas cuando es apropiado para identificar fuentes específicas de dolor. Muchos pacientes previamente etiquetados como teniendo 'ninguna causa clara' realmente tienen fuentes identificables.",
        },
      },
      {
        "@type": "Question",
        name: "¿Va a recomendar cirugía?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La cirugía es raramente mi primera recomendación. La mayoría de pacientes se benefician del manejo conservador (fisioterapia, medicamentos, modificación de actividad) o procedimientos mínimamente invasivos. Si imagen estructural muestra claramente un problema que probablemente mejoraría con cirugía, discutiré esa opción junto con todas las otras opciones. La decisión siempre es suya.",
        },
      },
    ],
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Qué Esperar", item: PAGE_URL },
    ],
  },
};

export default function QueEsperarConsultaDolorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      <article className="prose prose-lg max-w-3xl mx-auto px-4 py-12 md:py-16 lg:py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900">
          Qué Esperar Durante Su Consulta de Manejo del Dolor
        </h1>

        <section className="mb-12">
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Ver a un especialista en dolor puede sentir incierto si no está seguro de qué esperar. Podría preguntarse: ¿Necesitaré nuevas pruebas? ¿Seré presionado a someterse a procedimientos? ¿Serán escuchadas mis preocupaciones? ¿Esto realmente ayudará?
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Esta página le guía a través de una consulta de dolor típica para que sepa qué esperar, qué preparar, y cómo se toman decisiones de tratamiento. Mi objetivo es proporcionar evaluación exhaustiva y explicación clara para que pueda tomar decisiones informadas sobre su cuidado.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Ya sea que me esté viendo para una consulta inicial o una cita de seguimiento, entender el proceso puede ayudarle a obtener lo máximo de su visita.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Por Qué una Evaluación Comprehensiva Importa
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Muchos pacientes han visto múltiples doctores antes de venir a un especialista en dolor. A veces la imagen muestra algo pero no explica el dolor. A veces la imagen se ve normal a pesar de síntomas significativos. Esta confusión es común—y una evaluación detallada y sistemática ayuda a aclarar lo que realmente está sucediendo.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Una evaluación comprehensiva considera tres cosas:
          </p>

          <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-4">
            <li><strong>Su historia:</strong> ¿Cuándo comenzó el dolor? ¿Qué lo mejora o empeora? ¿Cuánto afecta su función? Este historial es frecuentemente más importante que cualquier prueba.</li>
            <li><strong>Hallazgos físicos:</strong> Cómo se mueve su cuerpo, dónde está sensible, qué reproduce su dolor. Estos hallazgos ayudan a identificar fuentes específicas de dolor.</li>
            <li><strong>Correlación de imagen:</strong> Si imagen existe, ¿coincide con sus síntomas? Muchas veces coincide, pero a veces hallazgos de imagen no explican lo que está experimentando. Ambas posibilidades proporcionan información útil.</li>
          </ol>

          <p className="text-lg leading-relaxed text-gray-700">
            Este enfoque comprehensivo ayuda a identificar lo que está realmente causando su dolor para que el tratamiento pueda dirigirse acertadamente.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Qué Registros Traer
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            <strong>Por favor traiga o proporcione con anticipación:</strong>
          </p>

          <div className="space-y-3 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-700"><strong>Identificación con foto y tarjeta de seguro</strong> — Estándar para cualquier visita médica</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-700"><strong>Lista de todos los medicamentos actuales</strong> — Incluya dosis y qué tan a menudo los toma. Si tiene el frasco, tráigalo.</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-700"><strong>Imagen (MRI, CT, radiografías)</strong> — Si tiene las imágenes actuales en CD o archivos digitales, tráigalas. Esto es mucho más útil que solo un informe de radiología.</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-700"><strong>Registros médicos previos</strong> — Informes quirúrgicos, notas de emergencia, evaluaciones de especialistas previos. Incluso si parecen no relacionados, proporcionan contexto.</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-700"><strong>Resultados de pruebas</strong> — Análisis de sangre, estudios de conducción nerviosa, EMG, u otras pruebas que ha realizado</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-700"><strong>Lista de preguntas</strong> — Anote lo que quiere discutir para no olvidarlo durante la cita</p>
            </div>
          </div>

          <p className="text-lg leading-relaxed text-gray-700">
            <strong>Consejo profesional:</strong> Si registros están disponibles electrónicamente, envíelos por correo electrónico antes de su cita. Esto me permite revisarlos con anticipación y usar el tiempo de cita más eficientemente.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Qué Preguntas Hago Comúnmente
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Un historial detallado es esencial para evaluación de dolor. Espere que pregunte:
          </p>

          <div className="space-y-4 mb-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sobre Su Historial de Dolor</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                <li>¿Cuándo comenzó este dolor? ¿Hubo una lesión o se desarrolló gradualmente?</li>
                <li>¿Dónde está el dolor? ¿Se mantiene en un lugar o se mueve alrededor?</li>
                <li>¿Cómo se siente? (agudo, sordo, ardiente, pulsátil, etc.)</li>
                <li>¿Qué tan malo es en escala de 0-10?</li>
                <li>¿Es constante o va y viene?</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sobre Qué Lo Mejora o Empeora</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                <li>¿Qué posiciones o actividades mejoran el dolor?</li>
                <li>¿Qué posiciones o actividades empeoran el dolor?</li>
                <li>¿Cómo lo afecta el clima?</li>
                <li>¿Cómo lo afecta el estrés?</li>
                <li>¿Ayuda la medicación? ¿Por cuánto?</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sobre Impacto en Su Vida</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                <li>¿Cuánto afecta el dolor su trabajo, pasatiempos, sueño?</li>
                <li>¿Puede ejercitarse o hacer fisioterapia?</li>
                <li>¿Ha tenido que dejar actividades que disfruta?</li>
                <li>¿Cuál es su objetivo principal para el tratamiento?</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sobre Tratamiento Previo</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                <li>¿Qué tratamientos ya ha intentado?</li>
                <li>¿Qué ayudó y por cuánto tiempo?</li>
                <li>¿Qué no funcionó?</li>
                <li>¿Ha tenido procedimientos? ¿Cómo fueron?</li>
              </ul>
            </div>
          </div>

          <p className="text-lg leading-relaxed text-gray-700">
            Esto podría parecer muchas preguntas, pero respuestas detalladas me ayudan a entender su situación única. El dolor raramente tiene una solución que funcione para todos.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Examen Físico: Qué Esperar
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Después de tomar su historial, realizaré un examen físico dirigido. Aquí está lo que típicamente incluye:
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Inspección y Palpación</h3>
              <p className="text-gray-700">
                Mirando el área donde tiene dolor y sintiendo suavemente las estructuras (músculos, articulaciones, nervios) para identificar sensibilidad, hinchazón, o anormalidades. Esto podría reproducir su dolor ligeramente—eso es realmente útil diagnósticamente.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Prueba de Rango de Movimiento</h3>
              <p className="text-gray-700">
                Pidiéndole que mueva su cuello, espalda, articulaciones, o extremidades para evaluar flexibilidad e identificar movimientos que disparan dolor. Anotaré qué movimientos duelen y cuáles no.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Prueba de Fuerza</h3>
              <p className="text-gray-700">
                Pidiéndole que resista contra mi mano mientras pruebo fuerza en varios grupos musculares. Esto ayuda a identificar participación de nervios y severidad de irritación de nervios.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Prueba de Reflejos</h3>
              <p className="text-gray-700">
                Verificando reflejos con un pequeño martillo. Los reflejos anormales pueden indicar participación de nervios en niveles espinales específicos.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Prueba de Sensación</h3>
              <p className="text-gray-700">
                Verificando suavemente sensación al toque ligero o pinchazo en áreas de participación sospechada de nervios para evaluar función de nervios.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Pruebas Especializadas</h3>
              <p className="text-gray-700">
                Dependiendo de su problema, podría usar pruebas específicas diseñadas para identificar fuentes de dolor particulares (por ejemplo, pruebas para irritación de raíz de nervio o participación de articulación facetaria).
              </p>
            </div>
          </div>

          <p className="text-lg leading-relaxed text-gray-700">
            Entiendo que tiene dolor y seré lo más gentil posible. Dígame si algo se siente intolerable o si necesita un descanso.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Por Qué la Imagen Es Solo Parte de la Historia
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Durante la evaluación, revisaré cuidadosamente cualquier imagen existente. Aquí está lo importante a entender:
          </p>

          <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
            <li><strong>Los hallazgos de imagen no siempre coinciden con síntomas:</strong> Muchas personas tienen anormalidades de imagen significativas pero sin dolor. Conversamente, dolor significativo puede existir sin hallazgos obvios de imagen.</li>
            <li><strong>Interpreto imagen en contexto:</strong> Un hallazgo es solo relevante si correlaciona con su ubicación de dolor actual y patrón.</li>
            <li><strong>Imagen nueva podría o no ser necesaria:</strong> Ordeno imagen nueva solo si hallazgos clínicos sugieren que cambiará decisiones de tratamiento. Imagen por sí sola no ayuda.</li>
            <li><strong><Link href="/es/dolor-sin-imagenes" className="text-blue-600 hover:text-blue-800">El dolor puede existir sin hallazgos de imagen claros:</Link></strong> Esto es común y no significa que su dolor no sea real o que no pueda tratarse.</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700">
            Mi evaluación es comprehensiva—su historial y hallazgos de examen físico son frecuentemente más importantes que imagen sola.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Cómo Se Toman Decisiones de Tratamiento
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Al final de la consulta, discutiré mis hallazgos y recomendaciones de tratamiento. Esta discusión incluye:
          </p>

          <div className="space-y-4 mb-6">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Mi Evaluación</h3>
              <p className="text-gray-700">Qué creo que está causando su dolor, basado en historial, examen, e imagen correlación.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Opciones de Tratamiento</h3>
              <p className="text-gray-700">Qué enfoques podrían ayudar, clasificados por qué evidencia apoya y qué es más conservador primero.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Mi Recomendación</h3>
              <p className="text-gray-700">Qué recomiendo basado en su situación, explicando el razonamiento para que entienda por qué.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Su Aporte</h3>
              <p className="text-gray-700">Sus preferencias, objetivos, y cualquier preocupación importan. Esto es colaborativo, no dictado.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">5. Próximos Pasos</h3>
              <p className="text-gray-700">Plan claro de qué sucede después—ya sea comenzando tratamiento conservador, programando procedimientos, o citas de seguimiento.</p>
            </div>
          </div>

          <p className="text-lg leading-relaxed text-gray-700">
            Debería dejar la consulta con entendimiento claro de lo que encontré, por qué estoy recomendando lo que recomiendo, y cuál es el plan.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Recomendaciones Comunes Después de Evaluación
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Dependiendo de mis hallazgos y su situación, las recomendaciones frecuentemente incluyen alguna combinación de:
          </p>

          <div className="space-y-4">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Fisioterapia</h3>
              <p className="text-gray-700">
                Terapia especializada dirigida al problema específico (debilidad, rigidez, desequilibrio muscular). Frecuentemente el tratamiento de primera línea y frecuentemente la parte más importante de su cuidado.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Medicamentos</h3>
              <p className="text-gray-700">
                Medicamentos antiinflamatorios, relajantes musculares, medicamentos para dolor neuropático, u otros dependiendo del tipo de dolor. Coordinado con su médico principal.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Modificación de Actividad</h3>
              <p className="text-gray-700">
                Guía específica sobre qué actividades evitar, qué enfatizar, corrección de postura, cambios ergonómicos—estrategias prácticas que pueda implementar inmediatamente.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Inyecciones Diagnósticas</h3>
              <p className="text-gray-700">
                Inyecciones estratégicas a fuentes de dolor específicas para identificar qué está causando dolor y a veces proporcionar alivio mientras otros tratamientos tienen efecto.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Intervenciones de Procedimientos</h3>
              <p className="text-gray-700">
                <Link href="/es/opciones-de-tratamiento" className="text-blue-600 hover:text-blue-800">Procedimientos como ablación por radiofrecuencia, bloqueos de nervios, u otras intervenciones</Link> dirigidas a fuentes de dolor específicas identificadas durante evaluación.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Referencia Quirúrgica Cuando Sea Apropiada</h3>
              <p className="text-gray-700">
                Si imagen muestra un problema quirúrgicamente corregible que opciones conservadoras y de procedimientos no han abordado adecuadamente, referiré al cirujano apropiado. La cirugía es raramente mi primera recomendación.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Acerca de Simon Dardashti, MD</h3>
          <p className="text-gray-700 mb-2">
            <strong>Especialista en Medicina del Dolor Certificado</strong>
          </p>
          <ul className="text-sm text-gray-700 space-y-1 mb-3">
            <li>• Entrenamiento especializado en Medicina del Dolor de UCLA</li>
            <li>• 10+ años diagnosticando y tratando condiciones de dolor</li>
            <li>• Enfoque de evaluación comprehensiva y centrada en el paciente</li>
            <li>• Enfoque en identificar fuentes de dolor específicas para tratamiento dirigido</li>
            <li>• Consultas virtuales y en persona disponibles</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Expectativas de Consulta Virtual
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Muchas consultas se conducen virtualmente vía videoconferencia. Aquí está lo que esperar:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li><strong>Espacio tranquilo y privado:</strong> Encuentre una ubicación donde pueda hablar libremente sin distracciones</li>
            <li><strong>Buena iluminación y ángulo de cámara:</strong> Posiciónese para que pueda verle la cara claramente y comunicarse efectivamente</li>
            <li><strong>Registros disponibles:</strong> Mantenga registros médicos, lista de medicamentos, e imagen accesibles durante la llamada</li>
            <li><strong>Evaluación igual de exhaustiva:</strong> Las consultas virtuales incluyen historial detallado y cuestionamiento. El examen físico es limitado (puedo observar postura, movimiento, pero no palpar)</li>
            <li><strong>Requisitos técnicos:</strong> Conexión de internet estable y dispositivo (computadora, tablet, o teléfono) con cámara y audio</li>
            <li><strong>Gestión de tiempo:</strong> Permita el bloque de tiempo completo—no programe otras citas inmediatamente después</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700">
            Las consultas virtuales son exhaustivas y efectivas para evaluación inicial y seguimiento. Algunos procedimientos requieren visitas en persona, que serían discutidas durante su consulta.
          </p>
        </section>

        <section className="mb-12 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Programe Su Consulta de Dolor
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Entender qué esperar puede ayudarle a prepararse mental y prácticamente para su consulta. Estoy comprometido a evaluación exhaustiva, comunicación clara, y planificación de tratamiento colaborativa. Sus preocupaciones importan, y su aporte en decisiones sobre su cuidado es esencial.
          </p>

          <Link
            href="/es/consultas-virtuales"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Programe una Consulta Virtual
          </Link>
          <p className="text-sm text-gray-600 mt-4">
            Las consultas iniciales se pueden conducir vía videoconferencia. Toda información necesaria será recolectada para asegurar una evaluación comprehensiva.
          </p>
        </section>

        <section className="mt-12 pt-8 border-t">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">
            Recursos Relacionados
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><Link href="/es/dolor-sin-imagenes" className="text-blue-600 hover:text-blue-800">Dolor Sin Hallazgos de Imagen</Link></li>
            <li><Link href="/es/opciones-de-tratamiento" className="text-blue-600 hover:text-blue-800">Resumen de Opciones de Tratamiento</Link></li>
            <li><Link href="/es/segunda-opinion-cirugia-columna" className="text-blue-600 hover:text-blue-800">Segunda Opinión Antes de Cirugía de Columna</Link></li>
            <li><Link href="/es/condiciones/dolor-lumbar" className="text-blue-600 hover:text-blue-800">Dolor Lumbar</Link></li>
            <li><Link href="/es/condiciones/dolor-de-cuello" className="text-blue-600 hover:text-blue-800">Dolor de Cuello</Link></li>
            <li><Link href="/es/consultas-virtuales" className="text-blue-600 hover:text-blue-800">Consultas Virtuales</Link></li>
          </ul>
        </section>

        <section className="mt-12 pt-8 border-t text-sm text-gray-600">
          <p>
            <strong>Nota:</strong> Esta página proporciona información general sobre el proceso de consulta. Las consultas individuales pueden variar basadas en su situación específica y necesidades. Todos los pacientes reciben evaluación personalizada apropiada a su condición.
          </p>
        </section>
      </article>
    </>
  );
}
