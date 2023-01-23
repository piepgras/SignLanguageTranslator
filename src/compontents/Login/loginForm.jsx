import {useForm} from 'react-hook-form';
import {loginUser} from '../../API/user';
import {useState, useEffect } from 'react';
import { storageSave } from '../../utils/storage';
import { useNavigate } from 'react-router-dom';
import {useUser} from '../../context/UserContext';
import { STORAGE_KEY_USER } from '../../const/storageKeys';

const usernameConfig = {
    required: true,
    ominLength: 3,
};

const LoginForm = () => {
    //Hooks
    const {register, handleSubmit, formState: {errors} } = useForm();
    const { user, setUser} = useUser()
    const navigate = useNavigate();

    //Local State
const [loading, setLoading] = useState(false)
const [apiError, setApiError] = useState(null)

// Side Effects
useEffect(() => {
    if (user !== null){
        navigate('profile')
    }
    // redirect to Profile
}, [user, navigate]) // Empty Deps - Only run 1ce

// Event Handlers
const onSubmit = async (username) => {
    setLoading(true);
    const [error, userResponse] = await loginUser(username)
    if (error !== null) {
        setApiError(error)
    }
    if (userResponse !== null) {
        storageSave(STORAGE_KEY_USER, userResponse)        
        setUser(userResponse)
    }

    setLoading(false)

    };

    const errorMessage = (() => {

        if (!errors.username){
            return null; 
        }

        if (errors.username.type === 'required') {
            return <span>Username is required</span>
        }

        if (errors.username.type === 'minLength') {
            return <span>Username is to short(min 2.)</span>
        } 
    })()
    return (
    <>
        <h2>Welcome home</h2>
        <form onSubmit= {handleSubmit(onSubmit)}>
            <fieldset>
                <label htmlFor="username">Username</label>
                <input type="text"
                placeholder='johndoe'{...register("username", usernameConfig)}/>
            {errorMessage}
            </fieldset>

            <button type="submit" disabled ={loading } >Continue</button>

            {loading && <p>Logging in...</p>}
            {apiError && <p>{apiError}</p>}

        </form>
    </>
    );
};

export default LoginForm;