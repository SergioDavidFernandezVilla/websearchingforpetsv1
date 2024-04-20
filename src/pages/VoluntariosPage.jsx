import HeaderComponent from "../components/HeaderComponent";
import PostVoluntariosComponent from "../components/PostVoluntariosComponent";
import "../css/Voluntarios.css";

//IMAGENES PERFIL
import photoperfil1 from "../assets/img/photo_perfil1.jpg";
import photoperfil2 from "../assets/img/photo_perfil4.jpg";
import photoperfil3 from "../assets/img/photo_perfil3.jpg";

const VoluntariosPage = () => {
  return (
    <>
      <HeaderComponent></HeaderComponent>

      <div className="container_voluntarios_page">
        <div className="container_posts_voluntarios">
          <PostVoluntariosComponent
            username="Juan Perez"
            perfilUser={photoperfil1}
            descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur accumsan, nunc nisl euismod nisl, eget consectetur accumsan nisl nisl euismod nisl"
          />

          <PostVoluntariosComponent
            username="Un wey random"
            perfilUser={photoperfil2}
            descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur accumsan, nunc nisl euismod nisl, eget consectetur accumsan nisl nisl euismod nisl"
          />

          <PostVoluntariosComponent
            username="Gonzalez"
            perfilUser={photoperfil3}
            descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur accumsan, nunc nisl euismod nisl, eget consectetur accumsan nisl nisl euismod nisl"
          />
        </div>
      </div>
    </>
  );
};

export default VoluntariosPage;
