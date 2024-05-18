//IMAGENES DE POST
import imagen1Post from "../assets/img/fotos_urgencias/post1_urgencias.webp";
import imagen2Post from "../assets/img/fotos_urgencias/post2_urgencias.webp";
import imagen3Post from "../assets/img/fotos_urgencias/post3_urgencias.webp";
import imagen4Post from "../assets/img/fotos_urgencias/post4_urgencias.webp";
import imagen5Post from "../assets/img/fotos_urgencias/post5_urgencias.webp";
import imagen6Post from "../assets/img/fotos_urgencias/post6_urgencias.webp";

//IMAGENES DE PERFIL
import photoperfil1 from "../assets/img/photo_perfil1.webp";
import photoperfil2 from "../assets/img/photo_perfil4.webp";
import photoperfil3 from "../assets/img/photo_perfil3.webp";


const JsonDetalles = () => {
  return {
    DetallesUrgencias: [
      {
        id: 1,
        slug: "perro-abandonado-necesita-hogar",
        username: "Juan Luis Gonzalez",
        imgPerfil: photoperfil1,
        Titulo: "Perro abandonado necesita hogar",
        Comentario: "Este perro fue encontrado en el parque central. Es muy juguetón y necesita un hogar donde pueda correr y jugar.",
        Descripcion: "Encontré este perro en el parque central. Es un macho de raza mestiza, aproximadamente de 2 años de edad. Está en buen estado de salud y es muy juguetón. Necesita un hogar donde pueda correr y jugar.  Por favor, contacta con el servicio de emergencias para obtener más información.",
        imagenPost: photoPost1,
      },
      {
        id: 2,
        slug: "gato-buscando-hogar",
        username: "Perez hernandez",
        imgPerfil: photoperfil2,
        Titulo: "Gato buscando hogar",
        Comentario: "Este gato fue rescatado de una situación peligrosa. Es muy cariñoso y busca un hogar seguro.",
        Descripcion: "Este gato fue rescatado de una situación peligrosa. Es un macho de aproximadamente 1 año de edad. Es muy cariñoso y necesita un hogar seguro y tranquilo.",
        imagenPost: photoPost2,
      },
      {
        id: 3,
        slug: "conejo-en-adopcion",
        username: "Pedro Solidario",
        imgPerfil: photoperfil3,
        Titulo: "Conejo en adopción",
        Comentario: "Este conejo necesita un hogar donde pueda recibir mucho amor y atención. Es muy tierno y dócil.",
        Descripcion: "Este conejo fue encontrado en el jardín de un vecino. Es muy tierno y dócil. Necesita un hogar donde pueda recibir mucho amor y atención.",
        imagenPost: photoPost3,
      },
      {
        id: 4,
        slug: "periquito-en-busca-de-hogar",
        username: "un wey random",
        imgPerfil: photoperfil4,
        Titulo: "Periquito en busca de hogar",
        Comentario: "Este periquito fue encontrado en una jaula abandonada. Necesita un hogar donde pueda volar libremente.",
        Descripcion: "Este periquito fue encontrado en una jaula abandonada. Es muy alegre y necesita un hogar donde pueda volar libremente y recibir el cuidado que merece.",
        imagenPost: photoPost4,
      },
      {
        id: 5,
        slug: "hamster-necesita-casa",
        username: "Jose sanchez",
        imgPerfil: photoperfil1,
        Titulo: "Hamster necesita casa",
        Comentario: "Este hamster es muy activo y necesita un hogar donde pueda correr en su rueda y explorar.",
        Descripcion: "Este hamster fue dejado en el refugio. Es muy activo y curioso. Necesita un hogar donde pueda correr en su rueda y explorar su entorno.",
        imagenPost: photoPost2,
      },
      {
        id: 6,
        slug: "tortuga-en-adopcion",
        username: "Angel Perez",
        imgPerfil: photoperfil2,
        Titulo: "Tortuga en adopción",
        Comentario: "Esta tortuga fue encontrada en un estanque contaminado. Necesita un hogar con un ambiente limpio y seguro.",
        Descripcion: "Esta tortuga fue rescatada de un estanque contaminado. Es muy tranquila y necesita un hogar con un ambiente limpio y seguro.",
        imagenPost: photoPost4,
      },
    ],
  };
}

export default JsonDetalles;
