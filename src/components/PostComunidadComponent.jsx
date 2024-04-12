import { Link } from "react-router-dom";

import adoptar from "../assets/Icons/icon_adoptar.png";
import compartir from "../assets/Icons/icon_compartir.png";

const PostComunidadComponent = ({ username, perfilUser, descripcion }) => {
  return (
    <section className="section_post_user_comunidad">
      <header className="header_post_user_comunidad">
        <div className="div_post_user_comunidad">
          <img
            className="img_perfil_post_user_comunidad"
            src={perfilUser}
            alt="img-perfil"
          />
          <h3 className="h3_post_user_comunidad">{username}</h3>
        </div>

        <p className="p_post_user_comunidad">{descripcion}</p>
      </header>

      <article className="article_post_user_comunidad">
        <div className="div_post_user_comunidad_links">
          <Link className="link_post_user_comunidad">
            <img
              className="img_post_user_comunidad"
              src={adoptar}
              alt="icon_adoptar"
            />
          </Link>
          <Link className="link_post_user_comunidad">
            <img
              className="img_post_user_comunidad"
              src={compartir}
              alt="icon_compartir"
            />
          </Link>
        </div>
      </article>
    </section>
  );
};

export default PostComunidadComponent;
