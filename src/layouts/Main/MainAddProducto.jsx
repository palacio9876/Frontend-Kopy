import React from "react";

export const MainAddProducto = () => {
  return (
    <main className="bg-pink-kopy h-full">
      <h1 className="text-orange-kopy">Agregar un producto</h1>
      <form action="" method="post">
        <p>Nombre del producto:</p>
        <input type="text" name="name" id="name" placeholder="name"/>
        <p>Precio:</p>
        <input type="number" name="price" id="price" placeholder="price"/>
        <p>Descripcion:</p>
        <input type="text" name="descripcion" id="descripcion" placeholder="descripcion"/>
        <p>Elige la categoria que pertenece el producto: </p>
        <select name="categoria" id="categoria">
            <option value="cafe">Café</option>
            <option value="panaderia">Panaderia</option>
            <option value="bebidas">Bebidas frias</option>
            <option value="chocolates">Chocolates</option>
            <option value="desayunos">Desayunos</option>
        </select>
        <p>Imagen del producto:</p>
        <input type="file" name="image" id="image" placeholder="image"/>
      </form>
    </main>
  );
};
