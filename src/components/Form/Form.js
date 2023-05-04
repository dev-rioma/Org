import { useState } from "react";
import Button from "../Button/Button";
import CampText from "../CampText/CampText";
import ListOptions from "../ListOptions/ListOptions";
import "./Form.css";

const Form = ({ Equipos, registerCollaborator }) => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [team, setTeam] = useState("");

  const sendForm = (e) => {
    e.preventDefault();
    let dataSend = {
      nombre: name,
      puesto: position,
      foto: imageUrl,
      equipo: team,
    };
    registerCollaborator(dataSend);
  };

  return (
    <section className="formulario">
      <form onSubmit={sendForm}>
        <h2> Rellena el formulario para crear el colaborador. </h2>{" "}
        <CampText
          title="Nombre"
          placeholder="ingresa Nombre"
          required
          value={name}
          setValue={setName}
        />{" "}
        <CampText
          title="Puesto"
          placeholder="ingresa Puesto"
          required
          value={position}
          setValue={setPosition}
        />{" "}
        <CampText
          title="Foto"
          placeholder="ingresa enlace de foto"
          required
          value={imageUrl}
          setValue={setImageUrl}
        />{" "}
        <ListOptions value={team} setValue={setTeam} Equipos={Equipos} />{" "}
        <Button> Crear </Button>{" "}
      </form>{" "}
    </section>
  );
};

export default Form;
