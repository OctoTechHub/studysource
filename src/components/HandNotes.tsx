import React, { useState } from 'react';
import { handWritten } from '../material';
import HandWrittenNotes from './DisplayHandwritten';

const HandWritten: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [] = useState<boolean>(false);

  const handleSearchQueryChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchQuery(event.target.value);
  };

  function clearSearch() {
    setSearchQuery("");
  }



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
     
    </div>
  );
}

export default HandWritten;