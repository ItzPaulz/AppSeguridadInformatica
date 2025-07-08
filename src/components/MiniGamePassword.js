import React, { useState } from 'react';

const MiniGamePassword = ({ onComplete }) => {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const checkPassword = () => {
    if (isComplete) return;

    const hasMinLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (hasMinLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar) {
      setMessage('¡Contraseña SÚPER Segura! ¡Felicidades, eres un guardián de secretos!');
      setIsComplete(true);
      setTimeout(() => onComplete(true), 2000);
    } else {
      let feedback = '¡Casi lo logras! Tu contraseña necesita:';
      if (!hasMinLength) feedback += ' más de 8 letras,';
      if (!hasUpperCase) feedback += ' una letra MAYÚSCULA,';
      if (!hasLowerCase) feedback += ' una letra minúscula,';
      if (!hasNumber) feedback += ' un número,';
      if (!hasSpecialChar) feedback += ' un símbolo especial (como !, @, #).';
      setMessage(feedback.slice(0, -1) + '. ¡Intenta de nuevo!');
    }
  };

  return (
    <div className="p-6 bg-yellow-50 rounded-xl shadow-md text-center border border-yellow-200">
      <h3 className="text-xl font-bold text-yellow-800 mb-4">Crea una Contraseña Secreta</h3>
      <p className="text-yellow-700 mb-4">¡Ayuda al detective a crear una contraseña muy fuerte!</p>
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Escribe tu contraseña aquí..."
        className="w-full px-4 py-2 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
        disabled={isComplete}
      />
      <button
        onClick={checkPassword}
        className={`mt-4 py-2 px-6 rounded-lg shadow-md ${isComplete ? 'bg-gray-400 cursor-not-allowed' : 'bg-yellow-500 text-white hover:bg-yellow-600 transition-colors'}`}
        disabled={isComplete}
      >
        ¡Revisar!
      </button>
      {message && <p className="mt-4 text-yellow-800 font-semibold">{message}</p>}
    </div>
  );
};

export default MiniGamePassword;