import React, { useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import { Link } from "react-router-dom";

import "../css/Ajustes.css";

const AjustesPage = () => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("Privacidad");

  const mostrarContenido = (opcion) => {
    setOpcionSeleccionada(opcion);
  };

  const contenido = {
    Privacidad: (
      <div className="contenido_privacidad">
        <p className="contenido_p_privacidad">
          ¿Quien puede ver mi foto de perfil?
        </p>

        <div className="contenido_inputs_privacidad">
          <input type="checkbox" className="contenido_input_privacidad" />
          <label className="contenido_label_privacidad">Todos</label>

          <input type="checkbox" className="contenido_input_privacidad" />
          <label className="contenido_label_privacidad">Solo amigos</label>
        </div>

        <p className="contenido_p_privacidad">
          ¿Quien puede enviarme mensajes?
        </p>

        <div className="contenido_inputs_privacidad">
          <input type="checkbox" className="contenido_input_privacidad" />
          <label className="contenido_label_privacidad">Todos</label>

          <input type="checkbox" className="contenido_input_privacidad" />
          <label className="contenido_label_privacidad">Solo amigos</label>
        </div>

        <p className="contenido_p_privacidad">Lista de seguidores y seguidos</p>

        <div className="contenido_inputs_privacidad">
          <input type="checkbox" className="contenido_input_privacidad" />
          <label className="contenido_label_privacidad">Todos</label>

          <input type="checkbox" className="contenido_input_privacidad" />
          <label className="contenido_label_privacidad">Solo amigos</label>
        </div>

        <p className="contenido_p_privacidad">
          ¿Quien puede ver mi informacion personal?
        </p>

        <div className="contenido_inputs_privacidad">
          <input type="checkbox" className="contenido_input_privacidad" />
          <label className="contenido_label_privacidad">Todos</label>

          <input type="checkbox" className="contenido_input_privacidad" />
          <label className="contenido_label_privacidad">Solo amigos</label>
        </div>
      </div>
    ),

    Notificaciones: (
      <div className="contenido_notificaciones">
        <p className="contenido_p_notificaciones">Recibir notificaciones</p>

        <div className="notificaciones-div">
          <input className="contenido_input" type="checkbox" />
          <label className="contenido_label">Habilitar</label>

          <input className="contenido_input" type="checkbox" />
          <label className="contenido_label">Desactivar</label>
        </div>

        <p className="contenido_p_notificaciones">Recibir Emergencias</p>

        <div className="notificaciones-div">
          <input className="contenido_input" type="checkbox" />
          <label className="contenido_label">Habilitar</label>

          <input className="contenido_input" type="checkbox" />
          <label className="contenido_label">Desactivar</label>
        </div>

        <p className="contenido_p_notificaciones">Notificar Eventos</p>

        <div className="notificaciones-div">
          <input className="contenido_input" type="checkbox" />
          <label className="contenido_label">Habilitar</label>

          <input className="contenido_input" type="checkbox" />
          <label className="contenido_label">Desactivar</label>
        </div>
      </div>
    ),

    "Idioma y region": (
      <div className="contenido-idioma">
        <p className="contenido_p_idioma">Pais</p>
        <select className="contenido_select_idioma">
          <option value="Mexico">Mexico</option>
          <option value="Colombia">Colombia</option>
          <option value="España">España</option>
          <option value="Estados Unidos">Estados Unidos</option>
          <option value="Perú">Perú</option>
          <option value="Brasil">Brasil</option>
          <option value="Argentina">Argentina</option>
          <option value="Chile">Chile</option>
          <option value="Venezuela">Venezuela</option>
          <option value="Uruguay">Uruguay</option>
          <option value="Paraguay">Paraguay</option>
          <option value="Bolivia">Bolivia</option>
          <option value="Ecuador">Ecuador</option>
          <option value="Guatemala">Guatemala</option>
          <option value="Honduras">Honduras</option>
          <option value="Costa Rica">Costa Rica</option>
          <option value="Nicaragua">Nicaragua</option>
        </select>

        <p className="contenido_p_idioma">Región o provincia</p>
        <select className="contenido_select_idioma">
          <option value="Sinaloa">Sinaloa</option>
          <option value="Sonora">Sonora</option>
          <option value="Chihuahua">Chihuahua</option>
          <option value="Tamaulipas">Tamaulipas</option>
          <option value="Veracruz">Veracruz</option>
          <option value="Aguascalientes">Aguascalientes</option>
          <option value="Jalisco">Jalisco</option>
          <option value="Nayarit">Nayarit</option>
          <option value="Campeche">Campeche</option>
          <option value="Coahuila">Coahuila</option>
          <option value="Tabasco">Tabasco</option>
          <option value="Tlaxcala">Tlaxcala</option>
          <option value="Oaxaca">Oaxaca</option>
          <option value="Zacatecas">Zacatecas</option>
          <option value="Quintana Roo">Quintana Roo</option>
          <option value="Yucatán">Yucatán</option>
          <option value="Querétaro">Querétaro</option>
          <option value="Guanajuato">Guanajuato</option>
          <option value="Morelos">Morelos</option>
        </select>

        <p className="contenido_p_idioma">Ciudad</p>
        <select className="contenido_select_idioma">
          <option value="Tijuana">Tijuana</option>
          <option value="Mexicali">Mexicali</option>
          <option value="La Paz">La Paz</option>
          <option value="Puebla">Puebla</option>
          <option value="Acapulco">Acapulco</option>
          <option value="Monterrey">Monterrey</option>
          <option value="Toluca">Toluca</option>
          <option value="Guadalajara">Guadalajara</option>
          <option value="Hermosillo">Hermosillo</option>
          <option value="Durango">Durango</option>
          <option value="Tuxtla Gutierrez">Tuxtla Gutierrez</option>
          <option value="San Luis Potosi">San Luis Potosi</option>
          <option value="Campeche">Campeche</option>
          <option value="Chilpancingo">Chilpancingo</option>
          <option value="Ciudad de Més">Ciudad de Més</option>
          <option value="Ciudad Juarez">Ciudad Juarez</option>
          <option value="Tepic">Tepic</option>
          <option value="Chetumal">Chetumal</option>
          <option value="Villahermosa">Villahermosa</option>
          <option value="Toluca">Toluca</option>
          <option value="Cancun">Cancun</option>
          <option value="Chihuahua">Chihuahua</option>
          <option value="Pachuca">Pachuca</option>
          <option value="Ciudad Obregon">Ciudad Obregon</option>
        </select>
      </div>
    ),

    Donar: (
      <div className="contenido_donar">
        <h3 className="contenido_h3_donar">Metodo</h3>
        <select className="contenido_select_donar">
          <option value="Efectivo">Efectivo</option>
          <option value="Tarjeta">Tarjeta</option>
        </select>

        <Link className="link_paypal_donar">Paypal</Link>

        <h4 className="contenido_h4_donar">Saldo Actual</h4>
        <p className="contenido_p_donar">$0.00</p>
      </div>
    ),

    "Información personal": (
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
    ),
  };

  return (
    <>
      <HeaderComponent />

      <div className="container_ajustes_page">
        <div className="ajustes_page">
          <div className="ajustes_page_div_opciones">
            <Link
              className="ajustes_page_link"
              onClick={() => mostrarContenido("Privacidad")}
            >
              Privacidad
            </Link>
            <Link
              className="ajustes_page_link"
              onClick={() => mostrarContenido("Notificaciones")}
            >
              Notificaciones
            </Link>
            <Link
              className="ajustes_page_link"
              onClick={() => mostrarContenido("Idioma y region")}
            >
              Idioma y region
            </Link>
            <Link
              className="ajustes_page_link"
              onClick={() => mostrarContenido("Donar")}
            >
              Donar
            </Link>
            <Link
              className="ajustes_page_link"
              onClick={() => mostrarContenido("Información personal")}
            >
              Información personal
            </Link>
          </div>

          <div className="ajustes_page_div_opciones_menu">
            {opcionSeleccionada && contenido[opcionSeleccionada]}
          </div>
        </div>
      </div>
    </>
  );
};

export default AjustesPage;
