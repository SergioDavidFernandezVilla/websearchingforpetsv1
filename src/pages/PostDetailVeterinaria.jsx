import "../css/PostDetailVeterinaria.css";

import { useParams, Link } from "react-router-dom";
import JsonVeterinaria from "../service/JsonVeterinaria";

import info from "../assets/Icons/icon_info.png";
import compartir from "../assets/Icons/icon_compartir.png";
import arrow from "../assets/Icons/icon_left.png";

export default function PostDetailVeterinaria() {
  const { slug } = useParams();

  const data = JsonVeterinaria();

  const post = data.DetallesUrgencias.find((post) => post.slug === slug);

  if (!post) {
    return <div>No se encontró la post.</div>;
  }

  return (
    <div className="container_detalle_veterinaria_page_article">
      <div className="div_detalle_veterinaria_page_article">
        <article className="article_detalle_veterinaria_page_article">
          <header className="header_detalle_veterinaria_page_article">
            <figure className="figure_img_detalle_veterinaria_page_article">
              <img
                className="img_detalle_veterinaria_page_article"
                src={post.imgURL}
                alt={post.imgALT}
              />
            </figure>
          </header>

          <div className="div_detalle_veterinaria_page_article_content">
            <p className="p_detalle_veterinaria_page_article">
              <strong className="strong_detalle_veterinaria_page_article">
                Dirección:{" "}
              </strong>
              <Link
                className="link_detalle_veterinaria_page_article"
                to={post.enlace}
              >
                {post.Direccion}
              </Link>
            </p>
            <p className="p_detalle_veterinaria_page_article">
              <strong className="strong_detalle_veterinaria_page_article">
                Horario:{" "}
              </strong>
              {post.Horario}
            </p>
            <p className="p_detalle_veterinaria_page_article">
              <strong className="strong_detalle_veterinaria_page_article">
                Numero de teléfono:{" "}
              </strong>
              {post.NumeroTelefono}
            </p>
          </div>

          <div className="div_detalle_veterinaria_page_article_closed">
            <Link
              className="link_regreso_vetinaria_page_article"
              to="/veterinarias"
            >
              <img className="img_arrow_veterinaria_page_article" src={arrow} />
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
