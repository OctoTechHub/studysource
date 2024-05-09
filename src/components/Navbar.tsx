import { BrowserRouter, NavLink , Route, Routes } from "react-router-dom";
import handWritten from "./HandNotes";
import Maintainers from "./Maintainers";
import Nav from "./Nav";
import Home from "./Home";

const Navbar = () => {
    return (
        <div className="flex flex-col w-full ">
            <BrowserRouter>
            <div>
                <Nav/>
            </div>
            <div>
            <Routes>
                <Route path="/" Component={Home}></Route>
                <Route path="/notes" Component={handWritten}></Route>
                <Route path="/Maintainers" Component={Maintainers}></Route>
            </Routes>
            </div>
        </BrowserRouter>
        </div>
    );
}

export default Navbar;
