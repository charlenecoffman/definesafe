import { useAuth0 } from "@auth0/auth0-react";

export const TopMenu = () => {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
    return (
    <>
        {!isAuthenticated && <button onClick={() => loginWithRedirect()}>Log In</button>}
        {isAuthenticated && <button onClick={() => logout()}>Log Out</button>}
    </>
    )
}