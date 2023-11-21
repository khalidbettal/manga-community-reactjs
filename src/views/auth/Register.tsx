\

import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { register } from "../../features/auth/authSlice";
import { useState } from "react";

function Register() {

    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordConfirmation] = useState('');
    const { loading, error } = useSelector((state : any) => state.auth);


    const handleRegister = async (e) => {
        e.preventDefault();
        if (password === password_confirmation) {
          dispatch(register({ name, email, password, password_confirmation }));
        } else {
          // Handle password mismatch error
          console.error('Passwords do not match');
        }
      };

  return (
    <div className='bg-gray-800 flex flex-col justify-center  max-sm:text-sm'>
        {error && <p className='text-red-500'>{error}</p>}
    <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-2 px-8' onSubmit={handleRegister}>
        <h2 className='text-2xl dark:text-white font-bold text-center'>SIGN UP</h2>
        <div className='flex flex-col text-gray-400 py-1'>
            <label>Username</label>
            <input className='rounded-lg bg-gray-700 mt-1 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='flex flex-col text-gray-400 py-1'>
            <label>Email</label>
            <input className='rounded-lg bg-gray-700 mt-1 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='flex flex-col text-gray-400 py-1'>
            <label>Password</label>
            <input className='p-2 rounded-lg bg-gray-700 mt-1 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className='flex flex-col text-gray-400 py-1'>
            <label>Password Confirmation</label>
            <input className='p-2 rounded-lg bg-gray-700 mt-1 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" value={password_confirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}  />
        </div>
        
       
        <button className='w-full my-5 py-2 bg-emerald-500 shadow-md shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>{loading ? 'loading...' : 'Sign Up'}</button>
        <p className='text-center text-gray-400 py-2 underline'>i already have an account ? <Link className='text-teal-500 text-lg' to="/login">Sign in</Link></p>
    </form>
</div>
  )
}

export default Register