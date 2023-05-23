import React from "react";
import { Header } from "../layouts/Header/Header";
import { Footer } from "../layouts/Footer/Footer";
import { Main } from "../layouts/Main/Main";
import { HeaderCliente } from "../layouts/Header/HeaderCliente";


export const HomeAdmin = () => {
  let rolAdmin = localStorage.getItem('rolAdmin')
    return (
      <>
      {
        rolAdmin === null ? <HeaderCliente /> : null
      }
      <Main/>
      <Footer />
    </>
  );
};
