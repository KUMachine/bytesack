module.exports = {
    purge: [
        './pages/**/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                dark: '#222831',
                light: '#eeeeee',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
