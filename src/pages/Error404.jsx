import React from "react";
import logo from "../assets/img/logo.png";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
export const Error404 = () => {
  return (
    <>
      <Helmet>
        <title>Error 404</title>
        <link rel="shortcut icon" href={logo} />
      </Helmet>
      <div className="flex justify-center items-center flex-wrap-reverse h-screen w-full bg-[color:var(--pink)] gap-[2%]">
        <div className="flex flex-col gap-5">
          <h1 className="text-[5rem] text-[color:var(--brown)] m-0">Error 404</h1>
          <h2 className="text-[2rem] text-[color:var(--brown)] font-[bold]">La pagina que buscas no existe</h2>
          <NavLink className='text-[color:var(--orange)] text-[2rem] font-[bold]' to="/">Volver al inicio</NavLink>
        </div>
        <img className="w-2/5" src="https://res.cloudinary.com/dkdvqvmdx/image/upload/v1678720736/Kopy/error404_ik3v2y.png" alt="image error404" />
      </div>
    </>
  );
};
