import React from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export const Main = () => {
  AOS.init();
  return (
    <main>
      <section className="section-main">
        <div
          className="section-left"
          data-aos="fade-up-right"
          data-aos-duration="1500"
        >
          <p className="text-main">
            Deleitate con nuestros <br />
            deliciosos productos <br />
            <span> Los mejores precios! </span>
          </p>
          <button className="btn-main">
            <span>
              <NavLink to="/catalogo">Ver catalogo</NavLink>
            </span>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
        </div>
        <div
          className="section-right"
          data-aos="fade-up-left"
          data-aos-duration="1500"
        >
          <img
            src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678721661/kopy/canva_c8envd.jpg"
            alt="imagen demostrativa"
          />
        </div>
      </section>
      <section className="products-container">
        <h2 data-aos="zoom-out" data-aos-duration="1000">
          Productos destacados
        </h2>
        <div className="products">
          <div className="card" data-aos="zoom-in-up" data-aos-duration="1000">
            <div className="image-card">
              <img src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678721659/kopy/cafe-rosa_jn8jjd.jpg" />
            </div>
            <div className="info-card">
              <p className="tittle-product">Cafe fresa</p>
              <p className="price">$7.000</p>
            </div>
          </div>
          <div className="card" data-aos="zoom-in-up" data-aos-duration="1000">
            <div className="image-card">
              <img src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678721659/kopy/cafe-mora_dv2sdt.jpg" />
            </div>
            <div className="info-card">
              <p className="tittle-product">Cafe mora</p>
              <p className="price"> $6.700</p>
            </div>
          </div>
          <div className="card" data-aos="zoom-in-up" data-aos-duration="1000">
            <div className="image-card">
              <img src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678721659/kopy/cafeverde_d78xkr.jpg" />
            </div>
            <div className="info-card">
              <p className="tittle-product">Cafe lite</p>
              <p className="price"> $6.500</p>
            </div>
          </div>
          <div className="card" data-aos="zoom-in-up" data-aos-duration="1000">
            <div className="image-card">
              <img src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678721660/kopy/cafe-tradicional_vlqwlt.jpg" />
            </div>
            <div className="info-card">
              <p className="tittle-product">Cafe con chocolate</p>
              <p className="price">$5.000</p>
            </div>
          </div>
        </div>
        <button
          className="btn-products"
        >
          <span>
            <NavLink to="/catalogo">Ver más</NavLink>
          </span>
          <svg viewBox="0 0 13 10" height="10px" width="15px">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>
      </section>
      <article className="services">
        <div className="box-mini" data-aos="fade-right" data-aos-duration="1500">
          <img src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678980032/kopy/camionEnvio_yn0wjt.webp" />
          <p> Envios a toda la ciudad</p>
        </div>
        <div className="box-mini" data-aos="fade-up" data-aos-duration="1500">
          <img src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678980057/kopy/pagsos_o0lwmc.png" />
          <p> Todos los medios de pago</p>
        </div>
        <div className="box-mini" data-aos="fade-left" data-aos-duration="1500">
          <img src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678980047/kopy/sonreir_a61eep.png" />
          <p> Cliente satisfecho</p>
        </div>
      </article>
    </main>
  );
};
