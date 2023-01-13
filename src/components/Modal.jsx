import { useState, useEffect } from "react";
import Mensaje from "./Mensaje";
import CerrarBtn from "../img/cerrar.svg";

import { OPTIONS } from "../helpers";

const Modal = ({
    setModal,
    animarModal,
    setAnimarModal,
    guardarGasto,
    gastoEditar,
    setGastoEditar,
}) => {
    const [mensaje, setMensaje] = useState("");
    const [nombre, setNombre] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [categoria, setCategoria] = useState("");
    const [fecha, setFecha] = useState("");
    const [id, setId] = useState("");

    useEffect(() => {
        if (Object.keys(gastoEditar).length > 0) {
            setNombre(gastoEditar.nombre);
            setCantidad(gastoEditar.cantidad);
            setCategoria(gastoEditar.categoria);
            setId(gastoEditar.id);
            setFecha(gastoEditar.fecha);
        }
    }, []);

    const ocultarModal = () => {
        setAnimarModal(false);
        setGastoEditar({});
        setTimeout(() => {
            setModal(false);
        }, 500);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([nombre, cantidad, categoria].includes("")) {
            setMensaje("Todos los campos son obligatorios");

            setTimeout(() => {
                setMensaje("");
            }, 3000);
            return;
        }

        guardarGasto({ nombre, cantidad, categoria, id, fecha });
    };

    return (
        <div className="absolute bg-slate-800 inset-0 md:overflow-hidden md:flex">
            <div className="absolute right-12 top-12 w-12 h-12">
                <img
                    className="w-full"
                    src={CerrarBtn}
                    alt="cerrar modal"
                    onClick={ocultarModal}
                />
            </div>

            <form
                onSubmit={handleSubmit}
                className={`mx-8 md:mx-auto md:py-40 md:w-[60rem] py-20 md:max-w-xl transition-all duration-300 ease-in ${
                    animarModal ? "opacity-100 relative" : "opacity-0"
                }`}
            >
                <legend className="text-5xl text-center block uppercase text-white mb-16 pb-4 border-b-2 border-b-blue-700 border-solid">
                    {gastoEditar.nombre ? "Editar Gasto" : "Nuevo Gasto"}
                </legend>
                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

                <div className="grid mb-8">
                    <label
                        className="text-left text-3xl text-white"
                        htmlFor="nombre"
                    >
                        Expense Name
                    </label>

                    <input
                        className="text-3xl text-center border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md bg-gray-200"
                        id="nombre"
                        type="text"
                        placeholder="Name"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>

                <div className="grid mb-8">
                    <label
                        className="text-left text-3xl text-white"
                        htmlFor="cantidad"
                    >
                        Quantity
                    </label>

                    <input
                        className="text-3xl text-center border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md bg-gray-200"
                        id="cantidad"
                        type="number"
                        placeholder="Add quantity"
                        value={cantidad}
                        onChange={(e) => setCantidad(Number(e.target.value))}
                    />
                </div>
                <div className="grid mb-8">
                    <label
                        className="text-left text-3xl text-white mb-8"
                        htmlFor="categoria"
                    >
                        Category
                    </label>

                    <select
                        className="flex p-4 border-none rounded-xl text-center bg-gray-200 text-gray-500"
                        id="categoria"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                    >
                        {OPTIONS.map(({ key, value }) => (
                            <option key={key} value={key}>
                                {value}
                            </option>
                        ))}
                    </select>
                </div>

                <input
                    className="bg-blue-700 p-4 text-center mt-8 text-white uppercase text-3xl w-full ease-in duration-300 hover:cursor-pointer hover:bg-blue-900 rounded-md md:block md:pt-4 md:px-20"
                    type="submit"
                    value={
                        gastoEditar.nombre ? "Guardar Cambios" : "Añadir Gasto"
                    }
                />
            </form>
        </div>
    );
};

export default Modal;
