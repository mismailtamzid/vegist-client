import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  GoogleAuthProvider,
  signOut,
  updateProfile,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const auth = getAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const googleProvider = new GoogleAuthProvider();

  const googleLogin = (history, redirect_uri) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider).then((res) => {
      saveUser(res.user.email, res.user.displayName, "PUT");
      setIsLoading(false);

      history.push(redirect_uri);
      alert("suceess google login");
    });
  };

  const logout = () => {
    return signOut();
    setUser({});
  };

  const manualyRegister = (email, password, name, history, redirect_uri) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password).then((res) => {
      updateName(name);
      saveUser(email, name, "POST");

      history.push(redirect_uri);
      setIsLoading(false);
      alert("success");
    });
  };

  const manualyLogin = (email, password, history, destination) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password).then((res) => {
       setIsLoading(false);
       alert("success login");
      history.push(destination);
     
    });
  };

  // observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unsubscribed;
  }, []);
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch(`https://rocky-dawn-28247.herokuapp.com/users`, {
      method: method,
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    });
  };
  useEffect(() => {
    fetch(`https://rocky-dawn-28247.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user?.email]);

  const updateName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  return {
    setError,
    saveUser,
    updateName,
    manualyLogin,

    user,
    logout,
    error,
    googleLogin,
    manualyRegister,
    isLoading,
    setIsLoading,
    admin,
  };
};
export default useFirebase;
