import { useState, useRef } from "react";

import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword , updateProfile} from "firebase/auth";

const Login = () => {
  const [isSignedInForm, setIsSignedInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const email = useRef(null);
  const password = useRef(null);
  const username = useRef(null);

  const handleButtonClick = () => {

    const message = checkValidData(username.current?.value,email.current.value,password.current.value , isSignedInForm);
    console.log(username.current)
    console.log("Validation Result:", message);
    setErrorMessage(message);

    if(message) return;

    if(!isSignedInForm){

  createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("User signed up:", user);
     return updateProfile(user, {
      displayName: username.current.value,
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error signing up:", errorCode, errorMessage);
    setErrorMessage(errorCode + ": " + errorMessage);
  });

  }else{
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("User signed in:", user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error signing in:", errorCode, errorMessage);
    setErrorMessage(errorCode + ": " + errorMessage);
  });
  }
  }
  const toggleSignInForm = () => {
    setIsSignedInForm(!isSignedInForm);
  };
  return (
    <div className="relative h-screen w-full">
      <Header />

      {/* Background Image */}
      <img
        className="h-full w-full object-cover brightness-50"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/6fd9d446-cd78-453a-8c9c-417ed3e00422/web/IN-en-20251117-TRIFECTA-perspective_2fe4e381-977f-49fd-a7f4-1da0bcf09429_large.jpg"
        alt="Login Banner"
      />

      {/* Centered Form */}
      <form
      onSubmit={(e) => { e.preventDefault(); }}
        className="
          absolute top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2
          w-[90%] max-w-md
          bg-black/70 p-10 rounded-lg text-white
          shadow-xl
        "
      >
        <h2 className="text-3xl font-bold mb-6"> {isSignedInForm ? "Sign In" : "Sign Up"}</h2>


    { !isSignedInForm && (
        <input
        ref={username}
          type="text"
          placeholder="Username"
          className="p-3 mb-4 w-full rounded bg-gray-800 text-white outline-none"
        />
    )}

        <input
        ref={email}
          type="email"
          placeholder="Email Address"
          className="p-3 mb-4 w-full rounded bg-gray-800 text-white outline-none"
        />

        <input
        ref={password}
          type="password"
          placeholder="Password"
          className="p-3 mb-6 w-full rounded bg-gray-800 text-white outline-none"
        />

        {errorMessage && <p className="text-red-700 mb-4 font-bold">{errorMessage}</p>}

        <button className="bg-red-600 hover:bg-red-700 w-full p-3 rounded font-semibold" onClick={handleButtonClick}>
          {isSignedInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="mt-4 text-gray-300 text-sm" onClick={toggleSignInForm}>
          {isSignedInForm ? "New to GambitFlix? " : "Already have an account? "}
          <span className="text-white font-medium cursor-pointer">{isSignedInForm ? "Sign up now" : "Sign in now"}</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
