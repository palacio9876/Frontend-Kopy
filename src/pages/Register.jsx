import React from 'react'
import { NavLink } from 'react-router-dom';


export const Register = () => {
    return (
        <div className="bg-[url('https://res.cloudinary.com/dyhfwq81d/image/upload/v1679053889/pexels-hu%E1%BB%B3nh-%C4%91%E1%BA%A1t-2313037_qvujla.jpg')] h-screen W-full bg-cover bg-center p-24 flex items-center justify-center ">
            <form className="bg-[#473b3be3] bg-opacity-89 rounded-lg p-4 shadow-md max-w-xs w-full flex flex-col justify-center absolute top-90 left-90">
                <span className="text-2xl text-white text-center mb-4">Register</span>
                <label for="username" className="text-white mb-1">Nombre</label>
                <input type="text" id="username" name="username" required="" className="px-4 py-2 mb-4 w-full text-base text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white focus:border-gray-500 transition duration-200 ease-in-out border border-solid border-red-400 border-opacity-20 bg-white shadow-outline-blue border-solid border-yellow-700" />
                <label for="email" className="text-white mb-1">Correo</label>
                <input type="email" id="email" name="email" required="" className="px-4 py-2 mb-4 w-full text-base text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white focus:border-gray-500 transition duration-200 ease-in-out border border-solid border-red-400 border-opacity-20 bg-white shadow-outline-blue border border-solid border-yellow-700
" />
                <label for="password" className="text-white mb-1">Contraseña</label>
                <input type="password" id="password" name="password" required="" className="px-4 py-2 mb-4 w-full text-base text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white focus:border-gray-500 transition duration-200 ease-in-out border border-solid border-red-400 border-opacity-20 bg-white shadow-outline-blue
border border-solid border-yellow-700
" />
                <div className='box-submit'>
                <a className='group relative inline-block font-[bold] text-white text-base no-underline uppercase overflow-hidden transition-[0.5s] tracking-[3px] mt-10 px-5 py-2.5 hover:bg-white ' href="#">
                    <span className='absolute block animate-[btn-anim1_1.5s_linear_infinite]-left-full w-full h-0.5 top-0 background: linear-gradient(90deg, transparent, #fff)'></span>
                    <span className='absolute block animate-[btn-anim2_1.5s_linear_infinite]-top-full w-0.5 h-full right-0 background: linear-gradient(180deg, transparent, #fff)'></span>
                    <span className='absolute block animate-[btn-anim3_1.5s_linear_infinite]-right-full bottom-0 background: linear-gradient(270deg, transparent, #fff) animation-delay: .75s'></span>
                    <span className='absolute block animate-[btn-anim4_1.5s_linear_infinite]-bottom-full w-0.5 left-0 background: linear-gradient(360deg, transparent, #fff)'></span>
                   <p className='group-hover:text-black'>Registrate</p> 
                </a>
                </div>
            </form>
        </div>
    )
}