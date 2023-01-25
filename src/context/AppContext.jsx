import UserProvider from "./UserContext1";

const AppContext = ({children}) => {
    return(
        <UserProvider>
            { children }
        </UserProvider>
    )
}
export default AppContext;