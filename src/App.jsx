import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router/dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Browse from "./components/Browse";
import About from "./components/About";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";


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
    <><Provider store={appStore}>
      <RouterProvider router={router} />
    </Provider></>
  )
}

export default App
