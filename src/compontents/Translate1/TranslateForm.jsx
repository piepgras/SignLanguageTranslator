import { useState } from "react"
import TranslateActions from "./TranslateActions";
import { addTranslation } from "../../api/translate";
import { useUser } from "../../context/UserContext";
import { useEffect } from "react";
import { userFindById } from "../../api/user";
import { storageSave } from "../../utils/storage";
import { STORAGE_KEY_USER } from "../../const/storageKeys";

const TranslateForm = () => {
    const [inputText, setInputText] = useState("")
    const [images, setImages] = useState([]);
    const { user, setUser } = useUser()

    useEffect(() => {
        const findUser = async () => {
            const [ error, latestUser ] = await userFindById(user.id)
            if(error === null){
                storageSave(STORAGE_KEY_USER, latestUser)
                setUser(latestUser)
            }
        }
        findUser()
    },[ setUser,  user.id])

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    }

    const handleTranslateClick = async () => {
        if(inputText !== ""){
            let parsedInputText = inputText.toLowerCase().replace(/[^a-z]/g, "");
            const [error, updatedUser ] = await addTranslation(user, inputText)
            
            if(error !== null){
                return
            }
            
            storageSave(STORAGE_KEY_USER, updatedUser)
            setUser(updatedUser)

            setImages(parsedInputText.split('').map((char, index) => (
                <img className="sign" key={index} src={`../signs/${char}.png`} alt={char} />
            )));
        } else {
            alert("I can't translate nothing to sign language..")
        }
    }

    return (
        <>
        <input type="text" onChange={handleInputChange} placeholder="What should I translate?" />
        <button onClick={handleTranslateClick}>Translate!!</button>
        { images }
        </>
    )
}

export default TranslateForm