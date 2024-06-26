import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import IniciarSessionPage from "./pages/IniciarSessionPage";
import HomePage from "./pages/HomePage";
import RegistrarsePage from "./pages/RegistrarsePage";
import VeterinariasPage from "./pages/VeterinariasPage";
import VoluntariosPage from "./pages/VoluntariosPage";
import NotFound from "./pages/NotFound";
import AjustesPage from "./pages/AjustesPage";
import UrgenciasPage from "./pages/UrgenciasPage";
import DetallePostUrgencias from "./components/DetallePostUrgenciasComponent";
import SharePostPage from "./pages/SharePostPage";
import PostDetailPage from "./pages/PostDetailPage";
import PostDetailVeterinaria from "./pages/PostDetailVeterinaria";
import AboutPage from "./pages/AboutPage";
import VisionPage from "./pages/VisionPage";
import MisionPage from "./pages/MisionPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/share" element={<SharePostPage />} />
        <Route path="/veterinarias" element={<VeterinariasPage />} />
        <Route path="/voluntarios" element={<VoluntariosPage />} />

        <Route path="/post/:slug" element={<PostDetailPage />} />
        <Route
          path="/post/veterinaria/:slug"
          element={<PostDetailVeterinaria />}
        />

        {/* Movemos la ruta de DetallePostUrgencias dentro del Routes */}
        <Route path="/urgencias" element={<UrgenciasPage />} />
        <Route
          path="/detalles-post-urgencias/:id"
          element={<DetallePostUrgencias />}
        />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/iniciar-session" element={<IniciarSessionPage />} />
        <Route path="/register" element={<RegistrarsePage />} />
        <Route path="/ajustes" element={<AjustesPage />} />
        <Route path="/acerca-nosotros" element={<AboutPage />}></Route>
        <Route path="/mision" element={<MisionPage />}></Route>
        <Route path="/vision" element={<VisionPage />}></Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
