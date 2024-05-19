import { useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import PostVeterinariasComponent from "../components/PostVeterinariasComponent";
import "../css/Veterinarias.css";

// IMAGENES VETERINARIAS
import photoVeterinaria1 from "../assets/img/photo_VeterinariaPost1.webp";
import photoVeterinaria2 from "../assets/img/photo_VeterinariaPost2.png";
import photoVeterinaria3 from "../assets/img/photo_VeterinariaPost3.png";

// ICONOS
import info from "../assets/Icons/info.png";
import compartir from "../assets/Icons/compartir.png";

const VeterinariasPage = () => {
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
      <div className="container_veterinarias_page">
        {postsOpen && (
          <div className="modal_container">
            <ModalText handleTogglePosts={handleTogglePosts} />
          </div>
        )}

        <div className="container_posts_veterinarias">
          <PostVeterinariasComponent
            imgURL={photoVeterinaria1}
            imgALT="Veterinaria"
            slug="1"
            imgINFO={info}
            imgCOMPARTIR={compartir}
          />

          <PostVeterinariasComponent
            imgURL={photoVeterinaria2}
            imgALT="Veterinaria"
            slug="2"
            imgINFO={info}
            imgCOMPARTIR={compartir}
          />

          <PostVeterinariasComponent
            imgURL={photoVeterinaria3}
            imgALT="Veterinaria"
            slug="3"
            imgINFO={info}
            imgCOMPARTIR={compartir}
          />
        </div>
      </div>
    </>
  );
};

export default VeterinariasPage;
