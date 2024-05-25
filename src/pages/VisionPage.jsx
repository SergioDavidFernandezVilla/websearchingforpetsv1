import HeaderComponent from "../components/HeaderComponent";
import "../css/Vision.css";

export default function VisionPage() {
  return (
    <>
      <HeaderComponent />
      <div className="container_vision">
        <div className="contenido_vision">
          <h2 className="h2_contenido_vision">NUESTRA VISION</h2>
          <p className="p_contenido_vision">
            En nuestra visión, vemos un mundo donde todas las mascotas
            encuentran un hogar amoroso, lleno de cuidado y afecto. Nos
            esforzamos por ser líderes en la búsqueda de familias adecuadas para
            cada animal, brindando una nueva vida llena de alegría y
            compañerismo. Nos comprometemos a trabajar incansablemente para
            crear un futuro donde ningún animal se sienta solo o desamparado,
            impulsados por nuestro profundo amor y respeto por todas las
            criaturas vivientes.
          </p>
        </div>
      </div>
    </>
  );
}
