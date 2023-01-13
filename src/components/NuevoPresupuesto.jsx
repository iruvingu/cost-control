import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({
    presupuesto,
    setPresupuesto,
    setIsValidPresupuesto,
}) => {
    const [mensaje, setMensaje] = useState("");

    const handlePresupuesto = (e) => {
        e.preventDefault();

        if (!presupuesto || presupuesto < 0) {
            setMensaje("Not a valid budget");
            return;
        }
        setMensaje("");
        setIsValidPresupuesto(true);
    };

    return (
        <div className="w-11/12 max-w-7xl mx-auto flex justify-between items-center -mt-16 bg-white p-16 translate-y-20 rounded-3xl shadow-xl">
            <form
                onSubmit={handlePresupuesto}
                className="w-11/12 mx-auto py-[10rem] md:py-20 md:w-[60rem]"
            >
                <div className="grid mb-8">
                    <label className="text-center mb-8 text-3xl text-blue-600">
                        Set Budget
                    </label>

                    <input
                        className="text-3xl text-center border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        type="number"
                        placeholder="Añade tu Presupuesto"
                        value={presupuesto}
                        onChange={(e) => setPresupuesto(Number(e.target.value))}
                    />
                </div>

                <input
                    className="bg-blue-700 p-4 text-center mt-8 text-white uppercase text-3xl w-full ease-in duration-300 hover:cursor-pointer hover:bg-blue-900 rounded-md md:block md:pt-4 md:px-20"
                    type="submit"
                    value="Add"
                />

                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            </form>
        </div>
    );
};

export default NuevoPresupuesto;
