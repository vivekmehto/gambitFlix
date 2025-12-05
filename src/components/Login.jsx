import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { USER_AVATAR } from "../utils/constants";
import { addUser } from "../utils/userSlice";
import { BG_URL } from "../utils/constants";

const Login = () => {
  const [isSignedInForm, setIsSignedInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = async (e) => {
    e?.preventDefault?.();
    if (loading) return;

    // capture values immediately to avoid ref becoming null
    const nameVal = name?.current?.value ?? "";
    const emailVal = email?.current?.value ?? "";
    const passwordVal = password?.current?.value ?? "";

    const message = checkValidData(nameVal, emailVal, passwordVal, isSignedInForm);
    setErrorMessage(message);
    if (message) return;

    setLoading(true);
    setErrorMessage("");

    try {
      if (!isSignedInForm) {
        // SIGN UP
        const userCredential = await createUserWithEmailAndPassword(auth, emailVal, passwordVal);
        const user = userCredential.user;

        // ensure updateProfile completes before reading auth.currentUser
        await updateProfile(user, { displayName: nameVal, photoURL: USER_AVATAR });

        // read updated user from auth.currentUser (guaranteed to be set after await)
        const updated = auth.currentUser || user;
        const payload = {
          uid: updated.uid,
          email: updated.email,
          displayName: updated.displayName || nameVal,
          photoURL: updated.photoURL || USER_AVATAR,
        };

        dispatch(addUser(payload));
        navigate("/browse");
      } else {
        // SIGN IN
        const userCredential = await signInWithEmailAndPassword(auth, emailVal, passwordVal);
        const signedInUser = userCredential.user;

        // after sign-in, you should populate Redux so Header can read it
        // prefer auth.currentUser because it contains provider-updated fields
        const current = auth.currentUser || signedInUser;
        const payload = {
          uid: current.uid,
          email: current.email,
          displayName: current.displayName || null,
          photoURL: current.photoURL || null,
        };
        dispatch(addUser(payload));
        navigate("/browse");
      }
    } catch (err) {
      console.error("Auth error:", err);
      if (err?.code === "auth/email-already-in-use") {
        setErrorMessage("This email is already registered. Try signing in.");
      } else if (err?.code === "auth/wrong-password") {
        setErrorMessage("Incorrect password. Try again.");
      } else if (err?.code === "auth/invalid-email") {
        setErrorMessage("Email address is invalid.");
      } else {
        setErrorMessage(err?.message || "Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  const toggleSignInForm = () => {
    setIsSignedInForm(!isSignedInForm);
    setErrorMessage("");
  };

  return (
    <div className="relative h-screen w-full">
      <Header />

      {/* Background Image */}
      <img
        className="h-full w-full object-cover brightness-50"
        src={BG_URL}
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

        {!isSignedInForm && (
          <input
            ref={name}
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

        <button
          className="bg-red-600 hover:bg-red-700 w-full p-3 rounded font-semibold disabled:opacity-50"
          onClick={handleButtonClick}
          disabled={loading}
        >
          {loading ? (isSignedInForm ? "Signing in..." : "Creating account...") : (isSignedInForm ? "Sign In" : "Sign Up")}
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
