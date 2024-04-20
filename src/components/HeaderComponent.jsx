import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

import IconNotificaciones from "../assets/Icons/icon_notificaciones.png";

//MENU ICONS
import perfilPhoto from "../assets/img/photo_user1.jpg";
import notificaciones from "../assets/Icons/Icons_menu/notificaciones.png";
import adopcion from "../assets/Icons/Icons_menu/adopcion.png";
import voluntarios from "../assets/Icons/Icons_menu/voluntarios.png";
import comunidad from "../assets/Icons/Icons_menu/comunidad.png";
import urgencias from "../assets/Icons/Icons_menu/urgencias.png";
import veteninarias from "../assets/Icons/Icons_menu/veteninarias.png";
import ajutes from "../assets/Icons/Icons_menu/settings.png";

const HeaderComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header_hero">
      <nav className="header_nav">
        <div className="header_nav_link_container">
          <Link to="#" className="header_nav_link" onClick={toggleMenu}>
            <img
              src={IconNotificaciones}
              className="header_nav_img"
              alt="icon-notificaciones"
              width="60"
              height="60"
            />
          </Link>
          {menuOpen && (
            <div className="menu_despejable">
              <header className="menu_despejable_header">
                <img
                  src={perfilPhoto}
                  alt="photo_perfil_user"
                  className="menu_despejable_img"
                />
                <h2 className="menu_despejable_username_user_h2">
                  Paulina Espinoza
                </h2>
              </header>

              <ul className="menu_despejable_ul">
                <li className="menu_despejable_li">
                  <Link className="menu_despejable_li_link">
                    <p className="menu_despejable_li_p">
                      <strong className="menu_despejable_li_strong">
                        NOTIFICACIONES
                      </strong>
                    </p>
                    <img
                      className="menu_despejable_li_img"
                      src={notificaciones}
                      alt="icono_notificaciones"
                    />
                  </Link>
                </li>

                <li className="menu_despejable_li">
                  <Link className="menu_despejable_li_link" to="/">
                    <p className="menu_despejable_li_p">
                      <strong className="menu_despejable_li_strong">
                        ADOPCIÓN
                      </strong>
                    </p>
                    <img
                      className="menu_despejable_li_img"
                      src={adopcion}
                      alt="icono_notificaciones"
                    />
                  </Link>
                </li>

                <li className="menu_despejable_li">
                  <Link className="menu_despejable_li_link" to="/voluntarios">
                    <p className="menu_despejable_li_p">
                      <strong className="menu_despejable_li_strong">
                        VOLUNTARIOS
                      </strong>
                    </p>
                    <img
                      className="menu_despejable_li_img"
                      src={voluntarios}
                      alt="icono_notificaciones"
                    />
                  </Link>
                </li>

                <li className="menu_despejable_li">
                  <Link className="menu_despejable_li_link" to="/comunidad">
                    <p className="menu_despejable_li_p">
                      <strong className="menu_despejable_li_strong">
                        COMUNIDAD
                      </strong>
                    </p>
                    <img
                      className="menu_despejable_li_img"
                      src={comunidad}
                      alt="icono_notificaciones"
                    />
                  </Link>
                </li>

                <li className="menu_despejable_li">
                  <Link className="menu_despejable_li_link">
                    <p className="menu_despejable_li_p">
                      <strong className="menu_despejable_li_strong">
                        URGENCIAS
                      </strong>
                    </p>
                    <img
                      className="menu_despejable_li_img"
                      src={urgencias}
                      alt="icono_notificaciones"
                    />
                  </Link>
                </li>

                <li className="menu_despejable_li">
                  <Link className="menu_despejable_li_link" to="/veterinarias">
                    <p className="menu_despejable_li_p">
                      <strong className="menu_despejable_li_strong">
                        VETERINARIAS
                      </strong>
                    </p>
                    <img
                      className="menu_despejable_li_img"
                      src={veteninarias}
                      alt="icono_notificaciones"
                    />
                  </Link>
                </li>

                <li className="menu_despejable_li">
                  <Link className="menu_despejable_li_link" to="/ajustes">
                    <p className="menu_despejable_li_p">
                      <strong className="menu_despejable_li_strong">
                        AJUSTES
                      </strong>
                    </p>
                    <img
                      className="menu_despejable_li_img"
                      src={ajutes}
                      alt="icono_notificaciones"
                    />
                  </Link>
                </li>

                <li className="menu_despejable_li">
                  <Link
                    className="menu_despejable_li_link"
                    onClick={toggleMenu}
                  >
                    <p className="menu_despejable_li_p">
                      <strong className="menu_despejable_li_strong">
                        CERRAR
                      </strong>
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        <form className="header_form" action="">
          <div className="header_form_search">
            <input
              className="header_form_input"
              type="search"
              name=""
              id=""
              placeholder="Buscar..."
              maxLength="250"
            />
          </div>
        </form>
      </nav>
    </header>
  );
};

export default HeaderComponent;
