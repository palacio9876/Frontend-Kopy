import React from "react";
import { Footer } from "../layouts/Footer/Footer";
import { Header } from "../layouts/Header/Header";
import "../assets/css/Investiga.css"

export const Nosotros = () => {
  return (
    <>
      <Header />

      <main className="bg-[#e6c6a380]">

      <div className="grid grid-cols-3">
      
      <div  className="w-82 ml-10 mb-10 pl-5 h-100 mt-10 bg-[#aa733d66]">
        
      <h1 className="text-red-700 mt-8 text-3xl mb-10">¿Porque Nosotros?</h1>

      <p className="mr-10">Brindamos un ambiente seguro y agradable para todos nuestros clientes y trabajar con nuestros clientes para lograr los resultados de los servicios que solicitan,
        la empresa Kopy es una cafetería que busca mejorar la experiencia de compra de sus clientes a través de un sistema web que les permita ver el catálogo de productos,
        comprar y evitar filas en la tienda física. La empresa tiene como objetivo aumentar sus ventas y conseguir reconocimiento a través de una presencia en línea.
        La visión de la empresa Kopy podría ser: "Ser la cafetería líder en el mercado local y nacional, ofreciendo una experiencia de compra única e innovadora a través de nuestro
        sistema web, donde nuestros clientes pueden ver nuestro catálogo de productos, realizar compras y disfrutar de nuestros servicios en línea y en nuestras tiendas físicas".
        La empresa busca diferenciarse de su competencia ofreciendo una forma más eficiente y
        cómoda de comprar sus productos, lo que les permitiría aumentar su base de clientes y su rentabilidad.</p>

        </div>




        <div>

          <h2 className="text-4xl ml-14 mt-10  mb-8 font-sans text-[#a52a2a]"> Sobre nosotros</h2>

          <div className="w-380 h-700 ml-70 mt-10">

          

          <p className="w-380 h-700 pt-10 ml-10 font-arial mr-10 mb-7 pl-6  pr-2 pb-10 bg-[#bb742d66] ">

            <p className="text-2xl text-[#000000]">Vision</p>

          Como equipo de análisis y desarrollo de sistemas de información, nos enfocamos en resolver grandes problemas de la industria a través de la innovación 
          y la aplicación de nuevas tecnologías. En el caso específico de la cafetería Kopy, buscamos desarrollar un sistema web que permita a los usuarios ver y 
          comprar los productos de la cafetería en línea, y que al mismo tiempo genere un mayor reconocimiento y presencia de la empresa en la web.
          Nuestro equipo está conformado por expertos en diferentes áreas de la tecnología y del desarrollo de software, y estamos comprometidos con brindar 
          soluciones de calidad y adaptadas a las necesidades específicas de nuestros clientes. En el caso de Kopy, 
          trabajaremos en estrecha colaboración con la empresa para entender sus necesidades y 
          ofrecer un sistema web innovador y eficiente que les permita aumentar sus ventas y mejorar la experiencia de sus clientes.

          </p>

          </div>

          </div>

          <div className="ml-30 mt-10  w-380 h-700  mr-10 pt-10 pl-10 mb-10 pr-10 bg-[#47342166]">

          <p className="text-2xl text-[#000000]">Mision</p>
          
          misión de la empresa la empresa Kopy es una cafetería que busca mejorar la experiencia de compra de sus clientes a través de un sistema 
          web que les permita ver el catálogo de productos, comprar y evitar filas en la tienda física. La empresa tiene como objetivo aumentar sus ventas
           y conseguir reconocimiento a través de una presencia en línea parece ser clara y específica, ya que se enfoca en mejorar la experiencia del cliente 
           a través de la implementación de una plataforma en línea. La empresa busca satisfacer las necesidades y demandas de los clientes al ofrecer una forma 
           más eficiente.

          </div>
          

        <div >

        </div>
          
        </div>

      
         





      <Footer />
      </main>
    </>
  );
};
