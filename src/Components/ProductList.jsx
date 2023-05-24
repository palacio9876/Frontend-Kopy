import React from "react";
import { ToastContainer, toast } from "react-toastify";

export const ProductList = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
  articles,
}) => {
  const onAddProduct = (product) => {
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setTotal(total + product.price * product.quantity);
      setCountProducts(countProducts + product.quantity);
      toast.success("Producto agregado exitosamente", {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return setAllProducts([...products]);
    }

    setTotal(total + product.price * product.quantity);
    setCountProducts(countProducts + product.quantity);
    setAllProducts([...allProducts, product]);
  };

  let rol = localStorage.getItem("rol");
  let rolAdmin = localStorage.getItem("rolAdmin");

  return (
    <>
      <div className="container-items">
        {articles.map((article) => (
          <div className="item" key={article.id}>
            <figure>
              <img src={article.urlImage} alt={article.nameProduct} />
            </figure>
            <div className="info-product">
              <h2>{article.nameProduct}</h2>
              <p className="price">${article.price}</p>
              <div className="article-footer">
                <span>{article.date} </span>
                <span>{article.ReadingTime}</span>
              </div>
              {rolAdmin === "rolAdmin" ? (
                <>
                  <button className="btn btn-danger">Editar</button>
                  <button className="btn btn-danger">Eliminar</button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => onAddProduct(article)}
                    className="active:scale-95"
                  >
                    Añadir al carrito
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </>
  );
};
