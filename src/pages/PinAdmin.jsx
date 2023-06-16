import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export const PinAdmin = () => {
  const [data, setData] = useState({
    pin: ""
  });

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };
  const navigate=useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
   
      const response = await axios.post(
        "http://localhost:3020/admin/verificarPin",
        // "https://kopy-backend.up.railway.app/admin/verificarPin",
        //"https://back-end-kopy.onrender.com/admin/verificarPin",
        data
      );
      console.log("response", response);

      toast.success("Access allowed", {
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
        navigate("/loginAdmin");
      }, 2000);
    
    } catch (error) {
      console.log("Pin Validate Denied");
      toast.error("Access denied", {
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
      <div className="bg-[url('https://res.cloudinary.com/digw0vkdp/image/upload/v1682270938/kopy/pexels-cottonbro-studio-3205736_lxn4mm.jpg')] h-screen W-full bg-cover bg-center p-24 flex items-center justify-center opacity-2">
        <div className="absolute w-[400px] -translate-x-2/4 translate-y-[-55%] box-border shadow-[0_15px_25px_#00000099] mx-auto my-5 p-10 rounded-[10px] left-2/4 top-2/4 bg-[#473b3be3]">
          <form className="flex flex-col" >
            <div className="relative">
              <input
                className="text-xl w-full text-white mb-[30px] px-0 py-2.5 border-b-white border-[none] border-b border-solid bg-transparent outline-0 left-0 -top-5 placeholder:text-white"
                required
                name="pin"
                id="pin"
                onChange={handleInputChange}
                type="password"
                autoComplete="off"
                placeholder="PIN"
              />
            </div>
            <button type="submit" onClick={handleSubmit}>
              <NavLink
                to="#"
                className="group relative inline-block font-[bold] text-white text-base no-underline uppercase overflow-hidden transition-[0.5s] tracking-[3px] mt-10 px-5 py-2.5 hover:bg-white"
              >
                <span className="absolute block animate-[btn-anim1_1.5s_linear_infinite]-left-full w-full h-0.5 top-0 background: linear-gradient(90deg, transparent, #fff)"></span>
                <span className="absolute block animate-[btn-anim2_1.5s_linear_infinite]-top-full w-0.5 h-full right-0 background: linear-gradient(180deg, transparent, #fff)"></span>
                <span className="absolute block animate-[btn-anim3_1.5s_linear_infinite]-right-full bottom-0 background: linear-gradient(270deg, transparent, #fff) animation-delay: .75s"></span>
                <span className="absolute block animate-[btn-anim4_1.5s_linear_infinite]-bottom-full w-0.5 left-0 background: linear-gradient(360deg, transparent, #fff)"></span>
                <p className="group-hover:text-black">Enviar código</p>
              </NavLink>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
