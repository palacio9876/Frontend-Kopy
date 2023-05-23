import React from "react";
import "../assets/css/CardDomi.css";

export const ArticleDomi = () => {

  return(
  
    <>
      <h1 className="title">Pedidios a Entregar</h1>

      <div className="cards">
        <div class="card-box">
          <div class="face front">
            <img
              src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678721662/kopy/huevos-revueltos_rc9mhv.webp"
              alt=""
            />
            <h3>Huevo Revuelto</h3>
          </div>
          <div class="face back">
            <h3>Precio $4500</h3>
            <p>
           pedido de el dia de hoy por el cliente Nicolas Mazo, Hora de entrega 8:20
            </p>
            <button className="tomar">Tomar pedido</button>
          </div>
        </div>

        <div class="card-box">
          <div class="face front">
            <img
              src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678721656/kopy/perico_fyfttb.jpg"
              alt=""
            />
            <h3>Huevo perico </h3>
          </div>
          <div class="face back">
            <h3>Precio $4500</h3>
            <p>
            pedido de el dia de hoy por el cliente Hernesto Perez, Hora de entrega 8:20
            </p>
            <button className="tomar">Tomar pedido</button>
          </div>
        </div>

        <div class="card-box">
          <div class="face front">
            <img
              src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678829157/kopy/receta-desayuno-con-salchicha_goxw0r.jpg"
              alt=""
            />
            <h3>Huevo con Salchcicha</h3>
          </div>
          <div class="face back">
            <h3>Precio $4500</h3>
            <p>
            pedido de el dia de hoy por el cliente Hernesto Perez, Hora de entrega 8:20 
            </p>
            <button className="tomar">Tomar pedido</button>
          </div>
        </div>
      </div>
    </>
  );
};
