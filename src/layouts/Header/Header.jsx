import React from 'react'
import logo from '../../assets/img/logo.png';
import {NavLink} from 'react-router-dom'; 



export const Header = () => {
  return (
    <header>
        <div className="logo">
            <img className="logo" src={ logo } />
        </div>
        <nav>
            <ul>
                <li><NavLink to="">Inicio |</NavLink></li>
                <li><NavLink to="/catalogo">Catalogo |</NavLink></li>
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
