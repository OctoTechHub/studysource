/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navbarColor: '#144b66', 
        footerColor: '#144b66',
        'picton-blue': {
          '50': '#f1f9fe',
          '100': '#e1f2fd',
          '200': '#bde4fa',
          '300': '#83d0f6',
          '400': '#3ab5ee',
          '500': '#199fde',
          '600': '#0c7fbd',
          '700': '#0b6699',
          '800': '#0d567f',
          '900': '#114869',
          '950': '#0b2d46',
        },
      }
    },
  },
  plugins: [],
}

// #39b2ea