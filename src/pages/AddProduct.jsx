import React from "react";
import { Header } from "../layouts/Header/Header";
import { Footer } from "../layouts/Footer/Footer";
import { MainAddProducto } from "../layouts/Main/MainAddProducto";

export const AddProduct = () => {
  return (
    <>
      <Header />
      <MainAddProducto/>
      <Footer />
    </>
  );
};