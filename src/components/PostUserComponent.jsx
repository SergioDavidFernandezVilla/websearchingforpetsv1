import { Link } from "react-router-dom";
import info from "../assets/Icons/icon_info.png";
import adoptar from "../assets/Icons/icon_adoptar.png";
import compartir from "../assets/Icons/icon_compartir.png";

const PostUserComponent = ({ perfilUser, username, imgPost, descripcion }) => {
  return (
    <div className="post_user">
      <section className="section_post_user">
        <header className="header_post_user">
          <div className="div_post_user">
            <img
              className="img_perfil_post_user"
              src={perfilUser}
              alt="img-perfil"
            />
            <h3 className="h3_post_user">{username}</h3>
          </div>

          <p className="p_post_user">{descripcion}</p>
        </header>

        <article className="article_post_user">
          <img className="img_post_user" src={imgPost} alt="img-post" />

          <div className="article_div_post_user_links">
            <Link className="link_post_user">
              <img
                className="link_post_user_img_icon"
                src={info}
                alt="icon_info"
              />
            </Link>
            <Link className="link_post_user">
              <img
                className="link_post_user_img_icon"
                src={adoptar}
                alt="icon_adoptar"
              />
            </Link>
            <Link className="link_post_user">
              <img
                className="link_post_user_img_icon"
                src={compartir}
                alt="icon_compartir"
              />
            </Link>
          </div>
        </article>
      </section>
    </div>
  );
};

export default PostUserComponent;
