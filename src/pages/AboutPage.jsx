import HeaderComponent from "../components/HeaderComponent";
import "../css/About.css";

export default function AboutPage() {
  return (
    <>
      <HeaderComponent />

      <div className="container_about">
        <div className="contenido_about">
          <h2 className="h2_contenido_about">SOBRE NOSOTROS</h2>
          <p className="p_contenido_about">
            En Searching for Pets, creemos en el poder transformador del amor
            por los animales, no somos solo una empresa, somos una comunidad
            comprometida con el bienestar de todas las mascotas, una pata a la
            vez, nuestra historia comenzó con una simple premisa: cada mascota
            merece un hogar amoroso y una vida plena. Nos apasiona marcar la
            diferencia en la vida de las mascotas y de quienes las cuidan, nos
            esforzamos por ir más allá de las expectativas para mejorar la forma
            en que se trata y cuida a los animales en todo el mundo. Con un
            enfoque centrado en el cambio positivo, buscamos innovar, educar y
            crear conciencia sobre los problemas que enfrentan las mascotas
            abandonadas, maltratadas o en riesgo.
          </p>
        </div>
      </div>
    </>
  );
}
