import React, { useState } from 'react';
import { materials } from '../material';
import { Link } from "react-router-dom";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredMaterials = materials.filter((material) =>
    Object.values(material)
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center mt-8">
      <h1 className="text-2xl font-bold mb-4">Study Material 📚</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchQueryChange}
            className="border rounded-lg p-1 mr-2"
          />
          <Link to="/" className="text-blue-500 hover:underline">
            Clear Search
          </Link>
        </div>
        {filteredMaterials.map((material, index) => (
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