import React, { useState, useEffect } from "react";
import AgeGroupSelector from "./components/AgeGroupSelector";
import TopicList from "./components/TopicList";
import TopicDetail from "./components/TopicDetail";
import { topics } from "./mock/topics";
import { createStorage, getStorage, setStorage } from "./utils/storage";

const App = () => {
  const [selectedAgeGroup, setSelectedAgeGroup] = useState(() =>
    createStorage("selectedAgeGroup", null)
  );
  const [selectedTopic, setSelectedTopic] = useState(null);

  useEffect(() => {
    setStorage("selectedAgeGroup", selectedAgeGroup);
  }, [selectedAgeGroup]);

  const handleSelectAgeGroup = (ageGroup) => {
    setSelectedAgeGroup(ageGroup);
    setSelectedTopic(null); // Reset topic when age group changes
  };

  const handleSelectTopic = (topic) => {
    setSelectedTopic(topic);
  };

  const handleBackToTopics = () => {
    setSelectedTopic(null);
  };

  const filteredTopics = selectedAgeGroup
    ? topics.filter((topic) => topic.ageGroup.includes(selectedAgeGroup))
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-sans">
      <header className="bg-blue-600 text-white p-5 shadow-lg">
        <h1 className="text-3xl font-extrabold text-center">CiberSeguro</h1>
        <p className="text-center text-blue-200 mt-1">
          Tu guía para una vida digital segura
        </p>
      </header>

      {!selectedAgeGroup && (
        <AgeGroupSelector
          onSelectAgeGroup={handleSelectAgeGroup}
          selectedAgeGroup={selectedAgeGroup}
        />
      )}

      {selectedAgeGroup && !selectedTopic && (
        <div className="p-4">
          <button
            onClick={() => handleSelectAgeGroup(null)}
            className="mb-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors flex items-center"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              ></path>
            </svg>
            Cambiar Grupo de Edad
          </button>
          <TopicList
            topics={filteredTopics}
            onSelectTopic={handleSelectTopic}
          />
        </div>
      )}

      {selectedTopic && (
        <TopicDetail topic={selectedTopic} onBack={handleBackToTopics} />
      )}
    </div>
  );
};

export default App;
