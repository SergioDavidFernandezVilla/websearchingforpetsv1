import { Link } from "react-router-dom";

const ContenidoDonarComponent = () => {
  return (
    <div className="contenido_donar">
      <h3 className="contenido_h3_donar">Metodo</h3>
      <select className="contenido_select_donar">
        <option value="Tarjeta">Tarjeta</option>
      </select>

      <Link className="link_paypal_donar">Paypal</Link>

      <h4 className="contenido_h4_donar">Saldo Actual</h4>
      <p className="contenido_p_donar">$0.00</p>
    </div>
  );
};

export default ContenidoDonarComponent;
