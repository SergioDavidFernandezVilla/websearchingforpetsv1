import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import IniciarSessionPage from "./pages/IniciarSessionPage";
import HomePage from "./pages/HomePage";
import RegistrarsePage from "./pages/RegistrarsePage";
import VeterinariasPage from "./pages/VeterinariasPage";
import ComunidadPage from "./pages/ComunidadPage";
import NotFound from "./pages/NotFound";
import AjustesPage from "./pages/AjustesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/veterinarias" element={<VeterinariasPage />} />
        <Route path="/comunidad" element={<ComunidadPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/iniciar-session" element={<IniciarSessionPage />} />
        <Route path="/register" element={<RegistrarsePage />} />
        <Route path="/ajustes" element={<AjustesPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
