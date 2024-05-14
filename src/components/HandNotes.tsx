import React, { useState } from 'react';
import { handWritten } from '../material';
import HandWrittenNotes from './DisplayHandwritten';
import Chatbot from './Chatbot';

const HandWritten: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showChatbot, setShowChatbot] = useState<boolean>(false);

  const handleSearchQueryChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchQuery(event.target.value);
  };

  function clearSearch() {
    setSearchQuery("");
  }

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <div className="flex flex-col items-center mt-8 w-full">
      <div className="w-full max-w-2xl mb-8">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search Docs"
            value={searchQuery}
            onChange={handleSearchQueryChange}
            className="border rounded-lg p-1 mr-2 w-full"
          />
          <button
            className="text-blue-500 hover:underline bg-white rounded-lg p-2"
            onClick={(e) => { e.preventDefault(); clearSearch(); }}
          >
            Clear Search
          </button>
        </div>
        <HandWrittenNotes handWritten={handWritten} searchQuery={searchQuery} />
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

export default HandWritten;