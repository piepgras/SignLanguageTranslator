// ProfileHeader.jsx handles the profile page header.

const ProfileHeader = ({ username }) => {
    return (
        <header>
            <h5 className="text-light">Welcome home, {username}! Hope you don't get lost again..</h5>
        </header>
    )
}
export default ProfileHeader