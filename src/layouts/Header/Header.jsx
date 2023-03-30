import React from 'react'
import {NavLink} from 'react-router-dom'; 



export const Header = () => {
  return (
    <header className='bg-[color:var(--brown)] flex justify-between items-center px-[5%] py-2.5'>
        <div className="logo">
            <img className="w-20 h-w-20 rounded-full" src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678978833/kopy/1_rah6cb.png" />
        </div>
        <nav>
            <ul className='flex items-center justify-center flex-wrap'>
                <li className='mx-1.5 my-0 list-none uppercase hover:font-bold'><NavLink className='text-[color:var(--pink)] no-underline text-xl' to="/">Inicio</NavLink></li>
                <li className='mx-1.5 my-0 list-none uppercase hover:font-bold'><NavLink className='text-[color:var(--pink)] no-underline text-xl' to="/catalogo">Catálogo</NavLink></li>
                <li className='mx-1.5 my-0 list-none uppercase hover:font-bold'><NavLink className='text-[color:var(--pink)] no-underline text-xl' to="/nosotros">Nosotros</NavLink></li>
            </ul>
        </nav>
        <div className="flex justify-center items-center flex-wrap gap-2.5 font-roboto text-center w-34">
            <NavLink to='/login' className="relative uppercase no-underline p-2.5 rounded-2xl border-solid border-orange-500 border-2 font-medium text-orange-500">Iniciar sesion</NavLink>
            <NavLink to='/register' className="relative uppercase no-underline p-2.5 rounded-2xl  border-solid border-red-200 border-2 font-medium text-red-100">Registro</NavLink>
        </div>
    </header>
  )
}
