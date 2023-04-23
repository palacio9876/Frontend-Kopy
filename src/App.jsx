import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { Home } from "./pages/Home";
import { Catalogo } from "./pages/Catalogo.jsx";
import { Nosotros } from "./pages/Nosotros.jsx";
import { Register } from "./pages/Register.jsx";
import { Login } from "./pages/Login";
import { Error404 } from "./pages/Error404.jsx";
import { Helmet } from "react-helmet";
import { RecoverPassword } from "./pages/recoverPassword";
import { Recover } from "./pages/Recover";
import { RegisterAdmin } from "./pages/RegisterAdmin";
import { LoginAdmin } from "./pages/LoginAdmin";

function App() {
  return (
    <div className="App">
      <Helmet>
        <link
          className="logo-pestaña"
          rel="shortcut icon"
          href="https://res.cloudinary.com/dyhfwq81d/image/upload/v1678978391/kopy/K_2_v9swkk.png"
        />
        <title>Kopy</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registerAdmin" element={<RegisterAdmin />} />
        <Route path="/recoverpassword" element={<RecoverPassword />} />
        <Route path="/recover" element={<Recover />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginAdmin" element={<LoginAdmin />} />

        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
