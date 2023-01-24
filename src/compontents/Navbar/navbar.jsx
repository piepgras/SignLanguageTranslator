import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>Translations</li>
            </ul>

            <ul>
                <li>
                    <NavLink to="/translation">Translation</NavLink>
                </li>
                <li>
                    <NavLink to="/Profile">Profile</NavLink>  
                </li>
            </ul>
        </nav>
    )
}