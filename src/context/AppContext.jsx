// AppContext.jsx provides the context for the app

import UserProvider from "./UserContext";

const AppContext = ({children}) => {
    return(
        <UserProvider>
            { children }
        </UserProvider>
    )
}
export default AppContext;