/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ['var(--font-raleway)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-roboto-serif)', 'ui-serif', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
