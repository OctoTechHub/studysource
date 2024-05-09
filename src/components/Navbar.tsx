import { BrowserRouter, NavLink , Route, Routes } from "react-router-dom";
import About from "./About";
import Maintainers from "./Maintainers";
import Nav from "./Nav";
import Home from "./Home";

const Navbar = () => {
    return (
        <div className="flex flex-col">
            <BrowserRouter>
            <div>
                <Nav/>
            </div>
            <div>
            <Routes>
                <Route path="/" Component={Home}></Route>
                <Route path="/About" Component={About}></Route>
                <Route path="/Maintainers" Component={Maintainers}></Route>
            </Routes>
            </div>
        </BrowserRouter>
        </div>
    );
}

export default Navbar;
