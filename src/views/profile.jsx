import { useEffect } from "react"
import ProfileActions from "../compontents/profile/ProfileActions"
import ProfileHeader from "../compontents/profile/ProfileHeader"
import ProfileTranslationHistory from "../compontents/profile/ProfileTranslationHistory"
import withAuth from "../hoc/withAuth"
import { useUser } from "../context/UserContext"
import { userById } from "../api/user"
import ProfileClearTranslationsHistoryButton from "../compontents/profile/ProfileClearTranslationsHistoryButton"
import ProfileForm from "../compontents/profile/ProfileForm"
import ProfileTranslationsHistoryButton from "../compontents/profile/ProfileTranslationsHistoryButton"
import { STORAGE_KEY_USER } from "../const/storageKeys"
import { storageDelete, storageSave } from "../../src/utils/storage";


//import withAuth from "../hoc/withAuth"
//import { useUser } from "../context/userContext"

const Profile = () => {

    const { user, setUser } = useUser()
    //const user = useUser();

    useEffect(() => {
        // useEffect may not be a async function that is why we should 
        // make a wrapper function

        const findUser = async () => {
            const [error, latestUser] = await userById(user.id)
            console.log('error:', error)
            console.log('latestUser:', latestUser)
            if (error === null) {
                storageSave(STORAGE_KEY_USER, latestUser)
                setUser(latestUser)
            }
        }
        //findUser()
    }, [setUser, user.id])

    // const TRANSLATIONS = [{
    //     translation: 1
    // }]

    // user.translations.forEach(translation => {
    //     console.log(translation)

    //     const handleTranslationHistoryButtonClicked = (translationId) => {
    //         console.log(translationId)
    //         const selectedTranslation = TRANSLATIONS.find(translation => translation.id === translationId)
    //     }

    //     const availableTranslations = TRANSLATIONS.map(translations => {
    //         return <ProfileTranslationsHistoryButton key={translations.id}
    //             handleTranslationButtonClicked={handleTranslationHistoryButtonClicked} />
    //     })
    // });

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
  

    return (
        <>
            <h1>Profile</h1>
            <ProfileHeader username={user.username} />
            <ProfileActions />
            <ProfileTranslationHistory histories={user.translations} />
            {/* <ProfileClearTranslationsHistoryButton id="Translations history" key="1" /> */}
            {/* <ProfileActions /> */}
            {/* <section id="translations-history">{"availableTranslations"}</section> */}
            {/* <selection id="translation-notes">
                <ProfileForm />
            </selection> */}
            {/* <h4>Summary:</h4> */}
            {/* {user.translations && <p>Selected translation: </p>} */}
        </>
    )
}

export default withAuth(Profile)
