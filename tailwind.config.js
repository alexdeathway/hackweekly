/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        container: {
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1152px',
                '2xl': '1280px',
            } 
        },
        extend: {
            colors: {
                primary: '#171717',
                darkBlue: '#001AFF'
            },

        },
    },
    plugins: [],
}