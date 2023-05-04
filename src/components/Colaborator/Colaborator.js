import "./Colaborator.css";
import { AiFillCloseCircle } from "react-icons/ai";

const Colaborator = ({ data, primary, deleteCollaborator }) => {
  const { nombre, puesto, foto, equipo } = data;

  return (
    <div className="colaborador">
      <span className="delete-btn" onClick={deleteCollaborator}>
        <AiFillCloseCircle />{" "}
      </span>{" "}
      <div className="encabezado" style={{ backgroundColor: primary }}>
        <img src={foto} alt={nombre} />{" "}
      </div>{" "}
      <div className="info">
        <h4> {nombre} </h4> <h5> {puesto} </h5>{" "}
      </div>{" "}
    </div>
  );
};

export default Colaborator;
