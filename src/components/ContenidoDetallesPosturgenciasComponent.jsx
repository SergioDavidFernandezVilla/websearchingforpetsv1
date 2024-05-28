import { Link } from "react-router-dom";
import "../css/DetallesPost.css";
import icono2 from "../assets/Icons/icon_compartir.png";

const ContenidoDetallesPosturgenciasComponent = ({
  username,
  imgPerfil,
  Titulo,
  Descripcion,
  imagenPost,
}) => {
  return (
    <div className="background_detalles">
      <div className="container_detalles_post">
        <div className="post_detalles">
          <div className="div_regresar">
            <Link className="link_regresar_a_urgencias" to="/urgencias">
              Regresar al inicio urgencias
            </Link>
          </div>
          <header className="header_post_detalles">
            <img
              className="img_detalles_perfil"
              src={imgPerfil}
              alt="Imagen de perfil"
            />
            <p className="p_useranme_detalles">{username}</p>
          </header>

          <h3 className="h3_titulo_detalles">{Titulo}</h3>

          <div className="div_descripcion_detalles">
            <img
              className="img_detalles"
              src={imagenPost}
              alt="Imagen del post"
            />
            <div className="div_segundo_descripcion_detalles">
              <p className="p_descripcion_detalles">{Descripcion}</p>

              <div className="container_icons">
                <Link className="link_icons_detalles" to="/post/share">
                  <img
                    className="img_icon_detalles"
                    src={icono2}
                    alt="icono-compartir"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContenidoDetallesPosturgenciasComponent;
