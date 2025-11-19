
import * as React from 'react';
import { Module } from './types';

export const courseModules: Module[] = [
  {
    id: 1,
    title: "Módulo 1: El Problema del Error Médico y la Evidencia I-PASS",
    summary: "Análisis del impacto de los errores de comunicación en la seguridad del paciente y los resultados del estudio multicéntrico I-PASS publicados en NEJM y JAMA.",
    content: (
      <div className="space-y-6 text-gray-800 leading-relaxed">
        <h3 className="text-2xl font-bold text-amber-800">Introducción: La Crisis de Comunicación</h3>
        <p>
          Los errores médicos prevenibles representan una de las principales causas de morbilidad y mortalidad en los sistemas de salud modernos. La literatura médica, incluidos los informes de la Joint Commission, ha establecido consistentemente que las fallas en la comunicación son la causa raíz de aproximadamente dos tercios de los "eventos centinela" (eventos adversos graves que conducen a la muerte o lesiones físicas serias).
        </p>
        <p>
          En el contexto de la residencia médica, la reducción de las horas de trabajo de los residentes, aunque beneficiosa para reducir la fatiga, ha incrementado paradójicamente la frecuencia de los traspasos de pacientes ("handoffs"). Cada traspaso es un punto crítico de vulnerabilidad donde la información puede perderse, distorsionarse u omitirse.
        </p>

        <h3 className="text-2xl font-bold text-amber-800">El Estudio I-PASS: Diseño y Resultados</h3>
        <p>
          Para abordar esta problemática, el Grupo de Estudio I-PASS llevó a cabo un estudio de intervención prospectivo en nueve hospitales pediátricos de Estados Unidos y Canadá (NEJM 2014). El estudio evaluó la implementación de un "paquete" (bundle) de traspaso que incluía estandarización de procesos orales y escritos, capacitación en comunicación y facultades de observación.
        </p>
        <ul className="list-disc pl-6 space-y-2 bg-yellow-100 p-4 rounded-lg border border-yellow-200">
          <li><strong>Población:</strong> Se analizaron 10,740 ingresos de pacientes.</li>
          <li><strong>Metodología:</strong> Vigilancia activa de errores médicos y eventos adversos prevenibles pre y post intervención.</li>
          <li><strong>Resultado Principal 1:</strong> La tasa de errores médicos disminuyó en un <strong>23%</strong> (24.5 vs 18.8 por cada 100 admisiones, P&lt;0.001).</li>
          <li><strong>Resultado Principal 2:</strong> La tasa de eventos adversos prevenibles disminuyó en un <strong>30%</strong> (4.7 vs 3.3 por cada 100 admisiones, P&lt;0.001).</li>
        </ul>
        <p>
          Es crucial destacar que estos resultados se lograron sin un impacto negativo en el flujo de trabajo de los residentes. El tiempo dedicado a los traspasos orales y al contacto directo con el paciente no cambió significativamente, lo que refuta la preocupación común de que los protocolos estandarizados consumen demasiado tiempo clínico.
        </p>
        <h3 className="text-2xl font-bold text-amber-800">Evidencia Previa (JAMA 2013)</h3>
        <p>
          Un estudio precursor en el Boston Children's Hospital ya había demostrado la eficacia de este enfoque en un solo centro. Los resultados mostraron una reducción de errores del 33.8 al 18.3 por cada 100 admisiones. Además, se observó que los traspasos verbales tenían más probabilidades de ocurrir en lugares privados y silenciosos tras la intervención, mejorando la calidad de la transmisión de información.
        </p>
      </div>
    ),
    quiz: [
      {
        id: 1,
        text: "¿Cuál fue el porcentaje de reducción de eventos adversos prevenibles tras la implementación de I-PASS según el estudio del NEJM?",
        options: ["10%", "23%", "30%", "45%"],
        correctAnswer: 2
      },
      {
        id: 2,
        text: "Según los datos presentados, ¿qué efecto tuvo la implementación de I-PASS en la duración de los traspasos orales?",
        options: [
          "Aumentó significativamente el tiempo requerido.",
          "No hubo cambios significativos en la duración.",
          "Redujo el tiempo a la mitad.",
          "Eliminó la necesidad de traspasos orales."
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        text: "¿Cuál es la causa raíz identificada en casi dos tercios de los eventos centinela según la Joint Commission?",
        options: [
          "Falta de conocimientos técnicos.",
          "Fallas en la comunicación.",
          "Fatiga del personal.",
          "Falta de equipamiento."
        ],
        correctAnswer: 1
      },
      {
        id: 4,
        text: "El estudio multicéntrico I-PASS se realizó en:",
        options: [
          "Solo hospitales de adultos.",
          "9 hospitales pediátricos en EE.UU. y Canadá.",
          "Centros de atención primaria exclusivamente.",
          "Un único centro en Boston."
        ],
        correctAnswer: 1
      },
      {
        id: 5,
        text: "¿Qué elemento NO se vio afectado negativamente por la intervención?",
        options: [
          "El flujo de trabajo de los residentes.",
          "La tasa de errores no prevenibles.",
          "El tiempo frente a la computadora.",
          "Todas las anteriores."
        ],
        correctAnswer: 3
      }
    ]
  },
  {
    id: 2,
    title: "Módulo 2: El Currículo I-PASS y la Mnemotecnia",
    summary: "Desglose detallado de los componentes del paquete I-PASS y la definición operativa de cada elemento de la mnemotecnia.",
    content: (
      <div className="space-y-6 text-gray-800 leading-relaxed">
        <h3 className="text-2xl font-bold text-amber-800">El Paquete de Handoff I-PASS</h3>
        <p>
          El "I-PASS Handoff Bundle" no es solo una regla mnemotécnica; es una intervención educativa y de procesos integral. Basado en principios de TeamSTEPPS y aprendizaje de adultos, el paquete consta de siete elementos clave diseñados para transformar la cultura institucional:
        </p>
        <ol className="list-decimal pl-6 space-y-2 mb-4">
          <li><strong>Mnemotecnia I-PASS:</strong> El ancla cognitiva para la estandarización.</li>
          <li><strong>Taller de Residentes (2 horas):</strong> Enseñanza didáctica e interactiva.</li>
          <li><strong>Simulación y Role-Play (1 hora):</strong> Práctica deliberada en un entorno seguro.</li>
          <li><strong>Módulo Informático:</strong> Aprendizaje autodirigido.</li>
          <li><strong>Desarrollo de Facultad:</strong> Capacitación para que los supervisores observen y den feedback.</li>
          <li><strong>Herramientas de Observación Directa:</strong> Formularios validados para evaluar la calidad.</li>
          <li><strong>Campaña de Cambio Cultural:</strong> Materiales visuales, logotipos y refuerzo continuo ("Better Handoffs. Safer Care").</li>
        </ol>

        <h3 className="text-2xl font-bold text-amber-800">Desglosando la Mnemotecnia I-PASS</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 my-6">
          <div className="bg-amber-100 p-4 rounded border-l-4 border-amber-500">
            <div className="text-xl font-bold text-amber-900">I</div>
            <div className="font-semibold">Illness Severity</div>
            <div className="text-sm mt-2">Gravedad de la enfermedad. Estable, "watcher" (vigilancia), o inestable.</div>
          </div>
          <div className="bg-amber-100 p-4 rounded border-l-4 border-amber-500">
            <div className="text-xl font-bold text-amber-900">P</div>
            <div className="font-semibold">Patient Summary</div>
            <div className="text-sm mt-2">Resumen conciso: eventos previos, curso hospitalario, evaluación actual y plan.</div>
          </div>
          <div className="bg-amber-100 p-4 rounded border-l-4 border-amber-500">
            <div className="text-xl font-bold text-amber-900">A</div>
            <div className="font-semibold">Action List</div>
            <div className="text-sm mt-2">Lista de tareas pendientes ("To-Do"). Deben ser claras y asignables.</div>
          </div>
          <div className="bg-amber-100 p-4 rounded border-l-4 border-amber-500">
            <div className="text-xl font-bold text-amber-900">S</div>
            <div className="font-semibold">Situation Awareness</div>
            <div className="text-sm mt-2">Plan de contingencia. "¿Qué pasa si...?" y "¿Qué hago entonces?".</div>
          </div>
          <div className="bg-amber-100 p-4 rounded border-l-4 border-amber-500">
            <div className="text-xl font-bold text-amber-900">S</div>
            <div className="font-semibold">Synthesis by Receiver</div>
            <div className="text-sm mt-2">Síntesis del receptor. "Read-back" de puntos clave para confirmar entendimiento.</div>
          </div>
        </div>
        <p>
          A diferencia de mnemotecnias anteriores, I-PASS enfatiza la <strong>síntesis por parte del receptor</strong>, transformando el traspaso de un monólogo a un diálogo asegurando el cierre del bucle de comunicación. Además, la inclusión explícita de <strong>Planes de Contingencia</strong> permite anticipar problemas durante la noche, una carencia común en los traspasos tradicionales.
        </p>
      </div>
    ),
    quiz: [
      {
        id: 1,
        text: "¿Qué significa la 'S' final en la mnemotecnia I-PASS?",
        options: ["Subjective data", "Synthesis by receiver", "Sign-out time", "Severity score"],
        correctAnswer: 1
      },
      {
        id: 2,
        text: "¿Cuál es el propósito de la 'Action List' (A)?",
        options: [
          "Listar todos los diagnósticos posibles.",
          "Enumerar tareas pendientes claras y asignables.",
          "Resumir la historia clínica completa.",
          "Documentar las alergias del paciente."
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        text: "El componente de 'Situation Awareness and Contingencia Planning' responde a:",
        options: [
          "¿Quién es el médico tratante?",
          "¿Qué pasa si ocurre un evento adverso y qué debo hacer?",
          "¿Cuál es el estado socioeconómico del paciente?",
          "¿Qué medicamentos tomó el paciente en casa?"
        ],
        correctAnswer: 1
      },
      {
        id: 4,
        text: "¿Qué elemento NO forma parte de los 7 componentes del paquete I-PASS?",
        options: [
          "Campaña de cambio cultural.",
          "Herramientas de observación directa.",
          "Sanciones disciplinarias por errores.",
          "Taller de simulación."
        ],
        correctAnswer: 2
      },
      {
        id: 5,
        text: "En el sistema I-PASS, la gravedad de la enfermedad (Illness Severity) se clasifica generalmente como:",
        options: [
          "1 a 10.",
          "Leve, Moderada, Severa.",
          "Estable, Watcher (vigilancia), Inestable.",
          "Código Azul, Código Rojo."
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 3,
    title: "Módulo 3: Desarrollo e Implementación Curricular",
    summary: "Metodología para el diseño del currículo I-PASS basado en los 6 pasos de Kern y estrategias de cambio organizacional.",
    content: (
      <div className="space-y-6 text-gray-800 leading-relaxed">
        <h3 className="text-2xl font-bold text-amber-800">Metodología de Diseño Curricular</h3>
        <p>
          El desarrollo del currículo I-PASS no fue improvisado; siguió rigurosamente el marco de seis pasos de Kern para el desarrollo de currículos en educación médica (Academic Medicine 2014). Este enfoque sistemático aseguró la calidad y la adaptabilidad del programa.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-100">
          <h4 className="font-bold text-lg mb-2">Los 6 Pasos de Kern aplicados a I-PASS:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Paso 1 (Identificación del Problema):</strong> Reconocimiento de la alta frecuencia de errores en traspasos y requisitos de la ACGME.</li>
            <li><strong>Paso 2 (Evaluación de Necesidades):</strong> Grupos focales en 9 sitios para entender las prácticas actuales y la cultura local.</li>
            <li><strong>Paso 3 (Objetivos):</strong> Definición clara de qué deben saber y hacer los residentes y facultativos.</li>
            <li><strong>Paso 4 (Estrategias Educativas):</strong> Selección de métodos multimodales (videos, simulación, mnemotecnia).</li>
            <li><strong>Paso 5 (Implementación):</strong> Despliegue en oleadas, uso de "campeones" locales y campañas visuales.</li>
            <li><strong>Paso 6 (Evaluación):</strong> Medición de resultados educativos (encuestas) y clínicos (tasas de error).</li>
          </ul>
        </div>

        <h3 className="text-2xl font-bold text-amber-800">Modelo Lógico y Cambio Cultural</h3>
        <p>
          Los autores utilizaron un <strong>Modelo Lógico</strong> para visualizar los recursos, actividades, "outputs" y resultados esperados. Un hallazgo clave fue que la educación por sí sola es insuficiente; se requiere un cambio cultural.
        </p>
        <p>
          Para lograr este cambio transformacional, se identificó la necesidad de "institucionalizar" la intervención. Esto se logró mediante el apoyo visible del liderazgo hospitalario, la integración de herramientas I-PASS en la historia clínica electrónica (en la mayoría de los sitios) y la designación de líderes residentes y docentes (Faculty Champions) que recibían créditos de mantenimiento de certificación (MOC) por su participación.
        </p>
        <p>
          La sostenibilidad del programa depende de esta infraestructura: no basta con enseñar la mnemotecnia una vez; debe ser observada, evaluada y reforzada diariamente en las rondas y cambios de turno.
        </p>
      </div>
    ),
    quiz: [
      {
        id: 1,
        text: "¿Qué marco teórico se utilizó para el desarrollo del currículo I-PASS?",
        options: [
          "El ciclo PDSA de Deming.",
          "Los 6 pasos de Kern para el desarrollo curricular.",
          "La taxonomía de Bloom exclusivamente.",
          "El modelo Flexner."
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        text: "¿Qué papel jugaron los 'Faculty Champions' (Campeones de la Facultad)?",
        options: [
          "Solo observaban pasivamente.",
          "Realizaban observaciones, daban feedback y lideraban la implementación local.",
          "Eran responsables de los errores médicos.",
          "Diseñaron el software informático."
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        text: "Según el modelo lógico descrito, ¿qué elemento es necesario además de la educación para el éxito?",
        options: [
          "Un aumento de sueldo para los residentes.",
          "Un cambio cultural e institucionalización del proceso.",
          "Eliminar los turnos nocturnos.",
          "Reducir el número de pacientes."
        ],
        correctAnswer: 1
      },
      {
        id: 4,
        text: "¿Qué paso de Kern implica determinar las prácticas actuales mediante grupos focales?",
        options: [
          "Paso 1: Identificación del problema.",
          "Paso 2: Evaluación de necesidades de los aprendices.",
          "Paso 5: Implementación.",
          "Paso 6: Evaluación y feedback."
        ],
        correctAnswer: 1
      },
      {
        id: 5,
        text: "Para la sostenibilidad, ¿qué herramienta tecnológica se integró en la mayoría de los sitios?",
        options: [
          "Grabadoras de voz.",
          "Herramientas de traspaso en la Historia Clínica Electrónica.",
          "Pizarras físicas en cada habitación.",
          "Mensajería instantánea no segura."
        ],
        correctAnswer: 1
      }
    ]
  }
];
