import { createContext, ReactElement, useContext, useEffect, useState } from "react";
import { abraLogin } from "./AbraAPI";

const AuthenticationContext = createContext<any>(undefined);

export const AuthenticationProvider: React.FC<{ children: ReactElement }> = ({
  children,
}) => {
  const [userToken, setUserToken] = useState<string | undefined>(undefined);
  const api = { setUserToken, userToken };

  useEffect( () => {
    console.log(userToken);
  }, [userToken]);
  return (
    <AuthenticationContext.Provider value={api}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthentication: any = () => {
  const [authenticationError, setAuthenticationError] =
    useState<string | undefined>(undefined);
  const ctx = useContext(AuthenticationContext);

  if (!ctx) {
    throw new Error(
      "useAuthentication must be used within the AutenticationProvider"
    );
  }
  const login = async (email: string, password: string) => {
    let response = undefined;
    try {
      setAuthenticationError(undefined);
      response = await abraLogin(email, password);
    } catch (e: any) {
      let errorMessage: string = "";
      const errorResponse = e.response.data;

      for (let item in errorResponse) {
        errorMessage += errorResponse[item] + " ";
      }

      setAuthenticationError(errorMessage);
    }

    ctx.setUserToken(response?.data.access_token);
  };

  return [login, authenticationError];
};
