import {createHeader} from './index'
const API_URL = process.env.REACT_APP_API_URL

const checkForhUser = async (username) => {
    try {
        const response = await fetch(`${API_URL}?username=${username}`)
        if (!response.ok) {
            throw new Error("User not found")
        }
        const data = await response.json()
        
        console.log("data:",data)
        
        return [null, data]
    } catch (error) {
        return [error.message, null]
    }
}

const createUser = async (username) => {
    try {
        const response = await fetch(`${API_URL}`, {
            method: 'POST',
            headers: createHeader(),
            body: JSON.stringify({username: username, translations: [] })

        })
        if (!response.ok) {
            throw new Error(`Could not create user with username ${username}`)
        }
        const data = await response.json()

        return [null, data]
    } catch (error) {
        return [error.message, null]
    }
}

export const loginUser = async (username) => {
  
    const [fetchError, user] = await checkForhUser(username)

    if (fetchError !== null) {
        return [fetchError, null]
    }

    if (user.length > 0) {
        // We want to return the use from API as an object not an awway
        return [null, user.pop()]
    }

    return await createUser(username)
}