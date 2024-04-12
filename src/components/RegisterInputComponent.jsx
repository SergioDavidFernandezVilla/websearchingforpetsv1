const RegisterInputComponent = ({ TextLabel, TextPlaceholder, TextType }) => {
  return (
    <div className="div_input_registrarse">
      <label className="label_registrarse">{TextLabel}</label>
      <input
        className="input_registrarse"
        type={TextType}
        name=""
        id=""
        placeholder={TextPlaceholder}
      />
    </div>
  );
};

export default RegisterInputComponent;
