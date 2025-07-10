import React, { useState, useEffect } from "react";

const posts = [
  { id: 1, title: "Concurso de memes", bad: false },
  { id: 2, title: "Video de acoso en chat", bad: true },
  { id: 3, title: "Tutorial de baile", bad: false },
  { id: 4, title: "Amenazas a un usuario", bad: true },
  { id: 5, title: "Consejos de estudio", bad: false },
  { id: 6, title: "Lenguaje ofensivo", bad: true },
];

const TOTAL_ROUNDS = 6;
const DISPLAY_TIME = 3000; // ms

const MiniGameContentFlag = ({ onComplete }) => {
  const [round, setRound] = useState(0);
  const [current, setCurrent] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (round >= TOTAL_ROUNDS) {
      endGame();
      return;
    }
    // pick a random post for this round
    const next = posts[Math.floor(Math.random() * posts.length)];
    setCurrent(next);
    const timer = setTimeout(() => handleIgnore(), DISPLAY_TIME);
    return () => clearTimeout(timer);
  }, [round]);

  const handleFlag = () => {
    if (finished) return;
    if (current.bad) setScore((s) => s + 1);
    setMessage(current.bad ? "¡Buen ojo!" : "Era seguro...");
    nextRound();
  };

  const handleIgnore = () => {
    if (finished) return;
    if (!current.bad) setScore((s) => s + 1);
    setMessage(!current.bad ? "¡Bien ignorado!" : "Debiste reportar.");
    nextRound();
  };

  const nextRound = () => {
    setFinished(false);
    setRound((r) => r + 1);
    setMessage("");
  };

  const endGame = () => {
    setFinished(true);
    setMessage(`Juego completado: ${score} de ${TOTAL_ROUNDS}`);
    setTimeout(() => onComplete(score === TOTAL_ROUNDS), 2000);
  };

  if (finished)
    return (
      <div className="p-6 bg-yellow-100 rounded-xl shadow-md text-center border border-yellow-300">
        <h3 className="text-xl font-bold text-yellow-800 mb-2">¡Terminado!</h3>
        <p className="text-yellow-700 mb-4">{message}</p>
      </div>
    );

  return (
    <div className="p-6 bg-yellow-100 rounded-xl shadow-md text-center border border-yellow-300">
      <h3 className="text-xl font-bold text-yellow-800 mb-2">
        Reto de Reporte Rápido
      </h3>
      <p className="text-yellow-700 mb-4">
        Round {round + 1} / {TOTAL_ROUNDS}
      </p>
      {current && <p className="text-lg font-semibold mb-4">{current.title}</p>}
      <div className="space-x-4">
        <button
          onClick={handleFlag}
          className="py-2 px-6 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors shadow"
        >
          Reportar
        </button>
        <button
          onClick={handleIgnore}
          className="py-2 px-6 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors shadow"
        >
          Ignorar
        </button>
      </div>
      {message && (
        <p className="mt-4 text-yellow-800 font-semibold">{message}</p>
      )}
    </div>
  );
};

export default MiniGameContentFlag;
