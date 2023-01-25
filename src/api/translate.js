import { STORAGE_KEY_USER } from "../const/storageKeys";
import { useUser } from "../context/UserContext1";
import { storageRead } from "../utils/storage";
import { createHeader } from "./index";

const API_URL = process.env.REACT_APP_API_URL

export const addTranslation = async (user, translation) => {
    console.log(user.username + " " + translation)
    try {
        const response = await fetch(`${API_URL}/${user.id}`, {
            method: 'PATCH',
            headers: createHeader(),
            body: JSON.stringify({
                translations: [...user.translations, translation] 
            })
        })

        if(!response.ok){
            throw new Error("Could not update the translation")
        }

        const result = await response.json()
        return [ null, result ]

    } catch (error) {
        return [error.message, null]
    }
}

export const deleteEntireUser = async (user) => {
    try {
        const response = await fetch(`${API_URL}/${user.id}`, {
        method: 'DELETE',
        headers: createHeader()
    })

    if(!response.ok){
        throw new Error("Could not delete user: " + user.username)
    }

    const result = await response.json()
    return [ null, result ]
        
    } catch (error) {
        return [error.message, null]
    }
}
// FIX THIS
// export const deleteTranslation = async (translation) => {
//     try {
//         translation.status = "inactive";
//         const response = await fetch(`${API_URL}` + translation.id, {
//             method: 'PATCH',
//             headers: createHeader(),
//             body: JSON.stringify(translation)
//         })
//         const data = await response.json()
//         return data;
//     } catch (error) {
//         return [error.message, null]
//     }
// }
