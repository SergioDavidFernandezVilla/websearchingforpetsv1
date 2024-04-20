import { Link } from "react-router-dom";

const PostUrgenciasComponent = ({ perfilUser, username, imgPost, URlPros }) => {
  return (
    <div className="post_user_urgencias">
      <section className="section_post_user_urgencias">
        <header className="header_post_user_urgencias">
          <div className="div_post_user_urgencias">
            <img
              className="img_perfil_post_user_urgencias"
              src={perfilUser}
              alt="img-perfil"
            />
            <h3 className="h3_post_user_urgencias">{username}</h3>
          </div>
        </header>

        <article className="article_post_user_urgencias">
          <img
            className="img_post_user_urgencias"
            src={imgPost}
            alt="img-post"
          />

          <div className="article_div_post_user_links_urgencias">
            <p className="link_post_user_urgencias">Saber mas</p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default PostUrgenciasComponent;
