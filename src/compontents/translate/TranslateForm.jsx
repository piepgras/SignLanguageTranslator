import { useState } from "react"
import { addTranslation } from "../../api/translate";
import { STORAGE_KEY_USER } from "../../const/storageKeys";
import { useUser } from "../../context/UserContext";
import { storageRead } from "../../utils/storage";

const TranslateForm = () => {
    const [inputText, setInputText] = useState(" ")
    const [images, setImages] = useState([]);
    let user = storageRead(STORAGE_KEY_USER)


const handleChange = (event) => {
    setInputText(event.target.value);
}

function parseTranslation(str) {
    return str.toLowerCase().replace(/[^a-z]/g, "");
}

const handleButtonClick = () => {
    let parsedTranslation = parseTranslation(inputText)
    addTranslation(user, parsedTranslation)
    setImages(parsedTranslation.split('').map((char, index) => (
        <img className="sign" key={index} src={`../signs/${char}.png`} alt={char} />
    )));
}

    return (
        <div>
            <input type="text" onChange={handleChange} placeholder="What should I translate?" />
            <button onClick={handleButtonClick}>Translate!</button>
            { images }
        </div>
    )
}

export default TranslateForm