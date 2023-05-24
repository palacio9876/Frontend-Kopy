import React, { useState, useEffect } from "react";
import { Header } from "../layouts/Header/Header";
import { Footer } from "../layouts/Footer/Footer";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { HeaderCliente } from "../layouts/Header/HeaderCliente";

export const ProfileUser = () => {
  const [data, setData] = useState({
    nombre: "",
    id: "",
    telefono: "",
    direccion: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await Axios.get("http://localhost:3020/user/login");
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,

    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await Axios.put("http://localhost:3020/user/update", data);
      toast.success("UPDATE profile is successful!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  const rol = localStorage.getItem("rol");

  return (
    <>
      <ToastContainer />
      {rol === null ? <Header /> : <HeaderCliente />}

      <main className="py-6 px-16 bg-[color:var(--pink)]">
        <div className="flex items-stretch py-8 px-5 bg-[color:var(--brown)] rounded-2xl">
          <div className="flex flex-col w-1/5 rounded-2xl border-[--brown] bg-[color:var(--pink)]">
            <div className="flex p-2 gap-7 items-center justify-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/64/64572.png"
                alt=""
                className="w-12"
              />
              <div className="flex flex-col">
                <p className="">Mi perfil</p>
                <p className="flex flex-wrap text-[color:var(--orange)] font-semibold text-xl">
                  {data.nombre}
                </p>
              </div>
            </div>
            <div className="flex border-solid border-y-2 px-2 border-[color:var(--brown)] py-3 gap-2 items-center">
              <i className="bx bx-cog bx-spin"></i>
              <p>Ajustes de cuenta</p>
            </div>
            <div className="flex border-solid border-b-2 border-[color:var(--brown)] px-2 py-3 gap-2 items-center">
              <i className="bx bx-help-circle bx-tada"></i>
              <p>Centro de ayuda</p>
            </div>
            <div className="flex border-solid border-b-2 px-2 py-3 gap-2 border-[color:var(--brown)] items-center">
              <i className="bx bx-cog bx-spin"></i>
              <p>Eliminar cuenta</p>
            </div>
            <div className="flex border-solid px-2 py-3 gap-2 border-b-2 border-[color:var(--brown)] items-center">
              <i className="bx bx-window-close"></i>
              <p>Cerrar sesión</p>
            </div>
          </div>
          <div className="flex flex-col flex-wrap rounded-2xl border-solid border-2 px-2 py-3 gap w-4/5 ml-5 bg-[color:var(--pink)] gap-8">
            <p className="text-orange-kopy text-center text-2xl font-semibold">
              Información de tu cuenta
            </p>
            <div className="flex flex-wrap gap-4">
              <form onSubmit={handleSubmit} className="flex flex-col">
                <div>
                  <fieldset className="w-[49%]">
                    <label htmlFor="id" className="text-gray-500">
                      Identificación
                    </label>
                    <input
                      onChange={handleInputChange}
                      name="id"
                      type="number"
                      className="w-full py-4 px-3 border-b-2 border-[color:var(--brown)] bg-transparent"
                      value={data.id}
                    />
                  </fieldset>
                  <fieldset className="w-[49%]">
                    <label htmlFor="nombre" className="text-gray-500">
                      Nombre
                    </label>
                    <input
                      onChange={handleInputChange}
                      name="nombre"
                      type="text"
                      className="w-full py-4 px-3 border-b-2 border-[color:var(--brown)] bg-transparent"
                      value={data.nombre}
                    />
                  </fieldset>
                  <fieldset className="w-[49%]">
                    <label htmlFor="email" className="text-gray-500">
                      Correo Electrónico
                    </label>
                    <input
                      onChange={handleInputChange}
                      name="email"
                      type="text"
                      className="w-full py-4 px-3 border-b-2 border-[color:var(--brown)] bg-transparent"
                      value={data.email}
                    />
                  </fieldset>
                  <fieldset className="w-[49%]">
                    <label htmlFor="telefono" className="text-gray-500">
                      Celular
                    </label>
                    <input
                      onChange={handleInputChange}
                      name="telefono"
                      type="number"
                      className="w-full py-4 px-3 border-b-2 border-[color:var(--brown)] bg-transparent"
                      value={data.telefono}
                    />
                  </fieldset>
                  <fieldset className="w-[49%]">
                    <label htmlFor="direccion" className="text-gray-500">
                      Dirección
                    </label>
                    <input
                      onChange={handleInputChange}
                      name="direccion"
                      type="text"
                      className="w-full py-4 px-3 border-b-2 border-[color:var(--brown)] bg-transparent"
                      value={data.direccion}
                    />
                  </fieldset>
                </div>
                <button type="submit" className="btn-main">
                  <span>
                    Actualizar datos ➔
                  </span>
                  {/* <svg viewBox="0 0 13 10" height="10px" width="15px">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg> */}
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
