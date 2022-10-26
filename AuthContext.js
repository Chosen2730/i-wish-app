import React, { useContext, useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(!true);
  const [userToken, setUserToken] = useState(null);

  const getData = async () => {
    try {
      const storedToken = await AsyncStorage.getItem("tokenValue");
      if (storedToken !== null) {
        setUserToken(storedToken);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const login = () => {
    const token = "1234adasg";
    setIsLoading(false);
    setUserToken(token);
    AsyncStorage.setItem("tokenValue", token);
  };
  const logout = () => {
    setIsLoading(false);
    setUserToken(null);
    AsyncStorage.removeItem("tokenValue");
  };
  return (
    <AuthContext.Provider value={{ login, logout, isLoading, userToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AuthContext);
};

export { AuthContext, AuthProvider };
