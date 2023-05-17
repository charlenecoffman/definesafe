
import { useAuth0 } from "@auth0/auth0-react";
import { createContext, useEffect, useState } from "react";

export interface IAuthenticationProps {
    children: JSX.Element[] | JSX.Element | undefined
}

export const AuthContext = createContext("");

export const Authentication = (props: IAuthenticationProps) => {
    const { getAccessTokenSilently, isAuthenticated } = useAuth0();
    const [token, setToken] = useState("");
    
    useEffect(() => {        
        if(isAuthenticated && token === ""){
            getAccessTokenSilently().then(t => {
                setToken(t);
            });
        }
    })
    
    return (
        <AuthContext.Provider value={token}>
            {props.children}
        </AuthContext.Provider>
    )
}