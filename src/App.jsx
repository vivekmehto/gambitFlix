import { createBrowserRouter} from "react-router"
import { RouterProvider } from "react-router/dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Browse from "./components/Browse";
import About from "./components/About";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { addUser, removeUser } from "./utils/userSlice";
import { useDispatch } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  const dispatch = useDispatch();

  const router = createBrowserRouter([
{
  path: "/",
  element: <Body/>,
},
{
  path: "Login",
  element: <Login/>,
},
{
  path: "browse",
  element: <ProtectedRoute><Browse/></ProtectedRoute>,
},
{
  path: "about",
  element: <About/>,
}
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, you can access user information here
        const {uid, email, displayName} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName}));

      } else {
      dispatch(removeUser());
      }
    });
  }, []);

  return (
      <RouterProvider router={router} />

  )
}

export default App
