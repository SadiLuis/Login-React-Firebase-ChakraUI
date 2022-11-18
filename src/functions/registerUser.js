import { auth } from '../Firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth'

export default async function registerUser (email , password) {
    try {
       const user = await createUserWithEmailAndPassword(auth, email, password);
       console.log(user)
    } catch (error) {
        console.log(error);
        return false;
    }
}