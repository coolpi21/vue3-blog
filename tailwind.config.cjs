/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,vue}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      height: {
        500: '500px'
      },
      gradientColorStops: {
        'blue-gray-800': '#37474f',
        'blue-gray-900': '#263238'
      },
      colors: {
        'blue-gray-900': 'rgb(38 50 56)',
        'blue-gray-500': '#607d8b1a'
      }
    },
    minHeight: {
      '1/2': '50vh',
      screen: '100vh'
    },
    borderWidths: {
      default: '1px',
      0: '0',
      2: '2px',
      4: '4px',
      8: '8px',
      12: '12px' // Add it here
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'blue-gray-50/50': '#eceff180'
    })
  },
  plugins: [require('daisyui')]
}
