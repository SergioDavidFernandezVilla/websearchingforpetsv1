import { Link } from "react-router-dom";
import imgNotFound from "../assets/img/img-not-found.webp";
import ArrowLeft from "../assets/img/arrow-left-icons.png";
import "../css/NotFound.css";

const NotFound = () => {
  return (
    <div className="container_not_found_page">
      <div className="not_found_page">
        <Link className="link_not_found_page" to="/">
          <img className="img_link_not_found_page" src={ArrowLeft} alt="" />
          Regresar al inicio
        </Link>

        <p className="p_not_found_page">
          <strong className="strong_not_found_page">
            404 - Página no encontrada
          </strong>
        </p>
        <p className="p_not_found_page">
          La página que buscas no existe, por favor verifica el enlace.
        </p>

        <img
          className="img_not_found_page"
          src={imgNotFound}
          alt="imagen-not-found"
        />
      </div>
    </div>
  );
};

export default NotFound;
