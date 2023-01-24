import { createHeader } from "./index";

const API_URL = process.env.REACT_APP_API_URL

export const addTranslation = async (body) => {
    await fetch(`${API_URL}`, {
        method: 'POST',
        headers: createHeader(),
        body: JSON.stringify(body)
    })
}

export const deleteTranslation = async (translation) => {
    translation.status = "inactive";
    const response = await fetch(`${API_URL}` + translation.id, {
        method: 'PATCH',
        headers: createHeader(),
        body: JSON.stringify(translation)
    })
    const data = await response.json()
    return data;
}
