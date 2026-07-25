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
          primary: '#001b52',
          'primary-dark': '#00102e',
          'primary-light': '#244b85',
          secondary: '#00a8a8',
          'secondary-dark': '#007f7f',
          accent: '#f88000',
          'accent-2': '#880070',
          dark: '#1f2937',
          body: '#4a4a4a',
          muted: '#6c757d',
          'bg-alt': '#f5f7fa',
          'bg-soft': '#eef8f8',
          border: '#e6e9ef',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', '"Times New Roman"', 'serif'],
        body: ['Poppins', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      },
      borderRadius: {
        'ph-sm': '10px',
        ph: '16px',
        'ph-lg': '24px',
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
