import TranslateForm from "../components/translate/TranslateForm"
import withAuth from "../hoc/withAuth"

const Translate = () => {
    return (
        <>
            <div className="animate__animated animate__fadeInLeft">
                <TranslateForm />
            </div>
        </>
    )
}
export default withAuth(Translate)