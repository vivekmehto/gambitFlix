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
import PublicRoute from "./components/PublicRoute";
import MovieDetails from "./components/MovieDetails";


function App() {
  const dispatch = useDispatch();

  const router = createBrowserRouter([
{
  path: "/",
  element: <Body/>,
},
{
  path: "Login",
  element: <PublicRoute><Login/></PublicRoute>,
},
{
  path: "browse",
  element: <ProtectedRoute><Browse/></ProtectedRoute>,
},
{
  path: "about",
  element: <About/>,
},

  {
    path: "/movie/:id",
    element: <ProtectedRoute><MovieDetails/></ProtectedRoute>,
  }
  ]);

 useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(addUser({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName
      }));
    } else {
      dispatch(removeUser());
    }
  });

  return () => unsubscribe();
}, [dispatch]);
  return (
      <RouterProvider router={router} />
  )
}

export default App
