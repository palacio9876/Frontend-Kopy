import { NavLink } from "react-router-dom";
  export const Header = () => {
    
  return (
    
      <header className="bg-brown-kopy h-40 flex justify-between items-center px-[5%]">
        
          <img className="w-40"
            src="https://res.cloudinary.com/dyhfwq81d/image/upload/v1685967057/Kopy_tfpadn.jpg"
          />
      
        <nav>
          <ul className="flex items-center justify-center flex-wrap">
            <li className="mx-1.5 my-0 list-none uppercase hover:font-bold">
              <NavLink
                className="text-pink-kopy no-underline text-xl hover:text-orange-kopy"
                to="/"
              >
                Inicio
              </NavLink>
            </li>
            <li className="mx-1.5 my-0 list-none uppercase hover:font-bold">
              <NavLink
                className="text-pink-kopy no-underline text-xl hover:text-orange-kopy"
                to="/catalogo"
              >
                Catálogo
              </NavLink>
            </li>
            <li className="mx-1.5 my-0 list-none uppercase hover:font-bold">
              <NavLink
                className="text-pink-kopy no-underline text-xl hover:text-orange-kopy"
                to="/nosotros"
              >
                Nosotros
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex justify-center items-center flex-wrap gap-2.5 font-roboto text-center w-34">
            <>
              <NavLink
              
                to="/login"
                className="relative uppercase no-underline p-2.5 rounded-2xl border-solid border-orange-kopy border-2 font-medium text-orange-kopy"
              >
                Iniciar sesion
              </NavLink>
              <NavLink

                to="/register"
                className="relative uppercase no-underline p-2.5 rounded-2xl  border-solid border-pink-kopy border-2 font-medium text-pink-kopy"
              >
                Registro
              </NavLink>
            </> 
        </div>
      </header>
    ); 
  };
