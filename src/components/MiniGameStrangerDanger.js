import React, { useState } from 'react';

const MiniGameStrangerDanger = ({ onComplete }) => {
  const questions = [
    {
      id: 1,
      text: "¿Qué haces si un desconocido te pide tu nombre completo en un juego online?",
      options: [
        { text: "Se lo doy, es mi amigo del juego.", correct: false },
        { text: "No se lo doy y le digo a un adulto.", correct: true },
        { text: "Le pregunto el suyo primero.", correct: false },
      ],
    },
    {
      id: 2,
      text: "¿Si alguien te envía un regalo virtual muy bonito, pero te pide tu dirección de casa, qué haces?",
      options: [
        { text: "Le doy mi dirección, ¡es un regalo!", correct: false },
        { text: "No le doy mi dirección y bloqueo a la persona.", correct: true },
        { text: "Le pido que me lo envíe a la casa de un amigo.", correct: false },
      ],
    },
    {
      id: 3,
      text: "¿Un nuevo amigo online te invita a conocerlo en persona sin que tus papás sepan, qué haces?",
      options: [
        { text: "Voy, ¡será divertido!", correct: false },
        { text: "Le digo a mis papás y no voy.", correct: true },
        { text: "Le digo que sí, pero no voy.", correct: false },
      ],
    },
    {
      id: 4,
      text: "¿Si alguien te hace sentir incómodo o te pide algo raro en internet, qué debes hacer?",
      options: [
        { text: "Seguirle el juego para no ser grosero.", correct: false },
        { text: "Bloquearlo y contárselo a un adulto de confianza.", correct: true },
        { text: "Ignorarlo y esperar que se vaya.", correct: false },
      ],
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('');
  const [gameOver, setGameOver] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (gameOver) return;

    if (isCorrect) {
      setScore(score + 1);
      setMessage('¡Correcto! ¡Eres un superhéroe de la seguridad!');
    } else {
      setMessage('¡Incorrecto! ¡Pero no te rindas, sigue aprendiendo!');
    }

    setTimeout(() => {
      setMessage('');
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setGameOver(true);
        onComplete(score === questions.length);
      }
    }, 1500);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="p-6 bg-purple-50 rounded-xl shadow-md text-center border border-purple-200">
      <h3 className="text-xl font-bold text-purple-800 mb-4">¡Detective de Desconocidos!</h3>
      <p className="text-purple-700 mb-4">Lee la situación y elige la mejor opción para estar seguro.</p>
      {!gameOver ? (
        <div className="mb-6">
          <p className="text-lg font-semibold text-purple-900 mb-4">{currentQuestion.text}</p>
          <div className="grid grid-cols-1 gap-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.correct)}
                className="bg-purple-400 text-white py-2 px-4 rounded-lg hover:bg-purple-500 transition-colors shadow-sm"
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-lg font-bold text-purple-900">
          <p>¡Juego terminado!</p>
          <p>Tu puntuación final: {score} de {questions.length}</p>
          {score === questions.length ? (
            <p className="text-green-600">¡Eres un experto en seguridad online!</p>
          ) : (
            <p className="text-red-600">¡Sigue practicando para ser un campeón!</p>
          )}
        </div>
      )}
      {message && <p className="mt-4 text-purple-800 font-semibold">{message}</p>}
    </div>
  );
};

export default MiniGameStrangerDanger;