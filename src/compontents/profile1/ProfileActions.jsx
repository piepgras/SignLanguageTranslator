const ProfileActions = ({logoutUser, deleteUser}) => {

    const handleLogoutClick = () => {
        if (window.confirm("Are you sure?")){
            logoutUser()
        }
    }

    const handleDeleteUser = () => {
        if (window.confirm("YOU CAN'T JUST LEAVE?!")){
            deleteUser()
        }
    }

    return (
        <ul>
            <li><button>Clear history</button></li>
            <li><button onClick={handleLogoutClick}>Logout</button></li>
            <li><button onClick={handleDeleteUser}>Delete User</button></li>
        </ul>
    )
}
export default ProfileActions