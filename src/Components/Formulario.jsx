import React from 'react';

const Formulario = () => {
    return (
        <div className={'md:w-1/2 lg:w-2/5 mb-10' }>
            <h2 className={'font-black text-3xl text-center'}> Seguimiento Paciente</h2>
            <p className={'text-lg mt-5 text-center mb-10'}>
                Añade Pacientes y {''}
                <span className={'text-orange-600 font-bold '}>Administralos</span>
            </p>
            <form className={'bg-white rounded-lg py-10 px-5 shadow-md '}>
                <div className={'mb-5'}>
                    <label htmlFor={'mascota'} className={'block text-gray-700 uppercase font-bold '}>
                        Nombre Mascota</label>
                    <input
                        id={'mascota'}
                        type={"text"}
                        placeholder={"Nombre Mascota"}
                        className={'border-2 w-full p-2 mt-2 placeholder-orange-400 rounded-md'}/>
                </div>
                <div className={'mb-5'}>
                    <label htmlFor={'propietario'} className={'block text-gray-700 uppercase font-bold'}>Propietario
                    </label>
                    <input
                        id={'propietario'}
                        type={"text"}
                        placeholder={"Propietario"}
                        className={'border-2 w-full p-2 mt-2 placeholder-orange-400 rounded-md'}/>
                </div>
                <div className={'mb-5'}>
                    <label htmlFor={'email'} className={'block text-gray-700 uppercase font-bold'}>Email
                    </label>
                    <input
                        id={'email'}
                        type={"email"}
                        placeholder={"Email Contacto"}
                        className={'border-2 w-full p-2 mt-2 placeholder-orange-400 rounded-md'}/>
                </div>
                <div className={'mb-5'}>
                    <label htmlFor={'alta'} className={'block text-gray-700 uppercase font-bold'}>Alta
                    </label>
                    <input
                        id={'alta'}
                        type={"date"}
                        className={'border-2 w-full p-2 mt-2 rounded-md'}/>
                </div>
                <div className={'mb-5'}>
                    <label htmlFor={'propietario'} className={'block text-gray-700 uppercase font-bold'}>Propietario
                    </label>
                    <input
                        id={'propietario'}
                        type={"text"}
                        placeholder={"Propietario"}
                        className={'border-2 w-full p-2 mt-2 placeholder-orange-400 rounded-md'}/>
                </div>
                <div className={'mb-5'}>
                    <label htmlFor={'sintomas'} className={'block text-gray-700 uppercase font-bold'}>Síntomas
                    </label>
                    <textarea
                    id={'sintomas'}
                    className={'border-2 w-full p-2 mt-2 placeholder-orange-400 rounded-md'}
                    placeholder={'Describe los sintomas'}
                    />
                </div>
                <input
                type={'submit'}
                className={'bg-orange-600 w-full p-3 text-white font-bold uppercase hover:bg-orange-800 cursor-pointer transition-shadow rounded-lg'}
                value={'Agregar Paciente'}
                />
            </form>
        </div>
    );
};

export default Formulario;



