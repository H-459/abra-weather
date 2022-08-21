import axios, { AxiosResponse } from "axios";
import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import { useMutation } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import {
  abraCreateInterceptor,
  abraEjectInterceptor,
  abraLogin,
  Credentials,
} from "./AbraAPI";

const AuthenticationContext = createContext<any>(undefined);

export const AuthenticationProvider: React.FC<{ children: ReactElement }> = ({
  children,
}) => {
  const [userToken, setUserToken] = useLocalStorage<string | undefined>(
    "token",
    undefined
  );
  console.log("token = ", userToken);
  const [lastLocation, setLastLocation] =
    useState<string | undefined>(undefined);

  const api = { setUserToken, userToken, lastLocation };
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const resultInterceptor = (response: AxiosResponse) => {
      return response;
    };

    const errorInterceptor = (error: any) => {
      if (error.response.status === 401) {
        setLastLocation(location.pathname);
        navigate("/login");
      }
      return Promise.reject(error);
    };

    const interceptorId = abraCreateInterceptor(
      resultInterceptor,
      errorInterceptor
    );

    return () => abraEjectInterceptor(interceptorId);
  }, [location, lastLocation, navigate]);

  return (
    <AuthenticationContext.Provider value={api}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthentication: any = (
  onLogin?: (lastLocation: string) => void,
  onLogout?: () => void
) => {
  const [authenticationError, setAuthenticationError] =
    useState<string | undefined>(undefined);
  const ctx = useContext(AuthenticationContext);

  if (!ctx) {
    throw new Error(
      "useAuthentication must be used within the AutenticationProvider"
    );
  }

  const loginMutation = useMutation(
    ({ email, password }: Credentials) => {
      setAuthenticationError(undefined);
      return abraLogin(email, password);
    },
    {
      onSuccess: (response) => {
        ctx.setUserToken(response?.data.access_token);
        if (onLogin) onLogin(ctx.lastLocation);
      },
      onError: (e: any) => {
        let errorMessage: string = "";
        const errorResponse = e.response.data;

        for (let item in errorResponse) {
          errorMessage += errorResponse[item] + " ";
        }

        setAuthenticationError(errorMessage);
      },
    }
  );

  const login = async (email: string, password: string) => {
    loginMutation.mutate({ email, password });
  };

  const logout = () => {
    setAuthenticationError(undefined);
    ctx.setUserToken(undefined);
    if (onLogout) onLogout();
  };

  return {
    login,
    logout,
    isLoginInProgress: loginMutation.isLoading,
    authenticationError,
  };
};
