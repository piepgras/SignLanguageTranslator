// UserContext.jsx manages the state and exposes
// the user context to the rest of the app

import {createContext, useContext, useState} from "react"
import {STORAGE_KEY_USER} from "../const/storageKeys"
import {storageRead} from "../utils/storage"

const UserContext = createContext();
export const useUser = () => { return useContext(UserContext) }

const UserProvider = ({children}) => {

    const [user, setUser] = useState(storageRead(STORAGE_KEY_USER));
    const context = { user, setUser}

    return (
        <UserContext.Provider value={ context }>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider