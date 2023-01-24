import ProfileActions from "../compontents/Profile/profileActions"
import ProfileHeader from "../compontents/Profile/profileHeader"
import ProfileTranslationHistory from "../compontents/Profile/ProfileTranslationHistory"
//import withAuth from "../hoc/withAuth"
//import { useUser } from "../context/userContext"

const Profile = () => {

    //const {user} = useUser()

    // FIXME: Dummy data
    const User = () => { return {
        "id": 1,
        "username": "dewaldels",
        "translations": [
          "hello world",
          "react is fun"
        ]
      }}
    const user = User();
    
    return (
        <>
        <h1>Profile</h1>
        <ProfileHeader username={user.username}/>
        <ProfileActions/>
        <ProfileTranslationHistory histories={user.translations}/>
        </>
    )
}
//export default withAuth (Profile)
export default Profile
