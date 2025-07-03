import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProps, getPropsDestacadas, getPropsMap, getEmprendimientos } from '../../Redux/Actions';
import Loading from '../../Components/Loading';
import LandigA from '../../Components/LandingA';
import ListaPropiedades from '../../Components/ListaPropiedades'
import './styles.css';
import ListaPropsDestacadas from '../../Components/ListaPropsDestacadas';
import ListaEmprendimientos from '../../Components/ListaEmprendimientos';

function Home() {

    const loading = useSelector(state => state.loading);
    const allProps = useSelector(state => state.propiedades);
    const allPropsMap = useSelector(state => state.propsMap);
    const allPropsDestacadas = useSelector(state => state.propsDestacadas);
    const allEmp = useSelector(state => state.emprendimientos);
    const totalPropiedades = useSelector(state => state.totPropiedades);
    //estados para las propiedades
    const [operacion, setOperacion] = useState('');
    const [tipoPropiedad, setTipoPropiedad] = useState('Todas');
    const [ambientes, setAmbientes] = useState(); //en el back lo convierto a int
    const [precioMin, setPrecioMin] = useState();
    const [precioMax, setPrecioMax] = useState();
    const [destacadas, setDestacadas] = useState(false);

    //estados para paginación
    const [currentPage, setCurrentPage] = useState(1);
    const propiedadesPorPagina = 12;
    const limit = propiedadesPorPagina;
    const offset = (currentPage - 1) * limit;
    const dispatch = useDispatch();

    //efecto para iniciar pag desde scroll 0
    useEffect(() => {
        requestAnimationFrame(() => {
            window.scrollTo(0, 0);
        });
    }, []);
    //vuelve el scroll hacia arriba
    useEffect(() => {
        window.scrollTo(0, 600);
    }, [currentPage]);

    useEffect(() => {
        dispatch(getPropsDestacadas());
        dispatch(getEmprendimientos());
        dispatch(getPropsMap(limit, offset, operacion, tipoPropiedad, precioMin, precioMax, ambientes, destacadas));
        dispatch(getProps(limit, offset, operacion, tipoPropiedad, precioMin, precioMax, ambientes, destacadas));
    }, [dispatch, limit, offset, operacion, tipoPropiedad, ambientes, precioMin, precioMax, destacadas]);

    return (
        loading ? (
            <Loading />
        ) : (
            <div className='cont-home'>
                <LandigA />
                {/* Destacadas */}
                <div className='cont-home-propsDestacadas'>
                    <ListaPropsDestacadas allPropsDestacadas={allPropsDestacadas} />
                </div>

                {/* Emprendimientos */}
                <div className='cont-home-propsDestacadas'>
                    <ListaEmprendimientos emprendimientos={allEmp} />
                </div>
            </div>
        )
    )
}

export default Home