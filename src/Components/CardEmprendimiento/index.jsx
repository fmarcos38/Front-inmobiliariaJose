import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import IconoUbicacion from '../../Images/Iconos/iconoUbicacion.png';
import IconoSup from '../../Images/Iconos/IconoSup';
import IconoAmb from '../../Images/Iconos/IconoAmb';
import IconoDormitorio from '../../Images/Iconos/IconoDormitorios';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import './styles.css';

function CardEmprendimiento({ id, imagenes, direccionF, locacion, tituloPublicacion, tipo, descripcion }) {
    const [showDetail, setShowDetail] = useState(false);

    return (
        <div className="card-horizontal">
            {/* Imagen con hover */}
            <NavLink to={`/detalleEmp/${id}`} className="card-horizontal-img-container">
                <div
                    onMouseEnter={() => setShowDetail(true)}
                    onMouseLeave={() => setShowDetail(false)}
                    className="img-wrapper"
                >
                    <img src={imagenes[0].imagen} alt="propiedad" className="card-horizontal-img" />
                    {showDetail && <div className="detail-hover"><p data-translate>Detalle</p></div>}
                </div>
            </NavLink>

            {/* Info a la derecha */}
            <div className="card-horizontal-content">
                <div className='cont-info-1-card-horizontal'>
                    <h3 className="card-horizontal-subtitulo">{tituloPublicacion}</h3>
                </div>

                <div className='cont-info-2-card-horizontal'>
                    <div className="card-horizontal-ubicacion">
                        <img src={IconoUbicacion} alt="ubicación" />
                        <span>{direccionF}</span>
                    </div>

                    <p className="card-horizontal-locacion">{locacion}</p>
                </div>
                
                {/* descripción */}
                <div className="cont-info-3-card-horizontal">
                    <p className='p-card-horizontal-descrip'>{descripcion}</p>
                </div>
            </div>
        </div>
    );
}

export default CardEmprendimiento;
