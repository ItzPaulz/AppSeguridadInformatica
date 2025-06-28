import React from 'react';

const TopicDetail = ({ topic, onBack }) => {
  if (!topic) {
    return null;
  }

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
          <div className="mb-6 rounded-xl overflow-hidden shadow-md">
            <iframe
              className="w-full aspect-video"
              src={topic.videoUrl}
              title={topic.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {topic.animation && (
          <div className="mb-6 p-4 bg-blue-50 rounded-xl text-center">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Animación Interactiva</h3>
            <p className="text-blue-600">Aquí iría la animación de {topic.animation}.</p>
            {/* Placeholder para la animación */}
            <div className="w-full h-32 bg-blue-200 rounded-lg flex items-center justify-center text-blue-800 text-sm mt-2">
              [Espacio para animación de {topic.animation}]
            </div>
          </div>
        )}

        {topic.graphic && (
          <div className="mb-6 p-4 bg-green-50 rounded-xl text-center">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Gráfico Explicativo</h3>
            <p className="text-green-600">Aquí iría el gráfico de {topic.graphic}.</p>
            {/* Placeholder para el gráfico */}
            <div className="w-full h-32 bg-green-200 rounded-lg flex items-center justify-center text-green-800 text-sm mt-2">
              [Espacio para gráfico de {topic.graphic}]
            </div>
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