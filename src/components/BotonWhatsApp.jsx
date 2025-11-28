import React, { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Fab, Tooltip, Zoom } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

const BotonWhatsApp = () => {
  // Inicializar AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="fixed bottom-6 right-6 z-50"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <Tooltip
        title="¡Chatea con nosotros!"
        placement="left"
        TransitionComponent={Zoom}
      >
        <Fab
          color="success"
          aria-label="whatsapp"
          href="https://wa.me/521234567890?text=¡Hola!%20Estoy%20interesado%20en%20sus%20servicios."
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            backgroundColor: "#25D366",
            color: "#fff",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
            "&:hover": {
              backgroundColor: "#20b358",
              transform: "scale(1.1)",
            },
            transition: "all 0.3s ease-in-out",
          }}
        >
          <FaWhatsapp size={28} />
        </Fab>
      </Tooltip>
    </div>
  );
};

export default BotonWhatsApp;
