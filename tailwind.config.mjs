/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#dcaf66',
        helena: {
          primary: '#604531',
          font: '#e2c086',
          background: '#f9f5f1'
        }
      },
      fontFamily: {
        mallorga: ['Mallorga', 'sans-serif'],
        adelia: ['Adelia', 'sans-serif'],
        sans: ['Montserrat Variable', 'sans-serif'],
        audrey: ['Audrey', 'sans-serif'],
        bacalisties: ['Bacalisties', 'sans-serif']
      }
    }
  },
  plugins: []
}
