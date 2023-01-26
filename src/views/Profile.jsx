import ProfileActions from "../compontents/profile/profileActions"
import ProfileHeader from "../compontents/profile/profileHeader"
import ProfileTranslationHistory from "../compontents/profile/ProfileTranslationHistory"
import withAuth from "../hoc/withAuth"
import { useUser } from "../context/UserContext"
import ProfileClearTranslationsHistoryButton from "../compontents/profile/ProfileClearTranslationsHistoryButton"
import ProfileForm from "../compontents/profile/ProfileForm"
import ProfileTranslationsHistoryButton from "../compontents/profile/ProfileTranslationsHistoryButton"
//import withAuth from "../hoc/withAuth"
//import { useUser } from "../context/userContext"

const Profile = () => {

    //const {user} = useUser()

    const { user, setUser } = useUser()


    const TRANSLATIONS = [{
        translation: 1
    }]

    user.translations.forEach(translation => {
        console.log(translation)

        const handleTranslationHistoryButtonClicked = (translationId) => {
            console.log(translationId)
            const selectedTranslation = TRANSLATIONS.find(translation => translation.id === translationId)
        }

        const availableTranslations = TRANSLATIONS.map(translations => {
            return <ProfileTranslationsHistoryButton key={translations.id}
                handleTranslationButtonClicked={handleTranslationHistoryButtonClicked} />
        })
    });

    // return (
    //     <>
    //     <h1>Profile</h1>

    //     <ProfileHeader username={user.username}/>
    // // FIXME: Dummy data
    // const User = () => { return {
    //     "id": 1,
    //     "username": "dewaldels",
    //     "translations": [
    //       "hello world",
    //       "react is fun"
    //     ]
    //   }}
    //const user = useUser();

    return (
        <>
            <div className="animate__animated animate__fadeInLeft">
                {/* <h1>Profile</h1> */}
                <br />
                <ProfileHeader username={user.username} />

                <hr />
                <div className="row">
                    <ProfileActions />
                    <ProfileTranslationHistory histories={user.translations} />
                </div>
                {/* <ProfileClearTranslationsHistoryButton id="Translations history" key="1"/>
        <ProfileActions/>
        <section id="translations-history">{"availableTranslations"}</section>
        <selection id="translation-notes">
            <ProfileForm/>
        </selection>
        <h4>Summary:</h4>
        {user.translations && <p>Selected translation: { }</p>} */}
            </div>
        </>
    )
}

export default withAuth(Profile)
