import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import Cookies from "universal-cookie";
import { LOGIN, REFRESH_TOKEN } from "../useFetch/useFetch";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState({});
  const cookies = new Cookies();
  const refreshToken = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${REFRESH_TOKEN}`);

      if (response.data.success) {
        setUser({ accessToken: response.data.data.accessToken });
        cookies.set("accessToken", response.data.data.accessToken, {
          path: "/",
        });
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Token Refresh Error:", error);
      return false;
    }
  };

  const checkTokenExpiration = async () => {
    setLoading(true);
    const storedToken = cookies.get("accessToken");
    setUser(storedToken);
    if (storedToken) {
      try {
        const decodedToken = jwtDecode(storedToken);
        const currentTime = Math.floor(Date.now() / 1000);
        setUserInfo(decodedToken);
        if (decodedToken.exp < currentTime) {
          await refreshToken();
        }
      } catch (error) {
        console.error("Token Decoding Error:", error);
      }
    }
  };

  useEffect(() => {
    setLoading(true);
    checkTokenExpiration();
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const response = await axios.post(`${LOGIN}`, {
        email: email,
        password: password,
      });

      if (response.data.success) {
        const decodedToken = jwtDecode(response.data.data.accessToken);
        setUserInfo(decodedToken);
        cookies.set("accessToken", response.data.data.accessToken, {
          path: "/",
        });

        setUser(response.data.data.accessToken);
        setLoading(false);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Login Errors:", error);
      return error.response.data.message;
    }
  };

  const logout = () => {
    cookies.remove("accessToken", { path: "/" });
    setUser(null);
  };
  //   console.log("user", userInfo);
  return (
    <AuthContext.Provider
      value={{ user, login, logout, loading, refreshToken, userInfo }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
