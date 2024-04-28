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
    "DetallesUrgencias": [
      {
        "id": 1,
        "username": "Refugio Animal",
        "imgPerfil": photoperfil2,
        "Titulo": "Perro abandonado necesita hogar",
        "Descripcion": "Hemos encontrado a un perro abandonado en las calles. Es un perro macho de raza mestiza, aproximadamente de 2 años de edad. Está en buen estado de salud pero necesita un hogar amoroso y responsable.",
        "imagenPost": imagen1Post,
      },
      {
        "id": 2,
        "username": "Centro de Rescate Animal",
        "imgPerfil": photoperfil1,
        "Titulo": "Gatito herido necesita atención médica",
        "Descripcion": "Encontramos a un gatito callejero con una herida en una de sus patas. Necesita atención médica urgente y un lugar seguro donde recuperarse. Por favor, cualquier ayuda será apreciada.",
        "imagenPost": imagen6Post,
      },
      {
        "id": 3,
        "username": "Vecino Solidario",
        "imgPerfil": photoperfil3,
        "Titulo": "Perrita perdida en el barrio",
        "Descripcion": "Una perrita pequeña se perdió en nuestro barrio. Es de color blanco con manchas marrones y lleva un collar azul. Si la has visto, por favor contáctanos para reunirla con su familia.",
        "imagenPost": imagen2Post,
      },
      {
        "id": 4,
        "username": "Protección Animal",
        "imgPerfil": photoperfil2,
        "Titulo": "Gato atrapado en un árbol",
        "Descripcion": "Un gato se encuentra atrapado en lo alto de un árbol desde hace varias horas. Necesitamos ayuda para rescatarlo de manera segura. Por favor, cualquier voluntario con experiencia en rescate de animales es bienvenido.",
        "imagenPost": imagen3Post
      },
      {
        "id": 5,
        "username": "Refugio Animal",
        "imgPerfil": photoperfil1,
        "Titulo": "Cachorro abandonado necesita alimentación",
        "Descripcion": "Encontramos a un cachorro abandonado en un contenedor de basura. Está desnutrido y necesita alimentación y cuidados urgentes. Por favor, cualquier donación de comida para cachorros será de gran ayuda.",
        "imagenPost": imagen4Post
      },
      {
        "id": 6,
        "username": "Centro de Rescate Animal",
        "imgPerfil": photoperfil3,
        "Titulo": "Perrita embarazada necesita refugio",
        "Descripcion": "Encontramos a una perrita embarazada en la calle. Necesita un lugar seguro donde dar a luz a sus cachorros y recibir cuidados médicos. Por favor, cualquier ayuda será bienvenida.",
        "imagenPost": imagen5Post
      }
    ]
  };
}

export default JsonDetalles;
