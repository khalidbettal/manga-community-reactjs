import { createBrowserRouter } from "react-router-dom"
import Login from "./views/auth/Login"
import Register from "./views/auth/Register"
import GuestLayout from "./components/GuestLayout"
import DefaulLayout from "./components/DefaulLayout"
import Home from "./views/Home"



const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaulLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    },
   {
      path: "/",
      element: <GuestLayout />,
      children: [
        {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/register",
            element: <Register />,
          }
    ]
    },




])



export default router