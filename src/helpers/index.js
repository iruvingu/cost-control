export const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
};

export const formatearFecha = (fecha) => {
    const fechaNueva = new Date(fecha);
    const opciones = {
        year: "numeric",
        month: "long",
        day: "2-digit",
    };
    return fechaNueva.toLocaleDateString("en-En", opciones);
};

export const OPTIONS = [
    { key: "", value: "-- All --" },
    { key: "earn", value: "Earn" },
    { key: "food", value: "Food" },
    { key: "house", value: "House" },
    { key: "miscellaneous", value: "Miscellaneous" },
    { key: "hobby", value: "Hobby" },
    { key: "health", value: "Health" },
    { key: "suscriptions", value: "Suscriptions" },
];
