import React from "react";
import { Footer } from "../layouts/Footer/Footer";
import "../assets/css/Investiga.css";

import { Header } from "../layouts/Header/Header";
import { HeaderCliente } from "../layouts/Header/HeaderCliente";

export const Nosotros = () => {
  
  let rol = localStorage.getItem('rol')
  
  
  return (
    <>
    {
        rol === null ? <Header /> : <HeaderCliente />
    }
      <main className="bg-pink-kopy p-9 flex flex-col gap-5">
        <h1 className="text-center text-5xl text-brown-kopy">Sobre nosotros</h1>
        <div className="grid grid-cols-3">
          <div className="p-9 bg-brown-kopy text-center font-medium rounded-3xl">
            <h1 className="text-orange-kopy text-3xl mb-5">
              ¿Porque Nosotros?
            </h1>
            <p className="text-pink-kopy ">
              Brindamos un ambiente seguro y agradable para todos nuestros
              clientes y trabajar con nuestros clientes para lograr los
              resultados de los servicios que solicitan, la empresa Kopy es una
              cafetería que busca mejorar la experiencia de compra de sus
              clientes a través de un sistema web que les permita ver el
              catálogo de productos, comprar y evitar filas en la tienda física.
              La empresa tiene como objetivo aumentar sus ventas y conseguir
              reconocimiento a través de una presencia en línea. La visión de la
              empresa Kopy podría ser: "Ser la cafetería líder en el mercado
              local y nacional, ofreciendo una experiencia de compra única e
              innovadora a través de nuestro sistema web, donde nuestros
              clientes pueden ver nuestro catálogo de productos, realizar
              compras y disfrutar de nuestros servicios en línea y en nuestras
              tiendas físicas". La empresa busca diferenciarse de su competencia
              ofreciendo una forma más eficiente y cómoda de comprar sus
              productos, lo que les permitiría aumentar su base de clientes y su
              rentabilidad.
            </p>
          </div>
          <div>
            <div className="w-380 h-700 ml-70 mt-10 text-center rounded-3xl">
              <h1 className="text-2xl text-orange-kopy font-medium">Vision</h1>
              <p className="w-380 h-700 pt-10 ml-10 font-arial mr-10 mb-7 pl-6  pr-2 pb-10 ">
                Como equipo de análisis y desarrollo de sistemas de información,
                nos enfocamos en resolver grandes problemas de la industria a
                través de la innovación y la aplicación de nuevas tecnologías.
                En el caso específico de la cafetería Kopy, buscamos desarrollar
                un sistema web que permita a los usuarios ver y comprar los
                productos de la cafetería en línea, y que al mismo tiempo genere
                un mayor reconocimiento y presencia de la empresa en la web.
                Nuestro equipo está conformado por expertos en diferentes áreas
                de la tecnología y del desarrollo de software, y estamos
                comprometidos con brindar soluciones de calidad y adaptadas a
                las necesidades específicas de nuestros clientes. En el caso de
                Kopy, trabajaremos en estrecha colaboración con la empresa para
                entender sus necesidades y ofrecer un sistema web innovador y
                eficiente que les permita aumentar sus ventas y mejorar la
                experiencia de sus clientes.
              </p>
            </div>
          </div>

          <div className="p-11 bg-brown-kopy text-center font-medium flex flex-col gap-8 rounded-3xl">
            <h1 className="text-2xl text-orange-kopy font-medium">Mision</h1>
            <p className="text-pink-kopy ">
              misión de la empresa la empresa Kopy es una cafetería que busca
              mejorar la experiencia de compra de sus clientes a través de un
              sistema web que les permita ver el catálogo de productos, comprar
              y evitar filas en la tienda física. La empresa tiene como objetivo
              aumentar sus ventas y conseguir reconocimiento a través de una
              presencia en línea parece ser clara y específica, ya que se enfoca
              en mejorar la experiencia del cliente a través de la
              implementación de una plataforma en línea. La empresa busca
              satisfacer las necesidades y demandas de los clientes al ofrecer
              una forma más eficiente.
            </p>
          </div>

          <div></div>
        </div>
      </main>
      <Footer />
    </>
  );
};
