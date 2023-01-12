const daisyui = require('daisyui');

module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                '0.5black': 'rgb(0,0,0,0.5)',
                'green-gray': 'rgb(186, 206, 193, 0.5);',
            },
        },
    },
    plugins: [daisyui],
    daisyui: {
        darkTheme: 'light',
    },
};