import React from 'react'
import {NavLink} from 'react-router-dom'; 
import "../assets/css/Login.css";

export const Login = () => {
    return(
       <div className="bg-[url('https://res.cloudinary.com/dyhfwq81d/image/upload/v1679053889/pexels-hu%E1%BB%B3nh-%C4%91%E1%BA%A1t-2313037_qvujla.jpg')] h-screen W-full bg-cover bg-center p-24 flex items-center justify-center ">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-20 mx-auto transform -translate-x-1/2 -translate-y-5/12 w-400 px-40 bg-[#473b3be3] bg-opacity-50 box-border shadow-md rounded-2xl">
        <p className='mb-30 p-0 text-white text-center text-lg font-bold tracking-wider'>Login</p>
        <form>
          <div className="relative">
            <input className="w-full py-10 text-base text-white mb-30 border-0 border-b-2 border-white outline-none bg-transparent" required="" name="" type="text"/>
            <label>Email</label>
          </div>
          <div class="user-box">
            <input required="" name="" type="password"/>
            <label>Password</label>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
        <p>Don't have an account? <a href="" class="a2">Sign up!</a></p>
      </div>
      </div>
    )
}