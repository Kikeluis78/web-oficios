import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-orange-500 text-white shadow-md">
      <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row justify-between items-center">
        {/* Logo o nombre */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide hover:text-orange-100 transition"
        >
          Construccion Profesional Martínez
        </Link>

        {/* Navegación */}
        <nav className="flex gap-6 mt-4 sm:mt-0">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `transition font-medium ${
                isActive ? "text-orange-100 underline" : "hover:text-orange-100"
              }`
            }
          >
            Inicio
          </NavLink>
       
          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              `transition font-medium ${
                isActive ? "text-orange-100 underline" : "hover:text-orange-100"
              }`
            }
          >
            Contacto
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
