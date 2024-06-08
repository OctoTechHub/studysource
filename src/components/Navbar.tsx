import { BrowserRouter, Route, Routes } from "react-router-dom";
import handWritten from "./HandNotes";
import Nav from "./Nav";
import Home from "./Home";
import { Hello } from "./helloWorld";
import Contributors from "./Contributors";
import DoodlePage from "./DoodlePage";
import GroupStudy from "./GroupStudy";
const Navbar = () => {
    const handleSave = (doodle: string) => {
      console.log("Doodle saved:", doodle);
    };
  
    return (
      <div className="flex flex-col w-full ">
        <BrowserRouter>
          <div>
            <Nav />
          </div>
          <div>
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/notes" Component={handWritten} />
              <Route path="/Contributors" Component={Contributors} />
              <Route path="/Canvas" Component={() => <DoodlePage onSave={handleSave} />} />
              <Route path="/group" Component={GroupStudy} />
              <Route path="/hello" Component={Hello} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  };

export default Navbar;
