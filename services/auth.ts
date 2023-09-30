import axios from "axios";
import { API_URL } from "@env";
interface RegisterData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

export const register = async (userData: RegisterData) => {
  try {
    const res = await axios.post(`${API_URL}/auth/register`, userData);
    return res.data;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to register user");
  }
};

export const login = async (loginData: LoginData) => {
  try {
    const res = await axios.post(`${API_URL}/auth/login`, loginData);
    return res.data;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to login user");
  }
};
