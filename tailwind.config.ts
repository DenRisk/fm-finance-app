import type {Config} from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            boxShadow: {
                'overlap': '-10px 0px 0px 0px var(--beige-100)',
                'dropdown': '0px 4px 24px rgba(0, 0, 0, 0.25)',
            },
            gridTemplateRows: {
                '3-minmax': 'minmax(0, 0.6fr) minmax(0, 0.55fr) minmax(0, 0.9fr)',
            },
            keyframes: {
                textLoader: {
                    '0%': {
                        boxShadow: '20px 0 rgba(255, 255, 255, 0), 40px 0 rgba(255, 255, 255, 0), 60px 0 rgba(255, 255, 255, 0), 80px 0 rgba(255, 255, 255, 0), 100px 0 rgba(255, 255, 255, 0)',
                    },
                    '20%': {
                        boxShadow: '20px 0 currentColor, 40px 0 rgba(255, 255, 255, 0), 60px 0 rgba(255, 255, 255, 0), 80px 0 rgba(255, 255, 255, 0), 100px 0 rgba(255, 255, 255, 0)',
                    },
                    '40%': {
                        boxShadow: '20px 0 currentColor, 40px 0 currentColor, 60px 0 rgba(255, 255, 255, 0), 80px 0 rgba(255, 255, 255, 0), 100px 0 rgba(255, 255, 255, 0)',
                    },
                    '60%': {
                        boxShadow: '20px 0 currentColor, 40px 0 currentColor, 60px 0 currentColor, 80px 0 rgba(255, 255, 255, 0), 100px 0 rgba(255, 255, 255, 0)',
                    },
                    '80%': {
                        boxShadow: '20px 0 currentColor, 40px 0 currentColor, 60px 0 currentColor, 80px 0 currentColor, 100px 0 rgba(255, 255, 255, 0)',
                    },
                    '100%': {
                        boxShadow: '20px 0 currentColor, 40px 0 currentColor, 60px 0 currentColor, 80px 0 currentColor, 100px 0 currentColor',
                    },
                },
            },
            animation: {
                textLoader: 'textLoader 1s linear infinite alternate',
            },
        },
        fontFamily: {
            sans: ['var(--font-sans)'],
        },
        colors: {
            transparent: 'transparent',
            beige: {
                500: 'var(--beige-500)',
                100: 'var(--beige-100)',
            },
            grey: {
                900: 'var(--grey-900)',
                500: 'var(--grey-500)',
                300: 'var(--grey-300)',
                100: 'var(--grey-100)',
            },
            primary: {
                green: 'var(--primary-green)',
                yellow: 'var(--primary-yellow)',
                cyan: 'var(--primary-cyan)',
                navy: 'var(--primary-navy)',
                red: 'var(--primary-red)',
                purple: 'var(--primary-purple)',
            },
            secondary: {
                purple: 'var(--secondary-purple)',
                turquoise: 'var(--secondary-turquoise)',
                brown: 'var(--secondary-brown)',
                magenta: 'var(--secondary-magenta)',
                blue: 'var(--secondary-blue)',
                navyGrey: 'var(--secondary-navy-grey)',
                armyGreen: 'var(--secondary-army-green)',
                gold: 'var(--secondary-gold)',
                orange: 'var(--secondary-orange)',
            },
            white: 'var(--white)',
            hover: {
                red: 'var(--hover-red)',
            },
        },
    },
    plugins: [],
} satisfies Config;
