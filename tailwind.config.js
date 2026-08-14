/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  theme: {
    // Matched to Bootstrap 5's default breakpoints so responsive behavior
    // stays identical to the Laravel/Bootstrap frontend.
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
    },
    container: {
      center: true,
      padding: '0.75rem',
      // Matched to Bootstrap's .container max-widths per breakpoint.
      screens: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
        '2xl': '1320px',
      },
    },
    extend: {
      colors: {
        ph: {
          primary: '#00a5b0',
          'primary-dark': '#017a83',
          'primary-light': 'rgba(46, 118, 123, 1)',
          secondary: '#0a8f99',
          'secondary-dark': '#067077',
          accent: '#fe9507',
          'accent-2': '#b80a74',
          dark: '#0e2e33',
          body: '#4a4a4a',
          muted: '#6c757d',
          'bg-alt': '#f4f8f8',
          'bg-soft': '#e9f6f7',
          border: '#e2e9ea',
        },
      },
      fontFamily: {
        heading: ['Poppins', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        body: ['Poppins', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      },
      borderRadius: {
        'ph-sm': '10px',
        ph: '16px',
        'ph-lg': '24px',
        'ph-xl': '32px',
      },
      boxShadow: {
        'ph-sm': '0 4px 14px rgba(0, 27, 82, 0.06)',
        ph: '0 10px 30px rgba(0, 27, 82, 0.09)',
        'ph-lg': '0 20px 50px rgba(0, 27, 82, 0.14)',
      },
    },
  },
  plugins: [],
};
