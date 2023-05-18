import React from "react";
import { Main } from "../layouts/Main/Main";
import { Footer } from "../layouts/Footer/Footer";
import "../assets/css/Home.css";
import { Header } from "../layouts/Header/Header";
import { HeaderCliente } from "../layouts/Header/HeaderCliente";

export const Home = () => {
  let rol = localStorage.getItem("rol");

  return (
    <>
<<<<<<< HEAD
{
rol === null ? <Header /> : <HeaderCliente />

}

=======
      {rol === null ? <Header /> : <Header2 />}
>>>>>>> a5540a15697c2970d3a7d488a948ecd444aa4ca5
      <Main />
      <Footer />
    </>
  );
};
