import React, { useState, useEffect } from "react";

const items = [
  { id: 1, label: "Contraseña segura", safe: true },
  { id: 2, label: "Enlace sospechoso", safe: false },
  { id: 3, label: "Actualización oficial", safe: true },
  { id: 4, label: "Descarga pirata", safe: false },
  { id: 5, label: "Antivirus en juego", safe: true },
];

const TOTAL_TIME = 10; // segundos

const MiniGameVideoSecurity = ({ onComplete }) => {
  const [selected, setSelected] = useState([]);
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [message, setMessage] = useState("");
  const [ended, setEnded] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0 && !ended) {
      finishGame();
      return;
    }
    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, ended]);

  const toggle = (id) => {
    if (ended) return;
    setSelected((s) =>
      s.includes(id) ? s.filter((x) => x !== id) : [...s, id]
    );
  };

  const finishGame = () => {
    const correct = items.every((i) => i.safe === selected.includes(i.id));
    setEnded(true);
    setMessage(
      correct ? "¡Ganaste! Juegas seguro." : "¡Falla! Revisa los riesgos."
    );
    setTimeout(() => onComplete(correct), 2000);
  };

  return (
    <div className="p-6 bg-green-50 rounded-xl shadow-md text-center border border-green-200">
      <h3 className="text-xl font-bold text-green-800 mb-2">
        Reto Gamer Seguro
      </h3>
      <p className="text-green-700 mb-4">
        Selecciona solo lo SEGURO antes de que acabe el tiempo:
      </p>
      <div className="text-lg font-mono mb-4">Tiempo: {timeLeft}s</div>

      <div className="grid grid-cols-1 gap-3 mb-4">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => toggle(item.id)}
            className={`w-full py-2 px-4 rounded-lg transition-colors border shadow-sm
              ${
                selected.includes(item.id)
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-white text-gray-800 hover:bg-green-100"
              }`}
            disabled={ended}
          >
            {item.label}
          </button>
        ))}
      </div>

      <button
        onClick={finishGame}
        disabled={ended}
        className={`mt-2 py-2 px-6 rounded-lg shadow-md
          ${
            ended
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-500 text-white hover:bg-green-600"
          }`}
      >
        {ended ? "Juego Terminado" : "Terminar Ahora"}
      </button>
      {message && (
        <p className="mt-4 text-green-800 font-semibold">{message}</p>
      )}
    </div>
  );
};

export default MiniGameVideoSecurity;
