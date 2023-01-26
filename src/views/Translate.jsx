import TranslateForm from "../compontents/translate/TranslateForm"
import withAuth from "../hoc/withAuth"
import TranslateHeader from "../compontents/translate/TranslateHeader"
import TranslateActions from "../compontents/translate/TranslateActions"
import { useUser } from "../context/UserContext"
import Navbar from "../compontents/navbar/Navbar"
import { addTranslation } from "../api/translate"
import { useEffect } from "react"
import { userFindById } from "../api/user"
import { storageSave } from "../utils/storage"
import { STORAGE_KEY_USER } from "../const/storageKeys"

const Translate = () => {

    const { user, setUser } = useUser()



    return (
        <>
        <h1>Translate</h1>
        <TranslateHeader username={ user.username }/>

        <TranslateForm />

        </>
    )
}
export default withAuth(Translate)