import React from 'react'
import { NavLink } from 'react-router-dom';
import "../assets/css/Login.css";

export const Login = () => {
  return (
    <div className="bg-[url('https://res.cloudinary.com/dyhfwq81d/image/upload/v1679053889/pexels-hu%E1%BB%B3nh-%C4%91%E1%BA%A1t-2313037_qvujla.jpg')] h-screen W-full bg-cover bg-center p-24 flex items-center justify-center ">
      <div className="absolute w-[400px] -translate-x-2/4 translate-y-[-55%] box-border shadow-[0_15px_25px_#00000099] mx-auto my-5 p-10 rounded-[10px] left-2/4 top-2/4 bg-[#473b3be3]">
        <p className='text-white text-center text-2xl font-[bold] tracking-[1px] mt-0 mb-[30px] mx-0 p-0;'>Login</p>
        <form className=''>
          <div className="relative">
            <input className='w-full text-base text-white mb-[30px] px-0 py-2.5 border-b-white border-[none] border-b border-solid bg-transparent outline-0 text-white text-xs left-0 -top-5' required="" name="" type="text" />
            <label className='absolute text-base text-white pointer-events-none transition-[0.5s] px-0 py-2.5 left-0 top-0 text-white text-xs left-0 -top-5 '>Correo</label>
          </div>
          <div className="relative">
            <input className='w-full text-base text-white mb-[30px] px-0 py-2.5 border-b-white border-[none] border-b border-solid bg-transparent outline-0 text-white text-xs left-0 -top-5;' required="" name="" type="password" />
            <label className='absolute text-base text-white pointer-events-none transition-[0.5s] px-0 py-2.5 left-0 top-0 text-white text-xs left-0 -top-5 '>Contraseña</label>
          </div>
          <a className='group relative inline-block font-[bold] text-white text-base no-underline uppercase overflow-hidden transition-[0.5s] tracking-[3px] mt-10 px-5 py-2.5 hover:bg-white ' href="#">
          <span className='absolute block animate-[btn-anim1_1.5s_linear_infinite]-left-full w-full h-0.5 top-0 background: linear-gradient(90deg, transparent, #fff)'></span>
                    <span className='absolute block animate-[btn-anim2_1.5s_linear_infinite]-top-full w-0.5 h-full right-0 background: linear-gradient(180deg, transparent, #fff)'></span>
                    <span className='absolute block animate-[btn-anim3_1.5s_linear_infinite]-right-full bottom-0 background: linear-gradient(270deg, transparent, #fff) animation-delay: .75s'></span>
                    <span className='absolute block animate-[btn-anim4_1.5s_linear_infinite]-bottom-full w-0.5 left-0 background: linear-gradient(360deg, transparent, #fff)'></span>
            <p className='group-hover:text-black'>Entrar</p>
          </a>
        </form>
        <p className='text-[#aaa] text-sm'>¿No tienes una cuenta? <a href="" className="text-white no-underline hover:text-[#aaa] hover:rounded-[5px] hover:bg-transparent">Registrate!</a></p>
      </div>
    </div>
  )
}