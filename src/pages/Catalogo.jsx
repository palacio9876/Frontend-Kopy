import React from "react";
import { Footer } from "../layouts/Footer/Footer.jsx";
import { Header } from "../layouts/Header/Header.jsx";
import "../assets/css/Catalogo.css";
import AOS from "aos";
import "aos/dist/aos.css";

export const Catalogo = () => {
  AOS.init();
  return (
    <>
      <Header />
      <main className="main-catalogo">
        <h1 className="tittle-catalogo">Catalogo</h1>
        <div className="btns-catalogo">
          <button className="todo btn-catalogo">Todo</button>
          <button className="cafe btn-catalogo">Café</button>
          <button className="panaderia btn-catalogo">Panaderia</button>
          <button className="jugos btn-catalogo">Jugos</button>
          <button className="chocolates btn-catalogo">Chocolates</button>
          <button className="desayunos btn-catalogo">Desayunos</button>
        </div>
        <div className="cards-container">
          <div className="card-catalogo" data-aos="zoom-in" data-aos-duration="7000" data-catalogo="cafe">
            <img
              src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678721659/kopy/cafe-oscuro_zlyaem.jpg"
              alt="Cafe oscuro"
            />
            <h2>Cafe oscuro</h2>
            <p>Cafe termino oscuro</p>
            <div className="price-btn">
              <p>$2.000</p>
              <button>comprar</button>
            </div>
          </div>
          <div className="card-catalogo" data-aos="zoom-in" data-aos-duration="7000" data-catalogo="cafe">
            <img
              src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678721658/kopy/cafe-leche_wv0caq.jpg"
              alt="Cafe con leche"
            />
            <h2>Cafe con leche</h2>
            <p>Cafe, leche</p>
            <div className="price-btn">
              <p>$2.000</p>
              <button>comprar</button>
            </div>
          </div>
          <div className="card-catalogo" data-aos="zoom-in" data-aos-duration="7000" data-catalogo="cafe">
            <img
              src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678721658/kopy/cafe-fusion_ekejg7.jpg"
              alt="Cafe fusion"
            />
            <h2>Cafe fusion</h2>
            <p>Cafe fusion</p>
            <div className="price-btn">
              <p>$2.000</p>
              <button>comprar</button>
            </div>
          </div>
          <div className="card-catalogo" data-aos="zoom-in" data-aos-duration="7000" data-catalogo="cafe">
            <img
              src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678721658/kopy/cafe-helado_wgyu8h.webp"
              alt="Cafe helado"
            />
            <h2>Cafe helado</h2>
            <p>Cafe, helado</p>
            <div className="price-btn">
              <p>$2.000</p>
              <button>comprar</button>
            </div>
          </div>
          <div className="card-catalogo" data-aos="zoom-in" data-aos-duration="7000" data-catalogo="cafe">
            <img
              src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678721659/kopy/cafe-mango_nrjxp6.jpg"
              alt="Cafe mango"
            />
            <h2>Cafe mango</h2>
            <p>Cafe, mango</p>
            <div className="price-btn">
              <p>$2.000</p>
              <button>comprar</button>
            </div>
          </div>
          <div className="card-catalogo" data-aos="zoom-in" data-aos-duration="7000" data-catalogo="cafe">
            <img
              src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678721660/kopy/capuchino_gtvlmz.jpg"
              alt="capuchino"
            />
            <h2>capuchino</h2>
            <p>capuchino</p>
            <div className="price-btn">
              <p>$2.000</p>
              <button>comprar</button>
            </div>
          </div>
          <div className="card-catalogo" data-aos="zoom-in" data-aos-duration="7000" data-catalogo="panaderia">
            <img
              src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678721657/kopy/bu%C3%B1uelo_cscvqj.jpg"
              alt="panaderia"
            />
            <h2>panaderia</h2>
            <p>panaderia</p>
            <div className="price-btn">
              <p>$2.000</p>
              <button>comprar</button>
            </div>
          </div>
          <div className="card-catalogo" data-aos="zoom-in" data-aos-duration="7000" data-catalogo="panaderia">
            <img
              src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678721664/kopy/croasan_p1jcki.jpg"
              alt="panaderia"
            />
            <h2>panaderia</h2>
            <p>panaderia</p>
            <div className="price-btn">
              <p>$2.000</p>
              <button>comprar</button>
            </div>
          </div>
          <div className="card-catalogo" data-aos="zoom-in" data-aos-duration="7000" data-catalogo="panaderia">
            <img
              src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678721680/kopy/gaelletas-rellenas_gh9fac.webp"
              alt="panaderia"
            />
            <h2>panaderia</h2>
            <p>panaderia</p>
            <div className="price-btn">
              <p>$2.000</p>
              <button>comprar</button>
            </div>
          </div>
          <div className="card-catalogo" data-aos="zoom-in" data-aos-duration="7000" data-catalogo="panaderia">
            <img
              src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678721662/kopy/gaelltas-azules_yeuzcr.jpg"
              alt="panaderia"
            />
            <h2>panaderia</h2>
            <p>panaderia</p>
            <div className="price-btn">
              <p>$2.000</p>
              <button>comprar</button>
            </div>
          </div>
          <div className="card-catalogo" data-aos="zoom-in" data-aos-duration="7000" data-catalogo="panaderia">
            <img
              src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678721662/kopy/galletas-chispas_lpt2we.jpg"
              alt="panaderia"
            />
            <h2>panaderia</h2>
            <p>panaderia</p>
            <div className="price-btn">
              <p>$2.000</p>
              <button>comprar</button>
            </div>
          </div>
          <div className="card-catalogo" data-aos="zoom-in" data-aos-duration="7000" data-catalogo="panaderia">
            <img
              src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678721662/kopy/galletas_fv5kni.jpg"
              alt="panaderia"
            />
            <h2>panaderia</h2>
            <p>panaderia</p>
            <div className="price-btn">
              <p>$2.000</p>
              <button>comprar</button>
            </div>
          </div>
          <div className="card-catalogo" data-aos="zoom-in" data-aos-duration="7000" data-catalogo="panaderia">
            <img
              src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678721657/kopy/pan-casero_xrsdfm.jpg"
              alt="panaderia"
            />
            <h2>panaderia</h2>
            <p>panaderia</p>
            <div className="price-btn">
              <p>$2.000</p>
              <button>comprar</button>
            </div>
          </div>
          <div className="card-catalogo" data-aos="zoom-in" data-aos-duration="7000" data-catalogo="panaderia">
            <img
              src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678721656/kopy/pan-de-queso_rzyjb5.jpg"
              alt="panaderia"
            />
            <h2>panaderia</h2>
            <p>panaderia</p>
            <div className="price-btn">
              <p>$2.000</p>
              <button>comprar</button>
            </div>
          </div>
          <div className="card-catalogo" data-aos="zoom-in" data-aos-duration="7000" data-catalogo="panaderia">
            <img
              src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678721657/kopy/pan-galleta_ododjk.jpg"
              alt="panaderia"
            />
            <h2>panaderia</h2>
            <p>panaderia</p>
            <div className="price-btn">
              <p>$2.000</p>
              <button>comprar</button>
            </div>
          </div>
          <div className="card-catalogo" data-aos="zoom-in" data-aos-duration="7000" data-catalogo="panaderia">
            <img
              src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678721656/kopy/pan_tbwrsy.jpg"
              alt="panaderia"
            />
            <h2>panaderia</h2>
            <p>panaderia</p>
            <div className="price-btn">
              <p>$2.000</p>
              <button>comprar</button>
            </div>
          </div>
          <div className="card-catalogo" data-aos="zoom-in" data-aos-duration="7000" data-catalogo="jugos">
            <img
              src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678721655/kopy/milo_voamzu.webp"
              alt="jugos"
            />
            <h2>jugos</h2>
            <p>jugos</p>
            <div className="price-btn">
              <p>$2.000</p>
              <button>comprar</button>
            </div>
          </div>
          <div className="card-catalogo" data-aos="zoom-in" data-aos-duration="7000" data-catalogo="jugos">
            <img
              src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678721663/kopy/jugo-naranja_v5qmln.webp"
              alt="jugos"
            />
            <h2>jugos</h2>
            <p>jugos</p>
            <div className="price-btn">
              <p>$2.000</p>
              <button>comprar</button>
            </div>
          </div>
          <div className="card-catalogo" data-aos="zoom-in" data-aos-duration="7000" data-catalogo="jugos">
            <img
              src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678721662/kopy/jugo-mango_rskvos.jpg"
              alt="jugos"
            />
            <h2>jugos</h2>
            <p>jugos</p>
            <div className="price-btn">
              <p>$2.000</p>
              <button>comprar</button>
            </div>
          </div>
          <div className="card-catalogo" data-aos="zoom-in" data-aos-duration="7000" data-catalogo="jugos">
            <img
              src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678721656/kopy/JUGOS_NATURALES_cmkkn9.jpg"
              alt="jugos"
            />
            <h2>jugos</h2>
            <p>jugos</p>
            <div className="price-btn">
              <p>$2.000</p>
              <button>comprar</button>
            </div>
          </div>
          <div className="card-catalogo" data-aos="zoom-in" data-aos-duration="7000" data-catalogo="chocolates">
            <img
              src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678721660/kopy/chocolate-sin_xe70pb.jpg"
              alt="chocolate"
            />
            <h2>Cafe oscuro</h2>
            <p>Cafe termino oscuro</p>
            <div className="price-btn">
              <p>$2.000</p>
              <button>comprar</button>
            </div>
          </div>
          <div className="card-catalogo" data-aos="zoom-in" data-aos-duration="7000" data-catalogo="chocolates">
            <img
              src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678721660/kopy/chocolate_2_thkrdb.jpg"
              alt="chocolate"
            />
            <h2>Cafe oscuro</h2>
            <p>Cafe termino oscuro</p>
            <div className="price-btn">
              <p>$2.000</p>
              <button>comprar</button>
            </div>
          </div>
          <div className="card-catalogo" data-aos="zoom-in" data-aos-duration="7000" data-catalogo="chocolates">
            <img
              src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678721660/kopy/chocolate_mi0wv7.jpg"
              alt="chocolate"
            />
            <h2>Cafe oscuro</h2>
            <p>Cafe termino oscuro</p>
            <div className="price-btn">
              <p>$2.000</p>
              <button>comprar</button>
            </div>
          </div>
          <div className="card-catalogo" data-aos="zoom-in" data-aos-duration="7000" data-catalogo="chocolates">
            <img
              src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678721660/kopy/chocolate-sin_xe70pb.jpg"
              alt="chocolate"
            />
            <h2>Cafe oscuro</h2>
            <p>Cafe termino oscuro</p>
            <div className="price-btn">
              <p>$2.000</p>
              <button>comprar</button>
            </div>
          </div>
          <div className="card-catalogo" data-aos="zoom-in" data-aos-duration="7000" data-catalogo="chocolates">
            <img
              src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678721660/kopy/chocolate-sin_xe70pb.jpg"
              alt="chocolate"
            />
            <h2>Cafe oscuro</h2>
            <p>Cafe termino oscuro</p>
            <div className="price-btn">
              <p>$2.000</p>
              <button>comprar</button>
            </div>
          </div>
          <div className="card-catalogo" data-aos="zoom-in" data-aos-duration="7000" data-catalogo="desayunos">
            <img
              src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678721660/kopy/cale_fyjexs.webp"
              alt="desayunos"
            />
            <h2>desayunos</h2>
            <p>desayunos</p>
            <div className="price-btn">
              <p>$2.000</p>
              <button>comprar</button>
            </div>
          </div>
          <div className="card-catalogo" data-aos="zoom-in" data-aos-duration="7000" data-catalogo="desayunos">
            <img
              src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678721660/kopy/calentado_l9ohnj.jpg"
              alt="desayunos"
            />
            <h2>desayunos</h2>
            <p>desayunos</p>
            <div className="price-btn">
              <p>$2.000</p>
              <button>comprar</button>
            </div>
          </div>
          <div className="card-catalogo" data-aos="zoom-in" data-aos-duration="7000" data-catalogo="desayunos">
            <img
              src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678721661/kopy/desayunos_caqpds.jpg"
              alt="desayunos"
            />
            <h2>desayunos</h2>
            <p>desayunos</p>
            <div className="price-btn">
              <p>$2.000</p>
              <button>comprar</button>
            </div>
          </div>
          <div className="card-catalogo" data-aos="zoom-in" data-aos-duration="7000" data-catalogo="desayunos">
            <img
              src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678721662/kopy/huevo-frito_ab4gno.jpg"
              alt="desayunos"
            />
            <h2>desayunos</h2>
            <p>desayunos</p>
            <div className="price-btn">
              <p>$2.000</p>
              <button>comprar</button>
            </div>
          </div>
          <div className="card-catalogo" data-aos="zoom-in" data-aos-duration="7000" data-catalogo="desayunos">
            <img
              src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678721662/kopy/huevos-revueltos_rc9mhv.webp"
              alt="desayunos"
            />
            <h2>desayunos</h2>
            <p>desayunos</p>
            <div className="price-btn">
              <p>$2.000</p>
              <button>comprar</button>
            </div>
          </div>
          <div className="card-catalogo" data-aos="zoom-in" data-aos-duration="7000" data-catalogo="desayunos">
            <img
              src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678721656/kopy/perico_fyfttb.jpg"
              alt="desayunos"
            />
            <h2>desayunos</h2>
            <p>desayunos</p>
            <div className="price-btn">
              <p>$2.000</p>
              <button>comprar</button>
            </div>
          </div>
          <div className="card-catalogo" data-aos="zoom-in" data-aos-duration="7000" data-catalogo="desayunos">
            <img
              src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678829157/kopy/receta-desayuno-con-salchicha_goxw0r.jpg"
              alt="desayunos"
            />
            <h2>desayunos</h2>
            <p>desayunos</p>
            <div className="price-btn">
              <p>$2.000</p>
              <button>comprar</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
