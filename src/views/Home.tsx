
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice"; 
function Home() {

  const dispatch = useDispatch();
  const user = localStorage.getItem('user');
  const parsedUser = user ? JSON.parse(user) : null;
  return (
    <div className="flex flex-col justify-center items-center h-screen">
    <div>Welcome <span className="font-bold text-blue-500 "> {parsedUser?.email}</span></div>
    <button onClick={() => dispatch(logout())} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Logout</button>
    </div>


  )
}

export default Home