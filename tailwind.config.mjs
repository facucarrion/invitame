/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#dcaf66'
      },
      fontFamily: {
        mallorga: ['Mallorga', 'sans-serif'],
        adelia: ['Adelia', 'sans-serif'],
        sans: ['Montserrat Variable', 'sans-serif']
      }
    }
  },
  plugins: []
}
