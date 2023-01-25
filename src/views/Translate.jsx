import TranslateForm from "../compontents/Translate/TranslateForm"
import withAuth from "../hoc/withAuth"
import TranslateHeader from "../compontents/Translate/TranslateHeader"
import TranslateActions from "../compontents/Translate/TranslateActions"
import TranslateHistory from "../compontents/Translate/TranslateHistory"
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