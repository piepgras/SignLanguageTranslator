import UserProvider from "./UserState";

const AppState = ({children}) => {

    return(
        <UserProvider>
            { children}
        </UserProvider>
    )
}
export default AppState;