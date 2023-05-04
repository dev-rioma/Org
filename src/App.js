import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import MiOrg from "./components/MiOrg/MiOrg";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";

function App() {
    const [viewForm, setViewForm] = useState(true);
    const [collaborators, setcollaborators] = useState([{
            equipo: "Front End",
            foto: "https://github.com/harlandlohora.png",
            nombre: "Harland Lohora",
            puesto: "Instructor",
        },
        {
            equipo: "Front End",
            foto: "https://github.com/dev-rioma.png",
            nombre: "Jorge Acevedo",
            puesto: "Desarrollador",
        },
        {
            equipo: "Front End",
            foto: "https://github.com/JoalGorod.png",
            nombre: "Jorge Gonzales",
            puesto: "Desarrollador",
        },
        {
            equipo: "Front End",
            foto: "https://github.com/luicast.png",
            nombre: "Luis Castilla",
            puesto: "Desarrollador",
        },
        {
            equipo: "Programación",
            foto: "https://github.com/JhoanRodriguez.png",
            nombre: "jhoan Rodriguez",
            puesto: "Instructor",
        },
        {
            equipo: "Programación",
            foto: "https://github.com/ruth9403.png",
            nombre: "Ruth Melissa",
            puesto: "Instructora",
        },
        {
            equipo: "Programación",
            foto: "https://github.com/genesysaluralatam.png",
            nombre: "Genesys Rendon",
            puesto: "Instructora",
        },
        {
            equipo: "Programación",
            foto: "https://github.com/JeanmarieAluraLatam.png",
            nombre: "Jean Marie",
            puesto: "Desarrolladora",
        },

        {
            equipo: "Programacion",
            foto: "https://github.com/genesysaluralatam.png",
            nombre: "Genesys Rondon",
            puesto: "Desarrolladora de software e instructora",
        },
        {
            equipo: "UX y Diseño",
            foto: "https://github.com/JeanmarieAluraLatam.png",
            nombre: "Jeanmarie Quijada",
            puesto: "Instructora en Alura Latam",
        },
        {
            equipo: "Programacion",
            foto: "https://github.com/christianpva.png",
            nombre: "Christian Velasco",
            puesto: "Head de Alura e Instructor",
        },
        {
            equipo: "Innovación y Gestión",
            foto: "https://github.com/JoseDarioGonzalezCha.png",
            nombre: "Jose Gonzalez",
            puesto: "Dev FullStack",
        },
    ]);
    const [equipos, setEquipos] = useState([{
            title: "Programación",
            primaryColor: "#57C278",
            secundaryColor: "#D9F7E9",
        },
        {
            title: "Front End",
            primaryColor: "#82CFFA",
            secundaryColor: "#E8F8FF",
        },
        {
            title: "Data Science",
            primaryColor: "#A6D157",
            secundaryColor: "#F0F8E2",
        },
        {
            title: "Devops",
            primaryColor: "#E06B69",
            secundaryColor: "#FDE7E8",
        },
        {
            title: "UX y Diseño",
            primaryColor: "#DB6EBF",
            secundaryColor: "#FAE9F5",
        },
        {
            title: "Movil",
            primaryColor: "#FFBA05",
            secundaryColor: "#FFF5D9",
        },
        {
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
    const deleteCollaborator = () => {
        console.log("Eliminado");
    };

    //Actualizar color de equipo
    const updateColor = (color, title) => {
        console.log("actualizar color: ", color, title);
        const updateTeams = equipos.map((equipo) => {
            if (equipo.title === title) {
                equipo.primaryColor = color;
            }
            return equipo;
        });

        setEquipos(updateTeams);
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

    return ( <
        div >
        <
        Header / > { /* {viewForm ? <Form /> : <> </>} */ } {
            viewForm && ( <
                Form registerCollaborator = { registerCollaborator }
                Equipos = { equipos.map((equipo) => equipo.title) }
                />
            )
        } <
        MiOrg onClickOrg = { onClickOrg }
        />{" "} {
            equipos.map((equipo, index) => ( <
                Team key = { index }
                title = { equipo.title }
                primary = { equipo.primaryColor }
                secundary = { equipo.secundaryColor }
                collaborators = {
                    collaborators.filter(
                        (collaborator) => collaborator.equipo === equipo.title
                    )
                }
                deleteCollaborator = { deleteCollaborator }
                updateColor = { updateColor }
                />
            ))
        } <
        Footer / >
        <
        /div>
    );
}

export default App;