import React from 'react';
import TopicCard from './TopicCard';

const TopicList = ({ topics, onSelectTopic }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Temas de Concientización</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <TopicCard key={topic.id} topic={topic} onSelectTopic={onSelectTopic} />
        ))}
      </div>
    </div>
  );
};

export default TopicList;