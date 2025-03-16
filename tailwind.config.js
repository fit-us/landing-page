/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                primary: "#9D4EDD",
            },
            fontFamily: {
                SUIT: "var(--font-suit)",
            },
        },
    },
    plugins: [],
};
