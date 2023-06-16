import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useParams } from "react-router-dom";

export const ProductList = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  const [articles, setArticles] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const {product}= useParams()
  const [updatedProduct, setUpdatedProduct] = useState({
    nombre_producto: "",
    precio: 0,
  });

  useEffect(() => {
    obtenerProductos(product);
    return function cleanup() {};
    
  }, []);
  

  const obtenerProductos = async (product) => {
    try {
      const response = await axios.get(
        // "http://localhost:3020/product/obtener/"+product,
        // "https://kopy-backend.up.railway.app/product/obtener/"+product,
        "https://back-end-kopy.onrender.com/product/obtener/"+product,
      );
      setArticles(response.data);

      articles.forEach((article) => {
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
      const response = await axios.delete(
        // `http://localhost:3020/product/eliminar/${productId}`
        // `https://kopy-backend.up.railway.app/product/eliminar/${productId}`
        `https://back-end-kopy.onrender.com/product/eliminar/${productId}`
      );
      if (response.status === 200) {
        const updatedProducts = articles.filter(
          (article) => article.id_producto !== productId
        );
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

  const updateProduct = async (productId) => {
    try {
      const response = await axios.put(
        // `http://localhost:3020/product/actualizar/${productId}`,
        // `https://kopy-backend.up.railway.app/product/actualizar/${productId}`
        `https://back-end-kopy.onrender.com/product/actualizar/${productId}`,

        updatedProduct
      );
      if (response.status === 200) {
        const updatedProducts = articles.map((article) =>
          article.id_producto === productId ? { ...article, ...updatedProduct } : article
        );
        setArticles(updatedProducts);
        setEditingProduct(null);
        toast.success("Producto actualizado exitosamente", {
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
      toast.error("Error al actualizar el producto", {
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
        item.id_producto === article.id_producto
          ? { ...item, cantidad_producto: item.cantidad_producto + 1 }
          : item
      );

      setTotal(total + article.precio * article.cantidad_producto);
      setCountProducts(countProducts + article.cantidad_producto);
      return setAllProducts([...products]);
    }

    setTotal(total + article.precio * article.cantidad_producto);
    setCountProducts(countProducts + article.cantidad_producto);
    setAllProducts([...allProducts, article]);
  };

  const handleEditProduct = (productId, product) => {
    setEditingProduct(productId);
    setUpdatedProduct({ ...product });
  };

  const handleUpdateField = (e) => {
    setUpdatedProduct({
      ...updatedProduct,
      [e.target.name]: e.target.value,
    });
  };

  let rol = localStorage.getItem("rol");
  let rolAdmin = localStorage.getItem("rolAdmin");

  return (
    <div className="container-items">
      {articles.map((article) => (
        <div className="item flex flex-col items-center" key={article.id_producto}>
          <figure>
            <img src={article.id_imagen} alt={article.nombre_producto} />
          </figure>
          {rol === "rolAdmin" ? (
            <>
              {editingProduct === article.id_producto ? (
                <div className="edit-product flex flex-col gap-3 mt-4">
                  <input
                  className="text-center h-9 rounded-xl"
                    type="text"
                    name="nombre_producto"
                    value={updatedProduct.nombre_producto}
                    onChange={handleUpdateField}
                  />
                  <input
                  className="text-center h-9 rounded-xl"
                    type="number"
                    name="precio"
                    value={updatedProduct.precio}
                    onChange={handleUpdateField}
                  />
                  <div className="edit-product-buttons flex gap-3 items-center">
                    <button
                      className="rounded-[10px]  bg-orange-kopy h-14 w-[47%] hover:text-zinc-50"
                      onClick={() => updateProduct(article.id_producto)}
                    >
                      Guardar
                    </button>
                    <button
                      className="rounded-[10px]  bg-orange-kopy h-14 w-[47%] hover:text-zinc-50"
                      onClick={() => setEditingProduct(null)}
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="text-lg font-black ml-2">
                    {article.nombre_producto}
                  </h2>
                  <p className="text-lg ml-2">${article.precio}</p>
                  <div className="flex flex-col items-center mt-4">
                    <button
                      className="rounded-[10px]  bg-orange-kopy h-14 w-72 hover:text-zinc-50"
                      onClick={() => handleEditProduct(article.id_producto, article)}
                    >
                      Editar
                    </button>
                    <br />
                    <button
                      className="-mt-4 mb-4 rounded-[10px] bg-orange-kopy h-14 w-72 hover:text-zinc-50"
                      onClick={() => deleteProduct(article.id_producto)}
                    >
                      Eliminar
                    </button>
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              <div className="info-product">
                <h2 className="text-lg font-black ml-2">
                  {article.nombre_producto}
                </h2>
                <p className="text-lg ml-2">${article.precio}</p>
                <button
                  onClick={() => onAddProduct(article)}
                  onClickCapture={addCart}
                  className="btn-add-cart"
                >
                  Añadir al carrito
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};