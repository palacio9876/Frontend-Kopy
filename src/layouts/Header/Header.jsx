import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

let tokeno = document.cookie.split("=")[1];
const datauser = async () =>
  await axios.post("http://localhost:3001/api/pay", {
    headers: { token: tokeno },
  });

export const Header = () => {
  
 
  const [user, setUser] = useState([{ name: "", email: "" }]);
  AOS.init();
  useEffect(() => {
    async function dataUserLoad() {
      const response = await dataUser();
      if (response.data.name) {
        setUser(response.data);
      } else {
        console.log("not response");
      }
    }
    dataUserLoad();
  }, [user]);
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
      {/* {data ? (
        <p>{data}</p>
      ) : (
        <p>Cargando...</p>
      )} */}
      {user[0].name != "" ? (
        user[0].name
      ) : (
        <div className="flex justify-center items-center flex-wrap gap-2.5 font-roboto text-center w-34">
          <NavLink
            to="/login"
            className="relative uppercase no-underline p-2.5 rounded-2xl border-solid border-orange-kopy border-2 font-medium text-orange-kopy"
          >
            Iniciar sesion
          </NavLink>
          <NavLink
            to="/register"
            className="relative uppercase no-underline p-2.5 rounded-2xl  border-solid border-pink-kopy border-2 font-medium text-pink-kopy"
          >
            Registro
          </NavLink>
        </div>
      )}
    </header>
  );
};
