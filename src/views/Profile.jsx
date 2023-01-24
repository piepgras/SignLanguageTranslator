import ProfileActions from "../compontents/Profile/profileActions"
import ProfileHeader from "../compontents/Profile/profileHeader"
import ProfileTranslationHistory from "../compontents/Profile/ProfileTranslationHistory"
import withAuth from "../hoc/withAuth"
import { useUser } from "../context/UserContext"
import ProfileClearTranslationsHistoryButton from "../compontents/Profile/ProfileClearTranslationsHistoryButton"


const Profile = () => {

    const {user} = useUser()

    return (
        <>
        <h1>Profile</h1>
        <section id="translations-history"></section>
        <ProfileHeader username={user.username}/>
        <ProfileClearTranslationsHistoryButton id="1" key="1"/>
        <ProfileClearTranslationsHistoryButton id="2" key="2"/>
        <ProfileClearTranslationsHistoryButton id="3" key="3"/>
        <ProfileClearTranslationsHistoryButton id="4" key="4"/>
        <ProfileActions/>
        <ProfileTranslationHistory histories={user.translations}/>
        </>
    )
}
export default withAuth (Profile)