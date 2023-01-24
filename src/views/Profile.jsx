import ProfileActions from "../compontents/Profile/profileActions"
import ProfileHeader from "../compontents/Profile/profileHeader"
import ProfileTranslationHistory from "../compontents/Profile/ProfileTranslationHistory"
import withAuth from "../hoc/withAuth"
import { useUser } from "../context/UserContext"
import { storageSave } from "../utils/storage"
import { STORAGE_KEY_USER } from "../const/storageKeys"

const Profile = () => {

    const {user, setUser} = useUser()
    const logoutUser = () => {
        storageSave(STORAGE_KEY_USER, null)
        setUser(null)

    }
    return (
        <>
        <h1>Profile</h1>
        <ProfileHeader username={user.username}/>
        <ProfileActions logout={logoutUser}/>
        <ProfileTranslationHistory histories={user.translations}/>
        </>
    )
}
export default withAuth (Profile)