import TranslateForm from "../compontents/translate/TranslateForm"
import withAuth from "../hoc/withAuth"
import TranslateHeader from "../compontents/translate/TranslateHeader"
import TranslateActions from "../compontents/translate/TranslateActions"
import TranslateHistory from "../compontents/translate/TranslateHistory"
import { useUser } from "../context/UserContext"
import Navbar from "../compontents/navbar/Navbar"

const Translate = () => {
    const { user } = useUser()
    return (
        <>
        <div className="animate__animated animate__fadeInLeft">
        {/* <h1>Translate</h1> */}
        {/* <TranslateHeader username={ user.username }/> */}
        <TranslateForm />
        </div>
        </>
    )
}
export default withAuth(Translate)