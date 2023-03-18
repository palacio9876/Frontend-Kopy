import React from 'react'
import { NavLink } from 'react-router-dom';
import "../assets/css/Login.css";

export const Login = () => {
  return (
    <div className="bg-[url('https://res.cloudinary.com/dyhfwq81d/image/upload/v1679053889/pexels-hu%E1%BB%B3nh-%C4%91%E1%BA%A1t-2313037_qvujla.jpg')] h-screen W-full bg-cover bg-center p-24 flex items-center justify-center ">
      <div className="login-box">
        <p>Login</p>
        <form>
          <div className="user-box">
            <input required="" name="" type="text" />
            <label>Correo</label>
          </div>
          <div className="user-box">
            <input required="" name="" type="password" />
            <label>Contraseña</label>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Entrar
          </a>
        </form>
        <p>¿No tienes una cuenta? <a href="" className="a2">Registrate!</a></p>
      </div>
    </div>
  )
}