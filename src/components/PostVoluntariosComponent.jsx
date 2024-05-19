import { Link } from "react-router-dom";

import icono1 from "../assets/Icons/icon_voluntarios1.png";
import icono2 from "../assets/Icons/icon_compartir.png";

const PostVoluntariosComponent = ({ username, perfilUser, descripcion }) => {
  return (
    <section className="section_post_user_voluntarios">
      <header className="header_post_user_voluntarios">
        <div className="div_post_user_voluntarios">
          <img
            className="img_perfil_post_user_voluntarios"
            src={perfilUser}
            alt="img-perfil"
          />
          <h3 className="h3_post_user_voluntarios">{username}</h3>
        </div>

        <div className="div_post_user_voluntarios_descripcion">
          <p className="p_post_user_voluntarios">{descripcion}</p>
        </div>
      </header>

      <article className="article_post_user_voluntarios">
        <div className="div_post_user_voluntarios_links">
          <Link className="link_post_user_voluntarios">
            <img
              className="img_post_user_voluntarios"
              src={icono1}
              alt="icon_adoptar"
            />
          </Link>
          <Link className="link_post_user_voluntarios" to="/post/share">
            <img
              className="img_post_user_voluntarios"
              src={icono2}
              alt="icon_compartir"
            />
          </Link>
        </div>
      </article>
    </section>
  );
};

export default PostVoluntariosComponent;
