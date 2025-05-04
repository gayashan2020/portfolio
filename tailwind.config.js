module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}'
    ],
    darkMode: 'className',
    theme: {
      extend: {
        colors: {
          primary: '#3b82f6',
          'primary-dark': '#2563eb',
          dark: '#1e293b',
          light: '#f8fafc'
        },
        fontFamily: {
          inter: ['var(--font-inter)']
        }
      },
    },
    plugins: [],
  }