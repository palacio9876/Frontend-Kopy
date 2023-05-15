import React, { useState, useEffect } from "react";
import { Header } from "../layouts/Header/Header";
import { Footer } from "../layouts/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { Header2 } from "../layouts/Header/Header2";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export const ProfileUser = () => {
  const [data, setData] = useState({
    id: "3222",
    nombre: "Nicolas mazo",
    apellido: "mazooo",
    telefono: "3226663322",
    direccion: "carrera 24 ayhaj",
    email: "NicolasMao@",
  });
  const navigate = useNavigate();
  const handleInputChange = ({ target }) => {
    setData({
      ...data,
      [target.id]: target.value,
      [target.name]: target.value,
      [target.apellido]: target.value,
      [target.telefono]: target.value,
      [target.direccion]: target.value,
      [target.email]: target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
   const data2= Axios.post("http://localhost:3020/user/update", data2)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    toast.success("UPDATE profile is sucessfull!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "Dark",
    });
    setTimeout(() => {
      navigate("/");
    }
    , 2000);


  };

  console.log("profile");

  let rol = localStorage.getItem('rol')
  
  
  return (
    <>
    <ToastContainer/>
    {
        rol === null ? <Header /> : <Header2 />
    }

      <main className="py-6 px-16 bg-[color:var(--pink)]">
        <div className="flex flex-row items-stretch py-8 px-5 bg-[color:var(--brown)] rounded-2xl">
          <div className="flex flex-col w-1/5 rounded-2xl border-[--brown] bg-[color:var(--pink)]">
            <div className="flex p-2 gap-7 items-center justify-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/64/64572.png"
                alt=""
                className="w-12 "
              />
              <div className="flex flex-col">
                <p className="">Mi perfil</p>
                <p className="flex flex-wrap text-[color:var(--orange)] font-semibold text-xl">
                 {data.nombre}
                  {console.log(data)}
                  
                </p>
              </div>
            </div>
            <div className="flex border-solid border-y-2 px-2 border-[color:var(--brown)] py-3 gap-2 items-center">
              <i class="bx bx-cog bx-spin"></i>
              <p>Ajustes de cuenta</p>
            </div>
            <div className="flex border-solid border-b-2 border-[color:var(--brown)] px-2 py-3 gap-2 items-center">
              <i class="bx bx-help-circle bx-tada"></i>
              <p>Centro de ayuda</p>
            </div>
            <div className="flex border-solid border-b-2 px-2 border-[color:var(--brown)] py-3 gap-2 items-center">
              <i class="bx bx-cog bx-spin"></i>
              <p>Eliminar cuenta</p>
            </div>
            <div className="flex border-solid px-2 py-3 gap-2 border-b-2 border-[color:var(--brown)] items-center">
              <i class="bx bx-window-close"></i>
              <p>Cerrar sesion</p>
            </div>
          </div>
          <div className="flex flex-col flex-wrap rounded-2xl border-solid border-2 px-2 py-3 gap w-4/5 ml-5 bg-[color:var(--pink)] gap-8">
            <p className="text-[color:var(--orange)] text-center text-2xl font-semibold">
              Informacion de tu cuenta
            </p>
            <div className="flex flex-wrap gap-4">


              <form onSubmit={handleSubmit}>

              <fieldset className="w-[49%]">
                <label for="" className="text-gray-500">
                  Identificacion
                </label>
                <input
                  onChange={handleInputChange}
                  name="id"
                  type="number"
                  className="w-full py-4 px-3 border-b-2 border-[color:var(--brown)] bg-transparent "
                  value={data.id}    
                />
              </fieldset>



              <fieldset className="w-[49%]">
                <label for="" className="text-gray-500">
                  Nombre
                </label>
                <input
                  onChange={handleInputChange}
                  name="nombre"
                  type="text"
                  className="w-full py-4 px-3 border-b-2 border-[color:var(--brown)] bg-transparent "
                  value={data.nombre}    
                />
              </fieldset>
              <fieldset className="w-[49%]">
  
              
              </fieldset>
              <fieldset className="w-[49%]">
                <label for="" className="text-gray-500">
                  Correo Electronico
                </label>

                <input
                onChange={handleInputChange}
                name="email"
                  type="text"
                  className="w-full py-4 px-3 border-b-2 border-[color:var(--brown)] bg-transparent "
                  value={data.email}             />
              </fieldset>
              <fieldset className="w-[49%]">
                <label for="" className="text-gray-500">
                  Celular
                </label>

                <input
                onChange={handleInputChange}
                  name="telefono"
                  type="number"
                  className="w-full py-4 px-3 border-b-2 border-[color:var(--brown)] bg-transparent "
                  value={data.telefono}    
                />
              </fieldset>
              <fieldset className="w-[49%]">
                <label for="" className="text-gray-500">
                  Direccion
                </label>
                <input
                onChange={handleInputChange}
                  name="direccion"
                  type="text"
                  className="w-full py-4 px-3 border-b-2 border-[color:var(--brown)] bg-transparent "
                  value={data.direccion}    
                />
              </fieldset>
              <button type="submit" className="btn-main">
              <span>
                <a>Actualizar datos</a>
              </span>
              <svg viewBox="0 0 13 10" height="10px" width="15px">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
            
              </form>
            </div>
            
           
          </div>
          
        </div>
        
      </main>
      <Footer />
    </>
  );
};
