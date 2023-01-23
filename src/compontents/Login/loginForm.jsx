import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../api/user'
import { STORAGE_KEY_USER } from '../../const/storageKey'
import { storageSave } from '../../utils/storage'
import { useUser} from '../../context/UserContext'

function LoginForm() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const {user,setUser} =useUser()// ContextApi
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    const [apiErro, setApiError] = useState(null)
    
    useEffect(()=>{
        if (user !==null) {
          navigate('translate')
        }
      },[user,navigate])

    const onSubmit = async ({ username }) => {

        setLoading(true)

        const [error, userResponse] = await loginUser(username)
        if (error !== null) {
            setApiError(error)
        }

        if (userResponse !== null) {    
            // user get saved in local storage
            storageSave(STORAGE_KEY_USER, userResponse) 
            // UserContext get updated
            setUser(userResponse) 
        }
        setLoading(false)
    }

    const errorMessage = (() => {

        if (!errors.username) {
            return null
        }

        if (errors.username.type === 'required') {
            return <span>User name required!</span>
        }

        if (errors.username.type === 'minLength') {
            return <span>User name is too short ()!</span>
        }

    })()

    return (
        <div className=''>
            <form onSubmit={handleSubmit(onSubmit)} className="">

                <input className="control form-control" type="text" {...register("username", { required: true, minLength: 3 })} placeholder="What is your name?" />
                <button className='btn btn-primary' type="text">Login</button>
                {errorMessage}
                {loading && <p>Logging in ...</p>}
                {apiErro && <p> {apiErro}</p>}

            </form>
        </div>
    );
}

export default LoginForm;
