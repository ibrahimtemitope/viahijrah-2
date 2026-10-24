/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FCFBF8',
          100: '#FAF8F3',
          200: '#F3EFE6',
          300: '#E7E1D3',
          400: '#D6CEBC',
        },
        sage: {
          50: '#F2F6F3',
          100: '#E4EDE7',
          200: '#C9DBD0',
          600: '#356350',
          700: '#274E3E',
          800: '#1E3F32',
          900: '#163026',
        },
        navy: {
          700: '#2C3E5A',
          800: '#1B2B44',
          900: '#122033',
          950: '#0C1624',
        },
        champagne: {
          300: '#DFC99B',
          400: '#CEB27B',
          500: '#B8995E',
          600: '#967940',
        },
        ink: {
          DEFAULT: '#162232',
          soft: '#434E5B',
          muted: '#6B7480',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        warm: '0 20px 50px -24px rgba(18, 32, 51, 0.08)',
        'warm-md': '0 24px 60px -28px rgba(18, 32, 51, 0.13)',
        dock: '0 12px 36px -8px rgba(18, 32, 51, 0.16)',
      },
    },
  },
  plugins: [],
};
