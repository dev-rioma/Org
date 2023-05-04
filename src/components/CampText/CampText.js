import "./CampText.css";

const CampText = ({ title, placeholder, required, value, setValue }) => {
  const manageChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="campo-texto">
      <label> {title} </label>{" "}
      <input
        placeholder={placeholder}
        type="text"
        required={required}
        value={value}
        onChange={manageChange}
      />{" "}
    </div>
  );
};

export default CampText;
