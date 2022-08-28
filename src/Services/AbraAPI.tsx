import axios, { AxiosResponse } from "axios";

export interface Credentials {
  email: string;
  password: string;
}
const ABRA_SERVER_URL = "https://weather-abra.herokuapp.com/";

const axiosInstance = axios.create({
  baseURL: ABRA_SERVER_URL,
});

export const abraCreateInterceptor = (
  onSuccess: (
    response: AxiosResponse
  ) => AxiosResponse | Promise<AxiosResponse>,
  onError: (error: any) => any
): number => {
  return axiosInstance.interceptors.response.use(onSuccess, onError);
};

export const abraEjectInterceptor = (interceptorId: number) => {
  axiosInstance.interceptors.response.eject(interceptorId);
};
export const abraLogin = async (email: string, password: string) => {
  const credentials: Credentials = { email, password };
  const response = await axiosInstance.post("/api/auth/login/", credentials);

  return response;
};

const abraProtectAPI = async (
  method: string,
  token: string,
  url: string,
  data?: any
) => {
  if (!token) {
    throw new Error("Token is not available in request.");
  }
  const response = await axiosInstance({
    method,
    url,
    headers: { Authorization: `Bearer ${token}` },
  });

  return response;
};

export const abraGetFavorite = async (token: string) => {
  return await abraProtectAPI("get", token, "/api/favorites/");
};
