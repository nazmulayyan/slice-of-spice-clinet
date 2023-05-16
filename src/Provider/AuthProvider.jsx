import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});

    const registerUser = ( email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //login user
    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    //logout
    const logOut =()=>{
        return signOut(auth)
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,
            (loggedUser)=>{
                setUser(loggedUser);
                console.log(loggedUser);
        });
        return()=>{
            unSubscribe();
        }
    },[])

    const authInfo = { registerUser, user, logOut, loginUser, setUser };
    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>;
};

export default AuthProvider;