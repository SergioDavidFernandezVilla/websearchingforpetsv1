import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

import MenuIcon from "../assets/Icons/menu.svg";
import SearchIcon from "../assets/Icons/icon_search.png";
import AddPostIcon from "../assets/Icons/icon_addpost2.png";
import AccountIcon from "../assets/Icons/icon_account.png";

import IconNotificaciones from "../assets/Icons/icon_notificaciones.png";

//MENU ICONS
import perfilPhoto from "../assets/img/photo_user1.webp";
import notificaciones from "../assets/Icons/Icons_menu/notificaciones.webp";
import adopcion from "../assets/Icons/Icons_menu/adopcion.webp";
import voluntarios from "../assets/Icons/Icons_menu/voluntarios.webp";
import comunidad from "../assets/Icons/Icons_menu/comunidad.webp";
import urgencias from "../assets/Icons/Icons_menu/urgencias.webp";
import veteninarias from "../assets/Icons/Icons_menu/veteninarias.webp";
import ajutes from "../assets/Icons/Icons_menu/settings.webp";

const HeaderComponent = () => {
  //LOGICA

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickMenu = () => {};

  return (
    <header className="header_hero">
      <nav className="header_nav">
        <div className="header_nav_link_container">
          <Link to="#" className="header_nav_link" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="70"
              height="70"
              viewBox="0 0 50 50"
            >
              <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
            </svg>
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
                  <Link className="menu_despejable_li_link" to="/urgencias">
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
      </nav>

      <nav className="header_nav_segundo">
        <Link className="header_nav_segundo_link">
          <figure className="figure_img_nav_segundo">
            <img
              src={SearchIcon}
              className="img_icon_nav_segundo"
              alt="search-icon"
            />
          </figure>
        </Link>
        <Link className="header_nav_segundo_link">
          <figure className="figure_img_nav_segundo">
            <img
              src={AddPostIcon}
              className="img_icon_nav_segundo"
              alt="add-post-icon"
            />
          </figure>
        </Link>

        <Link className="header_nav_segundo_link">
          <figure className="figure_img_nav_segundo">
            <img
              src={AccountIcon}
              className="img_icon_nav_segundo"
              alt="account-icon"
            />
          </figure>
        </Link>
      </nav>
    </header>
  );
};

export default HeaderComponent;
