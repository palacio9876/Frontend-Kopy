import React from "react";
import { Helmet } from "react-helmet";
import { Header } from "../layouts/Header/Header";
import { Main } from "../layouts/Main/Main";
import { Footer } from "../layouts/Footer/Footer";
import "../assets/css/Home.css";

export const Home = () => {
  return (
    <>
      <Helmet>
        <link rel="shortcut icon" href="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678721656/kopy/logo_cblkd0.png" />
        <title>Kopy</title>
      </Helmet>
      <Header />
      <Main />
      <Footer />
    </>
  );
};
