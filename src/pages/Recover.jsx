import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink, useNavigate } from "react-router-dom";



export const Recover = () => {

  const [data, setData] = useState({
    token: "",
    password: "",

  });
  const navigate = useNavigate();
  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
      [event.target.password]: event.target.value,
    });
  };

    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log(data);
      let response = await axios.post(
        "http://localhost:3020/user/verificar",
        // "https://kopy-backend.up.railway.app/user/verificar",
        // "https://back-end-kopy.onrender.com/user/verificar",
         data)
        .then((res) => {
          return res;
        }).catch((err) => {
          return err;

        })
      
      console.log(response);
      
        if (response.status==200) {
          toast.success("Recover password is sucessfull!", {
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
            navigate("/login");
          }, 2000);
        } else {
          
          toast.error("recover is not sucessfull!", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "Dark",
          });
         
          
        }
    
      
    };



  return (
    <>
  <ToastContainer/>
      <div className="bg-[url('https://res.cloudinary.com/dyhfwq81d/image/upload/v1679053889/pexels-hu%E1%BB%B3nh-%C4%91%E1%BA%A1t-2313037_qvujla.jpg')] h-screen W-full bg-cover bg-center p-24 flex items-center justify-center ">
        <div className="absolute w-[400px] -translate-x-2/4 translate-y-[-55%] box-border shadow-[0_15px_25px_#00000099] mx-auto my-5 p-10 rounded-[10px] left-2/4 top-2/4 bg-[#473b3be0]">
          <form onSubmit={handleSubmit}>

            <div className="relative">
              <input
                className="w-full text-base text-white mb-[30px] px-0 py-2.5 border-b-white border-[none] border-b border-solid bg-transparent outline-0 left-0 -top-5 placeholder:text-white"
                required
                name="token"
                id="token"
                type="text"
                onChange={handleInputChange}
                autoComplete='off'
                placeholder="Ingrese su codigo de verificacion"
              />
            </div>
            <div className="relative">
              <input
                className="w-full text-base text-white mb-[30px] px-0 py-2.5 border-b-white border-[none] border-b border-solid bg-transparent outline-0 left-0 -top-5 placeholder:text-white"
                required
                name="password"
                id="password"
                type="password"
                onChange={handleInputChange}
                autoComplete='off'
                placeholder="Ingrese su nueva contraseña"
              />
            </div>
            <button type="submit">
              <a className="group relative inline-block font-[bold] text-white text-base no-underline uppercase overflow-hidden transition-[0.5s] tracking-[3px] mt-10 px-5 py-2.5 hover:bg-white ">
                <span className="absolute block animate-[btn-anim1_1.5s_linear_infinite]-left-full w-full h-0.5 top-0 background: linear-gradient(90deg, transparent, #fff)"></span>
                <span className="absolute block animate-[btn-anim2_1.5s_linear_infinite]-top-full w-0.5 h-full right-0 background: linear-gradient(180deg, transparent, #fff)"></span>
                <span className="absolute block animate-[btn-anim3_1.5s_linear_infinite]-right-full bottom-0 background: linear-gradient(270deg, transparent, #fff) animation-delay: .75s"></span>
                <span className="absolute block animate-[btn-anim4_1.5s_linear_infinite]-bottom-full w-0.5 left-0 background: linear-gradient(360deg, transparent, #fff)"></span>
                <p className="group-hover:text-black">Enviar</p>
              </a>
            </button>
            <p className="text-[#aaa] text-sm">
              ¿Ya tienes una cuenta?{" "}
              <NavLink
                to="/login"
                className="text-white no-underline hover:text-[#aaa] hover:rounded-[5px] hover:bg-transparent"
              >Inicia sesión
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </>

  );
};