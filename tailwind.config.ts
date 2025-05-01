import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      background: '#121212',
      text: '#d1d1d1',
      primary: '#5a89b7',
      accent: '#84b9d4',
      secondary: '#2a4e7c',
      highlight: '#e0e0e0',
      chevron: '#FFD247',
    },
    fontFamily: {
      heading: ['Orbitron', 'sans-serif'],
      body: ['Roboto', 'sans-serif'],
      subheading: ['Rajdhani', 'sans-serif'],
      accent: ['Share Tech Mono', 'sans-serif'],
    },
    extend: {},
  },

  plugins: [typography],
} satisfies Config;
