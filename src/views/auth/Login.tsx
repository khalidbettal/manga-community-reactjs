
import { Link } from "react-router-dom"
import { useState } from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { login } from "../../features/auth/authSlice";



function Login() {
    const dispatch  = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { loading, error } = useSelector((state : any) => state.auth);

    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch(login({ email, password }));
      };
    
  return (

    <>
          <div className='bg-gray-800 flex flex-col justify-center max-sm:text-sm'>
          {error && <p className='text-red-500'>{error}</p>}
            <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8' onSubmit={handleLogin}>
                <h2 className='text-3xl dark:text-white font-bold text-center'>SIGN IN</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Email</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Password</label>
                    <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='flex justify-between text-gray-400 py-2'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                    <p><Link className='text-teal-500 text-sm underline' to="#">Forgot Password?</Link></p>
                </div>
                <button className='w-full my-5 py-2 bg-teal-500 shadow-md shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg' type="submit">{loading ? 'Loading...' : 'SIGNIN'}</button>
                <button type="button" className="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-lg  focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
    <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
        <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z">
        </path>
    </svg>
    Sign in with Google
    </button>
                <p className='text-center text-gray-400 mt-3 underline'>Don't have an account? <Link className='text-teal-500 text-lg' to="/register">Sign up</Link></p>
            </form>
        </div>
    </>
  )
}

export default Login
