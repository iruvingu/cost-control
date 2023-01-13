import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ControlPresupuesto = ({
    gastos,
    setGastos,
    presupuesto,
    setPresupuesto,
    setIsValidPresupuesto,
}) => {
    const [porcentaje, setPorcentaje] = useState(10);
    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);

    useEffect(() => {
        const totalGastado = gastos.reduce(
            (total, gasto) => gasto.cantidad + total,
            0
        );
        const totalDisponible = presupuesto - totalGastado;

        // Calcular el porcentaje gastado
        const nuevoPorcentaje = (
            ((presupuesto - totalDisponible) / presupuesto) *
            100
        ).toFixed(2);

        setDisponible(totalDisponible);
        setGastado(totalGastado);
        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje);
        }, 1500);
    }, [gastos]);

    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        });
    };

    const handleResetApp = () => {
        const resultado = confirm("Do you wish to reset budget and expenses?");

        if (resultado) {
            setGastos([]);
            setPresupuesto(0);
            setIsValidPresupuesto(false);
        }
    };

    return (
        <div className="w-11/12 max-w-7xl mx-auto flex justify-between items-center -mt-16 bg-white p-16 translate-y-20 rounded-3xl shadow-xl flex-col md:flex-row md:items-center md:justify-center">
            <div>
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor: porcentaje > 100 ? "#DC2626" : "#3B82F6",
                        trailColor: "#F5F5F5",
                        textColor: porcentaje > 100 ? "#DC2626" : "#3B82F6",
                    })}
                    value={porcentaje}
                    text={`${porcentaje}%`}
                />
            </div>

            <div className="w-full mt-12 md:mt-0 md:mx-auto md:w-auto">
                <p className="font-normal text-3xl text-gray-800 text-center ">
                    <span>Budget: </span>
                    {formatearCantidad(presupuesto)}
                </p>

                <p
                    className={`font-normal text-3xl text-gray-800 text-center ${
                        disponible < 0 ? "text-red-700" : ""
                    }`}
                >
                    <span className="font-black text-blue-600">
                        Available:{" "}
                    </span>
                    {formatearCantidad(disponible)}
                </p>

                <p className="font-normal text-3xl text-gray-800 text-center ">
                    <span>Spent: </span>
                    {formatearCantidad(gastado)}
                </p>

                <button
                    className="p-4 mt-4 text-center font-black w-full bg-red-400 text-white uppercase rounded-lg transition-colors duration-300 hover:bg-red-800 hover:cursor-pointer"
                    type="button"
                    onClick={handleResetApp}
                >
                    Reset App
                </button>
            </div>
        </div>
    );
};

export default ControlPresupuesto;
