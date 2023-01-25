import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { loginUser } from '../../api/user'
import { storageRead, storageSave } from '../../utils/storage';
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../context/UserContext';
import { STORAGE_KEY_USER } from '../../const/storageKeys';

const LoginForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const { user, setUser} = useUser()
    const navigate = useNavigate()

    const [ loading, setLoading] = useState(false);
    const [ APIError, setAPIError ] = useState(null);

    useEffect(() => {
        if(user !==  null){
            navigate('translate')
        }
        console.log("User changed!", user)
    }, [user, navigate])

    const onSubmit = async ({ username }) => {

        setLoading(true);
        const [error, u] = await loginUser(username);
        if(error !== null){
            setAPIError(error)
        }
        if(u !== null){
            storageSave(STORAGE_KEY_USER, u)
            setUser(u)
        }
        setLoading(false);
    };

    return (
        <div className=''>
            <form onSubmit={handleSubmit(onSubmit)} className="">

                <input className="control form-control" type="text" {...register("username", { required: true })} placeholder="What is your name?" />
                <button className='btn btn-primary' type="text" disabled={ loading }>Login</button>

                { loading && <p>Logging in...</p>}
                { APIError && <p>{APIError}</p>}
                {(errors.username && errors.username.type === 'required') && <span className='m-2'>User name required!</span>}

            </form>
        </div>
    );
}

export default LoginForm;
