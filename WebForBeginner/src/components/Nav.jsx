import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";
const Nav = () => {
    return (
        <nav className="w-full h-16 bg-gray-800 text-white flex items-center justify-between px-4 overflow-hidden">
            <ul className="m-4 flex items-center">
                <li>
                    <NavLink to="/" className="text-lg font-semibold hover:text-gray-400">Home</NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-4 m-4">
                <li>
                    <NavLink to="/Cours" className="text-lg font-semibold hover:text-gray-400">Cursos</NavLink>
                </li>
                <li>
                    <NavLink to="/User" className="text-lg font-semibold hover:text-gray-400">User</NavLink>
                </li>
                <li><ThemeToggle/></li>
            </ul>
        </nav>
    );
}

export default Nav;
