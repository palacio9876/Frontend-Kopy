import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { Home } from "./pages/Home";
import { Catalogo } from "./pages/Catalogo.jsx";
import { Nosotros } from "./pages/Nosotros.jsx";
import { Register } from "./pages/Register.jsx";
import { Login } from "./pages/Login";
import { Error404 } from "./pages/Error404.jsx";
import { Helmet } from "react-helmet";
import { RecoverPasswordAdmin } from "./pages/RecoverPasswordAdmin";
import { Recover } from "./pages/Recover";
import { ProfileUser } from "./pages/ProfileUser";
import { RegisterAdmin } from "./pages/RegisterAdmin";
import { LoginAdmin } from "./pages/LoginAdmin";
import { AddProduct } from "./pages/AddProduct";
import { RecoverAdmin } from "./pages/RecoverAdmin";
import { RecoverPassword } from "./pages/recoverPassword"
import { DomiCar } from "./pages/DomiCar"
import { HomeAdmin } from "./pages/HomeAdmin"
import { RegisterDomiciliario } from "./pages/RegisterDomiciliario";
import { PinAdmin } from "./pages/PinAdmin";
import {ProtectedRoute} from "./Components/ProtectedRoute";
import { useLocalStorage } from "react-use";
import { Buys } from './pages/Buys';
import ContextCart from "./context/ContextCart";
import UserList from "./pages/userList";



function App() {


   const [user, setUser] = useLocalStorage('user'); 

  return (
    <div className="App">
      <Helmet>
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/dyhfwq81d/image/upload/v1685967326/2_xgzihz.jpg"
        />
        <title>Kopy</title>
      </Helmet>
        <ContextCart>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/catalogo/:product" element={<Catalogo />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recoverpassword" element={<RecoverPassword />} />
        <Route path="/recoverpasswordAdmin" element={<RecoverPasswordAdmin />} />
         <Route path="/registerAdmin" element={<RegisterAdmin />} />
         <Route element={<ProtectedRoute canActivate={user} redirectPath="/pinAdmin"/>}>
         <Route path="/homeAdmin" element={<HomeAdmin />} />
        </Route>
        <Route path="/loginAdmin" element={<LoginAdmin />} />
        <Route path="/recoverAdmin" element={<RecoverAdmin />} />
        <Route path="/recover" element={<Recover />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProfileUser />} />


        <Route path="/buys" element={<Buys/>} />



        <Route path="/addProduct" element={<AddProduct />} /> 
      
        <Route path="/domiCar" element={<DomiCar />} />
        
        <Route path="/registerDomiciliario" element={<RegisterDomiciliario />} />


        <Route path="/PinAdmin" element={<PinAdmin/>}/>
        <Route path="/userList" element={<UserList/>}/>
        


        <Route path="*" element={<Error404 />} />
      </Routes>
        </ContextCart>
    </div>
  );
}

export default App;