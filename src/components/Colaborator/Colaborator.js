import "./Colaborator.css";
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Colaborator = ({ data, primary, deleteCollaborator, like }) => {
  const { nombre, puesto, foto, id, fav } = data;

  return (
    <div className="colaborador">
      <span className="delete-btn" onClick={() => deleteCollaborator(id)}>
        <AiFillCloseCircle />
      </span>
      <div className="encabezado" style={{ backgroundColor: primary }}>
        <img src={foto} alt={nombre} />
      </div>
      <div className="info">
        <h4> {nombre} </h4>
        <h5> {puesto} </h5>
        {fav === true ? (
          <AiFillHeart color="red" onClick={() => like(id)} />
        ) : (
          <AiOutlineHeart onClick={() => like(id)} />
        )}
      </div>
    </div>
  );
};

export default Colaborator;
