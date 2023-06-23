import React, { useContext, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import { HeaderCliente } from "../layouts/Header/HeaderCliente";
import { Header } from "../layouts/Header/Header";
import { Footer } from "../layouts/Footer/Footer";
import axios from "axios";
import { contextKopy } from "../context/ContextCart";

const stripePromise = loadStripe(
  "pk_test_51MyDPuD7xwBecERveSCg9jpJLEtgGAwMkXjrx4THLT9QIc82suOAyC4caG8ZHbBj9oVovJGXW7xPfkqqTQcpHzDn00cTqVbT9n"
);

export const CheckoutForm = ({ amountCart }) => {
  const stripe = useStripe();
  const elements = useElements();
  const context = useContext(contextKopy);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

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
        });
        // console.log(data);
        elements.getElement(CardElement).clear();
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
  };
  console.log(context.amount);
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
    </form>
  );
};

export const Buys = () => {
  let rol = localStorage.getItem("rol");
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
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Nombre"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    C.C.
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="id"
                    type="text"
                    placeholder="C.C."
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Correo Electrónico"
                    required
                  />
                </div>
                <CheckoutForm />
              </div>
            </div>
          </div>
        </div>
      </Elements>
      <Footer />
    </>
  );
};
