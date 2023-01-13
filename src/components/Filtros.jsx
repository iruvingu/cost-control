import { useState, useEffect } from "react";
import { OPTIONS } from "../helpers";

const Filtros = ({ filtro, setFiltro }) => {
    return (
        <div className="bg-white p-16 rounded-3xl shadow-xl w-11/12 max-w-7xl mx-auto">
            <form>
                <div className="flex items-center gap-8">
                    <label className="font-black text-gray-700 text-5xl">
                        Filter Expenses
                    </label>
                    <select
                        className="flex p-4 border-none rounded-2xl text-center bg-gray-300"
                        value={filtro}
                        onChange={(e) => setFiltro(e.target.value)}
                    >
                        {OPTIONS.map(({ key, value }) => (
                            <option key={key} value={key}>
                                {value}
                            </option>
                        ))}
                    </select>
                </div>
            </form>
        </div>
    );
};

export default Filtros;
