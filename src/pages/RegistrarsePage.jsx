import logo from "../assets/img/logo.png";
import perfilImg from "../assets/Icons/icon_btn_photoperfil.png";
import "../css/Registrarse.css";

import { useState } from "react";
import RegisterInputComponent from "../components/RegisterInputComponent.jsx";

const RegistrarsePage = () => {
  return (
    <div className="container_registrarse_page">
      <div className="div_logo_registrarse">
        <picture className="picture_logo_registrarse">
          <img className="img_logo_registrarse" src={logo} alt="logo" />
        </picture>
      </div>

      {/*PANTALLA CARGA DE IMAGEN*/}

      <form className="form_registrarse" action="">
        <RegisterInputComponent
          TextLabel="Nombre: "
          TextPlaceholder="Escribe tu nombre de usuario"
          TextType="text"
        />
        <RegisterInputComponent
          TextLabel="Email: "
          TextPlaceholder="Escribe tu correo electronico"
          TextType="email"
        />
        <RegisterInputComponent
          TextLabel="Contraseña: "
          TextPlaceholder="Escribe tu contraseña"
          TextType="password"
        />

        {/*FOTO PERFIL*/}
        <div className="div_input_registrarse">
          <label className="label_registrarse">Foto de perfil: </label>

          <input
            type="file"
            name=""
            id=""
            className="input_registrarse_file_img"
            placeholder="Cargar imagen"
          />

          <button className="btn_input_registrarse_sin_foto">Sin foto</button>
        </div>

        <div className="div_input_registrarse">
          <label className="label_registrarse">Pais: </label>
          <select name="" id="" className="select_registrarse">
            <option className="option_registrarse" value="mexico">
              Mexico
            </option>
            <option className="option_registrarse" value="argentina">
              Argentina
            </option>
            <option className="option_registrarse" value="brazil">
              Brazil
            </option>
            <option className="option_registrarse" value="chile">
              Chile
            </option>
            <option className="option_registrarse" value="colombia">
              Colombia
            </option>
            <option className="option_registrarse" value="ecuador">
              Ecuador
            </option>
            <option className="option_registrarse" value="paraguay">
              Paraguay
            </option>
            <option className="option_registrarse" value="peru">
              Peru
            </option>
            <option className="option_registrarse" value="uruguay">
              Uruguay
            </option>
            <option className="option_registrarse" value="venezuela">
              Venezuela
            </option>
          </select>
        </div>

        <div className="div_input_registrarse">
          <label className="label_registrarse">Estado o provincia: </label>
          <select name="" id="" className="select_registrarse">
            <option className="option_registrarse" value="sinaloa">
              Sinaloa
            </option>
            <option className="option_registrarse" value="baja california">
              Baja California
            </option>
            <option className="option_registrarse" value="baja california sur">
              Baja California Sur
            </option>
            <option className="option_registrarse" value="campeche">
              Campeche
            </option>
            <option className="option_registrarse" value="chihuahua">
              Chihuahua
            </option>
            <option className="option_registrarse" value="coahuila">
              Coahuila
            </option>
            <option className="option_registrarse" value="colima">
              Colima
            </option>
            <option className="option_registrarse" value="durango">
              Durango
            </option>
            <option className="option_registrarse" value="guanajuato">
              Guanajuato
            </option>
            <option className="option_registrarse" value="guerrero">
              Guerrero
            </option>
            <option className="option_registrarse" value="hidalgo">
              Hidalgo
            </option>
            <option className="option_registrarse" value="jalisco">
              Jalisco
            </option>
            <option className="option_registrarse" value="michoacan">
              Michoacan
            </option>
            <option className="option_registrarse" value="morelos">
              Morelos
            </option>
            <option className="option_registrarse" value="nayarit">
              Nayarit
            </option>
            <option className="option_registrarse" value="nuevo leon">
              Nuevo Leon
            </option>
            <option className="option_registrarse" value="oaxaca">
              Oaxaca
            </option>
            <option className="option_registrarse" value="puebla">
              Puebla
            </option>
            <option className="option_registrarse" value="queretaro">
              Queretaro
            </option>
            <option className="option_registrarse" value="quintana roo">
              Quintana Roo
            </option>
            <option className="option_registrarse" value="san luis potosi">
              San Luis Potosi
            </option>
          </select>
        </div>

        <div className="div_input_registrarse">
          <label className="label_registrarse">Ciudad:</label>
          <select name="" id="" className="select_registrarse">
            <option className="option_registrarse" value="Culiacan">
              Culiacan
            </option>
            <option className="option_registrarse" value="Monterrey">
              Monterrey
            </option>
            <option className="option_registrarse" value="Puebla">
              Puebla
            </option>
            <option className="option_registrarse" value="Tijuana">
              Tijuana
            </option>
            <option className="option_registrarse" value="Mexicali">
              Mexicali
            </option>
            <option className="option_registrarse" value="Ensenada">
              Ensenada
            </option>
            <option className="option_registrarse" value="La Paz">
              La Paz
            </option>
            <option className="option_registrarse" value="Guadalajara">
              Guadalajara
            </option>
            <option className="option_registrarse" value="Mexico City">
              Mexico City
            </option>
            <option className="option_registrarse" value="Guadalajara">
              Guadalajara
            </option>
            <option className="option_registrarse" value="Cancun">
              Cancun
            </option>
            <option className="option_registrarse" value="Acapulco">
              Acapulco
            </option>
            <option className="option_registrarse" value="Hermosillo">
              Hermosillo
            </option>
            <option className="option_registrarse" value="Chihuahua">
              Chihuahua
            </option>
            <option className="option_registrarse" value="Toluca">
              Toluca
            </option>
          </select>
        </div>

        <div className="div_btn_registrarse">
          <button className="btn_registrarse">Registrarse</button>
        </div>
      </form>
    </div>
  );
};

export default RegistrarsePage;
