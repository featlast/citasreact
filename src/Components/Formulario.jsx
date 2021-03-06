import {useState, useEffect} from 'react';
import Error from "./Error";

const Formulario = ({pacientes, setPacientes, paciente,setPaciente}) => {
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState(false)

    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente]);


    const generarId = () => {
        const fecha = Date.now().toString(36)
        const random = Math.random().toString().substring(2)
        return random + fecha

    }


    const handleSubmit = (e) => {
        e.preventDefault();

        //validacion del formulario
        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            setError(true)
            return
        }
        setError(false)

        //Construir un objeto de Paciente
        const objetoPaciente = {
            nombre, propietario, email, fecha, sintomas, id: generarId()
        }

        //Editando Nuevo Registro
        if (paciente.id) {
            objetoPaciente.id = paciente.id
            const pacientesActualizados =
                pacientes.map(pacienteState => pacienteState.id === paciente.id ?
                    objetoPaciente : pacienteState)
            setPacientes(pacientesActualizados)
            setPaciente({})

        } else {
            //Nuevo Registro
            setPacientes([...pacientes, objetoPaciente])
        }

        //Reiniciando El Formulario
        setNombre('')
        setPropietario('')
        setError('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }


    return (<div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

        <p className="text-lg mt-5 text-center mb-10">
            A??ade Pacientes y {''}
            <span className="text-orange-600 font-bold ">Administralos</span>
        </p>

        <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        >
            {error && <Error>Todos los campos son obligatorios</Error>}
            <div className="mb-5">
                <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold ">
                    Nombre Mascota
                </label>
                <input
                    id="mascota"
                    type="text"
                    placeholder="Nombre de la Mascota"
                    className="border-2 w-full p-2 mt-2 placeholder-orange-400 rounded-md capitalize focus:outline-none focus:border-orange-700"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label htmlFor="propietario" className="block text-gray-700  uppercase font-bold">
                    Nombre Propietario
                </label>
                <input
                    id="propietario"
                    type="text"
                    placeholder="Nombre del Propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-orange-400 rounded-md capitalize
                        focus:outline-none focus:border-orange-700"
                    value={propietario}
                    onChange={(e) => setPropietario(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    placeholder="Email Contacto Propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-orange-400 rounded-md focus:outline-none focus:border-orange-700"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
                    Alta
                </label>
                <input
                    id="alta"
                    type="date"
                    className="border-2 w-full p-2 mt-2 placeholder-orange-400 rounded-md focus:outline-none focus:border-orange-700"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
                    S??ntomas
                </label>
                <textarea
                    id="sintomas"
                    className="border-2 w-full p-2 mt-2 placeholder-orange-400 rounded-md focus:outline-none focus:border-orange-700"
                    placeholder="Describe los S??ntomas"
                    value={sintomas}
                    onChange={(e) => setSintomas(e.target.value)}
                />
            </div>

            <input
                type="submit"
                className="bg-orange-600 w-full p-3 text-white uppercase font-bold hover:bg-orange-700 cursor-pointer transition-colors rounded-md hover:ring-orange-200 ring-4 ring-orange-400"
                value={paciente.id ? 'Actualizar Paciente' : 'Agregar Paciente'}
            />
        </form>
    </div>)
}

export default Formulario


