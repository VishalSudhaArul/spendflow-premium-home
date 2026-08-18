/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        bg: '#F7F8FC',
        surface: '#FFFFFF',
        ink: '#111827',
        'ink-soft': '#667085',
        line: '#E5E7EB',
        accent: {
          DEFAULT: '#635BFF',
          soft: '#EEF2FF',
          deep: '#4338CA',
        },
        success: '#16A34A',
      },
      maxWidth: {
        '8xl': '80rem',
        '9xl': '88rem',
      },
    },
  },
  plugins: [],
};
