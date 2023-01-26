import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { loginUser } from '../../api/user'
import { storageRead, storageSave } from '../../utils/storage';
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../context/UserContext';
import { STORAGE_KEY_USER } from '../../const/storageKeys';

const LoginForm = () => {

    
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { user, setUser } = useUser()
    const navigate = useNavigate()
    
    const [ loading, setLoading] = useState(false);
    const [ APIError, setAPIError ] = useState(null);

    useEffect(() => {
        if (user !== null) {
            navigate('translate')
        }
        console.log("User changed!", user)
    }, [user, navigate])

    const onSubmit = async ({ username }) => {

        setLoading(true);
        const [error, u] = await loginUser(username);
        if (error !== null) {
            setAPIError(error)
        }
        if (u !== null) {
            storageSave(STORAGE_KEY_USER, u)
            setUser(u)
        }
        setLoading(false);
    };

    return (
        <div className=''>
            <form onSubmit={handleSubmit(onSubmit)} className="">
                <div className="row m-5">
                    <div className='col-2'></div>
                    <div className='col'>
                        <div className="">
                            <h1 className="text-light"><img src="Logo-Hello.png" alt="" width="200" height="200" /> Lost in translation</h1>
                        </div>

                        <div className='input-group mb-3 shadow'>
                            <label className="input-group-text" >
                                <img className="" src="./keyboard.png" alt="keyboard" width="40" height="40" />
                            </label>
                            <input className="control form-control" type="text" {...register("username", { required: true,maxLength:10 })} placeholder="What is your name?" />
                            <button className='btn btn-outline-primary' style={{color:'white'}} type="submit" disabled={loading}>Login</button>
                        </div>
                        <div>
                            {loading && <p>Logging in...</p>}
                            {APIError && <p>{APIError}</p>}
                            {(errors.username && errors.username.type === 'required') && <span className=' text-light m-2'>User name required!</span>}
                            {(errors.username && errors.username.type === 'maxLength') && <span className=' text-light m-2'>User name too long (max. 10)!</span>}
                        </div>
                    </div>
                    <div className='col-2'></div>
                </div>
            </form>
        </div>
    );
}


export default LoginForm;
