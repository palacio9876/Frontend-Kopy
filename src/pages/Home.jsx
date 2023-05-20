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
{
rol === null ? <Header /> : <HeaderCliente />

}

      <Main />
      <Footer />
    </>
  );
};
