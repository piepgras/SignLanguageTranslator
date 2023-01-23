import TranslateForm from "../compontents/translate/TranslateForm"
import withAuth from "../hoc/withAuth"

const Translate = () => {
    return (
        <>
            <h1>Translation</h1>
            <TranslateForm />
        </>
    )
}

export default withAuth(Translate)