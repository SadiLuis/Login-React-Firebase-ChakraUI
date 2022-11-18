import { auth } from "../Firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth"

export default async function loginUser (email , password) {
    try {
        const userLogin = await signInWithEmailAndPassword(auth, email, password)
        console.log(userLogin)
    } catch (error) {
        console.log(error)
    }
}