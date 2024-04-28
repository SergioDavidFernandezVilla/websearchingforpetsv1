import HeaderComponent from "../components/HeaderComponent";
import PostUserComponent from "../components/PostUserComponent";
import perfil from "../assets/Icons/icon_notificaciones.png";

import petPost1 from "../assets/img/img-pet1.webp";
import petPost2 from "../assets/img/img-pet2.webp";

//FOTOS DE PERFIL
import photoperfil1 from "../assets/img/photo_perfil1.webp";
import photoperfil2 from "../assets/img/photo_perfil2.webp";
import photoperfil3 from "../assets/img/photo_perfil3.webp";
import photoperfil4 from "../assets/img/photo_perfil4.webp";

//FOTOS DE POSTS
import photopost1 from "../assets/img/photo_post1.webp";
import photopost2 from "../assets/img/photo_post2.webp";
import photopost3 from "../assets/img/photo_post3.webp";
import photopost4 from "../assets/img/photo_post4.webp";

//CSS
import "../css/Home.css";

const HomePage = () => {
  return (
    <>
      <HeaderComponent></HeaderComponent>

      <div className="container_home_page">
        <div className="container_posts_users">
          <PostUserComponent
            perfilUser={photoperfil1}
            username="Juan Luis Gonzalez"
            imgPost={photopost1}
            descripcion="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
          repellendus aliquam voluptatum atque libero officiis aliquid qui
          ratione voluptate. Minima quae sit recusandae debitis eum aut totam id
          reiciendis facere?"
          />

          <PostUserComponent
            perfilUser={photoperfil2}
            username="Guadalupe Montoya"
            imgPost={photopost2}
            descripcion="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
          repellendus aliquam voluptatum atque libero officiis aliquid qui
          ratione voluptate. Minima quae sit recusandae debitis eum aut totam id
          reiciendis facere?"
          />

          <PostUserComponent
            perfilUser={photoperfil3}
            username="Gabriel sanchez"
            imgPost={photopost3}
            descripcion="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
          repellendus aliquam voluptatum atque libero officiis aliquid qui
          ratione voluptate. Minima quae sit recusandae debitis eum aut totam id
          reiciendis facere?"
          />

          <PostUserComponent
            perfilUser={photoperfil4}
            username="Luisa Gutierrez"
            imgPost={photopost4}
            descripcion="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
          repellendus aliquam voluptatum atque libero officiis aliquid qui
          ratione voluptate. Minima quae sit recusandae debitis eum aut totam id
          reiciendis facere?"
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
