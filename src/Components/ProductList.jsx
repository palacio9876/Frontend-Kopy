import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

export const ProductList = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    obtenerProductos();
  }, []);

  const obtenerProductos = async () => {
    try {
      const response = await axios.get("http://localhost:3020/product/obtener");
      setArticles(response.data);

      articles.map((article) => {
        article.cantidad_producto = 1;
      });

      if (response.status === 200) {
        toast.info("Productos obtenidos de la db exitosamente", {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Error al obtener los productos", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const addCart = () => {
    toast.success("Producto agregado exitosamente", {
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const deleteProduct = async (productId) => {
    try {
      const response = await axios.delete(`http://localhost:3020/product/eliminar/${productId}`);
      if (response.status === 200) {
        const updatedProducts = articles.filter((article) => article.id_producto !== productId);
        setArticles(updatedProducts);
        toast.success("Producto eliminado exitosamente", {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Error al eliminar el producto", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const editProduct = async (product) => {
    // Aquí deberías implementar la lógica para editar un producto
    try {
      // Realizar una petición PUT o PATCH al backend para actualizar el producto
      // con la información proporcionada en el parámetro 'product'
      const response = await axios.put(`http://localhost:3020/product/${product.id_producto}`, product);
      if (response.status === 200) {
        toast.success("Producto editado exitosamente", {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Error al editar el producto", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

 const onAddProduct = (article) => {

    if (allProducts.find((item) => item.id_producto === article.id_producto)) {
      const products = allProducts.map((item) =>


       item.id_producto === article.id_producto ? { ...item, cantidad_producto: item.cantidad_producto + 1 } 
       : item
     );
     
    //  setCountProducts(countProducts + product.cantidad_producto);
     setTotal(total + article.precio * article.cantidad_producto);
    setCountProducts(countProducts + article.cantidad_producto);
     return setAllProducts([...products]);
   }

    setTotal(total + article.precio * article.cantidad_producto);
    setCountProducts(countProducts + article.cantidad_producto);
    setAllProducts([...allProducts, article]);

   
  };

  let rol = localStorage.getItem("rol");
  let rolAdmin = localStorage.getItem("rolAdmin");

  return (

    <div className="container-items" >
     {articles.map(article => (
       <div className="item" key={article.id_producto}>
           <figure>
					<img
						src={article.id_imagen} alt={article.nombre_producto}
						
					/>
				</figure>
				<div className="info-product">
					<h2>{article.nombre_producto}</h2>
					<p className="price">${article.precio}</p>
					<button onClick={() => onAddProduct(article)} className="btn-add-cart">Añadir al carrito</button>
				</div>

       </div>


    ))}

    


    </div>
    /*
    <>
      <div className="container-items">
        {articles.map((article) => (
          <div className="item" key={article.id_producto}>
            <figure>
              <img src={article.id_imagen} alt={article.nombre_producto} />
            </figure>
            <div className="info-product">
              <h2>{article.nombre_producto}</h2>
              <p className="price">${article.precio}</p>
              <div className="article-footer">
                <span>{article.date}</span>
                <span>{article.ReadingTime}</span>
              </div>

              {rol === "rolAdmin" ? (
                <>
                  <button className="btn btn-danger" onClick={() => editProduct(article)}>
                    Editar
                  </button>

                  <button className="btn btn-danger" onClick={() => deleteProduct(article.id_producto)}>
                    Eliminar
                  </button>
                </>
              ) : (
                <>
                  <button onClick={() => onAddProduct(article, addCart())} className="active:scale-95">
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
    */
  );
};
