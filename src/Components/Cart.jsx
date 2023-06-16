import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export const Cart = ({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setTotal,
  setCountProducts,
}) => {
  const [active, setActive] = useState(false);

  const addProduct = async () => {
    try {
      const response = await axios.post(
        // "http://localhost:3020/product/obtener"
        // "https://kopy-backend.up.railway.app/product/obtener"
        "https://back-end-kopy.onrender.com/product/obtener"
        );
      setActive(response.data);
      active.map(active => {
        active.cantidad_producto = 1;
      })

    } catch (error) {

    }
  }

   const incrementQuantity = (article) => {
    const updatedProducts = allProducts.map((item) =>
     item.id_producto === article.id_producto ? { ...item, cantidad_producto: item.cantidad_producto + 1 } : item
   );
   setAllProducts(updatedProducts);
   setTotal(total + article.precio);
    setCountProducts(countProducts + 1);
   };

  const decrementQuantity = (article) => {
  if(article.quantity > 1) {
    const updatedProducts = allProducts.map((item) =>
      item.id_producto === article.id_producto ? { ...item, cantidad_producto: item.cantidad_producto - 1 } : item
   );
    setAllProducts(updatedProducts);
    setTotal(total - article.precio);
     setCountProducts(countProducts - 1);
   }
   };


  const onDeleteProduct = (article) => {
    const updatedProducts = allProducts.filter(
      (item) => item.id_producto !== article.id_producto
    );


    setAllProducts(updatedProducts);
    setTotal(total - article.precio * article.cantidad_producto);
    setCountProducts(countProducts - article.cantidad_producto);
  };

  const onCleanCart = () => {
    <ToastContainer />;
    toast.error("Carrito vacio", {
      position: "top-left",
      autoClose: 900,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };

  const onCash = () => {
    toast.success("Comprando", {
      position: "top-left",
      autoClose: 900,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    <ToastContainer />;
  };

  const deleteList= ()=>{
  toast.error("producto eliminado del carrito ", {
   position: "top-left",
   autoClose: 900,
   hideProgressBar: false,
   closeOnClick: true,
   pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  });
  <ToastContainer />;
  }

  // Conectar con el backend
  const [cart, setCart] = useState({
    id: "",
    nameProduct: "",
    price: "",
    quantity: "",
  });
  const handleInputChange = ({ target }) => {
    setCart({
      ...cart,
      [target.name]: target.value,
    });
  };

  const getCart = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:3020/buy/compra/:id")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };



  return (
    <>
    <ToastContainer/>
    <header>


      <div className="container-icon">
        <div className="container-cart-icon"
          onClick={() => setActive(!active)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="icon-cart"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          <div className="count-products">
            <span id="contador-productos">{countProducts}</span>
          </div>
        </div>

        <div className={`container-cart-products ${active ? "" : "hidden-cart"}`}>
          {
            allProducts.length ? (
              <>
                <div className="row-product ">
                  {allProducts.map(article => (
                    <div className="cart-product flex align-center justify-center" key={article.id_producto}>
                      <div className="info-cart-product">
                        <div className="flex flex-col h-5 mt-[-25px]">
                          <button
                            className="quantity-button"
                            onClick={() => incrementQuantity(article)}
                          >
                            <p className="text-green-500 text-2xl m-20px  mb-[-5px]" >+</p>
                          </button>
                          <span className="cantidad-producto-carrito">{article.cantidad_producto}</span>

                          <button
                            className="quantity-button"
                            onClick={() => decrementQuantity(article)}>

                            <p className="text-red-500 text-2xl  mt-[-10px] ">-</p>
                          </button>

                        </div>
                        <p className="titulo-producto-carrito">{article.nombre_producto}</p>
                        <span className="precio-producto-carrito">${article.precio}</span>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="icon-close"
                        onClick={() => onDeleteProduct(article)}
                        onClickCapture={deleteList}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>

                  ))}


                </div>

                <div className="cart-total ">
                  <h3>Total:</h3>
                  <span className="total-pagar">${total}</span>
                </div>

                <button className=" text-white block w-full  cursor-pointer text-base transition-all duration-[0.3s] ease-[ease] px-0 py-[15px] border-[none] bg-green-600" onClick={onCash}>
                  Comprar
                </button>

                <button className=" text-white block w-full cursor-pointer text-base transition-all duration-[0.3s] ease-[ease]  px-0 py-[15px] rounded-br-[10px] rounded-bl-[10px] border-[none] bg-red-600" onClick={onCleanCart}>
                  Vaciar Carrito
                </button>

              </>
            ) : (
              <p className="cart-empty">El carrito está vacío</p>
            )
          }

        </div>
      </div>
    </header>
</>
    /*
   
    
   <div classNameName="principal">
     <header>
      <div className="container-icon">
        <div className="container-cart-icon" onClick={() => setActive(!active)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-shopping-cart"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M17 17h-11v-14h-2" />
            <path d="M6 5l14 1l-1 7h-13" />
          </svg>
          <div className="count-products">
            <span id="contador-productos">{countProducts}</span>
          </div>
        </div>

        <div
          className={`container-cart-products ${active ? "" : "hidden-cart"}`}
        >
          {allProducts.length ? (
            <>
              <div className="row-product">
                {allProducts.map((product) => (
                  <div className="cart-product flex align-center justify-center" key={product.id}>
                    <div className="info-cart-product">
                      <div className="flex flex-col h-5 mt-[-25px]">
                      <button
                        className="quantity-button"
                        onClick={() => incrementQuantity(product)}
                      >
                        <p className="text-green-500 text-2xl m-20px  mb-[-5px]" >+</p>
                      </button>
                      <span className="cantidad-producto-carrito">
                        {product.cantidad_producto}
                      </span>
                      <button
                        className="quantity-button"
                        onClick={() => decrementQuantity(product)}   >
                   
                        <p className="text-red-500 text-2xl  mt-[-10px]  ">-</p>
                      </button>
                      </div >
                      <p className="titulo-producto-carrito">
                        {product.nombre_producto}
                      </p>
                      <span className="precio-producto-carrito">
                        ${product.precio * product.cantidad_producto}
                      </span>
                    </div>

                    <p
                      onClick={() => onDeleteProduct(product,deleteList())}
                      
                      className="cursor-pointer text-red-500  ml-[10px] mr-[-10px]"
                    >
                      X
                    </p>
                  </div>
                ))}
              </div>

              <div className="cart-total">
                <h3>Total:</h3>
                <span className="total-pagar">${total}</span>
              </div>
              <button className=" text-white block w-full  cursor-pointer text-base transition-all duration-[0.3s] ease-[ease] px-0 py-[15px] border-[none] bg-green-600" onClick={onCash}>
                Comprar
              </button>
              <button className=" text-white block w-full cursor-pointer text-base transition-all duration-[0.3s] ease-[ease]  px-0 py-[15px] rounded-br-[10px] rounded-bl-[10px] border-[none] bg-red-600" onClick={onCleanCart}>
                Vaciar Carrito
              </button>
            </>
          ) : (
            <p className="cart-empty">El carrito está vacío</p>
          )}
        </div>
      </div>
    </header>
   </div>
   */
  );
};