import React from 'react';
//import NoHayProps from '../NoHayProps';
import BotonVerTodas from '../Botones/BotonVerTodas';
import CardPropsRectangular from '../CardPropsRectangular';
import './styles.css';

function ListaPropiedades({ allProps, vista }) {

    return (
        <div className="lista-emprendimientos">
            <div className='cont-titulo-emp'>
                <div className='cont-h1-listaEmp'>
                    <h1>Nuestras Propiedades</h1>
                </div>
                <div className='cont-btn-verTodas-listaEmp'>
                    <BotonVerTodas />
                </div>
            </div>
            {
                allProps?.map(prop => (
                    <CardPropsRectangular key={prop.id} {...prop} vista={vista}/>
                ))
            }
        </div>
    )
}

export default ListaPropiedades