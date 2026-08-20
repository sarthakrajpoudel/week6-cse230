import { NavLink } from "react-router-dom";
import "../Styles/Navbar.css";

export default function Navbar() {

    return (
        <nav className="navbar">
            <h2>Weather App</h2>
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
        </nav>
    );
}
