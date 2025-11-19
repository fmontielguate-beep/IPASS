
import * as React from 'react';
import { useState } from 'react';
import { Question } from '../types';
import { Button } from './Button';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

interface QuizProps {
  questions: Question[];
  onComplete: (score: number) => void;
}

export const Quiz: React.FC<QuizProps> = ({ questions, onComplete }) => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleOptionSelect = (questionId: number, optionIndex: number) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    let score = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) score++;
    });
    // Delay to show results briefly before moving on? Or show results and let user click "Finish"
  };

  const getScore = () => {
    let score = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) score++;
    });
    return score;
  };

  const allAnswered = questions.every(q => answers[q.id] !== undefined);

  if (submitted) {
    const finalScore = getScore();
    const passed = finalScore >= 3; // 60% passing grade

    return (
      <div className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-xl border border-amber-100 animate-fade-in">
        <div className="text-center mb-8">
          <div className={`inline-flex p-4 rounded-full mb-4 ${passed ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
            {passed ? <CheckCircle2 size={48} /> : <AlertCircle size={48} />}
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Resultados del Módulo</h2>
          <p className="text-lg text-gray-600">
            Has obtenido <span className="font-bold">{finalScore}</span> de <span className="font-bold">{questions.length}</span> aciertos.
          </p>
        </div>

        <div className="space-y-4 mb-8">
            {questions.map((q, idx) => {
                const isCorrect = answers[q.id] === q.correctAnswer;
                return (
                    <div key={q.id} className={`p-4 rounded border ${isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
                        <p className="font-semibold text-gray-700 mb-2">{idx + 1}. {q.text}</p>
                        <p className="text-sm">
                            Tu respuesta: <span className={isCorrect ? 'text-green-700 font-bold' : 'text-red-700 font-bold'}>
                                {q.options[answers[q.id]]}
                            </span>
                        </p>
                        {!isCorrect && (
                             <p className="text-sm text-gray-600 mt-1">
                                Respuesta correcta: <span className="font-bold">{q.options[q.correctAnswer]}</span>
                             </p>
                        )}
                    </div>
                )
            })}
        </div>

        <div className="flex justify-center">
          <Button onClick={() => onComplete(finalScore)}>
            {passed ? "Continuar / Finalizar Módulo" : "Intentar de Nuevo (Simulado)"}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-8 rounded-r">
        <h3 className="font-bold text-amber-900">Evaluación del Módulo</h3>
        <p className="text-amber-800 text-sm">Responde las 5 preguntas. No podrás regresar a la lección una vez inicies el cuestionario.</p>
      </div>

      <div className="space-y-8">
        {questions.map((q, index) => (
          <div key={q.id} className="bg-white p-6 rounded-xl shadow-sm border border-amber-100">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              <span className="text-amber-500 mr-2">{index + 1}.</span>
              {q.text}
            </h4>
            <div className="space-y-3">
              {q.options.map((option, optIdx) => (
                <label 
                  key={optIdx}
                  className={`flex items-center p-4 rounded-lg border cursor-pointer transition-all ${
                    answers[q.id] === optIdx 
                      ? 'border-amber-500 bg-amber-50 shadow-sm ring-1 ring-amber-500' 
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${q.id}`}
                    className="w-4 h-4 text-amber-600 focus:ring-amber-500 border-gray-300"
                    checked={answers[q.id] === optIdx}
                    onChange={() => handleOptionSelect(q.id, optIdx)}
                  />
                  <span className="ml-3 text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-end">
        <Button 
          onClick={handleSubmit} 
          disabled={!allAnswered}
          className="w-full md:w-auto"
        >
          Enviar Respuestas
        </Button>
      </div>
    </div>
  );
};
