import React from 'react';
import CardEmprendimiento from '../CardEmprendimiento';
import BotonVerTodas from '../Botones/BotonVerTodas';
import './styles.css';

function ListaEmprendimientos({ emprendimientos }) {
    return (
        <div className="cont-lista-emprendimientos">
            <div className='cont-titulo-emp'>
                <div className='cont-h1-listaEmp'>
                    <h1>Nuestros Emprendimientos</h1>
                </div>
                <div className='cont-btn-verTodas-listaEmp'>
                    <BotonVerTodas />
                </div>
            </div>
            {emprendimientos?.map(emp => (
                <CardEmprendimiento key={emp.id} {...emp} />
            ))}
        </div>
    );
}

export default ListaEmprendimientos;
