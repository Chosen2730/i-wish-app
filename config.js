import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCN9o47Xmr4FrDRHg8IXmC7XaSrwpaLd-g",
  authDomain: "i-wish-595cb.firebaseapp.com",
  projectId: "i-wish-595cb",
  storageBucket: "i-wish-595cb.appspot.com",
  messagingSenderId: "390521775982",
  appId: "1:390521775982:web:0afc2e02437f7504c2037f",
  measurementId: "G-R00GR837TB",
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export { app, database };
