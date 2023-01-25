import TranslateForm from "../compontents/translate/TranslateForm"
import withAuth from "../hoc/withAuth"
import TranslateHeader from "../compontents/translate/TranslateHeader"
import TranslateActions from "../compontents/translate/TranslateActions"
import TranslateHistory from "../compontents/translate/TranslateHistory"
import useUser from "../context/UserContext"

const Translate = () => {

    const{ user } = useUser()
    return (<>
        <h1>Translate</h1>
        <TranslateHeader username={ user.username }/>
        <TranslateActions />
        <TranslateHistory translations={user.translations}/>
        <TranslateForm />
    </>
    )
}

export default withAuth(Translate)