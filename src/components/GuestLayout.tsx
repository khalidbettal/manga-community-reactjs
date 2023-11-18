import { Outlet } from "react-router-dom"
import loginImg from '../assets/grim-reaper.jpg'


function GuestLayout() {
  return (
   <>
   <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={loginImg} alt="" />
        </div>

        <Outlet />
    </div>
   </>
  )
}

export default GuestLayout