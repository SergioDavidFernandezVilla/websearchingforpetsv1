import React, { useState, useEffect } from "react";
import "../css/Home.css";
import HeaderComponent from "../components/HeaderComponent";
import PostUserComponent from "../components/PostUserComponent";

// Importar JSON
import JsonPostUser from "../service/JsonPostUser";

const HomePage = () => {
  const [modal, setModal] = useState(false);
  const [posts, setPosts] = useState([]);

  // Cargar datos del JSON al montar el componente
  useEffect(() => {
    const data = JsonPostUser();
    setPosts(data.DetallesUrgencias);
  }, []);

  const ModalPostShare = () => {
    setModal(!modal);
  };

  const ModalText = () => {
    return (
      <div className="modal">
        <h2>Modal</h2>
        <button onClick={ModalPostShare}>Close</button>
      </div>
    );
  };

  return (
    <>
      <HeaderComponent />

      <div className="container_home_page">
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

        {modal && <ModalText />}
      </div>
    </>
  );
};

export default HomePage;
