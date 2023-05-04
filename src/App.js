import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import MiOrg from "./components/MiOrg/MiOrg";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";

function App() {
  const [viewForm, setViewForm] = useState(false);
  const [collaborators, setcollaborators] = useState([
    {
      id: uuidv4(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: true,
    },
    {
      id: uuidv4(),
      equipo: "Front End",
      foto: "https://github.com/dev-rioma.png",
      nombre: "Jorge Acevedo",
      puesto: "Desarrollador",
      fav: false,
    },
    {
      id: uuidv4(),
      equipo: "Front End",
      foto: "https://github.com/JoalGorod.png",
      nombre: "Jorge Gonzales",
      puesto: "Desarrollador",
      fav: false,
    },
    {
      id: uuidv4(),
      equipo: "Front End",
      foto: "https://github.com/luicast.png",
      nombre: "Luis Castilla",
      puesto: "Desarrollador",
      fav: false,
    },
    {
      id: uuidv4(),
      equipo: "Programación",
      foto: "https://github.com/JhoanRodriguez.png",
      nombre: "jhoan Rodriguez",
      puesto: "Instructor",
      fav: false,
    },
    {
      id: uuidv4(),
      equipo: "Programación",
      foto: "https://github.com/ruth9403.png",
      nombre: "Ruth Melissa",
      puesto: "Instructora",
      fav: false,
    },
    {
      id: uuidv4(),
      equipo: "Programación",
      foto: "https://github.com/genesysaluralatam.png",
      nombre: "Genesys Rendon",
      puesto: "Instructora",
      fav: false,
    },
    {
      id: uuidv4(),
      equipo: "Programación",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jean Marie",
      puesto: "Desarrolladora",
      fav: false,
    },

    {
      id: uuidv4(),
      equipo: "Programacion",
      foto: "https://github.com/genesysaluralatam.png",
      nombre: "Genesys Rondon",
      puesto: "Desarrolladora de software e instructora",
      fav: false,
    },
    {
      id: uuidv4(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: false,
    },
    {
      id: uuidv4(),
      equipo: "Programacion",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav: false,
    },
    {
      id: uuidv4(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: false,
    },
  ]);
  const [equipos, setEquipos] = useState([
    {
      id: uuidv4(),
      title: "Programación",
      primaryColor: "#57C278",
      secundaryColor: "#D9F7E9",
    },
    {
      id: uuidv4(),
      title: "Front End",
      primaryColor: "#82CFFA",
      secundaryColor: "#E8F8FF",
    },
    {
      id: uuidv4(),
      title: "Data Science",
      primaryColor: "#A6D157",
      secundaryColor: "#F0F8E2",
    },
    {
      id: uuidv4(),
      title: "Devops",
      primaryColor: "#E06B69",
      secundaryColor: "#FDE7E8",
    },
    {
      id: uuidv4(),
      title: "UX y Diseño",
      primaryColor: "#DB6EBF",
      secundaryColor: "#FAE9F5",
    },
    {
      id: uuidv4(),
      title: "Movil",
      primaryColor: "#FFBA05",
      secundaryColor: "#FFF5D9",
    },
    {
      id: uuidv4(),
      title: "Innovación y Gestión",
      primaryColor: "#FF8A29",
      secundaryColor: "#FFEEDF",
    },
  ]);

  const onClickOrg = () => {
    setViewForm(!viewForm);
  };

  //register colaborator
  const registerCollaborator = (newCollaborator) => {
    console.log("registrado", newCollaborator);
    setcollaborators([...collaborators, newCollaborator]);
  };

  //eliminar colaborador
  const deleteCollaborator = (id) => {
    console.log("Eliminado", id);
    const newCollaborators = collaborators.filter(
      (collaborator) => collaborator.id !== id
    );
    setcollaborators(newCollaborators);
  };

  //Actualizar color de equipo
  const updateColor = (color, id) => {
    console.log("actualizar color: ", color, id);
    const updateTeams = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.primaryColor = color;
      }
      return equipo;
    });

    setEquipos(updateTeams);
  };

  //Crear equipo
  const createTeam = (newTeam) => {
    console.log("crear equipo", newTeam);
    setEquipos([...equipos, { ...newTeam, id: uuidv4() }]);
  };

  const like = (id) => {
    const newCollaboratorUpdate = collaborators.map((collaborator) => {
      if (collaborator.id === id) {
        collaborator.fav = !collaborator.fav;
      }
      return collaborator;
    });

    setcollaborators(newCollaboratorUpdate);
  };

  // //list of teams
  // const Equipos = [
  //   {
  //     title: "Programación",
  //     primaryColor: "#57C278 ",
  //     seundaryColor: "#D9F7E9",
  //   },
  //   {
  //     title: "Front End",
  //     primaryColor: "#82CFFA ",
  //     seundaryColor: "#E8F8FF",
  //   },
  //   {
  //     title: "Data Science",
  //     primaryColor: "#A6D157",
  //     seundaryColor: "#F0F8E2",
  //   },
  //   {
  //     title: "Devops",
  //     primaryColor: "#E06B69",
  //     seundaryColor: "#FDE7E8",
  //   },
  //   {
  //     title: "UX y Diseño",
  //     primaryColor: "#DB6EBF",
  //     seundaryColor: "#FAE9F5",
  //   },
  //   {
  //     title: "Movil",
  //     primaryColor: "#FFBA05",
  //     seundaryColor: "#FFF5D9",
  //   },
  //   {
  //     title: "Innovación y Gestión",
  //     primaryColor: "#FF8A29",
  //     seundaryColor: "#FFEEDF",
  //   },
  // ];

  return (
    <div>
      <Header />
      {/* {viewForm ? <Form /> : <> </>} */}

      {viewForm && (
        <Form
          registerCollaborator={registerCollaborator}
          Equipos={equipos.map((equipo) => equipo.title)}
          createTeam={createTeam}
        />
      )}

      <MiOrg onClickOrg={onClickOrg} />
      {equipos.map((equipo, index) => (
        <Team
          key={index}
          id={equipo.id}
          title={equipo.title}
          primary={equipo.primaryColor}
          secundary={equipo.secundaryColor}
          collaborators={collaborators.filter(
            (collaborator) => collaborator.equipo === equipo.title
          )}
          deleteCollaborator={deleteCollaborator}
          updateColor={updateColor}
          like={like}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
