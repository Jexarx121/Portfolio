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
      },
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        'cursor-blink': {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#aaabb8' },
        },
      },
      animation: {
        typing: 'typing 2s steps(30, end) forwards, cursor-blink 2s steps(30, end) forwards',
        'cursor-blink': 'cursor-blink 1s steps(1, end) infinite',
      },
    },
  },
  plugins: [],
};
export default config;
