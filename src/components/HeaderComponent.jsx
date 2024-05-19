import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../css/Header.css";
import SubHeaderComponent from "./SubHeaderComponent";
import SearchComponent from "./SearchComponent";

import logoMenu from "../assets/Icons/logo.png";
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

const HeaderComponent = ({ togglePostsFromHome }) => {
  //LOGICA

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [postsOpen, setPostsOpen] = useState(false);

  const togglePosts = () => {
    console.log("postsOpen", postsOpen);
    setPostsOpen(!postsOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const TogglePosts = () => {
    console.log("postsOpen", postsOpen);
    setPostsOpen(!postsOpen);
    if (togglePostsFromHome) {
      togglePostsFromHome(!postsOpen);
    }
  };

  return (
    <>
      <header className="header_hero">
        <nav className="header_nav">
          <div className="header_nav_link_container">
            <div className="div_header_nav_link_container_nose">
              <Link to="#" className="header_nav_link" onClick={toggleMenu}>
                <img src={logoMenu} alt="" width="50" height="50" />
              </Link>
            </div>

            <div className="div_nav_title_container">
              <Link className="linlk_title_home" to="/">
                <h2 className="h2_nav_title_container">WebSearchingForPets</h2>
              </Link>
            </div>
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
                    <Link
                      className="menu_despejable_li_link"
                      to="/veterinarias"
                    >
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
      </header>

      <SubHeaderComponent
        onClick={toggleMenu}
        togglePosts={TogglePosts}
        searchOpen={searchOpen}
        toggleSearch={toggleSearch}
      />

      {searchOpen && (
        <SearchComponent
          toggleSearch={toggleSearch}
          togglePosts={togglePosts}
        />
      )}
    </>
  );
};

export default HeaderComponent;
