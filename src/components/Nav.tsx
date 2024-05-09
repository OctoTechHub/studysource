import { Link } from "react-router-dom";

export default function Nav(){
    return (
        <nav className="w-full">
            <div className="flex justify-between content-center p-4">
                    <div className="pl-8">
                        <Link to='/'>Study-Material</Link>
                    </div>
                    <div className="w-1/4 flex justify-evenly">
                        <div>
                            <Link to='/About'>About</Link>
                        </div>
                        <div>
                            <Link to='/Maintainers'>Maintainers</Link>
                        </div>
                    </div>
            </div>
        </nav>
    )
}