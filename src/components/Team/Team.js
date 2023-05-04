import Colaborator from "../Colaborator/Colaborator";
import hexToRgba from "hex-to-rgba";
import "./Team.css";

const Team = ({
  title,
  primary,
  secundary,
  collaborators,
  deleteCollaborator,
  updateColor,
}) => {
  return (
    <>
      {" "}
      {collaborators.length > 0 && (
        <section
          className="equipo"
          style={{ backgroundColor: hexToRgba(primary, 0.4) }}
        >
          <input
            type="color"
            className="input-color"
            value={primary}
            onChange={(e) => {
              updateColor(e.target.value, title);
            }}
          />{" "}
          <h3 style={{ borderColor: primary }}> {title} </h3>{" "}
          <div className="colaboradores">
            {" "}
            {collaborators.map((collaborator, index) => (
              <Colaborator
                key={index}
                data={collaborator}
                primary={primary}
                deleteCollaborator={deleteCollaborator}
              />
            ))}{" "}
          </div>{" "}
        </section>
      )}{" "}
    </>
  );
};

export default Team;
