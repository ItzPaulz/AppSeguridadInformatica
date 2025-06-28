import React from 'react';

const AgeGroupSelector = ({ onSelectAgeGroup, selectedAgeGroup }) => {
  const ageGroups = [
    { id: 'niños', label: 'Niños (8-11)' },
    { id: 'jovenes', label: 'Jóvenes (12-18)' },
    { id: 'adultos', label: 'Adultos (+65)' },
  ];

  return (
    <div className="p-4 bg-white shadow-lg rounded-2xl mx-4 mt-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">¿Para quién es esta información?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {ageGroups.map((group) => (
          <button
            key={group.id}
            onClick={() => onSelectAgeGroup(group.id)}
            className={`py-3 px-6 rounded-xl text-lg font-semibold transition-all duration-300 ease-in-out
              ${selectedAgeGroup === group.id
                ? 'bg-blue-600 text-white shadow-md transform scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700'
              }`}
          >
            {group.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AgeGroupSelector;