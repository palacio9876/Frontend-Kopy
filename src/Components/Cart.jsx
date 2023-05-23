import React, { useState } from "react";
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

  const incrementQuantity = (product) => {
    const updatedProducts = allProducts.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setAllProducts(updatedProducts);
    setTotal(total + product.price);
    setCountProducts(countProducts + 1);
  };

  const decrementQuantity = (product) => {
    if (product.quantity > 1) {
      const updatedProducts = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      setAllProducts(updatedProducts);
      setTotal(total - product.price);
      setCountProducts(countProducts - 1);
    }
  };

  const onDeleteProduct = (product) => {
    const updatedProducts = allProducts.filter(
      (item) => item.id !== product.id
    );
    setAllProducts(updatedProducts);
    setTotal(total - product.price * product.quantity);
    setCountProducts(countProducts - product.quantity);
  };

  const onCleanCart = () => {
    <ToastContainer />;
    toast.info("Carrito vacio", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };

  const onCash = () => {
    toast.success("Comprando", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    <ToastContainer />;
  };

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
    <header>
      <div className="container-icon">
        <div className="container-cart-icon" onClick={() => setActive(!active)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="icon-cart"
          >
            {/* Icono del carrito */}
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
                  <div className="cart-product" key={product.id}>
                    <div className="info-cart-product">
                      <button
                        className="quantity-button"
                        onClick={() => decrementQuantity(product)}
                      >
                        <p className="text-red-500 text-2xl ">-</p>
                      </button>
                      <span className="cantidad-producto-carrito">
                        {product.quantity}
                      </span>
                      <button
                        className="quantity-button"
                        onClick={() => incrementQuantity(product)}
                      >
                        <p className="text-green-500 text-2xl m-20px">+</p>
                        
                      </button>
                      <p className="titulo-producto-carrito">
                        {product.nameProduct}
                      </p>
                      <span className="precio-producto-carrito">
                        ${product.price * product.quantity}
                      </span>
                    </div>

                    <p
                      onClick={() => onDeleteProduct(product)}
                      className="cursor-pointer text-red-500"> 
                    
                      X
                    </p>
                  </div>
                ))}
              </div>

              <div className="cart-total">
                <h3>Total:</h3>
                <span className="total-pagar">${total}</span>
              </div>
              <button className="btn-cash" onClick={onCash}>
                Comprar
              </button>
              <button className="btn-clear-all" onClick={onCleanCart}>
                Vaciar Carrito
              </button>
            </>
          ) : (
            <p className="cart-empty">El carrito está vacío</p>
          )}
        </div>
      </div>
    </header>
  );
};
