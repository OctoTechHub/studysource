import { useState } from "react";

interface SearchBarProps {
  searchQuery?: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery || "");

  const handleSearchQueryChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setLocalSearchQuery(event.target.value);
    setSearchQuery(event.target.value);
  };

  const clearSearch = () => {
    setLocalSearchQuery("");
    setSearchQuery("");
  };

  return (
    <div className="flex items-center w-full max-w-[500px] border border-gray-300 rounded-full shadow-sm">
      <input
        type="text"
        name="search"
        id="search"
        className="flex-1 appearance-none border-0 py-2 px-4 bg-transparent focus:outline-none focus:ring-0 focus:border-black sm:text-sm"
        placeholder="Search for materials..."
        value={localSearchQuery}
        onChange={handleSearchQueryChange}
      />
      <button
        type="button"
        className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-0"
        onClick={clearSearch}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;