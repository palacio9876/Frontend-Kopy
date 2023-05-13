import React from "react";
import { Header2 } from "../layouts/Header/Header2";
import { Footer } from "../layouts/Footer/Footer";
import { MainAddProducto } from "../layouts/Main/MainAddProducto";
export const AddProduct = () => {
  return (
    <>
      <Header2 />
      <MainAddProducto/>
      <Footer />
    </>
  );
};