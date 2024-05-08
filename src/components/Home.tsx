import React from 'react';
import { materials } from '../material';
const Home = () => {
  return (
    <div className="flex flex-col items-center mt-8">
      <h1 className="text-2xl font-bold mb-4">Study Material 📚</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {materials.map((material, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg p-4 flex flex-col items-center justify-center text-center"
          >
            <h2 className="text-xl font-semibold mb-2">{material.title}</h2>
            <a href={material.driveLink} className="text-blue-500 hover:underline mb-2">
              {material.driveLink}
            </a>
            <p className="text-gray-500">Semester: {material.semester}</p>
            <p className="text-gray-500">Department: {material.department}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;