import React from 'react';

const TopicCard = ({ topic, onSelectTopic }) => {
  return (
    <div
      onClick={() => onSelectTopic(topic)}
      className="bg-white rounded-2xl shadow-lg p-5 m-3 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center text-center"
    >
      <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
        {/* Placeholder para icono/animación */}
        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{topic.title}</h3>
      <p className="text-gray-600 text-sm">{topic.description}</p>
    </div>
  );
};

export default TopicCard;