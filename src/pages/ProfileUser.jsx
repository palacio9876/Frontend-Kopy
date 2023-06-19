import React, { useState, useEffect } from "react";
import { Header } from "../layouts/Header/Header";
import { Footer } from "../layouts/Footer/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { HeaderCliente } from "../layouts/Header/HeaderCliente";

export const ProfileUser = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [dataCliente, setdataCliente] = useState({
    id: "",
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
  });

  const [file, setFile] = useState([]);

  console.log(file);

  const handdleChange = (e) => {
    setdataCliente({
      ...dataCliente,
      [e.target.name]: e.target.value,
    });
  };

  let token = localStorage.getItem("token");

  const handleSubmit = () => {
    let alamcenar = {
      nombre: dataCliente.nombre,
      email: dataCliente.email,
      telefono: dataCliente.telefono,
      direccion: dataCliente.direccion,
      image: file,
    };
    axios
      .put(`http://localhost:3020/user/updateDatos`, alamcenar, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: token,
        },
      })
      .then((res) => {
        window.location.href = "/porfile";
        toast.success("Datos actualizados");
      })
      .catch((error) => {
        console.log(error);
      });
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

  const rol = localStorage.getItem("rol");

  //eliminar cuenta
  const [showModal, setShowModal] = useState(false);
  const handleDeleteAccount = () => {
    setShowModal(true);
  };
  const handleDeleteConfirmation = () => {
    axios
      .delete(
        `http://localhost:3020/user/eliminar/${data.id_cliente}`,
        // `https://kopy-backend.up.railway.app/user/eliminar/${data.id_cliente}`
        // `https://back-end-kopy.onrender.com/user/eliminar/${data.id_cliente}`
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        toast.success("Cuenta eliminada correctamente");
        localStorage.removeItem("token");
        localStorage.removeItem("rol");

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      })

      .catch((error) => {
        toast.error("Error al eliminar la cuenta");
      });
  };

  return (
    <>
      <ToastContainer />
      {rol === null ? <Header /> : <HeaderCliente />}

      <main className="py-6 px-16 bg-[color:var(--pink)]">
        <div className="flex items-stretch py-8 px-5 bg-[color:var(--brown)] rounded-2xl">
          <div className="flex flex-col w-1/5 rounded-2xl border-[--brown] bg-[color:var(--pink)]">
            <div className="flex p-2 gap-4 items-center justify-center flex-col my-2">
              <img src={data.image} alt="" className="w-20" id="image" />
              <input
                type="file"
                id="input"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
                className="block w-full text-sm text-slate-500 ml-20
             
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-orange-kopy
      hover:file:bg-violet-100
    "
              />

              <div className="flex flex-col">
                <p className="">Mi perfil</p>
                <p className="flex flex-wrap text-[color:var(--orange)] font-semibold text-xl">
                  {data.nombre_cliente}
                </p>
              </div>
            </div>
            <div className="flex border-solid border-y-2 px-2 border-[color:var(--brown)] py-3 gap-2 items-center">
              <i className="bx bx-cog bx-spin"></i>
              <p>Ajustes de cuenta</p>
            </div>
            <div className="flex border-solid border-b-2 px-2 py-3 gap-2 border-[color:var(--brown)] items-center">
              <i className="bx bx-cog bx-spin"></i>
              <button onClick={handleDeleteAccount}>Eliminar cuenta</button>
            </div>

            {showModal && (
              <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-8">
                  <p>¿Estás seguro de que quieres eliminar tu cuenta?</p>
                  <div className="flex justify-center mt-4">
                    <button
                      className="btn-danger mr-4"
                      onClick={handleDeleteConfirmation}
                    >
                      Sí, eliminar cuenta
                    </button>
                    <button
                      className="btn-secondary"
                      onClick={() => setShowModal(false)}
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col flex-wrap rounded-2xl border-solid border-2 px-2 py-3 gap w-4/5 ml-5 bg-[color:var(--pink)] gap-8">
            <p className="text-orange-kopy text-center text-2xl font-semibold">
              Información de tu cuenta
            </p>
            <div className="flex flex-wrap gap-4">
              <form className="flex flex-col w-full px-6">
                <div className="flex w-full gap-12">
                  <div className="w-1/2">
                    <fieldset className="w-full">
                      <label htmlFor="id" className="text-gray-500">
                        Identificación
                      </label>
                      <input
                        onChange={(e) => {
                          handdleChange(e);
                        }}
                        name="id"
                        type="number"
                        className="w-full py-4 px-3 border-b-2 border-[color:var(--brown)] bg-transparent"
                        value={data.id_cliente}
                        disabled
                      />
                    </fieldset>
                    <fieldset className="w-full">
                      <label htmlFor="nombre" className="text-gray-500">
                        Nombre
                      </label>
                      <input
                        onChange={(e) => {
                          handdleChange(e);
                        }}
                        name="nombre"
                        type="text"
                        className="w-full py-4 px-3 border-b-2 border-[color:var(--brown)] bg-transparent"
                        defaultValue={data.nombre_cliente}
                      />
                    </fieldset>
                    <fieldset className="w-full">
                      <label htmlFor="email" className="text-gray-500">
                        Correo Electrónico
                      </label>
                      <input
                        onChange={(e) => {
                          handdleChange(e);
                        }}
                        name="email"
                        type="text"
                        className="w-full py-4 px-3 border-b-2 border-[color:var(--brown)] bg-transparent"
                        defaultValue={data.email_cliente}
                      />
                    </fieldset>
                  </div>
                  <div className="w-1/2">
                    <fieldset className="w-full">
                      <label htmlFor="telefono" className="text-gray-500">
                        Celular
                      </label>
                      <input
                        onChange={(e) => {
                          handdleChange(e);
                        }}
                        name="telefono"
                        type="number"
                        className="w-full py-4 px-3 border-b-2 border-[color:var(--brown)] bg-transparent"
                        defaultValue={data.telefono_cliente}
                      />
                    </fieldset>
                    <fieldset className="w-full">
                      <label htmlFor="direccion" className="text-gray-500">
                        Dirección
                      </label>
                      <input
                        onChange={(e) => {
                          handdleChange(e);
                        }}
                        name="direccion"
                        type="text"
                        className="w-full py-4 px-3 border-b-2 border-[color:var(--brown)] bg-transparent"
                        defaultValue={data.direccion_cliente}
                      />
                    </fieldset>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn-main"
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                >
                  <span>Actualizar datos ➔</span>
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
