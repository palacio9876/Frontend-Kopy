import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export const HeaderCliente = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <header className="bg-brown-kopy flex justify-between items-center px-[5%] py-2.5">
      <div className="logo">
        <img
          className="w-20 h-w-20 rounded-full"
          src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678978833/kopy/1_rah6cb.png"
        />
      </div>
      <nav>
        <ul className="flex items-center justify-center flex-wrap">
          <li className="mx-1.5 my-0 list-none uppercase hover:font-bold">
            <NavLink
              className="text-pink-kopy no-underline text-xl hover:text-orange-kopy"
              to="/"
            >
              Inicio
            </NavLink>
          </li>
          <li className="mx-1.5 my-0 list-none uppercase hover:font-bold">
            <NavLink
              className="text-pink-kopy no-underline text-xl hover:text-orange-kopy"
              to="/catalogo"
            >
              Catálogo
            </NavLink>
          </li>

          <li className="mx-1.5 my-0 list-none uppercase hover:font-bold">
            <NavLink
              className="text-pink-kopy no-underline text-xl hover:text-orange-kopy"
              to="/nosotros"
            >
              Nosotros
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex justify-center items-center flex-wrap gap-2.5 font-roboto text-center w-34">
        <>
          <NavLink
            to="/profile"
            className="relative uppercase no-underline p-2.5 rounded-2xl border-solid  text-orange-kopy"
          >
         
              <img
                src="https://cdn-icons-png.flaticon.com/512/64/64572.png"
                alt=""
                className="w-12 "
              />
          </NavLink>
          <NavLink
            className="relative uppercase no-underline p-2.5 rounded-2xl  border-solid border-pink-kopy border-2 font-medium text-pink-kopy"
            to="/"
            onClick={() => handleLogout()}
          >
            Cerrar Sesión
          </NavLink>
        </>
      </div>
    </header>
  );
};
