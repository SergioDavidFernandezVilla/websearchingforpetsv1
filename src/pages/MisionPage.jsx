import HeaderComponent from "../components/HeaderComponent";
import "../css/Mision.css";

export default function MisionPage() {
  return (
    <>
      <HeaderComponent></HeaderComponent>

      <div className="container_mision">
        <div className="contenido_mision">
          <h2 className="h2_contenido_mision">NUESTRA MISION</h2>
          <p className="p_contenido_mision">
            Nuestra misión es ser el puente que une a las mascotas necesitadas
            con familias amorosas. Nos dedicamos a rescatar, rehabilitar y
            encontrar hogares permanentes para animales abandonados y
            maltratados. Trabajamos con pasión y compromiso para asegurar que
            cada mascota reciba el cuidado, el afecto y la atención que merece,
            mientras educamos a la comunidad sobre la importancia de la adopción
            responsable y el bienestar animal.
          </p>
        </div>
      </div>
    </>
  );
}
