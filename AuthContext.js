import React, { useContext, useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { app, database } from "./config";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(!true);
  const [userToken, setUserToken] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [waiting, setWaiting] = useState(false);

  const auth = getAuth();
  const dbInstance = collection(database, "users");
  const user = { name, email, password, userName, tel };
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 10000);
  }, [error]);

  useEffect(() => {
    let total = cartItems.reduce((total, crr) => {
      const { price, count } = crr;
      const itemPrice = price * count;
      total += itemPrice;
      return total;
    }, 0);
    setTotal(total);
  }, [cartItems]);

  useEffect(() => {
    getData();
  }, []);

  const handleSignup = async () => {
    setWaiting(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await addDoc(dbInstance, user);
      setUserToken(res.user.stsTokenManager.accessToken);
      AsyncStorage.setItem("tokenValue", userToken);
      setIsLoading(false);
    } catch (error) {
      setError(
        "Error: Ensure your email address is valid and password lenth is greater than 8"
      );
      setWaiting(false);
    }
    setWaiting(false);
  };

  const handleSignin = async () => {
    setWaiting(true);
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      setUserToken(res.user.stsTokenManager.accessToken);
      AsyncStorage.setItem("tokenValue", userToken);
      setIsLoading(false);
    } catch (err) {
      setError(
        "Error: Ensure your email address is valid and password lenth is greater than 8"
      );
      setWaiting(false);
    }
    setWaiting(false);
  };

  const signUpWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      console.log(res.user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const signUpWithFacebook = async () => {
    try {
      const res = await signInWithPopup(auth, facebookProvider);
      console.log(res.user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = () => {
    setIsLoading(false);
    setUserToken(null);
    AsyncStorage.removeItem("tokenValue");
  };

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

  return (
    <AuthContext.Provider
      value={{
        logout,
        isLoading,
        userToken,
        cartItems,
        setCartItems,
        total,
        handleSignup,
        handleSignin,
        error,
        setName,
        setEmail,
        setUserName,
        setTel,
        setPassword,
        waiting,
        signUpWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AuthContext);
};

export { AuthContext, AuthProvider };
