import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <header className="
      w-full absolute top-0 z-20
      bg-gradient-to-b from-black/90 via-black/40 to-transparent
      px-6 py-4
    ">
      <div className="w-11/12 mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <h1 className="text-4xl font-extrabold text-red-600 tracking-wide hover:text-red-500 transition-all duration-200">
            ♞ Gambit<span className="text-white">Flix</span>
          </h1>
        </Link>

        {/* User Section */}
        {user && (
          <div className="flex items-center gap-4">

            {/* Username */}
            <p className="text-white font-semibold text-md hidden sm:block">
              {user.displayName || "User"}
            </p>

            {/* Avatar */}
            <img
              src={user.photoURL}
              alt="User Avatar"
              className="
                w-10 h-10 object-cover 
                ring-2 ring-white/40 shadow-lg 
                cursor-pointer hover:ring-red-600 hover:scale-105 
                transition-all duration-200
              "
            />

            {/* Sign Out Button */}
            <button
              onClick={handleSignOut}
              className="
                 hover:bg-red-700 
                px-4 py-2 rounded-md 
                text-white font-medium
                transition-all duration-200 
                shadow-md hover:shadow-lg
              "
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
