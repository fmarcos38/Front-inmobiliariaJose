import React from 'react';
import './styles.css';
//import './stylesRectangular.css';

function CardPersona({imgPersona, nombre, texto}) {
    console.log("imgPersona :", imgPersona)
    return (
        <div className='cont-principal-cardP'>
            <div className='cont-img-persona'>
                <img src={imgPersona} alt='not found' className='img-persona-card' />
            </div>
            <div className='cont-inf-persona'>
                <p className='nombre-persona'>{nombre}</p>
                <p className='texto-persona'>{texto}</p>
            </div>
        </div>
    )
}

export default CardPersona