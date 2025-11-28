import React from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Columna 1: Marca */}
          <div>
            <h2 className="text-2xl font-bold mb-3 text-orange-400">
              Albañilería Profesional Martínez
            </h2>
            <p className="text-gray-400">
              Expertos en construcción, remodelación y acabados de calidad.
              <br />
              Más de 10 años ofreciendo resultados garantizados.
            </p>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-orange-400">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#servicios" className="hover:text-orange-400 transition">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-orange-400 transition">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#sobre-nosotros" className="hover:text-orange-400 transition">
                  Sobre Nosotros
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Redes sociales */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-orange-400">
              Síguenos
            </h3>
            <div className="flex justify-center md:justify-start gap-5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-orange-400 transition"
              >
                <FaFacebook size={26} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-orange-400 transition"
              >
                <FaInstagram size={26} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-orange-400 transition"
              >
                <FaTiktok size={26} />
              </a>
              <a
                href="https://wa.me/521234567890?text=Hola!%20Estoy%20interesado%20en%20sus%20servicios."
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-orange-400 transition"
              >
                <FaWhatsapp size={26} />
              </a>
            </div>
          </div>
        </div>

        {/* Línea separadora */}
        <div className="border-t border-gray-700 my-8" />

        {/* Créditos */}
        <p className="text-gray-500 text-center text-sm">
          © 2025 <span className="text-orange-400">Elaborado por</span>{" "}
          <span className="text-orange-300 font-semibold">Enrique Vargas</span>.
          Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
