import React from "react";
import Gasto from "./Gasto";

const ListadoGastos = ({
    gastos,
    setGastoEditar,
    eliminarGasto,
    filtro,
    gastosFiltrados,
}) => {
    return (
        <div className="mt-[5rem] w-11/12 max-w-7xl mx-auto">
            {filtro ? (
                <>
                    <h2 className="font-black text-gray-700">
                        {gastosFiltrados.length
                            ? "Expenses"
                            : "No expenses for this category"}
                    </h2>
                    {gastosFiltrados.map((gasto) => (
                        <Gasto
                            key={gasto.id}
                            gasto={gasto}
                            setGastoEditar={setGastoEditar}
                            eliminarGasto={eliminarGasto}
                        />
                    ))}
                </>
            ) : (
                <>
                    <h2 className="font-black text-gray-700">
                        {gastos.length ? "Expenses" : "No expenses yet"}
                    </h2>
                    {gastos.map((gasto) => (
                        <Gasto
                            key={gasto.id}
                            gasto={gasto}
                            setGastoEditar={setGastoEditar}
                            eliminarGasto={eliminarGasto}
                        />
                    ))}
                </>
            )}
        </div>
    );
};

export default ListadoGastos;
