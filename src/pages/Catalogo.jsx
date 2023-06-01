import { useState } from "react";
import { Footer } from "../layouts/Footer/Footer.jsx";
import { Header } from "../layouts/Header/Header.jsx";
import "../assets/css/Catalogo.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Cart } from "../Components/Cart";
import { data } from "../data.js";
import { ProductList } from "../Components/ProductList";
import { HeaderCliente } from "../layouts/Header/HeaderCliente.jsx";
import { NavLink, useNavigate } from "react-router-dom";

export const Catalogo = () => {
  let rol = localStorage.getItem("rol");
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  AOS.init();

  const allCategories = [
    "Todo",
    ...new Set(data.map((article) => article.category)),
  ];

  const [categories, setCategories] = useState(allCategories);
  const [articles, setArticles] = useState(data);
  const filterCategory = (category) => {
    if (category === "Todo") {
      setArticles(data);
      return;
    }

    const filteredData = data.filter(
      (article) => article.category === category
    );
    setArticles(filteredData);
  };

  return (
    <>
      {rol == null ? <Header /> : <HeaderCliente />}

      <main className="main-catalogo">
        <h1 className="text-center text-5xl text-brown-kopy my-3">Catalogo</h1>
        <div className="btns-catalogo">
          {categories.map((category) => (
            <button
              className="btn-catalogo bg-orange-kopy text-pink-kopy text-[1.3rem] cursor-pointer m-2.5 p-2.5 rounded-[10px] border-[none] hover:bg-green-kopy"
              type="sumit"
              onClick={() => filterCategory(category)}
              key={category}
            >
              {category}
            </button>
          ))}
          {rol == "rolAdmin" ? (
            <NavLink
              to="/addProduct"
              className="bg-orange-kopy text-pink-kopy text-[1.3rem] cursor-pointer m-2.5 p-2.5 rounded-[10px] border-[none] hover:bg-green-kopy"
            >
              Añadir producto
            </NavLink>
          ) : null}
        </div>
        <Cart
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
        />

        <div className="cards-container">
          <ProductList
            articles={articles}
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Catalogo;
