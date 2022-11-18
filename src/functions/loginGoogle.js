import { auth } from "../Firebase/firebase";
import { GoogleAuthProvider, signInWithPopup , signInWithRedirect  } from "firebase/auth";

export default async function loginWithGoogle (){
    try {
        const authWithGoogle = new GoogleAuthProvider()
         signInWithRedirect(auth , authWithGoogle);
    } catch (error) {
        console.log(error)
    }
}