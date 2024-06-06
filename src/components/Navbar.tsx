import { BrowserRouter, Route, Routes } from "react-router-dom";
import handWritten from "./HandNotes";
import Nav from "./Nav";
import Home from "./Home";
import { Hello } from "./helloWorld";
import Contributors from "./Contributors";

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
                <Route path="/Contributors" Component={Contributors}></Route>
                <Route path="/hello" Component={Hello}></Route>
                
            </Routes>
            </div>
        </BrowserRouter>
        </div>
    );
}

export default Navbar;
