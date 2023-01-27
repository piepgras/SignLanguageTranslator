import { storageRead,storageSave } from "../../utils/storage";
import { STORAGE_KEY_USER } from "../../const/storageKeys";
import { addTranslation } from "../../api/translate";
import { useUser } from "../../context/UserContext";
import { useState } from "react"

const TranslateForm = () => {
    
    let storageUser = storageRead(STORAGE_KEY_USER)
    const [inputText, setInputText] = useState(" ")
    const [images, setImages] = useState([]);
    const { setUser } = useUser()

    const handleChange = (event) => {
        setInputText(event.target.value);
    }

    const handleTranslateButtonClick = async () => {
        let parsedTranslation = inputText.toLowerCase().replace(/[^a-z]/g, " ");
        let parsedTranslationForSigns = inputText.toLowerCase().replace(/[^a-z]/g, "-");
        const [ error,updatedUser] =  await addTranslation(storageUser, parsedTranslation)
        
        //Check for error
        if (error !== null) { return }
        // keep UI state and Server state in sync
        storageSave(STORAGE_KEY_USER, updatedUser)
        // Update context state.
        setUser(updatedUser)

        setImages(parsedTranslationForSigns.split('').map((char, index) => (
            <div className="float-start" key={index}>
                <img className="sign" src={`../signs/${char}.png`} alt={char} />
                <p>{char}</p>
            </div>
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
                        <button type="submit" className='btn btn-outline-primary' style={{ color: 'white' }} onClick={handleTranslateButtonClick}>Translate!</button>
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