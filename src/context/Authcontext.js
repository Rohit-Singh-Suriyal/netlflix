import { createContext, useContext, useEffect, useState } from 'react';
import { Auth ,db} from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {setDoc,doc} from 'firebase/firestore'


const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function signUp(email, password) {
   createUserWithEmailAndPassword(Auth, email, password);
   setDoc(doc(db,'users', email),{
    saveshows:[]
   } )
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(Auth, email, password);
  }

  function logOut() {
    return signOut(Auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  });

  return (
    <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}