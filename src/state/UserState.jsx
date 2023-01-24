import { createContext, useContext, useState } from "react";
import { STORAGE_KEY_USER } from "../const/storageKeys";
import { storageRead } from "../utils/storage";


const UserState = createContext()

export const useUser  = () => {
    return useContext(UserState)
}

const UserProvider = ( {children} ) => {
    
    const [ user, setUser ] = useState( storageRead(STORAGE_KEY_USER))
    const state = {
        user,
        setUser
    }

    return (
        <UserState.Provider  value={ state }>
            { children }
        </UserState.Provider>
    )
}
export default UserProvider