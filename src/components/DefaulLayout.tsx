
import { Outlet } from "react-router-dom"
import Navbar from "../components/NavBar"
import '../styles/Layouts.css'

function DefaulLayout() {
  return (
    <div className="DefaulLayout">
    <Navbar />
     <div>
      <Outlet />
    </div>
    </div>
   
  )
}

export default DefaulLayout