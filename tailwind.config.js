const colors = require('tailwindcss/colors')
module.exports = {
    purge: [
        './pages/**/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                dark: colors.blueGray[800],
                light: '#fafafa',
                lime: colors.lime,
                coolgray: colors.coolGray,
                lightblue: colors.lightBlue,
                cyan: colors.cyan,
                teal: colors.teal,
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
