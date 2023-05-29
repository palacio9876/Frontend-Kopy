  import React,{useState} from "react";

  export const MainAddProducto = () => {


    const [product, setProduct]=useState({
      name:'',
      price:'',
      descripcion:'',
      categoria:'',
      image:''  });

      const handleInputChange = (e) => {}






    return (
      <main className="bg-pink-kopy">
        <h1 className="text-brown-kopy text-center text-4xl pt-4">Agregar un producto</h1>
        <div className="pt-10 p-20">
          <div className="flex flex-wrap">
            <div className="bg-brown-kopy py-8 w-1/2 px-8">
              <form
                action=""
                method="post"
                className="flex flex-wrap gap-20 grid-cols-2 grid-rows-3 "
              >
                <div className="col-span-1 flex flex-col gap-2.5">
                  <p className="text-pink-kopy text-lg">Nombre del producto:</p>
                  <input
                    className="max-w-xs h-11 bg-pink-kopy text-base px-4 py-0 rounded-lg border-2 border-solid border-transparent hover:border-pink-kopy outline-none focus:border-pink-kopy"
                    type="text"
                    name="name"
                    id="name"
                  />
                </div>
                <div className="col-span-3 flex flex-col gap-2.5">
                  <p className="text-pink-kopy text-lg">Precio:</p>
                  <input
                    className="max-w-xs h-11 bg-pink-kopy text-base px-4 py-0 rounded-lg border-2 border-solid border-transparent hover:border-pink-kopy outline-none focus:border-pink-kopy"
                    type="number"
                    name="price"
                    id="price"
                  />
                </div>
                <div className="col-span-5 flex flex-col gap-2.5">
                  <p className="text-pink-kopy text-lg">Descripcion:</p>
                  <input
                    className="max-w-xs h-11 bg-pink-kopy text-base px-4 py-0 rounded-lg border-2 border-solid border-transparent hover:border-pink-kopy outline-none focus:border-pink-kopy"
                    type="text"
                    name="descripcion"
                    id="descripcion"
                  />
                </div>
                <div className="col-span-2 flex flex-col gap-2.5">
                  <p className="text-pink-kopy text-lg">Categoria: </p>
                  <select
                    name="categoria"
                    id="categoria"
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
                  <input type="file" name="image" id="image" />
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
    );
  };
