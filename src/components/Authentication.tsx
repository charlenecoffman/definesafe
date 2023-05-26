import { ReactNode, createContext, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const AuthContext = createContext("");

interface IAuthentication {
    children?: ReactNode | ReactNode[]
}

export const Authentication = ({children}: IAuthentication) =>{
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  const [token, setToken] = useState("");

  useEffect(() => {        
      if(token === "" && isAuthenticated){
          getAccessTokenSilently().then(t => {
              setToken(t);
          });
      }
       // eslint-disable-next-line
  })

  return (
    <>
        <AuthContext.Provider value={token}>
            {children}
        </AuthContext.Provider>
    </>
  );
}
