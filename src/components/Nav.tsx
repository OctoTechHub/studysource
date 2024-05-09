import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="w-full bg-navbarColor">
  <div className="flex justify-between content-center p-4">
    <div className="pl-8 flex flex-row items-center">
      <Link to="/">
        <div className="flex items-center">
          <div className="text-white l mr-2">Study Material</div>
          <img src="public/navIcon.svg" alt="navIcon" className="h-8" />
        </div>
      </Link>
    </div>
    <div className="w-1/6 flex justify-evenly">
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