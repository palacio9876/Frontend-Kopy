import React from 'react'
import {NavLink} from 'react-router-dom'; 



export const Header = () => {
  return (
<<<<<<< HEAD
    <header className='bg-[color:var(--brown)] flex justify-between items-center px-[5%] py-2.5'>
        <div className="logo">
            <img className="logo" src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678978833/kopy/1_rah6cb.png" />
        </div>
        <nav>
            <ul>
                <li><NavLink to="/">Inicio |</NavLink></li>
                <li><NavLink to="/catalogo">Catálogo |</NavLink></li>
                <li><NavLink to="/nosotros">Nosotros</NavLink></li>
=======
    <header className='bg-stone-600 flex justify-between items-center px-2.5 p-4'>
        <div className="rounded-full mr-5">
            <img className="w-16 h-15 rounded-full mr-5" src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678978833/kopy/1_rah6cb.png" />
        </div>
        <nav className='ml-20 '>
            <ul className='flex items-center justify-center flex-wrap '>
                <li className='list-none m-2 '><NavLink className='text-lime-100 font-bold text-xl font-sans' to="/">Inicio |</NavLink></li>
                <li className='list-none m-2'><NavLink className='text-lime-100 font-bold text-xl font-sans' to="/catalogo">Catalogo |</NavLink></li>
                <li className='list-none m-2'><NavLink className='text-lime-100 font-bold text-xl font-sans' to="/nosotros">Nosotros</NavLink></li>
>>>>>>> bec983bda8f1d5ffbcc17135281d411c1a095edb
            </ul>
        </nav>
        <div className="flex justify-center items-center flex-wrap gap-2.5 font-sans text-center w-34">
            <a className="relative uppercase no-underline p-2.5 rounded-2xl transition-all border-solid border-orange-500 border-2 font-medium text-orange-500 shadow-orange-500 shadow-md translate-x-px " href="/select">Iniciar sesion</a>
            <a className="relative uppercase no-underline p-2.5 font-sans rounded-2xl transition-all border-solid border-red-200 border-2 font-medium text-red-100 shadow-white shadow-md translate-x-px " href="/registro">Registro</a>
        </div>
    </header>
  )
}
