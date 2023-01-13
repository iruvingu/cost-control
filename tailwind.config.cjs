/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            lato: ["Lato", "sans-serif"],
        },
        extend: {
            "gray-light": "#f5f5f5",
            "gray-dark": "#64748b",
        },
    },
    plugins: [],
};
