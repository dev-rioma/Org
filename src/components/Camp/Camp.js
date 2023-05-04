import "./CampText.css";

const Camp = ({
  title,
  placeholder,
  required,
  value,
  setValue,
  type = "text",
}) => {
  const manageChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={`campo campo-${type}`}>
      <label> {title} </label>{" "}
      <input
        placeholder={placeholder}
        type={type}
        required={required}
        value={value}
        onChange={manageChange}
      />{" "}
    </div>
  );
};

export default Camp;
