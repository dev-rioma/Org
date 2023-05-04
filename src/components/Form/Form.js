import { useState } from "react";
import Button from "../Button/Button";
import Camp from "../Camp/Camp";
import ListOptions from "../ListOptions/ListOptions";
import "./Form.css";

const Form = ({ Equipos, registerCollaborator, createTeam }) => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [team, setTeam] = useState("");

  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");

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

  const sendFormTeam = (e) => {
    e.preventDefault();
    createTeam({ title, primaryColor: color });
  };

  return (
    <section className="formulario">
      <form onSubmit={sendForm}>
        <h2> Rellena el formulario para crear el colaborador. </h2>{" "}
        <Camp
          title="Nombre"
          placeholder="ingresa Nombre"
          required
          value={name}
          setValue={setName}
        />{" "}
        <Camp
          title="Puesto"
          placeholder="ingresa Puesto"
          required
          value={position}
          setValue={setPosition}
        />{" "}
        <Camp
          title="Foto"
          placeholder="ingresa enlace de foto"
          required
          value={imageUrl}
          setValue={setImageUrl}
        />{" "}
        <ListOptions value={team} setValue={setTeam} Equipos={Equipos} />{" "}
        <Button> Crear </Button>{" "}
      </form>
      <form onSubmit={sendFormTeam}>
        <h2> Rellena el formulario para crear el Equipo. </h2>{" "}
        <Camp
          title="Titulo"
          placeholder="ingresar Titulo"
          required
          value={title}
          setValue={setTitle}
        />{" "}
        <Camp
          title="Color"
          placeholder="ingresa el Color en Hex"
          required
          value={color}
          setValue={setColor}
          type="color"
        />
        <Button>registrar equipo</Button>
      </form>
    </section>
  );
};

export default Form;
