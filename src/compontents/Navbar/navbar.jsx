import { NavLink } from "react-router-dom"
import { useUser } from "../../context/userContext_1"

const Navbar = () => {
    const {user} = useUser()

    return (
        // <nav>
        //     <ul>
        //         <li>Translations</li>
        //     </ul>

        //     {user !== null &&
        //         <ul>
        //             <li>
        //                 <NavLink to="/translate">Translation</NavLink>
        //             </li>
        //             <li>
        //                 <NavLink to="/profile">Profile</NavLink>
        //             </li>
        //         </ul>
        //     }

        // </nav>
        <nav className="navbar navbar-expand-lg " style={{background:'#008B8B'}} >
        <div className="container">
            <div className=" navbar-brand ">
                <h4 className="animate__animated animate__bounce" style={{color:'white'}}><img src="logo.png" alt="" width="70" height="70" /> Lost in translation</h4>
            </div>
            <div className="collapse navbar-collapse">
                {user !== null &&
                    <div className='navbar-nav' >
                        <div className='nav-link  animate__animated animate__fadeIn animate__delay-1s	1s'  ><NavLink style={{color:'white'}} to="/translate">Translate</NavLink></div>
                        <div className='nav-link  animate__animated animate__fadeIn animate__delay-1s	1s ' ><NavLink style={{color:'white'}} to="/profile">Profile</NavLink></div>
                    </div>
                }
            </div>
        </div>
    </nav>

    )
}
export default Navbar