import React, { useContext, useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { HeaderCliente } from "../layouts/Header/HeaderCliente";
import { Header } from "../layouts/Header/Header";
import { Footer } from "../layouts/Footer/Footer";
import axios from "axios";
import { contextKopy } from "../context/ContextCart";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink, useNavigate } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51MyDPuD7xwBecERveSCg9jpJLEtgGAwMkXjrx4THLT9QIc82suOAyC4caG8ZHbBj9oVovJGXW7xPfkqqTQcpHzDn00cTqVbT9n"
);

export const CheckoutForm = ({
  amountCart,
  nombre,
  cc,
  email,
  errors,
  setErrors,
  clearFormFields,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const context = useContext(contextKopy);
  const [loading, setLoading] = useState(false);
  let rol = localStorage.getItem("rol");

  const navigate = useNavigate();

  const redirectToLogin = () => {
    navigate("/login");
  };

  useEffect(() => {
    if (rol === null) {
      redirectToLogin();
    }
  }, [rol]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación de campos
    const newErrors = {};

    if (nombre.trim() === "") {
      newErrors.nombre = "El nombre es requerido";
    }

    if (cc.trim() === "") {
      newErrors.cc = "El número de C.C. es requerido";
    }

    if (email.trim() === "") {
      newErrors.email = "El correo electrónico es requerido";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      // Hay errores, no se procede con el pago
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    setLoading(true);

    if (!error) {
      const { id } = paymentMethod;

      try {
        const { data } = await axios.post("http://localhost:3020/buy/compra", {
          id,
          amount: context.amount,
          nombre,
          cc,
          email,
        });
        toast.success("Pago exitoso, revisa tu correo", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        elements.getElement(CardElement).clear();
        clearFormFields(); // Limpia los campos del formulario
        setErrors({});
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
        console.log("su compra fue de: ", context.amount);
      } catch (error) {
        if (error.response && error.response.data.error) {
          toast.error(error.response.data.error.message);
        } else {
          toast.error("Ha ocurrido un error durante el pago");
        }
      }
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Numero de tarjeta
      </label>
      <CardElement className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />

      <div className="flex items-center justify-center mt-6">
        <button
          className="bg-brown-kopy hover:bg-brown-kopy text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          disabled={!stripe}
        >
          {loading ? "Procesando..." : "Pagar"}
        </button>
      </div>

      {errors.nombre && (
        <span className="text-red-500 inline-block">{errors.nombre}</span>
      )}
      {errors.cc && (
        <span className="text-red-500 inline-block">{errors.cc}</span>
      )}
      {errors.email && (
        <span className="text-red-500 inline-block">{errors.email}</span>
      )}
    </form>
  );
};

export const Buys = () => {
  let rol = localStorage.getItem("rol");

  const [nombre, setNombre] = useState("");
  const [cc, setCc] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleCcChange = (event) => {
    setCc(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const clearFormFields = () => {
    setNombre("");
    setCc("");
    setEmail("");
  };

  return (
    <>
      {rol === null ? <Header /> : <HeaderCliente />}
      <Elements stripe={stripePromise}>
        <div className="max-w-sm mx-auto">
          <div className="bg-white shadow-md rounded  px-8 pt-6 pb-8 mb-4">
            <div className="flex gap-7">
              <div className="flex flex-col w-full">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Nombre
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline inline"
                    id="name"
                    type="text"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={handleNombreChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    C.C.
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline inline"
                    id="id"
                    type="text"
                    placeholder="C.C."
                    value={cc}
                    onChange={handleCcChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline inline"
                    id="email"
                    type="email"
                    placeholder="Correo Electrónico"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                </div>
                <CheckoutForm
                  nombre={nombre}
                  cc={cc}
                  email={email}
                  errors={errors}
                  setErrors={setErrors}
                  clearFormFields={clearFormFields}
                />
              </div>
            </div>
          </div>
        </div>
      </Elements>
      <ToastContainer />
      <Footer />
    </>
  );
};
