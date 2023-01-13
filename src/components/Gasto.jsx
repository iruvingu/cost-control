import React from "react";
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

import { formatearFecha } from "../helpers";

import IconoAhorro from "../img/icono_ahorro.svg";
import IconoCasa from "../img/icono_casa.svg";
import IconoComida from "../img/icono_comida.svg";
import IconoGastos from "../img/icono_gastos.svg";
import IconoOcio from "../img/icono_ocio.svg";
import IconoSalud from "../img/icono_salud.svg";
import IconoSuscripciones from "../img/icono_suscripciones.svg";

const diccionarioIconos = {
    earn: IconoAhorro,
    food: IconoComida,
    house: IconoCasa,
    miscellaneous: IconoGastos,
    hobby: IconoOcio,
    health: IconoSalud,
    suscriptions: IconoSuscripciones,
};

const Gasto = ({ gasto, setGastoEditar, eliminarGasto }) => {
    const { categoria, nombre, cantidad, id, fecha } = gasto;

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => setGastoEditar(gasto)}>
                Edit
            </SwipeAction>
        </LeadingActions>
    );

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction onClick={() => eliminarGasto(id)} destructive={true}>
                Delete
            </SwipeAction>
        </TrailingActions>
    );

    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className="flex justify-between items-center gap-8 mb-8 w-full bg-white p-16 rounded-3xl shadow-xl">
                    <div className="flex items-center gap-2">
                        <img
                            className="w-40"
                            src={diccionarioIconos[categoria]}
                            alt="Icono Gasto"
                        />
                        <div>
                            <p className="mb-1 text-gray-500 text-lg font-black uppercase">
                                {categoria}
                            </p>
                            <p className="mb-3 text-gray-700 text-3xl font-black hover:cursor-pointer">
                                {nombre}
                            </p>
                            <p className="mb-3 text-gray-700 text-3xl font-black">
                                Added in: {""}
                                <span className="font-normal">
                                    {formatearFecha(fecha)}
                                </span>
                            </p>
                        </div>
                    </div>
                    <p className="text-4xl text-black font-black">
                        ${cantidad}
                    </p>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    );
};

export default Gasto;
