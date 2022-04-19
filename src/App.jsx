import {useState} from "react";
import Header from "./Components/Header";
import Formulario from "./Components/Formulario";
import ListadoPacientes from "./Components/ListadoPacientes";

function App() {
    const [pacientes, setPacientes] = useState([]);
    const imprimirDos = () => {
        console.log(2+2)
    }
    return (
        <div className="container mx-auto mt-20">
            <Header numeros={1} isAdmin={false} fn={imprimirDos} />
            <div className={"mt-12 md:flex"}>
                <Formulario/>
                <ListadoPacientes/>
            </div>


        </div>
    )
}

export default App
