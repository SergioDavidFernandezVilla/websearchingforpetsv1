import HeaderComponent from "../components/HeaderComponent";
import PostUserComponent from "../components/PostUserComponent";
import perfil from "../assets/Icons/icon_notificaciones.png";

import petPost1 from "../assets/img/img-pet1.jpg";
import petPost2 from "../assets/img/img-pet2.jpg";

//FOTOS DE PERFIL
import photoperfil1 from "../assets/img/photo_perfil1.jpg";
import photoperfil2 from "../assets/img/photo_perfil2.jpg";
import photoperfil3 from "../assets/img/photo_perfil3.jpg";
import photoperfil4 from "../assets/img/photo_perfil4.jpg";

//FOTOS DE POSTS
import photopost1 from "../assets/img/photo_post1.jpg";
import photopost2 from "../assets/img/photo_post2.jpg";
import photopost3 from "../assets/img/photo_post3.jpg";
import photopost4 from "../assets/img/photo_post4.jpg";

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
