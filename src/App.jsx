import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router/dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Browse from "./components/Browse";
import About from "./components/About";


function App() {
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
  element: <Browse/>,
},
{
  path: "about",
  element: <About/>,
}
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
