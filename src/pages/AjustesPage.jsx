import HeaderComponent from "../components/HeaderComponent";
import { Link } from "react-router-dom";

import "../css/Ajustes.css";
const AjustesPage = () => {
  return (
    <>
      <HeaderComponent />

      <div className="container_ajustes_page">
        <div className="ajustes_page">
          <div className="ajustes_page_div_opciones">
            <Link className="ajustes_page_link">Privacidad</Link>
            <Link className="ajustes_page_link">Notificaciones</Link>
            <Link className="ajustes_page_link">Idioma y region</Link>
            <Link className="ajustes_page_link">Donar</Link>
            <Link className="ajustes_page_link">Información personal</Link>
          </div>

          <div className="ajustes_page_div_opciones_menu">
            <div className="ajustes_page_div_opciones_menu_div">
              <h3 className="ajustes_page_menu_h3">
                ¿Quien puede ver mi perfil?
              </h3>

              <div className="ajustes_page_menu_inputs_div">
                <input type="checkbox" name="" id="" />
                <label>Todos</label>

                <input type="checkbox" name="" id="" />
                <label>Solo amigos</label>
              </div>
            </div>

            <div className="ajustes_page_div_opciones_menu_div">
              <h3 className="ajustes_page_menu_h3">
                ¿Quien puede enviarme mensajes?
              </h3>

              <div className="ajustes_page_menu_inputs_div">
                <input type="checkbox" name="" id="" />
                <label>Todos</label>

                <input type="checkbox" name="" id="" />
                <label>Solo amigos</label>
              </div>
            </div>

            <div className="ajustes_page_div_opciones_menu_div">
              <h3 className="ajustes_page_menu_h3">
                Lista de seguidores y seguidos
              </h3>

              <div className="ajustes_page_menu_inputs_div">
                <input type="checkbox" name="" id="" />
                <label>Todos</label>

                <input type="checkbox" name="" id="" />
                <label>Solo amigos</label>
              </div>
            </div>

            <div className="ajustes_page_div_opciones_menu_div">
              <h3 className="ajustes_page_menu_h3">
                ¿Quien puede ver mi información personal?
              </h3>

              <div className="ajustes_page_menu_inputs_div">
                <input type="checkbox" name="" id="" />
                <label>Todos</label>

                <input type="checkbox" name="" id="" />
                <label>Solo amigos</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AjustesPage;
