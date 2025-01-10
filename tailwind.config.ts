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
