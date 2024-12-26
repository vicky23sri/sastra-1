/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js}",
        "./*.{html,js}",    
        "./services/**/*.{html,js}", 
    ],
    theme: {
        extend: {
        colors: {
            'brand-primary': '#b55206',
            'brand-secondary': '#f3e7d7',
            'primary':"#d4b483",
            'secondary': "#b55206",
            'tertiary': "#4c1204",
            'buttons': "#2c0e03",
        },
        fontFamily: {
            'sans': ['Inter', 'system-ui', 'sans-serif']
        },
        spacing: {
            '128': '32rem',
            '144': '36rem'
        }
        }
    },
    plugins: [
    ]
}
