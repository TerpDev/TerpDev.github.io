/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
  theme: {
    extend: {
        colors: {
            'codes1': '#BCDCAD',
            'codes2': '#86AF8F',
            'codes3': '#648381',
            'codes4': '#FF0',
            Button: '#15284B',

            }
        },
    },
  plugins: [],
}

