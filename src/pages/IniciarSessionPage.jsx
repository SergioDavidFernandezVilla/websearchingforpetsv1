import { Link } from "react-router-dom";
import logo from "../assets/Icons/logoEmpresa.png";
import "../css/InciarSession.css";
const IniciarSessionPage = () => {
  return (
    <div className="iniciar_session_page_container">
      <div className="iniciar_session_page_logo">
        <img className="iniciar_session_page_img" src={logo} alt="logo" />
      </div>
      <form className="iniciar_session_page_form" action="" method="post">
        <button className="iniciar_session_page_button">Iniciar sesíon</button>
        <button className="iniciar_session_page_button">Regístrate</button>
        <Link className="iniciar_session_page_link">
          ¿Olvidaste tu contraseña?
        </Link>
      </form>
    </div>
  );
};

export default IniciarSessionPage;
