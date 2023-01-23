import ProfileActions from "../compontents/Profile/ProfileActions"
import ProfileHeader from "../compontents/Profile/ProfileHeader"
import ProfileTranslationHistory from "../compontents/Profile/ProfileTranslationHistory"
import withAuth from "../hoc/withAuth"
import { useUser } from "../context/UserContext"

const Profile = () => {

    const {user} = useUser()
    
    return (
        <>
        <h1>Profile</h1>
        <ProfileHeader username={user.username}/>
        <ProfileActions/>
        <ProfileTranslationHistory histories={user.translations}/>
        </>
    )
}
export default withAuth (Profile)