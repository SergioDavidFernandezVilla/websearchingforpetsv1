import { Link } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import PostUrgenciasComponent from "../components/PostUrgenciasComponent";
import FooterComponent from "../components/FooterComponent";

//IMAGENES PERFIL
import photoperfil1 from "../assets/img/photo_perfil1.webp";
import photoperfil2 from "../assets/img/photo_perfil4.webp";
import photoperfil3 from "../assets/img/photo_perfil3.webp";

//IMAGENES POST URGENCIAS
import post1Urgencias from "../assets/img/fotos_urgencias/post1_urgencias.webp";
import post2Urgencias from "../assets/img/fotos_urgencias/post2_urgencias.webp";
import post3Urgencias from "../assets/img/fotos_urgencias/post3_urgencias.webp";
import post4Urgencias from "../assets/img/fotos_urgencias/post4_urgencias.webp";
import post5Urgencias from "../assets/img/fotos_urgencias/post5_urgencias.webp";
import post6Urgencias from "../assets/img/fotos_urgencias/post6_urgencias.webp";

import "../css/Urgencias.css";

const UrgenciasPage = () => {
  return (
    <>
      <HeaderComponent></HeaderComponent>

      <div className="container_urgencias_page">
        <div className="container_posts_urgencias">
          <Link
            className="link_detalle_post_urgencias"
            to="/detalles-post-urgencias/1"
          >
            <PostUrgenciasComponent
              username="Apoyo economico urgente"
              perfilUser={photoperfil2}
              imgPost={post1Urgencias}
              URlPros="/detalles-post-urgencias/1"
            />
          </Link>

          <Link
            className="link_detalle_post_urgencias"
            to="/detalles-post-urgencias/2"
          >
            <PostUrgenciasComponent
              username="Perdido en sector barrancos"
              perfilUser={photoperfil1}
              imgPost={post6Urgencias}
              URlPros="/detalles-post-urgencias/2"
            />
          </Link>

          <Link
            className="link_detalle_post_urgencias"
            to="/detalles-post-urgencias/3"
          >
            <PostUrgenciasComponent
              username="Atención médica urgente"
              perfilUser={photoperfil3}
              imgPost={post2Urgencias}
              URlPros="/detalles-post-urgencias/3"
            />
          </Link>

          <Link
            className="link_detalle_post_urgencias"
            to="/detalles-post-urgencias/4"
          >
            <PostUrgenciasComponent
              username="Perdido en la colonia El Vallado"
              perfilUser={photoperfil2}
              imgPost={post3Urgencias}
              URlPros="/detalles-post-urgencias/4"
            />
          </Link>

          <Link
            className="link_detalle_post_urgencias"
            to="/detalles-post-urgencias/5"
          >
            <PostUrgenciasComponent
              username="Atención médica urgente"
              perfilUser={photoperfil1}
              imgPost={post4Urgencias}
              URlPros="/detalles-post-urgencias/5"
            />
          </Link>

          <Link
            className="link_detalle_post_urgencias"
            to="/detalles-post-urgencias/6"
          >
            <PostUrgenciasComponent
              username="Perdido en la colonia Villa verde"
              perfilUser={photoperfil3}
              imgPost={post5Urgencias}
              URlPros="/detalles-post-urgencias/6"
            />
          </Link>
        </div>
      </div>

      <FooterComponent></FooterComponent>
    </>
  );
};

export default UrgenciasPage;
