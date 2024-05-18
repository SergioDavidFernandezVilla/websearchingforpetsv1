import "../css/PostDetail.css";

import arrow from "../assets/Icons/icon_left.png";
import { useParams, Link } from "react-router-dom";
import JsonPostUser from "../service/JsonPostUser";
import ShareComponent from "../components/PostShare/ShareComponent";

const PostDetailPage = () => {
  const { slug } = useParams();
  const data = JsonPostUser();
  const post = data.DetallesUrgencias.find((post) => post.slug === slug);

  if (!post) {
    return <div className="not_found_page">No se encontró la post.</div>;
  }

  return (
    <div className="container_detalle_post_user_article">
      <article className="article_detalle_post_user_article">
        <header className="header_detalle_post_user_article">
          <div className="datos_detalle_post_user_article">
            <figure className="figure_detalle_post_user_article">
              <img
                className="img_detalle_post_user_article"
                src={post.imgPerfil}
                alt="img-perfil"
              />
            </figure>

            <h3 className="h3_detalle_post_user_article">{post.username}</h3>
          </div>

          <div className="div_detalle_post_user_article">
            <p className="p_detalle_post_user_article">{post.Comentario}</p>
          </div>
        </header>

        <div className="div_detalle_post_user_article">
          <div className="div_detalle_post_user_article_comentario">
            <p className="p_detalle_post_user_article">{post.Descripcion}</p>
          </div>
          <div className="div_detalle_post_user_article_img">
            <figure className="figure_detalle_post_user_article">
              <img
                className="img_detalle_post_user_article_img"
                src={post.imagenPost}
                alt="img-post"
              />
            </figure>

            <div className="container_button_icons_article">
              <ShareComponent />
            </div>
          </div>
        </div>

        <Link to="/">
          <div className="container_arrow">
            <img className="img_arrow" src={arrow} alt="icono-left" />
          </div>
        </Link>
      </article>
    </div>
  );
};

export default PostDetailPage;
