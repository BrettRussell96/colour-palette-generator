import { DarkModeToggleButton } from "./DarkModeToggleButton";
import "../styles/Footer.css"


export default function Footer() {

    return (
        <footer>
            <h6>Copyright 2024 ColourAcademy / Brett</h6>
            <a href="mailto:test@email.com">Email Us!</a>

            <DarkModeToggleButton />
        </footer>      
    )
}