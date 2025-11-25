import React, { useState } from "react";

import Header from "./Header";

const Login = () => {


  const [isSignedInForm, setIsSignedInForm] = useState(true);

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
          type="text"
          placeholder="Username"
          className="p-3 mb-4 w-full rounded bg-gray-800 text-white outline-none"
        />
    )}

        <input
          type="email"
          placeholder="Email Address"
          className="p-3 mb-4 w-full rounded bg-gray-800 text-white outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-3 mb-6 w-full rounded bg-gray-800 text-white outline-none"
        />

        <button className="bg-red-600 hover:bg-red-700 w-full p-3 rounded font-semibold">
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
