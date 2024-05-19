import React, { useState, useEffect } from "react";
import "../css/Home.css";
import HeaderComponent from "../components/HeaderComponent";
import PostUserComponent from "../components/PostUserComponent";

import JsonPostUser from "../service/JsonPostUser";

const HomePage = () => {
  const [modal, setModal] = useState(false);
  const [posts, setPosts] = useState([]);
  const [postsOpen, setPostsOpen] = useState(false);

  useEffect(() => {
    const data = JsonPostUser();
    setPosts(data.DetallesUrgencias);
  }, []);

  const ModalPostShare = () => {
    setModal(!modal);
  };

  const handleTogglePosts = () => {
    setPostsOpen(!postsOpen);
  };

  const ModalText = ({ handleTogglePosts }) => {
    return (
      <div className="modal">
        <div className="container_modal_close">
          <button
            className="container_modal_close_btn"
            onClick={() => handleTogglePosts(false)}
          >
            X
          </button>
        </div>

        <header className="modal_header">
          <h2 className="modal_header_h2">Subir un post</h2>
        </header>

        <form className="form_modal">
          <div className="form_modal_div">
            <label className="form_modal_label">Título:</label>
            <input
              className="form_modal_input"
              type="text"
              placeholder="Escribe tu título"
            />
          </div>

          <div className="form_modal_div">
            <label className="form_modal_label">Descripción:</label>
            <textarea
              className="form_modal_input"
              placeholder="Escribe tu descripción"
            />
          </div>

          <div className="form_modal_div">
            <label className="form_modal_label">Imagen:</label>
            <input
              className="form_modal_input"
              type="file"
              placeholder="Cargar imagen"
            />
          </div>

          <div className="form_modal_div">
            <label className="form_modal_label">Comentario:</label>
            <textarea
              className="form_modal_input"
              placeholder="Escribe tu comentario"
            />
          </div>

          <div className="form_modal_div">
            <label className="form_modal_label">Etiquetas:</label>
            <input
              className="form_modal_input"
              type="text"
              placeholder="Escribe tus etiquetas"
            />
          </div>

          <div className="form_modal_btn">
            <button type="submit" className="form_modal_btn">
              Guardar
            </button>
          </div>
        </form>
      </div>
    );
  };

  return (
    <>
      <HeaderComponent togglePostsFromHome={handleTogglePosts} />

      <div className="container_home_page">
        {postsOpen && (
          <div className="modal_container">
            <ModalText handleTogglePosts={handleTogglePosts} />
          </div>
        )}

        <div className="container_posts_users">
          {posts.map((post) => (
            <PostUserComponent
              key={post.id}
              slug={post.slug}
              perfilUser={post.imgPerfil}
              Comentario={post.Comentario}
              username={post.username}
              imgPost={post.imagenPost}
              descripcion={post.Descripcion}
              onClick={ModalPostShare}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
