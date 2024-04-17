const ContenidoPrivacidadComponent = () => {
  return (
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

      <p className="contenido_p_privacidad">¿Quien puede enviarme mensajes?</p>

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
  );
};

export default ContenidoPrivacidadComponent;
