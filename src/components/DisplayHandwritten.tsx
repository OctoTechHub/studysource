import React from 'react';

interface HandWrittenNotesProps {
  handWritten: {
    title: string;
    driveLink: string;
  }[];
  searchQuery: string;
}

const HandWrittenNotes: React.FC<HandWrittenNotesProps> = ({ handWritten, searchQuery }) => {
  const filteredHandWritten = handWritten.filter((item) =>
    Object.values(item)
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
      {filteredHandWritten.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg p-4 shadow-md cursor-pointer hover:bg-gray-100 transition-colors duration-300"
        >
          <h2 className="text-lg font-semibold mb-2 cursor-pointer hover:text-blue-500 transition duration-200">{item.title}</h2>
          <a href={item.driveLink} target="_blank" className="text-blue-500 hover:underline mb-2">
            Drive Link
          </a>
        </div>
      ))}
    </div>
  );
};

export default HandWrittenNotes;