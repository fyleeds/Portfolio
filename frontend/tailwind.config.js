/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/*.{html,js}",
        "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        extend: {
            minHeight: {
                '1/2': '50%',
            },
            screens: {
                '3xl': '2000px',
            },
            colors: {
                primary: '#202225',
                secondary: '5865f2',
                gray: {
                    900: '#202225',
                    800: '#2f3136',
                    700: '#36393f',
                    600: '#4f545c',
                    400: '#d4d7dc',
                    300: '#e3e5e8',
                    200: '#ebedef',
                    100: '#f2f3f5',
                },
                'custom':'#D45769',
                'customyellow' : '#E69D45',
                'customorange' : '#EAB595',
                'customlightblue' : '#A0ECFF',
                'customdarkblue' : '#A0C0FF',
                'customdarkerblue' : '#015C92',
                'custommiddleblue' : '#2D82B5',
                'customsky' : '#B0C9E5',
                'custombluepurple' : '#6F5F90',
                'customgrayblue': '#758EB7',
                'custompink': '#FF7B89',
                'customgraylightblue':'#A5CAD2',
                'charcoal':'#1B1B1B',
                'night':'#0C090A',
                'gun':'#2C3539',
                'rose':'#DB7093',
            },
            
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'title': "url('../pics/gradient.jpg')",
            },

            fontFamily: {
                'secular':['Secular One', 'sans-serif'],
                'domine':['Domine', 'serif'],
                'bebas':['Bebas Neue', 'cursive'],
                'oswald': ['Oswald', 'sans-serif'],
                'openSans': ['Open Sans', 'sans-serif'],
                'greatvibes':['Great Vibes', 'cursive'],
                'yanice':["Yanice", "regular"],
                'goldleaf':["Goldleaf","bold"],
                'uniser':["UniserBold","bold"],
                'landasans':["LandasansMedium","medium"],
                'ubuntu':['Ubuntu', "sans-serif"],

            },
        },
    },
    plugins: [
        //'@tailwindcss/jit': {},
        //require('flowbite/plugin'),
        //require('tailwindcss-textshadow'),
    ],
}
