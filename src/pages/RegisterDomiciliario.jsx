import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const RegisterDomiciliario = () => {
  const [form, setForm] = useState({
    id: "",
    nombre: "",
    telefono: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      [target.id]: target.value,
      [target.telefono]: target.value,

      [target.email]: target.value,
      [target.password]: target.value,

    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3020/domiciliary/registro",
        form
      );

      if (response.status === 200) {
        toast.success("¡Registro exitoso!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        setTimeout(() => {
          // Redireccionar al formulario de inicio de sesión después de un registro exitoso
          // Coloca la ruta correcta según tu configuración
          navigate("/");
        }, 2000);
      } else {
        toast.error("¡Error en el registro!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("¡no se pudo hacer el registro!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };


  return (
    <>
    <ToastContainer/>
      <div className="bg-[url('https://res.cloudinary.com/dyhfwq81d/image/upload/v1679053889/pexels-hu%E1%BB%B3nh-%C4%91%E1%BA%A1t-2313037_qvujla.jpg')] h-screen W-full bg-cover bg-center p-24 flex items-center justify-center">
        <div className="absolute flex flex-col -translate-x-2/4 translate-y-[-55%] box-border shadow-[0_15px_25px_#00000099] mx-auto my-5 p-10 rounded-[10px] left-2/4 top-2/4 bg-brown-kopy">
          <p className="text-white text-center text-2xl font-[bold] tracking-[1px] mt-0 mb-[30px] mx-0 p-0;">
            Registro domiciliario
          </p>
          <form  onSubmit={handleSubmit} className="flex gap-4 flex-col">
            <div className="flex gap-9">
              <div>
                <div className="relative">
                  <input
                    className="w-full text-base text-white mb-[30px] px-0 py-2.5 border-b-white border-[none] border-b border-solid bg-transparent outline-0 left-0 -top-5 placeholder:text-white"
                    required
                    autoComplete="off"
                    id="id"
                    name="id"
                    type="text"
                    placeholder="Documento de identidad"
                    //   onChange={handleInputChange}
                  />
                </div>
                <div className="relative">
                  <input
                    className="w-full text-base text-white mb-[30px] px-0 py-2.5 border-b-white border-[none] border-b border-solid bg-transparent outline-0 left-0 -top-5 placeholder:text-white"
                    required
                    autoComplete="off"
                    id="nombre"
                      onChange={handleInputChange}
                    name="nombre"
                    type="text"
                    placeholder="Nombre"
                  />
                </div>

                <div className="relative">
                  <input
                    className="w-full text-base text-white mb-[30px] px-0 py-2.5 border-b-white border-[none] border-b border-solid bg-transparent outline-0 left-0 -top-5 placeholder:text-white"
                    required
                    autoComplete="off"
                    id="telefono"
                    name="telefono"
                    type="text"
                    placeholder="Telefono"
                      onChange={handleInputChange}
                    minLength={10}
                    maxLength={10}
                  />
                </div>
              </div>
              <div>
                {/* <div className="relative">
                  <input
                    className="w-full text-base text-white mb-[30px] px-0 py-2.5 border-b-white border-[none] border-b border-solid bg-transparent outline-0 left-0 -top-5 placeholder:text-white"
                    required
                    autoComplete="off"
                    id="direccion"
                    name="direccion"
                    type="text"
                    placeholder="Direccion"
                      onChange={handleInputChange}
                  />
                </div> */}
                <div className="relative">
                  <input
                    className="w-full text-base text-white mb-[30px] px-0 py-2.5 border-b-white border-[none] border-b border-solid bg-transparent outline-0 left-0 -top-5 placeholder:text-white"
                    required
                    autoComplete="off"
                    name="email"
                    id="email"
                    type="email"
                      onChange={handleInputChange}
                    placeholder="Correo electronico"
                  />
                </div>
                <div className="relative">
                  <input
                    className="w-full text-base text-white mb-[30px] px-0 py-2.5 border-b-white border-[none] border-b border-solid bg-transparent outline-0 left-0 -top-5 placeholder:text-white"
                    type="password"
                    id="password"
                    name="password"
                      onChange={handleInputChange}
                    required
                    autoComplete="off"
                    placeholder="Contraseña"
                  />
                </div>
              </div>
            </div>
            <button type="submit">
              <a className="group relative inline-block font-[bold] text-white text-base no-underline uppercase overflow-hidden transition-[0.5s] tracking-[3px] mt-10 px-5 py-2.5 hover:bg-white ">
                <span className="absolute block animate-[btn-anim1_1.5s_linear_infinite]-left-full w-full h-0.5 top-0 background: linear-gradient(90deg, transparent, #fff)"></span>
                <span className="absolute block animate-[btn-anim2_1.5s_linear_infinite]-top-full w-0.5 h-full right-0 background: linear-gradient(180deg, transparent, #fff)"></span>
                <span className="absolute block animate-[btn-anim3_1.5s_linear_infinite]-right-full bottom-0 background: linear-gradient(270deg, transparent, #fff) animation-delay: .75s"></span>
                <span className="absolute block animate-[btn-anim4_1.5s_linear_infinite]-bottom-full w-0.5 left-0 background: linear-gradient(360deg, transparent, #fff)"></span>
                <p className="group-hover:text-black">Registrarme</p>
              </a>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
