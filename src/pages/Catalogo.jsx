import { useState } from 'react';
import { Footer } from "../layouts/Footer/Footer.jsx";
import { Header } from "../layouts/Header/Header.jsx";
import "../assets/css/Catalogo.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Cart } from '../Components/Cart.jsx';
import { ProductList } from '../Components/ProductList.jsx';

export const Catalogo = () => {

  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  AOS.init(
    
  );
  return (
    <>
      <Header />

    
      <main className="main-catalogo">
        <h1 className="text-center text-5xl text-[color:var(--brown)]">Catalogo</h1>

        <Cart
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/>
      
        <div className="btns-catalogo">
          <button className="todo btn-catalogo">Todo</button>
          <button className="cafe btn-catalogo">Café</button>
          <button className="panaderia btn-catalogo">Panaderia</button>
          <button className="jugos btn-catalogo">Jugos</button>
          <button className="chocolates btn-catalogo">Chocolates</button>
          <button className="desayunos btn-catalogo">Desayunos</button>
        </div>

        

        <div className="cards-container">
       

       

			<ProductList
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/>

        </div>
      </main>
      <Footer />
    </>
  );
};
