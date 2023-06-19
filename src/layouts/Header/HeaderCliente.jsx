import React, {useEffect, useState} from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export const HeaderCliente = () => {
  const [data, setData] = useState([]);
  localStorage.getItem('rolAdmin')
  let token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.warn("Sesion cerrada exitosamente", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    localStorage.clear();
      window.location.href = "/";
    
  };

  useEffect(() => {
    (() => {
      axios
        .get(
          `http://localhost:3020/user/profile`,
          //  `https://kopy-backend.up.railway.app/user/profile`
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then((res) => {
          setData(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    })();
  }, []);

  return (
  <>
  <ToastContainer/>
  <header className="bg-brown-kopy flex justify-between items-center px-[5%]">
  <div className="h-5">
          <img className="object-fill h-32 -top-14 relative z-10"
            src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1685967057/Kopy_tfpadn.jpg"
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
              to="/catalogo/Todo"
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
                src={data.image}
                alt=""
                className="w-12 "
              />
          </NavLink>
          <NavLink
            className="relative uppercase no-underline p-2.5 rounded-2xl  border-solid border-pink-kopy border-2 font-medium text-pink-kopy"
            onClick={() => handleLogout()}
          >
            Cerrar Sesión
          </NavLink>
        </>
      </div>
    </header>
  </>
    
  );
};

