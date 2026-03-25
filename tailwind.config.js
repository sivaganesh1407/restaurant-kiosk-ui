/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['system-ui', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
