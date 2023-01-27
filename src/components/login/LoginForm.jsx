// LoginForm.jsx component responsible for handling user login.

import { STORAGE_KEY_USER } from '../../const/storageKeys';
import { useUser } from '../../context/UserContext';
import { storageSave } from '../../utils/storage';
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { userLogin } from '../../api/user';
import { useForm } from 'react-hook-form'

const LoginForm = () => {
    
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [ APIError, setAPIError ] = useState(null);
    const [ loading, setLoading] = useState(false);
    const { user, setUser } = useUser()
    const navigate = useNavigate()
    
    // Effect responsible for redirecting directly to
    // the translate page if a user is already set.
    useEffect(() => {
        if (user !== null) {
            navigate("translate")
        }
    }, [user, navigate])

    // On submission of username disables login button until
    // login has been handled / the user has been set
    const onSubmit = async ({ username }) => {
        setLoading(true);
        const [error, u] = await userLogin(username);
        if (error !== null) {
            setAPIError(error)
        }
        if (u !== null) {
            storageSave(STORAGE_KEY_USER, u)
            setUser(u)
        }
        setLoading(false);
    }

    // Styling and dynamics for the login input and button.
    return (
        <div className="">
            <form onSubmit={handleSubmit(onSubmit)} className="">
                <div className="row m-5">
                    <div className="col-2"></div>
                    <div className="col">
                        <div className="">
                            <h1 className="text-light"><img src="Logo-Hello.png" alt="" width="200" height="200"/>Lost in Translation</h1>
                        </div>
                        <div className="input-group mb-3 shadow">
                            <label className="input-group-text">
                                <img className="" src="./keyboard.png" alt="keyboard" width="40" height="40"/>
                            </label>
                            <input className="control form-control" type="text" {...register("username", { required: true,maxLength:10 })} placeholder="What is your name?"/>
                            <button className='btn btn-outline-primary' style={{color:'white'}} type="submit" disabled={loading}>Login</button>
                        </div>
                        <div>
                            {loading && <p className="text-light">Logging in...</p>}
                            {APIError && <p>{APIError}</p>}
                            {(errors.username && errors.username.type === "required") && <span className="text-light m-2">User name required!</span>}
                            {(errors.username && errors.username.type === 'maxLength') && <span className="text-light m-2">User name too long (max. 10)!</span>}
                        </div>
                    </div>
                    <div className="col-2"></div>
                </div>
            </form>
        </div>
    );
}
export default LoginForm;