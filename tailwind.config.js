/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"],
    theme: {
        screens: {
            sm: "560px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },
        extend: {
            fontFamily: {
                sans: ["Josefin Sans", "sans-serif"],
                alata: ["alata"],
            },
        },
        colors: {
            veryDarkGrey: "hsl(0, 0%, 41%)",
            darkGrey: "hsl(0, 0%, 55%)",
            white: "#fff",
            black: "#000",
        },
    },
    plugins: [],
};
