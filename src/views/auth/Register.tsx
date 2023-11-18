// import React from 'react'

import { Link } from "react-router-dom"

function Register() {
  return (
    <div className='bg-gray-800 flex flex-col justify-center  max-sm:text-sm'>
    <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-2 px-8'>
        <h2 className='text-2xl dark:text-white font-bold text-center'>SIGN UP</h2>
        <div className='flex flex-col text-gray-400 py-1'>
            <label>Username</label>
            <input className='rounded-lg bg-gray-700 mt-1 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
        </div>
        <div className='flex flex-col text-gray-400 py-1'>
            <label>Email</label>
            <input className='rounded-lg bg-gray-700 mt-1 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="email" />
        </div>
        <div className='flex flex-col text-gray-400 py-1'>
            <label>Password</label>
            <input className='p-2 rounded-lg bg-gray-700 mt-1 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" />
        </div>
        <div className='flex flex-col text-gray-400 py-1'>
            <label>Password Confirmation</label>
            <input className='p-2 rounded-lg bg-gray-700 mt-1 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" />
        </div>
        
        {/* <div className='flex justify-between text-gray-400 py-1'>
            <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
            <p>Forgot Password</p>
        </div> */}
        <button className='w-full my-5 py-2 bg-emerald-500 shadow-md shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>SIGNUP</button>
        <p className='text-center text-gray-400 py-2 underline'>i already have an account ? <Link className='text-teal-500 text-lg' to="/login">Sign in</Link></p>
    </form>
</div>
  )
}

export default Register