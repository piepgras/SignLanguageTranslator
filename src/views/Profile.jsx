import ProfileTranslationHistory from "../components/profile/ProfileTranslationHistory"
import ProfileActions from "../components/profile/ProfileActions"
import ProfileHeader from "../components/profile/ProfileHeader"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"

const Profile = () => {

    const { user } = useUser()

    return (
        <div className="animate__animated animate__fadeInLeft">
            <br />
            <div className="row d-flex justify-content-center">
            <ProfileHeader username={user.username} />
            </div>
            <div className="row d-flex justify-content-center">
                <ProfileActions />
                <ProfileTranslationHistory history={user.translations} />
            </div>
        </div>
    )
}
export default withAuth(Profile)