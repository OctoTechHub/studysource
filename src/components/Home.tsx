import { useState } from "react";
import SearchBar from "./SearchBar";
import DisplayMaterials from "./DisplayMaterials";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <div
      className="min-h-screen pt-0 flex flex-col items-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, #3498db, #2ecc71)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
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