import PostComunidadComponent from "../components/PostComunidadComponent";
import HeaderComponent from "../components/HeaderComponent";
import { useState } from "react";

//IMAGENES PERFIL
import photoperfil1 from "../assets/img/photo_perfil1.webp";
import photoperfil2 from "../assets/img/photo_perfil4.webp";
import photoperfil3 from "../assets/img/photo_perfil3.webp";

import "../css/Comunidad.css";

const ComunidadPage = () => {
  const [postsOpen, setPostsOpen] = useState(false);
  const [modal, setModal] = useState(false);

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

      <div className="container_comunidad_page">
        {postsOpen && (
          <div className="modal_container">
            <ModalText handleTogglePosts={handleTogglePosts} />
          </div>
        )}

        <div className="container_posts_comunidad">
          <PostComunidadComponent
            username="Juan Perez"
            perfilUser={photoperfil1}
            descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur accumsan, nunc nisl euismod nisl, eget consectetur accumsan nisl nisl euismod nisl"
          />

          <PostComunidadComponent
            username="Un wey random"
            perfilUser={photoperfil2}
            descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur accumsan, nunc nisl euismod nisl, eget consectetur accumsan nisl nisl euismod nisl"
          />

          <PostComunidadComponent
            username="Gonzalez"
            perfilUser={photoperfil3}
            descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur accumsan, nunc nisl euismod nisl, eget consectetur accumsan nisl nisl euismod nisl"
          />
        </div>
      </div>
    </>
  );
};

export default ComunidadPage;
