import { BrowserRouter, NavLink , Route, Routes } from "react-router-dom";
import About from "./About";
import Maintainers from "./Maintainers";
import Nav from "./Nav";

const Navbar = () => {
    return (
        <div className="flex flex-row w-full justify-between">
            <BrowserRouter>
            <div className="">
                <Nav/>
            </div>
            <div>
            <Routes>
                <Route path="/About" Component={About}></Route>
                <Route path="/Maintainers" Component={Maintainers}></Route>
            </Routes>
            </div>
        </BrowserRouter>
        </div>
    );
}

export default Navbar;
