import React, { createContext, useState, useEffect } from 'react';
import { userData } from '../localStorage';

export const InmobiliariaContext = createContext();

const InmobiliariaProvider = ({ children }) => {
  const [userLog, setUserLog] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [nombreUser, setNombreUser] = useState('');
  const [isOpenModalVideo, setisOpenModalVideo] = useState(false);
  const [favoritos, setFavoritos] = useState([]);
  // 🆕 Estado global de favoritos
    const [favs, setFavs] = useState([]);

  // Login / Logout
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  // Modal video
  const handleIsOpen = () => setisOpenModalVideo(true);
  const handleIsClose = () => setisOpenModalVideo(false);

  // Cargar usuario si hay uno guardado
  useEffect(() => {
    const userLogin = userData();
    if (userLogin) {
      setUserLog(userLogin);
      setIsAuthenticated(true);
      setNombreUser(userLogin.user);
    }
  }, []);

  // Cargar favoritos desde localStorage al iniciar
  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavoritos(favs);
  }, []);

  // Actualizar localStorage cada vez que cambian los favoritos
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoritos));
  }, [favoritos]);

  // Funciones para agregar / quitar favoritos
  const toggleFavorito = (prop) => {
    setFavoritos((prev) => {
      const existe = prev.find((f) => f.id === prop.id);
      if (existe) {
        return prev.filter((f) => f.id !== prop.id);
      } else {
        return [...prev, prop];
      }
    });
  };

  return (
    <InmobiliariaContext.Provider
      value={{
        userLog, setUserLog,
        isAuthenticated,
        nombreUser,
        login, logout,
        isOpenModalVideo,
        handleIsOpen, handleIsClose,
        favoritos, setFavoritos, toggleFavorito,
        favs,
        setFavs, // ✅ ahora disponible
      }}
    >
      {children}
    </InmobiliariaContext.Provider>
  );
};

export default InmobiliariaProvider;
