import axios from "axios";
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const MainAddProducto = () => {


  const [product, setProduct]=useState({
    name:'',
    price:'',
    descripcion:'',
    categoria:'',
    image:''  });

    const handleInputChange = (e) => {
      setProduct({
        ...product,
        [e.target.name]: e.target.value,
      });
    }
    const navigate = useNavigate();
    const handleSubmit = async(e) => {
      e.preventDefault();
      console.log(product);
      const response= await axios.post(
        "http://localhost:3020/product/ingreso"
        // "https://kopy-backend.up.railway.app/product/ingreso"
        // "https://back-end-kopy.onrender.com/product/ingreso"
      , product);
      
      if (response.status === 200) {
        toast.success("Producto Ingresado Corretamente !", {
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
        }, 2000);
      }else if(response.status === 400){
        toast.error("Producto no Ingresado !", {
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
    }







  return (
    <>
    <ToastContainer/>
    <main className="bg-pink-kopy">
      <h1 className="text-brown-kopy text-center text-4xl pt-4">Agregar un producto</h1>
      <div className="pt-10 p-20">
        <div className="flex flex-wrap">
          <div className="bg-brown-kopy py-8 w-1/2 px-8">
            <form
             onSubmit={handleSubmit}
              
              className="flex flex-wrap gap-20 grid-cols-2 grid-rows-3 "
            >
               <div className="col-span-1 flex flex-col gap-2.5">
                <p className="text-pink-kopy text-lg">id del producto:</p>
                <input
                  className="max-w-xs h-11 bg-pink-kopy text-base px-4 py-0 rounded-lg border-2 border-solid border-transparent hover:border-pink-kopy outline-none focus:border-pink-kopy"
                  type="text"
                  onChange={handleInputChange}
                  name="id"
                  id="id"
                />
              </div>
              <div className="col-span-1 flex flex-col gap-2.5">
                <p className="text-pink-kopy text-lg">Nombre del producto:</p>
                <input
                  className="max-w-xs h-11 bg-pink-kopy text-base px-4 py-0 rounded-lg border-2 border-solid border-transparent hover:border-pink-kopy outline-none focus:border-pink-kopy"
                  type="text"
                  onChange={handleInputChange}
                  name="nombre"
                  id="nombre"
                />
              </div>
              <div className="col-span-3 flex flex-col gap-2.5">
                <p className="text-pink-kopy text-lg">Precio:</p>
                <input
                  className="max-w-xs h-11 bg-pink-kopy text-base px-4 py-0 rounded-lg border-2 border-solid border-transparent hover:border-pink-kopy outline-none focus:border-pink-kopy"
                  type="number"
                  onChange={handleInputChange}
                  name="precio"
                  id="precio"
                />
              </div>
              <div className="col-span-5 flex flex-col gap-2.5">
                <p className="text-pink-kopy text-lg">Descripcion:</p>
                <input
                  className="max-w-xs h-11 bg-pink-kopy text-base px-4 py-0 rounded-lg border-2 border-solid border-transparent hover:border-pink-kopy outline-none focus:border-pink-kopy"
                  type="text"
                  onChange={handleInputChange}
                  name="descripcion"
                  id="descripcion"
                />
              </div>

              <div className="col-span-3 flex flex-col gap-2.5">
                <p className="text-pink-kopy text-lg">cantidad:</p>
                <input
                  className="max-w-xs h-11 bg-pink-kopy text-base px-4 py-0 rounded-lg border-2 border-solid border-transparent hover:border-pink-kopy outline-none focus:border-pink-kopy"
                  type="number"
                  onChange={handleInputChange}
                  name="cantidad"
                  id="cantidad"
                />
              </div>

              <div className="col-span-2 flex flex-col gap-2.5">
                <p className="text-pink-kopy text-lg">Categoria: </p>
                <select
                  name="categoria"
                  id="categoria"
                  onChange={handleInputChange}
                  
                  className="max-w-xs h-11 bg-pink-kopy text-base px-4 py-0 rounded-lg border-2 border-solid border-transparent hover:border-pink-kopy outline-none focus:border-pink-kopy"
                >
                  <option className="bg-pink-kopy max-w-xs h-11" value="">
                    Seleccione una opcion
                  </option>
                  <option className="bg-pink-kopy max-w-xs h-11" value="cafe">
                    Café
                  </option>
                  <option
                    className="bg-pink-kopy max-w-xs h-11"
                    value="panaderia"
                  >
                    Panaderia
                  </option>
                  <option
                    className="bg-pink-kopy max-w-xs h-11"
                    value="bebidas"
                  >
                    Bebidas frias
                  </option>
                  <option
                    className="bg-pink-kopy max-w-xs h-11"
                    value="chocolates"
                  >
                    Chocolates
                  </option>
                  <option
                    className="bg-pink-kopy max-w-xs h-11"
                    value="desayunos"
                  >
                    Desayunos
                  </option>
                </select>
              </div>
              <div className="col-span-4 flex flex-col gap-2.5 text-pink-kopy">
                <p className="text-lg">Imagen del producto:</p>
                <input type="text" name="urlImagen" id="urlImagen" onChange={handleInputChange} />
              </div>
              <button
                className="bg-pink-kopy rounded-lg border-2 border-solid border-transparent col-span-6 h-12 px-2"
                type="submit"
              >
                Añadir producto
              </button>
            </form>
          </div>
        </div>

        <div className="imagen"></div>
      </div>
    </main>
    </>
  );
};