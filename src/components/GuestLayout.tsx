import { Outlet } from "react-router-dom"
import Navbar from "./NavBar"
import "../styles/Layouts.css"


function GuestLayout() {
  return (
   <div className="GuestLayout w-full h-screen ">
        <Navbar />
  
        <Outlet />
    </div>
  
  )
}

export default GuestLayout