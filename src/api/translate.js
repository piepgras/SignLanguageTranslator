import { createHeader } from "./index";

const API_URL = process.env.REACT_APP_API_URL

export const addTranslation = async (user, translation) => {
    try {
        console.log(`${API_URL}?username=${user.username}`)
        await fetch(`${API_URL}?username=${user.username}`, {
            method: 'PATCH',
            headers: createHeader(),
            body: JSON.stringify({
                username: user.username,
                translations: [...user.translations, translation]
                
            })
        })
    } catch (error) {
        return [error.message, null]
    }
}

export const deleteTranslation = async (translation) => {
    try {
        translation.status = "inactive";
        const response = await fetch(`${API_URL}` + translation.id, {
            method: 'PATCH',
            headers: createHeader(),
            body: JSON.stringify(translation)
        })
        const data = await response.json()
        return data;
    } catch (error) {
        return [error.message, null]
    }
}
