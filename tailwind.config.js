/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat'],
      },
      boxShadow: {
        // 'custom': '0px 8px 24px rgba(0, 0, 0, 0.3), inset 0px 5px 10px rgba(183, 183, 255, 0.26), inset 0px -10px 20px rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
}

