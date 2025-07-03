import React from 'react';
import CardEmprendimiento from '../CardEmprendimiento';
import './styles.css';

function ListaEmprendimientos({ emprendimientos }) {
    return (
        <div className="lista-emprendimientos">
            <div className='cont-titulo-emp'>
                <h1>Nuestros Emprendimientos</h1>
            </div>
            {emprendimientos?.map(emp => (
                <CardEmprendimiento key={emp.id} {...emp} />
            ))}
        </div>
    );
}

export default ListaEmprendimientos;
