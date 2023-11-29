/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        container: '1440px',
        contentContainer: '1140px',
        containerSmall: '1024px',
        containerXS: '768px'
      },
      screens: {
        sx: '320px',
        sm: '375px',
        sml: '500px',
        md: '667px',
        lg: '960px',
        lgl: '1024px',
        xl: '1280px'
      },
      boxShadow: {
        navbarShadow: '0 10px 10px 0 rgba(2,12,27,.7)'
      },
      colors: {
        bodyColor: '#0A192F',
        textGreen: '#64ffda',
        textLight: '#ccd6f6',
        textDark: '#8892b0',
        hoveColor: 'rgba(100,255,218, 0.1)',
      },
    },
  },
  plugins: [],
}
