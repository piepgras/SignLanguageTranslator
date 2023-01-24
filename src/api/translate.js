import { createHeader } from "./index";
import { STORAGE_KEY_USER } from "../const/storageKeys";
import { useUser } from "../state/UserState";

const API_URL = process.env.REACT_APP_API_URL

export const addTranslation = async (body) => {
    try {
        console.log(`${API_URL}?username=${useUser}`)
        await fetch(`${API_URL}?username=${STORAGE_KEY_USER}`, {
            method: 'POST',
            headers: createHeader(),
            body: JSON.stringify({translations: [body]})
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
