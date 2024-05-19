//IMAGENES DE POST
import imagen1Veterinaria from "../assets/img/photo_VeterinariaPost1.webp"
import imagen2Veterinaria from "../assets/img/photo_VeterinariaPost2.png"
import imagen3Veterinaria from "../assets/img/photo_VeterinariaPost3.png"


const JsonVeterinaria = () => {
  return {
    DetallesUrgencias: [
      {
        id: 1,
        slug: "1",
        imgURL: imagen1Veterinaria,
        imgALT: "Veterinaria",
        Direccion:"Av. México 68 717, Colina del Rey, 80177 Culiacán Rosales, Sin.",
        Horario:"Lunes a Viernes de 8:00 a.m a 8:00 p.m",
        NumeroTelefono:"+526677506789",
        enlace:"https://maps.app.goo.gl/4sfbmto4rSrUME2ZA"
      },
      
      {
        id: 2,
        slug: "2",
        imgURL: imagen2Veterinaria,
        imgALT: "Veterinaria",
        Direccion:"Héroes del 47 no 121 Col, San Diego Churubusco, Coyoacán, 04120 CDMX",
        Horario:"Martes a Sabado de 9:30 a.m a 6:00 p.m",
        NumeroTelefono:"+525559294735",
        enlace:"https://maps.app.goo.gl/K1j6XqoV88Qf1wB58"
      },
      {
        id: 3,
        slug: "3",
        imgURL: imagen3Veterinaria,
        imgALT: "Veterinaria",
        Direccion:"Héroes del 47 no 121 Col, San Diego Churubusco, Coyoacán, 04120 CDMX",
        Horario:"Martes a Sabado de 9:30 a.m a 6:00 p.m",
        NumeroTelefono:"+525559294735",
        enlace:"https://maps.app.goo.gl/K1j6XqoV88Qf1wB58"
      }
    ],
  };
}

export default JsonVeterinaria;
