import React, { useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import { Link } from "react-router-dom";

import "../css/Ajustes.css";
import ContenidoPrivacidadComponent from "../components/ContenidoPrivacidadComponent";
import ContenidoNotificacionesComponent from "../components/ContenidoNotificacionesComponent";
import ContenidoIdiomaComponent from "../components/ContenidoIdiomaComponent";
import ContenidoDonarComponent from "../components/ContenidoDonarComponent";
import ContenidoInformacionComponent from "../components/ContenidoInformacionComponent";

const AjustesPage = () => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("Privacidad");

  const mostrarContenido = (opcion) => {
    setOpcionSeleccionada(opcion);
  };

  const contenido = {
    Privacidad: <ContenidoPrivacidadComponent />,

    Notificaciones: <ContenidoNotificacionesComponent />,

    "Idioma y region": <ContenidoIdiomaComponent />,

    Donar: <ContenidoDonarComponent />,

    "Información personal": <ContenidoInformacionComponent />,
  };

  return (
    <>
      <HeaderComponent />

      <div className="container_ajustes_page">
        <div className="ajustes_page">
          <div className="ajustes_page_div_opciones">
            <Link
              className="ajustes_page_link"
              onClick={() => mostrarContenido("Privacidad")}
            >
              Privacidad
            </Link>
            <Link
              className="ajustes_page_link"
              onClick={() => mostrarContenido("Notificaciones")}
            >
              Notificaciones
            </Link>
            <Link
              className="ajustes_page_link"
              onClick={() => mostrarContenido("Idioma y region")}
            >
              Idioma y region
            </Link>
            <Link
              className="ajustes_page_link"
              onClick={() => mostrarContenido("Donar")}
            >
              Donar
            </Link>
            <Link
              className="ajustes_page_link"
              onClick={() => mostrarContenido("Información personal")}
            >
              Información personal
            </Link>
          </div>

          <div className="ajustes_page_div_opciones_menu">
            {opcionSeleccionada && contenido[opcionSeleccionada]}
          </div>
        </div>
      </div>
    </>
  );
};

export default AjustesPage;
