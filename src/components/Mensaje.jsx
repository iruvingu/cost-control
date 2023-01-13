import React from "react";

const Mensaje = ({ children, tipo }) => {
    return (
        <div
            className={`py-4 px-20 max-w-5xl mx-auto mt-8 font-black uppercase text-3xl text-center mb-8 ${
                tipo === "error"
                    ? "text-red-800 border-l-red-800 bg-white border-l-8"
                    : ""
            }`}
        >
            {children}
        </div>
    );
};

export default Mensaje;
