import { NavLink } from "react-router-dom";
import "../styles/Header.css"


export default function Header() {
    return(
        <header>
            <div id="headerBranding">
                ColourAcademy
            </div>
            <nav id="headerNavbar">
                <NavLink to={"/"} className="custom-navlink">Home</NavLink>
                <NavLink to={"/generator"} className="custom-navlink">Generator</NavLink>
            </nav>
        </header>
    )
}