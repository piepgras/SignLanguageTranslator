import ProfileForm from "../compontents/profile/ProfileForm"
import withAuth from "../hoc/withAuth"

const Profile = () => {
    return (
        <>
            <h1>Profile</h1>
            <ProfileForm />
        </>
    )
}

export default withAuth(Profile)