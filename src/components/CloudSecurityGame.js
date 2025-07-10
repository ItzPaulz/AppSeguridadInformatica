import React, { useState } from "react";

const files = [
  { id: 1, name: "Contraseñas.txt", shouldEncrypt: true },
  { id: 2, name: "Foto_vacaciones.jpg", shouldEncrypt: false },
  { id: 3, name: "Datos_bancarios.xlsx", shouldEncrypt: true },
  { id: 4, name: "Catálogo_productos.pdf", shouldEncrypt: false },
];

const CloudSecurityGame = ({ onComplete }) => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [message, setMessage] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const toggleSelection = (id) => {
    if (isComplete) return;
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const checkGame = () => {
    if (isComplete) return;

    const correct = files.every(
      (f) => selectedIds.includes(f.id) === f.shouldEncrypt
    );

    if (correct) {
      setMessage("¡Perfecto! Todos tus archivos están protegidos. 🎉");
      setIsComplete(true);
      setTimeout(() => onComplete(true), 2000);
    } else {
      setMessage(
        "Ups… algún archivo falta cifrar o está de más. Revisa y vuelve a intentar."
      );
    }
  };

  return (
    <div className="p-6 bg-indigo-50 rounded-xl shadow-md text-center border border-indigo-200">
      <h3 className="text-xl font-bold text-indigo-800 mb-4">Cloud Defender</h3>
      <p className="text-indigo-700 mb-4">
        Selecciona los archivos que DEBES cifrar antes de subirlos:
      </p>

      <div className="space-y-2 mb-4">
        {files.map((file) => (
          <label
            key={file.id}
            className={`flex items-center justify-between px-4 py-2 border rounded-lg cursor-pointer transition-colors
              ${
                selectedIds.includes(file.id)
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-white text-gray-800 hover:bg-indigo-100"
              }`}
            onClick={() => toggleSelection(file.id)}
          >
            <span>{file.name}</span>
            <input
              type="checkbox"
              checked={selectedIds.includes(file.id)}
              readOnly
              className="form-checkbox h-5 w-5 text-indigo-600"
            />
          </label>
        ))}
      </div>

      <button
        onClick={checkGame}
        disabled={isComplete}
        className={`mt-2 py-2 px-6 rounded-lg shadow-md 
          ${
            isComplete
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
          }
        `}
      >
        ¡Comprobar!
      </button>

      {message && (
        <p className="mt-4 text-indigo-800 font-semibold">{message}</p>
      )}
    </div>
  );
};

export default CloudSecurityGame;
