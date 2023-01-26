import ProfileActions from "../compontents/profile/ProfileActions"
import ProfileHeader from "../compontents/profile/ProfileHeader"
import ProfileTranslationHistory from "../compontents/profile/ProfileTranslationHistory"
import withAuth from "../hoc/withAuth"
import { useUser } from "../context/UserContext"
import ProfileClearTranslationsHistoryButton from "../compontents/profile/ProfileClearTranslationsHistoryButton"
import ProfileForm from "../compontents/profile/ProfileForm"
import ProfileTranslationsHistoryButton from "../compontents/profile/ProfileTranslationsHistoryButton"
import Navbar from "../compontents/navbar/Navbar"
import { storageSave } from "../utils/storage"
import { STORAGE_KEY_USER } from "../const/storageKeys"
import { deleteEntireUser } from "../api/translate"
import { useEffect } from "react"
import { userFindById } from "../api/user"
//import withAuth from "../hoc/withAuth"
//import { useUser } from "../context/userContext"

const Profile = () => {

    const { user, setUser } = useUser()

    useEffect(() => {
        const findUser = async () => {
            const [ error, latestUser ] = await userFindById(user.id)
            if(error === null){
                storageSave(STORAGE_KEY_USER, latestUser)
                setUser(latestUser)
            }
        }
        findUser()
    },[ setUser,  user.id])

    const logoutUser = () => {
        storageSave(STORAGE_KEY_USER, null)
        setUser(null)
    }

    const deleteUser = () => {
        storageSave(STORAGE_KEY_USER, null)
        setUser(null)
        deleteEntireUser(user)
    }
    //const {user} = useUser()

    // const TRANSLATIONS = [{
    //     translation:1
    // }]

    // user.translations.forEach(translation => {
    //     console.log(translation)

    //     const handleTranslationHistoryButtonClicked = (translationId) => {
    //         console.log(translationId)
    //         const selectedTranslation = TRANSLATIONS.find(translation => translation.id === translationId)
    //     }

    //     const availableTranslations = TRANSLATIONS.map(translations => {
    //     return <ProfileTranslationsHistoryButton key={translations.id}
    //             handleTranslationButtonClicked={ handleTranslationHistoryButtonClicked}/>
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
    // const user = useUser();
    
    return (
        <>
        <h1>Profile</h1>
        <ProfileHeader username={user.username}/>
        <ProfileActions logoutUser={ logoutUser } deleteUser={ deleteUser }/>
        {/*
        <ProfileHeader username={user.username}/>
        
        <ProfileTranslationHistory histories={user.translations}/>
        <ProfileClearTranslationsHistoryButton id="Translations history" key="1"/>
        <ProfileActions/>
        <section id="translations-history">{"availableTranslations"}</section>
        <selection id="translation-notes">
            <ProfileForm/>
        </selection>
        <h4>Summary:</h4>
        {user.translations && <p>Selected translation: { }</p>} */}
        </>
    )
}

export default withAuth(Profile)
