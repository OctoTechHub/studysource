import React, { useState } from 'react';
import { Link } from "react-router-dom";
import DisplayMaterials from './Materials';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");

    const handleSearchQueryChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSearchQuery(event.target.value);
    };

    return <>
        <div className="flex flex-col items-center mt-8">
            <h1 className="text-2xl font-bold mb-4">Study Material 📚</h1>
            <div className="">
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
            </div>
            <div className='w-[1440px]'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    <DisplayMaterials searchQuery={searchQuery}/>
                </div>
            </div>
        </div>
    </>

}

export default SearchBar;