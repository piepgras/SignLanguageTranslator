// Storage.js is responsible for validating user keys.
// Also saves key and user, reads and writes from storage.

// Validates the key by checking if it exists or is not equal to a string
const validateKey = ( key ) => {

    if (!key || typeof key !== 'string') {
        throw new Error ('Invalid storage key provided!')
    }  
}

// Saves a value (user) to a JSON if the key validates and saves it to storage
export const storageSave = ( key, value ) => {

    validateKey(key)
    
    if (!value) {
        throw new Error (`storageSave: No value provided for key: ${key}`)
    }  
    
    localStorage.setItem(key, JSON.stringify(value))
}

// Returns the user that corresponds to the given key from storage
export const storageRead = ( key ) => {
    
    validateKey(key)
    const data = localStorage.getItem(key)

    if (data) {
        return JSON.parse(data)
    }
    return null
}

// Deletes the data that corresponds to the given key from storage
export const storageDelete = ( key ) => {

    validateKey(key)
    localStorage.removeItem(key)
}