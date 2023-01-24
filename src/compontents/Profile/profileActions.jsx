import { Link } from "react-router-dom";

const ProfileActions = ({logoutUser}) => {
    const handleLogoutClick = () => {
        if ( window.confirm("Are you sure you want to logout?")){
            logoutUser();
        }

        // Send an event to the parent!
    }

    return (
    <ul>
        <li><Link to= "/translations">Translations</Link></li>
        <li><button>Clear history</button></li>
        <li><button onClick={handleLogoutClick}>Logout</button></li>
    </ul>
    )
}
export default ProfileActions