// Navbar.jsx component responsible for the top of the page navigating bar.

import { useUser } from "../../context/UserContext"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    
    const {user} = useUser()
  
    // Styling and dynamics for the navigation bar
    return (
        <nav className="navbar navbar-expand-lg" style={{background:"#008B8B"}} >
        <div className="container">
            <div className="navbar-brand">
                <h4 className="animate__animated animate__bounce" style={{color:'white'}}><img src="logo.png" alt="" width="70" height="70"/>Lost in Translation</h4>
            </div>
            <div className="collapse navbar-collapse">
                {user !== null &&
                    <div className="navbar-nav">
                        <div className="nav-link  animate__animated animate__fadeIn animate__delay-1s	1s"><NavLink style={{color:"white"}} to="/translate">Translate</NavLink></div>
                        <div className="nav-link  animate__animated animate__fadeIn animate__delay-1s	1s"><NavLink style={{color:"white"}} to="/profile">Profile</NavLink></div>
                    </div>
                }
            </div>
        </div>
    </nav>

    )
}
export default Navbar