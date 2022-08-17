import axios from "axios";

export interface Credentials {
  email: string;
  password: string;
}
const ABRA_SERVER_URL = "https://weather-abra.herokuapp.com/";

const axiosInstance = axios.create({
  baseURL: ABRA_SERVER_URL,
});

export const abraLogin = async (email: string, password: string) => {
  const credentials: Credentials = { email, password };
  const response = await axiosInstance.post("/api/auth/login/", credentials);

  return response;
};
