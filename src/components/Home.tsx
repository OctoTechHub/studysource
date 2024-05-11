import { useState } from 'react';
import SearchBar from './SearchBar';
import DisplayMaterials from './DisplayMaterials';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <div className="flex flex-col items-center mt-8 ">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className='w-[1440px] mt-16'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          <DisplayMaterials searchQuery={searchQuery} />
        </div>
      </div>
    </div>
  );
};

export default Home;