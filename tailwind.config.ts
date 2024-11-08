import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "ecoplay-home": "bg-[url('./../assets/background.svg')]",
        "ecoplay-secondary": "bg-[url('./../assets/background.svg')]"
      },
      gridTemplateColumns: {
        '14': 'repeat(14, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
        '18': 'repeat(18, minmax(0, 1fr))',
      },
      animation: {
        'logo-start': 'start 1s linear',
      },
      keyframes: {
        start: {
          '0%' : { 'transform': 'translateY(-50%)', 'scale': '123%' },
          // '50%': { 'transform': 'translateY(25%)', 'scale': '100%'},
          '100%': { 'transform': 'translateY(0%)', 'scale': '100%'},
        }
      },
    },
  },
  plugins: [],
};
export default config;
