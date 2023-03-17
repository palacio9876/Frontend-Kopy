import React from 'react'
import { NavLink } from 'react-router-dom';
import "../assets/css/Register.css";


export const Register = () => {
    return (
        <div className="bg-[url('https://res.cloudinary.com/dyhfwq81d/image/upload/v1679053889/pexels-hu%E1%BB%B3nh-%C4%91%E1%BA%A1t-2313037_qvujla.jpg')] h-screen W-full bg-cover bg-center p-24 flex items-center justify-center ">
            <form className="bg-[#473b3be3] bg-opacity-89 rounded-lg p-4 shadow-md max-w-xs w-full flex flex-col justify-center absolute top-90 left-90">
                <span className="text-2xl text-white text-center mb-4">Register</span>
                <label for="username" className="text-white mb-1">Username</label>
                <input type="text" id="username" name="username" required="" className="px-4 py-2 mb-4 w-full text-base text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white focus:border-gray-500 transition duration-200 ease-in-out border border-solid border-red-400 border-opacity-20 bg-white shadow-outline-blue
border border-solid border-yellow-700" />
                <label for="email" className="text-white mb-1">Email</label>
                <input type="email" id="email" name="email" required="" className="px-4 py-2 mb-4 w-full text-base text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white focus:border-gray-500 transition duration-200 ease-in-out border border-solid border-red-400 border-opacity-20 bg-white shadow-outline-blue
border border-solid border-yellow-700
" />
                <label for="password" className="text-white mb-1">Password</label>
                <input type="password" id="password" name="password" required="" className="px-4 py-2 mb-4 w-full text-base text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white focus:border-gray-500 transition duration-200 ease-in-out border border-solid border-red-400 border-opacity-20 bg-white shadow-outline-blue
border border-solid border-yellow-700
" />
                <button type="submit" className="bg-[#706153] text-white rounded-md px-4 py-2 text-lg cursor-pointer transition-all duration-200">Register</button>
            </form>
        </div>
    )
}