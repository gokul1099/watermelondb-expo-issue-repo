/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.{ts,tsx,js,jsx}", "./src/app/**/*.{tsx,ts,jsx,js}", "./src/app/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#581845',
        secondary: '#FCF3F9',
        accent: "#2D0F38"

      },
      borderRadius: {
        xxl: '20px',
        xl: '16px',
        lg: '10px',
        md: '8px',
        sm: '6px',
        xs: '4px',
      }
    }
  },
  plugins: []
}

