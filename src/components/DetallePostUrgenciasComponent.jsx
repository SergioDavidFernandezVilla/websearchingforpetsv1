import React from "react";
import { useParams } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import ContenidoDetallesPosturgenciasComponent from "../components/ContenidoDetallesPosturgenciasComponent";
import JsonDetalles from "../service/JsonDetalles"; // Importa el JSON

const DetallePostUrgenciasComponent = () => {
  const { id } = useParams(); // Obtener el parámetro de la URL

  // Llamar a JsonDetalles y luego acceder a la propiedad DetallesUrgencias
  const detallesUrgencias = JsonDetalles().DetallesUrgencias;

  // Buscar el objeto correspondiente dentro del JSON utilizando el id
  const detalleUrgencia = detallesUrgencias.find(
    (detalle) => detalle.id === parseInt(id)
  );

  // Verificar si se encontró el detalle de urgencia
  if (!detalleUrgencia) {
    return <div>No se encontró la urgencia.</div>;
  }

  // Obtener las propiedades del detalle de urgencia
  const { username, imgPerfil, Titulo, Descripcion, imagenPost } =
    detalleUrgencia;

  return (
    <>
      <HeaderComponent />
      {/* Renderiza ContenidoDetallesPosturgenciasComponent con las props personalizadas */}
      <ContenidoDetallesPosturgenciasComponent
        username={username}
        imgPerfil={imgPerfil}
        Titulo={Titulo}
        Descripcion={Descripcion}
        imagenPost={imagenPost}
      />
    </>
  );
};

export default DetallePostUrgenciasComponent;
