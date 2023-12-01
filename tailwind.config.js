/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
     backgroundImage:{
      'fika':'linear-gradient(  180deg, rgba(4, 21, 45, 0) 0%,#172d04 79.17%)',
      'gradientForButton':'linear-gradient(98.37deg,#3bb13e 0.99%,#ae0000 100%)'
      ,'gradientForswitch':'linear-gradient(98.37deg,#3bb13e 0.99%,#ae0000 100%)'
    },
     transitionProperty: {
      'width': 'width'
    },
    borderRadius: {
      'custom': '15px',
    }

    },
  },
  plugins: [],
}

