import React from "react";
import { Header } from "../layouts/Header/Header";
import { Footer } from "../layouts/Footer/Footer";

export const ProfileUser = () => {
  console.log("profile");
  return (
    <>
      <Header />
      <main className="py-6 px-16 bg-[color:var(--pink)]">
        <div className="flex flex-row items-stretch py-8 px-5 bg-[color:var(--brown)] rounded-2xl">
          <div className="flex flex-col w-1/5 rounded-2xl border-[--brown] bg-[color:var(--pink)]">
            <div className="flex p-2 gap-7 items-center justify-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/64/64572.png"
                alt=""
                className="w-12 "
              />
              <div className="flex flex-col">
                <p className="">Mi perfil</p>
                <p className="flex flex-wrap text-[color:var(--orange)] font-semibold text-xl">
                  -Nombre-
                </p>
              </div>
            </div>
            <div className="flex border-solid border-y-2 px-2 border-[color:var(--brown)] py-3 gap-2 items-center">
              <i class="bx bx-cog bx-spin"></i>
              <p>Ajustes de cuenta</p>
            </div>
            <div className="flex border-solid border-b-2 border-[color:var(--brown)] px-2 py-3 gap-2 items-center">
              <i class="bx bx-help-circle bx-tada"></i>
              <p>Centro de ayuda</p>
            </div>
            <div className="flex border-solid border-b-2 px-2 border-[color:var(--brown)] py-3 gap-2 items-center">
              <i class="bx bx-cog bx-spin"></i>
              <p>Eliminar cuenta</p>
            </div>
            <div className="flex border-solid px-2 py-3 gap-2 border-b-2 border-[color:var(--brown)] items-center">
              <i class="bx bx-window-close"></i>
              <p>Cerrar sesion</p>
            </div>
          </div>
          <div className="flex flex-col flex-wrap rounded-2xl border-solid border-2 px-2 py-3 gap w-4/5 ml-5 bg-[color:var(--pink)] gap-8">
            <p className="text-[color:var(--orange)] text-center text-2xl font-semibold">
              Informacion de tu cuenta
            </p>
            <div className="flex flex-wrap gap-4">
              <fieldset className="w-[49%]">
                <label for="" className="text-gray-500">
                  Nombre
                </label>
                <input
                  type="text"
                  className="w-full py-4 px-3 border-b-2 border-[color:var(--brown)] bg-transparent "
                />
              </fieldset>
              <fieldset className="w-[49%]">
                <label for="" className="text-gray-500">
                  Apellido
                </label>
                <input
                  type="text"
                  className="w-full py-4 px-3 border-b-2 border-[color:var(--brown)] bg-transparent "
                />
              </fieldset>
              <fieldset className="w-[49%]">
                <label for="" className="text-gray-500">
                  Correo Electronico
                </label>
                <input
                  type="text"
                  className="w-full py-4 px-3 border-b-2 border-[color:var(--brown)] bg-transparent "
                />
              </fieldset>
              <fieldset className="w-[49%]">
                <label for="" className="text-gray-500">
                  Celular
                </label>
                <input
                  type="number"
                  className="w-full py-4 px-3 border-b-2 border-[color:var(--brown)] bg-transparent "
                />
              </fieldset>
              <fieldset className="w-[49%]">
                <label for="" className="text-gray-500">
                  Direccion
                </label>
                <input
                  type="text"
                  className="w-full py-4 px-3 border-b-2 border-[color:var(--brown)] bg-transparent "
                />
              </fieldset>
            </div>
            <button className="btn-main">
            <span>
              <a>Actualizar datos</a>
            </span>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
          </div>
          
        </div>
      </main>
      <Footer />
    </>
  );
};
