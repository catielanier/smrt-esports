import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    colors: {
      background: '#121212',
      text: '#d1d1d1',
      primary: '#5a89b7',
      accent: '#84b9d4',
      secondary: '#2a4e7c',
      highlight: '#e0e0e0',
    },
    extend: {}
  },

  plugins: [typography]
} satisfies Config;
