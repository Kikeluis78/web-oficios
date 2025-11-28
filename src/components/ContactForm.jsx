import { useState } from "react";
import { TextField, Button, CircularProgress, MenuItem } from "@mui/material";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const enviar = (e) => {
    e.preventDefault();
    const { nombre, telefono, asunto, mensaje } = formData;

    if (!nombre || !telefono || !asunto || !mensaje) {
      Swal.fire({
        icon: "warning",
        title: "Campos incompletos",
        text: "Por favor completa todos los campos.",
        confirmButtonColor: "#f97316",
      });
      return;
    }

    if (mensaje.length > 500) {
      Swal.fire({
        icon: "warning",
        title: "Mensaje demasiado largo",
        text: "La descripción debe tener máximo 500 caracteres.",
        confirmButtonColor: "#f97316",
      });
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      Swal.fire({
        icon: "success",
        title: "¡Mensaje enviado!",
        html: `
          <p><b>Nombre:</b> ${nombre}</p>
          <p><b>Teléfono:</b> ${telefono}</p>
          <p><b>Servicio requerido:</b> ${asunto}</p>
          <p>Gracias por contactarnos. Te responderemos pronto.</p>
        `,
        confirmButtonColor: "#f97316",
      });

      setFormData({ nombre: "", telefono: "", asunto: "", mensaje: "" });
    }, 1500);
  };

  return (
    <form onSubmit={enviar} data-aos="fade-up">
      {/* Nombre */}
      <div className="mb-10">
        <TextField
          label="Nombre completo"
          name="nombre"
          variant="outlined"
          fullWidth
          value={formData.nombre}
          onChange={handleChange}
        />
      </div>

      {/* Teléfono */}
      <div className="mb-10">
        <TextField
          label="Número de teléfono"
          name="telefono"
          type="tel"
          variant="outlined"
          fullWidth
          value={formData.telefono}
          onChange={handleChange}
        />
      </div>

      {/* Asunto / Tipo de trabajo */}
      <div className="mb-10">
        <TextField
          select
          label="¿Qué servicio necesitas?"
          name="asunto"
          variant="outlined"
          fullWidth
          value={formData.asunto}
          onChange={handleChange}
        >
          <MenuItem value="Remodelación">Necesito una cotización para una remodelación</MenuItem>
          <MenuItem value="Construcción">Necesito una cotización para una construcción</MenuItem>
          <MenuItem value="Otro">Otro</MenuItem>
        </TextField>
      </div>

      {/* Mensaje */}
      <div className="mb-10">
        <TextField
          label="Descripción de lo que necesitas"
          name="mensaje"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          inputProps={{ maxLength: 500 }}
          value={formData.mensaje}
          onChange={handleChange}
        />
        <p className="text-right text-sm text-gray-500 mt-1">
          {formData.mensaje.length} / 500
        </p>
      </div>

      <div className="pt-6">
        <Button
          type="submit"
          variant="contained"
          fullWidth
          size="large"
          disabled={loading}
          sx={{
            backgroundColor: "#f97316",
            "&:hover": { backgroundColor: "#ea580c" },
            borderRadius: "0.75rem",
            paddingY: "0.75rem",
            fontWeight: 600,
            fontSize: "1rem",
          }}
        >
          {loading ? <CircularProgress size={26} color="inherit" /> : "Enviar solicitud"}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
