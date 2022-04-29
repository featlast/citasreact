import {useState, useEffect} from "react";
import Header from "./Components/Header";
import Formulario from "./Components/Formulario";
import ListadoPacientes from "./Components/ListadoPacientes";

function App() {
    //const pacientesLS = ;
    //Con la instruccion en el useState obtiene lo que hay en el localstorage
    const [pacientes, setPacientes] = useState((JSON.parse(localStorage.getItem('pacientes')) ?? []));
    const [paciente, setPaciente] = useState({});

    console.log(pacientes)


    //Obtener lo que hay en el localstorage
    // useEffect(() => {
    //     const obtenerLS = () => {
    //         const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
    //         console.log(pacientesLS)
    //         //setPacientes(pacientesLS)
    //     }
    //     obtenerLS()
    // }, []);

    //agregando datos al localStorage
    useEffect(() => {
        localStorage.setItem('pacientes', JSON.stringify(pacientes))
    }, [pacientes]);


    //eliminar paciente
    const eliminarPaciente = (id) => {
        const pacientesEliminados = pacientes.filter(paciente => paciente.id !== id)
        setPacientes(pacientesEliminados)
    }


    return (
        <div className="container mx-auto mt-20">
            <Header/>
            <div className={"mt-12 md:flex"}>
                <Formulario
                    pacientes={pacientes}
                    setPacientes={setPacientes}
                    paciente={paciente}
                    setPaciente={setPaciente}
                />
                <ListadoPacientes
                    pacientes={pacientes}
                    setPaciente={setPaciente}
                    eliminarPaciente={eliminarPaciente}
                />
            </div>


        </div>
    )
}

export default App
