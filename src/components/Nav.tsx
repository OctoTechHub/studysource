import { Link } from "react-router-dom";

export default function Nav(){
    return (
        <nav className="w-1/3">
            <div className="content-center">
                    <Link to='/'>Study-Material</Link>
                    <Link to='/About'>About</Link>
                    <Link to='/Maintainers'>Maintainers</Link>
            </div>
        </nav>
    )
}