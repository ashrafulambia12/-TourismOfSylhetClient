import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase.Config/FirebaseInitialization";
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const handelGoogleSignIn = () => {

        return signInWithPopup(auth, googleProvider);
    }
    const handelGoogleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    };
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, [auth])
    return {
        user,
        error,
        handelGoogleSignIn,
        logOut,
        handelGoogleSignOut,

    }
}
export default useFirebase;