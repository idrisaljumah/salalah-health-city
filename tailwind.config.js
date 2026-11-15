/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ['./index.html', './*.{ts,tsx}', './components/**/*.{ts,tsx}', './pages/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        moss: token('moss'),
        fern: token('fern'),
        leaf: token('leaf'),
        sage: token('sage'),
        accent: token('accent'),
        alert: token('alert'),
        'text-primary': token('text-primary'),
        'text-secondary': token('text-secondary'),
        'surface-primary': token('surface-primary'),
        'surface-secondary': token('surface-secondary'),
        'border-color': token('border-color'),
        // Greys are tinted green and flip in high-contrast mode.
        gray: {
          50: token('g50'), 100: token('g100'), 200: token('g200'), 300: token('g300'), 400: token('g400'),
          500: token('g500'), 600: token('g600'), 700: token('g700'), 800: token('g800'), 900: token('g900'),
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Tajawal', 'sans-serif'],
        heading: ['Brygada 1918', 'Amiri', 'serif'],
      },
      boxShadow: {
        sm: '0 1px 2px rgb(44 58 34 / 0.06)',
        DEFAULT: '0 2px 8px -2px rgb(44 58 34 / 0.10)',
        md: '0 8px 20px -10px rgb(44 58 34 / 0.18)',
        lg: '0 16px 32px -16px rgb(44 58 34 / 0.24)',
        xl: '0 24px 48px -20px rgb(44 58 34 / 0.28)',
        '2xl': '0 32px 64px -24px rgb(44 58 34 / 0.35)',
      },
    },
  },
  plugins: [],
};
