import {createHeader} from '.'
const API_URL = process.env.REACT_APP_API_URL


const checkForUser = async (username) => {
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
            throw new Error(`Could not create user with username ` + username)
        }
        const data = await response.json()
        return [null, data]
    } catch (error) {
        return [error.message, null]
    }
}

export const loginUser = async (username) => {
  
    const [fetchError, user] = await checkForUser(username)

    if (fetchError !== null) {
        return [fetchError, null]
    }

    if (user.length > 0) {
        // We want to return the use from API as an object not an awway
        return [null, user.pop()]
    }

    return await createUser(username)
}

export const userById = async (userId) => {
    try {
        console.log('userid:', userId)
        const response = await fetch(`${API_URL}/${userId}`)
        if (!response.ok) {
            throw new Error("Coud not fetch user")
        }
        const user = await response.json()

        return [null, user]
    } catch (error) {
        return [error.message, null]
    }
}

export const userDelete = async (user) => {
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