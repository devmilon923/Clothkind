import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase-setup";

export const AuthContext = createContext();

export const ContextProvider = ({ children }) => {
  const [history, setHistory] = useState([]);
  const [isUserLoading, setUserLoading] = useState(true);
  const [user, setUser] = useState();
  const sum = 89;

  useEffect(() => {
    const close = onAuthStateChanged(auth, (usr) => {
      if (usr) {
        setUser(usr);
        setUserLoading(false);
      } else {
        setUser(null);
        setUserLoading(false);
      }
    });

    return () => close();
  }, []);

  // ====================
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleProvider = new GoogleAuthProvider();
  const google = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const update = (obj) => {
    return updateProfile(auth.currentUser, obj);
  };
  const forgetPasswordEmail = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const logout = () => {
    return signOut(auth);
  };

 
  return (
    <AuthContext.Provider
      value={{
        sum,
        user,
        setUser,
        signUp,
        signIn,
        google,
        isUserLoading,
        logout,
        update,
        auth,
        history,
        setHistory,
        forgetPasswordEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
