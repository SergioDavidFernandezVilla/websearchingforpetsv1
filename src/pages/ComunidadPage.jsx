import PostComunidadComponent from "../components/PostComunidadComponent";
import HeaderComponent from "../components/HeaderComponent";

//IMAGENES PERFIL
import photoperfil1 from "../assets/img/photo_perfil1.jpg";
import photoperfil2 from "../assets/img/photo_perfil4.jpg";
import photoperfil3 from "../assets/img/photo_perfil3.jpg";

import "../css/Comunidad.css";

const ComunidadPage = () => {
  return (
    <>
      <HeaderComponent></HeaderComponent>

      <div className="container_comunidad_page">
        <div className="container_posts_comunidad">
          <PostComunidadComponent
            username="Juan Perez"
            perfilUser={photoperfil1}
            descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur accumsan, nunc nisl euismod nisl, eget consectetur accumsan nisl nisl euismod nisl"
          />

          <PostComunidadComponent
            username="Juan Perez"
            perfilUser={photoperfil1}
            descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur accumsan, nunc nisl euismod nisl, eget consectetur accumsan nisl nisl euismod nisl"
          />

          <PostComunidadComponent
            username="Juan Perez"
            perfilUser={photoperfil1}
            descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur accumsan, nunc nisl euismod nisl, eget consectetur accumsan nisl nisl euismod nisl"
          />
        </div>
      </div>
    </>
  );
};

export default ComunidadPage;
