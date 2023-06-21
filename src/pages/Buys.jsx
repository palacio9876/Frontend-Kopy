import React from "react";
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

const stripePromise = loadStripe(
  "pk_test_51MyDPuD7xwBecERveSCg9jpJLEtgGAwMkXjrx4THLT9QIc82suOAyC4caG8ZHbBj9oVovJGXW7xPfkqqTQcpHzDn00cTqVbT9n"
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex  flex-col">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Numero de tarjeta
          </label>
          <CardNumberElement className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Fecha de Vencimiento
          </label>
          <CardExpiryElement className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            CVV
          </label>
          <CardCvcElement className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
      </div>
    </form>
  );
};

export const Buys = () => {
  return (
    <>
      <Header />
      <Elements stripe={stripePromise}>
        <div className="max-w-lg mx-auto">
          <form className="bg-white shadow-md rounded  px-8 pt-6 pb-8 mb-4">
            <div className="flex gap-7">
              <div className="flex flex-col">
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
                    ID
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="id"
                    type="text"
                    placeholder="ID"
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
              </div>
              <CheckoutForm />
            </div>
            <div className="flex items-center justify-center mt-6">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Pagar
              </button>
            </div>
          </form>
        </div>
      </Elements>
      <Footer />
    </>
  );
};
