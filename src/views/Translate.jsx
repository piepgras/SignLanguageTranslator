import TranslateButton from "../compontents/translate/TranslateButton"
import TranslateForm from "../compontents/translate/TranslateForm"
import TranslateForm from "../compontents/Translate/TranslateForm"
import withAuth from "../hoc/withAuth"
import TranslateHeader from "../compontents/translate/TranslateHeader"
import TranslateActions from "../compontents/translate/TranslateActions"
import TranslateHistory from "../compontents/translate/TranslateHistory"
import { useUser } from "../state/UserState"

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