module.exports = {
  darkMode : 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],  
  theme: {
    extend: {
      colors:{
        primary: '#FBF0F0',
        secondary: '#DFD3D3',
        tertiary: '#B8B0B0',
        quaternary: '#ada6a6',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
