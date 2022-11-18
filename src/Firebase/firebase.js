import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBVBIoAahJD2o2MRyfIB5lT4iVT9gu80oQ",
  authDomain: "login-react-9b927.firebaseapp.com",
  projectId: "login-react-9b927",
  storageBucket: "login-react-9b927.appspot.com",
  messagingSenderId: "517702211385",
  appId: "1:517702211385:web:db4f5907820aaa4bd83ae8"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

