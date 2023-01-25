import { useForm } from "react-hook-form";

const ProfileForm = () => {
    const {register, handleSubmit} = useForm()
    const onSubmit = (data) => {
    console.log(data)
    
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <label htmlFor="translation-notes">Profiles</label>
                <input type="text" {...register('translationNotes')} placeholder="Chose a translation" />                
            </fieldset>
            <button type="submit">Translation</button>
        </form>
    )

}

export default ProfileForm;