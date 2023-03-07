import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { Home } from "./pages/Home";
import { Catalogo } from "./pages/Catalogo.jsx";
import { Categorias } from "./pages/Categorias";
import { Nosotros } from "./pages/Nosotros.jsx";
import { NotNull } from "./pages/NotNull.jsx";

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="*" element={<NotNull />} />
      </Routes>
    </div>
  );
}

export default App;
