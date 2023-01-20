import { useForm } from 'react-hook-form'
import { loginUser } from '../../api/user'

function LoginForm() {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = async ({ username }) => {
        const [error, user] = await loginUser(username)
        console.log('Error: ', error)
        console.log('User: ', user)
    }

    return (
        <div className=''>
            <form onSubmit={handleSubmit(onSubmit)} className="">

                <input className="control form-control" type="text" {...register("username", { required: true })} placeholder="What is your name?" />
                <button className='btn btn-primary' type="text">Login</button>

                {(errors.username && errors.username.type === 'required') && <span className='m-2'>User name required!</span>}

            </form>
        </div>
    );
}

export default LoginForm;
