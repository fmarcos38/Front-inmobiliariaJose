import React, { useEffect, useContext } from 'react';
import { InmobiliariaContext } from '../../Context';
import ListaFavoritos from '../../Components/ListaFavoritos';
import './styles.css';

function FavoritosPage() {
    const { favs, setFavs } = useContext(InmobiliariaContext);

    // Desplaza la página hacia la parte superior cuando el componente se monta
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Sincroniza con el localStorage (por si recargan la página)
    useEffect(() => {
        const listaFav = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavs(listaFav);
    }, [setFavs]);

    return (
        <div className='page-favoritos'>
            <ListaFavoritos allProps={favs} />
        </div>
    );
}

export default FavoritosPage;
