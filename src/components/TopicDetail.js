import React, { useState } from 'react';
import MiniGamePassword from './MiniGamePassword';
import MiniGameStrangerDanger from './MiniGameStrangerDanger';

const TopicDetail = ({ topic, onBack }) => {
  const [iframeError, setIframeError] = useState(false);

  if (!topic) {
    return null;
  }

  const handleGameComplete = (success) => {
    // Aquí puedes añadir lógica para mostrar un mensaje de felicitación
    // o un mensaje para que el usuario intente de nuevo.
    // Por ahora, solo un console.log
    console.log(`Juego completado. Éxito: ${success}`);
  };

  const isKidTopic = topic.ageGroup.includes('niños');

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onBack}
          className="absolute top-4 right-4 bg-gray-200 text-gray-700 rounded-full p-2 hover:bg-gray-300 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">{topic.title}</h2>
        <p className="text-gray-600 text-lg mb-6 text-center">{topic.description}</p>

        {topic.videoUrl && (
          <div className="mb-6 rounded-xl overflow-hidden shadow-md relative group">
            {!iframeError ? (
              <iframe
                className="w-full aspect-video transform transition-transform duration-500 group-hover:scale-105"
                src={topic.videoUrl}
                title={topic.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
                onError={() => setIframeError(true)}
              ></iframe>
            ) : (
              <div className="w-full aspect-video flex flex-col items-center justify-center bg-gray-200">
                <span className="text-gray-700 mb-2">No se pudo cargar el video aquí.</span>
                <a
                  href={topic.videoUrl.replace('/embed/', '/watch?v=')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
                >
                  Abrir en YouTube
                </a>
              </div>
            )}
            {!iframeError && (
              <div className="flex justify-center mt-2">
                <a
                  href={topic.videoUrl.replace('/embed/', '/watch?v=')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
                >
                  Abrir en YouTube
                </a>
              </div>
            )}
          </div>
        )}

        {/* Mostrar segundo video si existe */}
        {topic.videoUrl1 && (
          <div className="mb-6 rounded-xl overflow-hidden shadow-md relative group">
            <iframe
              className="w-full aspect-video transform transition-transform duration-500 group-hover:scale-105"
              src={topic.videoUrl1}
              title={topic.title + " (2)"}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
            ></iframe>
            <div className="flex justify-center mt-2">
              <a
                href={topic.videoUrl1.replace('/embed/', '/watch?v=')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
              >
                Abrir en YouTube
              </a>
            </div>
          </div>
        )}

        {topic.animation && (
          <div className="mb-6 p-4 bg-blue-50 rounded-xl text-center border border-blue-200 shadow-inner">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Animación Interactiva</h3>
            <p className="text-blue-600">Aquí iría la animación de {topic.animation}.</p>
            {/* Placeholder para la animación */}
            <div className="w-full h-32 bg-blue-200 rounded-lg flex items-center justify-center text-blue-800 text-sm mt-2 animate-pulse">
              [Espacio para animación de {topic.animation}]
            </div>
          </div>
        )}

        {topic.graphic && (
          <div className="mb-6 p-4 bg-green-50 rounded-xl text-center border border-green-200 shadow-inner">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Gráfico Explicativo</h3>
            <p className="text-green-600">Aquí iría el gráfico de {topic.graphic}.</p>
            {/* Mostrar imagen si es una URL válida */}
            {topic.graphic.match(/\.(jpeg|jpg|gif|png|svg|webp)$/i) ? (
              <img
                src={topic.graphic}
                alt="Gráfico explicativo"
                className="w-full max-h-64 object-contain rounded-lg mx-auto mt-2"
              />
            ) : (
              <div className="w-full h-32 bg-green-200 rounded-lg flex items-center justify-center text-green-800 text-sm mt-2">
                [Espacio para gráfico de {topic.graphic}]
              </div>
            )}
          </div>
        )}

        {isKidTopic && (
          <div className="mt-8 p-4 bg-indigo-50 rounded-xl shadow-inner border border-indigo-200">
            {topic.id === 1 && <MiniGamePassword onComplete={handleGameComplete} />}
            {topic.id === 4 && <MiniGameStrangerDanger onComplete={handleGameComplete} />}
            {/* Agrega más minijuegos aquí según el topic.id */}
            {![1, 4].includes(topic.id) && (
              <p className="text-indigo-700 text-center">¡Pronto habrá un juego para este tema!</p>
            )}
          </div>
        )}

        <button
          onClick={onBack}
          className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
        >
          Volver a Temas
        </button>
      </div>
    </div>
  );
};

export default TopicDetail;

