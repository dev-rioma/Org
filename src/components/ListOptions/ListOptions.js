import "./ListOptions.css";

const ListOptions = ({ value, setValue, Equipos }) => {
  const manageChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="lista-opciones">
      {" "}
      <label htmlFor=""> Equipos </label>{" "}
      <select value={value} onChange={manageChange}>
        {" "}
        <option value="" disabled defaultValue="" hidden>
          {" "}
          Seleccionar equipo{" "}
        </option>{" "}
        {Equipos.map((equipo, index) => (
          <option key={index} value={equipo}>
            {" "}
            {equipo}{" "}
          </option>
        ))}{" "}
      </select>{" "}
    </div>
  );
};

export default ListOptions;
