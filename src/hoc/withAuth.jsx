import { Component } from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../state/UserState";

const withAuth = Component => props => {
    const { user } = useUser()
    if(user !== null){
        return <Component {...props} />
    } else {
        return <Navigate to="/" />
    }
}
export default withAuth