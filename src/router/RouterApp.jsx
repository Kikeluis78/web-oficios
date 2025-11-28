import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

import Contacto from "../pages/Contacto";

function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
       
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterApp;
