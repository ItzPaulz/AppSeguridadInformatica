import React, { useState } from "react";

const questions = [
  {
    id: 1,
    text: "¿Cuál es la ventaja principal de usar un gestor de contraseñas?",
    options: [
      { text: "Recordar todas mis contraseñas por mí", correct: true },
      {
        text: "Compartir mis contraseñas con amigos fácilmente",
        correct: false,
      },
      { text: "Eliminar mis contraseñas después de un tiempo", correct: false },
    ],
  },
  {
    id: 2,
    text: "¿Cuál de estas prácticas NO es segura al usar un gestor?",
    options: [
      {
        text: "Usar la extensión del navegador para autocompletar",
        correct: false,
      },
      {
        text: "Sincronizar contraseñas con múltiples dispositivos",
        correct: false,
      },
      {
        text: "Compartir el archivo de base de datos sin cifrar",
        correct: true,
      },
    ],
  },
  {
    id: 3,
    text: "Para proteger tu gestor de contraseñas, debes:",
    options: [
      { text: "Usar una contraseña maestra fuerte y única", correct: true },
      {
        text: "Anotar la contraseña maestra en un post-it visible",
        correct: false,
      },
      {
        text: "Dejar la sesión siempre abierta en todos los equipos",
        correct: false,
      },
    ],
  },
];

const MiniGamePasswordManager = ({ onComplete }) => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");
  const [gameOver, setGameOver] = useState(false);

  const handleAnswer = (correct) => {
    if (gameOver) return;
    if (correct) {
      setScore((s) => s + 1);
      setMessage("¡Correcto! 🎉");
    } else {
      setMessage("Incorrecto. ❌");
    }
    setTimeout(() => {
      setMessage("");
      if (current < questions.length - 1) {
        setCurrent((c) => c + 1);
      } else {
        setGameOver(true);
        onComplete(score + (correct ? 1 : 0) === questions.length);
      }
    }, 1500);
  };

  const q = questions[current];

  return (
    <div className="p-6 bg-teal-50 rounded-xl shadow-md text-center border border-teal-200">
      <h3 className="text-xl font-bold text-teal-800 mb-4">
        Gestor de Contraseñas
      </h3>
      <p className="text-teal-700 mb-4">{q.text}</p>

      {!gameOver ? (
        <div className="grid grid-cols-1 gap-3 mb-4">
          {q.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(opt.correct)}
              className="bg-teal-400 text-white py-2 px-4 rounded-lg hover:bg-teal-500 transition-colors shadow-sm"
            >
              {opt.text}
            </button>
          ))}
        </div>
      ) : (
        <div className="text-lg font-semibold text-teal-800">
          <p>¡Juego terminado!</p>
          <p>
            Tu puntuación: {score} / {questions.length}
          </p>
          {score === questions.length ? (
            <p className="text-green-600">¡Eres un pro de los gestores!</p>
          ) : (
            <p className="text-red-600">Sigue practicando. 💪</p>
          )}
        </div>
      )}

      {message && <p className="mt-4 text-teal-800 font-semibold">{message}</p>}
    </div>
  );
};

export default MiniGamePasswordManager;
