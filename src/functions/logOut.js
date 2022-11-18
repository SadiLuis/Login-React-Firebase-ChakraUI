import { auth } from "../Firebase/firebase";
import { signOut } from "firebase/auth";

export default async function signOutUser (){
    try {
        await signOut(auth)
    } catch (error) {
        console.log(error)
    }
} 