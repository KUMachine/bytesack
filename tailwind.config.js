const colors = require('tailwindcss/colors')
module.exports = {
    purge: [
        './pages/**/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class', // or 'media' or 'class',
    theme: {
        extend: {
            colors: {
                dark: colors.gray[800],
                'dark-blue': colors.blueGray[800],
                'dark-cool': colors.coolGray[800],
                light: '#fafafa',
                snow: '#f5fefd',
                rice: '#faf5ef',
                lime: colors.lime,
                coolgray: colors.coolGray,
                lightblue: colors.lightBlue,
                cyan: colors.cyan,
                teal: colors.teal,
                emerald: colors.emerald,
                orange: colors.orange,
                purple: colors.pueple,
                rose: colors.rose,
            },
            boxShadow: {
                inner: 'inset 0 4px 6px 0 rgba(0,0,0, 0.1)',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
