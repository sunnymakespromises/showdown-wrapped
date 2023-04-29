/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'main-thin': ['var(--font-main-thin)', ...defaultTheme.fontFamily.sans],
                'main-thin-italic': ['var(--font-main-thin-italic)', ...defaultTheme.fontFamily.sans],
                'main-extra-light': ['var(--font-main-extra-light)', ...defaultTheme.fontFamily.sans],
                'main-extra-light-italic': ['var(--font-main-extra-light-italic)', ...defaultTheme.fontFamily.sans],
                'main-light': ['var(--font-main-light)', ...defaultTheme.fontFamily.sans],
                'main-light-italic': ['var(--font-main-light-italic)', ...defaultTheme.fontFamily.sans],
                'main-regular': ['var(--font-main-regular)', ...defaultTheme.fontFamily.sans],
                'main-regular-italic': ['var(--font-main-regular-italic)', ...defaultTheme.fontFamily.sans],
                'main': ['var(--font-main)', ...defaultTheme.fontFamily.sans],
                'main-italic': ['var(--font-main-italic)', ...defaultTheme.fontFamily.sans],
                'main-bold': ['var(--font-main-bold)', ...defaultTheme.fontFamily.sans],
                'main-bold-italic': ['var(--font-main-bold-italic)', ...defaultTheme.fontFamily.sans],
                'main-black': ['var(--font-main-black)', ...defaultTheme.fontFamily.sans],
                'main-black-italic': ['var(--font-main-black-italic)', ...defaultTheme.fontFamily.sans]
            },
            colors: {
                transparent: 'transparent',
                base: {
                    0: '#fffdf7',
                    100: '#fffaeb'
                },
                reverse: {
                    0: '#202020',
                    100: '#141414'
                },
                primary: {
                    0: '#fdd85d',
                    100: '#fdc921'
                },
                secondary: {
                    0: '#99d6ea',
                    100: '#78C8E3'
                },
                tertiary: {
                    0: '#F14156',
                    100: '#EE1B34'
                },
                quarternary: {
                    0: '#80ed99',
                    100: '#5EE87E'
                }
            }
        },
    },
    plugins: [],
}