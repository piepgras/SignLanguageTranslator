import ProfileTranslationHistory from "../components/profile/ProfileTranslationHistory"
import ProfileActions from "../components/profile/ProfileActions"
import ProfileHeader from "../components/profile/ProfileHeader"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"

const Profile = () => {

    const { user } = useUser()

    return (
        <>
            <div className="animate__animated animate__fadeInLeft">
                <br />
                <ProfileHeader username={user.username} />
                <hr />
                <div className="row">
                    <ProfileActions />
                    <ProfileTranslationHistory history={user.translations} />
                </div>
            </div>
        </>
    )
}
export default withAuth(Profile)