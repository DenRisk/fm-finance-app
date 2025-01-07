import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
      },
      colors: {
        beige: {
          500: 'var(--beige-500)',
          100: 'var(--beige-100)',
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
      },
    },
  },
  plugins: [],
} satisfies Config;
