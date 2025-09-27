import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { capitalizar, formatMoney } from '../../Helps';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Favorito from '../Botones/Favoritos';
import MeGusta from '../Botones/BotonMeGusta';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import HotelIcon from '@mui/icons-material/Hotel';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import RoomIcon from '@mui/icons-material/Room';
import './styles.css';

function Card({ 
    id, direccionF, cantCocheras, operacion, imagenes, 
    tituloPublicacion, ambientes, dormitorios, 
    supTotal, supCubierta, supDescubierta, unidadMedida, tipo, vista 
}) {
    const [showDetail, setShowDetail] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const venta = operacion.find(op => op.operacion === "Venta");
    const alquiler = operacion.find(op => op.operacion === "Alquiler");

    const prevImage = (e) => {
        e.preventDefault(); // evitar que se dispare el NavLink
        setCurrentIndex((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1));
    };

    const nextImage = (e) => {
        e.preventDefault();
        setCurrentIndex((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className='contCardHome'>
            {/* img + animacion + abre detalle */}
            <NavLink to={`/detalle/${id}`} className='navLink-card'>
                <div
                    /* onMouseEnter={() => setShowDetail(true)}
                    onMouseLeave={() => setShowDetail(false)} */
                    className="card-image-container"
                >
                    {/* carrusel de imágenes */}
                    <div className='card-image'>
                        <img 
                            src={imagenes[currentIndex]?.original} 
                            alt={`prop-${id}`} 
                            className='card-img' 
                        />

                        {/* Botones de navegación */}
                        {imagenes.length > 1 && (
                            <>
                                <button className="btn-prev" onClick={prevImage}>‹</button>
                                <button className="btn-next" onClick={nextImage}>›</button>
                            </>
                        )}
                    </div>

                    {/* msj detalle si hay hover */}
                    {/* <div className={`detail ${showDetail ? 'show' : ''}`}>
                        <p className='palabra-abre-detalle' data-translate>Detalle</p>
                    </div> */}
                </div>
            </NavLink>

            {/* Titulo, dirección y demás info como antes */}
            <div className='card-info1'>
                <div className='cont-titulo-publicacion-card'>
                    <div className='cont-titulo-card'>
                        <h5 className='tituloPublicacion'>{capitalizar(tituloPublicacion)}</h5>
                    </div>
                    <div className='cont-direcc-icono-card'>
                        <LocationOnIcon sx={{ color: 'grey' }} />
                        <p className='direcc-card'>{direccionF}</p>
                    </div>
                </div>
                
                {/* precio */}
                <div className='cont-precio-fav'>
                    <div className='cont-precio'>
                        {vista === "Venta" && venta && (
                            <p className='precio-card'>
                                {venta.precios[0]?.moneda} {formatMoney(venta.precios[0]?.precio)}
                            </p>
                        )}
                        {vista === "Alquiler" && alquiler && (
                            <p className='precio-card'>
                                {alquiler.precios[0]?.moneda} {formatMoney(alquiler.precios[0]?.precio)}
                            </p>
                        )}
                        {vista === "ambas" && venta && alquiler && (
                            <p className='precio-card'>
                                {venta.precios[0]?.moneda} {formatMoney(venta.precios[0]?.precio)} / {alquiler.precios[0]?.moneda} {formatMoney(alquiler.precios[0]?.precio)}
                            </p>
                        )}
                        {vista === "ambas" && venta && !alquiler && (
                            <p className='precio-card'>
                                {venta.precios[0]?.moneda} {formatMoney(venta.precios[0]?.precio)}
                            </p>
                        )}
                        {vista === "ambas" && alquiler && !venta && (
                            <p className='precio-card'>
                                {alquiler.precios[0]?.moneda} {formatMoney(alquiler.precios[0]?.precio)}
                            </p>
                        )}
                    </div>

                    <div className='cont-fav'>
                        <MeGusta id={id}/>
                        <Favorito 
                            id={id}
                            direccionF={direccionF}
                            cantCocheras={cantCocheras}
                            operacion={operacion}
                            imagenes={imagenes}
                            tituloPublicacion={tituloPublicacion}
                            ambientes={ambientes}
                            dormitorios={dormitorios}
                            unidadMedida={unidadMedida}
                            tipo={tipo}
                        />
                    </div>
                </div>
            </div>
            
            {/* info 2 igual que antes */}
            <div className='card-info2'>
                <div className='div-info2'>
                    <HomeIcon />                    
                    <p className='info2'>Sup. Tot</p>
                    <p className='info2'>{supTotal}m<sup>2</sup></p>
                </div>

                {tipo?.nombre === "Terreno" ? (
                    <>
                        <div className='div-info2'>
                            <RoomIcon />
                            <p className='info2'>Sup. Cub</p>
                            <p className='info2'>{supCubierta}m<sup>2</sup></p>
                        </div>
                        <div className='div-info2'>
                            <RoomIcon />
                            <p className='info2'>Sup. Desc</p>
                            <p className='info2'>{supDescubierta}m<sup>2</sup></p>
                        </div>
                    </>
                ) : (
                    <>
                        <div className='div-info2'>
                            <TagIcon />
                            <p className='info2'>Ambientes</p>
                            <p className='info2'>{ambientes}</p>
                        </div>
                        <div className='div-info2'>
                            <HotelIcon />
                            <p className='info2'>Dormitorios</p>
                            <p className='info2'>{dormitorios}</p>
                        </div>
                        <div className='div-info2'>
                            <DirectionsCarIcon />
                            <p className='info2'>Cocheras</p>
                            <p className='info2'>{cantCocheras}</p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Card;
