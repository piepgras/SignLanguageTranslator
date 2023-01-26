import { useState } from "react"
import { addTranslation } from "../../api/translate";
import { STORAGE_KEY_USER } from "../../const/storageKeys";
import { useUser } from "../../context/UserContext";
import { storageRead,storageSave } from "../../utils/storage";

const TranslateForm = () => {
    
    //const { user, setUser } = useUser()
    const { user, setUser } = useUser()

    const [inputText, setInputText] = useState(" ")
    const [images, setImages] = useState([]);
    let storageUser = storageRead(STORAGE_KEY_USER)


    const handleChange = (event) => {
        setInputText(event.target.value);
    }

    const handleButtonClick = async () => {
        let parsedTranslation = inputText.toLowerCase().replace(/[^a-z]/g, " ");
        let parsedTranslationForImages = inputText.toLowerCase().replace(/[^a-z]/g, "-");
        const [ error,updatedUser] =  await addTranslation(storageUser, parsedTranslation)
        
        //Check for error
        if (error !== null) { return }
        // keep UI state and Server state in sync
        storageSave(STORAGE_KEY_USER, updatedUser)
        // Update context state.
        setUser(updatedUser)


        setImages(parsedTranslationForImages.split('').map((char, index) => (
            <img className="sign" key={index} src={`../signs/${char}.png`} alt={char} />
        )));
    }

    return (
        <>
            <div className="row">
                <div className="d-flex justify-content-center">
                    <div className="col-8">
                    <div className='input-group m-4'>
                        <label className="input-group-text" >
                            <img className="" src="./keyboard.png" alt="keyboard" width="40" height="40" />
                        </label>
                        <input type="text" className='form-control' onChange={handleChange} placeholder="What should I translate?" />
                        <button type="submit" className='btn btn-outline-primary' style={{ color: 'white' }} onClick={handleButtonClick}>Translate!</button>

                    </div>
                    </div>
                </div>
            </div>
            <div className=" row m-5">
                <div className="d-flex justify-content-center">
                    <div className='col-8'>
                        <div className="card p-3 shadow" style={{ height: 500 }}>
                            <section>
                                {images}
                            </section>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default TranslateForm