import React, { useState } from 'react';
import { handWritten } from '../material';
import HandWrittenNotes from './DisplayHandwritten';
import SearchBar from './SearchBar';

const HandWritten: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <div
      className="min-h-screen flex flex-col items-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, #3498db, #2ecc71)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginTop: 0, 
      }}
    >
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="w-full max-w-2xl mb-8 mt-5">
        <HandWrittenNotes handWritten={handWritten} searchQuery={searchQuery} />
      </div>
    </div>
  );
}

export default HandWritten;