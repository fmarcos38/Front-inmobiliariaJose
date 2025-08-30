import React, { useState } from "react";
import './style.css';

function FiltrosSelect({
    verTipoOperacion,
    setOperacion,
    setTipoPropiedad,
    setBarrios,
    setAmbientes,
    setPrecioMin,
    setPrecioMax,
}) {
    const operacion = ['Todas', 'Venta', 'Alquiler', 'Emprendimiento'];
    const tipoProp = [
        'Todas', 'Departamento', 'Casa', 'PH', 'Local',
        'Oficina', 'Cochera', 'Terreno', 'Galpón',
    ];
    const ambientes = ['1', '2', '3', '4', 'mas'];
    const barrios = [
        "Terminal Vieja", "Plaza Mitre", "Centro", "Varese", "La Perla", "Guemes", "Chauvin", "Don Bosco",
        "Los Troncos", "Las Margaritas", "El Gaucho", "Barracas de San Benito", "Playa Grande", "Playa Chica",
        "Plaza España", "Arenas del Sur", "Macrocentro", "El Marquesado", "La Armonía", "La Florida", "Lomas De Stella Maris",
        "San Carlos", "Santa Cecilia", "Sierra De Los Padres", "Stella Maris", "Villa Primera", "Chapadmalal",
        "Marayui", "Olas Chapadmalal", "Rumenco", "Rumenco joven", "Casonas del Harás", "Harás del Mar",
        "Las Prunas", "Arenas del Sur", "Arenas Chico", "Cenderos de Rumenco", "Aureal Park", "Developer Aqua", "Costa del Sol",
        "Piñares de Santa Clara", "La Armonía", "La Cercania", "Developer Park",
    ];

    const [localMin, setLocalMin] = useState('');
    const [localMax, setLocalMax] = useState('');
    const [barriosSeleccionados, setBarriosSeleccionados] = useState([]);

    const onChangeTipoOp = (e) => setOperacion(e.target.value);
    const onChangeTipoProp = (e) => setTipoPropiedad(e.target.value);
    const onChangeAmb = (e) => setAmbientes(e.target.value);

    const onChangeBarrio = (e) => {
        const value = e.target.value;
        if (value !== "Barrio" && !barriosSeleccionados.includes(value)) {
            const nuevosBarrios = [...barriosSeleccionados, value];
            setBarriosSeleccionados(nuevosBarrios);
            setBarrios(nuevosBarrios); // sincronizamos con el padre
        }
    };

    const eliminarBarrio = (barrio) => {
        const nuevosBarrios = barriosSeleccionados.filter(b => b !== barrio);
        setBarriosSeleccionados(nuevosBarrios);
        setBarrios(nuevosBarrios);
    };

    const aplicarRangoPrecios = () => {
        setPrecioMin(localMin);
        setPrecioMax(localMax);
    };

    return (
        <div className="cont-filtrosSelect">
            <div className="subCont-filtrosSelect">
                <div className="cont-filtro-tipoOperacion">
                    <p className='focoCompra'>Filtros</p>
                </div>
                <div className="cont-selects">
                    <div className="cont-op-tipoP">
                        {
                            verTipoOperacion === 'true' &&
                            <select onChange={onChangeTipoOp} className="select-tipoProp">
                                <option>Tipo de operación</option>
                                {operacion.map(op => (
                                    <option key={op} value={op}>{op}</option>
                                ))}
                            </select>
                        }
                        <select onChange={onChangeTipoProp} className="select-tipoProp">
                            <option>Tipo de propiedad</option>
                            {tipoProp.map(prop => (
                                <option key={prop} value={prop}>{prop}</option>
                            ))}
                        </select>
                    </div>

                    {/* barrios */}
                    <div className="cont-amb-destacadas">
                        <select onChange={onChangeBarrio} className="select-tipoProp">
                            <option>Barrio</option>
                            {barrios.map(barrio => (
                                <option key={barrios} value={barrio}>{barrio}</option>
                            ))}
                        </select>
                    </div>

                    {/* ambientes */}
                    <div className="cont-amb-destacadas">
                        <select onChange={onChangeAmb} className="select-tipoProp">
                            <option>Ambientes</option>
                            {ambientes.map(amb => (
                                <option key={amb} value={amb}>{amb}</option>
                            ))}
                        </select>
                    </div>

                    {/* precios */}
                    <div className="cont-primario-precio">
                        <div className="cont-filtro-precioMaxMin">
                            <label>Precio</label>
                            <input
                                type="number"
                                value={localMin}
                                onChange={(e) => setLocalMin(e.target.value)}
                                placeholder="Desde"
                                className="input-precioMin"
                            />
                            <input
                                type="number"
                                value={localMax}
                                onChange={(e) => setLocalMax(e.target.value)}
                                placeholder="Hasta"
                                className="input-precioMin"
                            />
                            <button
                                className="btn-aplicar-precio"
                                onClick={aplicarRangoPrecios}
                            >
                                Aplicar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mostrar barrios seleccionados */}
                    {barriosSeleccionados.length > 0 && (
                        <div className="barrios-seleccionados">
                            {barriosSeleccionados.map(b => (
                                <div key={b} className="barrio-item">
                                    <span>{b}</span>
                                    <button
                                        onClick={() => eliminarBarrio(b)}
                                        className="btn-eliminar-barrio"
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
        </div>
    );
}

export default FiltrosSelect;
