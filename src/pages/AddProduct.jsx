import React from "react";
import { HeaderCliente } from "../layouts/Header/HeaderCliente";
import { Footer } from "../layouts/Footer/Footer";
import { MainAddProducto } from "../layouts/Main/MainAddProducto";
export const AddProduct = () => {
  return (
    <>
      <HeaderCliente />
      <MainAddProducto/>
      <Footer />
    </>
  );
};