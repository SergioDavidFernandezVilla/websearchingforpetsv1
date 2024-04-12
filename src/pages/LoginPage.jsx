import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

import "../css/LoginPage.css";

const LoginPage = () => {
  // Estado para manejar los errores
  const [error, setError] = useState(null);

  // Función para manejar el inicio de sesión
  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica para iniciar sesión (aquí puedes agregar tu lógica de autenticación)
    // Por ahora, solo simularemos un error
    setError("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
  };

  return (
    <div className="container_login_page">
      <div className="login_page">
        <div className="login_page_logo">
          <img className="login_page_img" src={logo} alt="logo" />
        </div>

        <form className="login_page_form" onSubmit={handleLogin}>
          <input
            className="login_page_input"
            type="text"
            placeholder="Correo electrónico o número de teléfono"
            maxLength="290"
          />
          <input
            className="login_page_input"
            type="password"
            placeholder="Contraseña"
            maxLength="50"
          />
          {/* Mostrar mensaje de error si existe */}
          {error && <p className="error_message">{error}</p>}
          <button className="login_page_button">Iniciar Sesión</button>
          <Link className="login_page_link">¿Olvidaste tu contraseña?</Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
