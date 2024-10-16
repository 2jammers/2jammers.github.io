/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
        'inter': ["Inter", "sans-serif"]
    },
    fontSize: {
        'title': '42px',
        'heading': '28px',
        'item': '16px',
        'text': '16px',
    },
    colors: {
        'background': '#0c0c0c',
        'container': '#070707',
        'white': '#ffffff',
        'divider': '#232323',
        'link': '#93ceff'
    },
    extend: {},
  },
  plugins: [],
}

