import { Link } from "react-router-dom";

const ContenidoInformacionComponent = () => {
  return (
    <div className="contenido_informacion">
      <div className="contenido_div_principal_informacion">
        <h4 className="contenido_h4_informacion">Usuario:</h4>
        <div className="contenido_div_informacion">
          <p className="contenido_p_informacion">Paulina Espinoza</p>
          <Link className="link_informacion">Modificar</Link>
        </div>
      </div>

      <div className="contenido_div_principal_informacion">
        <h4 className="contenido_h4_informacion">Numero de celular:</h4>
        <div className="contenido_div_informacion">
          <p className="contenido_p_informacion">55 5555 5555</p>
          <Link className="link_informacion">Modificar</Link>
        </div>
      </div>

      <div className="contenido_div_principal_informacion">
        <h4 className="contenido_h4_informacion">Pais:</h4>
        <div className="contenido_div_informacion">
          <p className="contenido_p_informacion">Mexico</p>
        </div>
      </div>

      <div className="contenido_div_principal_informacion">
        <h4 className="contenido_h4_informacion">Estado o provincia:</h4>
        <div className="contenido_div_informacion">
          <p className="contenido_p_informacion">Sinaloa</p>
        </div>
      </div>

      <div className="contenido_div_principal_informacion">
        <h4 className="contenido_h4_informacion">Ciudad:</h4>
        <div className="contenido_div_informacion">
          <p className="contenido_p_informacion">Tijuana</p>
        </div>
      </div>
    </div>
  );
};

export default ContenidoInformacionComponent;
