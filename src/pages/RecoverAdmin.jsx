import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { NavLink } from "react-router-dom";


export const RecoverAdmin = () => {

  const [data, setData] = useState({
    token: "",
    password: "",

  });

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.token]: event.target.value,
      [event.target.password]: event.target.value,
    });
  };

    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log(data);
      let response = await axios.post(
        "http://localhost:3020/admin/recuperar",
        // "https://kopy-backend.up.railway.app/admin/recuperar",
        //"https://back-end-kopy.onrender.com/admin/recuperar"
         data)
        .then((res) => {
          return res;
        }).catch((err) => {
          return err;

        })
      console.log(response);
      
        if (response.status==200) {
          toast.success("recover is sucessfull!", {
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
            navigate("/loginAdmi");
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

<div className="bg-[url('https://res.cloudinary.com/dyhfwq81d/image/upload/v1679053889/pexels-hu%E1%BB%B3nh-%C4%91%E1%BA%A1t-2313037_qvujla.jpg')] h-screen W-full bg-cover bg-center p-24 flex items-center justify-center ">
<div className="absolute w-[400px] -translate-x-2/4 translate-y-[-55%] box-border shadow-[0_15px_25px_#00000099] mx-auto my-5 p-10 rounded-[10px] left-2/4 top-2/4 bg-[#473b3be0]">
<form onSubmit={handleSubmit}>
         
          <div className="relative">
            <input
              className="w-full text-base text-white mb-[30px] px-0 py-2.5 border-b-white border-[none] border-b border-solid bg-transparent outline-0 left-0 -top-5 placeholder:text-white"
              required
              name="id"
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