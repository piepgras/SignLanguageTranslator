import {createHeader} from '.'
const API_URL = process.env.REACT_APP_API_URL


const userCheck = async (username) => {
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

const userCreate = async (username) => {
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

export const userLogin = async (username) => {
  
    const [fetchError, user] = await userCheck(username)

    if (fetchError !== null) {
        return [fetchError, null]
    }

    if (user.length > 0) {
        // We want to return the use from API as an object not an awway
        return [null, user.pop()]
    }

    return await userCreate(username)
}

export const userFindById = async (userId) => {
    try {
        const response = await fetch(`${API_URL}/${userId}`)
        if(!response.ok){
            throw new Error('Could not fetch user')
        }
        const user = await response.json()
        return [null, user]
        
    } catch (error) {
        return [ error.message, null ]
    }

}