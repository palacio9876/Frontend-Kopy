import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { Home } from "./pages/Home";
import { Catalogo } from "./pages/Catalogo.jsx";
import { Nosotros } from "./pages/Nosotros.jsx";
import { Error404 } from "./pages/Error404.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <div className="bg-blue-500">Hello, world!</div>
      
      </div>
  );
}

export default App;
