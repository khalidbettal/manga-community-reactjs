import { createBrowserRouter } from "react-router-dom"
import Login from "./views/auth/Login"
import Register from "./views/auth/Register"
import GuestLayout from "./components/GuestLayout"



const router = createBrowserRouter([
    
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
}



])



export default router