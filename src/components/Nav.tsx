import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faUsers } from "@fortawesome/free-solid-svg-icons";
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-navbarColor">
        <div className="flex justify-between content-center p-4">
          <div className="pl-8 flex flex-row items-center">
            <Link to="/">
              <div className="flex items-center ">
              <div className="font-bold	text-2xl text-white l mr-2">Study Material</div>
               <img src="public/navIcon.svg" alt="navIcon" className="h-8" />
              </div>
            </Link>
          </div>
          <div className="w-1/6 flex justify-evenly">
            <div>
              <button
                className="text-white focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isOpen ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.829a1 1 0 0 1 1.414-1.414l4.829 4.829 4.828 4.828a1 1 0 1 1-1.414 1.414L13 14.414l-4.828 4.829z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="p-4 bg-gray-800">
           <div className="flex flex-col">
  <Link to="/notes" className="text-white mb-2 flex items-center">
    <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
    Written Notes
  </Link>
  <Link to="/Maintainers" className="text-white mb-2 flex items-center">
    <FontAwesomeIcon icon={faUsers} className="mr-2" />
    Maintainers
  </Link>
</div>
          </div>
        )}
      </nav>
    </>
  );
}