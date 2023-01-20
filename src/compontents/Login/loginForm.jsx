import { useForm } from "react-hook-form"

const usernameConfig = {
    required: true,
    minLength: 2
}

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const onSubmit = (data) => {
        console.log("DATA: " + data)
        console.log("ERRORS: " + errors)
    }

    const errorMessage = (() => {
        if(!errors.username) {
            return null
        }

        if(errors.username.type === 'required'){
            return <span>Username is required</span>
        }

        if(errors.username.type === 'minLength'){
            return <span>Username is too short</span>
        }
    })()

    return (
        <>
            <h2>Name?</h2>
            <form onSubmit={ handleSubmit(onSubmit) }>
                <fieldset>
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text"
                        placeholder="enter name here..."
                        { ...register("username", usernameConfig)}
                    />
                    { errorMessage }
                </fieldset>

                <button type="submit">Continue</button>
            </form>
        </>
    )
}
export default LoginForm