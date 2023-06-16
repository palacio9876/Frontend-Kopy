import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import Axios from "axios";
import { toast } from "react-toastify";

export const RecoverPassword = () => {
  const [form, setForm] = useState({
    email: "",
  });

  const navigate = useNavigate();
  const handleInputChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(form);
    Axios.post(
      "http://localhost:3020/user/recuperar",
      // "https://kopy-backend.up.railway.app/user/recuperar",
      //"https://back-end-kopy.onrender.com/user/recuperar"
       form)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    toast.success("Recover is sucessfull!", {
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
      navigate("/recover");
    }, 2000);
  };

  return (
    <>
      <div className="bg-[url('https://res.cloudinary.com/dyhfwq81d/image/upload/v1679053889/pexels-hu%E1%BB%B3nh-%C4%91%E1%BA%A1t-2313037_qvujla.jpg')] h-screen W-full bg-cover bg-center p-24 flex items-center justify-center ">
        <div className="absolute w-[400px] -translate-x-2/4 translate-y-[-55%] box-border shadow-[0_15px_25px_#00000099] mx-auto my-5 p-10 rounded-[10px] left-2/4 top-2/4 bg-[#473b3be3]">
          <form onSubmit={handleSubmitForm}>
            <div className="relative">
              <input
                className="w-full text-base text-white mb-[30px] px-0 py-2.5 border-b-white border-[none] border-b border-solid bg-transparent outline-0 left-0 -top-5 placeholder:text-white"
                required
                name="email"
                type="email"
                onChange={handleInputChange}
                autoComplete="off"
                placeholder="Correo electronico"
              />
            </div>
            <button type="submit">
              <a className="group relative inline-block font-[bold] text-white text-base no-underline uppercase overflow-hidden transition-[0.5s] tracking-[3px] mt-10 px-5 py-2.5 hover:bg-white ">
                <span className="absolute block animate-[btn-anim1_1.5s_linear_infinite]-left-full w-full h-0.5 top-0 background: linear-gradient(90deg, transparent, #fff)"></span>
                <span className="absolute block animate-[btn-anim2_1.5s_linear_infinite]-top-full w-0.5 h-full right-0 background: linear-gradient(180deg, transparent, #fff)"></span>
                <span className="absolute block animate-[btn-anim3_1.5s_linear_infinite]-right-full bottom-0 background: linear-gradient(270deg, transparent, #fff) animation-delay: .75s"></span>
                <span className="absolute block animate-[btn-anim4_1.5s_linear_infinite]-bottom-full w-0.5 left-0 background: linear-gradient(360deg, transparent, #fff)"></span>
                <p className="group-hover:text-black">Enviar codigo</p>
              </a>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
