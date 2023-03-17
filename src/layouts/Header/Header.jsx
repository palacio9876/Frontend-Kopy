import React from 'react'
import {NavLink} from 'react-router-dom'; 



export const Header = () => {
  return (
    <header className='bg-[color:var(--brown)] flex justify-between items-center px-[5%] py-2.5'>
        <div className="logo">
            <img className="logo" src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678978833/kopy/1_rah6cb.png" />
        </div>
        <nav>
            <ul>
                <li><NavLink to="/">Inicio |</NavLink></li>
                <li><NavLink to="/catalogo">Catálogo |</NavLink></li>
                <li><NavLink to="/nosotros">Nosotros</NavLink></li>
            </ul>
        </nav>
        <div className="login-register">
            <a className="login" href="/select">Iniciar sesion</a>
            <a className="register" href="/registro">Registro</a>
        </div>
    </header>
  )
}
