import React from 'react'
import {NavLink} from 'react-router-dom'; 



export const Header = () => {
  return (
    <header className='bg-[color:var(--brown)] flex justify-between items-center px-[5%] py-2.5'>
        <div className="logo">
            <img className="w-[70px] h-[70px] rounded-[50%]" src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678978833/kopy/1_rah6cb.png" />
        </div>
        <nav>
            <ul>
                <li><NavLink to="/">Inicio |</NavLink></li>
                <li><NavLink to="/catalogo">Catálogo |</NavLink></li>
                <li><NavLink to="/nosotros">Nosotros</NavLink></li>
            </ul>
        </nav>
        <div className="flex justify-center items-center flex-wrap gap-2.5 font-sans text-center w-34">
            <a className="relative uppercase no-underline p-2.5 rounded-2xl transition-all border-solid border-orange-500 border-2 font-medium  shadow-orange-500 shadow-md translate-x-px "><NavLink className="text-orange-500" to="/login">Iniciar sesion</NavLink></a>
            <a className="relative uppercase no-underline p-2.5 font-sans rounded-2xl transition-all border-solid border-red-200 border-2 font-medium  shadow-white shadow-md translate-x-px "><NavLink className="text-red-100" to="/registro">Registro</NavLink></a>
        </div>
    </header>
  )
}
