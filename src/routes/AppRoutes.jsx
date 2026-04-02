import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Planos from "../pages/Planos";
import Calculoimc from "../pages/Calculoimc";
import Contato from "../pages/Contato";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/planos" element={<Planos />} />
        <Route path="/imc" element={<Calculoimc />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}
