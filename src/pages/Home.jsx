import React from "react";
import { Main } from "../layouts/Main/Main";
import { Footer } from "../layouts/Footer/Footer";
import "../assets/css/Home.css";
import { Header2 } from "../layouts/Header/Header2";
import { Header } from "../layouts/Header/Header";


export const Home = () => {

  let rol = localStorage.getItem('rol')
  
  
  
  return (
    <>
{
  rol === null ? <Header /> : <Header2 />
  
}
      <Main />
      <Footer />
    </>
  );
};
