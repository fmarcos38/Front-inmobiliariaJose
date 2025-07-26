import React from 'react';
import Video from '../../Images/videoLand.mp4';
import ListaEquipo from '../ListaEquipo';
import './styles.css';
import CardPersona from '../CardPersona';
import { ezequiel } from '../../Helps/ArrayEquipo';

function LaEmpresa() {
    const eze = ezequiel;

    return (
        <div className='cont-principal-laEmp'>
            <div className='cont-secundario-laEmp'>
                {/* video con overlay */}
                <div className='cont-video-laEmp'>
                    <div className='overlay-video'></div>
                    <video className='cont-video' autoPlay muted loop>
                        <source src={Video} type="video/mp4" />
                        Tu navegador no soporta la etiqueta de video.
                    </video>
                </div>

                {/* textos sobre el video */}
                <div className='cont-texto-LaEmp'>
                    <h1 className='texto-h1-LaEmp'>Somos una empresa</h1>
                    <h2 className='texto-h2-LaEmp'>Que hacemos foco en lo que el cliente nos pide</h2>
                    <h3 className='texto-h3-LaEmp'>Y a partir de ahí nos contactamos con MARCOS</h3>
                    <h3 className='texto-h3-LaEmp'>de Ortiz Lizmar propiedades y él nos consigue todo!!</h3>
                </div>

                {/* título decorado */}
                <div className='cont-titulo-LaEmp'>
                    <h1 className='titulo-LaEmp'>Nuestro Staff</h1>
                </div>

                {/* primera card separada */}
                <div className='cont-LaEmp-Ezequiel'>
                    <CardPersona {...eze} />
                </div>

                {/* resto del equipo */}
                <div className='cont-LaEmp-Equipo'>
                    <ListaEquipo />
                </div>
            </div>
        </div>
    );
}

export default LaEmpresa;
