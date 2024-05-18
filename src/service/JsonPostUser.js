// JsonPostUser.js
import photoPost1 from "../assets/img/photo_post1.webp";
import photoPost2 from "../assets/img/photo_post2.webp";
import photoPost3 from "../assets/img/photo_post3.webp";
import photoPost4 from "../assets/img/photo_post4.webp";

import photoperfil1 from "../assets/img/photo_perfil1.webp";
import photoperfil2 from "../assets/img/photo_perfil2.webp";
import photoperfil3 from "../assets/img/photo_perfil3.webp";
import photoperfil4 from "../assets/img/photo_perfil4.webp";

const JsonPostUser = () => {
  return {
    DetallesUrgencias: [
      {
        id: 1,
        slug: "Gato-abandonado-necesita-hogar",
        username: "Juan Luis Gonzalez",
        imgPerfil: photoperfil1,
        Titulo: "Gato abandonado necesita hogar",
        Comentario: "Este Gato fue encontrado en el parque central. Es muy juguetón y necesita un hogar donde pueda correr y jugar.",
        Descripcion: "Encontré este Gato en el parque central. Es un macho de raza mestiza, aproximadamente de 2 años de edad. Está en buen estado de salud y es muy juguetón. Necesita un hogar donde pueda correr y jugar.",
        imagenPost: photoPost1,
      },
      {
        id: 2,
        slug: "perro-buscando-hogar",
        username: "Perez hernandez",
        imgPerfil: photoperfil2,
        Titulo: "perro buscando hogar",
        Comentario: "Este perro fue rescatado de una situación peligrosa. Es muy cariñoso y busca un hogar seguro.",
        Descripcion: "Este perro fue rescatado de una situación peligrosa. Es un macho de aproximadamente 1 año de edad. Es muy cariñoso y necesita un hogar seguro y tranquilo.",
        imagenPost: photoPost2,
      },
      {
        id: 3,
        slug: "perro-en-adopcion",
        username: "Pedro Solidario",
        imgPerfil: photoperfil3,
        Titulo: "perro en adopción",
        Comentario: "Este perro necesita un hogar donde pueda recibir mucho amor y atención. Es muy tierno y dócil.",
        Descripcion: "Este perro fue encontrado en el jardín de un vecino. Es muy tierno y dócil. Necesita un hogar donde pueda recibir mucho amor y atención.",
        imagenPost: photoPost3,
      },
      {
        id: 4,
        slug: "perro-en-busca-de-hogar",
        username: "un wey random",
        imgPerfil: photoperfil4,
        Titulo: "perro en busca de hogar",
        Comentario: "Este perro fue encontrado en una jaula abandonada. Necesita un hogar donde pueda volar libremente.",
        Descripcion: "Este perro fue encontrado en una jaula abandonada. Es muy alegre y necesita un hogar donde pueda volar libremente y recibir el cuidado que merece.",
        imagenPost: photoPost4,
      },
      {
        id: 5,
        slug: "perro-necesita-casa",
        username: "Jose sanchez",
        imgPerfil: photoperfil1,
        Titulo: "perro necesita casa",
        Comentario: "Este perro es muy activo y necesita un hogar donde pueda correr en su rueda y explorar.",
        Descripcion: "Este perro fue dejado en el refugio. Es muy activo y curioso. Necesita un hogar donde pueda correr en su rueda y explorar su entorno.",
        imagenPost: photoPost2,
      },
      {
        id: 6,
        slug: "perro-en-adopcion",
        username: "Angel Perez",
        imgPerfil: photoperfil2,
        Titulo: "perro en adopción",
        Comentario: "Esta perro fue encontrada en un estanque contaminado. Necesita un hogar con un ambiente limpio y seguro.",
        Descripcion: "Esta perro fue rescatada de un estanque contaminado. Es muy tranquila y necesita un hogar con un ambiente limpio y seguro.",
        imagenPost: photoPost4,
      },
    ],
  };
};

export default JsonPostUser;
