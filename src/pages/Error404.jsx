import React from "react";
import logo from "../assets/img/logo.png";
import "../assets/css/Error404.css";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
export const Error404 = () => {
  return (
    <>
      <Helmet>
        <title>Error 404</title>
        <link rel="shortcut icon" href={logo} />
      </Helmet>
      <div className="error404-container">
        <div className="text-error404">
          <h1>Error 404</h1>
          <h2>La pagina que buscas no existe</h2>
          <NavLink to="/">Volver al inicio</NavLink>
        </div>
        <img className="img-error404" src="https://res.cloudinary.com/dkdvqvmdx/image/upload/v1678720736/Kopy/error404_ik3v2y.png" alt="image error404" />
      </div>
    </>
  );
};
