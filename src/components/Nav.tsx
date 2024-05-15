import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons/faUsers";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons/faFileAlt";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-navbarColor">
        <div className="flex justify-between content-center p-4">
          <div className="pl-8 flex flex-row items-center">
            <Link to="/">
              <div className="flex items-center ">
                <div className="font-bold	text-2xl text-white mr-2">studysource</div>
                
              </div>
            </Link>
          </div>
          <div className="w-1/6 flex justify-evenly">
            <div>
              <button
                className="text-white focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <FontAwesomeIcon icon={faTimes} className="h-6 w-6" />
                ) : (
                  <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="p-4 bg-gray-200">
            <div className="flex flex-col">
              <Link to="/notes" className="text-bold mb-2 flex items-center">
                <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
                Written Notes
              </Link>
              <Link to="/Maintainers" className="text-bold mb-2 flex items-center">
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