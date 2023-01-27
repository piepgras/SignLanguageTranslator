// user.js is responsible for user creation, login, checking
// finding and deletion.

import {createHeader} from '.'

const API_URL = process.env.REACT_APP_API_URL

// Creates a user.
// Creates a HTTP POST request which creates a new user
// with the specified username.
// Returns a new user.
const userCreate = async (name) => {
    try {
        const response = await fetch(`${API_URL}`, {
            method: 'POST',
            headers: createHeader(),
            body: JSON.stringify({
                username: name,
                translations: []
            })
        })

        if (!response.ok) {
            throw new Error("Could not create user with username" + name + "!")
        }

        const user = await response.json()
        return [null, user]
        
    } catch (error) {
        return [error.message, null]
    }
}

// Handles user login.
// Checks if a user exists, if it does it will be logged in.
// If it doesn't exist it will be created and then logged in.
// Returns error or pop user. 
export const userLogin = async (username) => {
  
    const [fetchError, user] = await userCheck(username)

    if (fetchError !== null) {
        return [fetchError, null]
    }

    if (user.length > 0) {
        return [null, user.pop()]
    }

    return await userCreate(username)
}

// Checks if a user exists.
// Returns a user if it exists otherwise it returns error.
const userCheck = async (username) => {
    try {
        const response = await fetch(`${API_URL}?username=${username}`)

        if (!response.ok) {
            throw new Error("User not found!")
        }

        const user = await response.json()      
        return [null, user]

    } catch (error) {
        return [error.message, null]
    }
}

// Finds user by id.
// Returns a specific user or an error depending on the users existence
export const userFindById = async (userId) => {
    try {
        const response = await fetch(`${API_URL}/${userId}`)

        if (!response.ok) {
            throw new Error("Could not find user!")
        }

        const user = await response.json()
        return [null, user]

    } catch (error) {
        return [error.message, null]
    }
}

// Deletes a user.
// Creates a HTTP DELETE request which removes a user from the API.
export const userDelete = async (user) => {
    try {
        const response = await fetch(`${API_URL}/${user.id}`, {
        method: 'DELETE',
        headers: createHeader()
    })

    if(!response.ok){
        throw new Error("Could not delete user: " + user.username + "!")
    }

    const result = await response.json()
    return [ null, result ]
        
    } catch (error) {
        return [error.message, null]
    }
}