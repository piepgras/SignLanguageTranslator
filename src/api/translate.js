// Translate.js is responsible for handling HTTP PATCH requests
// which adds translations to users and clears their history.

import { createHeader } from "./index";

const API_URL = process.env.REACT_APP_API_URL

// Adds a translation by passing it a user and translation.
// Creates a HTTP PATCH request which patches the passed
// translation onto the JSON of the specified user (by id).
// Returns the result of the response or error.
// Shifts out the first element of the translations array
// to stay within the limit of 10.
export const addTranslation = async (user, translation) => {

    if(user.translations.length >= 10) {
        user.translations.shift()
    }

    try {
        const response = await fetch(`${API_URL}/${user.id}`, {
            method: 'PATCH',
            headers: createHeader(),
            body: JSON.stringify({
                translations: [...user.translations, translation] 
            })
        })

        if(!response.ok){
            throw new Error("Could not patch the translation!")
        }

        const result = await response.json()
        return [ null, result ]

    } catch (error) {
        return [error.message, null]
    }
}

// Clears the translation history by passing it a userId.
// Creates a HTTP PATCH request which patches the translations
// of a (by id) specified user with an empty [] to clear its history.
// Returns the result of the response or error.
export const translationClearHistory = async (userId) => {
    try {
        const response = await fetch(`${API_URL}/${userId}`,
            {
                method: 'PATCH',
                headers: createHeader(),
                body: JSON.stringify({
                    translations: []
                })
            })

        if (!response.ok) {
            throw new Error('Could not patch the translation history!')
        }

        const result = await response.json()
        return [null, result]

    } catch (error) {
        return [error.message, null]
    }
}