import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="w-full bg-gradient-to-r from-blue-500 to-blue-800">
      <div className="flex justify-between content-center p-4">
        <div className="pl-8">
          <Link to="/" className="text-white">
            Study Material 📚
          </Link>
        </div>
        <div className="w-1/4 flex justify-evenly">
          <div>
            <Link to="/About" className="text-white">
              About
            </Link>
          </div>
          <div>
            <Link to="/Maintainers" className="text-white">
              Maintainers
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}