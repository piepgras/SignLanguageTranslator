import { useState } from "react"
import { addTranslation } from "../../api/translate";

const TranslateForm = () => {
    const [inputText, setInputText] = useState(" ")
    const [images, setImages] = useState([]);

const handleChange = (event) => {
    setInputText(event.target.value);
}

const handleButtonClick = () => {
    addTranslation(inputText)
    setImages(inputText.split('').map((char, index) => (
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