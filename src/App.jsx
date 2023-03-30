import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { Home } from "./pages/Home";
import { Catalogo } from "./pages/Catalogo.jsx";
import { Nosotros } from "./pages/Nosotros.jsx";
import {Register} from "./pages/Register.jsx";
import {Login} from "./pages/Login"
import { Error404 } from "./pages/Error404.jsx";
import { Helmet } from "react-helmet";
import {Recuerarpassword}  from "./pages/Recuerar-password";
import { Recuperar } from "./pages/Recuperar";

function App() {
  return (
    <div className="App">
      <Helmet>
        <link className="logo-pestaña" rel="shortcut icon" href="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678978391/kopy/K_2_v9swkk.png" />
        <title>Kopy</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/recuperar" element={<Recuerarpassword/>} />
        <Route path="/recover" element={<Recuperar/>} />


        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      
      </div>
  );
}

export default App;
