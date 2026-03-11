import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'violet-custom': '#1B1049',
        'indigo-custom': '#7A3CE3',
        'light-blue': '#49CAE4',
        'text-custom': '#1b10499b',
        'yellow-custom': '#FFBE0C',
        'ash-custom': '#E5E5E5'
      }
    },
  },
  plugins: [],
} satisfies Config;
