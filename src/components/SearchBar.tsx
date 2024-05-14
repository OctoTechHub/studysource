import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DisplayMaterials from './Materials';
import Chatbot from './Chatbot';

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showChatbot, setShowChatbot] = useState<boolean>(false);

  const handleSearchQueryChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchQuery(event.target.value);
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <div className="relative">
      <div className="flex flex-col items-center mt-8 ">
        <h1 className="text-slate-400 hover:text-sky-400 mb-10">Find All Materials Here</h1>
        <div className="flex flex-col sm:flex-row sm:items-center mb-4">
          <input
            type="text"
            placeholder="Search Docs"
            value={searchQuery}
            onChange={handleSearchQueryChange}
            className="border rounded-lg p-1 mr-2 w-full sm:w-auto"
          />
          <Link to="/" className="text-blue-500 hover:underline bg-white rounded-lg p-2" onClick={(e) => { e.preventDefault(); clearSearch(); }}>
            Clear Search
          </Link>
        </div>
        <div className='w-full'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            <DisplayMaterials searchQuery={searchQuery}/>
          </div>
        </div>
      </div>
      <button className="fixed bottom-4 left-4 bg-blue-500 text-white rounded-full p-2 shadow-lg z-50" onClick={toggleChatbot}> {/* Add z-index property here */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle w-5 h-5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
      </button>
      {showChatbot && (
        <div className="absolute bottom-0 left-0 w-full h-full bg-gray-100">
          <Chatbot />
        </div>
      )}
    </div>
  );
}

export default SearchBar;