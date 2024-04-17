const ContenidoNotificacionesComponent = () => {
  return (
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
  );
};

export default ContenidoNotificacionesComponent;
