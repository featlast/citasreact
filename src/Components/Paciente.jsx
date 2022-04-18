import React from 'react';

const Paciente = () => {
    return (
        <div className={'m-3 bg-white py-10 px-10 rounded-xl'}>
            <p className={'font-bold mb-3 text-gray-700 uppercase'}>Nombre:{''}
                <span className={'font-normal normal-case'}>Hook</span>
            </p>
            <p className={'font-bold mb-3 text-gray-700 uppercase'}>Propietario:{''}
                <span className={'font-normal normal-case'}>Jose</span>
            </p>
            <p className={'font-bold mb-3 text-gray-700 uppercase'}>Email:{''}
                <span className={'font-normal normal-case'}>1yopmail.com</span>
            </p>
            <p className={'font-bold mb-3 text-gray-700 uppercase'}>Fecha Alta:{''}
                <span className={'font-normal normal-case'}>10/12/2022</span>
            </p>
            <p className={'font-bold mb-3 text-gray-700 uppercase'}>Síntomas:{''}
                <span className={'font-normal normal-case'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto autem consequuntur deleniti deserunt, dicta enim esse eum, id iure laborum libero magnam neque nesciunt nobis optio placeat similique voluptatibus.</span>
            </p>
        </div>
    );
};

export default Paciente;
