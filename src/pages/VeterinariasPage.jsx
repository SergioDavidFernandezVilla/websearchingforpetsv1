import HeaderComponent from "../components/HeaderComponent";
import PostVeterinariasComponent from "../components/PostVeterinariasComponent";

import "../css/Veterinarias.css";

//IMAGENES VETERINARIAS
import photoVeterinaria1 from "../assets/img/photo_VeterinariaPost1.webp";
import photoVeterinaria2 from "../assets/img/photo_VeterinariaPost2.png";
import photoVeterinaria3 from "../assets/img/photo_VeterinariaPost3.png";

//ICONOS
import info from "../assets/Icons/info.png";
import compartir from "../assets/Icons/compartir.png";

const VeterinariasPage = () => {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <div className="container_veterinarias_page">
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
