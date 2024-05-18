import React from "react";
import { Link } from "react-router-dom";
import info from "../assets/Icons/icon_info.png";

import ShareComponent from "./PostShare/ShareComponent";

const PostUserComponent = ({
  perfilUser,
  username,
  imgPost,
  descripcion,
  slug,
  Comentario,
}) => {
  return (
    <div className="post_user">
      <section className="section_post_user">
        <header className="header_post_user">
          <div className="div_post_user">
            <figure className="figure_perfil_post_user">
              <img
                className="img_perfil_post_user"
                src={perfilUser}
                alt="img-perfil"
              />
            </figure>
            <h3 className="h3_post_user">{username}</h3>
          </div>

          <div className="div_post_user_descripcion">
            <p className="p_post_user">{descripcion}</p>
          </div>
        </header>

        <article className="article_post_user">
          <figure className="figure_img_post_user">
            <img className="img_post_user" src={imgPost} alt="img-post" />
          </figure>

          <div className="article_div_post_user_links">
            <Link to={`/post/${slug}`} className="link_post_user">
              <img
                className="link_post_user_img_icon"
                src={info}
                alt="icon_info"
              />
            </Link>

            <ShareComponent />
          </div>
        </article>
      </section>
    </div>
  );
};

export default PostUserComponent;
