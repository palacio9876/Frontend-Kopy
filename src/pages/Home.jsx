import React from "react";
import { Helmet } from "react-helmet";
import { Header } from "../layouts/Header/Header";
import { Main } from "../layouts/Main/Main";
import { Footer } from "../layouts/Footer/Footer";
import "../assets/css/Home.css";
import logo from "../assets/img/logo.png";

export const Home = () => {
  return (
    <>
      <Helmet>
        <link rel="shortcut icon" href={logo} />
        <title>Kopy</title>
      </Helmet>
      <Header />
      <Main />
      <Footer />
    </>
  );
};
