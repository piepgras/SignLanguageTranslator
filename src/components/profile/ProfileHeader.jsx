// ProfileHeader.jsx handles the profile page header.

const ProfileHeader = ({ username }) => {
    return (
        <header className="col-9" >
            <h5 className="text-light">Welcome home, {username}! Hope you don't get lost again..</h5>
            <hr/>
        </header>
    )
}
export default ProfileHeader