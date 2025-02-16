module.exports = {
  purge: [],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: ["Montserrrat", "sans-serif"],
      backdropBlur: {
        sm: '4px', 
        md: '8px',
        lg: '12px',
      },
    },
  },
  variants: {},
  plugins: [],
}