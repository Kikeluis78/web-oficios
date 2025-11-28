
import { Building2 } from "lucide-react";
import { Link } from "react-router-dom";


const Banner = () => {
  return (
    <section className="relative text-white text-center py-20 md:py-24 overflow-hidden">
      {/* Fondo con collage de imágenes */}
      <div className="absolute inset-0 z-0">
        <div className="grid grid-cols-4 gap-1 w-full h-full opacity-60">
          <img src="/1.jpg" alt="Construcción 1" className="object-cover w-full h-full" />
          <img src="/3.jpg" alt="Construcción 2" className="object-cover w-full h-full" />
          <img src="/pagaladrillo.jpg" alt="Remodelación 3" className="object-cover w-full h-full" />
          <img src="/remodelacion.jpg" alt="Obra 4" className="object-cover w-full h-full" />
        </div>
        {/* Capa con degradado sutil para mejorar el contraste */}
        <div className="absolute inset-0 bg-linear-to-b from-orange-600/80 via-orange-700/70 to-orange-800/90"></div>

      </div>

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="inline-block p-4 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
          <Building2 className="w-16 h-16 md:w-20 md:h-20" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Albañilería Profesional
        </h1>
        <p className="text-lg md:text-xl mb-8 text-orange-50 max-w-2xl mx-auto drop-shadow-md">
          Experto en construcción, remodelación y acabados de calidad
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
       <Link
  to="/contacto"
  className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-300 shadow-md"
>
  Solicitar Cotización
</Link>

        </div>
      </div>
    </section>
  );
};

export default Banner;
