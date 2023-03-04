import React from 'react'
import logo from '../../assets/img/logo.png';


export const Header = () => {
  return (
    <header>
        <div className="logo">
            <img className="logo" src={ logo } />
        </div>
        <nav>
            <ul>
                <li><a href="/">Inicio |</a></li>
                <li><a href="/catalogo">Catalogo |</a></li>
                <li><a href="/categorias">Categorias |</a></li>
                <li><a href="">Nosotros</a></li>
            </ul>
        </nav>
        <div className="login-register">
            <a className="login" href="/select">Iniciar sesion</a>
            <a className="register" href="/registro">Registro</a>
        </div>
    </header>
  )
}
