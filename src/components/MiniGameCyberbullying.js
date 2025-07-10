import React, { useState } from "react";

const words = [
  { answer: "REPORTAR", scrambled: "RRPEOTAR" },
  { answer: "BLOQUEAR", scrambled: "LORERBQU" },
  { answer: "HABLAR", scrambled: "BLHAAR" },
];

const MiniGameCyberbullying = ({ onComplete }) => {
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const [completed, setCompleted] = useState(false);

  const checkWord = () => {
    const current = words[index];
    if (input.trim().toUpperCase() === current.answer) {
      if (index === words.length - 1) {
        setMessage("¡Excelente! Sabes cómo actuar.");
        setCompleted(true);
        setTimeout(() => onComplete(true), 1500);
      } else {
        setMessage("¡Bien! Sigue con la siguiente.");
        setIndex((i) => i + 1);
        setInput("");
      }
    } else {
      setMessage("Casi… inténtalo de nuevo.");
    }
  };

  if (completed)
    return (
      <div className="p-6 bg-red-50 rounded-xl shadow-md text-center border border-red-200">
        <h3 className="text-xl font-bold text-red-800 mb-4">
          ¡Juego completado!
        </h3>
        <p className="text-red-700">
          Tu puntuación: {words.length} de {words.length}
        </p>
      </div>
    );

  const { scrambled } = words[index];

  return (
    <div className="p-6 bg-red-50 rounded-xl shadow-md text-center border border-red-200">
      <h3 className="text-xl font-bold text-red-800 mb-4">
        Desenreda el Mensaje
      </h3>
      <p className="text-red-700 mb-4">
        Ordena la palabra clave para saber qué hacer:
      </p>
      <div className="mb-4 text-2xl font-mono tracking-widest text-red-600">
        {scrambled}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Escribe aquí..."
        className="w-full px-4 py-2 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 mb-4"
        disabled={completed}
      />
      <button
        onClick={checkWord}
        className="py-2 px-6 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors shadow-md"
        disabled={completed}
      >
        ¡Verificar!
      </button>
      {message && <p className="mt-4 text-red-800 font-semibold">{message}</p>}
    </div>
  );
};

export default MiniGameCyberbullying;
