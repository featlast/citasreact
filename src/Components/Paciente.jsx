
const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    const {nombre, propietario, email, fecha, sintomas, id} = paciente

    const handleEliminar = () => {
        const respuesta = confirm('Dese Eliminar El Paciente?')

        if (respuesta) {
            eliminarPaciente(id)
        }
    }
    return (
        <div className={'mx-5 my-5 bg-white py-10 px-10 rounded-xl'}>
            <p className={'font-bold mb-3 text-gray-700 uppercase'}>Nombre:{''}
                <span className={'font-normal normal-case'}>{nombre}</span>
            </p>
            <p className={'font-bold mb-3 text-gray-700 uppercase'}>Propietario:{''}
                <span className={'font-normal normal-case'}>{propietario}</span>
            </p>
            <p className={'font-bold mb-3 text-gray-700 uppercase'}>Email:{''}
                <span className={'font-normal normal-case'}>{email}</span>
            </p>
            <p className={'font-bold mb-3 text-gray-700 uppercase'}>Fecha Alta:{''}
                <span className={'font-normal normal-case'}>{fecha}</span>
            </p>
            <p className={'font-bold mb-3 text-gray-700 uppercase'}>Síntomas:{''}
                <span className={'font-normal normal-case'}>{sintomas}</span>
            </p>
            <div className={'justify-between flex mt-8'}>
                <button type={"button"}
                        className={'md:32 uppercase py-2 px-10 bg-blue-800 hover:bg-blue-400 rounded-md font-bold text-white'}
                        onClick={() => setPaciente(paciente)}
                >
                    Editar
                </button>
                <button
                    type={"button"}
                    className={'md:w-32 md:text-center uppercase py-2 px-10 bg-red-700 hover:bg-red-500 rounded-md font-bold text-white'}
                    onClick={handleEliminar}
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
};

export default Paciente;
