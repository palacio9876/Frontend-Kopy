import React, { useState, useEffect } from "react";
import { Footer } from "../layouts/Footer/Footer";
import "../assets/css/buys.css";
import axios from "axios";


import { Header } from "../layouts/Header/Header";
import { HeaderCliente } from "../layouts/Header/HeaderCliente";

export const Buys = () => {
  let rol = localStorage.getItem("rol");


 // const [data, setData] = useState({
   // id: "",
   // nombre: "",
   // email: "",
   // telefono: "",
    //direccion: "",
  //});
  
  

  //useEffect(() => {

   // (() => {
     // axios
      //  .get(
          // `http://localhost:3020/user/profile`
          //`https://kopy-backend.up.railway.app/user/profile`
          //, {
            //headers: {
             // Authorization: token,

           // },
        //  })
       // .then((res) => {
         // console.log(res);
          //console.log(res.data);
          //setData(res.data);
       // })
       // .catch((error) => {
          //console.log(error);
       // });
   // })();
 // }, []);

  return (

    
    <>
      {rol === null ? <Header /> : <HeaderCliente />}

      <div className="cuadro">

    <div className="caja1">
      <h1>Informacion del cliente</h1>
      <input className="datos" type="email" placeholder="  Correo electronio"></input>
      <input className="datos" type="text" placeholder="  Nombre" required></input>
      <input className="datos" type="text" placeholder="  Apellido" required></input>
      <input className="datos" type="text" placeholder="  Identificacion" required></input>
      <input className="datos" type="tel" placeholder="  Telefono" required></input>
      <label className="checkbox">
        <input type="checkbox" />
        <span className="checkmark"></span>
           Autorizo el uso de mis datos personales.
      </label>
    </div>

    <div className="caja2">

      <h2>Datos del envio</h2>

      
    <select className="municipios">
    <option value="armenia">Armenia</option>
    <option value="calarca">Calarcá</option>
    <option value="circasia">Circasia</option>
    <option value="la-tebaida">La Tebaida</option>
    <option value="montenegro">Montenegro</option>
    <option value="salento">Salento</option>
    <option value="filandia">Filandia</option>
    <option value="buenavista">Buenavista</option>
    <option value="pijao">Pijao</option>
    <option value="cordoba">Cordoba</option>
    <option value="genova">Genova</option>
    <option value="quimbaya">Quimbaya</option>
    
  </select>
      <input className="datos" placeholder="Barrio" required></input>
      <input className="datos" placeholder="Direccion" required></input>
      </div>

      <div className="caja3">
      <h3>Datos de pago</h3>
       
          <p className="mediosDepago">Medios de pago</p>
          <select className="medi">
    <option value="tarjeta-credito">Tarjeta de crédito</option>
    <option value="tarjeta-debito">Tarjeta de débito</option>
    <option value="paypal">PayPal</option>
    <option value="transferencia-bancaria">Transferencia bancaria</option>
    <option value="Nequi">Nequi</option>
  </select>

  <button>Enviar</button>
      </div> 
      </div>
     
      <Footer />
    </>
  );
};
